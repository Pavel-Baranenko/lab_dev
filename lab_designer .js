let ActiveMode
let selected
let mouseIsDown = false
const pageWrap = document.querySelector('#lab-user-page-wrap')
const page = document.querySelector('#lab-user-page')
const uditableTags = ["SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "P", "I", "B", "STRONG", "FONT", "EM", "SMALL", "SUP", "SUB", "Q", "BLOCKQUOTE"]

class Designer {
  static ID() {
    const S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return ('lab-element' + S4() + S4() + S4() + S4() + S4());
  }

  static async create(TemplatesList, template_id, parent, vpm, random, id) {
    const T = TemplatesList[template_id].template
    let A

    function readObject(temt, child) {
      const obj = temt[vpm]
      const element = document.createElement(obj.tag)

      if (obj.root) {
        parent.appendChild(element)
        A = element
      }

      element.id = id ? id : (random ? Designer.ID() : obj.id)

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

      element.style.opacity = ''

      obj.text && element.appendChild(document.createTextNode(obj.text))

      obj.child && obj.child.forEach((e) => {
        element.appendChild(readObject(e, true))
      })

      if (child) return element
    }

    readObject(T)

    return A
  }

  static async hover(element) {
    if (!element.classList.contains('escape')) {
      const page = document.getElementById('lab-user-page')

      if (!element.classList.contains('lab-none')) {
        const last = document.querySelector('.lab-active-element')

        if (!last) DesignConstructor.createOptions(element, page)

        else if (last && last.id != element.id) {
          last.classList.remove('lab-active-element')
          DesignConstructor.createOptions(element, page)
        }
        if (uditableTags.includes(element.tagName)) element.contentEditable = true
      }
    }
  }

  static async removePointer() {
    if (document.getElementById('lab-HoverBox')) document.getElementById('lab-HoverBox').remove()
    if (document.getElementById('lab-HoverBoxbtn')) document.getElementById('lab-HoverBoxbtn').remove()
    if (document.getElementById('lab-pointer')) document.getElementById('lab-pointer').remove()
  }

  static copy(element) {
    const copyItem = element.cloneNode(true)
    element.after(copyItem)
    return copyItem
  }

  static del(element) {
    Designer.removePointer()
    return element.remove()
  }

  static move(element, endFunc = null, moveListener = 'mousemove', endListener = 'mouseup', moveArea = document) {

    function onMouseDrag({ movementX, movementY }) {
      if (element.style.position == 'static' || !element.style.position) {
        element.style.position = 'absolute'
      }

      let getContainerStyle = window.getComputedStyle(element)
      let leftValue = parseInt(getContainerStyle.left)
      let topValue = parseInt(getContainerStyle.top)
      element.style.left = `${leftValue + movementX}px`
      element.style.top = `${topValue + movementY}px`
    }

    moveArea.addEventListener(moveListener, onMouseDrag)

    function removeListeners() {
      moveArea.removeEventListener(moveListener, onMouseDrag)
      moveArea.removeEventListener(endListener, removeListeners)
      if (endFunc) endFunc(element)
    }

    moveArea.addEventListener(endListener, removeListeners, false)
  }

  static Proportions(element, child, parent, alignment) {
    const parentPos = parent.getBoundingClientRect();
    const elementPos = child.getBoundingClientRect();

    if (alignment.vert && alignment.vert == 'full') {
      element.style.left = (elementPos.left - parentPos.left) / parentPos.width * 100 + '%'
      element.style.width = elementPos.width / parentPos.width * 100 + '%'
    }
    if (alignment.hor == 'full') {
      element.style.top = (elementPos.top - parentPos.top) / parentPos.height * 100 + '%'
      element.style.height = elementPos.height / parentPos.height * 100 + '%'
    }

    Object.keys(alignment).forEach(e => {
      if (['left', 'top'].includes(e)) {
        const orientation = ['left'].includes(e) ? 'width' : 'height'
        const axis = ['left'].includes(e) ? 'x' : 'y'

        element.style[e] = ((elementPos[axis] - parentPos[axis] + (axis == 'x' ? elementPos.width : 0) + alignment[e]) / parentPos[orientation] * 100 + '%');
      }
    })
  }

  static WriteStyle(element, styleName, styleValue) {
    element.style[styleName] = styleValue
    Designer.removePointer()
  }
}

class DesignConstructor {
  static button(parent, styles, content, icon, className = 'none', id = Designer.ID()) {
    const btn = lab_design_system('button', id, parent, content, className, styles)
    if (icon) {
      const btnIcon = lab_design_system('img', `${id}-icon`, btn, '', 'none', ['design', 'icon'])
      btnIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${icon}.svg`)
    }
    return btn;
  }

  static input(parent, value, placeholder, icon, params, className = 'none', styles, id = Designer.ID()) {
    const wrap = lab_design_system('div', id, parent, '', '', ['design', 'inputWrap'])
    if (icon) {
      const innerIcon = lab_design_system('img', id, wrap, '', '', ['design', 'icon'])
      innerIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${icon}.svg`)
    }
    const Input = lab_design_system('input', `input-${id}`, wrap, '', '', ['design', 'input'])

    value && Input.setAttribute('value', value)
    placeholder && Input.setAttribute('placeholder', placeholder)
    params && Input.addEventListener('input', () => Designer.WriteStyle(params.el, params.style, Input.value)
    )
    return Input
  }

  static dropList(parent, list, value, func) {
    let id = Designer.ID()
    const wrap = lab_design_system('div', id, parent, '', '', ['design', 'dropList'])
    const selected = lab_design_system('div', id + '-selected', wrap, '', '', ['design', 'dropSel'])
    const text = lab_design_system('span', Designer.ID(), selected, value.replace(/"/gi, ''))
    const icon = lab_design_system('img', id + '-icon', selected, '', '', ['design', 'icon'])
    icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/arrow_drop_down.svg`)

    const listing = lab_design_system('div', id + '-list', wrap, '', '', ['design', 'dropListing'])
    list.forEach(e => {
      const item = lab_design_system('span', Designer.ID(), listing, e)
      item.addEventListener('click', () => {
        text.innerHTML = e
        func && func(e)
        close()
      })
    })

    function close() {
      listing.style.height = 0
      listing.style.padding = 0
      listing.classList.remove('active')
    }

    selected.addEventListener('click', () => {
      if (!listing.classList.contains('active')) {
        listing.classList.add('active')
        listing.style.height = 'auto'
        listing.style.padding = '7px'
      }
      else close()
    })
    return wrap
  }

  static async createOptions(element, parent) {
    const stopList = ['lab-HoverBox', 'lab-HoverBoxbtn-icon', 'lab-HoverBoxbtn', 'lab-user-page']
    if (isRotating || mouseIsDown) return
    if (!stopList.includes(element.id)) {
      await Designer.removePointer()
      element.classList.add('lab-active-element')
      lab_fade_in_recursively(parent, 0.3)
    }
  }

  static blockMenu(element, parent, options) {
    ActiveMode = null
    let last = document.getElementById('lab-block-menu')
    if (last) last.remove()

    const menuWrap = lab_design_system('div', 'block-menu-wrap', parent, '', 'none', ['design', 'blockMenuWrap'])

    const menu = lab_design_system('div', 'block-menu', menuWrap, '', 'none', ['design', 'blockMenu'])
    Object.keys(options).forEach(e => {
      const item = lab_design_system('div', Designer.ID(), menu, '', 'none', ['design', 'blockMenuItem'])
      const itemIcon = lab_design_system('img', Designer.ID(), item, '0', 'none')
      const itemText = lab_design_system('span', Designer.ID(), item, options[e], 'none')
      itemIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${e}-icon.svg`)
      itemIcon.style.width = '15px'

      item.addEventListener('click', () => {
        menuWrap.remove()
        selected = null
        if (e == 'transform') selectTool('resize')
        if (e == 'drag') selectTool('move')
        if (e == 'copy') Designer.copy(element)
        if (e == 'del') Designer.del(element)
      })
    })
    const menuRect = menuWrap.getBoundingClientRect()

    if (menuRect.left + menuRect.width > window.innerWidth) {
      let options = JSON.parse(localStorage.getItem('options'))
      menuWrap.style.left = window.innerWidth - menuRect.width - (options.sideMenu ? 100 : 0) + 'px'
    }

    menuWrap.addEventListener('mouseleave', () => menuWrap.remove())
    lab_fade_in_recursively(menuWrap, 0.3)

    return menuWrap
  }

  static toggleClass(el, styleList, usual, active) {
    Object.keys(lab_ui_styles[styleList][active].default).forEach(e => {
      if (el.style[e] == lab_ui_styles[styleList][active].default[e]) {
        el.style[e] = lab_ui_styles[styleList][usual].default[e]
      } else {
        el.style[e] = lab_ui_styles[styleList][active].default[e]
      }
    })
  }

  static addClass(el, styleList, className) {
    Object.keys(lab_ui_styles[styleList][className].default).forEach(e => {
      el.style[e] = lab_ui_styles[styleList][className].default[e]
    })
  }

  static BlockResize() {
    document.addEventListener("wheel", preventZoom, { passive: false });
    document.addEventListener("keydown", preventZoomKey, false);

    function preventZoom(e) {
      if (e.ctrlKey || e.metaKey) e.preventDefault();
    }

    function preventZoomKey(e) {
      if ((e.ctrlKey || e.metaKey) &&
        (e.key === '+' || e.key === '=' || e.key === 'equal') ||
        (e.key === '-' || e.key === '_')) {
        e.preventDefault();
      }
    }

  }

  static closeAll() {
    const menu = document.getElementById('lab-side-menu')
    const MenuBtn = document.getElementById('lab-side-menu-open')
    const topSettins = document.getElementById('lab-top-settings')
    const tools = document.getElementById('lab-designers-bar')
    DesignConstructor.addClass(menu, 'design', 'hideSide')
    DesignConstructor.addClass(MenuBtn, 'design', 'hideMenu')
    DesignConstructor.addClass(tools, 'design', 'hideToolbar')
    DesignConstructor.addClass(topSettins, 'design', 'hideTop')
    document.getElementById('lab-style-box').style.marginRight = '-300px'
  }
}

