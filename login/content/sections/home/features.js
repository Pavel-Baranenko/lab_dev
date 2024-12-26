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
        "height": "auto",
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
    }
  },
  "inputs": {
    "standart": {
      "default": {
        "borderRadius": "18px",
        "padding": "0 15px",
        "outline": "none !important",
        "width": "75%",
        "maxWidth": "350px",
        "height": "clamp(5svh, 15vh, 70px)",
        "background": "#f4f4f5",
        "backgroundColor": "white",
        "marginBottom": "clamp(1svh, 15vw, 20px)",
        "border": "none"
      }
    }
  },
  "pages": {
    "login": {
      "default": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100svw",
        "height": "100svh",
        "background": "#EFEFEF",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "fontFamily": "Petrona"
      },
      "Portrait": {
        "justifyContent": "center"
      }
    }
  },
  "labels": {
    "h6": {
      "default": {
        "width": "90%",
        "color": "#808080",
        "fontWeight": "700",
        "fontSize": "clamp(20px, 2vw, 40px)",
        "marginBottom": "clamp(5px, 10svh, 44px)",
        "textAlign": "center"
      }
    }
  },
  "links": {
    "underline": {
      "default": {
        "fontWeight": "300",
        "fontSize": "clamp(12px, 2vw, 20px)",
        "textDecoration": "underline",
        "textAlign": "center",
        "color": "#808080"
      }
    }
  },
  "logo": {
    "medium": {
      "default": {
        "marginTop": "clamp(10px, 2vw, 60px)",
        "marginBottom": "clamp(10px, 2vw, 60px)",
        "width": "clamp(50px, 15svh, 101px)"
      }
    }
  },
  "containers": {}
}

// const VPM = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait"


