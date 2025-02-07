const oldSRC = '/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/'


const uditableTags = ["SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "P", "I", "B", "STRONG", "FONT", "EM", "SMALL", "SUP", "SUB", "Q", "BLOCKQUOTE"]


const ElementsList = {
  'button': {
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
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
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
    'title': "section",
    'template': {
      'landscape': {
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
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
    'title': "div",
    'template': {
      'landscape': {
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
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
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
  'p': {
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
    'title': "p",
    'template': {
      'landscape': {
        'id': "lab-text",
        'tag': "p",
        'classes': "lab-text",
        'root': true,
        'styles': {
          'display': 'inline-block',
          'padding': '10px',
          'position': "relative",
        }
      },
      'landscape': {
        'id': "lab-text",
        'tag': "p",
        'classes': "lab-text",
        'root': true,
        'styles': {
          'display': 'inline-block',
          'padding': '10px',
          'position': "relative",
        }
      }
    }
  },
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
          'position': "relative"
        }
      },
      'landscape': {
        'id': "lab-img",
        'tag': "img",
        'classes': "lab-img",
        'root': true,
        'styles': {
          'position': "relative"
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

let ActiveMode
let selected

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

  static async hover(element) {
    const page = document.getElementById('lab-user-page')
    if (!element.classList.contains('lab-none') && !element.classList.contains('lab-transform')) {
      const last = document.querySelector('.lab-active-element')
      if (!last) DesignConstructor.createOptions(element, page)
      else if (last.id != element.id) {
        last.classList.remove('lab-active-element')
        DesignConstructor.createOptions(element, page)
      }
    }
    if (uditableTags.includes(element.tagName)) element.contentEditable = true
  }

  static async removePointer() {
    if (document.getElementById('lab-HoverBox')) document.getElementById('lab-HoverBox').remove()
    if (document.getElementById('lab-HoverBoxbtn')) document.getElementById('lab-HoverBoxbtn').remove()
    if (document.getElementById('lab-block-menu')) document.getElementById('lab-block-menu').remove()
    if (document.getElementById('lab-block-menu-wrap')) document.getElementById('lab-block-menu-wrap').remove()
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
    const page = document.getElementById('lab-user-page')
    const pagePos = page.getBoundingClientRect()

    function onMouseDrag({ movementX, movementY }) {

      if (element.style.position == 'static' || !element.style.position) { element.style.position = 'absolute' }

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

  static saveTemplate(element) {
    let tamlpateObj = {
      'title': "button",
      'template': {

      }
    }
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

  static drag(el, dargZone, start = 'mousedown', end = 'mouseup', endFunc = null) {
    Designer.removePointer()
    if (el.style.position == 'static') return
    const page = document.getElementById('lab-user-page')
    el.style.transition = 'all 0.1s ease'
    const zone = dargZone || page

    let elStyles = window.getComputedStyle(el)
    let pagePos = page.getBoundingClientRect()
    let elPos = el.getBoundingClientRect()
    let scale = page.style.scale

    function StartAction() {
      el.style.pointerEvents = 'none'
      zone.addEventListener('mousemove', onMouseMove)
    }

    function onMouseMove({ x, y }) {
      Designer.removePointer()

      let item = document.elementFromPoint(x, y)
      const itemPos = item.getBoundingClientRect()

      let Y = y - itemPos.y
      let X = x - itemPos.x

      let checkCTRL = false
      if (checkCTRL) {
        let last = document.getElementById('lab-hover')
        if (last) last.remove()
        const top = 0 < Y && Y < 20
        const bottom = -20 < Y - itemPos.height && Y - itemPos.height < 0
        const left = 0 < X && X < 20
        const right = -20 < X - itemPos.width && X - itemPos.width < 0
        if (top || bottom || left || right) {
          const hover = lab_design_system('div', "hover", page, '', 'none', ['design', 'hover'])
          if (top) {
            hover.style.height = 20 / pagePos.height * 100 + '%'
            hover.style.width = itemPos.width / pagePos.width * 100 + '%'
            hover.style.left = (itemPos.x - pagePos.x) / pagePos.width * 100 + '%'
            hover.style.top = (itemPos.y - pagePos.y) / pagePos.height * 100 + '%'
          }
          if (bottom) {
            hover.style.height = 20 / pagePos.height * 100 + '%'
            hover.style.width = itemPos.width / pagePos.width * 100 + '%'
            hover.style.left = (itemPos.x - pagePos.x) / pagePos.width * 100 + '%'
            hover.style.top = (itemPos.y - pagePos.y + itemPos.height - 20) / pagePos.height * 100 + '%'
          }
          if (left) {
            hover.style.height = itemPos.height / pagePos.height * 100 + '%'
            hover.style.width = 20 / pagePos.width * 100 + '%'
            hover.style.left = (itemPos.x - pagePos.x) / pagePos.width * 100 + '%'
            hover.style.top = (itemPos.y - pagePos.y) / pagePos.height * 100 + '%'
          }
          if (right) {
            hover.style.height = itemPos.height / pagePos.height * 100 + '%'
            hover.style.width = 20 / pagePos.width * 100 + '%'
            hover.style.left = (itemPos.x - pagePos.x + itemPos.width - 20) / pagePos.width * 100 + '%'
            hover.style.top = (itemPos.y - pagePos.y) / pagePos.height * 100 + '%'
          }
        }
      }

      el.style.left = ((x - pagePos.x - (elPos.width / 2)) / scale) / pagePos.width * 100 + '%'
      el.style.top = ((y - pagePos.y - (elPos.height / 2)) / scale) / pagePos.height * 100 + '%'
    }

    el.addEventListener(start, StartAction)

    function EndAction() {
      el.style.transition = elStyles.transition
      el.style.pointerEvents = 'unset'
      el.removeEventListener(start, StartAction)
      zone.removeEventListener('mousemove', onMouseMove)
      page.removeEventListener(end, EndAction)
    }

    page.addEventListener(end, EndAction)
  }

  static transform(el = selected) {

    const page = document.getElementById('lab-user-page')
    let lastDir = ''
    let mouseIsDown = false
    el.style.transition = 'max-height 0.1s ease'

    function movePos({ x, y }) {
      if (el != selected) {
        document.removeEventListener('mousemove', movePos)
        return
      }
      const pos = el.getBoundingClientRect()
      let coord = { x: x, y: y }
      let axis = ['bottom', 'top'].includes(lastDir) ? 'y' : 'x'
      let orientation = axis == 'x' ? 'width' : "height"

      function writePointer(direction) {
        let top = 0
        let left = 0
        if (direction) {
          lastDir = direction
          if (direction == 'top') {
            top = -4
            left = -(pos.width / 2 + 12)
          }
          else if (direction == 'bottom') {
            top = pos.height - 4
            left = -(pos.width / 2 + 12)
          }
          else if (direction == 'left') {
            top = (pos.height / 2 - 4)
            left = -(pos.width + 12)
          }
          else if (direction == 'right') {
            top = (pos.height / 2 - 4)
            left = -12
          }
        }

        let last = document.getElementById('lab-pointer')
        if (!last || !last.classList.contains(direction) || mouseIsDown) {
          Designer.removePointer()
          const pointer = lab_design_system('div', 'pointer', page, '', `none ${direction}`, ['design', 'pointer'])
          pointer.style.transition = 'all 0.1s ease'

          if (['left', 'right'].includes(direction)) pointer.style.rotate = '90deg'

          Designer.Proportions(pointer, el, page, { top: top, left: left })
        }
      }

      if (y < (pos.y + 10) && y > pos.y - 50) writePointer('top')

      else if (y > (pos.y + pos.height - 10) && y < (pos.y + pos.height + 50)) writePointer('bottom')

      else if (x < (pos.x + 10) && x > (pos.x - 50)) writePointer('left')

      else if (x > (pos.x + pos.width - 10) && x < (pos.x + pos.width + 50)) writePointer('right')

      function resize() {
        if (mouseIsDown) {
          let a = (coord[axis] - pos[axis])

          if (a <= 0) a += a * (-1) + pos[orientation]
          el.style[`max${capitalizeFirstLetter(orientation)}`] = a + 'px'
          el.style[orientation] = a + 'px'
          writePointer(lastDir)
        }
        document.addEventListener('click', () => {
          document.removeEventListener('mousemove', movePos)
          Designer.removePointer()
        })
      }

      resize()

      document.addEventListener('mousedown', () => mouseIsDown = true)
      document.addEventListener('mouseup', () => mouseIsDown = false)
    }
    document.addEventListener('mousemove', movePos)
  }

  static async mode(modeName) {
    const page = document.getElementById('lab-user-page')
    const pagePos = page.getBoundingClientRect()
    let mouse = false
    let startCoords
    ActiveMode = modeName
    if (['shape', 'text', 'img'].includes(modeName)) {
      page.addEventListener('mousemove', write)
    }
    if (modeName == 'resize') {
      selected = true

      function Trans(e) {
        if (selected) {
          selected = document.elementFromPoint(e.clientX, e.clientY)
          Designer.transform(selected)
        } else {
          page.removeEventListener('click', Trans)
        }
      }
      page.addEventListener('click', Trans)
    }
    const types = {
      'text': 'span',
      'img': 'img',
    }

    async function write({ x, y }) {
      if (ActiveMode == modeName) {
        if (mouse) {
          let area = !document.getElementById('lab-area') ? lab_design_system('div', 'area', page, '', 'none', ['design', 'area']) : document.getElementById('lab-area')
          area.style.top = (startCoords.y - pagePos.y) / pagePos.height * 100 + '%'
          area.style.left = (startCoords.x - pagePos.x) / pagePos.width * 100 + '%'
          area.style.width = (x - startCoords.x) / pagePos.width * 100 + '%'
          area.style.height = (y - startCoords.y) / pagePos.height * 100 + '%'

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
        if (!['shape'].includes(modeName)) {
          const item = await Designer.create(elementsToolsList, types[modeName], page, 'landscape', true)
          item.style.position = 'absolute'
          item.style.top = (areaPos.y - pagePos.y) / pagePos.height * 100 + '%'
          item.style.left = (areaPos.x - pagePos.x) / pagePos.width * 100 + '%'
          item.style.width = (areaPos.width) / pagePos.width * 100 + '%'
          item.style.height = (areaPos.height) / pagePos.height * 100 + '%'

          if (modeName == 'img') {
            let input = document.getElementById('lab-file-input')
            input.click()
            function IMG(e) {
              const fileInfo = e.target.files[0];
              item.setAttribute('src', URL.createObjectURL(fileInfo))
              input.removeEventListener('change', IMG)
            }
            input.addEventListener('change', IMG)
          }
        }

        if (modeName == 'shape') {
          const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          const rect = document.createElementNS(svg.namespaceURI, "rect");
          svg.style.position = 'absolute'
          svg.style.width = areaPos.width / pagePos.width * 100 + '%'
          svg.style.height = areaPos.height / pagePos.height * 100 + '%'
          svg.style.left = (areaPos.x - pagePos.x) / pagePos.width * 100 + '%'
          svg.style.top = (areaPos.y - pagePos.y) / pagePos.height * 100 + '%'
          rect.classList.add('lab-none')
          rect.setAttribute("width", '100%');
          rect.setAttribute("height", '100%');
          svg.setAttribute("fill", "#FED05E");
          rect.style.pointerEvents = 'none'
          svg.appendChild(rect);
          page.appendChild(svg);
        }

        area.remove()
      }
    }

    page.addEventListener('click', () => mouse = false)
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
    if (!stopList.includes(element.id)) {
      await Designer.removePointer()

      element.classList.add('lab-active-element')

      const HoverBox = lab_design_system('div', "HoverBox", parent, 0, 0, ['design', 'HoverBox'])
      HoverBox.style.borderRadius = element.style.borderRadius

      Designer.Proportions(HoverBox, element, parent, { vert: "full", hor: "full" })

      const hoverMenuBtn = DesignConstructor.button(parent, ['design', 'hoverMenuBtn'], 0, 'more_vert_white', '', 'HoverBoxbtn')

      Designer.Proportions(hoverMenuBtn, element, parent, { left: -42, top: 7 })

      const BlockOptions = {
        'copy': "Copy",
        'drag': "Move",
        'transform': "Transform",
        'del': "Delete",
      }

      hoverMenuBtn.addEventListener('click', () => DesignConstructor.blockMenu(element, parent, BlockOptions))
    }
  }

  static blockMenu(element, parent, options) {
    ActiveMode = null
    let last = document.getElementById('lab-block-menu')
    if (!last) {
      const menuWrap = lab_design_system('div', 'block-menu-wrap', parent, '', 'none', ['design', 'blockMenuWrap'])
      const menu = lab_design_system('div', 'block-menu', menuWrap, '', 'none', ['design', 'blockMenu'])
      Object.keys(options).forEach(e => {
        const item = lab_design_system('div', Designer.ID(), menu, '', 'none', ['design', 'blockMenuItem'])
        const itemIcon = lab_design_system('img', Designer.ID(), item, '0', 'none')
        const itemText = lab_design_system('span', Designer.ID(), item, options[e], 'none')
        itemIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${e}-icon.svg`)
        itemIcon.style.width = '15px'

        item.addEventListener('click', () => {
          selected = null
          if (e == 'transform') selected = element
          Designer[e](element)
        })
      })
      Designer.Proportions(menuWrap, element, parent, { top: -23, left: -42 })
      const menuRect = menuWrap.getBoundingClientRect()

      if (menuRect.left + menuRect.width > window.innerWidth) {
        let options = JSON.parse(localStorage.getItem('options'))
        menuWrap.style.left = window.innerWidth - menuRect.width - (options.sideMenu ? 100 : 0) + 'px'
      }

      menuWrap.addEventListener('mouseleave', () => menuWrap.remove())
    } else last.remove()
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

  static BlockResize() {
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

  }

  static closeAll() {
    const menu = document.getElementById('lab-side-menu')
    const MenuBtn = document.getElementById('lab-show-side-menu')
    const topSettins = document.getElementById('lab-top-settings')
    const tools = document.getElementById('lab-toolbar')
    const styleMenu = document.getElementById('lab-elementMenu')
    DesignConstructor.addClass(menu, 'design', 'hideSide')
    DesignConstructor.addClass(MenuBtn, 'design', 'hideMenu')
    DesignConstructor.addClass(tools, 'design', 'hideToolbar')
    DesignConstructor.addClass(topSettins, 'design', 'hideTop')
    styleMenu && styleMenu.remove()
  }
}

function Options(obj, key, value) {
  obj[key] = value ? value : !obj[key]
  localStorage.setItem('options', JSON.stringify(obj))
}

let contentTags = ["DIV", "SECTION"]

function design_mode() {
  const designBody = lab_design_system('div', "designBody", rootLayer, '', '', ['design', 'body'])
  let options = JSON.parse(localStorage.getItem('options')) || {
    'vpm': "landscape",
    'zoom': 100,
    'toolBar': true,
    'settingsBar': true,
    'sideMenu': true,
  }

  //SIDE MENU

  const menu = lab_design_system('div', 'side-menu', designBody, '', '', ['design', 'side'])
  const menuButton = DesignConstructor.button(menu, ['design', 'showMenu'], '', 'arrow_menu_close')

  menuButton.addEventListener('click', () => {
    DesignConstructor.toggleClass(menu, 'design', 'side', 'hideSide')
    DesignConstructor.toggleClass(menuButton, 'design', 'showMenu', 'hideMenu')
    Options(options, 'sideMenu')
  })

  if (!options.sideMenu) {
    DesignConstructor.addClass(menu, 'design', 'hideSide')
    DesignConstructor.addClass(menuButton, 'design', 'hideMenu')
  }

  const elementsBox = lab_design_system('div', "elements-box", menu)
  elementsBox.style.margin = "40px 0 0 0"

  const elementsTitle = lab_design_system('span', Designer.ID(), elementsBox, "Elements", '', ['design', 'templatesHeading'])
  const elementsWrap = lab_design_system('div', Designer.ID(), elementsBox, '', '', ['design', 'templates'])

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

  const pageWrap = lab_design_system('div', "user-page-wrap", designBody, '', '', ['design', 'pageWrap'])
  const page = lab_design_system('div', "user-page", pageWrap, '', '', ['design', 'page'])
  page.classList.remove('escape')

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


  //USER PAGE END

  //TOOLBAR

  const toolBar = lab_design_system('div', "toolbar", designBody, '', '', ['design', 'toolbar'])

  const tools = ['cursor', 'resize', 'shape', 'pen', 'text', 'actions', 'img']

  tools.forEach(tool => {
    const toolBtn = DesignConstructor.button(toolBar, ['design', 'toolbarItem'], '', tool, 'toolBtn')
    toolBtn.addEventListener('click', () => {

      let last = document.querySelector('.lab-toolBtn.active')
      if (last) {
        last.style.background = 'transparent'
        last.classList.remove('active')
      }
      toolBtn.classList.add('active')
      toolBtn.style.background = '#EBEEFF'
      Designer.mode(tool)
    })
  })

  const blind = lab_design_system('button', "blind-tools", toolBar, '', '', ['design', 'blindTools'])
  blind.addEventListener('click', () => {
    DesignConstructor.toggleClass(toolBar, 'design', 'toolbar', 'hideToolbar')
    Options(options, 'toolBar')
  })

  if (!options.toolBar) DesignConstructor.addClass(toolBar, 'design', 'hideToolbar')

  //TOPSETTINGS

  const topSettings = lab_design_system('div', "top-settings", designBody, '', '', ['design', 'top'])
  const settingsBtn = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'settings-white')
  const responsiveList = ["landscape", "portrait"]
  settingsBtn.addEventListener('click', () => {
    lab_load_component('/D/C/UI/GLOB/lab_app_menu.js')
  })
  function setVpm(vpm) {
    Designer.removePointer()
    if (vpm == 'landscape') {
      pixelScreen.innerHTML = window.outerWidth + 'px'
      page.style.maxWidth = 'none'
      page.style.maxHeight = 'none'
    }

    if (vpm == 'portrait') {
      pixelScreen.innerHTML = '414px'
      page.style.maxWidth = '414px'
      page.style.maxHeight = '896px'
    }
  }

  responsiveList.map(e => {
    const btn = DesignConstructor.button(topSettings, ['design', 'screenBtn'], '', e, 'screen-btn')

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

  const pixelScreen = lab_design_system('div', "top-settings-pixel", topSettings, window.outerWidth + ' px', 0, ['design', 'pixelView'])

  setVpm(options.vpm)

  const pixelSettings = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'settings-white')
  pixelSettings.querySelector('img').style.width = '15px'

  const setPage = DesignConstructor.button(topSettings, ['design', 'setPage'], '', 'page-box')

  setPage.appendChild(document.createTextNode(sectionElementsObject.section))
  const arrow = lab_design_system('img', 'page-arrow', setPage)
  arrow.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/chevron_right.svg`)

  setPage.addEventListener('click', () => {
    let last = document.getElementById('lab-page-list')
    if (last) last.remove()
    const list = lab_design_system('div', 'pages-list', setPage, '', '', ['design', 'pagesList'])

    sectionElementsObject.sections.forEach(e => {
      if (e != sectionElementsObject.section) {
        const btn = lab_design_system('a', `pages-list-${e}`, list, e, '', ['design', 'pageLink'])
        btn.setAttribute('href', `./${e}`)
      }
    })
    list.addEventListener('mouseleave', () => list.remove())
  })

  const sizeSwitcher = lab_design_system('input', 'sliderRange', topSettings, null, null)
  sizeSwitcher.setAttribute('type', "range")
  sizeSwitcher.setAttribute('min', "1")
  sizeSwitcher.setAttribute('max', "100")
  sizeSwitcher.setAttribute('type', "range")
  sizeSwitcher.setAttribute('value', "100")

  const size = lab_design_system('div', 'screen-size', topSettings, options.zoom + '%', '', ['design', 'pixelView'])
  size.style.width = "60px"
  sizeSwitcher.value = options.zoom
  page.style.scale = options.zoom / 100

  sizeSwitcher.oninput = function () {
    size.innerHTML = this.value + "%"
    Options(options, 'zoom', this.value)
    page.style.scale = this.value / 100
  }

  const view = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'visibility')
  view.addEventListener('click', DesignConstructor.closeAll)
  const download = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'download')

  const blindTop = lab_design_system('button', "blind-btn", topSettings, '', '', ['design', 'blind'])

  blindTop.addEventListener('click', () => {
    DesignConstructor.toggleClass(topSettings, 'design', 'top', 'hideTop')
    Options(options, 'settingsBar')
  })

  if (!options.settingsBar) DesignConstructor.addClass(topSettings, 'design', 'hideTop')

  //CODE MENU

  const codeMenu = lab_design_system('div', 'code-box', designBody, '', 'none', ['design', 'codeBox'])
  const codeMenuButton = DesignConstructor.button(codeMenu, ['design', 'codeBoxShow'], '', 'code-btn')
  const codeWrapper = lab_design_system('div', "code-wrapper", codeMenu, '', '', ['design', 'codeWrapper'])
  codeMenuButton.addEventListener('click', () => {
    DesignConstructor.toggleClass(codeMenu, 'design', 'codeBox', 'codeBoxActive')
    DesignConstructor.toggleClass(codeMenuButton, 'design', 'codeBoxShow', 'codeBoxShowActive')

    document.getElementById('lab-user-page').innerHTML.split('>').forEach(e => {
      codeWrapper.innerText += e + '>\n            '
    })
  })

  //CODE MENU END

  const fileInput = lab_design_system('input', 'file-input', designBody, '', '', ['design', 'noneFile'])
  fileInput.setAttribute('type', 'file')

  DesignConstructor.BlockResize()
  lab_fade_in_recursively(designBody, 0.3)
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function rgb2hex(rgb) {
  var rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
};

design_mode()

function StylesMenu(item) {
  const lastSelected = document.querySelector('.selectedItem')
  const box = document.getElementById('lab-designBody')

  item.classList.add('selectedItem')

  const itemStyles = window.getComputedStyle(item)

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

  if (lastSelected && lastSelected.id != item.id) {
    box.removeChild(document.getElementById('lab-elementMenu'))
    lastSelected.classList.remove('selectedItem')
    renderMenu()
  }
  if (!lastSelected) renderMenu()

  function renderMenu() {
    const last = document.getElementById('lab-elementMenu')
    if (last) last.remove()

    const elementMenu = lab_design_system('div', "elementMenu", box, '', '', ['design', 'elementMenu'])
    const elementMenuButtons = lab_design_system('div', "elementMenu-buttons", elementMenu, '', '', ['design', 'StyleButtons'])
    const elementMenuBody = lab_design_system('div', "elementMenuBody", elementMenu, '', '', ['design', 'elementMenuBody'])
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
      }
      if (param == 'additional') {
        const settings = lab_design_system('div', "menu-style-settings", elementMenuBody, '', '', ['design', 'styleGrid'])

        const tag = DesignConstructor.dropList(settings, ['div', 'span', 'h1'], item.tagName, (e) => {
          item.tagName = e
        })
        tag.style.flex = '0 1 35%'


        const fontFamily = DesignConstructor.dropList(settings, ['Arial', 'Arial2', 'Arial3'], css['font-family'], (e) => Designer.WriteStyle(item, 'fontFamily', e))

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
    const page = document.getElementById('lab-user-page')
    page.addEventListener('click', () => {
      item.classList.remove('selectedItem')
      if (elementMenu) elementMenu.remove()
    })
  }
}


window.addEventListener('resize', () => {
  Designer.removePointer()
})



