
let selectedChat;

let customerData = {
  customerFirstName: '',
  customerLastName: '',
  customerCountry: '',
  customerStreetAdress: '',
  customerCity: '',
  customerZipCode: '',
  customerIsPro: '',
  customerHDAdress: '',
  customerHDCity: '',
  customerHDZip: '',
  customerVatNumber: '',
}


function chat(parent, lngData) {
  if (!document.getElementById('lab-chat')) {
    const wrap = lab_design_system("div", "chat", parent, 0, 0, ["chat", "wrap"])

    const close = lab_design_system("button", "chat-close", wrap, 0, 0, ["chat", "close"])
    const closeIcon = lab_design_system("img", "chat-close-icon", close)
    closeIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/close.svg`)

    close.addEventListener('click', () => {
      wrap.style.transition = 'all 0.2s linear'
      wrap.style.transform = 'translateX(100%)'
      wrap.style.opacity = '0'

      setTimeout(() => {
        parent.removeChild(wrap)
      }, 2000);
    })

    const body = lab_design_system("div", "chat-body", wrap, 0, 0, ["chat", "body"])

    function chatRoom(email, messages, status, type) {
      let userContact = email.split('@')[0]
      body.innerHTML = ''
      function renderChat() {
        body.innerHTML = ''
        const room = lab_design_system("div", "chat-room", body, 0, 0, ["chat", "room"])
        const top = lab_design_system("div", "chat-top", room, email, 0, ["chat", "top"])
        const messagesBox = lab_design_system("div", "chat-messages", room, 0, 0, ["chat", "messages"])
        const bottom = lab_design_system("div", "chat-bottom", body, 0, 0, ["chat", "bottom"])
        const input = lab_design_system("input", "chat-input", bottom, 0, 0, ["chat", "input"])
        const send = lab_design_system("button", "chat-send", bottom, 0, 0, ["chat", "send"])
        const sendIcon = lab_design_system("img", "chat-send-icon", send)

        function renderMessages(messagesArray) {
          messagesBox.innerHTML = ''
          messagesArray.forEach((m) => {
            if (m.expeditor != email) {
              const message = lab_design_system("span", `chat-message-${m.messageID}`, messagesBox, m.message, 0, ["chat", "myMessage"])
            }
            else {
              const message = lab_design_system("span", `chat-message-${m.messageID}`, messagesBox, m.message, 0, ["chat", "message"])
            }

          })
        }

        renderMessages(messages)
        sendIcon.style.width = '100%'
        sendIcon.style.height = '100%'
        sendIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/send.svg`)

        send.addEventListener('click', () => {
          if (input.value) {
            const userLSG = lab_local_storage_object('global')
            userLSG.message = input.value
            userLSG.recipient = email
            socket.emit('sendMessage', userLSG, sended => {
              if (sended.success) {
                const message = lab_design_system("span", `chat-message-${sended.data.messageID}`, messagesBox, input.value, 0, ["chat", "myMessage"])
                input.value = ""
              }
              console.log(sended)

            })
          } else {
            alertUser(lngData.input_cannot_be_empty)
          }
        })

      }

      if (status == 'pending') {
        if (type == 'new') {
          const newUser = lab_design_system("div", "chat-new-user", body, 0, 0, ["chat", "new"])
          const newHeading = lab_design_system("div", "chat-heading", newUser, email, 0, ["chat", "heading"])
          const box = lab_design_system("div", "chat-box", newUser, 0, 0, ["chat", "box"])
          box.style.justifyContent = 'space-between'
          const acceptBtn = lab_design_system("button", "chat-btn-accept", box, lngData.accept, 0, ["chat", "boxBtn"])
          acceptBtn.addEventListener('click', () => {
            const userLSG = lab_local_storage_object('global')
            userLSG.contactToAdd = email
            userLSG.addOrRemove = 'add'
            socket.emit('acceptContact', userLSG, acceptRes => {
              if (acceptRes.success === true) renderChat()
            })
          })
          const refuseBtn = lab_design_system("button", "chat-btn-refuse", box, lngData.refuse, 0, ["chat", "boxBtn"])
          refuseBtn.addEventListener('click', () => {
            const userLSG = lab_local_storage_object('global')
            userLSG.contactToAdd = email
            userLSG.addOrRemove = 'remove'
            socket.emit('refuseContact', userLSG, refuseRes => {
              if (refuseRes.success === true) {
                body.innerHTML = ''
                document.getElementById(`lab-chat-user-contact-${userContact}`).remove()
              }
            })
          })
        }
        else {
          const awaitingValidation = lab_design_system("div", "chat-body-awaiting-validation", body, lngData.awaiting_validation, 0, ["chat", "top"])
          awaitingValidation.style.color = "#fff"
        }
      }

      if (status == 'accepted') renderChat()
    }


    function addUserContact() {
      body.innerHTML = ''
      const newUser = lab_design_system("div", "chat-new-user", body, 0, 0, ["chat", "new"])
      const newHeading = lab_design_system("div", "chat-heading", newUser, 'Enter an email to invite you to your project', 0, ["chat", "heading"])
      const box = lab_design_system("div", "chat-box", newUser, 0, 0, ["chat", "box"])
      const boxInput = lab_design_system("input", "chat-box-input", box, 0, 0, ["chat", "boxInput"])
      const boxBtn = lab_design_system("button", "chat-box-btn", box, 'Invite', 0, ["chat", "boxBtn"])

      boxBtn.addEventListener('click', () => {
        if (boxInput.value) {
          const userLSG = lab_local_storage_object('global')
          userLSG.contactEmail = boxInput.value

          socket.emit('addNewContact', userLSG, contactData => {
            if (contactData.success === true) {
              // contactData.data.email
              console.log("aaa");

            }
          })
        } else {
          alertUser(lngData.input_cannot_be_empty)
        }
      })
    }

    const users = lab_design_system("div", "chat-users", wrap, 0, 0, ["chat", "users"])
    const addUser = lab_design_system("button", "chat-add-user", users, 0, 0, ["chat", "add"])
    const addUserIcon = lab_design_system("img", "chat-add-user-icon", addUser)
    addUserIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/add_user.svg`)
    addUser.addEventListener('click', () => addUserContact())

    socket.emit('fetchMessages', lab_local_storage_object('global'), reloadMessages => {
      if (reloadMessages.success === true) {
        console.log(reloadMessages.data);

        function parseMessages(messagesArray, type) {
          messagesArray.forEach(e => {
            if (e.email) {
              let userContact = e.email.split('@')[0]
              if (selectedChat == e.email) {
                if (!document.getElementById('lab-chat-room')) chatRoom(e.email, e.messages, e.status, type)
              }
              if (!document.getElementById(`lab-chat-user-contact-${userContact}`)) {
                const contact = lab_design_system("div", `chat-user-contact-${userContact}`, users, 0, 0, ["chat", "contact"])
                const contactAvatar = lab_design_system("img", `chat-user-avatar-${userContact}`, contact)
                contactAvatar.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA//avatar.svg`)
                contactAvatar.style.width = '100%'
                contactAvatar.style.aspectRatio = '1'
                contactAvatar.style.boxSizing = 'border-box'
                contactAvatar.style.borderRadius = '50%'
                if (selectedChat == e.email) {
                  contactAvatar.style.border = '2px solid #FED05E'
                  contactAvatar.classList.add('selected-chat')
                }
                const contactEmail = lab_design_system("div", `chat-user-${userContact}`, contact, userContact, 0, ["chat", "email"])

                contact.addEventListener('click', () => {
                  selectedChat = e.email
                  let last = document.querySelector('.selected-chat')
                  if (last) {
                    last.style.border = 'none'
                    last.classList.remove('selected-chat')
                  }
                  contactAvatar.classList.add('selected-chat')
                  contactAvatar.style.border = '2px solid #FED05E'

                  if (contact.querySelector('.lab-label')) {
                    contact.removeChild(contact.querySelector('.lab-label'))
                  }

                  chatRoom(e.email, e.messages, e.status)

                })
              }

            }

            if (e.expeditor) {
              const messageFromUser = messagesArray.filter(i => i.expeditor == e.expeditor)

              if (selectedChat != e.expeditor) {
                const userContact = e.expeditor.split('@')[0]
                const chatUser = document.getElementById(`lab-chat-user-contact-${userContact}`)
                const messageLabel = lab_design_system("div", `chat-user-message-label-${userContact}`, chatUser, String(messageFromUser.length), 'label', ["chat", "label"])
              }
              else {
                const userLSG = lab_local_storage_object('global')
                userLSG.expeditor = e.expeditor
                socket.emit('moveNewMessagesToMessages', userLSG)
              }
            }

          })
        }

        parseMessages(reloadMessages.data.messages, 'my')
        parseMessages(reloadMessages.data.newMessages, 'new')


        setInterval(() => {
          socket.emit('fetchMessages', lab_local_storage_object('global'), mes => {
            if (mes.data.newMessages && mes.data.newMessages.length > 0) {
              parseMessages(reloadMessages.data.messages, 'my')
              parseMessages(reloadMessages.data.newMessages, 'new')
            }
          })
        }, 1000);


      }
    })
  }

}

