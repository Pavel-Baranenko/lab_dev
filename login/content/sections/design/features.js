const oldSRC = '/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/'
const styles_d = {
  "design": {
    'body': {
      'default': {
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        height: 'fit-content',
        width: "100svw",
        height: "100svh"
      }
    },
    'side': {
      'default': {
        'transition': 'all 0.1s linear',
        'position': 'relative',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 18.9px -4px #0000002E',
        width: '100px',
        margin: "0",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        minHeight: '100vh',
        paddingTop: '63px',
        zIndex: 999,
        boxShadow: '0 4px 19px - 4px rgba(0, 0, 0, 0.18)',
        borderRadius: '0 20px 0 0',
      }
    },
    'hideSide': {
      'default': {
        margin: "0px 0px 0px -100px"
      }
    },
    'showMenu': {
      'default': {
        border: "4px solid #f2f3f7",
        borderRadius: "30px 0 30px 30px",
        boxSizing: 'border-box',
        width: "40px",
        height: "40px",
        background: '#fed05e',
        position: 'absolute',
        right: '0px',
        top: '-4px',
        transform: "none",
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    },
    'hideMenu': {
      'default': {
        transform: "translateX(40px) rotate(-180deg)"
      }
    },
    'templates': {
      'default': {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        justifyContent: 'center',
        marginTop: '13px',
      }
    },
    'templatesHeading': {
      'default': {
        fontWeight: 700,
        boxSizing: 'border-box',
        fontSize: '14px',
        color: '#000',
      }
    },
    'template': {
      'default': {
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 500,
        fontSize: '10px',
        boxSizing: 'border-box',
        lineHeight: '110%',
        textAlign: 'center',
        color: "#000",
        position: "relative",
        marginTop: '6px',
      }
    },
    'templateIcon': {
      'default': {
        width: '55px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        height: '55px',
        borderRadius: '19px',
        background: '#f2f3f7',
      }
    },
    'top': {
      'default': {
        transition: 'all 0.1s linear',
        gap: '16px',
        padding: '12px 40px 18px 40px',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        backgroundColor: '#464C59',
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '1080px',
        width: '100%',
        borderRadius: '0 0 30px 30px',
        height: '70px',
        zIndex: 999,
      }
    },
    'hideTop': {
      'default': {
        transform: 'translateY(-98%) translateX(-50%)',
      }
    },
    'btn': {
      'default': {
        backgroundColor: "transparent",
        boxSizing: 'border-box',
        border: "none"
      }
    },
    'screenBtn': {
      'default': {
        backgroundColor: "transparent",
        border: "none",
        borderRadius: '8px',
        width: '42px',
        boxSizing: 'border-box',
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    },
    'blind': {
      'default': {
        position: 'absolute',
        bottom: '-3px',
        backgroundColor: '#FED05E',
        width: '96px',
        boxSizing: 'border-box',
        height: '6px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '50px',
        border: 'none'
      }
    },
    'pixelView': {
      'default': {
        borderRadius: '8px',
        height: '33px',
        boxSizing: 'border-box',
        background: '#f3f3f3',
        fontWeight: '400',
        fontSize: '13px',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 12px',
      }
    },
    'setPage': {
      'default': {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: 600,
        fontSize: '18px',
        color: '#fff',
        background: "transparent",
        border: 'none'
      }
    },
    'toolbar': {
      'default': {
        'position': 'fixed',
        left: "50%",
        bottom: '30px',
        zIndex: "99",
        background: "#fff",
        width: "100%",
        borderRadius: '67px',
        display: "flex",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 40px",
        maxWidth: "550px",
        'height': "81px",
        boxShadow: '-1px 1px 13px 0 rgba(0, 0, 0, 0.11)',
        'transform': "translateX(-50%)"
      }
    },
    'hideToolbar': {
      'default': {
        bottom: "-80px"
      }
    },
    'toolbarItem': {
      'default': {
        width: "45px",
        cursor: "pointer",
        border: 'none',
        background: "transparent",
        height: "45px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: '8px'
      }
    },
    'HoverBox': {
      'default': {
        position: 'absolute',
        zIndex: '9999',
        pointerEvents: 'none',
        boxShadow: '0px 0px 0px 2px rgba(36, 99, 235, 1) inset'
      }
    },
    'hoverMenuBtn': {
      'default': {
        borderRadius: '50px',
        width: '35px',
        height: '17px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        background: '#464c59',
        position: 'absolute',
        cursor: "poiner",
        zIndex: '99999',
        border: "none",
        cursor: 'pointer'
      }
    },
    'page': {
      'default': {
        width: '100%',
        maxWidth: '100svw',
        position: 'relative',
        minHeight: '100vh',
        background: '#EFEFEF',
        margin: "auto"
      }
    },
    'blindTools': {
      'default': {
        position: "absolute",
        background: '#FED05E',
        width: "17.4%",
        height: "4px",
        top: "-2px",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "50px",
        border: "none"
      }
    }
  }
}
let styles = styles_d

const TemplatesList = {
  'template-20dh28d820d2': {
    'icon': `${oldSRC}arrow_menu_close.svg`,
    'title': "button",
    'template': {
      'paysage': {
        'id': "lab-button",//
        'tag': "button",//
        'root': true,//
        'classes': "button-ascsc kdkkdd ksxkskmmsxm",//
        'attributes': {//
          'data-img': "value"//
        },//
        'styles': {
          'padding': '10px 20px',
          'borderRadius': "15px",
          'fontWeight': "700",
          'color': "#1C1B1F",
          'background': "#FED05E"
        },
        'text': 'Button',
      }
      ,
      'portrait': {
        'id': "lab-button",//
        'tag': "button",//
        'root': true,//
        'classes': "button-ascsc kdkkdd ksxkskmmsxm",//
        'attributes': {//
          'data-img': "value"//
        },//
        'styles': {
          'padding': '3svh 5svw',
          'borderRadius': "15px",
          'fontWeight': "700",
          'color': "#1C1B1F",
          'background': "#FED05E"
        },
        'text': 'Button',
      }
    }
  }
}
const ElementsList = {
  'button': {
    'icon': `${oldSRC}arrow_menu_close.svg`,
    'title': "button",
    'template': {
      'paysage': {
        'id': "lab-button",
        'tag': "button",
        'root': true,
        'classes': "lab-button",
        'attributes': {
          'data-img': "value"
        },
        'styles': {
          'padding': '10px 20px',
          'borderRadius': "15px",
          'fontWeight': "700",
          'color': "#1C1B1F",
          'background': "#FED05E"
        },
        'text': 'Button',
      },
      'paysage': {
        'id': "lab-button",
        'tag': "button",
        'root': true,
        'classes': "lab-button",
        'attributes': {
          'data-img': "value"
        },
        'styles': {
          'padding': '10px 20px',
          'borderRadius': "15px",
          'fontWeight': "700",
          'color': "#1C1B1F",
          'background': "#FED05E"
        },
        'text': 'Button',
      }
    }
  },
  'section': {
    'icon': `${oldSRC}arrow_menu_close.svg`,
    'title': "section",
    'template': {
      'paysage': {
        'id': "lab-section",
        'tag': "section",
        'classes': "lab-empty-section",
        'root': true,
        'styles': {
          'padding': '80px 20px',
          'position': "relative"
        }
      },
      'portrait': {
        'id': "lab-section",
        'tag': "section",
        'classes': "lab-empty-section",
        'root': true,
        'styles': {
          'padding': '80px 20px',
          'position': "relative"
        }
      },
    }
  },
  'div': {
    'icon': `${oldSRC}arrow_menu_close.svg`,
    'title': "div",
    'template': {
      'paysage': {
        'id': "lab-section",
        'tag': "section",
        'classes': "lab-empty-section",
        'root': true,
        'styles': {
          'position': "relative"
        }
      },
      'portrait': {
        'id': "lab-section",
        'tag': "section",
        'classes': "lab-empty-section",
        'root': true,
        'styles': {
          'position': "relative"
        }
      },
    }
  },
  'form': {
    'icon': `${oldSRC}arrow_menu_close.svg`,
    'title': "form",
    'template': {
      'paysage': {
        'id': "lab-form",
        'tag': "form",
        'root': true,
        'styles': {
          'padding': '15px',
          'borderRadius': "15px",
          'display': "flex",
          'flexDirection': "column",
          'gap': "10px",
          'background': "#FFFFFF",
          'boxSizing': "border-box",
          'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
        },
        'child': [
          {
            'paysage': {
              'id': "lab-div-input",
              'tag': "input",
              'styles': {
                'padding': '10px',
                'borderRadius': "10px",
                'border': "none",
                'width': "100%",
                'boxSizing': "border-box",
                'background': "#EFEFEF"
              },
            },
            'portrait': {
              'id': "lab-div-input",
              'tag': "input",
              'styles': {
                'padding': '10px',
                'borderRadius': "10px",
                'border': "none",
                'width': "100%",
                'boxSizing': "border-box",
                'background': "#EFEFEF"
              },
            }
          },
          {
            'paysage': {
              'id': "lab-div-input",
              'tag': "input",
              'styles': {
                'padding': '10px',
                'borderRadius': "10px",
                'border': "none",
                'width': "100%",
                'boxSizing': "border-box",
                'background': "#EFEFEF"
              },
            },
            'portrait': {
              'id': "lab-div-input",
              'tag': "input",
              'styles': {
                'padding': '10px',
                'borderRadius': "10px",
                'border': "none",
                'boxSizing': "border-box",
                'width': "100%",
                'background': "#EFEFEF"
              },
            }
          },
          {
            'paysage': {
              'id': "lab-button",
              'tag': "button",
              'styles': {
                'padding': '10px 25px',
                'textAlign': "center",
                'borderRadius': "15px",
                'fontWeight': "700",
                'color': "#1C1B1F",
                'boxSizing': "border-box",
                'background': "#FED05E"
              },
              'text': 'Button'
            },
            'portrait': {
              'id': "lab-button",
              'tag': "button",
              'styles': {
                'padding': '10px 25px',
                'textAlign': "center",
                'borderRadius': "15px",
                'fontWeight': "700",
                'color': "#1C1B1F",
                'boxSizing': "border-box",
                'background': "#FED05E"
              },
              'text': 'Button'
            }
          }
        ]
      },
      'portrait': {
        'id': "lab-div",
        'tag': "form",
        'root': true,
        'styles': {
          'padding': '15px',
          'borderRadius': "15px",
          'display': "flex",
          'flexDirection': "column",
          'gap': "10px",
          'background': "#FFFFFF",
          'boxSizing': "border-box",
          'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
        },
        'child': [
          {
            'paysage': {
              'id': "lab-div-input",
              'tag': "input",
              'styles': {
                'padding': '10px',
                'borderRadius': "10px",
                'border': "none",
                'width': "100%",
                'boxSizing': "border-box",
                'background': "#EFEFEF"
              },
            },
            'portrait': {
              'id': "lab-div-input",
              'tag': "input",
              'styles': {
                'padding': '10px',
                'borderRadius': "10px",
                'border': "none",
                'width': "100%",
                'boxSizing': "border-box",
                'background': "#EFEFEF"
              },
            }
          },
          {
            'paysage': {
              'id': "lab-div-input",
              'tag': "input",
              'styles': {
                'padding': '10px',
                'borderRadius': "10px",
                'border': "none",
                'width': "100%",
                'boxSizing': "border-box",
                'background': "#EFEFEF"
              },
            },
            'portrait': {
              'id': "lab-div-input",
              'tag': "input",
              'styles': {
                'padding': '10px',
                'borderRadius': "10px",
                'border': "none",
                'boxSizing': "border-box",
                'width': "100%",
                'background': "#EFEFEF"
              },
            }
          },
          {
            'paysage': {
              'id': "lab-button",
              'tag': "button",
              'styles': {
                'padding': '10px 25px',
                'textAlign': "center",
                'borderRadius': "15px",
                'fontWeight': "700",
                'color': "#1C1B1F",
                'boxSizing': "border-box",
                'background': "#FED05E"
              },
              'text': 'Button'
            },
            'portrait': {
              'id': "lab-button",
              'tag': "button",
              'styles': {
                'padding': '10px 25px',
                'textAlign': "center",
                'borderRadius': "15px",
                'fontWeight': "700",
                'color': "#1C1B1F",
                'boxSizing': "border-box",
                'background': "#FED05E"
              },
              'text': 'Button'
            }
          }
        ]
      }
    }
  },
}

class Designer {
  static ID() {
    const S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return ('lab-element' + S4() + S4() + S4() + S4() + S4());
  }

  static async create(TemplatesList, template_id, parent, vpm, random) {
    const T = TemplatesList[template_id].template
    let A

    function readObject(temt, child) {
      const obj = temt[vpm]
      const element = document.createElement(obj.tag)

      if (obj.root) {
        parent.appendChild(element)
        A = element
      }

      element.id = (random ? Designer.ID() : obj.id)

      if (obj.classes) {
        const classes = obj.classes.split(' ')
        element.classList.add(...classes)
      }

      obj.attributes && Object.keys(obj.attributes).forEach(e => {
        element.setAttribute(e, obj.attributes[e])
      })
      obj.styles && Object.keys(obj.styles).forEach(e => {
        element.style[e] = obj.styles[e]
      })
      obj.text && element.appendChild(document.createTextNode(obj.text))

      obj.child && obj.child.forEach((e) => {
        element.appendChild(readObject(e, true))
      })

      if (child) return element
    }

    readObject(T)

    return A
  }

  static hover(parent) {
    const last = document.querySelector('lab-active-element')
    const page = document.getElementById('lab-user-page')

    function createOptions() {
      if (document.getElementById('lab-HoverBox')) {
        document.getElementById('lab-HoverBox').remove()
        document.getElementById('lab-HoverBoxbtn').remove()
      }

      const HoverBox = lab_design_system_d('div', "HoverBox", page, 0, 0, ['design', 'HoverBox'])
      HoverBox.style.borderRadius = parent.style.borderRadius
      const parentPos = page.getBoundingClientRect();
      const childPos = parent.getBoundingClientRect();

      HoverBox.style.left = (childPos.left - parentPos.left) / parentPos.width * 100 + '%'
      HoverBox.style.top = (childPos.top - parentPos.top) / parentPos.height * 100 + '%'
      HoverBox.style.width = childPos.width / parentPos.width * 100 + '%'
      HoverBox.style.height = childPos.height / parentPos.height * 100 + '%'

      parent.classList.add('lab-active-element')

      const hoverMenuBtn = lab_design_system_d('button', "HoverBoxbtn", page, 0, 0, ['design', 'hoverMenuBtn'])
      hoverMenuBtn.style.top = ((childPos.top - parentPos.top) / parentPos.height + (7 / parentPos.height)) * 100 + '%'
      hoverMenuBtn.style.left = ((childPos.left - parentPos.left + childPos.width) / parentPos.width - (42 / parentPos.width)) * 100 + '%'

      const hoverMenuBtnIcon = lab_design_system_d('img', "hover-btn-icon", hoverMenuBtn)
      hoverMenuBtnIcon.style.pointerEvents = 'none'

      hoverMenuBtnIcon.setAttribute('src', `${oldSRC}more_vert_white.svg`)
    }

    if (!(['lab-HoverBox', 'lab-HoverBoxbtn', 'lab-user-page'].includes(parent.id))) {
      if (last && last != parent) {
        if (last.id != parent.id) {
          last.classList.remove('lab-active-element')
        } else createOptions()
      } else createOptions()
    }

  }

  static move(element, endFunc = null, moveListener = 'mousemove', endListener = 'mouseup') {

    function onMouseDrag({ movementX, movementY }) {
      let getContainerStyle = window.getComputedStyle(element)
      let leftValue = parseInt(getContainerStyle.left)
      let topValue = parseInt(getContainerStyle.top)
      element.style.left = `${leftValue + movementX}px`
      element.style.top = `${topValue + movementY}px`
    }

    document.addEventListener(moveListener, onMouseDrag)

    function removeListeners() {
      document.removeEventListener(moveListener, onMouseDrag)
      document.removeEventListener(endListener, removeListeners)
      if (endFunc) endFunc(element)
    }
    document.addEventListener(endListener, removeListeners, false)
  }

}

class DesignConstructor {
  static button(parent, styles, content, icon, className, id = Designer.ID()) {
    const btn = lab_design_system_d('button', id, parent, content, className, styles)
    if (icon) {
      const btnIcon = lab_design_system_d('img', `${id}-icon`, btn)
      btnIcon.setAttribute('src', `${oldSRC}${icon}.svg`)
    }
    return btn;
  }

  static input(parent) {
    const wrap = lab_design_system_d('div', `input-wrap-${e}`, parent, null, 'input-wrap')

    if (icon) {
      const innerIcon = document.createElement('img')
      innerIcon.setAttribute('src', `${oldSRC}${icon}`)
      wrap.appendChild(innerIcon)
    }

    const input = lab_design_system_d('input', `input-style-${e}`, wrap, null, 'input-style')

    value && input.setAttribute('value', value)

    return input
  }

  static toggleClass(el, styleList, usual, active) {
    Object.keys(styles[styleList][active].default).forEach(e => {
      if (el.style[e] == styles[styleList][active].default[e]) {
        el.style[e] = styles[styleList][usual].default[e]
      } else {
        el.style[e] = styles[styleList][active].default[e]
      }
    })
  }

  static addClass(el, styleList, className) {
    Object.keys(styles[styleList][className].default).forEach(e => {
      el.style[e] = styles[styleList][className].default[e]
    })
  }

}

function UserContent(box) {
  const page = lab_design_system_d('div', "user-page", box, 0, 0, ['design', 'page'])

  Designer.create(TemplatesList, 'template-20dh28d820d2', page, 'paysage')

  page.style.boxSizing = 'border-box'
  page.style.padding = '60px'
  page.addEventListener('mouseover', (p) => {
    Designer.hover(p.target)
  })

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


let contentTags = ["DIV", "SECTION"]

let uditableTags = ["SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "P", "I", "B", "STRONG", "FONT", "EM", "SMALL", "SUP", "SUB", "Q", "BLOCKQUOTE"]

function rightMenu(box) {
  const menu = lab_design_system_d('div', 'code-box', box, null, 'code-box')

  const menuButton = lab_design_system_d('div', "code-menu-show", menu, null, "code-menu-show")
  const buttonIcon = lab_design_system_d('img', "code-menu-icon", menuButton, null, null)
  buttonIcon.setAttribute('src', `${oldSRC}message-code 1.svg`)
  const codeWrapper = lab_design_system_d('div', "code-wrapper", menu, null, "code-wrapper")

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('active')
    const page = document.getElementById('lab-user-page').innerHTML
    codeWrapper.innerText = `${page}`
  })

}

function design_mode() {

  const designBody = lab_design_system_d('div', "designBody", rootLayer, 0, 0, ['design', 'body'])
  let options = JSON.parse(localStorage.getItem('options'))

  if (!options) {
    const userOpt = {
      'vpm': "paysage",//portrait
      'zoom': 100,
      'toolBar': true,
      'settingsBar': true,
      'sideMenu': true,
    }
    localStorage.setItem('options', JSON.stringify(userOpt))
  }

  //SIDE MENU

  const menu = lab_design_system_d('div', 'side-menu', designBody, 0, 0, ['design', 'side'])
  const menuButton = DesignConstructor.button(menu, ['design', 'showMenu'], 0, 'arrow_menu_close')

  menuButton.addEventListener('click', () => {
    DesignConstructor.toggleClass(menu, 'design', 'side', 'hideSide')
    DesignConstructor.toggleClass(menuButton, 'design', 'showMenu', 'hideMenu')
    options.sideMenu = !options.sideMenu
    localStorage.setItem('options', JSON.stringify(options))
  })

  if (!options.sideMenu) {
    DesignConstructor.addClass(menu, 'design', 'hideSide')
    DesignConstructor.addClass(menuButton, 'design', 'hideMenu')
  }

  const elementsBox = lab_design_system_d('div', "elements-box", menu)
  elementsBox.style.margin = "40px 0 0 0"

  const elementsTitle = lab_design_system_d('span', "elements-menu-span", elementsBox, "Elements", 0, ['design', 'templatesHeading'])
  const elementsWrap = lab_design_system_d('div', "elements-wrap", elementsBox, 0, 0, ['design', 'templates'])

  function addList(e, list) {

    Object.keys(e).map(el => {
      const item = lab_design_system_d('div', Designer.ID(), list, 0, 0, ['design', 'template'])
      const icon = lab_design_system_d('div', Designer.ID(), item, 0, 0, ['design', 'templateIcon'])
      const img = lab_design_system_d('img', Designer.ID(), icon)
      img.setAttribute('src', e[el].icon)
      img.style.width = '30px'
      img.style.height = '30px'

      const text = lab_design_system_d('span', Designer.ID(), item, e[el].title)

      item.addEventListener('click', () => {
        const coord = item.getBoundingClientRect()
        const copy = item.cloneNode(true)
        copy.style.position = "absolute"
        copy.style.opacity = "0.7"
        item.after(copy)
        copy.style.left = `${coord.left + 7}px`
        copy.style.top = `${coord.top}px`

        const page = document.getElementById('lab-user-page')

        // function onMouseDrag({ movementX, movementY }) {
        //   let getContainerStyle = window.getComputedStyle(copy)
        //   let leftValue = parseInt(getContainerStyle.left)
        //   let topValue = parseInt(getContainerStyle.top)
        //   copy.style.left = `${leftValue + movementX}px`
        //   copy.style.top = `${topValue + movementY}px`
        // }
        Designer.move(copy, () => {
          list.removeChild(copy)
          Designer.create(e, el, page, 'paysage', true)
        })

        // document.addEventListener("mousemove", onMouseDrag)

        // document.addEventListener("mouseup", () => {
        //   if (copy) {
        //     document.removeEventListener("mousemove", onMouseDrag)
        //     list.removeChild(copy)
        //     Designer.create(e, el, page, 'paysage', true)
        //   }
        // })
      })


    })
  }

  addList(ElementsList, elementsWrap)

  //TOOLBAR

  const toolBar = lab_design_system_d('div', "toolbar", designBody, 0, 0, ['design', 'toolbar'])
  const tools = ['cursor', 'resize', 'shape', 'pen', 'text', 'actions', 'image']
  tools.forEach(tool => DesignConstructor.button(toolBar, ['design', 'toolbarItem'], 0, tool))
  const blind = lab_design_system_d('button', "blind-tools", toolBar, 0, 0, ['design', 'blindTools'])
  blind.addEventListener('click', () => {
    DesignConstructor.toggleClass(toolBar, 'design', 'toolbar', 'hideToolbar')
    options.toolBar = !options.toolBar
    localStorage.setItem('options', JSON.stringify(options))
  })

  if (!options.toolBar) DesignConstructor.addClass(toolBar, 'design', 'hideToolbar')

  const topSettings = lab_design_system_d('div', "top-settings", designBody, 0, 0, ['design', 'top'])
  const settingsBtn = DesignConstructor.button(topSettings, ['design', 'btn'], 0, 'settings-white')
  const responsiveList = ["paysage", "portrait"]

  responsiveList.map(e => {
    const btn = DesignConstructor.button(topSettings, ['design', 'screenBtn'], '', e, 'screen-btn')

    if (e == options.vpm) {
      btn.style.background = '#6a768e'
      btn.classList.add('active')
    }

    btn.addEventListener('click', () => {
      const page = document.getElementById('lab-user-page')

      if (document.querySelector('.lab-screen-btn.active')) {
        document.querySelector('.lab-screen-btn.active').style.background = 'transparent'
        document.querySelector('.lab-screen-btn.active').classList.remove('active')
      }

      btn.classList.add('active')
      btn.style.background = '#6a768e'

      if (e == 'paysage') {
        pixelScreen.innerHTML = window.outerWidth + 'px'
        page.style.maxWidth = 'none'
        page.style.maxHeight = 'none'
      }

      if (e == 'portrait') {
        pixelScreen.innerHTML = '414px'
        page.style.maxWidth = '414px'
        page.style.maxHeight = '896px'
      }
    })

  })


  const pixelScreen = lab_design_system_d('div', "top-settings-pixel", topSettings, window.outerWidth + ' px', 0, ['design', 'pixelView'])

  const pixelSettings = DesignConstructor.button(topSettings, ['design', 'btn'], 0, 'settings-white')
  pixelSettings.querySelector('img').style.width = '15px'

  const setPage = DesignConstructor.button(topSettings, ['design', 'setPage'], 0, 'page-box')
  setPage.appendChild(document.createTextNode("Main"))
  const arrow = lab_design_system_d('img', 'page-arrow', setPage, null, "top-settings-page-arrow")
  arrow.setAttribute('src', `${oldSRC}chevron_right.svg`)

  const sizeSwitcher = lab_design_system_d('input', 'sliderRange', topSettings, null, null)
  sizeSwitcher.setAttribute('type', "range")
  sizeSwitcher.setAttribute('min', "1")
  sizeSwitcher.setAttribute('max', "100")
  sizeSwitcher.setAttribute('type', "range")
  sizeSwitcher.setAttribute('value', "100")

  const size = lab_design_system_d('div', 'screen-size', topSettings, "100%", 0, ['design', 'pixelView'])
  size.style.width = "60px"

  sizeSwitcher.oninput = function () {
    size.innerHTML = this.value + "%"
    document.getElementById('lab-user-page').style.scale = this.value / 100
  }
  const view = DesignConstructor.button(topSettings, ['design', 'btn'], 0, 'visibility')
  const download = DesignConstructor.button(topSettings, ['design', 'btn'], 0, 'download')

  const blindTop = lab_design_system_d('button', "blind-btn", topSettings, 0, 0, ['design', 'blind'])

  blindTop.addEventListener('click', () => {
    DesignConstructor.toggleClass(topSettings, 'design', 'top', 'hideTop')
    options.settingsBar = !options.settingsBar
    localStorage.setItem('options', JSON.stringify(options))
  })

  if (!options.settingsBar) DesignConstructor.addClass(topSettings, 'design', 'hideTop')


  UserContent(designBody)
  // rightMenu(designBody)

  document.addEventListener("wheel", preventZoom, { passive: false });
  document.addEventListener("keydown", preventZoomKey, false);

  function preventZoom(e) {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
    }
  }

  function preventZoomKey(e) {
    if ((e.ctrlKey || e.metaKey) &&
      (e.key === '+' || e.key === '=' || e.key === 'equal') ||
      (e.key === '-' || e.key === '_')) {
      e.preventDefault();
    }
  }

  lab_fade_in_recursively(designBody, 0.3)
}


design_mode()






// function StylesMenu(item) {
//   if (document.querySelector('.selectedItem')) {
//     document.querySelector('.selectedItem').classList.remove('selectedItem')
//   }
//   item.classList.add('selectedItem')


//   const itemStyles = window.getComputedStyle(item)
//   const css = {
//     'font-family': itemStyles.fontFamily,
//     'text-align': itemStyles.textAlign,
//     'font-style': itemStyles.fontStyle,
//     'font-weight': itemStyles.fontWeight,
//     'font-size': itemStyles.fontSize,
//     'line-height': itemStyles.lineHeight,
//     'letter-spacing': itemStyles.letterSpacing,
//     'stroke': itemStyles.stroke,
//     'color': itemStyles.color,
//     'stroke-width': itemStyles.strokeWidth,
//   }

//   function renderMenu() {
//     const elementMenu = lab_design_system_d('div', "elementMenu", box, null, null)
//     const elementMenuButtons = lab_design_system_d('div', "elementMenu-buttons", elementMenu, null, null)
//     const elementMenuBody = lab_design_system_d('div', "elementMenuBody", elementMenu, null, null)
//     const menuSettings = ['general', 'additional']
//     const activeSettings = 'additional'

//     menuSettings.forEach((e) => {
//       const btn = lab_design_system_d('button', e, elementMenuButtons, e, 'element-menu-btn')
//       e == activeSettings && btn.classList.add('active')

//       btn.addEventListener('click', () => {
//         if (!btn.classList.contains('active')) {
//           document.querySelector('.lab-element-menu-btn.active').classList.remove('active')
//           btn.classList.add('active')
//         }
//       })
//     })

//     const settings = lab_design_system_d('div', "menu-style-settings", elementMenuBody, null, null)

//     dropList('tag', 'p', ['div', 'span', 'h1'], settings)
//     dropList('font', css['font-family'], ['Arial', 'Arial2', 'Arial3'], settings)

//     const fontSettings = lab_design_system_d('div', "fontSettings", elementMenuBody, null, null)
//     const textALign = lab_design_system_d('div', "textALign", fontSettings, null, null)
//     const textStyle = lab_design_system_d('div', "textStyle", fontSettings, null, null)
//     const textALignList = ['left', 'center', 'right', 'justify']
//     const textStyleList = ['italic', 'underline', 'line', 'dec']

//     textALignList.forEach(v => {
//       const btn = button(v, textALign, `${v}-text.svg`, null)
//       btn.addEventListener('click', () => {
//         item.style.textAlign = v
//       })
//     })



//     button('italic', textStyle, 'italic-style.svg', null)
//     button('underline', textStyle, 'underline-style.svg', null)
//     button('line', textStyle, 'line-through-style.svg', null)
//     button('dec', textStyle, 'text-decoration-style.svg', null)


//     const textSettings = lab_design_system_d('div', "textSettings", elementMenuBody, null, null)

//     dropList('weight', css['font-weight'], ['normal', 'bold', 'thin', 'medium', 'black'], textSettings)
//     const fontSize = input('size', textSettings, null, css['font-size'])

//     function inputStyle(e, style, postfix) {
//       item.style[style] = `${e.value}${postfix ? postfix : ''}`
//       console.log(item.style[style])

//     }
//     fontSize.addEventListener('input', () => inputStyle(fontSize, 'fontSize', 'px'))

//     const lineHeight = input('line-height', textSettings, 'line-height.svg', css['line-height'])

//     lineHeight.addEventListener('input', () => inputStyle(lineHeight, 'lineHeight', null))

//     const letterSpacing = input('letter-spacing', textSettings, 'letter-spacing.svg', css['letter-spacing'])
//     letterSpacing.addEventListener('input', () => inputStyle(letterSpacing, 'letterSpacing', null))



//     const colorSettings = lab_design_system_d('div', "colorSettings", elementMenuBody, null, null)
//     const textColor = lab_design_system_d('span', "text-color", colorSettings, 'Text color', null)
//     const textColorInput = lab_design_system_d('input', "input-text-color", colorSettings, null, 'color-input')
//     textColorInput.setAttribute('type', 'color')
//     textColorInput.setAttribute('value', css['color'])
//     textColorInput.addEventListener('input', () => {
//       console.log("aaaaaa")

//       inputStyle(textColorInput, 'color', null)
//       console.log(textColorInput.value)

//     })

//     const stroke = lab_design_system_d('span', "text-stroke", colorSettings, 'Stroke', null)

//     const strokeWrap = lab_design_system_d('div', "strokeWrap", colorSettings, null, null)
//     input('stroke', strokeWrap, null, null)
//     const strokeColorInput = lab_design_system_d('input', "input-stroke-color", strokeWrap, null, 'color-input')
//     strokeColorInput.setAttribute('type', 'color')
//     strokeColorInput.setAttribute('value', css['stroke'])
//   }
//   if (selectedItem == '') {
//     renderMenu()
//     selectedItem = item
//   }
//   else {
//     box.removeChild(document.getElementById('lab-elementMenu'))
//     renderMenu()
//     selectedItem = item
//   }


// }