const elementsToolsList = {
  'span': {
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
    'title': "span",
    'template': {
      'landscape': {
        'id': "lab-text",
        'tag': "span",
        'classes': "lab-text",
        'root': true,
        'styles': {
          'padding': '10px',
          'position': "relative",
        }
      },
      'landscape': {
        'id': "lab-text",
        'tag': "span",
        'classes': "lab-text",
        'root': true,
        'styles': {
          'padding': '10px',
          'position': "relative",
        }
      }
    }
  },
  'img': {
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
    'title': "img",
    'template': {
      'landscape': {
        'id': "lab-img",
        'tag': "img",
        'classes': "lab-img",
        'root': true,
        'styles': {
          'position': "relative",
          'objectFit': "cover",
          'objectPosition': "50% 50%"
        }
      },
      'landscape': {
        'id': "lab-img",
        'tag': "img",
        'classes': "lab-img",
        'root': true,
        'styles': {
          'position': "relative",
          'objectFit': "cover",
          'objectPosition': "50% 50%"
        }
      }
    }
  },
  'svg': {
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
    'title': "svg",
    'template': {
      'landscape': {
        'id': "lab-svg",
        'tag': "svg",
        'classes': "lab-svg",
        'root': true,
        'styles': {
          'position': "relative"
        }
      },
      'landscape': {
        'id': "lab-svg",
        'tag': "svg",
        'classes': "lab-svg",
        'root': true,
        'styles': {
          'position': "relative"
        }
      }
    }
  },
}