function lab_design_system(tag, id, parent, content, className, styled) {
  const elementToAppend = document.createElement(tag)
  const styles = styles_d

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



function select(label, list, parent, value, func) {
  const select = lab_design_system("div", `select-${value}`, parent, null, null, ["select", "box"])
  const top = lab_design_system("div", `select-top-${value}`, select, null, null, ["select", "top"])
  const topSpan = lab_design_system("span", `selected-${value}`, top, label, null)
  const listing = lab_design_system("div", `select-list-${value}`, select, null, null, ["select", "list"])
  const arrow = lab_design_system("img", `select-arrow-${value}`, top, null, null)
  arrow.src = "https://laboranth.tech/D/R/IMG/CLA/arrow_drop_down.svg"

  Object.keys(list).forEach(e => {
    const item = lab_design_system("div", `select-item-${e}-${value}`, listing, list[e], "select-item")
    item.addEventListener("click", () => {
      topSpan.innerHTML = list[e]
      func(e)
    })
  })

  select.addEventListener("click", () => {
    listing.style.display = listing.style.display == "none" ? "flex" : "none"
    arrow.style.transform = arrow.style.transform == "rotate(180deg)" ? "none" : "rotate(180deg)"
  })

  return select
}

function popup(id, parent, wrap = false) {
  const popupWrap = lab_design_system("div", `popup-wrap-${id}`, parent, null, null, ["popup", "wrap"])
  const popup = lab_design_system("div", `popup-${id}`, parent, null, null, ["popup", "box"])
  const popupContent = lab_design_system("div", `popup-content-${id}`, popup, null, null, ["popup", "content"])
  popupWrap.addEventListener("click", () => {
    parent.removeChild(popupWrap)
    parent.removeChild(popup)
  })

  lab_fade_in_recursively(popup, 0.3)
  return wrap ? popup : popupContent;
}

async function checkMicrophoneStatus() {
  if ("permissions" in navigator) {
    const permission = await navigator.permissions.query({ name: "microphone" });
    if (permission.state === "granted") return true
  }
  return false
}

function shortcutsSettings(u, parent) {
  const functionalitiesList = {
    dash: u.lngData.dash,
    save: u.lngData.save,
    text_editor: u.lngData.text_editor,
    menu: u.lngData.menu,
    manual: u.lngData.manual,
    designer_mode: u.lngData.designer_mode,
    copy: u.lngData.copy,
    paste: u.lngData.paste,
    translate: u.lngData.translate,
    rotate: u.lngData.rotate,
    set_to_foreground: u.lngData.set_to_foreground,
    set_to_background: u.lngData.set_to_background,
    merge: u.lngData.merge,
    forward_on_z_index: u.lngData.forward_on_z_index,
    backspace_on_z_index: u.lngData.backspace_on_z_index,
    marker: u.lngData.marker,
    peeling_mask: u.lngData.peeling_mask,
    square: u.lngData.square,
    circle: u.lngData.circle,
    triangle: u.lngData.triangle,
    free_form: u.lngData.free_form,
    feather: u.lngData.feather,
  }
  let activeOption = 'dash'

  const line = lab_design_system("div", "alt-label-line", parent, null, null, ["parameters", "line"])

  const shortcuts = select(functionalitiesList.dash, functionalitiesList, line, activeOption, (e) => {
    activeOption = e
    socket.emit('userShortcuts', lab_local_storage_object('global'), callback => {
      applyShortcuts(callback.data)
    })
  })

  const altLabel = lab_design_system("div", "alt-label", line, "CTRL | CMD +", null)
  let width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"

  const keyInput = input('', '', line, null, width)
  keyInput.setAttribute('readonly', true)
  keyInput.addEventListener('keydown', e => {
    e.preventDefault()
    keyInput.value = e.key
  })

  const buttons = lab_design_system("div", "alt-buttons-line", parent, null, null, ["parameters", "line"])

  const reinitialize = lab_design_system("button", "reinitialize", buttons, u.lngData.reinitialize, null, ['buttons', 'grey'])
  const save = lab_design_system("button", "save", buttons, u.lngData.save, null, ['buttons', 'action'])

  const defaultOpt = {
    dash: 'h',
    save: 's',
    text_editor: 't',
    menu: 'm',
    manual: 'i',
    designer_mode: 'd',
    copy: 'c',
    paste: 'v',
    translate: 'q',
    rotate: 'a',
    foreground: 'w',
    background: 'x',
    merge: 'y',
    up: '+',
    down: '-',
    marker: 'r',
    peeling_mask: 'u',
    square: 'k',
    circle: 'j',
    triangle: 'b',
    free_form: 'l',
    feather: 'f',
  }

  reinitialize.addEventListener('click', () => {
    keyInput.value = defaultOpt[activeOption]
    const findAssociatedIndex = u.configs.shortcuts.find(s => s.fn_name === activeOption)

    const userLSG = lab_local_storage_object('global')
    userLSG.bindedTo = findAssociatedIndex.fn
    userLSG.binding = keyInput.value
    userLSG.fn_name = activeOption
    socket.emit('bindShortcut', userLSG)
  })

  save.addEventListener('click', () => {
    let findAssociatedIndex
    if (u.configs.shortcuts) {
      findAssociatedIndex = u.configs.shortcuts.find(s => s.fn_name === activeOption)
    } else {
      findAssociatedIndex = defaultOpt[activeOption]
    }

    const userLSG = lab_local_storage_object('global')
    if (keyInput.value) {
      userLSG.bindedTo = findAssociatedIndex.fn
      userLSG.binding = keyInput.value
      userLSG.fn_name = activeOption
      socket.emit('bindShortcut', userLSG)
    } else {
      alertUser(u.lngData.input_cannot_be_empty)
    }
  })

  function defaults() {
    keyInput.setAttribute('placeholder', defaultOpt[activeOption])
  }

  function applyShortcuts(configs) {
    keyInput.value = ""
    if (configs) {
      u.configs = configs
    }

    if (lab_obj_has_key(u.configs, 'shortcuts')) {
      const findAssociatedIndex = u.configs.shortcuts.find(s => s.fn_name === activeOption)
      if (findAssociatedIndex) {
        keyInput.value = findAssociatedIndex.binding
      } else {
        defaults()
      }
    } else {
      defaults()
    }
  }

  applyShortcuts()

}

function dash_parameters(u) {
  let activeTab = "profile"

  const parametersWrap = lab_design_system("div", "parameters-wrapper", rootLayer, null, null, ["parameters", "wrapper"])

  const parameters = lab_design_system("div", "parameters", rootLayer, null, null, ["parameters", "popup"])

  parametersWrap.addEventListener("click", () => {
    rootLayer.removeChild(parametersWrap)
    rootLayer.removeChild(parameters)
  })


  const side = lab_design_system("div", "parameters-side", parameters, null, null, ["parameters", "side"])

  const boxWrap = lab_design_system("div", "parameters-box", parameters, null, null, ["parameters", "box"])

  const user = lab_design_system("div", "profile-user", side, null, null)
  user.style.margin = " 0 0 40px 0"

  const userName = lab_design_system("span", "profile-user-name", user, u.email.split("@")[0], null)

  function tab(tabValue) {

    activeTab = tabValue
    let width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"

    boxWrap.innerHTML = ""

    if (tabValue == "profile") {
      const line = lab_design_system("div", "profile-box-a", boxWrap, null, null, ["parameters", "line"])

      const mail = lab_design_system("span", "profile-box-mail", line, u.lngData.email, null)
      const mailValue = lab_design_system("p", "profile-box-d3csw", line, u.email, null)


      const userAvatarLine = lab_design_system("span", "profile-box-avatar", boxWrap, null, null, ["parameters", "line"])
      const userAvatar = lab_design_system("span", "profile-box-avatar-text", userAvatarLine, 'Avatar', null)
      const userAvatarPic = lab_design_system("div", "profile-box-avatar-pic", userAvatarLine, 0, 0, ['elements', 'avatarBox'])

      const userAvatarImg = lab_design_system("img", "profile-box-avatar-img", userAvatarPic, 0, 0)
      userAvatarImg.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA//avatar.svg`)
      userAvatarImg.style.width = '60px'
      userAvatarImg.style.height = '60px'
      userAvatarImg.style.objectFit = 'cover'
      userAvatarImg.style.border = '2px solid #000'
      userAvatarImg.style.borderRadius = '50%'


      const inputImg = lab_design_system("input", "input-img", userAvatarPic)
      inputImg.style.width = '0'
      inputImg.style.height = '0'
      inputImg.setAttribute('type', 'file')

      const inputImgLabel = lab_design_system("label", "input-img-label", userAvatarPic)
      inputImgLabel.setAttribute('for', 'lab-input-img')
      inputImgLabel.style.width = '60px'
      inputImgLabel.style.height = '60px'
      inputImgLabel.style.cursor = 'pointer'
      inputImgLabel.style.marginTop = '-60px'

      inputImg.addEventListener('change', (e) => {
        const fileInfo = e.target.files[0];
        userAvatarImg.setAttribute('src', URL.createObjectURL(fileInfo))
      });

      // let urls: string[] = []
      // Array.from(event.target.files).forEach(file => {
      //   urls.push(URL.createObjectURL(file))
      // })


      const password = lab_design_system("div", "profile-box-pass", boxWrap, null, null, ["parameters", "line"])
      const passwordSpan = lab_design_system("span", "profile-box-passord", password, u.lngData.password, null)
      const confirm = lab_design_system("div", "profile-box-conf", password, null, null, ["parameters", "confirm"])

      const passwordInput = input(u.lngData.new_password, "password", confirm, null, width)
      const passwordConfirm = input(u.lngData.confirm, "confirm-password", confirm, null, width)

      const profileButtons = lab_design_system("div", "profile-buttons", boxWrap, null, null, ["parameters", "buttons"])

      const save = lab_design_system("button", "profile-button-save", profileButtons, u.lngData.save, null, ["buttons", "action"])

      save.addEventListener("click", () => {
        const userLSG = lab_local_storage_object("global")

        if (passwordConfirm.value.length < 6) {
          alert(u.lngData.password_min_chars)
        } else {
          if (passwordInput.value === passwordConfirm.value) {
            userLSG.newPassword = passwordConfirm.value
            socket.emit("updateAccountPassword", userLSG)
          } else {
            alert(u.lngData.passwords_mismatch)
          }
        }
      })

      const del = lab_design_system("button", "profile-button-del", profileButtons, u.lngData.account_deletion, null, ["buttons", "grey"])

      del.addEventListener("click", () => {
        const userLSG = lab_local_storage_object("global")
        userLSG.emailToDel = u.email
        socket.emit("userAccountDel", userLSG)
      })

    }
    else if (tabValue == "settings") {
      const langs = {
        "en": "English",
        "fr": "Français",
        "ru": "Русский",
        "es": "Español",
        "it": "Italiano",
        "de": "Deutsch",
        "pt": "Português",
        "jp": "日本語"
      }

      const themes = {
        "cla": "Classic",
        "lab": "Laboranth"
      }

      const theme = lab_design_system("div", "parameters-theme", boxWrap, null, null, ["parameters", "line"])
      themeSwitch(boxWrap)

      const themeTitle = lab_design_system("span", "theme-heading", theme, u.lngData.interface_theme, null)
      theme.style.zIndex = "1"
      select(themes[u.configs.ui], themes, theme, "theme", (val) => {
        const userLSG = lab_local_storage_object('global')
        userLSG.newUI = val
        socket.emit('switchUI', userLSG)
      })

      const language = lab_design_system("div", "profile-box-language", boxWrap, null, null, ["parameters", "line"])
      const languageTitle = lab_design_system("span", "profile-language", language, u.lngData.language, null)

      select(langs[u.lng], langs, language, "language", (lng) => {
        const userLSG = lab_local_storage_object_update("global", { manualLng: lng })
        userLSG.config = "updateLng"
        socket.emit("userConfigsUpdate", lab_local_storage_object("global"))
      })
      const news = lab_design_system("div", "news", boxWrap, null, null, ["parameters", "line"])

      const newsTitle = lab_design_system("span", "news-title", news, 'Receive news by email')


      const checkBox = lab_design_system("input", "checkbox", news, null, null, ["elements", "checkBox"]);
      checkBox.setAttribute('type', 'checkbox')


      const sftp = lab_design_system("div", "profile-box-sftp", boxWrap, null, null, ["parameters", "line"])
      const sftpTitle = lab_design_system("span", "profile-sftp", sftp, u.lngData.sftp_connection, null)

      const sftpBtn = lab_design_system("div", "profile-btn-sftp", sftp, u.lngData.generate_the_key, null, ["buttons", "action"])

      sftpBtn.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"
      sftpBtn.addEventListener("click", () => {
        const userLSG = lab_local_storage_object("global")
        socket.emit("getSftpKey", userLSG)
      })
      const publicId = lab_design_system("div", "profile-box-public", boxWrap, null, null, ["parameters", "line"])
      const publicIdTitle = lab_design_system("span", "profile-public", publicId, u.lngData.public_id, null)

      let publicIdInput = input("", "publicId", publicId, null, width)

      const publicIdBtn = lab_design_system("button", "publicId-btn", publicId, u.lngData.save, null, ["buttons", "action"])


      publicIdBtn.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"
      publicIdBtn.addEventListener("click", () => {
        if (publicIdInput.value) {
          const userLSG = lab_local_storage_object("global")
          userLSG.newPublicID = publicIdInput.value
          socket.emit("updatePublicID", userLSG, updatedPublicID => {
            if (updatedPublicID.success == true) {
              alert(u.lngData.saved)
            }
          })
        }
      })

      const collaborators = lab_design_system("div", "collaborators", boxWrap, null, null, ["parameters", "line"])

      const collaboratorsTitle = lab_design_system("span", "profile-collaborators", collaborators, u.lngData.collaborators, null)

      const collaboratorsBtn = lab_design_system("button", "collaborators-btn", collaborators, u.lngData.edit, null, ["buttons", "action"])

      collaboratorsBtn.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"


      const rights = {
        "designer": u.lngData.designer,
        "developer": u.lngData.developer,
        "administrator": u.lngData.administrator,
      }

      collaboratorsBtn.addEventListener("click", () => {
        boxWrap.innerHTML = ""
        const newCollaborator = lab_design_system("span", `new-collaborator`, boxWrap, u.lngData.add_a_collaborator, null)

        const collaboratorsList = lab_design_system("div", "collaborators-list", boxWrap, null, null, ["parameters", "line"])

        input("", "collaborator-email", collaboratorsList, null, width)
        const addCollaborator = lab_design_system("button", "add-collaborator", collaboratorsList, u.lngData.add, null, ["buttons", "action"])

        addCollaborator.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"

        let len = u.configs.collaboratorsLIST.length;

        u.configs.collaboratorsLIST.forEach((e, index) => {

          const collaboratorsItem = lab_design_system("div", `collaborators-list-${index}`, boxWrap, null, null, ["parameters", "line"])
          collaboratorsItem.style.zIndex = len
          const collaboratorEmail = lab_design_system("span", `collaborator-emeil-${index}`, collaboratorsItem, e.collaborator_email, null)

          const collabRights = select(rights[e.rights.preset], rights, collaboratorsItem, `collaborator-rights-${index}`, (value) => {
            const userLSG = lab_local_storage_object("global")
            userLSG.collaborator = e.collaborator_email
            userLSG.new_preset = value
            socket.emit("updateCollaboratorPreset", userLSG)
          })
          collabRights.style.margin = "0 10px 0 auto"

          const deleteCollaborator = lab_design_system("button", `delete-collaborator-${index}`, collaboratorsItem, u.lngData.delete, null, ["buttons", "action"])

          deleteCollaborator.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"

          deleteCollaborator.addEventListener("click", () => {
            const userLSG = lab_local_storage_object("global")
            userLSG.collaborator_to_remove = e.collaborator_email
            collaboratorsItem.remove()
            socket.emit("removeCollaborator", userLSG)
          })

          if ((index + 1) == u.configs.collaboratorsLIST.length) (collaboratorsItem.style.marginBottom = "40px")

          len--
        })
        lab_fade_in_recursively(boxWrap, 0.5)
      })


    }
    else if (tabValue == "controls") {
      const line = lab_design_system("div", "profile-box-voice", boxWrap, null, null, ["parameters", "line"])

      const voice = lab_design_system("span", "voice-command", line, u.lngData.vocal_command, null)

      if (checkMicrophoneStatus()) {
        const voiceBtn = lab_design_system("button", "voice-activate", line, u.lngData.activate, null, ["buttons", "action"])
        voiceBtn.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"
        voiceBtn.addEventListener("click", () => {
          lab_vocal_control("on", u.lng)
          lab_local_storage_object_update("global", { speech: "enabled" })
          location.reload()
        })
      }
      else {
        const voiceBtn = lab_design_system("button", "voice-activate", line, u.lngData.disable, null, ["buttons", "grey"])
        voiceBtn.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"
        voiceBtn.addEventListener("click", () => {
          lab_vocal_control("off")
          lab_local_storage_object_update("global", { speech: "disabled" })
          location.reload()
        })

      }
      shortcutsSettings(u, boxWrap)


    }
    lab_fade_in_recursively(boxWrap, 0.5)
  }


  const tabButtons = lab_design_system("div", "tab-buttons", side, null, null)
  tabButtons.style.position = "relative"

  const tabs = {
    "profile": u.lngData.profile,
    "settings": u.lngData.settings,
    "controls": u.lngData.controls
  }

  const white = lab_design_system("div", "active-white", tabButtons, null, null, ["parameters", "white"])

  Object.keys(tabs).forEach((e, index) => {
    const tabBtn = lab_design_system("button", `parameters-tabs-${e}`, tabButtons, tabs[e], null, ["parameters", "btn"])
    if (e == activeTab) {
      tabBtn.style.color = "#3C4CA6"
      tab(e)
    }
    tabBtn.addEventListener("click", () => {
      if (activeTab != e) {
        tabBtn.style.color = "#3C4CA6"
        white.style.top = index * 45 + "px"
        const last = document.getElementById(`lab-parameters-tabs-${activeTab}`)
        last.style.color = "#fff"
        tab(e)
      }
    })
  })

  lab_fade_in_recursively(parameters, 0.5)

}

function search(array, string) {
  let listing = []

  array.forEach(e => {
    if (e.match(string)) {
      listing.push(e)
    }
  })

  return Array.from(new Set(listing))
}

function input(placeholder, value, parent, func, width, style) {
  const input = lab_design_system("input", `input-${value}`, parent, null, null, (style || ["input", "box"]))
  input.placeholder = placeholder
  width ? input.style.width = `${width}` : ""

  input.addEventListener("input", () => func(input.value))
  return input
}

function setTheme(el) {

  const themeColors = {
    "rgb(128, 128, 128)": "rgb(239, 239, 239)",
    "rgb(239, 239, 239)": "rgb(128, 128, 128)",
  }

  Array.from(el.children).forEach(child => setTheme(child))
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      themeColors[el.style.background] && (el.style.background = themeColors[el.style.background])
    })
  })
}