function lab_design_system(tag, id, parent, content, className, styled) {
  const elementToAppend = document.createElement(tag)

  const styles = lab_ui_styles

  elementToAppend.setAttribute('id', 'lab-' + id)
  parent.appendChild(elementToAppend)

  const A = document.querySelector('#' + 'lab-' + id)
  A.setAttribute('class', 'escape')
  className ? elementToAppend.setAttribute('class', `lab-${className} escape`) : ""

  if (content && typeof content == 'string') {
    A.innerText = content
  }

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


let lngDataTest = {
  'password_update': "Восстановление пароля",
  'repeat': "повторите пароль",
  'update': "Обновить",
  'password_min_chars': "Минимальное значение пароля",
  'password_max_chars': "Максимальное значение пароля",
  'password_hash_updated': "Пароль обновлён",
  'passwords_mismatch': "Пароль не обновлён",
  'first_auth_text': "Register / Login",
  'auth_or_sign': "Register / Login",
  'password_lost': "Restore your password",
  'enter_an_email': "Введите почту",
  //!need add
  'login': "Login",
  'password': "Your password",
  'email': "Your e-mail",
  'send_to_email': "Сообщение для сброса пароля отправлено на почту"
}

function registration(lngData) {
  const recoveryUser = window.location.pathname.split('_')

  let wrap = lab_design_system("form", "auth", rootLayer, null, "registration", ['pages', 'login'])

  let logo = lab_design_system("img", "registration-logo", wrap, null, "registration-logo", ['logo', 'medium'])
  logo.setAttribute('src', "https://laboranth.tech/D/R/IMG/logoAlt.svg")


  let title = lab_design_system("h1", 'registration-title', wrap, lngData.first_auth_text, "registration-title", ['labels', 'h6'])

  recoveryUser[0] == "/labUserMail" && user_mail_validation()
  recoveryUser[0] == "/labUserPass" && recovery()

  if (recoveryUser[0] == '/') {
    // if (recoveryUser[0] == recoveryUser) {
    let mail = lab_design_system("input", 'user-email', wrap, null, "registration-input", ['inputs', 'standart'])
    mail.setAttribute('placeholder', lngData.email)
    mail.setAttribute('type', "email")

    let password = lab_design_system("input", 'user-pass', wrap, null, "registration-input", ['inputs', 'standart'])
    password.setAttribute('placeholder', lngData.password)
    password.setAttribute('type', "password")

    let link = lab_design_system("a", 'forgotten-button', wrap, lngData.password_lost, "registration-link", ['links', 'underline'])
    let btn = lab_design_system("button", 'connect-button', wrap, lngData.login, '', ['buttons', 'yellowBtn'])

    btn.addEventListener('click', e => {
      e.preventDefault()
      const eVal = document.querySelector('#lab-user-email').value
      const pVal = document.querySelector('#lab-user-pass').value
      let timeStamper = Date.now()
      let cryptedUID = numToLatin(timeStamper)
      const credentialsObject = readNSWithoutFields('global')
      credentialsObject.email = eVal
      credentialsObject.password = pVal
      credentialsObject.uid = cryptedUID

      if (!isValidEmail(eVal)) {
        alertUser(p.lngData.invalid_email)
      } else if (credentialsObject.password.length < 6) {
        alertUser(p.lngData.password_min_chars)
      } else if (credentialsObject.password.length > 50) {
        alertUser(p.lngData.password_max_chars)
      }

      else {
        socket.emit('userCredentials', credentialsObject, res => {
          let userConnectionState = new editInBS("global", "connected", true)
          let userUid = new editInBS("global", "uid", res.uid)
          localStorage.setItem('lab_user_session', res.token)
          userConnectionState.connect()
          userUid.edit()
          let globalCtx = readNSWithoutFields("global")

          let rootLayerElements = getRootLayerChildren(rootLayer.children)
          rootLayerElements.forEach(el => {
            let computed = document.querySelector('#' + el.id)
            computed.remove()
          })

          socket.emit("dash", globalCtx, res => {
            const token = localStorage.getItem('lab_user_session')
            return new Promise((resolve, reject) => {
              socket.emit('secure', token, response => {
                if (response.success) {
                  dashData = res
                  renderDash(res)
                } else {
                  const currentLng = lab_local_storage_object('global').lng
                  lab_load_language_module(currentLng).then(lngData => {
                    alertUser(lngData.session_expired)
                    setTimeout(() => {
                      localStorage.clear()
                      location.reload()
                    }, 1500)
                  })
                }
              })
            })
          })
        })
      }
    })

    link.setAttribute("href", "#")

    link.addEventListener('click', () => {
      const userMail = document.querySelector('#lab-user-email').value
      if (userMail) {
        const userLSG = lab_local_storage_object('global')
        userLSG.lostPassMail = userMail
        socket.emit('userLostPassword', userLSG, res => {
          if (res.success) {
            alertUser(lngData.send_to_email)
          }
        })
      } else {
        alertUser(lngData.enter_an_email)
      }
    })
  }

  function user_mail_validation() {
    if (recoveryUser[0] === "/labUserMail") {
      const userLSG = lab_local_storage_object('global')
      userLSG.pathArray = recoveryUser
      socket.emit('confirmUserMail', userLSG, callback => {
        lab_local_storage_object_update("global", { ctx: "Laboranth", uid: callback.uid, connected: true, app: "" })
        localStorage.setItem('lab_user_session', callback.token)
        const userLSG = lab_local_storage_object('global')
        socket.emit('dash', userLSG, res => {
          return new Promise((resolve, reject) => {
            socket.emit('secure', callback.token, response => {
              if (response.success) {
                dashData = res
                renderDash(res)
                setTimeout(() => {
                  window.open(window.location.origin, "_self")
                }, 3000)
              } else {
                const currentLng = lab_local_storage_object('global').lng
                lab_load_language_module(currentLng).then(lngData => {
                  alertUser(lngData.session_expired)
                  setTimeout(() => {
                    localStorage.clear()
                    location.reload()
                  }, 1500)
                })
              }
            })
          })
        })
      })
    }
  }

  function recovery() {
    let password = lab_design_system("input", 'user_pass', wrap, null, "registration-input", ['inputs', 'standart'])
    password.setAttribute('placeholder', lngData.password)
    password.setAttribute('type', "password")

    let confirmPassword = lab_design_system("input", 'confirm-user-pass', wrap, null, "registration-input", ['inputs', 'standart'])
    confirmPassword.setAttribute('placeholder', lngData.repeat)
    confirmPassword.setAttribute('type', "password")


    let btn = lab_design_system("button", 'connect-button', wrap, lngData.update, "registration-btn", ['buttons', 'yellowBtn'])
    btn.addEventListener('click', e => {
      let updateObject = lab_local_storage_object("global")

      if (confirmPassword.value.length < 6 || password.value.length < 6) {
        alertUser(lngData.password_min_chars)
      } else if (confirmPassword.value.length > 50) {
        alertUser(lngData.password_max_chars)
      }
      else {
        if (password.value === confirmPassword.value) {
          updateObject.newPassword = confirmPassword.value
          updateObject.forgotten = true
          updateObject.token = recoveryUser
          socket.emit("updateAccountPassword", updateObject, res => {
            const currentLng = lab_local_storage_object('global').lng
            lab_load_language_module(currentLng).then(lngData => {
              alertUser(lngData.password_hash_updated)
              setTimeout(() => {
                window.open(window.location.hostname, "_self")
              }, 3000)
            })
          })
        } else {
          alertUser(lngData.passwords_mismatch)
        }
      }
    })
  }

  window.addEventListener('resize', () => {

  })
}


registration(lngDataTest)