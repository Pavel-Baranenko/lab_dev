
const styles_d = {
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
    },
    "dash": {
      "default": {
        "background": "rgb(239, 239, 239)",
        "display": "flex",
        "flexDirection": "column",
        "minHeight": "100vh",
        "overflowY": "auto"
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
    },
    "legal": {
      "default": {
        "fontWeight": "400",
        "fontSize": "14px",
        "textDecoration": "underline",
        "textAlign": "left",
        "color": "#fff"
      }
    },
    "contact": {
      "default": {
        "fontWeight": "700",
        "fontSize": "14px",
        "textDecoration": "underline",
        "textAlign": "left",
        "color": "#fff",
        "marginLeft": "auto"
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
    },
    "small": {
      "default": {
        "width": "clamp(40px, 2svw,67px)",
        "height": "clamp(45px, 2svw,75px)"
      }
    }
  },
  "search": {
    "box": {
      "default": {
        "background": "#fff",
        "height": "clamp(5svh,35px,50px)",
        "width": "100%",
        "borderRadius": "40px",
        "cursor": "pointer",
        "display": "flex",
        "alignItems": "center",
        "position": "relative",
        "padding": "0 15px",
        "margin": "0 auto"
      },
      "Portrait": {
        "order": "99"
      },
      "Landscape": {
        "width": "clamp(20svw, 50svw, 500px)"
      }
    },
    "input": {
      "default": {
        "width": "100%",
        "padding": "0 10px 0 5px",
        "border": "none",
        "outline": "none"
      }
    },
    "result": {
      "default": {
        "zIndex": "-1",
        "position": "absolute",
        "top": "calc(100% - 20px)",
        "width": "100%",
        "left": "0",
        "borderRadius": "0 0 15px 15px",
        "overFlow": "hidden",
        "fontSize": "14px",
        "background": "#fff"
      }
    },
    "item": {
      "default": {
        "padding": "5px 50px",
        "display": "block",
        "textDecoration": "none",
        "color": "#000"
      }
    },
    "first": {
      "default": {
        "padding": "20px 50px 5px 50px",
        "display": "block",
        "textDecoration": "none",
        "color": "#000"
      }
    }
  },
  "containers": {
    "header": {
      "default": {
        "display": "flex",
        "boxSizing": "border-box",
        "alignItems": "center",
        "paddingTop": "clamp(2svh, 12svh, 30px)",
        "paddingBottom": "clamp(0, 0, 30px)",
        "paddingLeft": "clamp(2svw, 5svw, 60px)",
        "paddingRight": "clamp(2svw, 5svw, 60px)",
        "position": "relative",
        "zIndex": "999",
        "width": "100%"
      },
      "Portrait": {
        "justifyContent": "space-between",
        "flexWrap": "wrap",
        "gap": "20px"
      }
    },
    "footer": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "color": "#fff",
        "boxSizing": "border-box",
        "marginTop": "auto",
        "flexWrap": "wrap",
        "background": "#464C59",
        "paddingTop": "clamp(2svh, 12svh, 30px)",
        "paddingBottom": "clamp(2svh, 12svh, 30px)",
        "paddingLeft": "clamp(2svw, 5svw, 60px)",
        "paddingRight": "clamp(2svw, 12svw, 60px)"
      }
    }
  },
  "elements": {
    "avatar": {
      "default": {
        "borderRadius": "50px",
        "backgroundColor": "#ddd",
        "position": "relative",
        "width": "clamp(45px,5svw,50px)",
        "aspectRatio": 1,
        "border": "none"
      },
      "Landscape": {
        "marginLeft": "50px"
      }
    },
    "date": {
      "default": {
        "fontSize": "14px",
        "fontWeight": "400",
        "lineHeight": "19.1px",
        "textAlign": "left"
      },
      "Landscape": {
        "marginRight": "45px"
      }
    },
    "theme": {
      "default": {
        "border": "2px solid #585858",
        "cursor": "pointer",
        "width": "40px",
        "height": "20px",
        "boxSizing": "border-box",
        "display": "flex",
        "alignItems": "center",
        "borderRadius": "10px",
        "padding": "0 2px",
        "marginLeft": "20px"
      },
    },
    "colorTheme": {
      "default": {
        "background": "rgb(252, 206, 92)",
        "width": "10px",
        "height": "10px",
        "boxSizing": "border-box",
        "display": "flex",
        "borderRadius": "10px",
        "alignItems": "center",
        "justifyContent": "start"
      },
    }
  },
  "header": {
    "menu": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "zIndex": "999",
        "gap": "30px",
        "fontSize": "18px",
        "fontWeight": "600",
        "lineHeight": "24.55px",
        "textAlign": "left",
        "position": "absolute",
        "top": "calc(100% + 9px)",
        "right": "0",
        "boxShadow": "0px 1px 13.9px 0px #00000014",
        "padding": "32px 25px",
        "borderRadius": "15px",
        "backgroundColor": "#fff",
        "opacity": "0"
      }
    },
    "link": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "flexDirection": "row-reverse",
        "gap": "12px",
        "justifyContent": "flex-end",
        "color": "#000",
        "textDecoration": "none",
        "border": "none"
      }
    }
  },
  "apps": {
    "list": {
      "default": {
        "position": "relative",
        "display": "flex",
        "flexWrap": "wrap",
        "gap": "20px 0",
        "boxSizing": "border-box",
        "justifyContent": "space-between",
        "paddingTop": "clamp(2svh, 30px, 50px)",
        "paddingBottom": "clamp(2svh, 12svh, 50px)",
        "paddingLeft": "clamp(2svw, 5svw, 60px)",
        "paddingRight": "clamp(2svw, 5svw, 60px)"
      }
    },
    "project": {
      "default": {
        "flex": "0 1 24%",
        "boxshadow": "2px 4px 30px 1px rgba(0, 0, 0, 0.09)",
        "background": "#fff",
        "borderRadius": "20px",
        "aspectRatio": 1.39,
        "display": "flex",
        "flexDirection": "column",
        "cursor": "pointer",
        "position": "relative",
        "boxSizing": "border-box",
        "zIndex": "0"
      },
      "Portrait": {
        "flex": "0 1 100%"
      }
    },
    "preview": {
      "default": {
        "height": "calc(100% - 40px)",
        "backgroundColor": "#fff",
        "borderRadius": "20px 20px 0 0",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "backgroundSize": "26%",
        "backgroundImage": "url(`https://laboranth.tech/D/R/IMG/logoAlt.svg`)"
      }
    },
    "wrap": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "height": "40px",
        "backgroundColor": "#fff",
        "padding": "10px 10px 10px 30px",
        "fontWeight": "400",
        "fontSize": "16px",
        "color": "#000",
        "borderRadius": "0 0 20px 20px"
      }
    },
    "box": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "gap": "20px",
        "paddingRight": "12px"
      }
    },
    "menu": {
      "default": {
        "position": "absolute",
        "top": "calc(100% - 40px)",
        "backgroundColor": "#fff",
        "boxShadow": "0px 1px 13.9px 0px #00000014",
        "right": 0,
        "display": "flex",
        "opacity": 0,
        "flexDirection": "column",
        "padding": "11px 11px 27px 27px",
        "borderRadius": "15px",
        "gap": "10px",
        "zIndex": "999"
      }
    },
    "settings": {
      "default": {
        "background": "transparent",
        "display": "flex",
        "flexDirection": "row-reverse",
        "justifyContent": "flex-end",
        "alignItems": "center",
        "gap": "12px",
        "textTransform": "capitalize",
        "border": "none"
      }
    },
    "more": {
      "default": {
        "transform": "rotate(90deg)",
        "width": "25px",
        "marginLeft": "auto"
      }
    }
  },
  "parameters": {
    "popup": {
      "default": {
        "display": "flex",
        "opacity": "1",
        "backgroundColor": "#FFFFFF",
        "borderRadius": "40px",
        "overflow": "hidden",
        "maxWidth": "1080px",
        "width": "100%",
        "minHeight": "clamp(90%, 50%, 600px)",
        "transform": "translateY(-50%) translateX(-50%)",
        "position": "fixed",
        "zIndex": "999",
        "left": "50%",
        "top": "50%",
        "transition": "all 0.7s linear"
      }
    },
    "side": {
      "default": {
        "backgroundColor": "#3C4CA6",
        "color": "#fff",
        "padding": "24px 0 24px 24px",
        "width": "23%",
        "minHeight": "100%",
        "display": "flex",
        "flexDirection": "column",
        "position": "relative"
      }
    },
    "box": {
      "default": {
        "boxSizing": "border-box",
        "paddingTop": "clamp(5px, 35px, 60px)",
        "paddingBottom": "clamp(5px, 35px, 60px)",
        "paddingRight": "clamp(5px, 35px, 120px)",
        "paddingLeft": "clamp(5px, 35px, 60px)",
        "width": "100%",
        "display": "flex",
        "flexDirection": "column",
        "gap": "clamp(2svw, 5svw, 32px)"
      },
      "Portrait": {
        "padding": "clamp(1svw, 3svw, 25px)"
      }
    },
    "btn": {
      "default": {
        "display": "flex",
        "width": "100%",
        "color": "#fff",
        "background-color": "transparent",
        "border": "none",
        "padding": "10px",
        "borderRadius": "10px 0 0 10px",
        "gap": "15px",
        "flexDirection": "row-reverse",
        "justifyContent": "flex-end",
        "fontSize": "18px",
        "height": "45px",
        "fontWeight": "600",
        "lineHeight": "24.55px",
        "textAlign": "left",
        "zIndex": "1",
        "position": "relative"
      }
    },
    "white": {
      "default": {
        "width": "100%",
        "background-color": "#fff",
        "borderRadius": "10px 0 0 10px",
        "height": "45px",
        "position": "absolute",
        "top": 0,
        "right": 0,
        "zIndex": "1",
        "transition": "all 0.1s ease"
      }
    },
    "line": {
      "default": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontSize": "18px",
        "fontWeight": "500",
        "textAlign": "left"
      }
    },
    "confirm": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "gap": "10px"
      }
    },
    "buttons": {
      "default": {
        "display": "flex",
        "gap": "26px"
      }
    }
  },
  "select": {
    "box": {
      "default": {
        "cursor": "pointer",
        "width": "clamp(120px, 15svw, 160px)",
        "position": "relative"
      }
    },
    "top": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "width": "100%",
        "boxSizing": "border-box",
        "height": "40px",
        "fontSize": "16px",
        "fontWeight": "500",
        "textAlign": "center",
        "padding": "10px 0 10px 20px",
        "backgroundColor": "#F4F4F5",
        "borderRadius": "10px"
      }
    },
    "list": {
      "default": {
        "display": "none",
        "position": "absolute",
        "top": "calc(100% - 10px)",
        "flexDirection": "column",
        "gap": "4px",
        "boxSizing": "border-box",
        "backgroundColor": "#F4F4F5",
        "padding": "10px",
        "borderRadius": "0 0 10px 10px",
        "width": "100%"
      }
    }
  },
  "input": {
    "box": {
      "default": {
        "outline": "none",
        "width": "clamp(120px, 15svw,200px)",
        "height": "40px",
        "textAlign": "center",
        "backgroundColor": "#F4F4F5",
        "borderRadius": "10px",
        "border": "none"
      }
    }
  },
  "popup": {
    "box": {
      "default": {
        "position": "fixed",
        "top": "20%",
        "cursor": "pointer",
        "width": "clamp(120px, 80svw, 1100px)",
        "background": "#E4E4E4",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "zIndex": "99",
        "left": "50%",
        "transform": "translateX(-50%)",
        "paddingTop": "clamp(2svh, 5svh, 40px)",
        "paddingBottom": "clamp(2svh, 5svh, 40px)",
        "borderRadius": "30px"
      }
    },
    "content": {
      "default": {
        "width": "clamp(60%, 60%, 80%)",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "height": "90%",
        "gap": "25px"
      }
    },
    "title": {
      "default": {
        "fontSize": "32px",
        "fontWeight": "700",
        "lineHeight": "38.58px",
        "textClign": "center",
        "color": "#000",
        "marginBottom": "15px"
      }
    },
    "input": {
      "default": {
        "outline": "none",
        "height": "40px",
        "textAlign": "center",
        "backgroundColor": "#fff",
        "borderRadius": "10px",
        "border": "none"
      }
    }
  },
}

