

function AppMenu(dashObj) {
  if (document.getElementById('lab-app-menu')) {
    document.getElementById('lab-app-menu').remove()
  } else {
    const userLSG = lab_local_storage_object('global')
    const lngData = dashObj.lngData
    let selectedMenu = dashObj.selectedMenu
    if (!selectedMenu) selectedMenu = 'backup'
    if (userLSG.ctx == 'Laboranth') {
      userLSG.app = dashObj.selectedApp
      userLSG.section = 'home'
    }

    socket.emit('getAppData', userLSG, res => {
      sectionElementsObject = res
      const menuWrap = lab_design_system('div', 'app-menu-wrap', document.querySelector('body'), '', '', ['appMenu', 'wrap'])
      const menu = lab_design_system('div', 'app-menu', document.querySelector('body'), '', '', ['appMenu', 'menu'])
      const side = lab_design_system('div', 'app-menu-side', menu, '', '', ['appMenu', 'side'])
      const box = lab_design_system('div', 'app-menu-box', menu, '', '', ['appMenu', 'box'])

      let activeSlide;

      const sideButtons = {
        'backup': lngData.settings,
        'css': 'CSS',
        'js': 'JS',
        'media': lngData.mediatheque,
        'database': lngData.sql_databases,
        'deploy': lngData.deployment
      }

      const settings = {
        'general': 'General',
        'versioning': lngData.versioning,
        'pages_management': lngData.pages_management,
        'libraries': lngData.libraries,
        'collaborative_mode': lngData.collaborative_mode,
        'svg_fragmentation': lngData.svg_fragmentation,
        'ephemeral_sharing': lngData.ephemeral_sharing
      }

      const git_settings = {
        'credentials': lngData.credentials,
        'delete': lngData.delete,
        'create': lngData.create,
        'git_push': lngData.git_push
      }

      const server = {
        'lab_user_personnal_server': lngData.personnal_distant_server,
        'laboranth_remote_server': lngData.laboranth_remote_server,
        "laboranth_deploy_git": "Git",
        "laboranth_deploy_zip": "Zip"
      }

      Object.keys(sideButtons).forEach(e => {
        const btn = lab_design_system('button', `app-menu-btn-${e}`, side, '', '', ['appMenu', 'sideBtn'])
        const icon = lab_design_system('img', `app-menu-btn-icon-${e}`, btn)
        const span = lab_design_system('span', `app-menu-btn-span-${e}`, btn, sideButtons[e])
        icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${e}.svg`)

        btn.addEventListener('click', () => {
          if (activeSlide != e) {
            const last = document.querySelector('.app-menu-active')
            if (last) {
              last.classList.remove('app-menu-active')
              last.style.color = '#fff'
              last.style.background = '#3C4CA6'
              let img = last.querySelector('img')
              img.setAttribute('src', img.src.replace('-white', ''))
            }
            RenderBox(e)
          }
        })
      })

      function RenderBox(slide = 'backup') {
        box.innerHTML = ''
        activeSlide = slide
        let btn = document.getElementById(`lab-app-menu-btn-${slide}`)
        btn.classList.add('app-menu-active')
        btn.style.color = '#3C4CA6'
        btn.style.background = '#fff'
        btn.querySelector('img').setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${slide}-white.svg`)

        if (slide == 'backup') {
          const wrapper = lab_design_system('div', 'app-menu-wrapper', box, '', 'scrollable', ['appMenu', 'wrapper'])
          dropDown(settings, settings.general, 'settings', (e) => Settings(e), wrapper)
          const setWrap = lab_design_system('div', 'setWrap', wrapper, '', '', ['appMenu', 'setWrap'])

          function Settings(name = 'general') {
            setWrap.innerHTML = ''
            if (name == 'versioning') {
              const userLSG = lab_local_storage_object('global')
              if (userLSG.ctx == 'Laboranth') {
                userLSG.app = dashObj.selectedApp
                userLSG.section = 'home'
              }
              socket.emit("getUserBackups", userLSG, b => {
                let backupObj = b
                let selectedBcp

                function WriteUserBackups() {
                  setWrap.innerHTML = ''
                  const heading = lab_design_system('h6', 'manual-backup', setWrap, lngData.manual_management, '', ['appMenu', 'heading'])
                  const row = lab_design_system('div', 'backup', setWrap, '', '', ['appMenu', 'execute'])
                  row.style.position = 'relative'
                  row.style.zIndex = 2
                  const create = lab_design_system('button', `c-backup`, row, lngData.create, '', ['buttons', 'action'])
                  create.style.width = 'fit-content'

                  create.addEventListener('click', e => {
                    const now = new Date(Date.now())
                    const year = now.getFullYear()
                    const month = (now.getMonth() + 1).toString().padStart(2, '0')
                    const day = now.getDate().toString().padStart(2, '0')
                    const hours = now.getHours().toString().padStart(2, '0')
                    const minutes = now.getMinutes().toString().padStart(2, '0')
                    userLSG.timeStamp = `${year}_${month}_${day}_${hours}_${minutes}`
                    socket.emit("makeAppBackup", userLSG, res => {
                      if (res.success) {
                        if (!backupObj.manual || backupObj.manual.length == 0) {
                          backupObj.manual = [userLSG.timeStamp]
                          selectedBcp = userLSG.timeStamp
                          WriteUserBackups()
                        } else {
                          backupObj.manual.push(userLSG.timeStamp)
                          selectedBcp = userLSG.timeStamp
                          WriteUserBackups()
                        }
                      }
                    })
                  })

                  if (backupObj.manual && backupObj.manual.length > 0) {
                    const text = lab_design_system('span', `row-text`, row, lngData.load_a_previous_version)
                    let formatBackupDate
                    if (!selectedBcp) {
                      formatBackupDate = backupObj.manual[0].split('_')
                    } else {
                      formatBackupDate = selectedBcp.split('_')
                    }

                    const tempObj = {}

                    let originalBackupName

                    backupObj.manual.map(bcp => {
                      originalBackupName = bcp
                      let variation = bcp.split('_')
                      tempObj[bcp] = variation[0] + '/' + variation[1] + '/' + variation[2] + " " + variation[3] + ":" + variation[4]
                    })

                    const previous = dropDown(tempObj, formatBackupDate[0] + '/' + formatBackupDate[1] + '/' + formatBackupDate[2] + " " + formatBackupDate[3] + ":" + formatBackupDate[4], 'previous-backup', (e) => { originalBackupName = e }, row)
                    previous.wrap.style.maxWidth = '200px'

                    if (userLSG.ctx == "Applications") {
                      const upload = lab_design_system('button', `u-backup`, row, lngData.load, '', ['buttons', 'action'])
                      upload.style.width = 'fit-content'
                      upload.addEventListener('click', e => {
                        const userLSG = lab_local_storage_object('global')
                        userLSG.backupDate = originalBackupName

                        socket.emit('eraseByBackup', userLSG)
                      })
                    }
                  }

                  const auto = lab_design_system('h6', 'auto-backup', setWrap, lngData.automatic_management, '', ['appMenu', 'heading'])
                  const autoRow = lab_design_system('div', 'a-backup', setWrap, '', '', ['appMenu', 'execute'])
                  const autoBack = dropDown(b.auto, b.auto[0], 'previous-backup-auto', null, autoRow)
                  autoBack.wrap.style.maxWidth = '200px'


                  if (userLSG.ctx == "Applications") {
                    const uploadAuto = lab_design_system('button', `u-backup-a`, autoRow, lngData.load, '', ['buttons', 'action'])
                    uploadAuto.style.width = 'fit-content'

                    uploadAuto.addEventListener('click', e => {
                      const userLSG = lab_local_storage_object('global')
                      userLSG.auto = true
                      userLSG.day = autoBack.text.innerHTML
                      socket.emit('eraseByBackup', userLSG)
                    })
                  }
                  lab_fade_in_recursively(box, 0.3)
                }
                WriteUserBackups()
              })
            }
            else if (name == 'general') {
              const heading = lab_design_system('h6', 'app-menu-heading', setWrap, lngData.settings, '', ['appMenu', 'heading'])

              const imgBox = lab_design_system('div', 'image-box', setWrap)
              imgBox.style.height = '160px'
              imgBox.style.maxWidth = '250px'
              imgBox.style.borderRadius = '10px'
              imgBox.style.background = '#ddd'
              imgBox.style.overflow = 'hidden'
              imgBox.style.position = 'relative'

              const img = lab_design_system('img', 'preview-img', imgBox)
              img.style.width = '100%'
              img.style.height = '100%'

              const imgInputLabel = lab_design_system('label', 'preview-input-label', imgBox)
              const imgInput = lab_design_system('input', 'preview-input', imgInputLabel)

              imgInput.setAttribute('type', 'file')
              imgInput.style.width = '0'

              imgInput.setAttribute('for', 'lab-preview-input')
              imgInputLabel.style.width = '100%'
              imgInputLabel.style.height = '100%'
              imgInputLabel.style.opacity = 0
              imgInputLabel.style.position = 'absolute'
              imgInputLabel.style.top = 0
              imgInputLabel.style.left = 0
              imgInputLabel.style.cursor = 'pointer'

              imgInput.addEventListener('change', (e) => {
                const fileInfo = e.target.files[0]
                img.setAttribute('src', URL.createObjectURL(fileInfo))
                //Some socket
              })
              const bottom = lab_design_system('div', `bottom`, setWrap, '', '', ['appMenu', 'execute'])
              const input = Input('act-name', bottom, 'new app name', userLSG.app)
              input.style.minWidth = '220px'
              input.style.width = 'fit-content'

              const btn = lab_design_system('button', 'creare-page', bottom, lngData.save, '', ['buttons', 'action'])
              btn.style.width = 'fit-content'
              btn.addEventListener('click', (e) => {
                e.preventDefault()
                const regex = /^[A-Za-z0-9-._~]+$/
                if (input.value && regex.test(input.value)) {
                  //Some socket
                } else alertUser(lngData.column_name_cannot_be_empty)
              })
            }
            else if (name == 'pages_management') {
              const heading = lab_design_system('h6', 'app-menu-heading', setWrap, lngData.pages_management, '', ['appMenu', 'heading'])
              const scrollList = lab_design_system('div', 'scrollList', setWrap, '', 'scrollable', ['appMenu', 'scrollList'])
              const pList = lab_design_system('div', 'app-menu-act', scrollList, '', '', ['appMenu', 'DBList'])
              sectionElementsObject.sections.forEach((e, index) => {
                const pageLink = lab_design_system('div', `page-link-${index}`, pList, '', '', ['appMenu', 'db'])
                const name = lab_design_system('span', `page-name-${index}`, pageLink, e, '', ['appMenu', 'link'])
                name.style.width = '100%'
                name.style.cursor = 'pointer'
                name.addEventListener('click', () => {
                  lab_local_storage_object_update('global', { "section": e })
                  window.open(window.location.protocol + "//" + window.location.host + "/" + userLSG.app + "/" + e, "_self")
                })

                const del = lab_design_system('button', `db-del-btn-${index}`, pageLink, '', '', ['appMenu', 'deleteBtn'])
                const delIcon = lab_design_system('img', `del-btn-icon-${index}`, del, '', '', ['design', 'icon'])
                delIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/close.svg')
                del.addEventListener('click', () => {
                  let removeSectionObject = {
                    app: userLSG.app,
                    uid: userLSG.uid,
                    lng: userLSG.lng,
                    removingSection: e
                  }
                  if (e == sectionElementsObject.section) {
                    removeSectionObject.deleteCurrent = true
                  } else {
                    removeSectionObject.deleteCurrent = false
                    pageLink.remove()
                  }
                  socket.emit('removeSection', removeSectionObject)
                })

              })
              const bottom = lab_design_system('div', `bottom`, setWrap, '', '', ['appMenu', 'execute'])
              const input = Input('act-name', bottom)
              input.style.minWidth = '220px'
              input.style.width = 'fit-content'
              const btn = lab_design_system('button', 'creare-page', bottom, lngData.add, '', ['buttons', 'action'])
              btn.style.width = 'fit-content'
              btn.addEventListener('click', (e) => {
                e.preventDefault()
                const regex = /^[A-Za-z0-9-._~]+$/
                if (input.value && regex.test(input.value)) {
                  const lab_user_current_config = lab_local_storage_object('global')

                  let addSectionObject = {
                    app: lab_user_current_config.app,
                    uid: lab_user_current_config.uid,
                    lng: lab_user_current_config.lng,
                    addingSection: input.value
                  }

                  socket.emit('addNewSection', addSectionObject)

                } else alertUser(lngData.column_name_cannot_be_empty)
              })
            }
            else if (name == 'libraries') {
              const heading = lab_design_system('h6', 'app-menu-heading', setWrap, lngData.libraries, '', ['appMenu', 'heading'])
              const scrollList = lab_design_system('div', 'scrollList', setWrap, '', 'scrollable', ['appMenu', 'scrollList'])
              const libList = lab_design_system('div', 'app-menu-act', scrollList, '', '', ['appMenu', 'DBList'])
              sectionElementsObject.configuration.scripts.forEach((e, index) => {
                const pageLink = lab_design_system('div', `library-link-${index}`, libList, '', '', ['appMenu', 'db'])
                const name = lab_design_system('span', `library-name-${index}`, pageLink, e, '', ['appMenu', 'link'])
                name.style.width = '100%'
                const del = lab_design_system('button', `db-del-btn-${index}`, pageLink, '', '', ['appMenu', 'deleteBtn'])
                const delIcon = lab_design_system('img', `del-btn-icon-${index}`, del, '', '', ['design', 'icon'])
                delIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/close.svg')
                del.addEventListener('click', () => {
                  userLSG.scriptToDelete = e
                  socket.emit('deleteLib', userLSG)
                })
              })

              const bottom = lab_design_system('div', `bottom`, setWrap, '', '', ['appMenu', 'execute'])
              const input = Input('act-name', bottom)
              input.style.minWidth = '220px'
              input.style.width = 'fit-content'
              const btn = lab_design_system('button', 'add-library', bottom, lngData.add, '', ['buttons', 'action'])
              btn.style.width = 'fit-content'
              btn.addEventListener('click', (e) => {
                e.preventDefault()
                if (input.value) {
                  fetchLibrary(input.value, userLSG)
                } else alertUser(lngData.column_name_cannot_be_empty)
              })
            }
            else if (name == 'ephemeral_sharing') {
              socket.emit("getUserBackups", lab_local_storage_object('global'), b => {
                const heading = lab_design_system('h6', 'manual-backup', setWrap, lngData.ephemeral_sharing, '', ['appMenu', 'heading'])
                const row = lab_design_system('div', 'backup', setWrap, '', '', ['appMenu', 'execute'])
                const text = lab_design_system('span', `row-text`, row, lngData.share_id)
                const id = Input('share', row)
                row.style.position = 'relative'
                row.style.zIndex = 2
                const update = lab_design_system('button', `c-backup`, row, lngData.update, '', ['buttons', 'action'])
                update.style.width = 'fit-content'

                update.addEventListener('click', e => {
                  if (id.value) {
                    userLSG.newPublicID = id.value
                    socket.emit('updatePublicID', userLSG)
                  }
                  else {
                    alert(lngData.input_cannot_be_empty)
                  }
                })

                const list = {
                  1: '1 ' + lngData.day,
                  2: '2 ' + lngData.day,
                  3: '3 ' + lngData.day,
                  4: '4 ' + lngData.day,
                  5: '5 ' + lngData.day,
                  6: '6 ' + lngData.day,
                  7: '7 ' + lngData.day,
                  8: '8 ' + lngData.day,
                  9: '9 ' + lngData.day,
                  10: '10 ' + lngData.day
                }

                const autoRow = lab_design_system('div', 'a-backup', setWrap, '', '', ['appMenu', 'execute'])
                let duration
                const autoBack = dropDown(list, list['1'], 'previous-backup-auto', (e) => {
                  duration = list[e]
                }, autoRow)
                autoBack.wrap.style.maxWidth = '200px'

                const load = lab_design_system('button', `u-backup-a`, autoRow, lngData.load, '', ['buttons', 'action'])
                load.style.width = 'fit-content'


                load.addEventListener('click', e => {
                  if (duration) {
                    userLSG.duration = duration
                    socket.emit('showUserProject', userLSG)
                  }
                  else {
                    alert(lngData.input_cannot_be_empty)
                  }
                })
              })
            }
            else if (name == 'svg_fragmentation') {
              const heading = lab_design_system('h6', 'app-menu-heading', setWrap, lngData.svg_fragmentation, '', ['appMenu', 'heading'])
              const importSvg = lab_design_system('button', `c-backup`, setWrap, lngData.import_svg, '', ['buttons', 'action'])
              importSvg.style.width = 'fit-content'

              importSvg.addEventListener('click', () => {
                getFile('svg', "lab-file-input")
                document.querySelector('#lab-file-input').click()
              })
            }
            else if (name == 'collaborative_mode') {
              const heading = lab_design_system('h6', 'app-menu-heading', setWrap, lngData.collaborative_mode, '', ['appMenu', 'heading'])
              const content = lab_design_system('div', 'app-menu-content', setWrap, '', '', ['appMenu', 'deploy'])
              const collaborators = lab_design_system('div', 'app-menu-collaborators', content, '', '', ['appMenu', 'collaborators'])
              const rights = lab_design_system('div', 'app-menu-rights', content, '', '', ['appMenu', 'collaborators'])
              const collabText = lab_design_system('span', 'collabs-head-text', collaborators, lngData.add_a_collaborator)
              const rightsText = lab_design_system('span', 'rights-text', rights, lngData.collaborators_rights)

              let collabs = sectionElementsObject.userConfigs.collaboratorsLIST.map(e => e.collaborator_email)


              const collRow = lab_design_system('div', 'collab-row', collaborators, '', '', ['appMenu', 'execute'])
              collRow.style.width = '100%'
              let selectedCol = collabs[0]

              function select(index) {
                selectedCol = collabs[index]
              }

              const list = dropDown(collabs, selectedCol, 'collabs', select, collRow)
              list.wrap.style.width = '60%'

              const del = lab_design_system('button', 'del-collab', collRow, lngData.delete, '', ['buttons', 'action'])
              del.style.width = '30%'

              del.addEventListener('click', () => {
                const userLSG = lab_local_storage_object('global')
                userLSG.collaborator_email = selectedCol
                socket.emit('removeCollaboratorFromProject', userLSG, res => {

                })
              })

              const row = lab_design_system('div', 'app-menu-row', collaborators, '', '', ['appMenu', 'execute'])
              row.style.width = '100%'

              const newCollaborator = Input('collab', row)
              newCollaborator.style.width = '60%'

              const add = lab_design_system('button', 'add-collab', row, lngData.add, '', ['buttons', 'action'])
              add.style.width = '30%'

              add.addEventListener('click', () => {
                const userLSG = lab_local_storage_object('global')
                userLSG.collaborator_email = newCollaborator.value
                socket.emit('addCollaboratorToProject', userLSG, res => {
                  if (res.success) {
                    const userLSG = lab_local_storage_object('global')
                    userLSG.message = userLSG.app
                    userLSG.recipient = collaborator_email
                    userLSG.under_review = true
                    userLSG.review_type = "access_granted"
                    socket.emit('sendMessage', userLSG, sended => {

                    })
                  }
                })
              })

              const rightArr = ['designer', 'developer', 'administrator', 'custom']
              let collabRights = sectionElementsObject.userConfigs.collaboratorsLIST.map(e => e.rights.preset)
              let selected = collabs[0]
              const rightsRow = lab_design_system('div', 'rightsRow', rights, '', '', ['appMenu', 'execute'])
              const rightsCollabs = dropDown(collabs, selected, 'collabs-rights', writeCollab, rightsRow)

              const pointers = lab_design_system('div', 'pointers', rights, '', '', ['appMenu', 'collaborators'])

              function writeCollab(index = 0) {
                let last = document.getElementById('lab-rights-type-wrap')
                if (last) last.remove()

                selected = collabs[index]
                const rightsTypes = dropDown(rightArr, collabRights[index], 'rights-type', (e) => {
                  selcetRights(e)
                }, rightsRow)
                let checkInputs = ['sftpAccess', 'ephemeralSharing', 'deployment', 'dbModelisation', 'collaboratorsRights']

                let checkRights = {
                  'designer': [false, true, false, false, false],
                  'developer': [true, true, true, false, false],
                  'administrator': [true, true, true, true, true],
                  'custom': []
                }

                function selcetRights(a = 0) {
                  pointers.innerHTML = ''
                  checkInputs.forEach((e, i) => {
                    const row = lab_design_system('div', `${e}-${i}`, pointers, '', '', ['appMenu', 'execute'])
                    const text = lab_design_system('span', `${e}-text`, row, e)
                    const check = lab_design_system('input', `${e}-check`, row, '', '', ['appMenu', 'checkbox'])
                    check.setAttribute('type', 'checkbox')
                    check.checked = checkRights[rightArr[a]][i]
                    if (rightArr[a] != 'custom') check.disabled = true
                  })
                  lab_fade_in_recursively(rights, 0.3)
                }

                selcetRights()
              }
              writeCollab()
            }
            lab_fade_in_recursively(setWrap, 0.3, ['preview-input'])
          }
          Settings()
        }

        else if (['css', 'js'].includes(slide)) TextEditableBox(slide)

        else if (slide == 'media') {
          let selectedFolder;
          const media = lab_design_system('div', 'app-menu-media', box, '', '', ['appMenu', 'media'])
          const folders = lab_design_system('div', 'app-menu-fold', media, '', '', ['appMenu', 'fold'])
          const wrapper = lab_design_system('div', 'app-menu-wrapper', media, '', 'scrollable', ['appMenu', 'wrapper'])
          const files = lab_design_system('div', 'app-menu-files', wrapper, '', '', ['appMenu', 'files'])
          if (sectionElementsObject.mediaLists && sectionElementsObject.mediaLists.length > 0) {
            sectionElementsObject.mediaLists.forEach(e => {
              const item = lab_design_system('div', `folder-${e.listName}`, folders, '', '', ['appMenu', 'folder'])
              const icon = lab_design_system('img', `folder-${e.listName}-icon`, item)
              icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/folder.svg`)
              const text = lab_design_system('div', `folder-${e.listName}-name`, item, e.listName)
              text.style.width = 100 + '%'

              const del = lab_design_system('button', `db-del-btn-${e.listName}`, item, '', '', ['appMenu', 'deleteBtn'])
              const delIcon = lab_design_system('img', `del-btn-icon-${e.listName}`, del, '', '', ['design', 'icon'])
              delIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/close.svg')
              del.addEventListener('click', () => {
                const userLSG = lab_local_storage_object('global')
                if (userLSG.ctx == 'Laboranth') {
                  userLSG.app = dashObj.selectedApp
                  userLSG.section = 'home'
                }

                userLSG.mediaListToRemove = e.listName

                socket.emit('deleteMediaList', userLSG, res => {
                  if (res.success) {
                    item.remove()
                    files.innerHTML = ""
                  }
                })
              })

              text.addEventListener('click', () => {

                if (e.listName != selectedFolder) {
                  let last = document.querySelector('.selected-folder')
                  if (last) {
                    last.style.background = 'transparent'
                    last.classList.remove('selected-folder')
                  }
                  item.classList.add('selected-folder')
                  item.style.background = '#fff'

                  selectedFolder = e.listName
                  userLSG.mediaList = e.listName
                  socket.emit('getMediaListsData', userLSG, res => {
                    if (res.success) {
                      const listFiles = res.data.find(li => li.listName === e.listName).files
                      openFolder(listFiles)
                    }
                  })
                }

              })
            })
          }
          else folders.innerHTML = lngData.zero_media_list

          function openFolder(list) {
            files.innerHTML = ''
            if (list && list.length > 0) {
              list.forEach((e, i) => {
                const file = lab_design_system('div', `file-${i}`, files, '', '', ['appMenu', 'fileImg'])
                const fileImg = lab_design_system('div', `f-img-${i}`, file, '', '', ['appMenu', 'boxImg'])
                const img = lab_design_system('img', `file-img-${i}`, fileImg)
                img.style.maxWidth = '100%'
                img.style.aspectRatio = '1'
                img.style.objectFit = 'cover'
                const span = lab_design_system('span', `file-span-${i}`, file, e)
                img.setAttribute('src', `/DB/USERS_FOLDERS/${sectionElementsObject.uid}/apps/${sectionElementsObject.app}/content/ressources/medias/${selectedFolder}/${e}`)
              })
            } else {
              files.innerHTML = lngData.zero_media_list_files
            }
            lab_fade_in_recursively(files, 0.3)
          }

          const bottom = lab_design_system('div', 'app-fold-bottom', folders, '', '', ['appMenu', 'bottom'])
          bottom.style.order = 9999

          let buttons = {
            'import': lngData.import_files,
            'create': lngData.new_folder
          }

          Object.keys(buttons).forEach(e => {
            const btn = lab_design_system('div', `folder-${e}`, bottom, '', '', ['appMenu', 'borderBtn'])
            const icon = lab_design_system('img', `folder-${e}-icon`, btn)
            icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/new-folder.svg`)
            const text = lab_design_system('div', `folder-${e}-name`, btn, buttons[e])
            btn.addEventListener('click', (ev) => {
              ev.preventDefault()
              if (e == 'create') {
                let input = document.getElementById('lab-new-folder-name')
                if (input) {
                  userLSG.addedMediaList = input.value
                  socket.emit('addNewMediaList', userLSG, res => {
                    const item = lab_design_system('div', `folder-${userLSG.addedMediaList}`, folders, '', '', ['appMenu', 'folder'])
                    const icon = lab_design_system('img', `folder-${userLSG.addedMediaList}-icon`, item)
                    icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/folder.svg`)
                    const text = lab_design_system('div', `folder-${userLSG.addedMediaList}-name`, item, userLSG.addedMediaList)
                    text.style.width = 100 + '%'

                    const del = lab_design_system('button', `db-del-btn-${userLSG.addedMediaList}`, item, '', '', ['appMenu', 'deleteBtn'])
                    const delIcon = lab_design_system('img', `del-btn-icon-${userLSG.addedMediaList}`, del, '', '', ['design', 'icon'])
                    delIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/close.svg')
                    const previousListNameSave = userLSG.addedMediaList
                    del.addEventListener('click', () => {
                      const userLSG = lab_local_storage_object('global')
                      if (userLSG.ctx == 'Laboranth') {
                        userLSG.app = dashObj.selectedApp
                        userLSG.section = 'home'
                      }

                      userLSG.mediaListToRemove = previousListNameSave

                      socket.emit('deleteMediaList', userLSG, res => {
                        if (res.success) {
                          item.remove()
                          files.innerHTML = ""
                        }
                      })
                    })

                    text.addEventListener('click', () => {
                      if (text.innerHTML != selectedFolder) {
                        let last = document.querySelector('.selected-folder')
                        if (last) {
                          last.style.background = 'transparent'
                          last.classList.remove('selected-folder')
                        }
                        item.classList.add('selected-folder')
                        item.style.background = '#fff'

                        selectedFolder = text.innerHTML
                        userLSG.mediaList = text.innerHTML
                        socket.emit('getMediaListsData', userLSG, res => {
                          if (res.success) {
                            const listFiles = res.data.find(li => li.listName === text.innerHTML).files
                            openFolder(listFiles)
                          }
                        })
                      }
                    })
                    lab_fade_in_recursively(item, 0.3)
                  })
                } else Input('new-folder-name', bottom)
              } else {
                if (selectedFolder) {
                  function getMediaFilesFile() {
                    const lab_file_input = lab_design_system('input', "temp-input", document.querySelector('body'))
                    lab_file_input.setAttribute('class', 'escape')
                    lab_file_input.setAttribute('type', 'file')
                    lab_file_input.setAttribute('multiple', true)
                    lab_file_input.style.display = "none"

                    lab_file_input.addEventListener('change', e => {
                      const userLSG = lab_local_storage_object('global')
                      if (userLSG.ctx == 'Laboranth') {
                        userLSG.app = dashObj.selectedApp
                        userLSG.section = 'home'
                      }

                      userLSG.listName = selectedFolder
                      userLSG.files = []
                      let destrFilesObj = [...e.target.files]
                      destrFilesObj.forEach(f => {
                        let nameWithoutFirstNumbers = idStartWithoutNumbers(f.name.split('.')[0])
                        let withoutSpecChar = formatFromSpecChar(nameWithoutFirstNumbers)
                        let finalNameWithExtension = withoutSpecChar + "." + f.name.split('.')[1]

                        userLSG.files.push({
                          name: finalNameWithExtension,
                          type: f.type,
                          support: f
                        })
                      })

                      socket.emit('mediaListFiles', userLSG, res => {

                        socket.emit('getMediaListsData', userLSG, res => {
                          if (res.success) {
                            const listFiles = res.data.find(li => li.listName === selectedFolder).files
                            openFolder(listFiles)
                          }
                        })
                      })
                    })
                  }
                  getMediaFilesFile()

                  document.getElementById('lab-temp-input').click()
                }
              }
            })
          })
        }

        else if (slide == 'deploy') {
          const wrapper = lab_design_system('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])
          const deploy = lab_design_system('div', 'app-menu-deploy', wrapper, '', 'scrollable', ['appMenu', 'deploy'])
          const left = lab_design_system('div', 'app-deploy-left', deploy, '', '', ['appMenu', 'left'])
          const right = lab_design_system('div', 'app-deploy-right', deploy, '', '', ['appMenu', 'right'])
          const heading = lab_design_system('h6', 'app-menu-heading', left, sideButtons[slide], '', ['appMenu', 'heading'])
          const wrap = lab_design_system('div', `app-menu-text-wrap`, right, '', '', ['appMenu', 'textBox'])
          right.style.position = 'relative'
          wrap.style.height = '100%'
          wrap.style.maxHeight = '100%'

          const drop = dropDown(server, server.lab_user_personnal_server, 'serv', (e) => deployBox(e), left)
          drop.wrap.style.position = 'relative'
          drop.wrap.style.zIndex = 25

          const leftBox = lab_design_system('form', 'app-deploy-box', left, '', '', ['appMenu', 'leftBox'])

          function deployBox(e = 'lab_user_personnal_server') {
            removeCommandsBox()
            leftBox.innerHTML = ''
            if (e == 'lab_user_personnal_server') {
              const ip = Input('ip', leftBox, 'XX.XX.XXX.XX', '')
              const ssh = Input('ssh', leftBox, lngData.username_ssh, '')
              const pass = Input('pass', leftBox, lngData.password, '')
              const dir = Input('dir', leftBox, lngData.remote_app_dir, '')
              const port = Input('port', leftBox, lngData.port, '')
              const save = lab_design_system('button', `save`, leftBox, lngData.save, '', ['buttons', 'action'])
              save.style.width = 'fit-content'

              save.addEventListener('click', () => {
                const userLSG = lab_local_storage_object('global')
                userLSG.host = ip.value
                userLSG.username = ssh.value
                userLSG.password = pass.value
                userLSG.remoteDir = dir.value
                userLSG.port = port.value
                socket.emit("saveSID", userLSG)
              })

              CommandsBox()
            }
            if (e == 'laboranth_remote_server') {
              socket.emit('checkAgencyStatus', userLSG, agencyStatus => {
                function serverHandler(userConfiguration) {
                  const ressourceIPV4Label = lab_design_system("div", "ressource-ip4-label", leftBox, lngData.host_ip + 'V4 :' + userConfiguration.configs.agencyServer.public_ipv4, '')
                  const serverUserLabel = lab_design_system("div", "ressource-username-label", leftBox, lngData.username_ssh + " : " + userConfiguration.configs.agencyServer.username, '')
                  const ressourcePassword = lab_design_system("button", "ressource-password", leftBox, lngData.copy + " " + lngData.password, '', ['buttons', 'action'])
                  ressourcePassword.style.display = 'inline-block'

                  ressourcePassword.addEventListener('click', () => {
                    const userLSG = lab_local_storage_object('global')
                    socket.emit('fetchUserVMPass', userLSG, res => {
                      navigator.clipboard.writeText(res.data)
                        .then(() => {
                          alertUser(lngData.copied)
                        })
                        .catch((err) => {
                          console.error("Copy Error :", err)
                          if (err.name === "NotAllowedError") {
                            alert("Clipboard permission denied")
                          } else if (err.name === "NotFoundError") {
                            alert("Clipboard error")
                          } else {
                            alert("Unexpected Error.")
                          }
                        })
                    })
                  })

                  const deployButton = lab_design_system('button', "server-deploy", leftBox, lngData.deployment, '', ['buttons', 'action'])
                  deployButton.style.display = 'inline-block'

                  deployButton.addEventListener('click', () => {
                    const userLSG = lab_local_storage_object('global')
                    userLSG.agencyServer = true
                    socket.emit('sshDeploy', userLSG)
                  })

                  const destroyButton = lab_design_system('button', "server-destroy", leftBox, lngData.delete, '', ['buttons', 'action'])
                  destroyButton.style.display = 'inline-block'

                  destroyButton.addEventListener('click', () => {
                    vm_deletion_confirm.addEventListener('click', () => {
                      socket.emit('deleteVM', userLSG)
                    })
                  })
                  CommandsBox()
                }
                if (agencyStatus.success) {
                  socket.emit('getUserConfigs', userLSG, userConfiguration => {
                    if (userConfiguration.configs.agencyServer) {
                      serverHandler(userConfiguration)
                    } else {

                      const usernameSsh = lab_design_system('div', 'username-ssh', leftBox, lngData.username_ssh)
                      const userNameInput = Input('user-ssh-input', leftBox, 'root')

                      const userPass = lab_design_system('div', 'user-password', leftBox, lngData.password)
                      const userPassInput = Input('user-password-input', leftBox)
                      userPassInput.setAttribute('type', 'password')
                      const initialize = lab_design_system('button', 'server-initialize', leftBox, lngData.initialize, '', ['buttons', 'action'])

                      function isValidPassword(password) {
                        if (
                          password.length >= 8 &&
                          /[a-z]/.test(password) &&
                          /[A-Z]/.test(password) &&
                          /[0-9]/.test(password)
                        ) {
                          return true
                        } else {
                          return false
                        }
                      }

                      initialize.addEventListener('click', (e) => {
                        e.preventDefault()
                        if (userNameInput.value && userPassInput.value && isValidPassword(userPassInput.value)) {
                          userLSG.username = userNameInput.value
                          userLSG.password = userPassInput.value
                          userLSG.status = agencyStatus.status

                          const spinner = lab_design_system('img', 'load-spinner', right)
                          spinner.setAttribute('src', '/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/design/img/pre-loader.svg')
                          spinner.style.left = 'calc(50% - 40px)'
                          spinner.style.width = '80px'
                          spinner.style.height = '80px'
                          spinner.style.position = 'absolute'
                          spinner.style.top = 'calc(50% - 40px)'
                          spinner.style.animation = "lab_spinner_rotate 2s linear infinite"

                          socket.emit('createVM', userLSG, res => {
                            leftBox.innerHTML = ''

                            socket.emit('getUserConfigs', userLSG, userConfiguration => {
                              if (userConfiguration.configs.agencyServer) {
                                serverHandler(userConfiguration)
                              }
                            })
                          })
                        } else {
                          labAlerts({
                            alertText: lngData.password_condition,
                            duration: 7000
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
            if (e == 'laboranth_deploy_zip') {
              const donwload = lab_design_system('button', `donwload`, leftBox, lngData.download, '', ['buttons', 'action'])
              donwload.addEventListener('click', e => {
                socket.emit('askAppZipFolder', lab_local_storage_object('global'), res => {
                  const blob = new Blob([res.fileData], { type: 'application/zip' })
                  const downloadUrl = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = downloadUrl
                  a.download = res.fileName
                  document.body.appendChild(a)
                  a.click()
                  document.body.removeChild(a)
                  URL.revokeObjectURL(downloadUrl)
                })
              })
            }
            if (e == 'laboranth_deploy_git') {
              const drop = dropDown(git_settings, git_settings.credentials, 'git', (e) => subBox(git, e), leftBox)
              const git = lab_design_system('div', 'app-sub-box', leftBox, '', '', ['appMenu', 'leftBox'])
              subBox(git)
            }

            lab_fade_in_recursively(left, 0.3)
          }

          function subBox(parent, e = 'credentials') {
            parent.innerHTML = ''

            if (e == 'credentials') {
              const username = Input('ssh', parent, lngData.username, '')
              const email = Input('pass', parent, lngData.email, '')
              const dir = Input('dir', parent, lngData.remote_app_dir, '')
              const port = Input('port', parent, lngData.port, '')
              const save = lab_design_system('button', `save`, parent, lngData.save, '', ['buttons', 'action'])
              save.style.width = 'fit-content'

              save.addEventListener('click', () => {
                const userLSG = lab_local_storage_object('global')
                userLSG.host = ip.value
                userLSG.username = ssh.value
                userLSG.password = pass.value
                userLSG.remoteDir = dir.value
                userLSG.port = port.value
                socket.emit("saveSID", userLSG)
              })
            }
            if (e == 'create') {
              const nameLabel = lab_design_system("div", "rep-name", parent, lngData.repository_name)

              const repoName = Input('rep-name-input', parent)
              const privateLabel = lab_design_system("div", "rep-private-label", parent, lngData.private_repository)

              const privateInput = lab_design_system('input', `private-rep`, parent, '', '', ['steps', 'checkbox'])

              const descriptionLabel = lab_design_system("div", "rep-description-label", parent, lngData.description)

              const descriptionInput = Input('rep-description-input', parent)

              const create = lab_design_system('button', `create-rep`, parent, lngData.create, '', ['buttons', 'action'])
              create.style.width = 'fit-content'

              create.addEventListener('click', (e) => {
                e.preventDefault()
                if (repoName.value) {
                  userLSG.newGitRepo = repoName.value
                  userLSG.private = privateInput.checked
                  userLSG.description = descriptionInput.value
                  userLSG.gitOp = 'createRepo'

                  socket.emit('launchGitHubOperation', userLSG, res => {
                    console.log(res)
                  })
                }
              })
            }

            if (e == 'delete') {
              const delLabel = lab_design_system("div", "rep-delete", parent, lngData.repository_name)
              const repoName = Input('rep-name-input', parent)
              const del = lab_design_system('button', `delete-rep`, parent, lngData.delete, '', ['buttons', 'action'])
              del.style.width = 'fit-content'

              del.addEventListener('click', e => {
                e.preventDefault()
                userLSG.gitRepoToDelete = repoName.value
                userLSG.gitOp = "deleteRepo"
                socket.emit('launchGitHubOperation', userLSG, res => {
                  console.log(res)
                })
              })

            }
            lab_fade_in_recursively(parent, 0.3)
          }
          function removeCommandsBox() {
            let btn = document.getElementById('lab-btn-deploy')
            let last = document.getElementById('lab-deploy-execute')
            if (last) {
              last.remove()
              btn.remove()
            }
          }
          function CommandsBox() {
            removeCommandsBox()
            const executeBox = lab_design_system('div', 'deploy-execute', wrapper, '', '', ['appMenu', 'execute'])
            const command = Input('command', executeBox, 'ls')
            const execute = lab_design_system('button', `execute`, executeBox, lngData.run_cmd, '', ['buttons', 'action'])
            execute.style.width = 'fit-content'
            execute.style.whiteSpace = 'nowrap'

            execute.addEventListener('click', () => {
              const userLSG = lab_local_storage_object('global')
              userLSG.command = command.value
              command.value = ""
              socket.emit("runRemoteCommand", userLSG)
            })

            const deployBtn = lab_design_system('button', `btn-deploy`, wrapper, lngData.deployment, '', ['buttons', 'action'])
            deployBtn.style.width = 'fit-content'

            deployBtn.addEventListener('click', e => {
              const userLSG = lab_local_storage_object('global')
              userLSG.uploadingConfig = uploadingConfig
              socket.emit('sshDeploy', userLSG)
            })
            lab_fade_in_recursively(wrapper, 0.3)
          }
          deployBox()
        }

        else if (slide == 'database') {
          function DBLists() {
            box.innerHTML = ''
            const wrapper = lab_design_system('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])

            const heading = lab_design_system('h6', 'app-menu-heading', wrapper, lngData.sql_databases, '', ['appMenu', 'heading'])
            const scrollList = lab_design_system('div', 'scrollList', wrapper, '', 'scrollable', ['appMenu', 'scrollList'])
            const dbList = lab_design_system('div', 'app-menu-act', scrollList, '', '', ['appMenu', 'DBList'])

            sectionElementsObject.databases.forEach((e, index) => {
              const pageLink = lab_design_system('div', `db-link-${index}`, dbList, '', '', ['appMenu', 'db'])
              const name = lab_design_system('span', `db-name-${index}`, pageLink, e, '', ['appMenu', 'link'])
              name.style.cursor = 'pointer'
              name.style.width = '100%'
              name.addEventListener('click', () => {
                OpenDB(e)
              })
              const del = lab_design_system('button', `db-del-btn-${index}`, pageLink, '', '', ['appMenu', 'deleteBtn'])
              const delIcon = lab_design_system('img', `del-btn-icon-${index}`, del, '', '', ['design', 'icon'])
              delIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/close.svg')
              del.addEventListener('click', () => {
                userLSG.sqlDB = e
                socket.emit('deleteSqlDB', userLSG, res => {
                  if (res.success) {
                    sectionElementsObject.databases = sectionElementsObject.databases.filter(db => db != e)
                    pageLink.remove()
                  }
                })
              })
            })

            const bottom = lab_design_system('div', `bottom`, wrapper, '', '', ['appMenu', 'execute'])
            const input = Input('act-name', bottom)
            input.style.minWidth = '220px'
            input.style.width = 'fit-content'
            const btn = lab_design_system('button', 'add-db', bottom, lngData.add, '', ['buttons', 'action'])
            btn.style.width = 'fit-content'
            btn.addEventListener('click', (e) => {
              if (input.value) {
                userLSG.db_name = input.value

                socket.emit('createSQLiteDB', userLSG, res => {
                  if (res.success) {
                    sectionElementsObject.databases.push(userLSG.db_name + ".db")
                    DBLists()
                  }
                })
              } else alertUser(lngData.column_name_cannot_be_empty)
            })
            lab_fade_in_recursively(box, 0.3)
          }

          function OpenDB(dbName) {

            lab_local_storage_object_update('global', { openedMenu: 'app_databases' })
            lab_local_storage_object_update('global', { current_sql_db: dbName })

            box.innerHTML = ''
            userLSG.sqlDB = dbName

            lab_local_storage_object_update('global', { openedSqlTable: "" })
            socket.emit('getSqlTables', userLSG, res => {
              const dbInfo = res.data
              if (dbInfo) {

                const media = lab_design_system('div', 'app-menu-media', box, '', '', ['appMenu', 'media'])
                const folders = lab_design_system('div', 'app-menu-fold', media, '', '', ['appMenu', 'fold'])
                const wrapper = lab_design_system('div', 'app-menu-wrapper', media, '', 'scrollable', ['appMenu', 'wrapper'])


                function RenderColumns(dbTable) {
                  wrapper.innerHTML = ""
                  let types = {
                    'integer': "INTEGER",
                    'text': "TEXT",
                    'blob': "BLOB",
                    'real': "REAL"
                  }

                  const columns = lab_design_system('div', 'columns', wrapper, '', 'scrolable', ['appMenu', 'columns'])

                  columns.innerHTML = ''

                  const top = lab_design_system('div', 'top', columns, '', '', ['appMenu', 'column'])
                  top.style.background = '#3C4CA6'
                  top.style.borderRadius = '10px 10px 0 0'
                  const name = lab_design_system('div', 'h-name', top, lngData.name_of_column, '', ['appMenu', 'columnHead'])
                  const type = lab_design_system('div', 'h-type', top, lngData.data_type, '', ['appMenu', 'columnHead'])
                  const notNull = lab_design_system('div', 'h-notNull', top, lngData.not_null, '', ['appMenu', 'columnHead'])
                  const unique = lab_design_system('div', 'h-unique', top, lngData.unique, '', ['appMenu', 'columnHead'])
                  //COLUMN

                  const newColumn = lab_design_system('div', 'new-column', columns, '', '', ['appMenu', 'column'])
                  newColumn.style.position = 'relative'
                  newColumn.style.order = 9999

                  const addColumn = lab_design_system('button', 'add-column', newColumn, '', '', ['appMenu', 'addColumn'])
                  const addIcon = lab_design_system('img', 'add-column-icon', addColumn, '', '', ['design', 'icon'])
                  addIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/add_user.svg')

                  const newColumnName = lab_design_system('div', 'new-column-name', newColumn, '', '', ['appMenu', 'columnBox'])
                  newColumnName.style.padding = '0'

                  const newColumnNameInput = Input('new-column-name-input', newColumnName)

                  const newColumnType = lab_design_system('div', 'new-column-type', newColumn, '', '', ['appMenu', 'columnBox'])
                  newColumnType.style.padding = '0'
                  let newColumnDataType = 'INTEGER'

                  const newColumnTypeInput = dropDown(types, newColumnDataType, 'new-column-type-input', (e) => {
                    newColumnDataType = e
                  }, newColumnType)
                  newColumnTypeInput.wrap.style.width = '100%'

                  const newColumnNotNull = lab_design_system('div', 'new-column-notNull', newColumn, '', '', ['appMenu', 'columnBox'])
                  newColumnNotNull.style.padding = '0'

                  const newColumnNotNullInput = lab_design_system('input', 'new-column-notNull-input', newColumnNotNull, '', '', ['steps', 'checkbox'])
                  newColumnNotNullInput.setAttribute('type', 'checkbox')

                  const newColumnUnique = lab_design_system('div', 'new-column-unique', newColumn, '', '', ['appMenu', 'columnBox'])
                  newColumnUnique.style.padding = '0'

                  const newColumnUniqueInput = lab_design_system('input', 'new-column-unique-input', newColumnUnique, '', '', ['steps', 'checkbox'])

                  newColumnUniqueInput.setAttribute('type', 'checkbox')

                  function addRow(c, index) {
                    const column = lab_design_system('div', `column-${index}`, columns, '', 'sql-column', ['appMenu', 'column'])
                    const Cname = lab_design_system('div', `column-name-${index}`, column, c.name, '', ['appMenu', 'columnBox'])
                    Cname.setAttribute('data-column', 'name')
                    const Ctype = lab_design_system('div', `column-type-${index}`, column, c.type, '', ['appMenu', 'columnBox'])
                    Ctype.setAttribute('data-column', 'type')
                    const CnotNull = lab_design_system('div', `column-not-null-${index}`, column, Boolean(c.notnull).toString(), '', ['appMenu', 'columnBox'])
                    CnotNull.setAttribute('data-column', 'notNull')
                    const Cunique = lab_design_system('div', `column-unique-${index}`, column, String(c.unique), '', ['appMenu', 'columnBox'])
                    Cunique.setAttribute('data-column', 'unique')

                    column.addEventListener('click', (e) => {
                      column.classList.add('active-column')
                      column.style.background = '#ECF0F9'
                      if (e.target.getAttribute('data-column')) {
                        ColumnSettings(e.target.getAttribute('data-column'), c, e.target.id)
                      }
                    })
                    lab_fade_in_recursively(column, 0.3)
                    newColumnNameInput.value = ""
                    newColumnNotNullInput.checked = ""
                    newColumnNotNullInput.checked = ""
                  }

                  dbTable.tablePragma.forEach((c, index) => {
                    addRow(c, index)
                  })

                  addColumn.addEventListener('click', () => {
                    if (newColumnNameInput.value) {
                      userLSG.sqlTable = lab_local_storage_object('global').openedSqlTable
                      userLSG.newColumnName = newColumnNameInput.value
                      userLSG.dataType = newColumnDataType
                      userLSG.notNull = newColumnNotNull.checked
                      userLSG.unique = newColumnUniqueInput.checked

                      socket.emit('sqlNewColumn', userLSG, res => {
                        addRow({ name: userLSG.newColumnName, type: userLSG.dataType, notnull: Boolean(userLSG.notNull), unique: userLSG.unique }, newColumnNameInput.value)
                      })
                    }
                  })

                  function ColumnSettings(field, columnInfo, fieldId) {
                    let last = document.getElementById('lab-column-setting')
                    if (last) last.remove()
                    const columnSetting = lab_design_system('div', 'column-setting', wrapper, '', '', ['appMenu', 'columnSetting'])
                    const del = lab_design_system('div', 'del', columnSetting, lngData.delete, '', ['buttons', 'action'])
                    del.style.width = 'fit-content'
                    del.style.marginRight = 'auto'

                    del.addEventListener('click', () => {
                      userLSG.sqlTable = lab_local_storage_object('global').openedSqlTable
                      userLSG.columnToDelete = columnInfo.name
                      const countColumns = document.querySelectorAll('.lab-sql-column').length

                      if (countColumns > 1) {
                        socket.emit('sqlDeleteColumn', userLSG, res => {
                          if (res.success) {
                            document.querySelector('.active-column').remove()
                            columnSetting.remove()
                          }
                        })
                      } else {
                        alertUser(lngData.minimum_reached)
                      }
                    })

                    let action
                    if (field == 'name') {
                      let input = Input('column-name', columnSetting, columnInfo.name)
                      input.style.maxWidth = '220px'

                      action = lab_design_system('div', 'action', columnSetting, lngData.update_column_name, '', ['buttons', 'action'])

                      action.addEventListener('click', function () {
                        userLSG.sqlTable = lab_local_storage_object('global').openedSqlTable
                        userLSG.rowName = columnInfo.name
                        userLSG.newName = input.value
                        userLSG.operation = "nameUpdate"

                        socket.emit('sqlUpdateColumnPragma', userLSG, res => {
                          if (res.success) {
                            const table = dbInfo.dbTables.find(t => t.tableName === userLSG.sqlTable)
                            table.tablePragma[0].name = userLSG.newName
                            document.getElementById(fieldId).innerHTML = input.value
                          }
                        })
                      })
                    }
                    if (field == 'type') {
                      let newType = columnInfo.type
                      let drop = dropDown(types, newType, 'column-type', (e) => {
                        newType = e
                      }, columnSetting)
                      drop.wrap.style.maxWidth = '220px'
                      drop.wrap.style.width = '100%'
                      action = lab_design_system('div', 'action', columnSetting, lngData.update_data_type, '', ['buttons', 'action'])

                      action.addEventListener('click', function () {
                        userLSG.sqlTable = lab_local_storage_object('global').openedSqlTable
                        userLSG.rowName = columnInfo.name
                        userLSG.newType = newType
                        userLSG.operation = "typeUpdate"

                        socket.emit('sqlUpdateColumnPragma', userLSG, res => {
                          if (res.success) {
                            document.getElementById(fieldId).innerHTML = newType.toUpperCase()
                            const table = dbInfo.dbTables.find(t => t.tableName === userLSG.sqlTable)
                            table.tablePragma[0].type = userLSG.newType
                          }
                        })
                      })
                    }
                    if (field == 'notNull') {
                      let temp = columnInfo.notnull == true ? 'change_true_to_false' : 'change_false_to_true'
                      action = lab_design_system('div', 'action', columnSetting, lngData[temp], '', ['buttons', 'action'])

                      action.addEventListener('click', () => {
                        userLSG.sqlTable = lab_local_storage_object('global').openedSqlTable
                        userLSG.rowName = columnInfo.name
                        userLSG.operation = "not_null"

                        if (columnInfo.notnull === 1 || columnInfo.notnull === '1') {
                          userLSG.newVal = false
                        } else {
                          userLSG.newVal = true
                        }

                        socket.emit('sqlUpdateColumnPragma', userLSG, res => {
                          if (res.success) {
                            document.getElementById(fieldId).innerHTML = userLSG.newVal
                            if (userLSG.newVal === true || userLSG.newVal === 'true') {
                              action.innerHTML = lngData.change_true_to_false
                              columnInfo.notnull = 1
                            } else {
                              document.getElementById(fieldId).innerHTML = userLSG.newVal
                              action.innerHTML = lngData.change_false_to_true
                              columnInfo.notnull = 0
                            }
                            const table = dbInfo.dbTables.find(t => t.tableName === userLSG.sqlTable)
                            table.tablePragma[0].notnull = columnInfo.notnull
                          }
                        })
                      })
                    }
                    if (field == 'unique') {
                      let temp = columnInfo.unique == true ? 'change_true_to_false' : 'change_false_to_true'
                      action = lab_design_system('div', 'action', columnSetting, lngData[temp], '', ['buttons', 'action'])

                      action.addEventListener('click', () => {
                        userLSG.sqlTable = lab_local_storage_object('global').openedSqlTable
                        userLSG.rowName = columnInfo.name
                        userLSG.operation = "unique"
                        userLSG.newVal = !Boolean(columnInfo.unique)

                        socket.emit('sqlUpdateColumnPragma', userLSG, res => {
                          if (res.success) {
                            document.getElementById(fieldId).innerHTML = userLSG.newVal
                            if (userLSG.newVal === true || userLSG.newVal === 'true') {
                              action.innerHTML = lngData.change_true_to_false
                            } else {
                              document.getElementById(fieldId).innerHTML = userLSG.newVal
                              action.innerHTML = lngData.change_false_to_true
                            }
                            columnInfo.unique = userLSG.newVal
                          }
                          const table = dbInfo.dbTables.find(t => t.tableName === userLSG.sqlTable)
                          table.tablePragma[0].unique = userLSG.newVal
                        })
                      })
                    }

                    action.style.width = 'fit-content'
                    lab_fade_in_recursively(columnSetting, 0.3)
                  }
                  lab_fade_in_recursively(columns, 0.3)
                }

                function addTable(e, index) {
                  const item = lab_design_system('div', `table-${e.tableName}`, folders, '', 'sql-table', ['appMenu', 'folder'])
                  const text = lab_design_system('div', `table-${index}-name`, item, e.tableName)
                  text.style.width = '100%'
                  text.addEventListener('click', () => {
                    if (!item.classList.contains('lab-selected-table')) {
                      let last = document.querySelector('.lab-selected-table')
                      if (last) {
                        last.classList.remove('lab-selected-table')
                        last.style.background = 'transparent'
                        last.querySelector('#lab-table-del-btn').remove()
                      }
                      item.classList.add('lab-selected-table')
                      item.style.background = '#fff'

                      const del = lab_design_system('button', `table-del-btn`, item, '', '', ['appMenu', 'deleteBtn'])
                      const delIcon = lab_design_system('img', `del-btn-icon`, del, '', '', ['design', 'icon'])
                      delIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/close.svg')
                      del.addEventListener('click', () => {
                        userLSG.tableToDel = e.tableName
                        socket.emit('sqlTableDel', userLSG, res => {
                          if (res.success) {
                            item.remove()
                            document.getElementById('lab-app-menu-wrapper').innerHTML = ""
                            dbInfo.dbTables = dbInfo.dbTables.filter(t => t.tableName != e.tableName)
                          }
                        })
                      })
                      lab_local_storage_object_update('global', { openedSqlTable: e.tableName })
                      const selectedTable = dbInfo.dbTables.find(t => t.tableName == e.tableName)
                      RenderColumns(selectedTable)
                      lab_fade_in_recursively(item, 0.3)
                    }
                  })
                  lab_fade_in_recursively(item, 0.3)
                }

                if (dbInfo.dbTables && dbInfo.dbTables.length > 0) {
                  dbInfo.dbTables.forEach((e, index) => {
                    addTable(e, index)
                  })
                }

                const bottom = lab_design_system('div', 'app-fold-bottom', folders, '', '', ['appMenu', 'bottom'])
                bottom.style.order = 9999
                const NewTable = lab_design_system('div', `new-table`, bottom, '', '', ['appMenu', 'borderBtn'])
                const icon = lab_design_system('img', `new-table-icon`, NewTable)
                icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/new-folder.svg`)
                const text = lab_design_system('div', `new-table-name`, NewTable, lngData.new_table)

                NewTable.addEventListener('click', (e) => {
                  e.preventDefault()
                  let input = document.getElementById('lab-new-table-input')
                  if (input) {
                    userLSG.newTable = input.value
                    socket.emit('newSqlTable', userLSG, res => {
                      if (res.success) {
                        const sqlTables = document.querySelectorAll('.lab-sql-table').length
                        dbInfo.dbTables.push({
                          tableName: userLSG.newTable,
                          tablePragma: [{
                            cid: 0,
                            dflt_value: null,
                            name: 'item',
                            notnull: 0,
                            pk: 0,
                            type: "TEXT",
                            unique: false
                          }]
                        })
                        addTable({ tableName: userLSG.newTable }, sqlTables)
                      }
                    })
                  } else {
                    const inputTable = Input('new-table-input', bottom)
                    inputTable.style.opacity = ""
                  }
                })
              }
              lab_fade_in_recursively(box, 0.3)
            })
          }
          DBLists()
        }
        lab_fade_in_recursively(box, 0.3)
      }

      RenderBox(selectedMenu)


      function TextEditableBox(type) {
        const wrapper = lab_design_system('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])
        const heading = lab_design_system('h6', 'app-menu-heading', wrapper, sideButtons[type], '', ['appMenu', 'heading'])
        const wrap = lab_design_system('div', `app-menu-text-wrap`, wrapper, '', '', ['appMenu', 'textBox'])
        const textArea = lab_design_system('div', `app-menu-textArea`, wrap, '', 'scrollable', ['appMenu', 'textArea'])
        textArea.contentEditable = true

        const btn = lab_design_system('button', `app-menu-btn`, wrapper, lngData.save, '', ['buttons', 'action'])
        btn.style.width = 'fit-content'

        let FileType = type == 'css' ? "CSS" : "Features"
        let SaveFile = type == 'css' ? "CSS" : "Feature"

        socket.emit(`ask${FileType}File`, userLSG, e => {
          if (e.success) {
            textArea.innerText = e.data
            btn.addEventListener('click', e => {
              const userLSG = lab_local_storage_object('global')
              userLSG.string = textArea.innerHTML
              socket.emit(SaveFile, userLSG)
            })
          }
        })
      }

      function Input(id, parent, placeholder = '', value = '') {
        const input = lab_design_system('input', id, parent, '', '', ['appMenu', 'Input'])
        input.setAttribute('placeholder', placeholder)
        input.setAttribute('value', value)
        input.style.opacity = ""
        return input
      }

      function dropDown(list, value, id, func, parent = box) {

        const wrap = lab_design_system('div', `${id}-wrap`, parent, '', '', ['appMenu', 'drop'])
        const selected = lab_design_system('div', `${id}-selected`, wrap, '', '', ['appMenu', 'selected'])
        const text = lab_design_system('span', `${id}-text`, selected, value)
        const icon = lab_design_system('img', `${id}-icon`, selected, '', '', ['design', 'icon'])
        icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/arrow_drop_down.svg`)

        const listing = lab_design_system('div', `${id}-list`, wrap, '', 'scrollable', ['appMenu', 'list'])
        if (typeof list == 'array') {
          list.forEach(e => {
            const item = lab_design_system('div', `${id}-list-${e}`, listing, e)
            item.style.width = '100%'
            item.addEventListener('click', () => {
              text.innerHTML = e
              func(e)
            })
          })
        } else {
          Object.keys(list).forEach(e => {
            const item = lab_design_system('div', `${id}-list-${e}`, listing, list[e])
            item.style.width = '100%'
            item.addEventListener('click', () => {
              text.innerHTML = list[e]
              if (func) {
                func(e)
              }
            })
          })
        }

        listing.addEventListener('mouseleave', () => {
          listing.style.display = 'none'
        })

        wrap.addEventListener('click', () => {
          listing.style.display = listing.style.display == 'flex' ? 'none' : 'flex'
        })
        return { wrap, text }
      }

      menuWrap.addEventListener('click', () => {
        menuWrap.remove()
        menu.remove()
      })

      const fileInput = lab_design_system('input', 'file-input', menu, '', '', ['design', 'noneFile'])
      fileInput.setAttribute('type', 'file')

      lab_fade_in_recursively(menu, 0.3)
    })

  }
}

return AppMenu