function design_mode(app) {
  const labBody = document.querySelector('body')
  labBody.style.position = "relative"
  labBody.style.overflow = "hidden"
  labBody.style.display = "flex"
  labBody.style.width = "100svw"
  labBody.style.height = "100svh"

  const ElementsList = {
    'button': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/add_user.svg`,
      'title': "button",
      'template': {
        'landscape': {
          'id': "lab-button",
          'tag': "button",
          'root': true,
          'classes': "lab-button",
          'styles': {
            'padding': '10px 20px',
            'borderRadius': "15px",
            'display': 'inline',
            'width': "fit-content",
            'position': "relative",
            'background': "#FED05E"
          },
          'child': [
            {
              'landscape': {
                'id': "lab-button-span",
                'tag': "span",
                'classes': "lab-button-span",
                'styles': {
                  'fontWeight': "700",
                  'color': "#1C1B1F",
                },
                'text': 'Button',

              },
              'landscape': {
                'id': "lab-button-span",
                'tag': "span",
                'classes': "lab-button-span",
                'styles': {
                  'fontWeight': "700",
                  'color': "#1C1B1F",
                },
                'text': 'Button',
              }
            }
          ]
        },
        'portrait': {
          'id': "lab-button",
          'tag': "button",
          'root': true,
          'classes': "lab-button",
          'styles': {
            'padding': '10px 20px',
            'borderRadius': "15px",
            'display': "flex",
            'gap': "10px",
            'alignItems': "center",
            'justifyContent': "center",
            'background': "#FED05E"
          },
          'child': [
            {
              'landscape': {
                'id': "lab-button-span",
                'tag': "span",
                'classes': "lab-button-span",
                'styles': {
                  'fontWeight': "700",
                  'color': "#1C1B1F",
                },
                'text': 'Button',
              },
              'landscape': {
                'id': "lab-button-span",
                'tag': "span",
                'classes': "lab-button-span",
                'styles': {
                  'fontWeight': "700",
                  'color': "#1C1B1F",
                },
                'text': 'Button',
              }
            }
          ]
        }
      }
    },
    'section': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
      'title': "section",
      'template': {
        'landscape': {
          'id': "lab-section",
          'tag': "section",
          'classes': "lab-empty-section",
          'root': true,
          'styles': {
            'background': '#FFFFFF',
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
            'background': '#FFFFFF',
            'position': "relative"
          }
        },
      }
    },
    'div': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
      'title': "div",
      'template': {
        'landscape': {
          'id': "lab-section",
          'tag': "div",
          'classes': "lab-empty-section",
          'root': true,
          'styles': {
            'background': '#FFFFFF',
            'padding': '20px 20px',
            'position': "relative"
          }
        },
        'portrait': {
          'id': "lab-section",
          'tag': "div",
          'classes': "lab-empty-section",
          'root': true,
          'styles': {
            'background': '#FFFFFF',
            'padding': '20px 20px',
            'position': "relative"
          }
        },
      }
    },
    'form': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/form.svg`,
      'title': "form",
      'template': {
        'landscape': {
          'id': "lab-form",
          'tag': "form",
          'root': true,
          'styles': {
            'padding': '15px',
            'positon': "relative",
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
              'landscape': {
                'id': "lab-div-input",
                'tag': "input",
                'styles': {
                  'padding': '10px',
                  'borderRadius': "10px",
                  'border': "none",
                  'positon': "relative",
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
                  'positon': "relative",
                  'width': "100%",
                  'boxSizing': "border-box",
                  'background': "#EFEFEF"
                },
              }
            },
            {
              'landscape': {
                'id': "lab-div-input",
                'tag': "input",
                'styles': {
                  'padding': '10px',
                  'borderRadius': "10px",
                  'border': "none",
                  'width': "100%",
                  'positon': "relative",
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
                  'positon': "relative",
                  'width': "100%",
                  'background': "#EFEFEF"
                },
              }
            },
            {
              'landscape': {
                'id': "lab-button",
                'tag': "button",
                'styles': {
                  'padding': '10px 25px',
                  'textAlign': "center",
                  'borderRadius': "15px",
                  'fontWeight': "700",
                  'positon': "relative",
                  'color': "#1C1B1F",
                  'boxSizing': "border-box",
                  'background': "#FED05E"
                },
                'attributes': {
                  'type': "button"
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
                  'positon': "relative",
                  'background': "#FED05E"
                },
                'text': 'Button'
              }
            }
          ]
        },
        'portrait': {
          'id': "lab-form",
          'tag': "form",
          'root': true,
          'styles': {
            'padding': '15px',
            'positon': "relative",
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
              'landscape': {
                'id': "lab-div-input",
                'tag': "input",
                'styles': {
                  'padding': '10px',
                  'borderRadius': "10px",
                  'border': "none",
                  'positon': "relative",
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
                  'positon': "relative",
                  'width': "100%",
                  'boxSizing': "border-box",
                  'background': "#EFEFEF"
                },
              }
            },
            {
              'landscape': {
                'id': "lab-div-input",
                'tag': "input",
                'styles': {
                  'padding': '10px',
                  'borderRadius': "10px",
                  'border': "none",
                  'width': "100%",
                  'positon': "relative",
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
                  'positon': "relative",
                  'width': "100%",
                  'background': "#EFEFEF"
                },
              }
            },
            {
              'landscape': {
                'id': "lab-button",
                'tag': "button",
                'styles': {
                  'padding': '10px 25px',
                  'textAlign': "center",
                  'borderRadius': "15px",
                  'fontWeight': "700",
                  'positon': "relative",
                  'color': "#1C1B1F",
                  'boxSizing': "border-box",
                  'background': "#FED05E"
                },
                'attributes': {
                  'type': "button"
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
                  'positon': "relative",
                  'background': "#FED05E"
                },
                'text': 'Button'
              }
            }
          ]
        }
      }
    },
    'input': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
      'title': "input",
      'template': {
        'landscape': {
          'id': "lab-input",
          'tag': "input",
          'classes': "lab-empty-input",
          'root': true,
          'styles': {
            'background': '#FFFFFF',
            'padding': '10px 20px',
            'borderRadius': "10px",
            'border': "none",
            'outline': "none",
            'position': "relative"
          }
        },
        'portrait': {
          'id': "lab-input",
          'tag': "input",
          'classes': "lab-empty-input",
          'root': true,
          'styles': {
            'background': '#FFFFFF',
            'padding': '10px 20px',
            'borderRadius': "10px",
            'border': "none",
            'outline': "none",
            'position': "relative"
          }
        },
      }
    }
  }

  function Options(obj, key, value) {
    obj[key] = value ? value : !obj[key]
    lab_local_storage_object_update("global", { classic_options: obj })
  }

  const designBody = document.querySelector('body')

  let options = lab_local_storage_object("global").classic_options || {
    'vpm': "landscape",
    'zoom': 100,
    'toolBar': true,
    'settingsBar': true,
    'sideMenu': true,
  }

  //SIDE MENU

  const menu = lab_design_system('div', 'side-menu', designBody, '', 'scrollable', ['design', 'side'])
  const menuButton = DesignConstructor.button(menu, ['design', 'showMenu'], '', 'arrow_menu_close', 'none', 'side-menu-open')
  menu.style.position = 'fixed'
  menu.style.maxHeight = lab_orientation == "Portrait" ? 'calc(100% - 200px)' : "100%"
  menu.style.top = lab_orientation == 'Portrait' ? '100px' : "0"
  menu.style.borderRadius = lab_orientation == 'Portrait' ? '0 16px 16px 0' : "0"
  menu.style.paddingTop = lab_orientation == 'Portrait' ? '0' : "60px"

  menuButton.style.top = lab_orientation == 'Portrait' ? 'calc(100% - 40px)' : "-4px"
  menuButton.style.zIndex = 10

  menuButton.addEventListener('click', () => {
    DesignConstructor.toggleClass(menu, 'design', 'side', 'hideSide')
    DesignConstructor.toggleClass(menuButton, 'design', 'showMenu', 'hideMenu')
    Options(options, 'sideMenu')
  })

  if (!options.sideMenu) {
    DesignConstructor.addClass(menu, 'design', 'hideSide')
    DesignConstructor.addClass(menuButton, 'design', 'hideMenu')
  }

  const elementsBox = lab_design_system('div', "elements-box", menu, '', 'scrollable', ['design', 'elementsBox'])

  const elementsTitle = lab_design_system('span', 'elements-box-heading', elementsBox, "Elements", '', ['design', 'templatesHeading'])
  const elementsWrap = lab_design_system('div', 'elements-box-wrap', elementsBox, '', '', ['design', 'templates'])

  function addList(e, list) {
    Object.keys(e).map(el => {
      const item = lab_design_system('div', Designer.ID(), list, '', '', ['design', 'template'])
      const icon = lab_design_system('div', Designer.ID(), item, '', '', ['design', 'templateIcon'])
      const img = lab_design_system('img', Designer.ID(), icon)
      img.setAttribute('src', e[el].icon)
      img.style.width = '30px'
      img.style.height = '30px'
      const text = lab_design_system('span', Designer.ID(), item, e[el].title)

      item.addEventListener('click', () => {
        const coord = item.getBoundingClientRect()
        const copy = Designer.copy(item)
        copy.style.position = "absolute"
        copy.style.opacity = "0.7"
        copy.style.left = `${coord.left}px`
        copy.style.top = `${coord.top}px`

        Designer.move(copy, async () => {
          const copyPos = copy.getBoundingClientRect()
          const pagePos = document.getElementById('lab-user-page').getBoundingClientRect()
          list.removeChild(copy)
          const item = await Designer.create(e, el, page, 'landscape', true)
          if (!['form', 'div', 'section'].includes(el)) {
            item.style.top = (copyPos.y - pagePos.y) / pagePos.height * 100 + '%'
            item.style.left = (copyPos.x - pagePos.x) / pagePos.width * 100 + '%'
            item.style.position = 'absolute'
            item.style.zIndex = '1'
          }
        })
      })
    })
  }

  addList(ElementsList, elementsWrap)

  //SIDE MENU END

  //USER PAGE


  page.addEventListener('mouseover', (p) => {
    Designer.hover(p.target)
  })

  page.addEventListener('click', (e) => {
    let element = document.elementFromPoint(e.clientX, e.clientY)
    const stopList = ['lab-HoverBox', 'lab-HoverBoxbtn-icon', 'lab-HoverBoxbtn']
    if (!stopList.includes(element.id) && !element.classList.contains('lab-none')) {
      StylesMenu(document.elementFromPoint(e.clientX, e.clientY))
    }
  })

  page.addEventListener('mousedown', () => {
    mouseIsDown = true
  })
  page.addEventListener('mouseup', () => {
    mouseIsDown = false
  })


  page.addEventListener('contextmenu', function (e) {
    e.preventDefault()
    let element = document.elementFromPoint(e.clientX, e.clientY)
    const stopList = ['lab-HoverBox', 'lab-HoverBoxbtn-icon', 'lab-HoverBoxbtn']
    if (!stopList.includes(element.id) && !element.classList.contains('lab-none')) {
      const BlockOptions = {
        'copy': "Copy",
        'drag': "Move",
        'transform': "Transform",
        'del': "Delete",
      }
      const menu = DesignConstructor.blockMenu(element, page, BlockOptions)
      const pagePos = page.getBoundingClientRect()
      menu.style.left = e.clientX - pagePos.x - 30 + 'px'
      menu.style.top = e.clientY - pagePos.y - 30 + 'px'
    }
  })


  //USER PAGE END

  //TOOLBAR

  const toolBar = lab_design_system('div', "designers-bar", designBody, '', '', ['design', 'toolbar'])
  toolBar.style.maxWidth = 'clamp(320px, 100%, 620px)'
  toolBar.style.gap = 'clamp(8px, 2vw, 30px)'
  toolBar.style.paddingTop = 'clamp(10px, 2vw, 18px)'
  toolBar.style.paddingBottom = 'clamp(10px, 2vw, 18px)'
  toolBar.style.paddingLeft = 'clamp(25px, 2vw, 40px)'
  toolBar.style.paddingRight = 'clamp(25px, 2vw, 40px)'

  const prewiewTool = lab_design_system('div', "prewiew-tool", toolBar)
  prewiewTool.style.position = 'absolute'
  prewiewTool.style.top = '-30px'
  prewiewTool.style.opacity = '0'
  prewiewTool.style.pointerEvents = 'none'
  prewiewTool.style.left = '50%'
  prewiewTool.style.transform = 'translatex(-50%)'
  prewiewTool.style.transition = 'all 0.3s linear'

  const tools = {
    'cursor': [{
      value: 'cursor',
      icon: `https://laboranth.tech/D/R/IMG/CLA/cursor.svg`
    },
    {
      value: 'group',
      icon: `https://laboranth.tech/D/R/IMG/CLA/cursor.svg`
    }],
    'rotate': "rotate",
    'move': "move",
    'resize': "resize",
    'square': [{
      value: 'square',
      icon: `https://laboranth.tech/D/R/IMG/CLA/square.svg`
    },
    {
      value: 'circle',
      icon: `https://laboranth.tech/D/R/IMG/CLA/Ellipse.svg`
    },
    {
      value: 'triangle',
      icon: `https://laboranth.tech/D/R/IMG/CLA/triangle.svg`
    },
    {
      value: 'formPath',
      icon: `https://laboranth.tech/D/R/IMG/LAB/designer_mode/labIconFormPathShape.svg`
    }],
    'pen': "pen",
    'text': 'text',
    'img': "img"
  }

  Object.keys(tools).forEach(tool => {
    let toolBtn
    if (typeof tools[tool] == 'object') {
      const toolWrap = lab_design_system('div', `${tool}-wrap`, toolBar, '', '', ['design', 'toolbarItemWrap'])
      toolBtn = DesignConstructor.button(toolWrap, ['design', 'toolbarItem'], '', tool, 'toolBtn', `${tool}-btn`)
      const arrow = DesignConstructor.button(toolWrap, ['design', 'toolArrow'], '', `keyboard_arrow_down`)
      toolBtn.setAttribute('data-tool', tool)


      const list = lab_design_system('div', `${tool}-list`, toolWrap, '', '', ['design', 'toolbarItemList'])
      tools[tool].forEach(e => {
        let btn = lab_design_system('button', `${e.value}-wrap-btn`, list,
          '', '', ['design', 'toolbarItem'])

        const icon = lab_design_system('img', `${e.value}-wrap-icon`, btn,
          '', '', ['design', 'icon'])
        icon.setAttribute('src', e.icon)
        btn.addEventListener('click', () => {
          toolBtn.setAttribute('data-tool', e.value)
          toolBtn.querySelector('img').setAttribute('src', e.icon)
          selectTool(e.value)
          list.style.display = "none"
          arrow.style.transform = arrow.style.transform == 'translateY(-50%) rotate(180deg)' ? "translateY(-50%)" : "translateY(-50%) rotate(180deg)"
        })
      })

      arrow.addEventListener('click', () => {
        arrow.style.transform = arrow.style.transform == 'translateY(-50%) rotate(180deg)' ? "translateY(-50%)" : "translateY(-50%) rotate(180deg)"
        list.style.display = list.style.display == "none" ? "flex" : "none"
      })
    }
    else {
      toolBtn = DesignConstructor.button(toolBar, ['design', 'toolbarItem'], '', tool, 'toolBtn', `${tool}-tool`)
      toolBtn.setAttribute('data-tool', tool)
    }

    toolBtn.addEventListener('click', () => {
      let last = document.querySelector('.lab-toolBtn.active')
      if (last) {
        last.style.background = 'transparent'
        last.classList.remove('active')
      }
      selectTool(toolBtn.getAttribute('data-tool'))
      toolBtn.classList.add('active')
      toolBtn.style.background = '#EBEEFF'
    })
  })

  const blind = lab_design_system('button', "blind-tools", toolBar, '', '', ['design', 'blindTools'])
  blind.addEventListener('click', () => {
    DesignConstructor.toggleClass(toolBar, 'design', 'toolbar', 'hideToolbar')
    Options(options, 'toolBar')
    if (lab_orientation == "Portrait") {
      toolBar.style.bottom = toolBar.style.bottom == "30px" ? "10px" : "-78px"
    }
  })

  toolBar.style.bottom = lab_orientation == "Portrait" ? "10px" : "30px"
  if (!options.toolBar) DesignConstructor.addClass(toolBar, 'design', 'hideToolbar')

  //TOPSETTINGS
  pageWrap.style.position = 'relative'
  designBody.appendChild(pageWrap)

  let last = document.getElementById('lab-top-settings')
  if (last) last.remove()
  const topSettings = lab_design_system('div', "top-settings", pageWrap, '', '', ['design', 'top'])
  topSettings.style.maxWidth = 'clamp(56%, 100%, 1080px)'
  topSettings.style.position = 'fixed'
  topSettings.style.paddingLeft = 'clamp(10px, 2svw, 40px)'
  topSettings.style.paddingRight = 'clamp(10px, 2svw, 40px)'
  topSettings.style.gap = '0'
  topSettings.style.cursor = 'pointer'

  const settingsBtn = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'settings-white', 'none', 'settings-open-app-menu')
  settingsBtn.addEventListener('click', () => {
    lab_local_storage_object_update('global', { openedMenu: "app_menu" })
    const userLSG = lab_local_storage_object('global')
    const appObject = {}
    appObject.selectedApp = userLSG.app
    appObject.lngData = app.lngData
    lab_load_component('/D/C/UI/CLA/lab_app_menu.js', appObject)
  })

  const responsiveList = ["landscape", "portrait"]

  function setVpm(vpm) {
    const currentScale = lab_local_storage_object('global').classic_options.zoom
    document.querySelector('#lab-user-page').innerHTML = ""
    page.style.scale = currentScale / 100

    if (vpm === "landscape") {
      vpm = "paysage"
    }

    let elements = app.elements[vpm].filter(el => el.id != "lab-user-page" && el.id != "lab-user-wrap")
    let path


    async function renderParents() {
      for (let i = 0; i < elements.length; i++) {

        let element = elements[i]

        if (element.tagName === 'svg') {
          path = app.paths.find(x => x.id === element.id.split("SVG")[0])
          if (path === undefined) {
            path = app.paths.filter(p => p.parent === element.id)
          }
        }

        if (element.style.parent === undefined) {
          elementsRenderer(element.id, element.style.parent, element.tagName, element.attributes, element.style, element.classes, element.style.text, path, element.style.textArray)
        }
      }
    }

    renderParents().then(() => {
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i]

        if (element.tagName === 'svg') {
          path = app.paths.find(x => x.id === element.id.split("SVG")[0])
          if (path === undefined) {
            path = app.paths.filter(p => p.parent === element.id)
          }
        }

        if (element.style.parent != undefined && element.style.parent != null && element.style.parent != "") {
          elementsRenderer(element.id, element.style.parent, element.tagName, element.attributes, element.style, element.classes, element.style.text, path, element.style.textArray)
        }
      }
    })

    Designer.removePointer()
    if (vpm == 'landscape' || vpm === "paysage") {
      page.style.maxWidth = 'none'
      page.style.maxHeight = 'none'
      page.style.minHeight = '100svh'
    }

    if (vpm == 'portrait') {
      page.style.scale = 0.7
      page.style.minHeight = page.getBoundingClientRect().width * 1.8 + 'px'
    }
  }

  if (lab_orientation == 'Landscape') {
    responsiveList.map(e => {
      const btn = DesignConstructor.button(topSettings, ['design', 'screenBtn'], '', e, 'screen-btn', `responsive-btn-${e}`)

      if (e == options.vpm) activeBtn(btn)

      function activeBtn(btn) {
        btn.style.background = '#6a768e'
        btn.classList.add('active')
      }

      btn.addEventListener('click', () => {
        if (e != options.vpm) {
          let last = document.querySelector('.lab-screen-btn.active')
          last.style.background = 'transparent'
          last.classList.remove('active')

          activeBtn(btn)
          Options(options, 'vpm', e)
          setVpm(e)
        }
      })
    })
  }

  if (lab_local_storage_object('global').classic_options.vpm == 'portrait') {
    page.style.minHeight = page.getBoundingClientRect().width * 1.8 + 'px'
  }

  const setPage = DesignConstructor.button(topSettings, ['design', 'setPage'], '', 'page-box', '', 'set-page-btn')
  setPage.style.margin = lab_orientation == 'Portrait' ? '0 auto' : "0"

  setPage.appendChild(document.createTextNode(sectionElementsObject.section))
  const arrow = lab_design_system('img', 'page-arrow', setPage)
  arrow.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/chevron_right.svg`)


  setPage.addEventListener('click', () => {
    let last = document.getElementById('lab-pages-list')
    if (last) last.remove()
    const list = lab_design_system('div', 'pages-list', setPage, '', '', ['design', 'pagesList'])
    list.style.paddingTop = "15px"
    list.style.gap = "15px"

    sectionElementsObject.sections.forEach(e => {
      if (e != sectionElementsObject.section) {
        const btn = lab_design_system('a', `pages-list-${e}`, list, e, '', ['design', 'pageLink'])
        btn.setAttribute('href', `./${e}`)
      }
    })
    const add = lab_design_system('button', `add-page-btn`, list, '+', '', ['design', 'pageLink'])
    add.style.background = '#FED05E'
    add.style.color = '#000'
    add.style.padding = '8px'
    add.style.borderRadius = '6px'
    add.style.cursor = '6px'
    add.style.fontWeight = '700'

    add.addEventListener('click', () => addPagePopup())


    function addPagePopup() {
      list.remove()

      let last = document.getElementById('lab-add-popup')
      if (last) last.remove()
      const popupWrap = lab_design_system("div", `add-popup-wrap`, designBody, '', '', ["popup", "wrap"])
      const popup = lab_design_system("div", `add-popup`, designBody, '', '', ["popup", "box"])
      const popupContent = lab_design_system("div", `add-popup-content`, popup, '', '', ["popup", "content"])
      popupWrap.addEventListener("click", () => {
        parent.removeChild(popupWrap)
        parent.removeChild(popup)
      })
      const pageInput = DesignConstructor.input(popupContent)
      const addBtn = lab_design_system("button", `add-popup-btn`, popupContent, 'add', '', ["buttons", "action"])

      addBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const regex = /^[A-Za-z0-9-._~]+$/
        if (pageInput.value && regex.test(pageInput.value)) {
          const lab_user_current_config = lab_local_storage_object('global')

          let addSectionObject = {
            app: lab_user_current_config.app,
            uid: lab_user_current_config.uid,
            lng: lab_user_current_config.lng,
            addingSection: pageInput.value
          }

          socket.emit('addNewSection', addSectionObject)

        } else alertUser(lngData.column_name_cannot_be_empty)
      })

      lab_fade_in_recursively(popup, 0.3)
    }

    setPage.addEventListener('mouseleave', () => list.remove())
    lab_fade_in_recursively(list, 0.3)
  })

  if (lab_orientation == 'Landscape') {
    const sizeSwitcher = lab_design_system('input', 'sliderRange', topSettings, null, null)
    sizeSwitcher.setAttribute('type', "range")
    sizeSwitcher.setAttribute('min', "1")
    sizeSwitcher.setAttribute('max', "100")
    sizeSwitcher.setAttribute('type', "range")
    sizeSwitcher.setAttribute('value', "100")
    sizeSwitcher.style.width = 'clamp(10%, 12%, 130px)'
    const size = lab_design_system('div', 'screen-size', topSettings, options.zoom + '%', '', ['design', 'pixelView'])
    size.style.width = "60px"
    sizeSwitcher.value = options.zoom
    page.style.scale = options.zoom / 100

    sizeSwitcher.oninput = function () {
      size.innerHTML = this.value + "%"
      Options(options, 'zoom', this.value)
      page.style.scale = this.value / 100
      let pagePos = page.getBoundingClientRect()
      page.style.transform = `translateY(-${pagePos.y}px)`
    }
  }

  const view = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'visibility')
  view.addEventListener('click', DesignConstructor.closeAll)
  const download = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'download')
  download.addEventListener('click', () => {
    lab_local_storage_object_update('global', { openedMenu: "app_menu" })
    const userLSG = lab_local_storage_object('global')
    const appObject = {}
    appObject.selectedApp = userLSG.app
    appObject.lngData = app.lngData
    appObject.selectedMenu = 'deploy'
    lab_load_component('/D/C/UI/CLA/lab_app_menu.js', appObject)
  })


  const blindTop = lab_design_system('button', "blind-btn", topSettings, '', '', ['design', 'blind'])

  blindTop.addEventListener('click', () => {
    DesignConstructor.toggleClass(topSettings, 'design', 'top', 'hideTop')
    Options(options, 'settingsBar')
  })

  if (!options.settingsBar) DesignConstructor.addClass(topSettings, 'design', 'hideTop')

  const styleMenu = lab_design_system('div', 'style-box', designBody, '', 'none ', ['design', 'styleWrapper'])
  const styleWrap = lab_design_system('div', 'style-wrap', styleMenu, '', 'none')
  styleWrap.style.paddingTop = '75px'
  styleWrap.style.overflowY = 'scroll'
  styleWrap.style.height = '100%'
  styleWrap.classList.add('lab-scrollable')
  styleMenu.style.position = 'fixed'
  styleMenu.style.height = 100 + '%'
  styleMenu.style.right = 0
  styleMenu.style.top = lab_orientation == "Portrait" ? "100px" : 0
  styleMenu.style.borderRadius = lab_orientation == "Portrait" ? "16px 0 0 16px" : 0
  if (lab_orientation == "Portrait") {
    styleMenu.style.marginRight = '-300px'
    styleMenu.style.height = 'calc(100% - 200px)'
  }


  const styleHide = lab_design_system('button', 'style-hide', styleMenu, '', 'none', ['design', 'hideStyles'])
  const styleHideIcon = lab_design_system('img', 'style-hide-icon', styleHide, '', 'none')
  styleHideIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/hide.svg`)
  styleHideIcon.style.maxWidth = '100%'
  styleHideIcon.style.marginLeft = '-4px'

  styleHide.addEventListener('click', () => {
    Designer.removePointer()
    styleMenu.style.marginRight = styleMenu.style.marginRight == '-300px' ? '0' : '-300px'
  })

  StylesMenu(page)
  //CODE MENU

  const codeMenu = lab_design_system('div', 'code-box', designBody, '', 'none', ['design', 'codeBox'])
  const codeMenuButton = DesignConstructor.button(codeMenu, ['design', 'codeBoxShow'], '', 'code-btn')
  const codeWrapper = lab_design_system('div', "code-wrapper", codeMenu, '', '', ['design', 'codeWrapper'])

  codeMenu.style.top = lab_orientation == "Portrait" ? '100px' : "0"
  codeMenu.style.width = 'clamp(320px, 100%, 950px)'
  codeMenu.style.boxSizing = 'border-box'

  codeMenuButton.addEventListener('click', () => {
    codeWrapper.innerHTML = ''
    DesignConstructor.toggleClass(codeMenu, 'design', 'codeBox', 'codeBoxActive')
    DesignConstructor.toggleClass(codeMenuButton, 'design', 'codeBoxShow', 'codeBoxShowActive')
    codeMenu.style.top = lab_orientation == "Portrait" ? '100px' : "0"

    document.getElementById('lab-user-page').innerHTML.split('>').forEach(e => {
      codeWrapper.innerText += e + '>\n            '
    })
  })


  //CODE MENU END

  const fileInput = lab_design_system('input', 'img-input', designBody, '', '', ['design', 'noneFile'])
  fileInput.setAttribute('type', 'file')
  fileInput.style.width = 0

  DesignConstructor.BlockResize()
  lab_fade_in_recursively(designBody, 0.3)

  window.addEventListener('resize', () => {
    Designer.removePointer()
  })


  function rgb2hex(rgb) {
    var rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
  }

  function StylesMenu(item) {
    const lastSelected = document.querySelector('.lab-selectedItem')
    const box = document.getElementById('lab-style-wrap')
    const itemStyles = window.getComputedStyle(item)
    selectedElementChangeId = item

    if (ActiveMode === 'rotation') {
      activeRotateElement()
    }

    if (ActiveMode === 'resize') {
      labResizeElements()
    }

    const css = {
      'font-family': itemStyles.fontFamily,
      'text-align': itemStyles.textAlign,
      'font-style': itemStyles.fontStyle,
      'font-weight': itemStyles.fontWeight,
      'font-size': itemStyles.fontSize,
      'line-height': itemStyles.lineHeight,
      'letter-spacing': itemStyles.letterSpacing,
      'stroke': itemStyles.stroke,
      'color': itemStyles.color,
      'background': rgb2hex(itemStyles.background),
      'stroke-width': itemStyles.strokeWidth,
      'padding-top': itemStyles.paddingTop,
      'padding-right': itemStyles.paddingRight,
      'padding-bottom': itemStyles.paddingBottom,
      'padding-left': itemStyles.paddingLeft,
      'margin-top': itemStyles.marginTop,
      'margin-right': itemStyles.marginRight,
      'margin-bottom': itemStyles.marginBottom,
      'margin-left': itemStyles.marginLeft,
    }

    if (lastSelected) {
      box.innerHTML = ''
      lastSelected.classList.remove('lab-selectedItem')
      renderMenu()
    }
    if (!lastSelected) renderMenu()

    function renderMenu() {
      item.classList.add('lab-selectedItem')
      box.innerHTML = ''

      const elementMenuButtons = lab_design_system('div', "elementMenu-buttons", box, '', '', ['design', 'StyleButtons'])
      const elementMenuBody = lab_design_system('div', "elementMenuBody", box, '', '', ['design', 'elementMenuBody'])
      const menuSettings = ['general', 'additional']
      const activeSettings = 'general'

      menuSettings.forEach((e) => {
        const btn = lab_design_system('button', Designer.ID(), elementMenuButtons, e, 'element-menu-btn', ['design', 'StyleBtn'])
        if (e == activeSettings) {
          btn.classList.add('active')
          btn.style.background = '#F7F7F7'
          StyleSection(e)
        }

        btn.addEventListener('click', () => {
          if (!btn.classList.contains('active')) {
            let last = document.querySelector('.lab-element-menu-btn.active')
            last.classList.remove('active')
            last.style.background = '#E5E5E5'
            StyleSection(e)
            btn.classList.add('active')
            btn.style.background = '#F7F7F7'
          }
        })
      })

      function StyleSection(param) {
        elementMenuBody.innerHTML = ''
        if (param == 'general') {
          const idInput = DesignConstructor.input(elementMenuBody, "#" + item.id, '#')
          idInput.addEventListener('input', () => {
            item.id = idInput.value.trim().replace('#', '')
          })
          if (item.classList.contains('lab-img-container')) {
            const fileBox = lab_design_system('div', 'file-preview-box', elementMenuBody, '', '', ['design', 'fileBox'])
            let image = item.querySelector('img')


            const fileInput = lab_design_system('input', 'file-preview-input', fileBox, '', '', ['design', 'fileBoxInput'])
            fileInput.style.opacity = 0
            fileInput.setAttribute('type', 'file')
            const preview = lab_design_system('img', 'file-preview', fileBox)
            preview.style.width = '100%'
            preview.style.height = '100%'
            preview.style.objectFit = 'cover'
            preview.style.zIndex = '3'
            preview.style.pointerEvents = 'none'
            preview.style.position = 'relative'
            preview.setAttribute('src', image.src)

            fileInput.addEventListener('change', (i) => {
              async function setSrc() {
                await loadImg(Array.from(i.target.files)[0], [image, preview])
              }
              setSrc()
            })

            const srcWrap = lab_design_system('div', Designer.ID(), elementMenuBody, '', '', ['design', 'styleBox'])
            const fileSrc = lab_design_system('span', Designer.ID(), srcWrap, 'src')
            fileSrc.style.marginRight = '10px'
            let attrubuteInput = DesignConstructor.input(srcWrap, image.src)
            attrubuteInput.addEventListener('input', () => {
              image.setAttribute('src', attrubuteInput.value)
            })

            const objFit = DesignConstructor.dropList(elementMenuBody, ['cover', 'fill', 'contain', 'none', 'scale-down'], image.style.objectFit, (e) => Designer.WriteStyle(image, 'objectFit', e))

            const horizontal = lab_design_system('div', Designer.ID(), elementMenuBody, '', '', ['design', 'styleBox'])
            const horizontalLabel = lab_design_system('span', Designer.ID(), horizontal, 'horizontal')
            horizontalLabel.style.marginRight = '10px'
            horizontalLabel.style.minWidth = '50%'
            let imagePos = image.style.objectPosition.split(' ')

            let horizontalInput = DesignConstructor.input(horizontal, imagePos[0].replace('%', ''), '%')
            horizontalInput.setAttribute('type', 'number')
            horizontalInput.addEventListener('input', () => {
              image.style.objectPosition = horizontalInput.value + "% " + image.style.objectPosition.split(' ')[1]
            })
            const imgWidth = lab_design_system('div', 'image-width', elementMenuBody, '', '', ['design', 'styleBox'])
            const imgWidthLabel = lab_design_system('span', 'image-width-label', imgWidth, 'width')
            imgWidthLabel.style.marginRight = '10px'
            imgWidthLabel.style.minWidth = '50%'

            let imgWidthInput = DesignConstructor.input(imgWidth, image.style.width.replace("%", ''), '%')
            imgWidthInput.setAttribute('type', 'number')
            imgWidthInput.addEventListener('input', () => {
              image.style.width = imgWidthInput.value + '%'
            })

            const imgHeight = lab_design_system('div', 'image-height', elementMenuBody, '', '', ['design', 'styleBox'])
            const imgHeightLabel = lab_design_system('span', 'image-height-label', imgHeight, 'height')
            imgHeightLabel.style.marginRight = '10px'
            imgHeightLabel.style.minWidth = '50%'

            let imgHeightInput = DesignConstructor.input(imgHeight, image.style.height.replace("%", ''), '%')
            imgHeightInput.setAttribute('type', 'number')
            imgHeightInput.addEventListener('input', () => {
              image.style.height = imgHeightInput.value + '%'
            })


            const vertical = lab_design_system('div', Designer.ID(), elementMenuBody, '', '', ['design', 'styleBox'])
            const verticalLabel = lab_design_system('span', Designer.ID(), vertical, 'vertical')
            verticalLabel.style.marginRight = '10px'
            verticalLabel.style.minWidth = '50%'

            let verticalInput = DesignConstructor.input(vertical, imagePos[1].replace('%', ''), '%')
            verticalInput.setAttribute('type', 'number')

            verticalInput.addEventListener('input', () => {
              image.style.objectPosition = image.style.objectPosition.split(' ')[0] + " " + verticalInput.value + "%"
            })


            const aspect = lab_design_system('div', 'image-aspect', elementMenuBody, '', '', ['design', 'styleBox'])
            const aspectLabel = lab_design_system('span', 'image-aspect-label', aspect, 'aspect-ratio')
            aspectLabel.style.marginRight = '10px'
            aspectLabel.style.minWidth = '50%'

            let aspectInput = DesignConstructor.input(aspect, image.style.aspectRatio.split(' ')[0])
            aspectInput.setAttribute('type', 'number')

            aspectInput.addEventListener('input', () => {
              image.style.aspectRatio = aspectInput.value
            })

          } else {
            const tagList = ['div', 'section', 'p', 'span', 'a', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'form', 'input', 'ul', 'ol', 'li', 'font', 'i', 'strong', 'strike']
            const tag = DesignConstructor.dropList(elementMenuBody, tagList, item.tagName, (e) => {
              let newEl = document.createElement(e)
              item.getAttributeNames().forEach(n => {
                newEl.setAttribute(n, item.getAttribute(n))
              })
              newEl.innerHTML = item.innerHTML
              item.replaceWith(newEl)
              item = newEl
            })
          }

          const settings = lab_design_system('div', "menu-style-settings", elementMenuBody, '', '', ['design', 'styleGrid'])
          const display = DesignConstructor.dropList(settings, ['flex', 'inline', 'block'], item.style.display, (e) => Designer.WriteStyle(item, 'display', e))


          const pos = DesignConstructor.dropList(settings, ['absolute', 'fixed', 'relative'], item.style.position, (e) => Designer.WriteStyle(item, 'position', e))

          const padding = lab_design_system('span', Designer.ID(), elementMenuBody, 'padding')

          const paddingBox = lab_design_system('div', "padding-box", elementMenuBody, '', '', ['design', 'grid-box'])
          const margin = lab_design_system('span', Designer.ID(), elementMenuBody, 'margin')
          const marginBox = lab_design_system('div', "margin-box", elementMenuBody, '', '', ['design', 'grid-box'])

          const padList = ['top', 'right', 'bottom', 'left']

          padList.forEach(e => {
            const padInput = DesignConstructor.input(paddingBox, css[`padding-${e}`], '', '', { el: item, style: `padding${capitalizeFirstLetter(e)}` })
          })

          padList.forEach(e => {
            const marInput = DesignConstructor.input(marginBox, css[`margin-${e}`], '', '', { el: item, style: `margin${capitalizeFirstLetter(e)}` })
          })


          const colorSettings = lab_design_system('div', "colorSettings", elementMenuBody, '', '', ['design', 'styleBox'])
          const textColor = lab_design_system('span', Designer.ID(), colorSettings, 'background')
          const colorInput = lab_design_system('input', "input-text-color", colorSettings, '', '', ['design', 'colorInput'])
          colorInput.setAttribute('type', 'color')
          colorInput.setAttribute('value', css['background'])
          if (item.tagName == 'svg') {
            colorInput.setAttribute('value', item.getAttribute('fill'))
          }

          colorInput.addEventListener('input', () => {
            if (item.tagName == 'svg') {
              Designer.WriteStyle(item, 'fill', colorInput.value)
            } else {
              Designer.WriteStyle(item, 'background', colorInput.value)
            }
          })

          item.getAttributeNames().forEach(n => {
            if (!['style', 'id'].includes(n)) {
              const wrap = lab_design_system('div', Designer.ID(), elementMenuBody, '', '', ['design', 'styleBox'])
              const name = lab_design_system('span', Designer.ID(), wrap, n)
              name.style.marginRight = '10px'
              if (n != 'class') {
                let attrubuteInput = DesignConstructor.input(wrap, item.getAttribute(n))
                attrubuteInput.addEventListener('input', () => {
                  item.setAttribute(n, attrubuteInput.value)
                })
              } else {
                let attrubuteInput = DesignConstructor.input(wrap, '')
                let systemClasses = ['lab-selectedItem', 'lab-active-element', 'lab-img-container']
                let classes = String(item.getAttribute(n)).split(' ')

                classes.forEach(e => {
                  if (!systemClasses.includes(e)) {
                    attrubuteInput.value += e + ' '
                  }
                })
                attrubuteInput.addEventListener('input', () => {
                  item.setAttribute(n, attrubuteInput.value)
                })
              }
            }
          })

        }
        if (param == 'additional') {
          const fontFamily = DesignConstructor.dropList(elementMenuBody, ['Arial', 'Arial2', 'Arial3'], css['font-family'], (e) => Designer.WriteStyle(item, 'fontFamily', e))

          const fontSettings = lab_design_system('div', "fontSettings", elementMenuBody, '', '', ['design', 'styleGrid'])
          const textALign = lab_design_system('div', "textALign", fontSettings)
          const textStyle = lab_design_system('div', "textStyle", fontSettings)
          const textALignList = ['left', 'center', 'right', 'justify']
          const textStyleList = ['italic', 'underline', 'line', 'dec']

          textALignList.forEach(e => {
            const btn = DesignConstructor.button(textALign, ['design', 'stylesBtn'], '', `${e}-text`)
            btn.addEventListener('click', () => Designer.WriteStyle(item, 'textAlign', e))
          })

          const italic = DesignConstructor.button(textStyle, ['design', 'stylesBtn'], '', `italic-style`)
          const underline = DesignConstructor.button(textStyle, ['design', 'stylesBtn'], '', `underline-style`)
          const line = DesignConstructor.button(textStyle, ['design', 'stylesBtn'], '', `line-through-style`)
          const dec = DesignConstructor.button(textStyle, ['design', 'stylesBtn'], '', `text-decoration-style`)

          const textSettings = lab_design_system('div', "textSettings", elementMenuBody, '', '', ['design', 'styleGrid'])

          const weight = DesignConstructor.dropList(textSettings, ['normal', 'bold', 'thin', 'medium', 'black'], css['font-weight'], (e) => Designer.WriteStyle(item, 'fontWeight', e))

          const fontSize = DesignConstructor.input(textSettings, css['font-size'], 'px', '', { el: item, style: 'fontSize' })

          const lineHeight = DesignConstructor.input(textSettings, css['line-height'], '', 'line-height', { el: item, style: 'lineHeight' })

          const letterSpacing = DesignConstructor.input(textSettings, css['letter-spacing'], '', 'letter-spacing', { el: item, style: 'letterSpacing' })

          const colorSettings = lab_design_system('div', "colorSettings", elementMenuBody, '', '', ['design', 'styleBox'])
          const textColor = lab_design_system('span', "text-color", colorSettings, 'Text color')
          const textColorInput = lab_design_system('input', "input-text-color", colorSettings, '', '', ['design', 'colorInput'])
          textColorInput.setAttribute('type', 'color')
          textColorInput.setAttribute('value', css['color'])
          textColorInput.addEventListener('input', () => {
            Designer.WriteStyle(item, 'color', textColorInput.value)
          })
        }
        lab_fade_in_recursively(elementMenuBody, 0.2)
      }

      lab_fade_in_recursively(box, 0.3)
    }
  }
}