function select(label, list, parent, value, func) {
  let select = lab_design_system_d("div", `select-${value}`, parent, null, null, ['select', 'box'])
  let top = lab_design_system_d("div", `select-top-${value}`, select, null, null, ['select', 'top'])
  let topSpan = lab_design_system_d("span", `selected-${value}`, top, label, null)
  let listing = lab_design_system_d("div", `select-list-${value}`, select, null, null, ['select', 'list'])
  let arrow = lab_design_system_d("img", `select-arrow-${value}`, top, null, null)
  arrow.src = "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/arrow_drop_down.svg"

  Object.keys(list).forEach(e => {
    let item = lab_design_system_d("div", `select-item-${e}-${value}`, listing, list[e], "select-item")
    item.addEventListener("click", () => {
      topSpan.innerHTML = list[e]
      func(e)
    })
  })

  select.addEventListener("click", () => {
    listing.style.display = listing.style.display == 'none' ? 'flex' : "none"
    arrow.style.transform = arrow.style.transform == 'rotate(180deg)' ? 'none' : "rotate(180deg)"
  })

  return select
}

function popup(id, parent, wrap = false) {
  const popup = lab_design_system_d("div", `popup-${id}`, parent, null, null, ['popup', 'box'])
  const popupContent = lab_design_system_d("div", `popup-content-${id}`, popup, null, null, ['popup', 'content'])

  return wrap ? popup : popupContent;
}

