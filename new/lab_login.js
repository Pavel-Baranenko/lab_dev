function registration(lngData) {
  const recoveryUser = window.location.pathname.split('_')

  const wrap = lab_design_system("form", "auth", rootLayer, null, "registration", ['pages', 'login'])

  let alternateColor = false
  let link
  let connectButton
  wrap.addEventListener('click', e => {
    if (e.target.id != "lab-user-email" && e.target.id != "lab-user-pass" && e.target.id != "lab-connect-button") {
      if (alternateColor === false) {
        title.style.color = 'white'
        link.style.color = 'white'
        connectButton.style.color = '#222226'
        link.style.color = 'white'
        connectButton.style.backgroundColor = '#f1f1f1'
        wrap.style.backgroundColor = '#808080'
        alternateColor = true
      } else {
        wrap.style.backgroundColor = '#EFEFEF'
        alternateColor = false
        title.style.color = '#222226'
        link.style.color = '#222226'
        connectButton.style.color = '#222226'
        connectButton.style.backgroundColor = 'rgb(254, 208, 94)'
      }
    }
  })

  const logo = lab_design_system("img", "registration-logo", wrap, null, "registration-logo", ['logo', 'medium'])
  logo.setAttribute('src', "https://laboranth.tech/D/R/IMG/lab_logo.svg")

  const title = lab_design_system("h1", 'registration-title', wrap, lngData.auth_or_sign, "registration-title", ['labels', 'h6'])
  title.style.color = "#222226"

  recoveryUser[0] == "/labUserMail" && user_mail_validation()
  recoveryUser[0] == "/labUserPass" && recovery()

  if (recoveryUser[0] == '/') {
    user_mail_validation()
    const maildWrap = lab_design_system("div", 'user-pass-wrap', wrap)
    maildWrap.style.width = '90%'
    maildWrap.style.maxWidth = '350px'
    maildWrap.style.position = 'relative'

    const mail = lab_design_system("input", 'user-email', maildWrap, null, "registration-input", ['inputs', 'standard'])
    mail.style.fontSize = 'large'
    mail.setAttribute('placeholder', lngData.email)
    mail.setAttribute('type', "email")
    mail.style.width = '100%'

    const passwordWrap = lab_design_system("div", 'user-email-wrap', wrap)
    passwordWrap.style.width = '90%'
    passwordWrap.style.maxWidth = '350px'
    passwordWrap.style.position = 'relative'

    const password = lab_design_system("input", 'user-pass', passwordWrap, null, "registration-input", ['inputs', 'standard'])
    password.setAttribute('placeholder', lngData.password)
    password.setAttribute('type', "password")
    password.style.width = '100%'
    password.style.fontSize = 'large'


    const showPass = lab_design_system("div", 'show-pass-button', passwordWrap, '', '', ['elements', 'showPass'])
    const showPassIcon = lab_design_system("img", 'show-pass-icon', showPass)
    showPassIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/show_pass.svg`)
    showPassIcon.style.width = '100%'
    showPassIcon.style.height = 'auto'
    showPassIcon.style.marginBottom = "clamp(1svh, 15vw, 20px)"

    showPass.addEventListener('click', () => {
      if (password.getAttribute('type') == 'password') {
        password.setAttribute('type', 'text')
        showPassIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/show_pass_on.svg`)
      }
      else {
        password.setAttribute('type', 'password')
        showPassIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/show_pass.svg`)
      }
    })

    password.addEventListener('input', () => {
      if (password.value) {
        showPass.style.opacity = "0.7"
        showPass.style.pointerIvents = "unset"

      } else {
        showPass.style.opacity = "0"
        showPass.style.pointerIvents = "none"
      }
    })

    link = lab_design_system("a", 'forgotten-button', wrap, lngData.password_lost, "registration-link", ['links', 'underline'])
    link.style.color = "#222226"
    link.style.cursor = "pointer"
    connectButton = lab_design_system("button", 'connect-button', wrap, lngData.login, '', ['buttons', 'yellowBtn'])
    connectButton.style.cursor = "pointer"
    connectButton.style.fontFamily = "Petrona"

    function callConnection() {
      const eVal = document.querySelector('#lab-user-email').value
      const pVal = document.querySelector('#lab-user-pass').value
      let timeStamper = Date.now()
      let cryptedUID = numToLatin(timeStamper)
      const credentialsObject = readNSWithoutFields('global')
      credentialsObject.email = eVal
      credentialsObject.password = pVal
      credentialsObject.uid = cryptedUID

      if (!isValidEmail(eVal)) {
        alertUser(lngData.invalid_email)
      } else if (credentialsObject.password.length < 6) {
        alertUser(lngData.password_min_chars)
      } else if (credentialsObject.password.length > 50) {
        alertUser(lngData.password_max_chars)
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
    }

    lab_secured_click(lngData, connectButton, { run: callConnection }, 5000)

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
    password.style.fontSize = 'large'
    password.setAttribute('placeholder', lngData.password)
    password.setAttribute('type', "password")

    let confirmPassword = lab_design_system("input", 'confirm-user-pass', wrap, null, "registration-input", ['inputs', 'standart'])
    confirmPassword.style.fontSize = 'large'
    confirmPassword.setAttribute('placeholder', lngData.repeat)
    confirmPassword.setAttribute('type', "password")


    let btn = lab_design_system("button", 'connect-button', wrap, lngData.update, "registration-btn", ['buttons', 'yellowBtn'])
    btn.addEventListener('click', e => {
      e.preventDefault()
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
            console.log(res);

            const currentLng = lab_local_storage_object('global').lng
            lab_load_language_module(currentLng).then(lngData => {
              alertUser(lngData.password_hash_updated)
              setTimeout(() => {
                window.open(`https://${window.location.hostname}`, "_self")
              }, 3000)
            })
          })
        } else {
          alertUser(lngData.passwords_mismatch)
        }
      }
    })
  }

  lab_fade_in_recursively(wrap, 0.314 * 2)
}

return registration