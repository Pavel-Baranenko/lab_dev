const styles = {
    "buttons": {
      "yellowBtn": {
        "default": {
          "borderRadius": "13px",
          "paddingTop": "clamp(2svh, 10svh, 11px)",
          "paddingBottom": "clamp(2svh, 10svh, 11px)",
          "paddingLeft": "clamp(5svw, 2vw, 50px)",
          "paddingRight": "clamp(5svw, 2vw, 50px)",
          "width": "fit-content",
          "background": "#fed05e",
          "fontWeight": "500",
          "fontSize": "clamp(14px, 2vw, 20px)",
          "textAlign": "center",
          "marginTop": "clamp(1svh, 10svh, 40px)",
          "border": "none"
        },
        "Landscape": {
          "paddingLeft": "50px",
          "paddingRight": "50px"
        }
      },
      "action": {
        "default": {
          "borderRadius": "15px",
          "paddingBottom": "clamp(2svh, 5svh, 12px)",
          "paddingTop": "clamp(2svh, 5svh, 12px)",
          "paddingLeft": "clamp(2svw, 5svw, 20px)",
          "paddingRight": "clamp(2svw, 5svw, 20px)",
          "background": "#feda31",
          "fontWeight": "700",
          "font-size": "clamp(10px, 14px, 18px)",
          "color": "#000",
          "border": "none",
          "boxSizing": "border-box",
          "textAlign": "center"
        }
      },
      "grey": {
        "default": {
          "borderRadius": "15px",
          "paddingBottom": "clamp(2svh, 5svh, 12px)",
          "paddingTop": "clamp(2svh, 5svh, 12px)",
          "paddingLeft": "clamp(2svw, 5svw, 20px)",
          "paddingRight": "clamp(2svw, 5svw, 20px)",
          "background": "#DFDFDF",
          "fontWeight": "700",
          "font-size": "clamp(10px, 14px, 18px)",
          "color": "#000",
          "border": "none",
          "boxSizing": "border-box"
        }
      }
    },
    'appMenu': {
      'wrap': {
        'default': {
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 99999999
        }
      },
      'menu': {
        'default': {
          position: "fixed",
          top: '50%',
          left: '50%',
          transform: "translateY(-50%) translateX(-50%)",
          width: '100%',
          maxWidth: "clamp(69%, 90%,1320px)",
          minHeight: "clamp(69%, 90%,820px)",
          display: "flex",
          boxShadow: '0px 4px 18.9px -4px #0000002E',
          zIndex: 99999999,
          borderRadius: "50px"
        }
      },
      'side': {
        'default': {
          background: "#3C4CA6",
          borderRadius: "50px 0 0 50px",
          width: '100%',
          maxWidth: "clamp(9%, 10%, 110px)",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "30px 0 30px 18px",
          boxSizing: "border-box"
        }
      },
      'sideBtn': {
        'default': {
          background: "transparent",
          borderRadius: "15px 0 0 15px",
          padding: "15px 30px 15px 15px",
          width: '100%',
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: '10px',
          color: "#fff",
          fontSize: '14px',
          cursor: "pointer",
          fontWeight: 500,
          textAlign: 'center',
          border: 'none'
        }
      },
      'box': {
        'default': {
          background: "#fff",
          borderRadius: " 0 50px 50px 0",
          width: '100%',
          minHeight: "100%"
        }
      },
      'wrapper': {
        'default': {
          padding: "45px 50px",
          boxSizing: "border-box",
          display: "flex",
          minHeight: "100%",
          width: '100%',
          flexDirection: "column",
          gap: '20px'
        }
      },
      'heading': {
        'default': {
          fontSize: '22px',
          fontWeight: 700,
          margin: '0',
          color: "#000"
        }
      },
      'textBox': {
        'default': {
          borderRadius: "25px",
          background: "#F7F7F7",
          boxSizing: "border-box",
          width: '100%',
          height: "100%",
          outline: "none",
          overflowY: "scroll",
          padding: "24px 80px 24px 24px"
        }
      },
      'drop': {
        'default': {
          position: "relative",
          cursor: "pointer",
          zIndex: 10
        }
      },
      'selected': {
        'default': {
          display: "flex",
          alignItems: 'center',
          justifyContent: "space-between",
          padding: "10px 6px",
          background: "#F4F4F5",
          borderRadius: "10px",
          boxSizing: 'border-box',
          height: "50px"
        }
      },
      'list': {
        'default': {
          position: "absolute",
          top: '40px',
          left: 0,
          right: 0,
          display: "none",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          padding: "10px",
          background: "#F4F4F5",
          borderRadius: "0 0 10px 10px",
          boxSizing: 'border-box'
        }
      },
      'row': {
        'default': {
          display: "flex",
          alignItems: "center",
          maxWidth: "700px",
          justifyContent: "space-between"
        }
      },
      'fold': {
        'default': {
          display: "flex",
          height: "100%",
          boxSizing: 'border-box',
          width: "100%",
          maxWidth: "255px",
          background: "#ECF0F9",
          display: "flex",
          flexDirection: "column",
          padding: '30px 0 25px 30px'
        }
      },
      'media': {
        'default': {
          display: "flex",
          boxSizing: 'border-box',
          height: "100%",
          width: "100%"
        }
      },
      'folder': {
        'default': {
          width: '100%',
          boxSizing: 'border-box',
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: '12px',
          fontWeight: 500,
          padding: '15px',
          borderRadius: "10px 0 0 10px",
          color: '#000'
        }
      },
      'bottom': {
        'default': {
          width: '100%',
          boxSizing: 'border-box',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          padding: '0 30px 0 0',
          gap: '12px',
          marginTop: "auto"
        }
      },
      'borderBtn': {
        'default': {
          width: '100%',
          boxSizing: 'border-box',
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: '12px',
          color: "#575757",
          padding: '13px',
          border: '1.55px dashed #000',
          borderRadius: '8px',
        }
      },
      'Input': {
        'default': {
          width: '100%',
          background: '#F4F4F5',
          boxSizing: 'border-box',
          cursor: "pointer",
          height: "50px",
          padding: '5px 20px',
          outline: 'none',
          border: 'none',
          textALign: 'center',
          borderRadius: '12px',
        }
      },
      'deploy': {
        'default': {
          width: '100%',
          display: 'flex',
          gap: '40px'
        }
      },
      'left': {
        'default': {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '260px',
        }
      },
      'leftBox': {
        'default': {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }
      },
      'right': {
        'default': {
          width: '100%'
        }
      },
      'execute': {
        'default': {
          display: "flex",
          gap: "30px"
        }
      },
      "DBList": {
        'default': {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: "770px"
        }
      },
      'db': {
        'default': {
          display: "flex",
          alignItems: 'center',
          justifyContent: "space-between",
          fontWeight: 500,
          lineHeight: '34.81px',
          padding: ' 7px 20px',
          background: '#F7F7F7',
          borderRadius: '12px'
        }
      },
      'setWrap': {
        'default': {
          display: "flex",
          flexDirection: "column",
          gap: '10px'
        }
      }
    },
    "design": {
      "icon": {
        "default": {
          "maxWidth": "100%"
        }
        },
        "noneFile": {
            "default": {
                "position": "absolute",
                "top": "-999999999999999999px",
                "left": "-999999999999999999px",
                "width": 0,
                "height": 0
            }
        }
    }
  }