function dash_parameters(u) {
  let activeTab = "profile"

  const parameters = lab_design_system_d("div", "parameters", rootLayer, null, null, ["parameters", "popup"])

  const side = lab_design_system_d("div", "parameters-side", parameters, null, null, ["parameters", "side"])

  const boxWrap = lab_design_system_d("div", "parameters-box", parameters, null, null, ["parameters", "box"])

  const user = lab_design_system_d("div", "profile-user", side, null, null)
  user.style.margin = " 0 0 40px 0"

  const userName = lab_design_system_d("span", "profile-user-name", user, u.email.split("@")[0], null)

  function tab(tabValue) {

    activeTab = tabValue

    boxWrap.innerHTML = ""

    if (tabValue == "profile") {
      const line = lab_design_system_d("div", "profile-box-a", boxWrap, null, null, ["parameters", "line"])
      line.style.alignItems = "center"

      const mail = lab_design_system_d("span", "profile-box-mail", line, "E-mail", null)
      const mailValue = lab_design_system_d("p", "profile-box-d3csw", line, u.email, null)

      const password = lab_design_system_d("div", "profile-box-pass", boxWrap, null, null, ["parameters", "line"])
      const passwordSpan = lab_design_system_d("span", "profile-box-passord", password, "Password", null)
      const confirm = lab_design_system_d("div", "profile-box-conf", password, null, null, ['parameters', 'confirm'])

      const passwordInput = input("Create new password", "password", confirm, null, null)
      const passwordConfirm = input("Confirm new password", "confirm-password", confirm, null, null)

      const profileButtons = lab_design_system_d("div", "profile-buttons", boxWrap, null, null, ['parameters', 'buttons'])

      const save = lab_design_system_d("button", "profile-button-save", profileButtons, "Save", null, ["buttons", "action"])

      save.addEventListener("click", () => {
        const userLSG = lab_local_storage_object("global")

        if (passwordConfirm.value.length < 6) {
          alertUser(u.lngData.password_min_chars)
        } else {
          if (passwordInput.value === passwordConfirm.value) {
            userLSG.newPassword = passwordConfirm.value
            socket.emit("updateAccountPassword", userLSG)
          } else {
            alertUser(u.lngData.passwords_mismatch)
          }
        }
      })

      const del = lab_design_system_d("button", "profile-button-del", profileButtons, "Delete account", null, ["buttons", "grey"])

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

      const theme = lab_design_system_d("div", "parameters-theme", boxWrap, null, null, ["parameters", "line"])

      const themeTitle = lab_design_system_d("span", "theme-heading", theme, "Interface theme", null)
      theme.style.zIndex = "1"
      select(themes[u.configs.ui], themes, theme, "theme")

      const language = lab_design_system_d("div", "profile-box-language", boxWrap, null, null, ["parameters", "line"])
      const languageTitle = lab_design_system_d("span", "profile-language", language, "Language", null)

      select(langs[u.lng], langs, language, "language", (lng) => {
        const userLSG = lab_local_storage_object_update('global', { manualLng: lng })
        userLSG.config = "updateLng"
        socket.emit("userConfigsUpdate", lab_local_storage_object('global'))
      })


      const sftp = lab_design_system_d("div", "profile-box-sftp", boxWrap, null, null, ["parameters", "line"])
      const sftpTitle = lab_design_system_d("span", "profile-sftp", sftp, "SFTP connection", null)

      const sftpBtn = lab_design_system_d("div", "profile-btn-sftp", sftp, "Generate key", null, ["buttons", "action"])
      sftpBtn.style.width = "clamp(120px, 15svw, 160px)"
      sftpBtn.addEventListener("click", () => {
        const userLSG = lab_local_storage_object("global")
        socket.emit("getSftpKey", userLSG)
      })
      const publicId = lab_design_system_d("div", "profile-box-public", boxWrap, null, null, ["parameters", "line"])
      const publicIdTitle = lab_design_system_d("span", "profile-public", publicId, "Public ID", null)

      let publicIdInput = input("", "publicId", publicId, null, "clamp(120px, 15svw, 160px)")

      const publicIdBtn = lab_design_system_d("button", "publicId-btn", publicId, "Save", null, ["buttons", "action"])


      publicIdBtn.style.width = "clamp(120px, 15svw, 160px)"
      publicIdBtn.addEventListener('click', () => {
        if (publicIdInput.value) {
          const userLSG = lab_local_storage_object('global')
          userLSG.newPublicID = publicIdInput.value
          socket.emit('updatePublicID', userLSG, updatedPublicID => {
            if (updatedPublicID.success == true) {
              alertUser(u.lngData.saved)
            }
          })
        }
      })

      const collaborators = lab_design_system_d("div", "collaborators", boxWrap, null, null, ["parameters", "line"])

      const collaboratorsTitle = lab_design_system_d("span", "profile-collaborators", collaborators, "Collaborators", null)

      const collaboratorsBtn = lab_design_system_d("button", "collaborators-btn", collaborators, "Edit", null, ["buttons", "action"])

      collaboratorsBtn.style.width = "clamp(120px, 15svw, 160px)"


      const rights = {
        'designer': "Designer",
        'developer': "Developer",
        'administrator': "Administrator",
      }

      collaboratorsBtn.addEventListener('click', () => {
        boxWrap.innerHTML = ''
        const newCollaborator = lab_design_system_d("span", `new-collaborator`, boxWrap, u.lngData.add_a_collaborator, null)

        const collaboratorsList = lab_design_system_d("div", "collaborators-list", boxWrap, null, null, ["parameters", "line"])

        input('', 'collaborator-email', collaboratorsList)
        const addCollaborator = lab_design_system_d("button", "add-collaborator", collaboratorsList, u.lngData.add, null, ["buttons", "action"])

        addCollaborator.style.width = "clamp(120px, 15svw, 160px)"

        let len = u.configs.collaboratorsLIST.length;

        u.configs.collaboratorsLIST.forEach((e, index) => {

          const collaboratorsItem = lab_design_system_d("div", `collaborators-list-${index}`, boxWrap, null, null, ["parameters", "line"])
          collaboratorsItem.style.zIndex = len
          const collaboratorEmail = lab_design_system_d("span", `collaborator-emeil-${index}`, collaboratorsItem, e.collaborator_email, null)

          const collabRights = select(rights[e.rights.preset], rights, collaboratorsItem, `collaborator-rights-${index}`, (value) => {
            const userLSG = lab_local_storage_object('global')
            userLSG.collaborator = e.collaborator_email
            userLSG.new_preset = value
            socket.emit('updateCollaboratorPreset', userLSG)
          })
          collabRights.style.margin = '0 10px 0 auto'

          const deleteCollaborator = lab_design_system_d("button", `delete-collaborator-${index}`, collaboratorsItem, u.lngData.delete, null, ["buttons", "action"])

          deleteCollaborator.style.width = "clamp(120px, 15svw, 160px)"

          deleteCollaborator.addEventListener('click', () => {
            const userLSG = lab_local_storage_object('global')
            userLSG.collaborator_to_remove = e.collaborator_email
            collaboratorsItem.remove()
            socket.emit('removeCollaborator', userLSG)
          })

          if ((index + 1) == u.configs.collaboratorsLIST.length) (collaboratorsItem.style.marginBottom = '40px')

          len--
        })
      })


    }
    else if (tabValue == "controls") {
      const lab_functionalities_list = [
        u.lngData.dash,
        u.lngData.save,
        u.lngData.text_editor,
        u.lngData.menu,
        u.lngData.manual,
        u.lngData.designer_mode,
        u.lngData.copy,
        u.lngData.paste,
        u.lngData.translate,
        u.lngData.rotate,
        u.lngData.set_to_foreground,
        u.lngData.set_to_background,
        u.lngData.merge,
        u.lngData.forward_on_z_index,
        u.lngData.backspace_on_z_index,
        u.lngData.marker,
        u.lngData.peeling_mask,
        u.lngData.square,
        u.lngData.circle,
        u.lngData.triangle,
        u.lngData.free_form,
        u.lngData.feather,
      ]

      const line = lab_design_system_d("div", "profile-box-voice", boxWrap, null, null, ["parameters", "line"])
      line.style.alignItems = "center"

      const voice = lab_design_system_d("span", "voice-command", line, u.lngData.vocal_command, null)

      const lab_seek_user_speech = lab_local_storage_object('global')
      const lab_user_speech = Object.keys(lab_seek_user_speech).find(x => x === 'speech')

      if (lab_user_speech === undefined) {
        lab_local_storage_object_update('global', { speech: 'firstAccess' })
      } else {
        lab_user_speech = lab_seek_user_speech.speech
      }

      if (lab_user_speech === 'enabled') {
        const voiceBtn = lab_design_system_d("button", "voice-activate", voice, u.lngData.activate, null, ["buttons", "action"])
        voiceBtn.addEventListener('click', () => {
          lab_vocal_control('on', u.lng)
          lab_local_storage_object_update('global', { speech: 'enabled' })
          location.reload()
        })
      }
      else {
        const voiceBtn = lab_design_system_d("button", "voice-activate", voice, u.lngData.disable, null, ["buttons", "grey"])
        voiceBtn.addEventListener('click', () => {
          lab_vocal_control('off')
          lab_local_storage_object_update('global', { speech: 'disabled' })
          location.reload()
        })

      }



      const passwordInput = input("Create new password", "password", confirm, null, null)
      const passwordConfirm = input("Confirm new password", "confirm-password", confirm, null, null)

      const profileButtons = lab_design_system_d("div", "profile-buttons", boxWrap, null, null, ['parameters', 'buttons'])

      const save = lab_design_system_d("button", "profile-button-save", profileButtons, "Save", null, ["buttons", "action"])

      save.addEventListener("click", () => {
        const userLSG = lab_local_storage_object("global")

        if (passwordConfirm.value.length < 6) {
          alertUser(u.lngData.password_min_chars)
        } else {
          if (passwordInput.value === passwordConfirm.value) {
            userLSG.newPassword = passwordConfirm.value
            socket.emit("updateAccountPassword", userLSG)
          } else {
            alertUser(u.lngData.passwords_mismatch)
          }
        }
      })

      const del = lab_design_system_d("button", "profile-button-del", profileButtons, "Delete account", null, ["buttons", "grey"])

      del.addEventListener("click", () => {
        const userLSG = lab_local_storage_object("global")
        userLSG.emailToDel = u.email
        socket.emit("userAccountDel", userLSG)
      })

    }
  }


  const tabButtons = lab_design_system_d("div", "tab-buttons", side, null, null)
  tabButtons.style.position = "relative"

  const tabs = {
    "profile": "Profile",
    "settings": u.lngData.settings,
    'controls': "Controls"
  }

  const white = lab_design_system_d("div", "active-white", tabButtons, null, null, ["parameters", "white"])


  Object.keys(tabs).forEach((e, index) => {
    const tabBtn = lab_design_system_d("button", `parameters-tabs-${e}`, tabButtons, tabs[e], null, ["parameters", "btn"])
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

function lab_design_system_d(tag, id, parent, content, className, styled) {
  const elementToAppend = document.createElement(tag)

  // const styles = lab_ui_styles
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


function lab_fade_in_recursively(element, duration = 1) {
  if (!element || !(element instanceof HTMLElement)) return

  element.style.opacity = '0'
  element.style.transition = 'none'

  Array.from(element.children).forEach(child => lab_fade_in_recursively(child, duration))

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.opacity = '1'
      element.style.transition = `all ${duration}s ease-in-out`
    })
  })
}

