



function lab_UI_LAB(appList = ["adsa", "asdasc"], checkLng = 'ru', externalApps = ['asa', "sadcxsx"], accountStatus) {

  let dash_background_element = new Happened('div', 'lab-background', rootLayer)
  dash_background_element.csa()
  let dash_background = dash_background_element.get()
  dash_background.style.position = "fixed"
  dash_background.style.backgroundColor = "#91B2F2"
  dash_background.style.width = 100 + "svw"
  dash_background.style.height = 100 + "svh"

  // LOGO
  let logoDashElement = new Happened('img', 'lab-logo', rootLayer)
  logoDashElement.csa()
  let logoDash = logoDashElement.get()
  logoDash.style.position = "fixed"
  logoDash.style.opacity = 0
  logoDash.style.top = 15 + "px"
  logoDash.style.left = 15 + "px"
  logoDash.src = "/D/R/IMG/logoAlt.svg"

  // APP LIST
  let applicationsContainerElement = new Happened("div", "lab-applications", rootLayer)
  applicationsContainerElement.csa()
  let applicationsContainer = applicationsContainerElement.get()
  applicationsContainer.setAttribute('class', "hidden-scrolls")
  applicationsContainer.style.position = "fixed"
  applicationsContainer.style.opacity = 0
  applicationsContainer.style.maxWidth = 200 + "px"
  applicationsContainer.style.height = 70 + "svh"
  applicationsContainer.style.top = 94 + "px"

  if (window.innerWidth > window.innerHeight) {
    applicationsContainer.style.width = 25 + "svw"
  } else {
    applicationsContainer.style.width = 45 + "svw"
  }

  if (window.innerHeight < 550) {
    applicationsContainer.style.height = 50 + "svh"
  }

  let appD = document.querySelector("#lab-applications").getBoundingClientRect()

  applicationsContainer.style.left = window.innerWidth / 2 - appD.width / 2 + "px"
  applicationsContainer.style.backgroundColor = "white"
  applicationsContainer.style.borderBottomLeftRadius = '200px'
  applicationsContainer.style.borderBottomRightRadius = '200px'
  applicationsContainer.style.overflowY = "scroll"
  applicationsContainer.style.overflowX = "hidden"

  let labPersonnalApps = true
  new Happened("br", "", applicationsContainer).csa()
  appList.forEach(a => {
    if (a != ".DS_Store") {
      let toAppend = new Happened("div", a, applicationsContainer)
      toAppend.csa()
      let computed = toAppend.get()
      computed.innerText = a
      computed.style.opacity = 0
      computed.style.textAlign = "center"
      computed.style.color = "grey"
      computed.style.userSelect = "none"
      computed.style.fontFamily = "Petrona Italic"
      computed.style.wordWrap = "break-word"
      computed.style.cursor = "pointer"
      new Happened("br", "", applicationsContainer).csa()
      computed.addEventListener('click', () => {
        lab_local_storage_object_update('global', { "ctx": "Application", "app": a, "section": "home", "externalApp": false })
        window.open(window.location.href + a + "/" + "home", "_self")
      })
    }
  })
  new Happened("br", "", applicationsContainer).csa()

  let applicationsButtons = new Happened('div', 'lab-app-buttons', rootLayer)
  applicationsButtons.csa()
  let applicationsButtonsC = applicationsButtons.get()
  applicationsButtonsC.style.display = "flex"
  applicationsButtonsC.style.position = 'fixed'
  applicationsButtonsC.style.opacity = 0
  applicationsButtonsC.style.width = 11 + "svw"
  applicationsButtonsC.style.minWidth = 111 + "px"
  applicationsButtonsC.style.height = 3 + "svh"
  let appsButtonsLefter = document.querySelector("#lab-app-buttons").getBoundingClientRect()

  applicationsButtonsC.style.left = window.innerWidth / 2 - appsButtonsLefter.width / 2 + "px"
  applicationsButtonsC.style.zIndex = 10
  applicationsButtonsC.style.top = applicationsContainer.getBoundingClientRect().bottom + 10 + "px"

  // EXTERNAL APPS SWITCH
  if (externalApps && externalApps.length > 0) {
    let lab_external_apps_switch_element = new Happened('img', 'lab-external-apps-switch', rootLayer)
    lab_external_apps_switch_element.csa()
    let lab_external_apps_switch = lab_external_apps_switch_element.get()
    lab_external_apps_switch.style.display = "flex"
    lab_external_apps_switch.style.position = 'fixed'
    lab_external_apps_switch.style.opacity = 0
    lab_external_apps_switch.style.width = 44 + "px"
    lab_external_apps_switch.style.height = 44 + "px"
    lab_external_apps_switch.style.rotate = "180deg"
    lab_external_apps_switch.style.cursor = "pointer"
    lab_external_apps_switch.style.left = document.querySelector('#lab-applications').getBoundingClientRect().left - 50 + "px"
    lab_external_apps_switch.style.top = document.querySelector('#lab-applications').getBoundingClientRect().top + "px"
    lab_external_apps_switch.src = "/D/R/IMG/LAB/dash/app_switch.svg"

    lab_external_apps_switch.addEventListener('click', e => {
      if (labPersonnalApps === true) {
        lab_external_apps_switch.style.rotate = "0deg";
        lab_external_apps_switch.style.transition = "rotate 1s";
        ([...applicationsContainer.children].map(a => a.remove()))
        new Happened("br", "", applicationsContainer).csa()
        externalApps.forEach(a => {
          if (a != ".DS_Store") {
            let toAppend = new Happened("div", a.app, applicationsContainer)
            toAppend.csa()
            let computed = toAppend.get()
            computed.innerText = a.app
            computed.style.textAlign = "center"
            computed.style.color = "grey"
            computed.style.userSelect = "none"
            computed.style.fontFamily = "Petrona Italic"
            computed.style.wordWrap = "break-word"
            computed.style.cursor = "pointer"
            new Happened("br", "", applicationsContainer).csa()

            computed.addEventListener('click', () => {
              lab_local_storage_object_update('global', { "ctx": "Application", "app": a, "section": "home", "externalApp": true })
              window.open(window.location.href + a.app + "/" + "home", "_self")
            })
          }
        })
        new Happened("br", "", applicationsContainer).csa()
        labPersonnalApps = false
      } else {
        lab_external_apps_switch.style.transition = "rotate 1s";
        lab_external_apps_switch.style.rotate = "180deg";
        ([...applicationsContainer.children].map(a => a.remove()))
        new Happened("br", "", applicationsContainer).csa()
        appList.forEach(a => {
          if (a != ".DS_Store") {
            let toAppend = new Happened("div", a, applicationsContainer)
            toAppend.csa()
            let computed = toAppend.get()
            computed.innerText = a
            computed.style.textAlign = "center"
            computed.style.color = "grey"
            computed.style.userSelect = "none"
            computed.style.fontFamily = "Petrona Italic"
            computed.style.wordWrap = "break-word"
            computed.style.cursor = "pointer"
            new Happened("br", "", applicationsContainer).csa()
            computed.addEventListener('click', () => {
              lab_local_storage_object_update('global', { "ctx": "Application", "app": a, "section": "home", "externalApp": false })
              window.open(window.location.href + a + "/" + "home", "_self")
            })
          }
        })
        new Happened("br", "", applicationsContainer).csa()
        labPersonnalApps = true
      }
    })
  }

  // ADD APP
  let plus = getNode("svg")
  plus.setAttributeNS(null, 'id', "lab-plus-icon")
  plus.setAttributeNS(null, 'viewBox', "0 0 10 10")
  plus.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  applicationsButtonsC.appendChild(plus)

  let computedPlus = document.querySelector("#lab-plus-icon")
  computedPlus.style.display = "flex"
  computedPlus.style.opacity = 0
  computedPlus.style.position = "absolute"
  computedPlus.style.width = "3.66svw"
  computedPlus.style.minWidth = "20px"
  computedPlus.style.height = 3 + 'svh'
  computedPlus.style.minHeight = "20px"
  computedPlus.style.left = 1 + "svw"
  computedPlus.style.cursor = "pointer"

  let plusPath = getNode('path', { d: "M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0z M7.5,5.5h-2v2h-1v-2h-2v-1h2v-2h1v2h2V5.5z", id: "plusPath", fill: "#3C4CA6" })
  computedPlus.appendChild(plusPath)

  computedPlus.addEventListener('click', e => {
    const lab_user_current_lng = lab_local_storage_object('global').lng
    lab_load_language_module(lab_user_current_lng).then(lngData => {
      lab_load_component('/D/C/UI/LAB/lab_components.js', {
        id: 'lab_create_app',
        lngData: lngData
      })
    })
  })

  // REMOVE APP
  let minus = getNode("svg")
  minus.setAttributeNS(null, 'id', "lab-minus-icon")
  minus.setAttributeNS(null, 'viewBox', "0 0 10 10")
  minus.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  applicationsButtonsC.appendChild(minus)

  let computedMinus = document.querySelector("#lab-minus-icon")
  computedMinus.style.display = "flex"
  computedMinus.style.opacity = 0
  computedMinus.style.position = "absolute"
  computedMinus.style.width = "3.66svw"
  computedMinus.style.minWidth = "20px"
  computedMinus.style.height = 3 + 'svh'
  computedMinus.style.minHeight = "20px"
  computedMinus.style.right = 1 + "svw"
  computedMinus.style.cursor = "pointer"

  let minusPath = getNode('path', { d: "M5,0C2.24,0,0,2.24,0,5s2.24,5,5,5s5-2.24,5-5S7.76,0,5,0z M7.5,5.5h-5v-1h5V5.5z", id: "minusPath", fill: "#3C4CA6" })
  computedMinus.appendChild(minusPath)

  computedMinus.addEventListener('click', e => {
    const lab_user_current_lng = readNSWithoutFields('global').lng
    lab_load_language_module(lab_user_current_lng).then(lngData => {
      lab_load_component('/D/C/UI/LAB/lab_components.js', {
        id: 'lab_delete_app',
        lngData: lngData
      })
    })
  })

  let labLateralElementsElement = new Happened('div', 'lab-dashboard-panel', rootLayer)
  labLateralElementsElement.csa()
  let labLateralElements = labLateralElementsElement.get()
  labLateralElements.style.opacity = 0
  labLateralElements.style.zIndex = "10"
  labLateralElements.style.position = "fixed"
  labLateralElements.style.display = "flex"
  labLateralElements.style.flexDirection = "column"
  labLateralElements.style.justifyContent = "space-between"
  labLateralElements.style.width = 5 + "svw"
  labLateralElements.style.minWidth = 50 + "px"
  labLateralElements.style.maxWidth = 70 + "px"
  labLateralElements.style.height = 70 + "svh"
  labLateralElements.style.right = 3 + "svw"
  labLateralElements.style.top = 5 + "svh"

  // VERSION
  let labVersionElement = new Happened('img', 'lab-version', labLateralElements)
  labVersionElement.csa()
  let labVersion = labVersionElement.get()
  labVersion.style.position = "relative"
  labVersion.style.opacity = 0
  labVersion.style.width = 100 + "%"
  labVersion.src = "/D/R/IMG/labVersionRC.svg"

  // PARAMETERS
  let lab_dash_parameters_element = new Happened('img', 'lab-settings-icon', labLateralElements)
  lab_dash_parameters_element.csa()
  let lab_dash_parameters = lab_dash_parameters_element.get()
  lab_dash_parameters.style.position = "relative"
  lab_dash_parameters.style.opacity = 0
  lab_dash_parameters.style.width = 100 + "%"
  lab_dash_parameters.style.cursor = "pointer"
  lab_dash_parameters.src = "/D/R/IMG/LAB/dash/parametersLab.svg"

  lab_dash_parameters.addEventListener('click', () => {
    socket.emit('askAccount', lab_local_storage_object('global'), res => {
      lab_load_language_module(res.configs.language).then(lngData => {
        res.lngData = lngData
        res.lng = res.configs.language
        lab_load_component('/D/C/UI/LAB/lab_dash_settings.js', res)
      })
    })
  })

  // MESSAGES
  let lab_dash_messages_element = new Happened('img', 'lab-messages-icon', labLateralElements)
  lab_dash_messages_element.csa()
  let lab_dash_messages = lab_dash_messages_element.get()
  lab_dash_messages.style.position = "relative"
  lab_dash_messages.style.opacity = 0
  lab_dash_messages.style.width = 100 + "%"
  lab_dash_messages.style.cursor = "pointer"
  lab_dash_messages.src = "/D/R/IMG/LAB/dash/messaging.svg"

  function messagesSelect(contact_email, lngData) {
    socket.emit('askMessages', lab_local_storage_object('global'), reloadMessages => {
      if (reloadMessages.success === true) {
        const messagesData = reloadMessages.data
        const lab_user_contacts = document.querySelector("#lab-user-contacts")
        const contentContainer = document.querySelector("#lab-user-messages-content")
        let contentToClear = [...contentContainer.children]
        contentToClear = contentToClear.filter(x => x.id != "lab-message-sending")
        contentToClear.map(x => x.remove())
        let selectedContact = [...lab_user_contacts.children].find(c => c.classList.contains("lab-selected-contact"))
        selectedContact.classList.remove('lab-selected-contact')
        selectedContact.style.border = ""
        selectedContact.style.borderTopLeftRadius = ""
        selectedContact.style.borderBottomLeftRadius = ""
        selectedContact.style.borderBottomRightRadius = ""
        selectedContact.style.justifyContent = ""

        selectedContact.children[0].style.left = 10 + "%"
        selectedContact.children[0].style.padding = ""
        selectedContact.children[0].style.paddingTop = ""

        contact_email.parentNode.classList.add('lab-selected-contact')
        contact_email.parentNode.style.border = "1px solid #222226"
        contact_email.parentNode.style.borderTopLeftRadius = 25 + "px"
        contact_email.parentNode.style.borderBottomLeftRadius = 25 + "px"
        contact_email.parentNode.style.borderBottomRightRadius = 25 + "px"
        contact_email.parentNode.style.justifyContent = "center"

        contact_email.style.left = ""
        contact_email.style.whiteSpace = "nowrap"
        contact_email.style.overflow = "hidden"
        contact_email.style.padding = 5 + "%"
        contact_email.style.paddingTop = 10 + "%"
        contact_email.style.textOverflow = "ellipsis"

        const newContactObject = messagesData.newMessages.find(c => c.email === contact_email.innerText)

        if (newContactObject && newContactObject.status === "pending") {
          const approve_the_request_label = lab_system_design("div", "approve-the-request", contentContainer, lngData.approve_the_request, 'lab_label')
          approve_the_request_label.style.color = "#222226"
          const accept_contact_row = lab_system_design("div", "accept-contact-row", contentContainer, null, 'lab_list_row')
          accept_contact_row.style.justifyContent = "space-between"
          const accept_contact_button = lab_system_design("div", "accept-contact-label", accept_contact_row, lngData.accept, 'lab_button')
          accept_contact_button.addEventListener('click', () => {
            const userLSG = lab_local_storage_object('global')
            userLSG.contactToAdd = newContactObject.email
            userLSG.addOrRemove = 'add'
            socket.emit('acceptContact', userLSG, acceptRes => {
              if (acceptRes.success === true) {
                const contentContainer = document.querySelector("#lab-user-messages-content")
                const contentToClear = [...contentContainer.children]
                contentToClear.map(x => x.remove())

                const sendMessageRow = document.querySelector("#lab-message-sending")
                if (!sendMessageRow) {
                  let lab_user_contact_messages_container = new Happened('div', 'lab-user-contact-messages', contentContainer)
                  lab_user_contact_messages_container.csa()
                  let lab_user_contact_messages = lab_user_contact_messages_container.get()
                  lab_user_contact_messages.style.position = "absolute"
                  lab_user_contact_messages.style.display = "flex"
                  lab_user_contact_messages.style.flexDirection = "column-reverse"
                  lab_user_contact_messages.style.width = 100 + "%"
                  lab_user_contact_messages.style.height = 90 + "%"


                  const message_sending = lab_system_design("div", "message-sending", contentContainer, null, 'lab_list_row')
                  message_sending.style.position = "absolute"
                  message_sending.style.justifyContent = "space-between"
                  message_sending.style.top = 90 + "%"
                  message_sending.style.width = 100 + "%"
                  lab_system_design_message = lab_system_design("input", "send-message", message_sending, null, 'lab_text_input')
                  lab_system_design_message.style.maxWidth = ""
                  lab_system_design_message.style.minWidth = ""
                  lab_system_design_message.style.minHeight = ""
                  lab_system_design_message.style.width = 50 + "%"
                  lab_system_design_message.style.backgroundColor = "transparent"
                  lab_system_design_message.style.textIndent = 3 + "%"
                  lab_system_design_message.style.textAlign = ""
                  lab_system_design_message.style.backgroundColor = "white"

                  lab_system_design_message.addEventListener("keydown", e => {
                    if (e.key === "Enter") {
                      if (lab_system_design_message.value) {
                        const userLSG = lab_local_storage_object('global')
                        userLSG.message = lab_system_design_message.value
                        userLSG.recipient = contact_email.innerText
                        socket.emit('sendMessage', userLSG, sended => {
                          console.log(sended)
                        })
                      } else {
                        alertUser(lngData.input_cannot_be_empty)
                      }
                    }
                  })

                  const subscription_button = lab_system_design("div", "message-sending-button", message_sending, lngData.send, 'lab_button')
                  subscription_button.style.color = "white"
                  subscription_button.style.backgroundColor = "#3C4CA6"
                }
              }
            })
          })
          const refuse_contact_button = lab_system_design("div", "refuse-contact-button", accept_contact_row, lngData.refuse, 'lab_button')
        }

        const contactObject = messagesData.messages.find(c => c.email === contact_email.innerText)
        if (contactObject && contactObject.status === "pending") {
          const await_contact_validation_label = lab_system_design("div", "await-contact-validation", contentContainer, lngData.awaiting_validation, 'lab_label')
          await_contact_validation_label.style.color = "#222226"
        }

        if (contactObject && contactObject.status === "accepted") {
          let lab_user_contact_messages_container = new Happened('div', 'lab-user-contact-messages', contentContainer)
          lab_user_contact_messages_container.csa()
          let lab_user_contact_messages = lab_user_contact_messages_container.get()
          lab_user_contact_messages.style.display = "flex"
          lab_user_contact_messages.style.flexDirection = "column-reverse"
          lab_user_contact_messages.style.position = "absolute"
          lab_user_contact_messages.style.width = 100 + "%"
          lab_user_contact_messages.style.height = 90 + "%"

          const sendMessageRow = document.querySelector("#lab-message-sending")
          if (!sendMessageRow) {
            const message_sending = lab_system_design("div", "message-sending", contentContainer, null, 'lab_list_row')
            message_sending.style.position = "absolute"
            message_sending.style.justifyContent = "space-between"
            message_sending.style.top = 92 + "%"
            message_sending.style.width = 100 + "%"

            lab_system_design_message = lab_system_design("input", "send-message", message_sending, null, 'lab_text_input')
            lab_system_design_message.style.maxWidth = ""
            lab_system_design_message.style.minWidth = ""
            lab_system_design_message.style.minHeight = ""
            lab_system_design_message.style.width = 50 + "%"
            lab_system_design_message.style.backgroundColor = "transparent"
            lab_system_design_message.style.textIndent = 3 + "%"
            lab_system_design_message.style.textAlign = ""
            lab_system_design_message.style.backgroundColor = "white"

            lab_system_design_message.addEventListener("keydown", e => {
              if (e.key === "Enter") {
                if (lab_system_design_message.value) {
                  const userLSG = lab_local_storage_object('global')
                  userLSG.message = lab_system_design_message.value
                  userLSG.recipient = contact_email.innerText
                  socket.emit('sendMessage', userLSG, sended => {
                    lab_system_design_message.value = ""
                    messagesSelect(contact_email, lngData)
                  })
                } else {
                  alertUser(lngData.input_cannot_be_empty)
                }
              }
            })

            const subscription_button = lab_system_design("div", "message-sending-button", message_sending, lngData.send, 'lab_button')
            subscription_button.style.color = "white"
            subscription_button.style.backgroundColor = "#3C4CA6"

            subscription_button.addEventListener('click', () => {
              if (lab_system_design_message.value) {
                const userLSG = lab_local_storage_object('global')
                userLSG.message = lab_system_design_message.value
                userLSG.recipient = contact_email.innerText
                socket.emit('sendMessage', userLSG, sended => {
                  lab_system_design_message.value = ""
                  messagesSelect(contact_email, lngData)
                })
              } else {
                alertUser(lngData.input_cannot_be_empty)
              }
            })
          }

          contactObject.messages.forEach(m => {
            const new_message_row = document.createElement('div')
            new_message_row.setAttribute('id', 'message-row-' + m.messageID)
            lab_user_contact_messages.insertBefore(new_message_row, lab_user_contact_messages.firstChild)
            new_message_row.style.display = "flex"
            new_message_row.style.justifyContent = "space-between"
            // const new_message_delete = lab_system_design("div", "new-message-delete-" + m.messageID, new_message_row, "X", 'lab_button')
            // new_message_delete.style.width = 10 + "%"
            const new_message_content = lab_system_design("div", "new-message-content-" + m.messageID, new_message_row, m.message, 'lab_label')
            new_message_content.style.width = 100 + "%"
            new_message_content.style.color = "#222226"

            if (m.review_type === "access_granted" && m.under_review && m.under_review === "pending") {
              new_message_row.style.flexDirection = "column"
              const granting_access_row = lab_system_design("div", "granting-access-row" + m.messageID, new_message_row, null, 'lab_list_row')
              granting_access_row.style.justifyContent = "space-evenly"
              const grantingAccessLabel = lab_system_design("div", "granting-access-label" + m.messageID, granting_access_row, lngData.access_granted, 'lab_label')
              grantingAccessLabel.style.color = '#222226'
              grantingAccessLabel.style.width = 30 + '%'
              const grantingAccessAccept = lab_system_design("button", "granting-access-accept" + m.messageID, granting_access_row, lngData.accept, 'lab_button')
              grantingAccessAccept.style.width = 30 + "%"

              grantingAccessAccept.addEventListener('click', () => {
                const userLSG = lab_local_storage_object('global')
                userLSG.expeditor = contact_email.innerText
                userLSG.messageID = m.messageID
                userLSG.action = 'accepted'
                socket.emit('userActionFromMessage', userLSG, res => {
                  if (res.success) {
                    grantingAccessAccept.remove()
                    grantingAccessDecline.remove()
                    const grantingAccessAccepted = lab_system_design("button", "granting-access-accepted" + m.messageID, granting_access_row, lngData.accepted, 'lab_button')
                    grantingAccessAccepted.style.width = 30 + "%"
                  }
                })
              })

              const grantingAccessDecline = lab_system_design("button", "granting-access-decline" + m.messageID, granting_access_row, lngData.refuse, 'lab_button')
              grantingAccessDecline.style.width = 30 + "%"

              grantingAccessDecline.addEventListener('click', () => {
                const userLSG = lab_local_storage_object('global')
                userLSG.expeditor = contact_email.innerText
                userLSG.messageID = m.messageID
                userLSG.action = 'refused'
                socket.emit('userActionFromMessage', userLSG, res => {
                  if (res.success) {
                    grantingAccessAccept.remove()
                    grantingAccessDecline.remove()
                    const grantingAccessAccepted = lab_system_design("button", "granting-access-refused" + m.messageID, granting_access_row, lngData.refused, 'lab_button')
                    grantingAccessAccepted.style.width = 30 + "%"
                  }
                })
              })
            }

            if (m.review_type === "access_granted" && m.under_review && m.under_review === "pending") {
              new_message_row.style.flexDirection = "column"
              const granting_access_row = lab_system_design("div", "granting-access-row" + m.messageID, new_message_row, null, 'lab_list_row')
              granting_access_row.style.justifyContent = "space-evenly"
              const grantingAccessLabel = lab_system_design("div", "granting-access-label" + m.messageID, granting_access_row, lngData.access_granted, 'lab_label')
              grantingAccessLabel.style.color = '#222226'
              grantingAccessLabel.style.width = 30 + '%'
              // const grantingAccessState = lab_system_design("button", "granting-access-" + lngData[m.under_review] + "-" + m.messageID, granting_access_row, lngData[m.under_review], 'lab_button')
              // grantingAccessState.style.width = 30 + "%"
            }

            if (m.review_type === "access_granted" && !m.under_review) {
              new_message_content.innerText += " -"
              const grantingAccessLabel = lab_system_design("div", "granting-access-label" + m.messageID, new_message_content, " " + lngData.access_granted, 'lab_label')
              grantingAccessLabel.style.color = '#222226'
              grantingAccessLabel.style.position = 'relative'
              grantingAccessLabel.style.left = 1 + '%'
            }
          })

          const newMessagesFromContact = messagesData.newMessages.filter(c => c.expeditor === contact_email.innerText)
          if (newMessagesFromContact && newMessagesFromContact.length > 0) {
            newMessagesFromContact.forEach(m => {
              const new_message_row = document.createElement('div')
              new_message_row.setAttribute('id', 'message-row-' + m.messageID)
              lab_user_contact_messages.insertBefore(new_message_row, lab_user_contact_messages.firstChild)
              new_message_row.style.display = "flex"
              new_message_row.style.transition = "height 0.5s ease-out, opacity 0.5s ease-out, transform 0.5s ease-out"
              new_message_row.style.transformOrigin = "center"
              new_message_row.style.transform = "scaleY(0)"
              new_message_row.style.opacity = 0
              new_message_row.style.justifyContent = "space-between"
              // const new_message_delete = lab_system_design("div", "new-message-delete-" + m.messageID, new_message_row, "X", 'lab_button')
              // new_message_delete.style.width = 10 + "%"
              const new_message_content = lab_system_design("div", "new-message-content-" + m.messageID, new_message_row, m.message, 'lab_label')
              new_message_content.style.width = 100 + "%"
              new_message_content.style.color = "#222226"
              setTimeout(() => {
                new_message_row.style.height = "auto"
                new_message_row.style.opacity = 1
                new_message_row.style.transform = "scaleY(1)"
              }, 50)
            })
            const userLSG = lab_local_storage_object('global')
            userLSG.expeditor = newMessagesFromContact[0].expeditor
            socket.emit('moveNewMessagesToMessages', userLSG)
          }
        }
      }
    })
  }

  lab_dash_messages.addEventListener('click', e => {
    const checkLabMessages = document.querySelector('#lab-user-messages')
    if (checkLabMessages === null) {
      socket.emit('askMessages', lab_local_storage_object('global'), res => {
        if (res.success === true) {
          const messagesData = res.data
          const currentLng = lab_local_storage_object('global').lng
          lab_load_language_module(currentLng).then(lngData => {
            let lab_messaging_container = new Happened('div', 'lab-user-messages', rootLayer)
            lab_messaging_container.csa()
            let lab_messaging = lab_messaging_container.get()
            lab_messaging.style.position = "absolute"
            lab_messaging.style.top = lab_orientation === "Landscape" ? "9svh" : ""
            lab_messaging.style.left = lab_orientation === "Landscape" ? "25svw" : ""
            lab_messaging.style.width = lab_orientation === "Landscape" ? "50svw" : "100svw"
            lab_messaging.style.height = lab_orientation === "Landscape" ? "77svh" : "100svh"
            lab_messaging.style.backgroundColor = "rgb(252, 206, 101)"
            lab_messaging.style.zIndex = 9999
            lab_messaging.style.borderRadius = 50 + "px"

            let lab_messages_exit = lab_system_design("img", "messages-exit", lab_messaging, null, 'lab_exit_black')
            lab_messages_exit.style.top = 4 + "%"
            lab_messages_exit.style.right = 3 + "%"
            lab_messages_exit.addEventListener('click', () => {
              lab_messaging.remove()
            })

            lab_messages_search = lab_system_design("input", "messages-search-input", lab_messaging, null, 'lab_text_input')
            lab_messages_search.style.maxWidth = ""
            lab_messages_search.style.minWidth = ""
            lab_messages_search.style.minHeight = ""
            lab_messages_search.style.width = 70 + "%"
            lab_messages_search.style.top = 4 + "%"
            lab_messages_search.style.left = 13 + "%"
            lab_messages_search.style.backgroundColor = "transparent"
            lab_messages_search.style.textIndent = 3 + "%"
            lab_messages_search.style.textAlign = ""
            lab_messages_search.placeholder = lngData.search
            lab_messages_search.addEventListener('focus', () => {
              lab_messages_search.style.backgroundColor = "white"
            })

            lab_messages_search.addEventListener('blur', () => {
              lab_messages_search.style.backgroundColor = "transparent"
            })

            let lab_user_contacts_container = new Happened('div', 'lab-user-contacts', lab_messaging)
            lab_user_contacts_container.csa()
            let lab_user_contacts = lab_user_contacts_container.get()
            lab_user_contacts.style.position = "relative"
            lab_user_contacts.style.display = "flex"
            lab_user_contacts.style.flexDirection = "column"
            lab_user_contacts.style.gap = 1 + "svh"
            lab_user_contacts.style.top = 7 + "%"
            lab_user_contacts.style.width = 30 + "%"
            lab_user_contacts.style.height = 85 + "%"

            let add_contact_container = new Happened('div', 'add-contact-container', lab_user_contacts)
            add_contact_container.csa()
            let add_contact = add_contact_container.get()
            add_contact.style.display = "flex"
            add_contact.style.justifyContent = "center"
            add_contact.style.position = "relative"
            add_contact.style.width = 100 + "%"

            let add_contact_svg = getNode("svg")
            add_contact_svg.setAttributeNS(null, 'id', "lab-add-contact")
            add_contact_svg.setAttributeNS(null, 'viewBox', "0 0 10 10")
            add_contact_svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
            add_contact.appendChild(add_contact_svg)

            let addContact = document.querySelector("#lab-add-contact")
            addContact.style.width = "3.66svw"
            addContact.style.minWidth = "20px"
            addContact.style.height = 3 + 'svh'
            addContact.style.minHeight = "20px"
            addContact.style.cursor = "pointer"

            let addContactPath = getNode('path', { d: "M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0z M7.5,5.5h-2v2h-1v-2h-2v-1h2v-2h1v2h2V5.5z", id: "plusPath", fill: "#3C4CA6" })
            addContact.appendChild(addContactPath)

            let lab_messaging_divider_element = new Happened('div', 'lab-messages-div', lab_messaging)
            lab_messaging_divider_element.csa()
            let lab_messaging_divider = lab_messaging_divider_element.get()
            lab_messaging_divider.style.position = "absolute"
            lab_messaging_divider.style.top = 12 + "%"
            lab_messaging_divider.style.left = 30 + "%"
            lab_messaging_divider.style.width = 2 + "px"
            lab_messaging_divider.style.height = 85 + "%"
            lab_messaging_divider.style.backgroundColor = "#222226"

            let lab_user_messages_container = new Happened('div', 'lab-user-messages-content', lab_messaging)
            lab_user_messages_container.csa()
            let lab_user_messages = lab_user_messages_container.get()
            lab_user_messages.style.position = "absolute"
            lab_user_messages.style.top = 12 + "%"
            lab_user_messages.style.left = 33 + "%"
            lab_user_messages.style.width = 65 + "%"
            lab_user_messages.style.height = 85 + "%"

            addContact.addEventListener('click', e => {
              const contentContainer = document.querySelector("#lab-user-messages-content")
              const contentToClear = [...contentContainer.children]
              contentToClear.map(x => x.remove())
              const new_collaborator_label = lab_system_design("div", "new-collaborator-label", lab_user_messages, lngData.new_collaborator, 'lab_label')
              new_collaborator_label.style.fontFamily = "Forum"
              new_collaborator_label.style.color = "#222226"
              const new_collaborator_input = lab_system_design("input", "new-collaborator-input", lab_user_messages, null, 'lab_text_input')
              new_collaborator_input.setAttribute('placeholder', lngData.email)
              const new_collaborator_button = lab_system_design("div", "new-collaborator-button", lab_user_messages, lngData.add, 'lab_button')
              new_collaborator_button.style.position = 'relative'
              new_collaborator_button.style.top = 3 + '%'
              new_collaborator_button.style.color = 'white'
              new_collaborator_button.style.backgroundColor = '#3C4CA6'

              new_collaborator_button.addEventListener('click', () => {
                if (new_collaborator_input.value) {
                  const userLSG = lab_local_storage_object('global')
                  userLSG.contactEmail = new_collaborator_input.value
                  socket.emit('addNewContact', userLSG, contactData => {
                    if (contactData.success === true) {
                      const currentsContacts = [...document.querySelector("#lab-user-contacts").children].filter(c => c.id != "add-contact-container")
                      if (currentsContacts && currentsContacts.length > 0) {
                        let contact = lab_system_design("div", "contact-" + contactsCount, lab_user_contacts, null, 'lab_menu_button')
                        contact.style.maxWidth = ""
                        contact.style.width = 90 + "%"
                        contact.style.height = 3 + "svh"
                        contact.style.left = 5 + "%"

                        let contact_email = lab_system_design("div", "contact-mail-" + contactsCount, contact, contact.data.email, 'lab_menu_button')
                        contact_email.style.display = "block"
                        contact_email.style.color = "#222226"
                        contact_email.style.width = 100 + "%"
                        contact_email.style.height = 3 + "svh"
                        contact_email.style.left = 10 + "%"
                        contact_email.style.whiteSpace = "nowrap"
                        contact_email.style.overflow = "hidden"
                        contact_email.style.textOverflow = "ellipsis"

                        contact_email.addEventListener('click', () => {
                          messagesSelect(contact_email, lngData)
                        })

                        contactsCount++
                      } else {
                        let contact = lab_system_design("div", "contact-" + contactsCount, lab_user_contacts, null, 'lab_menu_button')
                        contact.classList.add('lab-selected-contact')
                        contact.style.maxWidth = ""
                        contact.style.width = 90 + "%"
                        contact.style.height = 3 + "svh"
                        contact.style.left = 5 + "%"
                        contact.style.border = "1px solid #222226"
                        contact.style.borderTopLeftRadius = 25 + "px"
                        contact.style.borderBottomLeftRadius = 25 + "px"
                        contact.style.borderBottomRightRadius = 25 + "px"
                        contact.style.justifyContent = "center"

                        let contact_email = lab_system_design("div", "contact-mail-" + contactsCount, contact, contactData.data.email, 'lab_menu_button')
                        contact_email.style.display = "block"
                        contact_email.style.color = "#222226"
                        contact_email.style.width = 100 + "%"
                        contact_email.style.height = 3 + "svh"
                        contact_email.style.whiteSpace = "nowrap"
                        contact_email.style.overflow = "hidden"
                        contact_email.style.textOverflow = "ellipsis"
                        contact_email.style.left = ""
                        contact_email.style.padding = 5 + "%"
                        contact_email.style.paddingTop = 10 + "%"

                        contact_email.addEventListener('click', () => {
                          messagesSelect(contact_email, lngData)
                        })
                      }
                      new_collaborator_input.value = ""
                    } else {
                      if (contactData.existingContact === true) {
                        alertUser(lngData.already_done)
                      }
                      if (contactData.not_found === true) {
                        alertUser(lngData.unknown)
                      }
                    }
                  })
                } else {
                  alertUser(lngData.input_cannot_be_empty)
                }
              })
            })

            let contactsCount = 1

            if (messagesData.messages && messagesData.messages.length > 0) {
              messagesData.messages.forEach(c => {
                let contact = lab_system_design("div", "contact-" + contactsCount, lab_user_contacts, null, 'lab_menu_button')
                contact.style.maxWidth = ""
                contact.style.width = 90 + "%"
                contact.style.height = 3 + "svh"
                contact.style.left = 5 + "%"

                let contact_email = lab_system_design("div", "contact-mail-" + contactsCount, contact, c.email, 'lab_menu_button')
                contact_email.style.display = "block"
                contact_email.style.color = "#222226"
                contact_email.style.width = 100 + "%"
                contact_email.style.height = 3 + "svh"
                contact_email.style.left = 10 + "%"
                contact_email.style.whiteSpace = "nowrap"
                contact_email.style.overflow = "hidden"
                contact_email.style.textOverflow = "ellipsis"

                if (contactsCount === 1) {
                  contact.classList.add('lab-selected-contact')
                  contact.style.border = "1px solid #222226"
                  contact.style.borderTopLeftRadius = 25 + "px"
                  contact.style.borderBottomLeftRadius = 25 + "px"
                  contact.style.borderBottomRightRadius = 25 + "px"
                  contact.style.justifyContent = "center"

                  contact_email.style.left = ""
                  contact_email.style.padding = 5 + "%"
                  contact_email.style.paddingTop = 10 + "%"
                }

                contactsCount++

                contact_email.addEventListener('click', () => {
                  messagesSelect(contact_email, lngData)
                  // let messagePoll = setInterval(() => {
                  //     messagesSelect(contact_email, lngData)
                  // }, 1000)
                })
              })
            } else {
              // ADD A CONTACT
            }

            if (messagesData.newMessages && messagesData.newMessages.length > 0) {
              messagesData.newMessages.forEach(c => {
                let contact = lab_system_design("div", "contact-" + contactsCount, lab_user_contacts, null, 'lab_menu_button')
                contact.style.maxWidth = ""
                contact.style.width = 90 + "%"
                contact.style.height = 3 + "svh"
                contact.style.left = 5 + "%"

                let contact_email = lab_system_design("div", "contact-mail-" + contactsCount, contact, c.email, 'lab_menu_button')
                contact_email.style.display = "block"
                contact_email.style.color = "#222226"
                contact_email.style.width = 100 + "%"
                contact_email.style.height = 3 + "svh"
                contact_email.style.left = 10 + "%"
                contact_email.style.whiteSpace = "nowrap"
                contact_email.style.overflow = "hidden"
                contact_email.style.textOverflow = "ellipsis"

                if (contactsCount === 1) {
                  contact.classList.add('lab-selected-contact')
                  contact.style.border = "1px solid #222226"
                  contact.style.borderTopLeftRadius = 25 + "px"
                  contact.style.borderBottomLeftRadius = 25 + "px"
                  contact.style.borderBottomRightRadius = 25 + "px"
                  contact.style.justifyContent = "center"

                  contact_email.style.left = ""
                  contact_email.style.padding = 5 + "%"
                  contact_email.style.paddingTop = 10 + "%"
                }

                contactsCount++

                contact_email.addEventListener('click', () => {
                  messagesSelect(contact_email, lngData)
                })
              })
            }
          })

        }
      })
    } else {
      checkLabMessages.remove()
    }
  })

  // LEGAL
  let today = new Date().toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })
  let dash6Check = today.includes('-')
  let slashCheck = today.includes('/')

  let preformatting

  if (dash6Check === true) {
    preformatting = today.split('-')
  }

  if (slashCheck === true) {
    preformatting = today.split('/')
  }

  let todayObject = {
    y: parseInt(preformatting[0]),
    m: parseInt(preformatting[1]),
    d: parseInt(preformatting[2]),
  }

  let legalElement = new Happened('div', 'lab-legal', rootLayer)
  legalElement.csa()
  let legal = legalElement.get()
  legal.setAttribute('class', 'escape')
  legal.style.position = "absolute"
  legal.style.opacity = 0
  legal.style.top = 86 + "svh"
  legal.style.width = 25 + 'svw'
  legal.style.height = 4 + 'svh'
  legal.style.right = 2 + "svw"
  legal.style.color = "grey"
  legal.style.textAlign = "center"
  legal.style.userSelect = "none"
  legal.style.cursor = "pointer"
  legal.style.fontFamily = "Petrona Light Italic"
  if (window.innerWidth >= window.innerHeight) {
    legal.style.fontSize = 1.5 + "svw"
  }
  if (window.innerWidth < window.innerHeight) {
    legal.style.fontSize = 1.5 + "svh"
  }

  if (checkLng === "fr-FR" || checkLng === "fr") {
    legal.innerText = "©" + todayObject.y + "- Légal"
  } else {
    legal.innerText = "©" + todayObject.y + "- Legal"
  }


  legal.addEventListener('click', e => {
    window.open('/D/R/PDF/LegalLaboranthSAS.pdf')
  })

  // CONTACT MAIL
  let contactMailElement = new Happened('div', 'lab-contact', rootLayer)
  contactMailElement.csa()
  let contactMail = contactMailElement.get()
  contactMail.setAttribute('class', 'escape')
  contactMail.style.position = "absolute"
  contactMail.style.opacity = 0
  contactMail.style.width = 25 + 'svw'
  contactMail.style.height = 4 + 'svh'
  contactMail.style.right = 2 + "svw"
  contactMail.style.color = "white"
  contactMail.style.textAlign = "center"
  contactMail.style.fontFamily = "Petrona Italic"
  contactMail.innerText = "contact@laboranth.tech"
  if (window.innerWidth >= window.innerHeight) {
    contactMail.style.top = 90 + "svh"
    contactMail.style.fontSize = 1.2 + "svw"
  }
  if (window.innerWidth < window.innerHeight) {
    contactMail.style.top = 88 + "svh"
    contactMail.style.fontSize = 1.2 + "svh"
  }

  lab_load_language_module(lab_local_storage_object('global').lng).then(lngData => {
    lab_load_manual(lngData, checkLng)
  })

  window.addEventListener("resize", e => {
    try {
      applicationsContainer.style.height = 70 + "svh"
      if (window.innerWidth > window.innerHeight) {
        applicationsContainer.style.width = 25 + "svw"
      } else {
        applicationsContainer.style.width = 45 + "svw"
      }

      if (window.innerHeight < 550) {
        applicationsContainer.style.height = 50 + "svh"
      }
      let appD = document.querySelector("#lab-applications").getBoundingClientRect()
      let appDC = document.querySelector("#lab-applications")
      let apps_switch = document.querySelector("#lab-external-apps-switch")
      appDC.style.left = window.innerWidth / 2 - appD.width / 2 + "px"
      let appsButtonsLefter = document.querySelector("#lab-app-buttons").getBoundingClientRect()
      applicationsButtonsC.style.left = window.innerWidth / 2 - appsButtonsLefter.width / 2 + "px"
      applicationsButtonsC.style.top = appD.bottom + 10 + "px"

      if (window.innerWidth >= window.innerHeight) {
        legal.style.fontSize = 1.5 + "svw"
      }
      if (window.innerWidth < window.innerHeight) {
        legal.style.fontSize = 1.5 + "svh"
      }

      if (window.innerWidth >= window.innerHeight) {
        contactMail.style.top = 90 + "svh"
        contactMail.style.fontSize = 1.2 + "svw"
      }
      if (window.innerWidth < window.innerHeight) {
        contactMail.style.top = 88 + "svh"
        contactMail.style.fontSize = 1.2 + "svh"
      }

      apps_switch.style.left = appD.left - 50 + "px"
      apps_switch.style.top = appD.top + "px"
    } catch (error) {

    }
  })

  dash_background.addEventListener('click', e => {
    let lab_check_del_app_form = document.querySelector('#lab_app_delete_app')
    if (lab_check_del_app_form != null) {
      lab_check_del_app_form.remove()
    }
    let lab_check_create_app_form = document.querySelector('#lab_app_create_app')
    if (lab_check_create_app_form != null) {
      lab_check_create_app_form.remove()
    }
    applicationsContainer.style.display = "block"
    applicationsButtonsC.style.display = "block"
  })

  let lab_clean_body = [...rootLayer.querySelectorAll('*')]

  function lab_load_ui() {
    lab_clean_body.forEach(x => {
      x.style.transition = "opacity 0.1s ease"
      x.style.opacity = "1"
    })
  }

  setTimeout(lab_load_ui, Math.PI * 11)
}

// return lab_UI_LAB

lab_UI_LAB()