function themeSwitch(parent) {
  let theme = localStorage.getItem('theme')

  const themeSwitcher = lab_design_system("div", "theme-switcher", parent, null, null, ["elements", "theme"])
  const colorTheme = lab_design_system("div", "color-theme", themeSwitcher, null, null, ["elements", "lightTheme"])
  const darkTheme = lab_design_system("img", "img-theme", colorTheme, null, null)
  darkTheme.setAttribute("src", "https://laboranth.tech/D/R/IMG/CLA/nightlight.svg")
  darkTheme.style.width = "0"

  if (theme == 'dark') {
    themeSwitcher.style.justifyContent = "end"
    colorTheme.style.background = "transparent"
    colorTheme.style.transform = "rotate(-180deg)"
    darkTheme.style.width = "auto"
  }

  themeSwitcher.addEventListener("click", () => {
    themeSwitcher.style.justifyContent = themeSwitcher.style.justifyContent == "end" ? "start" : "end"
    colorTheme.style.background = colorTheme.style.background == "rgb(252, 206, 92)" ? "transparent" : "rgb(252, 206, 92)"
    colorTheme.style.transform = colorTheme.style.transform == "rotate(-180deg)" ? "none" : "rotate(-180deg)"
    darkTheme.style.width = darkTheme.style.width == "auto" ? "0" : "auto"
    const color = localStorage.getItem('theme')
    localStorage.setItem('theme', (color == 'light' ? "dark" : "light"))

    setTheme(rootLayer)
  })


}