function footer(parent) {
  rootLayer.setAttribute('class', 'lab-laboranth-scroll-classic')
  const footer = lab_design_system_d("div", "footer", parent, null, null, ['containers', 'footer'])
  const text = lab_design_system_d("span", "date", footer, `Laboranth>  |  ${new Date().getFullYear()}`, null, ['elements', 'date'])

  const link = lab_design_system_d("a", "legal", footer, "Legal CGU/CGV", null, ['links', 'legal'])
  link.setAttribute("href", "#")

  const contact = lab_design_system_d("a", "contacts", footer, "contact@laboranth.tech", null, ['links', 'contact'])
  contact.setAttribute("href", "mailto:contact@laboranth.tech")
}

let appList = ["test", "test2", "test3", "test4", "test5", "test6", "7", "8", "9", "11", "12", "13", "14", "15", "16", "17", "77", "66", "55", "44", "54", "65", "7656", "4545"]
let externalApps = ["ext1", "ext2", "exfbgnt3", "4545"]


function renderMenu(itemMenu, e, parent, lngData) {
  const itemMenuBox = lab_design_system_d("div", `apps-item-box-${e}`, itemMenu, null, null, ['apps', 'box'])
  const menuItems = ['settings', 'copy', 'delete']

  itemMenu.addEventListener('mouseleave', () => {
    parent.removeChild(itemMenu)
  })

  menuItems.forEach(p => {
    const item = lab_design_system_d("button", `project-menu-${p}`, itemMenuBox, lngData[p], null, ['apps', 'settings'])
    const itemImg = lab_design_system_d("img", `project-menu-img-${p}`, item, null, null)
    itemImg.setAttribute("src", `https://laboranth.tech/D/R/IMG/CLA/${p}.svg`)

    item.addEventListener('click', () => {
      appActions(e, p)
    })
  })

  lab_fade_in_recursively(itemMenu, 0.6)
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
  const input = lab_design_system_d("input", `input-${value}`, parent, null, null, (style || ["input", 'box']))
  input.placeholder = placeholder
  width ? input.style.width = `${width}` : ""

  input.addEventListener("input", () => func(input.value))
  return input
}

