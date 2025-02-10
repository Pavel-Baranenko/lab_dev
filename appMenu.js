function AppMenu(dashObj) {
  const userLSG = lab_local_storage_object('global')
  const lngData = dashObj.lngData
  userLSG.app = dashObj.selectedApp
  userLSG.section = 'home'

  socket.emit('getAppData', userLSG, res => {
    sectionElementsObject = res

    const menuWrap = lab_design_system('div', 'app-menu-wrap', rootLayer, '', '', ['appMenu', 'wrap'])
    const menu = lab_design_system('div', 'app-menu', rootLayer, '', '', ['appMenu', 'menu'])
    const side = lab_design_system('div', 'app-menu-side', menu, '', '', ['appMenu', 'side'])
    const box = lab_design_system('div', 'app-menu-box', menu, '', '', ['appMenu', 'box'])

    let activeSlide;

    const sideButtons = {
      'backup': lngData.settings,
      'css': 'CSS',
      'js': 'Js',
      'media': lngData.mediatheque,
      'database': lngData.sql_databases,
      'deploy': lngData.deployment
    }

    const settings = {
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
      // 'laboranth_remote_server': lngData.laboranth_remote_server,
      // "laboranth_deploy_git": "Git",
      "laboranth_deploy_zip": "Zip"
    }

    function Pages(name, type) {
      if (['addNewSection', 'removeSection'].includes(type)) {

        let sectionObj = {
          app: sectionElementsObject.app,
          uid: sectionElementsObject.uid,
          lng: sectionElementsObject.lng,
        }

        if (type == 'removeSection') sectionObj.removingSection = name
        else sectionObj.addingSection = name

        socket.emit(type, sectionObj)
      }
      else if (type == 'open') {
        lab_local_storage_object_update('global', { "section": name })
        window.open(window.location.protocol + "//" + window.location.host + "/" + lab_local_storage_object('global').app + "/" + name, "_self")
      }
    }

    function Libs(value, type) {
      if (type == 'delete') {
        let globalCtx = lab_local_storage_object("global")
        globalCtx.scriptToDelete = value
        socket.emit('deleteLib', globalCtx)
      }
      if (type == 'fetch')
        fetchLibrary(value)
    }

    function Folders(value, type) {
      if (type == 'delete') {
        const userLSG = lab_local_storage_object('global')
        userLSG.mediaListToRemove = value
        socket.emit('deleteMediaList', userLSG)
      }
    }

    function SQL(value, type) {
      if (['newSqlTable', 'sqlTableDel'].includes(type)) {
        let info
        if (type == 'sqlTableDel') info == 'tableToDel'
        else info == 'newTable'

        userLSG[info] = value

        socket.emit(type, userLSG)
      }
    }

    function ActionListing(parent, array, head, func, list, btnVal) {
      const heading = lab_design_system('h6', 'app-menu-heading', parent, head, '', ['appMenu', 'heading'])
      const scrollList = lab_design_system('div', 'scrollList', parent, '', 'scrollable', ['appMenu', 'scrollList'])
      const pList = lab_design_system('div', 'app-menu-act', scrollList, '', '', ['appMenu', 'DBList'])

      array.forEach((e, index) => {
        const db = lab_design_system('div', `actions-${index}`, pList, '', '', ['appMenu', 'db'])
        const name = lab_design_system('span', `actions-name-${index}`, db, e, '', ['appMenu', 'link'])
        moreBtn(db, `actions-item-${index}`, list, e, func)
      })

      const bottom = lab_design_system('div', `bottom`, parent, '', '', ['appMenu', 'execute'])
      const input = Input('act-name', bottom)
      input.style.minWidth = '220px'
      input.style.width = 'fit-content'
      const btn = lab_design_system('button', 'act-btn', bottom, lngData.add, '', ['buttons', 'action'])
      btn.style.width = 'fit-content'
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const regex = /^[A-Za-z0-9-._~]+$/
        if (input.value && regex.test(input.value)) {
          func(input.value, btnVal)
        } else alertUser(lngData.column_name_cannot_be_empty)
      })

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
        dropDown(settings, settings.versioning, 'settings', (e) => Settings(e), wrapper)
        const setWrap = lab_design_system('div', 'setWrap', wrapper, '', '', ['appMenu', 'setWrap'])

        function Settings(name = 'versioning') {
          setWrap.innerHTML = ''
          if (name == 'versioning') {
            socket.emit("getUserBackups", lab_local_storage_object('global'), b => {
              const heading = lab_design_system('h6', 'manual-backup', setWrap, lngData.manual_management, '', ['appMenu', 'heading'])
              const row = lab_design_system('div', 'backup', setWrap, '', '', ['appMenu', 'execute'])
              row.style.position = 'relative'
              row.style.zIndex = 2
              const create = lab_design_system('button', `c-backup`, row, lngData.create, '', ['buttons', 'action'])
              create.style.width = 'fit-content'

              create.addEventListener('click', e => {
                const userLSG = lab_local_storage_object('global')
                const now = new Date(Date.now())
                const year = now.getFullYear()
                const month = (now.getMonth() + 1).toString().padStart(2, '0')
                const day = now.getDate().toString().padStart(2, '0')
                const hours = now.getHours().toString().padStart(2, '0')
                const minutes = now.getMinutes().toString().padStart(2, '0')
                userLSG.timeStamp = `${year}_${month}_${day}_${hours}_${minutes}`
                socket.emit("makeAppBackup", userLSG)
              })

              const text = lab_design_system('span', `row-text`, row, lngData.load_a_previous_version)
              const previous = dropDown(b.manual, b.manual[0], 'previous-backup', null, row)
              previous.wrap.style.maxWidth = '200px'
              const upload = lab_design_system('button', `u-backup`, row, lngData.load, '', ['buttons', 'action'])
              upload.style.width = 'fit-content'
              upload.addEventListener('click', e => {
                const userLSG = lab_local_storage_object('global')
                userLSG.backupDate = previous.text.innerHTML
                socket.emit('eraseByBackup', userLSG)
              })

              const auto = lab_design_system('h6', 'auto-backup', setWrap, lngData.automatic_management, '', ['appMenu', 'heading'])
              const autoRow = lab_design_system('div', 'a-backup', setWrap, '', '', ['appMenu', 'execute'])
              const autoBack = dropDown(b.auto, b.auto[0], 'previous-backup-auto', null, autoRow)
              autoBack.wrap.style.maxWidth = '200px'

              const uploadAuto = lab_design_system('button', `u-backup-a`, autoRow, lngData.load, '', ['buttons', 'action'])
              uploadAuto.style.width = 'fit-content'

              uploadAuto.addEventListener('click', e => {
                const userLSG = lab_local_storage_object('global')
                userLSG.auto = true
                userLSG.day = autoBack.text.innerHTML
                socket.emit('eraseByBackup', userLSG)
              })
            })
          }
          else if (name == 'pages_management') {
            ActionListing(setWrap, sectionElementsObject.sections, lngData.pages_management, Pages, {
              'removeSection': "delete",
              'open': "open"
            }, 'addNewSection')
          }
          else if (name == 'libraries') {
            ActionListing(setWrap, sectionElementsObject.configuration.scripts, lngData.libraries, Libs, { 'delete': "delete" }, 'fetch')
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
              selected = collabs[index]
              const rightsTypes = dropDown(rightArr, collabRights[index], 'rights-type', selcetRights, rightsRow)
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
              }

              selcetRights()
            }
            writeCollab()
          }

          lab_fade_in_recursively(setWrap, 0.3)
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
        if (sectionElementsObject.mediaLists.length > 0) {
          sectionElementsObject.mediaLists.forEach(e => {
            const item = lab_design_system('div', `forder-${e.listName}`, folders, '', '', ['appMenu', 'folder'])
            const icon = lab_design_system('img', `forder-${e.listName}-icon`, item)
            icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/folder.svg`)
            const text = lab_design_system('div', `forder-${e.listName}-name`, item, e.listName)
            text.style.marginRight = 'auto'
            moreBtn(item, `folder-${e.listName}`, { 'delete': "delete" }, e.listName, Folders)

            item.addEventListener('click', () => {
              if (e.listName != selectedFolder) {
                let last = document.querySelector('.selected-folder')
                if (last) {
                  last.style.background = 'transparent'
                  last.classList.remove('selected-folder')
                }
                item.classList.add('selected-folder')
                item.style.background = '#fff'

                selectedFolder = e.listName
                openFolder(e.files)
              }

            })
          })
        }
        else folders.innerHTML = lngData.zero_media_list

        function openFolder(list) {
          files.innerHTML = ''
          if (list.length > 0) {
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

        let buttons = {
          'import': lngData.import_files,
          'create': lngData.new_folder
        }

        Object.keys(buttons).forEach(e => {
          const btn = lab_design_system('div', `forder-${e}`, bottom, '', '', ['appMenu', 'borderBtn'])
          const icon = lab_design_system('img', `forder-${e}-icon`, btn)
          icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/new-folder.svg`)
          const text = lab_design_system('div', `forder-${e}-name`, btn, buttons[e])
          btn.addEventListener('click', (ev) => {
            ev.preventDefault()
            if (e == 'create') {
              let input = document.getElementById('lab-new-folder-name')
              if (input) {
                userLSG.addedMediaList = input.value
                socket.emit('addNewMediaList', userLSG)
              } else Input('new-folder-name', bottom)
            } else {
              let input = document.getElementById('lab-file-input')
              if (selectedFolder) {
                getMediaFilesFile(input.id, selectedFolder)
                input.click()
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
        wrap.style.height = '100%'
        wrap.style.maxHeight = '100%'

        const drop = dropDown(server, server.lab_user_personnal_server, 'serv', (e) => deployBox(e), left)
        const leftBox = lab_design_system('div', 'app-deploy-box', left, '', '', ['appMenu', 'leftBox'])

        function deployBox(e = 'lab_user_personnal_server') {
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
            const drop = dropDown(git_settings, git_settings.credentials, 'git', (e) => subBox(git, e), left)
            const git = lab_design_system('div', 'app-sub-box', leftBox, '', '', ['appMenu', 'leftBox'])

          }
          lab_fade_in_recursively(leftBox, 0.3)
        }

        function subBox(parent, e) {
          parent.innerHTML = ''

          if (e == 'credentials') {
            const username = Input('ssh', subBox, lngData.username, '')
            const email = Input('pass', subBox, lngData.email, '')
            const dir = Input('dir', subBox, lngData.remote_app_dir, '')
            const port = Input('port', subBox, lngData.port, '')
            const save = lab_design_system('button', `save`, subBox, lngData.save, '', ['buttons', 'action'])
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

        }


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

        deployBox()
      }

      else if (slide == 'database') {
        const wrapper = lab_design_system('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])
        ActionListing(wrapper, sectionElementsObject.databases, sideButtons[slide], SQL, {
          'sqlTableDel': "delete"
        }, 'newSqlTable')
      }

      lab_fade_in_recursively(box, 0.3)
    }
    RenderBox()

    function moreBtn(parent, id, list, el, func) {
      const more = lab_design_system('button', `more-btn-${id}`, parent, '', '', ['appMenu', 'more'])
      const icon = lab_design_system('img', `more-btn-${id}-icon`, more)
      icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/more_vert.svg`)
      icon.style.transform = 'rotate(90deg)'

      more.addEventListener('click', () => {
        const listing = lab_design_system('div', `more-list-${id}`, more, '', '', ['appMenu', 'moreList'])

        Object.keys(list).forEach((e, i) => {
          const item = lab_design_system('div', `more-list-${i}`, listing, list[e])
          item.addEventListener('click', () => func(el, e))
        })

        listing.addEventListener('mouseleave', () => listing.remove())
      })
    }

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
      return input
    }

    function dropDown(list, value, id, func, parent = box) {
      const wrap = lab_design_system('div', `${id}-wrap`, parent, '', '', ['appMenu', 'drop'])
      const selected = lab_design_system('div', `${id}-selected`, wrap, '', '', ['appMenu', 'selected'])
      const text = lab_design_system('span', `${id}-text`, selected, value.replace(/"/gi, ''))
      const icon = lab_design_system('img', `${id}-icon`, selected, '', '', ['design', 'icon'])
      icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/arrow_drop_down.svg`)

      const listing = lab_design_system('div', `${id}-list`, wrap, '', 'scrollable', ['appMenu', 'list'])
      if (typeof list == 'array') {
        list.forEach(e => {
          const item = lab_design_system('div', `${id}-list-${e}`, listing, e)
          item.addEventListener('click', () => {
            text.innerHTML = e
            func(e)
          })
        })
      } else {
        Object.keys(list).forEach(e => {
          const item = lab_design_system('div', `${id}-list-${e}`, listing, list[e])
          item.addEventListener('click', () => {
            text.innerHTML = list[e]
            func(e)
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

    const fileInput = lab_design_system('input', 'file-input', rootLayer, '', '', ['design', 'noneFile'])
    fileInput.setAttribute('type', 'file')


    lab_fade_in_recursively(menu, 0.3)
  })
}

return AppMenu