function selectTool(toolName) {
  let prewiewTool = document.getElementById('lab-prewiew-tool')
  prewiewTool.style.opacity = 1
  prewiewTool.innerHTML = toolName
  setTimeout(() => {
    prewiewTool.style.opacity = 0
  }, 1000);


  ActiveMode = null
  selectedShape = null
  elementDragging = false
  labIsElementDragging = false
  if (toolName == 'pen') {
    selectedShape = 'feather'
  }
  else if (toolName == 'move') {
    ActiveMode = 'translation'
    labIsElementDragging = true
  }
  else if (toolName == 'resize') {
    ActiveMode = 'resize'
    isResizing = true
  }
  else if (toolName == 'rotate') {
    ActiveMode = 'rotation'
  }

  else if (['text', 'img'].includes(toolName)) {
    mode(toolName)
  }

  else if (toolName == 'square') {
    isControlEnabled = false
    selectedShape = 'square'
    elementDragging = false
  }
  else if (toolName == 'circle') {
    isControlEnabled = false
    selectedShape = 'circle'
    elementDragging = false
  }
  else if (toolName == 'triangle') {
    isControlEnabled = false
    selectedShape = 'triangle'
    elementDragging = false
  }
  else if (toolName == 'formPath') {
    isControlEnabled = false
    selectedShape = 'formPath'
    elementDragging = false
  }
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function mode(modeName) {
  const page = document.getElementById('lab-user-page')
  const pagePos = page.getBoundingClientRect()
  let mouse = false
  let startCoords
  selectedShape = modeName
  if (['text', 'img'].includes(modeName)) {
    page.addEventListener('mousemove', write)
  }

  const types = {
    'text': 'span',
    'img': 'img',
  }

  async function write({ x, y }) {
    if (selectedShape == modeName) {
      if (mouse) {
        let area = !document.getElementById('lab-area') ? lab_design_system('div', 'area', page, '', 'none', ['design', 'area']) : document.getElementById('lab-area')
        area.style.top = (startCoords.y - pagePos.y) / pagePos.height * 100 + '%'
        area.style.left = (startCoords.x - pagePos.x) / pagePos.width * 100 + '%'
        area.style.width = (x - startCoords.x) / pagePos.width * 100 + '%'
        area.style.height = (y - startCoords.y) / pagePos.height * 100 + '%'
        area.style.opacity = ''

        page.addEventListener('mouseup', CreateEl)

      }
      page.addEventListener('mousedown', start)
    }
    else {
      page.removeEventListener('mousedown', start)
      page.removeEventListener('mouseup', CreateEl)
      page.removeEventListener('mousemove', write)
      return false
    }
  }

  function start(e) {
    if (!mouse) {
      mouse = true
      startCoords = { x: e.clientX, y: e.clientY }
    }
  }

  async function CreateEl() {
    const area = document.getElementById('lab-area')
    if (area) {
      const areaPos = area.getBoundingClientRect()
      mouse = false
      startCoords = null
      if (modeName == 'text') {
        const item = await Designer.create(elementsToolsList, types[modeName], page, 'landscape', true)
        item.style.position = 'absolute'
        item.style.top = (areaPos.y - pagePos.y) / pagePos.height * 100 + '%'
        item.style.left = (areaPos.x - pagePos.x) / pagePos.width * 100 + '%'
        item.style.width = (areaPos.width) / pagePos.width * 100 + '%'
        item.style.aspectRatio = areaPos.width / areaPos.height
      }

      if (modeName == 'img') {
        let input = document.getElementById('lab-img-input')
        input.click()
        async function IMG(e) {
          if (e.target.files.length > 0) {
            const fileInfo = e.target.files[0]

            const itemBox = document.createElement('div')
            itemBox.classList.add('lab-img-container')
            itemBox.id = Designer.ID()

            const item = await Designer.create(elementsToolsList, types[modeName], itemBox, 'landscape', true)
            itemBox.style.position = 'absolute'
            itemBox.style.top = (areaPos.y - pagePos.y) / pagePos.height * 100 + '%'
            itemBox.style.left = (areaPos.x - pagePos.x) / pagePos.width * 100 + '%'
            itemBox.style.width = (areaPos.width) / pagePos.width * 100 + '%'
            item.style.aspectRatio = areaPos.width / areaPos.height
            item.style.width = '100%'
            item.style.pointerEvents = 'none'
            item.setAttribute('src', URL.createObjectURL(fileInfo))
            let i = Array.from(e.target.files)[0]

            async function setSrc() {
              await loadImg(i, [item])
            }

            setSrc()

            item.style.objectFit = 'cover'
            item.style.objectPosition = '50% 50%'
            page.appendChild(itemBox)
            input.removeEventListener('change', IMG)
          }
        }

        input.addEventListener('change', IMG)
      }
      area.remove()
    }
  }

  page.addEventListener('click', () => mouse = false)
}

async function loadImg(i, items) {
  let nameWithoutFirstNumbers = idStartWithoutNumbers(i.name.split('.')[0])
  let withoutSpecChar = formatFromSpecChar(nameWithoutFirstNumbers)
  let finalNameWithExtension = withoutSpecChar + "." + i.name.split('.')[1]
  const userLSG = lab_local_storage_object('global')
  userLSG.name = finalNameWithExtension
  userLSG.type = i.type
  userLSG.support = ""
  let newSrc

  function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = reject;
    })
  }

  async function processFile() {
    try {
      let imgData = await readFileAsync(i)
      let regExp64 = "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
      userLSG.support = imgData.trim().toString('base64').replace(regExp64, '')

      await socket.emit('droppedImages', userLSG, async res => {
        items.forEach(e => {
          e.setAttribute('src', `/DB/USERS_FOLDERS/${res.uid}/apps/${res.path}/${res.mediaType}/${res.id}.webp`)
          e.id = res.id
          let opt = lab_local_storage_object('options').vpm
          lab_save_section(opt)
        })
        return newSrc
      })

    } catch (err) {
      console.log(err)
    }
  }



  return await processFile()
}



return design_mode