function appActions(e, action) {
  const lab_user_current_config = lab_local_storage_object('global')

  if (action == 'copy') {
    inputValue = e + '-copy'
    lab_user_current_config.newApp = inputValue
    socket.emit("createApp", lab_user_current_config)
  }
  else if (action == 'delete') {
    popup('delete-app', rootLayer)
    lab_user_current_config.appToDelete = e
    socket.emit("deleteApp", lab_user_current_config)
    document.querySelector(`#lab-project-${e}`).remove()
  }
  else if (action == 'pages') console.log('pages');
  else if (action == 'settings') console.log('settings');

}

function setTheme(el) {

  const themeColors = {
    'rgb(128, 128, 128)': "rgb(239, 239, 239)",
    'rgb(239, 239, 239)': "rgb(128, 128, 128)",
  }

  Array.from(el.children).forEach(child => setTheme(child))
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      themeColors[el.style.background] && (el.style.background = themeColors[el.style.background])
    })
  })
}

function dashboard(appList, externalApps) {
  let viewMyList = true
  let wrapper = lab_design_system_d("div", "body-wrapper", rootLayer, 0, 0, ["pages", "dash"])

  let header = lab_design_system_d("header", "header", wrapper, 0, 0, ["containers", "header"])

  let logo = lab_design_system_d("a", "logo", header, 0, 0, null);
  logo.setAttribute("href", "/")
  let logoImg = lab_design_system_d("img", "logo-img", logo, null, null, ["logo", "small"]);
  logoImg.setAttribute("src", "https://laboranth.tech/D/R/IMG/logoAlt.svg")

  let themeSwitcher = lab_design_system_d("div", "theme-switcher", header, null, null, ["elements", "theme"])
  let colorTheme = lab_design_system_d("div", "color-theme", themeSwitcher, null, null, ["elements", "colorTheme"])
  let darkTheme = lab_design_system_d("img", "img-theme", colorTheme, null, null)
  darkTheme.setAttribute("src", "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/nightlight.svg")
  darkTheme.style.width = '0'
  themeSwitcher.addEventListener('click', () => {
    themeSwitcher.style.justifyContent = themeSwitcher.style.justifyContent == "end" ? "start" : "end"
    colorTheme.style.background = colorTheme.style.background == "rgb(252, 206, 92)" ? "transparent" : "rgb(252, 206, 92)"
    colorTheme.style.transform = colorTheme.style.transform == "rotate(-180deg)" ? "none" : "rotate(-180deg)"
    darkTheme.style.width = darkTheme.style.width == "auto" ? "0" : "auto"
    setTheme(rootLayer)
  })

  let searchBox = lab_design_system_d("div", "search-box", header, null, null, ["search", "box"])

  let searchImage = lab_design_system_d("img", "search-img", searchBox, null, null, null)
  searchImage.setAttribute("src", "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/search.svg")

  let searchInput = lab_design_system_d("input", "search", searchBox, null, "search", ["search", "input"])

  let result = lab_design_system_d("div", "result", searchBox, null, null, ["search", "result"])

  searchInput.addEventListener("input", () => {
    result.innerHTML = ""
    if (searchInput.value.length) {
      myList = search(viewMyList ? appList : externalApps, searchInput.value)
      if (myList.length) {
        myList.forEach((item, index) => {
          let resultItem = lab_design_system_d("a", `result-${item}`, result, item, null, ['search', !index ? "first" : "item"])
          resultItem.setAttribute("href", `./${item}/home`)
        })
      }
    }

  })

  let create = lab_design_system_d("button", "create-btn", header, "+ Create project", null, ["buttons", "action"])

  create.addEventListener("click", e => {
    lab_fade_in_recursively(wrapper, 0.3)

    const createPopup = popup('delete-app', rootLayer)
    const popupTitle = lab_design_system_d("span", "popup-title", createPopup, "Create app", null, ['popup', 'title'])
    const popupInput = input('name', 'create', createPopup, null, '100%', ['popup', 'input'])
    const createPopupBtn = lab_design_system_d("button", "create-popup-btn", createPopup, "Create", null, ["buttons", "action"])
    lab_fade_in_recursively(createPopup, 0.3)

    const lab_user_current_config = lab_local_storage_object('global')

    createPopupBtn.addEventListener('click', () => {
      lab_user_current_config.newApp = popupInput.value
      socket.emit("createApp", lab_user_current_config)
      window.reload()
    })

  })

  let avatar = lab_design_system_d("button", "user-avatar", header, null, null, ['elements', 'avatar'])

  avatar.addEventListener("click", () => {
    if (document.getElementById("lab-header-menu")) {
      let menu = document.getElementById("lab-header-menu")
      avatar.removeChild(menu)
    } else {
      let headerMenu = lab_design_system_d("div", "header-menu", avatar, null, null, ['header', 'menu'])

      headerMenu.addEventListener('mouseleave', () => {
        avatar.removeChild(headerMenu)
      })

      let menuList = ['settings', 'plans', 'logout']

      menuList.forEach(e => {
        let item = lab_design_system_d("a", `menu-${e}`, headerMenu, e, null, ['header', 'link'])
        let image = lab_design_system_d("img", `${e}-img`, item, null, null, null)
        image.setAttribute("src", `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/${e}.svg`)
        item.addEventListener('click', () => {
          if (e == 'logout') {
            localStorage.clear()
            window.open("https://laboranth.tech/", "_self")
          }
          else if (e == 'settings') {
            // dash_parameters({ email: "baranenko.work@aaa" })
            socket.emit('askAccount', lab_local_storage_object('global'), res => {
              lab_load_language_module(res.configs.language).then(lngData => {
                res.lngData = lngData
                res.lng = res.configs.language
                dash_parameters(res)
              })
            })

          }
        })
      })

      lab_fade_in_recursively(headerMenu, 0.6)

    }
  })


  let apps = lab_design_system_d("div", "app-list", wrapper, null, null, ['apps', 'list'])

  function renderList(list) {
    apps.innerHTML = ""
    let len = list.length

    list.forEach(e => {
      if (e != ".DS_Store") {

        let project = lab_design_system_d("div", `project-${e}`, apps, null, null, ['apps', 'project'])
        project.addEventListener('mouseover', () => {
          project.style.transform = 'scale(1.01)';
        })
        project.addEventListener('mouseleave', () => {
          project.style.transform = 'none';
        })

        let previewBox = lab_design_system_d("div", `item-preview-${e}`, project, null, null, ['apps', 'preview'])

        previewBox.addEventListener("click", () => {
          lab_local_storage_object_update("global", { "ctx": "Application", "app": e, "section": "home", "externalApp": false })
          window.open(window.location.href + "/" + e + "/" + "home", "_self")
        })

        let preview = lab_design_system_d("img", `item-img-${e}`, previewBox, null, null)

        let bottom = lab_design_system_d("div", `apps-item-wrap-${e}`, project, null, null, ['apps', 'wrap'])
        let text = lab_design_system_d("span", `apps-item-${e}`, bottom, e, null, null)
        let img = lab_design_system_d("img", `apps-item-img-${e}`, bottom, null, null, null)

        img.setAttribute("src", "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/more_vert.svg")

        img.addEventListener("click", () => {

          if (document.getElementById('apps-item-menu')) {
            project.removeChild(document.getElementById(`apps-item-menu`))
          } else {
            let itemMenu = lab_design_system_d("div", `apps-item-menu`, project, null, null, ['apps', 'menu'])

            let menuImg = lab_design_system_d("img", `apps-menu-img-${e}`, itemMenu, null, null, ['apps', 'more'])

            menuImg.setAttribute("src", "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/more_vert.svg")

            menuImg.addEventListener("click", () => {
              project.removeChild(document.getElementById(`lab-apps-item-menu-${e}`))
            })

            renderMenu(itemMenu, e, project)

          }
        })

        project.style.zIndex = len
        len--
      }
    })



    lab_fade_in_recursively(apps, 0.6)

  }
  renderList(appList)

  let setList = lab_design_system_d("button", "set-list", wrapper, "Set Listing", null, ['buttons', 'action'])
  setList.style.width = '180px'
  setList.addEventListener("click", () => {
    viewMyList = !viewMyList
    viewMyList ? renderList(appList) : renderList(externalApps, true)
  })

  footer(wrapper)

  lab_fade_in_recursively(wrapper, 0.3)

}

dashboard(appList, externalApps)



