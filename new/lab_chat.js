
const styles = {
  "chat": {
    "wrap": {
      "default": {
        "position": "fixed",
        "right": 0,
        "zIndex": 99999,
        "backgroundColor": "#464C59",
        "padding": "5svh 3svw 3svh 3svw",
        "width": "clamp(42svw,85svw,810px)",
        "height": "75svh",
        "display": "flex",
        "top": "11svh",
        "borderRadius": "30px 0px 0px 30px",
        "gap": "3svw"
      }
    },
    "close": {
      "default": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "width": "40px",
        "height": "40px",
        "borderRadius": "30px 30px 30px 0px",
        "background": "#FED05E",
        "border": "none"
      }
    },
    "body": {
      "default": {
        "flex": "0 1 100%",
        "display": "flex",
        "flexDirection": "column",
        "gap": "2svw"
      }
    },
    "users": {
      "default": {
        "flex": "0 1 3.125svw",
        "display": "flex",
        "gap": "10px",
        "flexDirection": "column"
      }
    },
    "add": {
      "default": {
        "borderRadius": "50%",
        "background": "#FED05E",
        "width": "100%",
        "aspectRatio": 1,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "border": "none"
      }
    },
    "room": {
      "default": {
        "background": "#F7F7F7",
        "flex": "0 1 100%",
        "padding": "2.3svh 1svw",
        "borderRadius": "20px",
        "overflowY": "scroll",
        "overflowX": "hidden"
      }
    },
    "top": {
      "default": {
        "textAlign": "center",
        "fontSize": "12px",
        "fontWeight": 500,
        "color": "#464C59",
        "paddingBottom": "2svh",
        "borderBottom": "1px solid #D0D0D0"
      }
    },
    "bottom": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "width": "100%",
        "gap": "1svw"
      }
    },
    "input": {
      "default": {
        "border": "none",
        "flex": "0 1 93%",
        "outline": "none",
        "width": "93%",
        "height": "calmp(15px,6svh,40px)",
        "borderRadius": "60px",
        "padding": "clamp(1svh,2svh,5px) 15px",
        "background": "#fff",
        "boxSizing": "border-box"
      }
    },
    "send": {
      "default": {
        "border": "none",
        "with": "clamp(15px, 3svh,25px)",
        "height": "clamp(15px, 3svh,25px)",
        "background": "transparent"
      }
    },
    "new": {
      "default": {
        "background": "#fff",
        "padding": "3svh",
        "borderRadius": "30px"
      }
    },
    "heading": {
      "default": {
        "textAlign": "center",
        "fontSize": "clamp(10px,2svw,20px)",
        "fontWeight": 500,
        "marginBottom": "4svh"
      }
    },
    "box": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "gap": "10px",
        "boxSizing": "border-box"
      }
    },
    "contact": {
      "default": {
        "display": "flex",
        "position": "relative",
        "alignItems": "center",
        "gap": "10px",
        "boxSizing": "border-box",
        "flexDirection": "column",
        "cursor": "pointer"
      }
    },
    "label": {
      "default": {
        "position": "absolute",
        "width": "fit-content",
        "minWidth": "16px",
        "height": "16px",
        "top": "4px",
        "left": "4px",
        "background": "#FC3F1D",
        "borderRadius": "50%",
        "color": "#fff",
        "fontWeight": "500",
        "fontSize": "14px",
        "lineHeight": "16px",
        "textAlign": "center"
      }
    },
    "email": {
      "default": {
        "fontSize": "12px",
        "fontWeight": 500,
        "color": "#fff",
        "maxWidth": "65px",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
      }
    },
    "boxInput": {
      "default": {
        "border": "none",
        "outline": "none",
        "width": "100%",
        "height": "clamp(15px,5svh,50px)",
        "borderRadius": "40px",
        "padding": "clamp(1svh,1svh,5px) 15px",
        "background": "#E1E1E1",
        "boxSizing": "border-box"
      }
    },
    "boxBtn": {
      "default": {
        "border": "none",
        "height": "clamp(15px,5svh,50px)",
        "boxSizing": "border-box",
        "width": "19%",
        "fontWeight": 500,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "borderRadius": "40px",
        "background": "#FED05E"
      }
    },
    "messages": {
      "default": {
        "display": "flex",
        "margin": "10px 0",
        "gap": "4px",
        "flexDirection": "column"
      }
    },
    "myMessage": {
      "default": {
        "color": "#000",
        "padding": "11px 15px",
        "background": "#FED05E",
        "marginRight": "auto",
        "borderRadius": "8px 8px 8px 0",
        "maxWidth": "90%",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
      }
    },
    "message": {
      "default": {
        "color": "#000",
        "padding": "11px 15px",
        "background": "#EBEEFF",
        "marginLeft": "auto",
        "borderRadius": "8px 8px 0 8px",
        "maxWidth": "90%",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
      }
    }
  },
}