function footer(parent) {
  rootLayer.setAttribute('class', 'lab-laboranth-scroll-classic')
  const footer = lab_design_system("div", "footer", parent, null, null, ['containers', 'footer'])
  const text = lab_design_system("span", "date", footer, `Laboranth>  |  ${new Date().getFullYear()}`, null, ['elements', 'date'])

  const link = lab_design_system("a", "legal", footer, "Legal CGU/CGV", null, ['links', 'legal'])
  link.style.cursor = "pointer"
  link.addEventListener('click', e => {
    window.open('/D/R/PDF/LegalLaboranthSAS.pdf')
  })
  const version = lab_design_system("span", "version", footer, "RC Version")

  const contact = lab_design_system("a", "contacts", footer, "contact@laboranth.tech", null, ['links', 'contact'])
  contact.setAttribute("href", "mailto:contact@laboranth.tech")
}

function dashboard(dashObject) {
  let appList = dashObject.appList, externalApps = dashObject.externalApps, lngData = dashObject.lngData
  rootLayer.style.overflowY = "auto"
  let viewMyList = true
  const wrapper = lab_design_system("div", "body-wrapper", rootLayer, 0, 0, ["pages", "dash"])
  const header = lab_design_system("header", "header", wrapper, 0, 0, ["containers", "header"])
  const content = lab_design_system("div", "content-box", wrapper, null, null, null)
  const headerWrap = lab_design_system("div", "header-wrap", header, 0, 0, ["containers", "headerWrap"])
  let headerLayout = lab_orientation == "Portrait" ? headerWrap : header

  const logo = lab_design_system("a", "logo", header, 0, 0, null);
  logo.setAttribute("href", "/")
  const logoImg = lab_design_system("img", "logo-img", logo, null, null, ["logo", "small"]);
  logoImg.setAttribute("src", "https://laboranth.tech/D/R/IMG/logoAlt.svg")



  if (externalApps.length > 0) {
    const shared = lab_design_system("button", "shared-btn", headerLayout, null, null, ["elements", "share"]);
    const sharedIcon = lab_design_system("img", "shared-img", shared);
    sharedIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/share.svg')
    sharedIcon.style.width = '100%'
    shared.addEventListener("click", () => {
      viewMyList = !viewMyList
      viewMyList ? renderList(appList) : renderList(externalApps)
      shared.style.transform = shared.style.transform == 'rotate(70deg)' ? "none" : "rotate(70deg)"
    })

  }



  const searchBox = lab_design_system("div", "search-box", headerLayout, null, null, ["search", "box"])
  const searchImage = lab_design_system("img", "search-img", searchBox, null, null, null)
  searchImage.setAttribute("src", "https://laboranth.tech/D/R/IMG/CLA/search.svg")

  const searchInput = lab_design_system("input", "search", searchBox, null, "search", ["search", "input"])

  const result = lab_design_system("div", "result", searchBox, null, null, ["search", "result"])

  searchInput.addEventListener("input", () => {
    result.innerHTML = ""
    if (searchInput.value.length) {
      myList = search(viewMyList ? appList : externalApps, searchInput.value)
      if (myList.length) {
        myList.forEach((item, index) => {
          const resultItem = lab_design_system("a", `result-${item}`, result, item, null, ["search", !index ? "first" : "item"])
          resultItem.setAttribute("href", `./${item}/home`)
        })
      }
    }
    lab_fade_in_recursively(result, 0.6)

  })

  const gridSwitch = lab_design_system("div", "grid-switch", headerLayout, null, null, ["elements", "gridSwitch"])


  const gridLayouts = ["row", "column"]
  gridLayouts.forEach(e => {
    let activeSwitch = localStorage.getItem('layout') || 'row'

    const btn = lab_design_system("button", `grid-switch-${e}`, gridSwitch, null, null, ["elements", "gridBtn"])

    e == activeSwitch && (btn.style.background = "#fff")

    const icon = lab_design_system("img", `grid-icon-${e}`, btn)
    icon.setAttribute("src", `https://laboranth.tech/D/R/IMG/CLA/${e}.svg`)
    icon.style.maxWidth = "100%"

    btn.addEventListener("click", () => {
      activeSwitch = localStorage.getItem('layout')
      if (e != activeSwitch) {
        document.getElementById(`lab-grid-switch-${e == "row" ? "column" : "row"}`).style.background = "transparent"
        btn.style.background = "#fff"
        localStorage.setItem('layout', e)

        activeSwitch = e

        viewMyList ? renderList(appList, e) : renderList(externalApps, e)
      }
    })
  })

  const create = lab_design_system("button", "create-btn", header, lngData.create, null, ["buttons", "action"])
  create.style.height = 'clamp(35px, 5svh, 50px)'
  create.style.boxSizing = 'border-box'
  create.style.paddingBottom = '0'
  create.style.paddingTop = '0'

  create.addEventListener("click", () => {
    if (!document.getElementById('lab-popup-create-app')) {
      const createPopup = popup("create-app", rootLayer)
      const popupTitle = lab_design_system("span", "popup-title", createPopup, lngData.create_app, null, ["popup", "title"])

      const popupInput = input("name", "create", createPopup, null, "100%", ["popup", "input"])
      const createPopupBtn = lab_design_system("button", "create-popup-btn", createPopup, lngData.create, null, ["buttons", "action"])

      lab_fade_in_recursively(createPopup, 0.3)

      const lab_user_current_config = lab_local_storage_object("global")

      createPopupBtn.addEventListener("click", () => {
        lab_user_current_config.newApp = popupInput.value
        socket.emit("createApp", lab_user_current_config)
        window.reload()
      })
    }
  })

  const cahtBtn = lab_design_system("button", "chats", header, null, null, ["elements", "chatsBtn"])
  const cahtIcon = lab_design_system("img", "cahts-icon", cahtBtn)
  cahtIcon.style.width = '100%'
  cahtIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/chat.svg`)
  cahtBtn.addEventListener('click', () => { chat(rootLayer, lngData) })

  const avatar = lab_design_system("button", "user-avatar", header, null, null, ["elements", "avatar"])
  const avatarIcon = lab_design_system("img", "user-avatar-icon", avatar, null, null, ["elements", "avatarIcon"])

  avatarIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/profile.svg')

  avatar.addEventListener("click", () => {

    if (document.getElementById("lab-header-menu")) {
      const menu = document.getElementById("lab-header-menu")
      avatar.removeChild(menu)
    } else {
      const headerMenu = lab_design_system("div", "header-menu", avatar, null, null, ["header", "menu"])

      headerMenu.addEventListener("mouseleave", () => {
        avatar.removeChild(headerMenu)
      })

      const menuList = ["settings", "plans", "logout"]

      menuList.forEach(e => {
        const item = lab_design_system("a", `menu-${e}`, headerMenu, e, null, ["header", "link"])
        const image = lab_design_system("img", `${e}-img`, item, null, null, null)
        image.setAttribute("src", `https://laboranth.tech/D/R/IMG/CLA/${e}.svg`)
        item.addEventListener("click", () => {
          if (e == "logout") {
            localStorage.clear()
            window.open("https://laboranth.tech/", "_self")
          }
          else if (e == "settings") {
            socket.emit("askAccount", lab_local_storage_object("global"), res => {
              lab_load_language_module(res.configs.language).then(lngData => {
                res.lngData = lngData
                res.lng = res.configs.language
                dash_parameters(res)
              })
            })

          }
          else if (e == 'plans') {
            content.innerHTML = ''
            lab_load_component('/D/C/UI/GLOB/lab_components.js', content, lngData)
          }
        })
      })

      lab_fade_in_recursively(headerMenu, 0.6)

    }
  })


  function renderList(list, direction = "row") {
    if (localStorage.getItem('layout') == 'column') {
      direction = 'column'
    }
    content.innerHTML = ''
    const apps = lab_design_system("div", "app-list", content, null, null, ["apps", "list"])

    apps.innerHTML = ""
    let len = list.length

    list.forEach(e => {
      if (!e.startsWith('.')) {
        const project = lab_design_system("div", `project-${e}`, apps, null, null, ["apps", direction])
        project.addEventListener("mouseover", () => {
          project.style.transform = "scale(1.01)";
        })
        project.addEventListener("mouseleave", () => {
          project.style.transform = "none";
        })

        const previewBox = lab_design_system("div", `item-preview-${e}`, project, null, null, ["apps", "preview"])

        previewBox.addEventListener("click", () => {
          lab_local_storage_object_update("global", { "ctx": "Application", "app": e, "section": "home", "externalApp": false })
          window.open(window.location.href + e + "/" + "home", "_self")
        })

        const preview = lab_design_system("img", `item-img-${e}`, previewBox, null, null)

        const bottom = lab_design_system("div", `apps-item-wrap-${e}`, project, null, null, ["apps", `wrap-${direction}`])
        const text = lab_design_system("span", `apps-item-${e}`, bottom, e, null, null)
        const img = lab_design_system("img", `apps-item-img-${e}`, bottom, null, null, null)

        img.setAttribute("src", "https://laboranth.tech/D/R/IMG/CLA/more_vert.svg")
        img.style.transform = 'rotate(90deg)'

        img.addEventListener("click", () => {

          if (document.getElementById("apps-item-menu")) {
            project.removeChild(document.getElementById(`apps-item-menu`))
          } else {
            const itemMenu = lab_design_system("div", `apps-item-menu`, project, null, null, ["apps", "menu"])

            const menuImg = lab_design_system("img", `apps-menu-img-${e}`, itemMenu, null, null, ["apps", "more"])

            menuImg.setAttribute("src", "https://laboranth.tech/D/R/IMG/CLA/more_vert.svg")


            menuImg.addEventListener("click", () => {
              project.removeChild(document.getElementById(`lab-apps-item-menu-${e}`))
            })

            renderMenu(itemMenu, e, project, { "settings": "settings", "copy": "copy", "delete": "delete" })

          }
        })

        project.style.zIndex = len
        len--
      }
    })

    lab_fade_in_recursively(apps, 0.6)

  }

  function renderMenu(itemMenu, e, parent, lngData) {
    const itemMenuBox = lab_design_system("div", `apps-item-box-${e}`, itemMenu, null, null, ["apps", "box"])
    const menuItems = ["settings", "copy", "delete"]



    itemMenu.addEventListener("mouseleave", () => {
      parent.removeChild(itemMenu)
    })

    menuItems.forEach(p => {
      const item = lab_design_system("button", `project-menu-${p}`, itemMenuBox, lngData[p], null, ["apps", "settings"])
      const itemImg = lab_design_system("img", `project-menu-img-${p}`, item, null, null)
      itemImg.style.transform = 'rotate(-deg)'
      itemImg.setAttribute("src", `https://laboranth.tech/D/R/IMG/CLA/${p}.svg`)

      item.addEventListener("click", () => {
        appActions(e, p)
      })
    })

    lab_fade_in_recursively(itemMenu, 0.6)
  }

  function appActions(e, action) {

    if (action == "copy") {
      if (!document.getElementById('lab-popup-copy-app')) {
        const copyPopup = popup("copy-app", rootLayer)
        const popupTitle = lab_design_system("span", "popup-title", copyPopup, lngData.naming_app, null, ["popup", "title"])
        const inputName = input('', '', copyPopup, null, null, null)
        const copyPopupBtn = lab_design_system("button", "delete-popup-btn", copyPopup, lngData.copy, null, ["buttons", "action"])

        lab_fade_in_recursively(copyPopup, 0.3)

        copyPopupBtn.addEventListener("click", () => {
          if (inputName.value > 0) {
            if (!appList.includes(inputName.value)) {
              const userLSG = lab_local_storage_object('global')
              userLSG.srcApp = e
              userLSG.newApp = inputName.value
              socket.emit('duplicateAp', userLSG)
              document.getElementById('lab-popup-wrap-copy-app').remove()
              document.getElementById('lab-popup-copy-app').remove()
            }
            else {
              elertUser('An application with that name has already been created')
            }
          }
          else {
            alertUser(lngData.input_cannot_be_empty)
          }
        })
      }

    }
    else if (action == "delete") {
      if (!document.getElementById('lab-popup-delete-app')) {
        const deletePopup = popup("delete-app", rootLayer)
        const popupTitle = lab_design_system("span", "popup-title", deletePopup, 'Are you sure you want to uninstall the application', null, ["popup", "title"])

        const deletePopupBtn = lab_design_system("button", "delete-popup-btn", deletePopup, lngData.delete, null, ["buttons", "action"])

        lab_fade_in_recursively(deletePopup, 0.3)

        const lab_user_current_config = lab_local_storage_object("global")

        deletePopupBtn.addEventListener("click", () => {
          lab_user_current_config.appToDelete = e
          socket.emit("deleteApp", lab_user_current_config)
          document.querySelector(`#lab-project-${e}`).remove()
          document.getElementById('lab-popup-wrap-delete-app').remove()
          document.getElementById('lab-popup-delete-app').remove()
        })
      }

    }
    else if (action == "pages") console.log("pages");
    else if (action == "settings") console.log("settings");

  }


  renderList(appList)

  footer(wrapper)
  const theme = localStorage.getItem('theme')
  if (theme == 'dark') setTheme(rootLayer)

  lab_fade_in_recursively(wrapper, 0.3)

}


return dashboard