function lab_design_system_d(tag, id, parent, content, className, styled) {
  const elementToAppend = document.createElement(tag)
  elementToAppend.setAttribute("id", "lab-" + id)
  parent.appendChild(elementToAppend)

  const A = document.querySelector("#" + "lab-" + id)
  A.setAttribute("class", "escape")
  className ? elementToAppend.setAttribute("class", `lab-${className} escape`) : ""

  if (content && typeof content == "string") {
    A.innerText = content
  }
  A.style.opacity = 1
  if (styled) {
    let elementStyles = styled.length > 1 ? styles[styled[0]][styled[1]] : styles[styled[0]]

    Object.keys(elementStyles.default).forEach(e => {
      A.style[e] = elementStyles.default[e]
    })

    if (elementStyles[lab_orientation]) {
      Object.keys(elementStyles[lab_orientation]).forEach(e => {
        A.style[e] = elementStyles[lab_orientation][e]
      })
    }
  }

  return A
}

function AppMenu(dashObj) {
    const userLSG = lab_local_storage_object('global')
    const lngData = dashObj.lngData
    userLSG.app = dashObj.selectedApp
    userLSG.section = 'home'
    socket.emit('getAppData', userLSG, res => {
        sectionElementsObject = res

        const menuWrap = lab_design_system_d('div', 'app-menu-wrap', rootLayer, '', '', ['appMenu', 'wrap'])
        const menu = lab_design_system_d('div', 'app-menu', rootLayer, '', '', ['appMenu', 'menu'])
        const side = lab_design_system_d('div', 'app-menu-side', menu, '', '', ['appMenu', 'side'])
        const box = lab_design_system_d('div', 'app-menu-box', menu, '', '', ['appMenu', 'box'])

        let activeSlide;

        const sideButtons = {
            'backup': 'Settings',
            'css': 'CSS',
            'js': 'JS',
            'media': 'Media',
            'database': 'Database',
            'deploy': 'Deploy'
        }

        const settings = {
            'versioning': "Versioning",
            'pages_management': "Pages management",
            // 'libraries': "Libraries",
            'collaborative_mode': "Collaborative mode",
            'svg_fragmentation': "Svg fragmentation",
            'ephemeral_sharing': "Ephemeral sharing",
        }

        const server = {
            'lab_user_personnal_server': lngData.personnal_distant_server,
            // 'laboranth_remote_server': lngData.laboranth_remote_server,
            "laboranth_deploy_git": "Git",
            "laboranth_deploy_zip": "Zip"
        }

        Object.keys(sideButtons).forEach(e => {
            const btn = lab_design_system_d('button', `app-menu-btn-${e}`, side, '', '', ['appMenu', 'sideBtn'])
            const icon = lab_design_system_d('img', `app-menu-btn-icon-${e}`, btn)
            const span = lab_design_system_d('span', `app-menu-btn-span-${e}`, btn, sideButtons[e])
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
                    btn.classList.add('app-menu-active')
                    btn.style.color = '#3C4CA6'
                    btn.style.background = '#fff'
                    icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${e}-white.svg`)
                    RenderBox(e)
                }
            })
        })

        function RenderBox(slide = 'backup') {
            box.innerHTML = ''
            activeSlide = slide

            if (slide == 'backup') {
                const wrapper = lab_design_system_d('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])
                dropDown(settings, settings.versioning, 'settings', (e) => Settings(e), wrapper)
                const setWrap = lab_design_system_d('div', 'setWrap', wrapper, '', '', ['appMenu', 'setWrap'])
                Settings('versioning')

                function Settings(name) {
                    setWrap.innerHTML = ''
                    if (name == 'versioning') {
                        socket.emit("getUserBackups", lab_local_storage_object('global'), b => {
                            console.log(b);

                            const heading = lab_design_system_d('h6', 'manual-backup', setWrap, 'Manual backup', '', ['appMenu', 'heading'])
                            const row = lab_design_system_d('div', 'backup', setWrap, '', '', ['appMenu', 'row'])
                            row.style.position = 'relative'
                            row.style.zIndex = 2
                            const create = lab_design_system_d('button', `c-backup`, row, 'Create', '', ['buttons', 'action'])
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

                            const text = lab_design_system_d('span', `row-text`, row, 'Upload previous version')
                            const previous = dropDown(b.manual, b.manual[0], 'previous-backup', null, row)
                            previous.wrap.style.maxWidth = '200px'
                            const upload = lab_design_system_d('button', `u-backup`, row, 'Upload', '', ['buttons', 'action'])
                            upload.style.width = 'fit-content'
                            upload.addEventListener('click', e => {
                                const userLSG = lab_local_storage_object('global')
                                userLSG.backupDate = previous.text.innerHTML
                                socket.emit('eraseByBackup', userLSG)
                            })

                            const auto = lab_design_system_d('h6', 'auto-backup', setWrap, 'Auto backup', '', ['appMenu', 'heading'])
                            const autoRow = lab_design_system_d('div', 'a-backup', setWrap, '', '', ['appMenu', 'row'])
                            const autoBack = dropDown(b.auto, b.auto[0], 'previous-backup-auto', null, autoRow)
                            autoBack.wrap.style.maxWidth = '200px'

                            const uploadAuto = lab_design_system_d('button', `u-backup-a`, autoRow, 'Upload', '', ['buttons', 'action'])
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

                        const heading = lab_design_system_d('h6', 'app-menu-heading', setWrap, 'Pages', '', ['appMenu', 'heading'])
                        const DBList = lab_design_system_d('div', 'app-menu-db', setWrap, '', '', ['appMenu', 'DBList'])

                        sectionElementsObject.sections.forEach((e, index) => {
                            const db = lab_design_system_d('div', `db-${index}`, DBList, '', '', ['appMenu', 'db'])
                            const name = lab_design_system_d('span', `db-name-${index}`, db, e)

                            db.addEventListener('click', e => {
                                lab_local_storage_object_update('global', { "section": e })
                                window.open(window.location.protocol + "//" + window.location.host + "/" + lab_local_storage_object('global').app + "/" + e, "_self")
                            })
                        })
                        const bottom = lab_design_system_d('div', `bottom`, setWrap, '', '', ['appMenu', 'execute'])
                        const input = Input('db-name', bottom)
                        input.style.maxWidth = '220px'

                        const create = lab_design_system_d('button', `create`, bottom, lngData.create, '', ['buttons', 'action'])

                        create.style.width = 'fit-content'

                        create.addEventListener('click', () => {
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
                }
            }

            else if (['css', 'js'].includes(slide)) TextEditableBox(slide)

            else if (slide == 'media') {
                let selectedFolder;
                const media = lab_design_system_d('div', 'app-menu-media', box, '', '', ['appMenu', 'media'])
                const folders = lab_design_system_d('div', 'app-menu-fold', media, '', '', ['appMenu', 'fold'])
                const wrapper = lab_design_system_d('div', 'app-menu-wrapper', media, '', '', ['appMenu', 'wrapper'])
                const heading = lab_design_system_d('span', 'app-menu-fold', folders, 'Your files')
                sectionElementsObject.mediaLists.forEach(e => {
                    const item = lab_design_system_d('div', `forder-${e.listName}`, folders, '', '', ['appMenu', 'folder'])
                    const icon = lab_design_system_d('img', `forder-${e.listName}-icon`, item)
                    icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/folder.svg`)
                    const text = lab_design_system_d('div', `forder-${e.listName}-name`, item, e.listName)

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

                function openFolder(list) {
                    wrapper.innerHTML = ''

                    list.forEach((e, index) => {
                        const file = lab_design_system_d('div', `file-${index}`, wrapper)
                        const img = lab_design_system_d('img', `file-img-${index}`, file)
                        const span = lab_design_system_d('span', `file-span-${index}`, file, e)
                        img.setAttribute('scr', `/DB/USERS_FOLDERS/${sectionElementsObject.uid}/apps/${sectionElementsObject.app}/content/sections/${sectionElementsObject.section}/img/${e}`)
                    })
                }

                const bottom = lab_design_system_d('div', 'app-fold-bottom', folders, '', '', ['appMenu', 'bottom'])
                let buttons = {
                    'import': "Import files",
                    'create': "Create folder"
                }
                Object.keys(buttons).forEach(e => {
                    const btn = lab_design_system_d('div', `forder-${e}`, bottom, '', '', ['appMenu', 'borderBtn'])
                    const icon = lab_design_system_d('img', `forder-${e}-icon`, btn)
                    icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/new-folder.svg`)
                    const text = lab_design_system_d('div', `forder-${e}-name`, btn, buttons[e])
                    btn.addEventListener('click', () => {
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
                const wrapper = lab_design_system_d('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])
                const deploy = lab_design_system_d('div', 'app-menu-deploy', wrapper, '', '', ['appMenu', 'deploy'])
                const left = lab_design_system_d('div', 'app-deploy-left', deploy, '', '', ['appMenu', 'left'])
                const right = lab_design_system_d('div', 'app-deploy-right', deploy, '', '', ['appMenu', 'right'])
                const heading = lab_design_system_d('h6', 'app-menu-heading', left, 'Deploying', '', ['appMenu', 'heading'])
                const wrap = lab_design_system_d('div', `app-menu-text-wrap`, right, '', '', ['appMenu', 'textBox'])
                wrap.contentEditable = true


                const drop = dropDown(server, server.lab_user_personnal_server, 'serv', (e) => deployBox(e), left)
                const leftBox = lab_design_system_d('div', 'app-deploy-box', left, '', '', ['appMenu', 'leftBox'])

                function deployBox(e = 'lab_user_personnal_server') {
                    leftBox.innerHTML = ''
                    if (e == 'lab_user_personnal_server') {
                        const ip = Input('ip', leftBox, 'XX.XX.XXX.XX', '')
                        const ssh = Input('ssh', leftBox, lngData.username_ssh, '')
                        const pass = Input('pass', leftBox, lngData.password, '')
                        const dir = Input('dir', leftBox, lngData.remote_app_dir, '')
                        const port = Input('port', leftBox, lngData.port, '')
                        const save = lab_design_system_d('button', `save`, leftBox, lngData.save, '', ['buttons', 'action'])
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
                        const donwload = lab_design_system_d('button', `donwload`, leftBox, lngData.download, '', ['buttons', 'action'])
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
                }
                const executeBox = lab_design_system_d('div', 'deploy-execute', wrapper, '', '', ['appMenu', 'execute'])
                const command = Input('command', executeBox, 'ls')
                const execute = lab_design_system_d('button', `execute`, executeBox, lngData.run_cmd, '', ['buttons', 'action'])
                execute.style.width = 'fit-content'
                execute.style.whiteSpace = 'nowrap'

                execute.addEventListener('click', () => {
                    const userLSG = lab_local_storage_object('global')
                    userLSG.command = command.value
                    command.value = ""
                    socket.emit("runRemoteCommand", userLSG)
                })

                const deployBtn = lab_design_system_d('button', `btn-deploy`, wrapper, lngData.deployment, '', ['buttons', 'action'])
                deployBtn.style.width = 'fit-content'

                deployBtn.addEventListener('click', e => {
                    const userLSG = lab_local_storage_object('global')
                    userLSG.uploadingConfig = uploadingConfig
                    socket.emit('sshDeploy', userLSG)
                })

                deployBox()
            }

            else if (slide == 'database') {
                const wrapper = lab_design_system_d('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])
                const heading = lab_design_system_d('h6', 'app-menu-heading', wrapper, sideButtons[slide], '', ['appMenu', 'heading'])
                const DBList = lab_design_system_d('div', 'app-menu-db', wrapper, '', '', ['appMenu', 'DBList'])

                sectionElementsObject.databases.forEach((e, index) => {
                    const db = lab_design_system_d('div', `db-${index}`, DBList, '', '', ['appMenu', 'db'])
                    const name = lab_design_system_d('span', `db-name-${index}`, db, e)
                })
                const bottom = lab_design_system_d('div', `bottom`, wrapper, '', '', ['appMenu', 'execute'])
                const input = Input('db-name', bottom)
                input.style.maxWidth = '220px'

                const create = lab_design_system_d('button', `create`, bottom, lngData.create, '', ['buttons', 'action'])

                create.style.width = 'fit-content'

                create.addEventListener('click', () => {
                    if (input.value) {
                        const userData = lab_local_storage_object('global')
                        userData.newTable = input.value
                        socket.emit('newSqlTable', userData)
                    } else alertUser(lngData.column_name_cannot_be_empty)
                })
            }
            // lab_local_storage_object_update('global', { openedMenu: 'app_css' })
            // socket.emit('askCSSFile', lab_local_storage_object('global'), e => {
            //   console.log(e);
            // })
        }

        RenderBox()

        function TextEditableBox(type) {
            const wrapper = lab_design_system_d('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])
            const heading = lab_design_system_d('h6', 'app-menu-heading', wrapper, sideButtons[type], '', ['appMenu', 'heading'])
            const wrap = lab_design_system_d('div', `app-menu-text-wrap`, wrapper, '', '', ['appMenu', 'textBox'])
            wrap.contentEditable = true
            const btn = lab_design_system_d('button', `app-menu-btn`, wrapper, 'Save', '', ['buttons', 'action'])
            btn.style.width = 'fit-content'

            if (type === 'css') {
                socket.emit('askCSSFile', userLSG, e => {
                    console.log(e);
                })
            }
            if (type === 'js') {
                socket.emit('askFeaturesFile', userLSG, e => {
                    console.log(e);
                })
            }
        }

        function Input(id, parent, placeholder = '', value = '') {
            const input = lab_design_system_d('input', id, parent, '', '', ['appMenu', 'Input'])
            input.setAttribute('placeholder', placeholder)
            input.setAttribute('value', value)
            return input
        }

        function dropDown(list, value = '', id, func, parent = box, placeholder) {
            const wrap = lab_design_system_d('div', `${id}-wrap`, parent, '', '', ['appMenu', 'drop'])
            const selected = lab_design_system_d('div', `${id}-selected`, wrap, '', '', ['appMenu', 'selected'])
            const text = lab_design_system_d('span', `${id}-text`, selected, value.replace(/"/gi, ''))
            const icon = lab_design_system_d('img', `${id}-icon`, selected, '', '', ['design', 'icon'])
            icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/arrow_drop_down.svg`)

            const listing = lab_design_system_d('div', `${id}-list`, wrap, '', '', ['appMenu', 'list'])

            if (typeof list == 'array') {
                list.forEach(e => {
                    const item = lab_design_system_d('div', `${id}-list-${e}`, listing, e)

                    item.addEventListener('click', () => {
                        text.innerHTML = e
                        func(e)
                    })
                })
            } else {
                Object.keys(list).forEach(e => {
                    const item = lab_design_system_d('div', `${id}-list-${e}`, listing, list[e])

                    item.addEventListener('click', () => {
                        text.innerHTML = list[e]
                        func(e)
                    })
                })
            }

            wrap.addEventListener('click', () => {
                listing.style.display = listing.style.display == 'flex' ? 'none' : 'flex'
            })

            return { wrap, text }
        }

        menuWrap.addEventListener('click', () => {
            menuWrap.remove()
            menu.remove()
        })

        const fileInput = lab_design_system_d('input', 'file-input', rootLayer, '', '', ['design', 'noneFile'])
        fileInput.setAttribute('type', 'file')
    })
}

return AppMenu