function chat_design_system(tag, id, parent, content, className, styled) {
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

function chat(parent, lngData) {
  let selectedChat;

  if (!document.getElementById('lab-chat')) {
    const wrap = chat_design_system("div", "chat", parent, 0, 0, ["chat", "wrap"])

    const close = chat_design_system("button", "chat-close", wrap, 0, 0, ["chat", "close"])
    const closeIcon = chat_design_system("img", "chat-close-icon", close)
    closeIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/close.svg`)

    close.addEventListener('click', () => {
      wrap.style.transition = 'all 0.2s linear'
      wrap.style.transform = 'translateX(100%)'
      wrap.style.opacity = '0'

      setTimeout(() => {
        parent.removeChild(wrap)
      }, 2000);
    })

    const body = chat_design_system("div", "chat-body", wrap, 0, 0, ["chat", "body"])

    function chatRoom(email, messages, status, type) {
      let userContact = email.split('@')[0]
      body.innerHTML = ''
      function renderChat() {
        body.innerHTML = ''
        const room = chat_design_system("div", "chat-room", body, 0, 0, ["chat", "room"])
        const top = chat_design_system("div", "chat-top", room, email, 0, ["chat", "top"])
        const messagesBox = chat_design_system("div", "chat-messages", room, 0, 0, ["chat", "messages"])
        const bottom = chat_design_system("div", "chat-bottom", body, 0, 0, ["chat", "bottom"])
        const input = chat_design_system("input", "chat-input", bottom, 0, 0, ["chat", "input"])
        const send = chat_design_system("button", "chat-send", bottom, 0, 0, ["chat", "send"])
        const sendIcon = chat_design_system("img", "chat-send-icon", send)

        function renderMessages(messagesArray) {
          messagesBox.innerHTML = ''
          messagesArray.forEach((m) => {
            if (m.expeditor != email) {
              const message = chat_design_system("span", `chat-message-${m.messageID}`, messagesBox, m.message, 0, ["chat", "myMessage"])
            }
            else {
              const message = chat_design_system("span", `chat-message-${m.messageID}`, messagesBox, m.message, 0, ["chat", "message"])
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
                const message = chat_design_system("span", `chat-message-${sended.data.messageID}`, messagesBox, input.value, 0, ["chat", "myMessage"])
                input.value = ""
              }
            })
          } else {
            alertUser(lngData.input_cannot_be_empty)
          }
        })

      }

      if (status == 'pending') {
        if (type == 'new') {
          const newUser = chat_design_system("div", "chat-new-user", body, 0, 0, ["chat", "new"])
          const newHeading = chat_design_system("div", "chat-heading", newUser, email, 0, ["chat", "heading"])
          const box = chat_design_system("div", "chat-box", newUser, 0, 0, ["chat", "box"])
          box.style.justifyContent = 'space-between'
          const acceptBtn = chat_design_system("button", "chat-btn-accept", box, lngData.accept, 0, ["chat", "boxBtn"])
          acceptBtn.addEventListener('click', () => {
            const userLSG = lab_local_storage_object('global')
            userLSG.contactToAdd = email
            userLSG.addOrRemove = 'add'
            socket.emit('acceptContact', userLSG, acceptRes => {
              if (acceptRes.success === true) renderChat()
            })
          })
          const refuseBtn = chat_design_system("button", "chat-btn-refuse", box, lngData.refuse, 0, ["chat", "boxBtn"])
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
          const awaitingValidation = chat_design_system("div", "chat-body-awaiting-validation", body, lngData.awaiting_validation, 0, ["chat", "top"])
          awaitingValidation.style.color = "#fff"
        }
      }

      if (status == 'accepted') renderChat()

      lab_fade_in_recursively(body, 0.3)
    }


    function addUserContact() {
      body.innerHTML = ''
      const newUser = chat_design_system("div", "chat-new-user", body, 0, 0, ["chat", "new"])
      const newHeading = chat_design_system("div", "chat-heading", newUser, 'Enter an email to invite you to your project', 0, ["chat", "heading"])
      const box = chat_design_system("div", "chat-box", newUser, 0, 0, ["chat", "box"])
      const boxInput = chat_design_system("input", "chat-box-input", box, 0, 0, ["chat", "boxInput"])
      const boxBtn = chat_design_system("button", "chat-box-btn", box, 'Invite', 0, ["chat", "boxBtn"])

      boxBtn.addEventListener('click', () => {
        if (boxInput.value) {
          const userLSG = lab_local_storage_object('global')
          userLSG.contactEmail = boxInput.value

          socket.emit('addNewContact', userLSG, contactData => {
            if (contactData.success === true) {
              // contactData.data.email
            }
          })
        } else {
          alertUser(lngData.input_cannot_be_empty)
        }
      })

      lab_fade_in_recursively(body, 0.3)
    }

    const users = chat_design_system("div", "chat-users", wrap, 0, 0, ["chat", "users"])
    const addUser = chat_design_system("button", "chat-add-user", users, 0, 0, ["chat", "add"])
    const addUserIcon = chat_design_system("img", "chat-add-user-icon", addUser)
    addUserIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/add_user.svg`)
    addUser.addEventListener('click', () => addUserContact())

    socket.emit('fetchMessages', lab_local_storage_object('global'), reloadMessages => {
      if (reloadMessages.success === true) {
        function parseMessages(messagesArray, type) {
          messagesArray.forEach(e => {
            if (e.email) {
              let userContact = e.email.split('@')[0]
              if (selectedChat == e.email) {
                if (!document.getElementById('lab-chat-room')) chatRoom(e.email, e.messages, e.status, type)
              }
              if (!document.getElementById(`lab-chat-user-contact-${userContact}`)) {
                const contact = chat_design_system("div", `chat-user-contact-${userContact}`, users, 0, 0, ["chat", "contact"])
                const contactAvatar = chat_design_system("img", `chat-user-avatar-${userContact}`, contact)
                contactAvatar.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA//avatar.svg`)
                contactAvatar.style.width = '100%'
                contactAvatar.style.aspectRatio = '1'
                contactAvatar.style.boxSizing = 'border-box'
                contactAvatar.style.borderRadius = '50%'
                if (selectedChat == e.email) {
                  contactAvatar.style.border = '2px solid #FED05E'
                  contactAvatar.classList.add('selected-chat')
                }
                const contactEmail = chat_design_system("div", `chat-user-${userContact}`, contact, userContact, 0, ["chat", "email"])

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
                const messageLabel = chat_design_system("div", `chat-user-message-label-${userContact}`, chatUser, String(messageFromUser.length), 'label', ["chat", "label"])
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
              lab_fade_in_recursively(users, 0.3)
            }
          })
        }, 1000);


      }
    })


    lab_fade_in_recursively(wrap, 0.3)
  }

}

return chat