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
        "height": "clamp(16svh, 10svh, 50px)",
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
        "height": "clamp( 35px,5svh,50px)",
        "boxSizing": "border-box",
        "borderRadius": "40px",
        "cursor": "pointer",
        "display": "flex",
        "alignItems": "center",
        "position": "relative",
        "padding": "0 15px",
      },
      "Portrait": {
        "order": "98",
        "width": "calc(100% - 85px)",
      },
      "Landscape": {
        "width": "clamp(20svw, 50svw, 500px)",
        "margin": "0 auto"
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
        "zIndex": "25",
        "width": "100%"
      },
      "Portrait": {
        "justifyContent": "space-between",
        "flexWrap": "wrap",
        "gap": "8px"
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
    },
    "gridSwitch": {
      "default": {
        "background": "#E2E2E2",
        "boxSizing": "border-box",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
      },
      "Landscape": {
        "padding": "5px",
        "borderRadius": "50px",
        "marginRight": "5svw",
        "width": "110px",
        "height": "50px",
      },
      "Portrait": {
        "padding": "3.5px",
        "width": "77px",
        "height": "35px",
        "borderRadius": "35px",
        "order": "99"
      }
    },
    "gridBtn": {
      "default": {
        "border": "none",
        "background": "transparent",
        "boxSizing": "border-box",
        "borderRadius": "50%",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      },
      "Landscape": {
        "width": "40px",
        "height": "40px",
        "padding": "5px",
      },
      "Portrait": {
        "width": "28px",
        "height": "28px",
        "padding": "6px",
      }
    }
  },
  "header": {
    "menu": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "zIndex": "25",
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
    "row": {
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
    "column": {
      "default": {
        "flex": "0 1 100%",
        "background": "#fff",
        "display": "flex",
        "justifyContent": "space-between",
        "cursor": "pointer",
        "position": "relative",
        "boxSizing": "border-box",
        "zIndex": "0",
        "borderRadius": "10px"
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
    "wrap-row": {
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
    "wrap-column": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "height": "40px",
        "width": "100%",
        "padding": "10px 10px 10px 30px",
        "fontWeight": "400",
        "fontSize": "16px",
        "color": "#000",
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
        "zIndex": "26"
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
        "zIndex": "25",
        "left": "50%",
        "top": "50%",
        "transition": "all 0.7s linear"
      }
    },
    "wrapper": {
      "default": {
        "position": "fixed",
        "zIndex": "25",
        "left": "0",
        "right": "0",
        "top": "0",
        "bottom": "0"
      }
    },
    "side": {
      "default": {
        "backgroundColor": "#3C4CA6",
        "color": "#fff",
        "padding": "24px 0 24px 24px",
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
        "paddingRight": "3svw",
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
    "wrap": {
      "default": {
        "position": "fixed",
        "top": "0",
        "right": 0,
        "left": 0,
        "bottom": 0,
        "zIndex": "99",
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
  "alert": {
    "wrap": {
      "default": {
        "max-width": "250px",
        "position": "fixed",
        "top": "120px",
        "right": "0",
        "background": "#6F6E6E",
        "padding": "10px 16px",
        "borderRadius": "10px 0px 0px 10px",
        "zIndex": "9999",
        "color": "#fff",
        "opacity": "0",
        "transition": "all 0.3s linear",
        "transform": "translateX(100%)"
      }
    }
  },
}

function select(label, list, parent, value, func) {
  const select = lab_design_system("div", `select-${value}`, parent, null, null, ["select", "box"])
  const top = lab_design_system("div", `select-top-${value}`, select, null, null, ["select", "top"])
  const topSpan = lab_design_system("span", `selected-${value}`, top, label, null)
  const listing = lab_design_system("div", `select-list-${value}`, select, null, null, ["select", "list"])
  const arrow = lab_design_system("img", `select-arrow-${value}`, top, null, null)
  arrow.src = "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/arrow_drop_down.svg"

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

  return wrap ? popup : popupContent;
}

async function checkMicrophoneStatus() {
  if ("permissions" in navigator) {
    const permission = await navigator.permissions.query({ name: "microphone" });
    if (permission.state === "granted") return true
  }
  return false
}

function alert(text) {
  const wrap = lab_design_system("div", "alert", rootLayer, text, null, ["alert", "wrap"])

  wrap.style.transition = "all 0.4s linear"
  wrap.style.opacity = 1
  wrap.style.transform = "none"

  setTimeout(() => {
    wrap.style.transition = "all 0.2s linear"
    wrap.style.opacity = 0

    setTimeout(() => {
      rootLayer.removeChild(wrap)
    }, 2000);
  }, 6000);
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

  let activeOption = functionalitiesList.dash

  const line = lab_design_system("div", "alt-label-line", parent, null, null, ["parameters", "line"])

  const shortcuts = select("shortcuts", functionalitiesList, line, activeOption, null, (e) => {
    activeOption = e
    socket.emit("userShortcuts", lab_local_storage_object("global"), callback => {
      applyShortcuts(callback.data)
    })
  })

  const altLabel = lab_design_system("div", "alt-label", line, "CTRL | CMD +", null)

  const keyInput = input("", "", line)

  keyInput.setAttribute("readonly", true)

  keyInput.addEventListener("keydown", e => {
    e.preventDefault()
    keyInput.value = e.key
  })
  const buttons = lab_design_system("div", "alt-buttons-line", parent, null, null, ["parameters", "line"])

  const save = lab_design_system("button", "save", buttons, u.lngData.save, null, ["buttons", "action"])
  const reinitialize = lab_design_system("button", "reinitialize", buttons, u.lngData.reinitialize, null, ["buttons", "action"])

  reinitialize.addEventListener("click", () => {
    switch (functionalitiesList[activeOption]) {
      case u.lngData.dash:
        keyInput.value = "h"
        break;
      case u.lngData.save:
        keyInput.value = "s"
        break;
      case u.lngData.text_editor:
        keyInput.value = "t"
        break;
      case u.lngData.menu:
        keyInput.value = "m"
        break;
      case u.lngData.manual:
        keyInput.value = "i"
        break;
      case u.lngData.designer_mode:
        keyInput.value = "d"
        break;
      case u.lngData.copy:
        keyInput.value = "c"
        break;
      case u.lngData.paste:
        keyInput.value = "v"
        break;
      case u.lngData.translate:
        keyInput.value = "q"
        break;
      case u.lngData.rotate:
        keyInput.value = "a"
        break;
      case u.lngData.foreground:
        keyInput.value = "w"
        break;
      case u.lngData.background:
        keyInput.value = "x"
        break;
      case u.lngData.merge:
        keyInput.value = "y"
        break;
      case u.lngData.up:
        keyInput.value = "+"
        break;
      case u.lngData.down:
        keyInput.value = "-"
        break;
      case u.lngData.marker:
        keyInput.value = "r"
        break;
      case u.lngData.peeling_mask:
        keyInput.value = "u"
        break;
      case u.lngData.square:
        keyInput.value = "k"
        break;
      case u.lngData.circle:
        keyInput.value = "j"
        break;
      case u.lngData.triangle:
        keyInput.value = "b"
        break;
      case u.lngData.free_form:
        keyInput.value = "l"
        break;
      case u.lngData.feather:
        keyInput.value = "f"
        break;

      default:
        break;
    }

    const userLSG = lab_local_storage_object("global")
    userLSG.bindedTo = lab_functionalities_select.selectedIndex
    userLSG.binding = keyInput.value
    userLSG.fn_name = activeOption
    socket.emit("bindShortcut", userLSG)
  })

  save.addEventListener("click", () => {
    const userLSG = lab_local_storage_object("global")
    if (keyInput.value) {
      userLSG.bindedTo = lab_functionalities_select.selectedIndex
      userLSG.binding = keyInput.value
      userLSG.fn_name = getKeyFromValue(functionalitiesList[activeOption])
      socket.emit("bindShortcut", userLSG)
    } else {
      alertUser(u.lngData.input_cannot_be_empty)
    }
  })

  function defaults() {
    switch (functionalitiesList[activeOption]) {
      case u.lngData.dash:
        keyInput.setAttribute("placeholder", "h")
        break;
      case u.lngData.save:
        keyInput.setAttribute("placeholder", "s")
        break;
      case u.lngData.text_editor:
        keyInput.setAttribute("placeholder", "t")
        break;
      case u.lngData.menu:
        keyInput.setAttribute("placeholder", "m")
        break;
      case u.lngData.manual:
        keyInput.setAttribute("placeholder", "i")
        break;
      case u.lngData.designer_mode:
        keyInput.setAttribute("placeholder", "d")
        break;
      case u.lngData.copy:
        keyInput.setAttribute("placeholder", "c")
        break;
      case u.lngData.paste:
        keyInput.setAttribute("placeholder", "v")
        break;
      case u.lngData.translate:
        keyInput.setAttribute("placeholder", "q")
        break;
      case u.lngData.rotate:
        keyInput.setAttribute("placeholder", "a")
        break;
      case u.lngData.first_plan:
        keyInput.setAttribute("placeholder", "w")
        break;
      case u.lngData.second_plan:
        keyInput.setAttribute("placeholder", "x")
        break;
      case u.lngData.merge:
        keyInput.setAttribute("placeholder", "y")
        break;
      case u.lngData.up:
        keyInput.setAttribute("placeholder", "+")
        break;
      case u.lngData.down:
        keyInput.setAttribute("placeholder", "-")
        break;
      case u.lngData.marker:
        keyInput.setAttribute("placeholder", "r")
        break;
      case u.lngData.peeling_mask:
        keyInput.setAttribute("placeholder", "u")
        break;
      case u.lngData.square:
        keyInput.setAttribute("placeholder", "k")
        break;
      case u.lngData.circle:
        keyInput.setAttribute("placeholder", "j")
        break;
      case u.lngData.triangle:
        keyInput.setAttribute("placeholder", "b")
        break;
      case u.lngData.free_form:
        keyInput.setAttribute("placeholder", "l")
        break;
      case u.lngData.feather:
        keyInput.setAttribute("placeholder", "f")
        break;

      default:
        break;
    }
  }

  function applyShortcuts(configs) {
    keyInput.value = ""
    if (configs) {
      u.configs = configs
    }

    if (lab_obj_has_key(u.configs, "shortcuts")) {
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

    boxWrap.innerHTML = ""

    if (tabValue == "profile") {
      const line = lab_design_system("div", "profile-box-a", boxWrap, null, null, ["parameters", "line"])
      line.style.alignItems = "center"

      const mail = lab_design_system("span", "profile-box-mail", line, u.lngData.email, null)
      const mailValue = lab_design_system("p", "profile-box-d3csw", line, u.email, null)

      const password = lab_design_system("div", "profile-box-pass", boxWrap, null, null, ["parameters", "line"])
      const passwordSpan = lab_design_system("span", "profile-box-passord", password, u.lngData.password, null)
      const confirm = lab_design_system("div", "profile-box-conf", password, null, null, ["parameters", "confirm"])

      const passwordInput = input(u.lngData.new_password, "password", confirm, null, null)
      const passwordConfirm = input(u.lngData.confirm, "confirm-password", confirm, null, null)

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

      const themeTitle = lab_design_system("span", "theme-heading", theme, u.lngData.interface_theme, null)
      theme.style.zIndex = "1"
      select(themes[u.configs.ui], themes, theme, "theme")

      const language = lab_design_system("div", "profile-box-language", boxWrap, null, null, ["parameters", "line"])
      const languageTitle = lab_design_system("span", "profile-language", language, u.lngData.language, null)

      select(langs[u.lng], langs, language, "language", (lng) => {
        const userLSG = lab_local_storage_object_update("global", { manualLng: lng })
        userLSG.config = "updateLng"
        socket.emit("userConfigsUpdate", lab_local_storage_object("global"))
      })


      const sftp = lab_design_system("div", "profile-box-sftp", boxWrap, null, null, ["parameters", "line"])
      const sftpTitle = lab_design_system("span", "profile-sftp", sftp, u.lngData.sftp_connection, null)

      const sftpBtn = lab_design_system("div", "profile-btn-sftp", sftp, u.lngData.generate_the_key, null, ["buttons", "action"])

      sftpBtn.style.width = "clamp(120px, 15svw, 160px)"
      sftpBtn.addEventListener("click", () => {
        const userLSG = lab_local_storage_object("global")
        socket.emit("getSftpKey", userLSG)
      })
      const publicId = lab_design_system("div", "profile-box-public", boxWrap, null, null, ["parameters", "line"])
      const publicIdTitle = lab_design_system("span", "profile-public", publicId, u.lngData.public_id, null)

      let publicIdInput = input("", "publicId", publicId, null, "clamp(120px, 15svw, 160px)")

      const publicIdBtn = lab_design_system("button", "publicId-btn", publicId, u.lngData.save, null, ["buttons", "action"])


      publicIdBtn.style.width = "clamp(120px, 15svw, 160px)"
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

      collaboratorsBtn.style.width = "clamp(120px, 15svw, 160px)"


      const rights = {
        "designer": u.lngData.designer,
        "developer": u.lngData.developer,
        "administrator": u.lngData.administrator,
      }

      collaboratorsBtn.addEventListener("click", () => {
        boxWrap.innerHTML = ""
        const newCollaborator = lab_design_system("span", `new-collaborator`, boxWrap, u.lngData.add_a_collaborator, null)

        const collaboratorsList = lab_design_system("div", "collaborators-list", boxWrap, null, null, ["parameters", "line"])

        input("", "collaborator-email", collaboratorsList)
        const addCollaborator = lab_design_system("button", "add-collaborator", collaboratorsList, u.lngData.add, null, ["buttons", "action"])

        addCollaborator.style.width = "clamp(120px, 15svw, 160px)"

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

          deleteCollaborator.style.width = "clamp(120px, 15svw, 160px)"

          deleteCollaborator.addEventListener("click", () => {
            const userLSG = lab_local_storage_object("global")
            userLSG.collaborator_to_remove = e.collaborator_email
            collaboratorsItem.remove()
            socket.emit("removeCollaborator", userLSG)
          })

          if ((index + 1) == u.configs.collaboratorsLIST.length) (collaboratorsItem.style.marginBottom = "40px")

          len--
        })
      })


    }
    else if (tabValue == "controls") {



      const line = lab_design_system("div", "profile-box-voice", boxWrap, null, null, ["parameters", "line"])
      line.style.width = "100%"
      line.style.alignItems = "center"

      const voice = lab_design_system("span", "voice-command", line, u.lngData.vocal_command, null)

      if (checkMicrophoneStatus()) {
        const voiceBtn = lab_design_system("button", "voice-activate", voice, u.lngData.activate, null, ["buttons", "action"])
        voiceBtn.addEventListener("click", () => {
          lab_vocal_control("on", u.lng)
          lab_local_storage_object_update("global", { speech: "enabled" })
          location.reload()
        })
      }
      else {
        const voiceBtn = lab_design_system("button", "voice-activate", voice, u.lngData.disable, null, ["buttons", "grey"])
        voiceBtn.addEventListener("click", () => {
          lab_vocal_control("off")
          lab_local_storage_object_update("global", { speech: "disabled" })
          location.reload()
        })

      }
      shortcutsSettings(u, boxWrap)


    }
  }


  const tabButtons = lab_design_system("div", "tab-buttons", side, null, null)
  tabButtons.style.position = "relative"

  const tabs = {
    "profile": "Profile",
    "settings": u.lngData.settings,
    "controls": "Controls"
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

function renderMenu(itemMenu, e, parent, lngData) {
  const itemMenuBox = lab_design_system("div", `apps-item-box-${e}`, itemMenu, null, null, ["apps", "box"])
  const menuItems = ["settings", "copy", "delete"]

  itemMenu.addEventListener("mouseleave", () => {
    parent.removeChild(itemMenu)
  })

  menuItems.forEach(p => {
    const item = lab_design_system("button", `project-menu-${p}`, itemMenuBox, lngData[p], null, ["apps", "settings"])
    const itemImg = lab_design_system("img", `project-menu-img-${p}`, item, null, null)
    itemImg.setAttribute("src", `https://laboranth.tech/D/R/IMG/CLA/${p}.svg`)

    item.addEventListener("click", () => {
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
  const input = lab_design_system("input", `input-${value}`, parent, null, null, (style || ["input", "box"]))
  input.placeholder = placeholder
  width ? input.style.width = `${width}` : ""

  input.addEventListener("input", () => func(input.value))
  return input
}

function appActions(e, action) {
  const lab_user_current_config = lab_local_storage_object("global")

  if (action == "copy") {
    inputValue = e + "-copy"
    lab_user_current_config.newApp = inputValue
    socket.emit("createApp", lab_user_current_config)
  }
  else if (action == "delete") {
    popup("delete-app", rootLayer)
    lab_user_current_config.appToDelete = e
    socket.emit("deleteApp", lab_user_current_config)
    document.querySelector(`#lab-project-${e}`).remove()
  }
  else if (action == "pages") console.log("pages");
  else if (action == "settings") console.log("settings");

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

function dashboard(appList, checkLng, externalApps, accountData, lngData) {

  rootLayer.style.overflowY = "auto"
  let viewMyList = true

  const wrapper = lab_design_system("div", "body-wrapper", rootLayer, 0, 0, ["pages", "dash"])
  const header = lab_design_system("header", "header", wrapper, 0, 0, ["containers", "header"])

  const logo = lab_design_system("a", "logo", header, 0, 0, null);
  logo.setAttribute("href", "/")


  const logoImg = lab_design_system("img", "logo-img", logo, null, null, ["logo", "small"]);
  logoImg.setAttribute("src", "https://laboranth.tech/D/R/IMG/logoAlt.svg")

  const themeSwitcher = lab_design_system("div", "theme-switcher", header, null, null, ["elements", "theme"])
  const colorTheme = lab_design_system("div", "color-theme", themeSwitcher, null, null, ["elements", "colorTheme"])
  const darkTheme = lab_design_system("img", "img-theme", colorTheme, null, null)
  darkTheme.setAttribute("src", "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/nightlight.svg")
  darkTheme.style.width = "0"

  themeSwitcher.addEventListener("click", () => {
    themeSwitcher.style.justifyContent = themeSwitcher.style.justifyContent == "end" ? "start" : "end"
    colorTheme.style.background = colorTheme.style.background == "rgb(252, 206, 92)" ? "transparent" : "rgb(252, 206, 92)"
    colorTheme.style.transform = colorTheme.style.transform == "rotate(-180deg)" ? "none" : "rotate(-180deg)"
    darkTheme.style.width = darkTheme.style.width == "auto" ? "0" : "auto"
    setTheme(rootLayer)
  })


  const searchBox = lab_design_system("div", "search-box", header, null, null, ["search", "box"])

  const searchImage = lab_design_system("img", "search-img", searchBox, null, null, null)
  searchImage.setAttribute("src", "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/search.svg")

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

  })
  const gridSwitch = lab_design_system("div", "grid-switch", header, null, null, ["elements", "gridSwitch"])

  let activeSwitch = "row"

  const gridLayouts = ["row", "column"]
  gridLayouts.forEach((e, index) => {
    const btn = lab_design_system("button", `grid-switch-${e}`, gridSwitch, null, null, ["elements", "gridBtn"])

    e == activeSwitch && (btn.style.background = "#fff")


    const icon = lab_design_system("img", `grid-icon-${e}`, btn)
    icon.setAttribute("src", `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/${e}.svg`)
    icon.style.maxWidth = "100%"

    btn.addEventListener("click", () => {
      if (e != activeSwitch) {
        document.getElementById(`lab-grid-switch-${e == "row" ? "column" : "row"}`).style.background = "transparent"
        btn.style.background = "#fff"

        activeSwitch = e

        viewMyList ? renderList(appList, e) : renderList(externalApps, e)
      }

    })
  })

  const create = lab_design_system("button", "create-btn", header, "u.lngData.create", null, ["buttons", "action"])

  create.addEventListener("click", e => {
    lab_fade_in_recursively(wrapper, 0.3)

    const createPopup = popup("delete-app", rootLayer)
    const popupTitle = lab_design_system("span", "popup-title", createPopup, "u.lngData.create_app", null, ["popup", "title"])

    const popupInput = input("name", "create", createPopup, null, "100%", ["popup", "input"])
    const createPopupBtn = lab_design_system("button", "create-popup-btn", createPopup, "u.lngData.create", null, ["buttons", "action"])

    lab_fade_in_recursively(createPopup, 0.3)

    const lab_user_current_config = lab_local_storage_object("global")

    createPopupBtn.addEventListener("click", () => {
      lab_user_current_config.newApp = popupInput.value
      socket.emit("createApp", lab_user_current_config)
      window.reload()
    })

  })

  const avatar = lab_design_system("button", "user-avatar", header, null, null, ["elements", "avatar"])

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
        image.setAttribute("src", `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/${e}.svg`)
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
        })
      })

      lab_fade_in_recursively(headerMenu, 0.6)

    }
  })


  const apps = lab_design_system("div", "app-list", wrapper, null, null, ["apps", "list"])


  function renderList(list, direction = "row") {
    apps.innerHTML = ""
    let len = list.length

    list.forEach(e => {
      if (e != ".DS_Store") {

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
          window.open(window.location.href + "/" + e + "/" + "home", "_self")
        })

        const preview = lab_design_system("img", `item-img-${e}`, previewBox, null, null)

        const bottom = lab_design_system("div", `apps-item-wrap-${e}`, project, null, null, ["apps", `wrap-${direction}`])
        const text = lab_design_system("span", `apps-item-${e}`, bottom, e, null, null)
        const img = lab_design_system("img", `apps-item-img-${e}`, bottom, null, null, null)

        img.setAttribute("src", "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/more_vert.svg")

        img.addEventListener("click", () => {

          if (document.getElementById("apps-item-menu")) {
            project.removeChild(document.getElementById(`apps-item-menu`))
          } else {
            const itemMenu = lab_design_system("div", `apps-item-menu`, project, null, null, ["apps", "menu"])

            const menuImg = lab_design_system("img", `apps-menu-img-${e}`, itemMenu, null, null, ["apps", "more"])

            menuImg.setAttribute("src", "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/more_vert.svg")

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
  renderList(appList)

  let setList = lab_design_system("button", "set-list", wrapper, "Set Listing", null, ["buttons", "action"])
  setList.style.width = "180px"
  setList.addEventListener("click", () => {
    viewMyList = !viewMyList
    viewMyList ? renderList(appList) : renderList(externalApps, true)
  })

  footer(wrapper)

  lab_fade_in_recursively(wrapper, 0.3)

}