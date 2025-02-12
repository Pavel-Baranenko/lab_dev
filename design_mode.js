
const oldSRC = 'https://laboranth.tech/D/R/IMG/CLA/'

let styles = styles_d
let lab_ui_styles_d = styles_d

let ActiveMode
let selected

const uditableTags = ["SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "P", "I", "B", "STRONG", "FONT", "EM", "SMALL", "SUP", "SUB", "Q", "BLOCKQUOTE"]

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
    if (!labIsElementDragging && !isDragging) {
      const page = document.getElementById('lab-user-page')
      if (!element.classList.contains('lab-none') && !element.classList.contains('lab-transform')) {
        const last = document.querySelector('.lab-active-element')
        if (!last) DesignConstructor.createOptions(element, page)
        else if (last.id != element.id) {
          last.classList.remove('lab-active-element')
          DesignConstructor.createOptions(element, page)
        }
        if (uditableTags.includes(element.tagName)) element.contentEditable = true
      }
    } else {
      let last = document.querySelector('#lab-HoverBox')
      if (last) {
        last.remove()
        document.querySelector('#lab-HoverBoxbtn').remove()
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
    const page = document.getElementById('lab-user-page')
    const pagePos = page.getBoundingClientRect()

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
    if (["lab-user-page-wrap", "lab-user-page"].includes(el.id)) {
      return
    }
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
          if (direction == 'bottom') {
            top = pos.height - 4
            left = -(pos.width / 2 + 12)
          } else if (direction == 'right') {
            top = (pos.height / 2 - 4)
            left = -12
          }
        }

        let last = document.getElementById('lab-pointer')
        if (!last || !last.classList.contains(direction) || mouseIsDown) {
          Designer.removePointer()
          const pointer = lab_design_system('div', 'pointer', page, '', `none ${direction}`, ['design', 'pointer'])
          pointer.style.opacity = 1
          pointer.style.transition = 'all 0.1s ease'

          if (['left', 'right'].includes(direction)) pointer.style.rotate = '90deg'

          Designer.Proportions(pointer, el, page, { top: top, left: left })
        }
      }

      if (y > (pos.y + pos.height - 10) && y < (pos.y + pos.height + 50)) writePointer('bottom')

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
    selectedShape = modeName
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
      if (selectedShape == modeName) {
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
            let input = document.getElementById('lab-img-input')
            input.click()
            function IMG(e) {
              const fileInfo = e.target.files[0];
              item.setAttribute('src', URL.createObjectURL(fileInfo))
              input.removeEventListener('change', IMG)
            }
            input.addEventListener('change', IMG)
          }
        }

        // if (modeName == 'shape') {
        //   const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        //   const rect = document.createElementNS(svg.namespaceURI, "rect");
        //   svg.style.position = 'absolute'
        //   svg.style.width = areaPos.width / pagePos.width * 100 + '%'
        //   svg.style.height = areaPos.height / pagePos.height * 100 + '%'
        //   svg.style.left = (areaPos.x - pagePos.x) / pagePos.width * 100 + '%'
        //   svg.style.top = (areaPos.y - pagePos.y) / pagePos.height * 100 + '%'
        //   rect.classList.add('lab-none')
        //   rect.setAttribute("width", '100%');
        //   rect.setAttribute("height", '100%');
        //   svg.setAttribute("fill", "#FED05E");
        //   rect.style.pointerEvents = 'none'
        //   svg.appendChild(rect);
        //   page.appendChild(svg);
        // }
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
      btnIcon.setAttribute('src', `${oldSRC}${icon}.svg`)
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
      lab_fade_in_recursively(parent, 0.3)
    }
  }

  static blockMenu(element, parent, options) {
    ActiveMode = null
    let last = document.getElementById('lab-block-menu')
    if (last) {
      last.remove()
    }
    const menuWrap = lab_design_system('div', 'block-menu-wrap', parent, '', 'none', ['design', 'blockMenuWrap'])
    console.log(menuWrap);

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
    lab_fade_in_recursively(menuWrap, 0.3)
  }

  static toggleClass(el, styleList, usual, active) {
    Object.keys(lab_ui_styles_d[styleList][active].default).forEach(e => {
      if (el.style[e] == lab_ui_styles_d[styleList][active].default[e]) {
        el.style[e] = lab_ui_styles_d[styleList][usual].default[e]
      } else {
        el.style[e] = lab_ui_styles_d[styleList][active].default[e]
      }
    })
  }

  static addClass(el, styleList, className) {
    Object.keys(lab_ui_styles_d[styleList][className].default).forEach(e => {
      el.style[e] = lab_ui_styles_d[styleList][className].default[e]
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
function design_mode() {
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
      'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
      'title': "div",
      'template': {
        'landscape': {
          'id': "lab-section",
          'tag': "div",
          'classes': "lab-empty-section",
          'root': true,
          'styles': {
            'position': "relative"
          }
        },
        'portrait': {
          'id': "lab-section",
          'tag': "div",
          'classes': "lab-empty-section",
          'root': true,
          'styles': {
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
    }
  }

  function Options(obj, key, value) {
    obj[key] = value ? value : !obj[key]
    localStorage.setItem('options', JSON.stringify(obj))
  }

  const designBody = document.querySelector('body')

  let options = JSON.parse(localStorage.getItem('options')) || {
    'vpm': "landscape",
    'zoom': 100,
    'toolBar': true,
    'settingsBar': true,
    'sideMenu': true,
  }
  // lab_save_section(options.vpm)

  //SIDE MENU

  const menu = lab_design_system('div', 'side-menu', designBody, '', 'scrollable', ['design', 'side'])
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

  const elementsBox = lab_design_system('div', "elements-box", menu, '', 'scrollable', ['design', 'elementsBox'])

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

  let pageWrap
  if (!document.querySelector('#lab-user-page')) {
    pageWrap = lab_design_system('div', "user-page-wrap", designBody, '', 'scrollable', ['design', 'pageWrap'])
    pageWrap.classList.remove('escape')
    pageWrap.setAttribute('class', 'lab-scrollable')
  } else {
    pageWrap = document.querySelector('#lab-user-wrap')
  }

  let page
  if (!document.querySelector('#lab-user-page')) {
    page = lab_design_system('div', "user-page", pageWrap, '', '', ['design', 'page'])
  } else {
    page = document.querySelector('#lab-user-page')
  }
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

  const tools = {
    'cursor': [{
      value: 'cursor',
      icon: `${oldSRC}cursor.svg`
    },
    {
      value: 'group',
      icon: `${oldSRC}cursor.svg`
    }],
    'rotate': "rotate",
    'move': "move",
    'resize': "resize",
    'shape': [{
      value: 'shape',
      icon: `${oldSRC}shape.svg`
    },
    {
      value: 'circle',
      icon: `${oldSRC}Ellipse.svg`
    },
    {
      value: 'triangle',
      icon: `${oldSRC}triangle.svg`
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
      // Designer.mode(tool)
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

  function setVpm(vpm) {
    Designer.removePointer()
    if (vpm == 'landscape') {
      pixelScreen.innerHTML = window.outerWidth + 'px'
      page.style.maxWidth = 'none'
      page.style.maxHeight = 'none'
    }

    if (vpm == 'portrait') {
      pixelScreen.innerHTML = '414px '
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
  pixelScreen.style.width = '65px'
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

  const styleMenu = lab_design_system('div', 'style-box', designBody, '', 'none', ['design', 'styleWrapper'])
  const styleWrap = lab_design_system('div', 'style-wrap', styleMenu, '', 'none')

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
  codeMenuButton.addEventListener('click', () => {
    codeWrapper.innerHTML = ''
    DesignConstructor.toggleClass(codeMenu, 'design', 'codeBox', 'codeBoxActive')
    DesignConstructor.toggleClass(codeMenuButton, 'design', 'codeBoxShow', 'codeBoxShowActive')
    document.getElementById('lab-user-page').innerHTML.split('>').forEach(e => {
      codeWrapper.innerText += e + '>\n            '
    })
  })

  //CODE MENU END

  const fileInput = lab_design_system('input', 'img-input', designBody, '', '', ['design', 'noneFile'])
  fileInput.setAttribute('type', 'file')

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
  };

  function StylesMenu(item) {
    const lastSelected = document.querySelector('.selectedItem')
    const box = document.getElementById('lab-style-wrap')
    const itemStyles = window.getComputedStyle(item)
    selectedElementChangeId = item
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
      lastSelected.classList.remove('selectedItem')
      renderMenu()
    }
    if (!lastSelected) renderMenu()

    function renderMenu() {
      item.classList.add('selectedItem')
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

      lab_fade_in_recursively(box, 0.3)
    }
  }
}

design_mode()

function selectTool(toolName) {
  selectedShape = null
  elementDragging = false
  if (toolName == 'pen') {
    selectedShape = 'feather'
  }
  else if (toolName == 'move') {
    labIsElementDragging = true
  }
  else if (toolName == 'resize') {
    labResizeElements()
  }
  else if (toolName == 'rotate') {
    selectedShape = 'rotate'
    activeRotateElement()
  }
  else if (toolName == 'text') {
    Designer.mode('text')
  }
  else if (toolName == 'img') {
    Designer.mode('img')
  }
  else if (toolName == 'resize') {
    Designer.mode('resize')
  }
  else if (toolName == 'shape') {
    isControlEnabled = false
    selectedShape = 'square'
    elementDragging = false

    // window.addEventListener('mousedown', startDrawing)
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


//FUNCTIONS

// TRANSLATION
function getAllDescendantsExcluding(element, excludedSelectors = [], descendants = []) {
  const children = element.children
  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    const isExcluded = excludedSelectors.some(selector => child.closest(selector))
    if (!isExcluded) {
      descendants.push(child)
      getAllDescendantsExcluding(child, excludedSelectors, descendants)
    }
  }
  return descendants
}

function labStartDragging(e) {
  if (!labIsElementDragging || e.target.tagName === "BODY" || e.target.className === "escape") {
    return
  }

  let targetElement = e.target


  if (targetElement.tagName === "CANVAS" && targetElement.parentElement.classList.contains('lab-canvas-container')) {
    targetElement = targetElement.parentElement
  }

  if (e.target.style.position === "") {
    e.target.style.position = "absolute"
  }

  if (e.type === 'pointerdown') {
    labElement = targetElement
    labStartPoint.x = e.clientX
    labStartPoint.y = e.clientY
    labStartOffset.x = parseFloat(window.getComputedStyle(labElement).left) || 0
    labStartOffset.y = parseFloat(window.getComputedStyle(labElement).top) || 0
  } else if (e.type === 'touchstart') {
    labElement = e.targetTouches[0].target
    labStartPoint.x = e.targetTouches[0].clientX
    labStartPoint.y = e.targetTouches[0].clientY
    labStartOffset.x = parseFloat(window.getComputedStyle(labElement).left) || 0
    labStartOffset.y = parseFloat(window.getComputedStyle(labElement).top) || 0
  }

  const designers_bar = document.querySelector('#lab-designers-bar')
  if (labElement.id === 'background' || labElement === newMarker || labElement === btnRotateMarker ||
    (designers_bar &&
      (labElement.id === 'lab-designers-bar' || designers_bar.contains(labElement))) ||
    labElement.closest('#lab-selected-elements')) {
    return
  }
  if (window.getComputedStyle(labElement).position === "static") {
    return
  }

  if (e.type === 'pointerdown') {
    document.addEventListener('mousemove', labMoveElement)
    document.addEventListener('mouseup', labStopMovingElement)
  } else if (e.type === 'touchstart') {
    document.addEventListener('touchmove', labMoveElement)
    document.addEventListener('touchend', labStopMovingElement)
  }
}

function labMoveElement(e) {
  // e.preventDefault()
  let currentX, currentY
  if (e.type === 'mousemove') {
    currentX = e.clientX
    currentY = e.clientY
  } else if (e.type === 'touchmove') {
    currentX = e.targetTouches[0].clientX
    currentY = e.targetTouches[0].clientY
  }

  let deltaX = currentX - labStartPoint.x
  let deltaY = currentY - labStartPoint.y

  labElement.style.left = `${labStartOffset.x + deltaX}px`
  labElement.style.top = `${labStartOffset.y + deltaY}px`

  const excludedSelectors = ['#lab-selected-elements', '#lab-designers-bar']
  const filteredDescendants = getAllDescendantsExcluding(document.body, excludedSelectors)

  let rect1 = labElement.getBoundingClientRect()

  for (let i = 0; i < filteredDescendants.length; i++) {
    let otherElement = filteredDescendants[i]
    if (otherElement !== labElement) {
      let rect2 = otherElement.getBoundingClientRect()
      if (isClose(rect1, rect2)) {
        labalignElements(labElement, otherElement, rect1, rect2)
      }
    }
  }
}

function labalignElements(element, otherElement, rect1, rect2) {
  let elementRect = element.getBoundingClientRect()
  let newElementLeft_px, newElementTop_px

  if (Math.abs(rect1.right - rect2.left) < 10) {
    newElementLeft_px = rect2.left - elementRect.width
  } else if (Math.abs(rect1.left - rect2.right) < 10) {
    newElementLeft_px = rect2.right
  } else if (Math.abs(rect1.bottom - rect2.top) < 10) {
    newElementTop_px = rect2.top - elementRect.height
  } else if (Math.abs(rect1.top - rect2.bottom) < 10) {
    newElementTop_px = rect2.bottom
  }
  let currentLeft = parseFloat(window.getComputedStyle(element).left)
  let currentTop = parseFloat(window.getComputedStyle(element).top)

  if (typeof newElementLeft_px !== 'undefined') {
    element.style.left = currentLeft + (newElementLeft_px - elementRect.left) + 'px'
  }

  if (typeof newElementTop_px !== 'undefined') {
    element.style.top = currentTop + (newElementTop_px - elementRect.top) + 'px'
  }
}

function labStopMovingElement() {
  document.removeEventListener('mousemove', labMoveElement)
  document.removeEventListener('mouseup', labStopMovingElement)
  document.removeEventListener('touchmove', labMoveElement)
  document.removeEventListener('touchend', labStopMovingElement)

  let finalLeft = parseFloat(window.getComputedStyle(labElement).left) || 0
  let finalTop = parseFloat(window.getComputedStyle(labElement).top) || 0

  let finalLeftSvw = (finalLeft / window.innerWidth) * 100
  let finalTopSvh = (finalTop / window.innerHeight) * 100

  labElement.style.left = `${finalLeftSvw}svw`
  labElement.style.top = `${finalTopSvh}svh`

  labElement = null
}

// SIMPLE COPY PASTE
function copyElement() {
  if (!selectedElementChangeId) return
  if (selectedElementChangeId.id === 'background') return
  copiedElement = selectedElementChangeId.cloneNode(true)
}

function pasteElement() {
  if (copiedElement) {
    let newElement = copiedElement.cloneNode(true);
    assignRandomId(newElement)
    newElement.style.position = 'fixed'
    newElement.style.top = '0'
    newElement.style.left = '0'
    newElement.style.border = '0'
    document.body.appendChild(newElement);

    function generateRandomName() {
      return 'input_' + Math.random().toString(36).substring(2, 10)
    }

    let labels = Array.from(newElement.querySelectorAll('label[for]'))
    labels.forEach(label => {
      let forAttribute = label.getAttribute('for');
      let associatedInput = newElement.querySelector(`[name="${forAttribute}"]`)
      if (associatedInput) {
        if (!associatedInput.getAttribute('name')) {
          let randomName = generateRandomName()
          associatedInput.setAttribute('name', randomName)
        }
        label.setAttribute('for', associatedInput.id)
      }
    })

    const designers_bar = document.querySelector('#lab-designers-bar')
    let designerBarChildren = designers_bar ? Array.from(designers_bar.querySelectorAll('*')) : [];
    allElements = Array.from(document.querySelectorAll('body *')).filter(child =>
      child.tagName.toLowerCase() !== 'script' &&
      child.id !== 'lab-designers-bar' &&
      !designerBarChildren.includes(child)
    )
  }
}

function assignRandomId(element) {
  if (element.nodeType === 1) {
    element.id = generateUniqueId();
    for (let child of element.children) {
      assignRandomId(child)
    }
  }
}

function generateUniqueId() {
  let randomDigit = Math.floor(Math.random() * 100001)
  return 'lab-random-ID' + randomDigit
}

//MULTIPLE COPY PASTE
function copyElementMultiple() {
  if (!startMultipleSelect) {
    return
  }
  copiedElementsMultiple = clickedElementGroup.map(element => element.cloneNode(true))
}

function pasteElementsMultiple() {
  if (copiedElementsMultiple.length > 0) {
    copiedElementsMultiple.forEach(copiedElement => {
      let newElement = copiedElement.cloneNode(true)
      assignRandomId(newElement)
      newElement.style.position = 'fixed'
      newElement.style.top = '0'
      newElement.style.left = '0'
      removeBorders(newElement)
      document.body.appendChild(newElement)

      function generateRandomName() {
        return 'input_' + Math.random().toString(36).substring(2, 10)
      }

      let labels = Array.from(newElement.querySelectorAll('label[for]'))
      labels.forEach(label => {
        let forAttribute = label.getAttribute('for')
        let associatedInput = newElement.querySelector(`[name="${forAttribute}"]`)
        if (associatedInput) {
          if (!associatedInput.getAttribute('name')) {
            let randomName = generateRandomName()
            associatedInput.setAttribute('name', randomName)
          }
          label.setAttribute('for', associatedInput.id)
        }
      })

      const designers_bar = document.querySelector('#lab-designers-bar')
      let designerBarChildren = designers_bar ? Array.from(designers_bar.querySelectorAll('*')) : [];
      allElements = Array.from(document.querySelectorAll('body *')).filter(child =>
        child.tagName.toLowerCase() !== 'script' &&
        child.id !== 'lab-designers-bar' &&
        !designerBarChildren.includes(child)
      )
    })
  }
}

function removeBorders(element) {
  element.style.border = '0'
  element.style.borderWidth = '0'
  element.style.borderStyle = 'none'
  element.style.borderColor = 'transparent'
  Array.from(element.children).forEach(child => removeBorders(child))
}

function startRotate(event) {
  isRotating = true
  rotationStartAngle = getRotationAngle(selectedElementChangeId)
  const { clientX, clientY } = getClientCoordinates(event)
  const elementRect = selectedElementChangeId.getBoundingClientRect()
  const centerX = elementRect.left + elementRect.width / 2
  const centerY = elementRect.top + elementRect.height / 2
  initialAngle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI)
  document.addEventListener('mousemove', rotateElement)
  document.addEventListener('touchmove', rotateElement)
}

function stopRotate() {
  isRotating = false
  document.removeEventListener('mousemove', rotateElement)
  document.removeEventListener('touchmove', rotateElement)
  clearTimeout(rotationEndTimer)
  rotationEndTimer = setTimeout(() => {
    rotationEndTimer = null
  }, 100)
}

function rotateElement(event) {
  let clientX, clientY
  if (event.type.startsWith('mouse')) {
    clientX = event.clientX
    clientY = event.clientY
  } else if (event.type.startsWith('touch')) {
    clientX = event.touches[0].clientX
    clientY = event.touches[0].clientY
  }

  if (isRotating) {
    const elementRect = selectedElementChangeId.getBoundingClientRect()
    const centerX = elementRect.left + elementRect.width / 2
    const centerY = elementRect.top + elementRect.height / 2
    const newAngle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI)
    const rotationDelta = newAngle - initialAngle
    currentAngle = rotationStartAngle + rotationDelta
    selectedElementChangeId.style.transform = `rotate(${currentAngle}deg)`
  }
}

document.addEventListener('click', (event) => {
  const isTargetNewDiv = newDivs.some(div => div === event.target)
  console.log(xResize);

  if (xrotate === 1) {
    if (event.target !== selectedElementChangeId && !isTargetNewDiv) {
      activeRotateElement()
    }
  } else {
    if (event.target.id = 'lab-rotate-tool') {
      activeRotateElement()
    }
  }
})

function getClientCoordinates(event) {
  if (event.type.startsWith('mouse')) {
    return { clientX: event.clientX, clientY: event.clientY }
  } else if (event.type.startsWith('touch')) {
    return { clientX: event.touches[0].clientX, clientY: event.touches[0].clientY }
  }
  return { clientX: 0, clientY: 0 }
}

function getRotationAngle(element) {
  const style = window.getComputedStyle(element)
  const transform = style.getPropertyValue('transform')
  let matrix = transform.match(/^matrix\((.+)\)$/)
  if (matrix) {
    matrix = matrix[1].split(', ')
    if (matrix.length === 6) {
      return Math.atan2(parseFloat(matrix[1]), parseFloat(matrix[0])) * (180 / Math.PI)
    }
  }
  return 0
}


function removeDivs() {
  newDivs.forEach(div => div.remove())
  newDivs = []
}

function createSvgHandle(positionAttributes) {
  const newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  newCircle.setAttribute('class', 'escape')
  newCircle.setAttribute('r', '5')
  newCircle.setAttribute('fill', '#07afcd')

  Object.keys(positionAttributes).forEach(key => newCircle.setAttribute(key, positionAttributes[key]))
  selectedElementChangeId.appendChild(newCircle)
  newCircle.addEventListener('mousedown', startRotate)
  newCircle.addEventListener('touchstart', startRotate)
}

function activeRotateElement() {

  if (selectedElementChangeId.style.position === '') {
    selectedElementChangeId.style.position = 'relative'
  }

  if (selectedElementChangeId.id === 'background') {
    return
  }

  selectedShape = null
  isControlEnabled = false
  xrotate += 1
  elementDragging = false

  if (xrotate === 1) {
    document.removeEventListener('click', addBorderElement)

    if (selectedElementChangeId.tagName === 'SVG' || selectedElementChangeId.tagName === 'svg') {
      createSvgHandle({ cx: '0', cy: '0' })
      createSvgHandle({ cx: '100%', cy: '0' })
      createSvgHandle({ cx: '0', cy: '100%' })
      createSvgHandle({ cx: '100%', cy: '100%' })
    } else if (selectedElementChangeId.tagName === 'CANVAS') {
      let container

      if (selectedElementChangeId.parentElement.classList.contains('lab-canvas-container')) {
        container = selectedElementChangeId.parentElement
      } else {
        container = document.createElement('div')
        container.style.position = 'absolute'
        container.style.top = `${selectedElementChangeId.offsetTop}px`
        container.style.left = `${selectedElementChangeId.offsetLeft}px`
        container.style.width = `${selectedElementChangeId.offsetWidth}px`
        container.style.height = `${selectedElementChangeId.offsetHeight}px`
        container.style.transformOrigin = 'center'
        container.style.pointerEvents = 'none'

        document.body.appendChild(container)
        container.appendChild(selectedElementChangeId)
        selectedElementChangeId.style.position = 'absolute'
        selectedElementChangeId.style.top = ''
        selectedElementChangeId.style.left = ''
        selectedElementChangeId.style.right = ''
        selectedElementChangeId.style.bottom = ''
        selectedElementChangeId.style.width = '100%'
        selectedElementChangeId.style.height = '100%'
        selectedElementChangeId.style.pointerEvents = 'none'
      }
      const handleSize = 10

      const handles = ['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position) => {
        const handle = document.createElement('div')
        handle.setAttribute('class', 'escape')
        handle.dataset.position = position
        handle.style.position = 'absolute'
        handle.style.width = `${handleSize}px`
        handle.style.height = `${handleSize}px`
        handle.style.backgroundColor = 'cyan'
        handle.style.pointerEvents = 'auto'
        if (selectedElementChangeId.style.zIndex) {
          handle.style.zIndex = selectedElementChangeId.style.zIndex + 1
        }
        container.appendChild(handle)
        return handle
      })

      // Fonction pour mettre à jour les positions des handles
      function updateHandlePositions() {
        const width = container.offsetWidth
        const height = container.offsetHeight

        handles.forEach((handle) => {
          switch (handle.dataset.position) {
            case 'top-left':
              handle.style.left = `${-handleSize / 2}px`
              handle.style.top = `${-handleSize / 2}px`
              break
            case 'top-right':
              handle.style.left = `${width - handleSize / 2}px`
              handle.style.top = `${-handleSize / 2}px`
              break
            case 'bottom-left':
              handle.style.left = `${-handleSize / 2}px`
              handle.style.top = `${height - handleSize / 2}px`
              break
            case 'bottom-right':
              handle.style.left = `${width - handleSize / 2}px`
              handle.style.top = `${height - handleSize / 2}px`
              break
          }
        })
      }

      // Calculer l'angle entre la souris et le centre du conteneur
      function calculateAngle(mouseX, mouseY) {
        const rect = container.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        return Math.atan2(mouseY - centerY, mouseX - centerX)
      }

      // Détecter quand l'utilisateur commence à faire tourner
      container.addEventListener('mousedown', (event) => {
        if (event.target.dataset.position) {
          isDragging = true
          startAngle = calculateAngle(event.clientX, event.clientY) - rotationAngle
        }
      })

      window.addEventListener('mousemove', (event) => {
        if (isDragging) {
          const currentAngle = calculateAngle(event.clientX, event.clientY)
          rotationAngle = currentAngle - startAngle
          container.style.transform = `rotate(${rotationAngle}rad)`
        }
      })

      // Terminer la rotation lorsque la souris est relâchée
      window.addEventListener('mouseup', () => {
        isDragging = false
      })

      updateHandlePositions()
    } else {


      const rotateTopLeft = document.createElement('div')
      const rotateTopRight = document.createElement('div')
      const rotateBottomLeft = document.createElement('div')
      const rotateBottomRight = document.createElement('div')

      rotateTopLeft.setAttribute('class', 'escape lab-none')
      rotateTopRight.setAttribute('class', 'escape lab-none')
      rotateBottomLeft.setAttribute('class', 'escape lab-none')
      rotateBottomRight.setAttribute('class', 'escape lab-none')

      rotateTopLeft.style.zIndex = '99'
      rotateTopRight.style.zIndex = '99'
      rotateBottomLeft.style.zIndex = '99'
      rotateBottomRight.style.zIndex = '99'


      rotateTopLeft.setAttribute('id', 'lab-rotate-top-left')
      rotateTopRight.setAttribute('id', 'lab-rotate-top-right')
      rotateBottomLeft.setAttribute('id', 'lab-rotate-bottom-left')
      rotateBottomRight.setAttribute('id', 'lab-rotate-bottom-right')

      Object.assign(rotateTopLeft.style, { width: '10px', height: '10px', position: 'absolute', cursor: 'crosshair', backgroundColor: '#07afcd', top: '0', left: '0' })
      Object.assign(rotateTopRight.style, { width: '10px', height: '10px', position: 'absolute', cursor: 'crosshair', backgroundColor: '#07afcd', top: '0', right: '0' })
      Object.assign(rotateBottomLeft.style, { width: '10px', height: '10px', position: 'absolute', cursor: 'crosshair', backgroundColor: '#07afcd', bottom: '0', left: '0' })
      Object.assign(rotateBottomRight.style, { width: '10px', height: '10px', position: 'absolute', cursor: 'crosshair', backgroundColor: '#07afcd', bottom: '0', right: '0' })

      selectedElementChangeId.appendChild(rotateTopLeft)
      selectedElementChangeId.appendChild(rotateTopRight)
      selectedElementChangeId.appendChild(rotateBottomLeft)
      selectedElementChangeId.appendChild(rotateBottomRight)

      console.log(selectedElementChangeId);
      console.log(rotateTopLeft);



      newDivs.push(rotateTopLeft)
      newDivs.push(rotateTopRight)
      newDivs.push(rotateBottomLeft)
      newDivs.push(rotateBottomRight)
      console.log(newDivs);

      rotateTopLeft.addEventListener('mousedown', startRotate)
      rotateTopLeft.addEventListener('touchstart', startRotate)

      rotateTopRight.addEventListener('mousedown', startRotate)
      rotateTopRight.addEventListener('touchstart', startRotate)

      rotateBottomLeft.addEventListener('mousedown', startRotate)
      rotateBottomLeft.addEventListener('touchstart', startRotate)

      rotateBottomRight.addEventListener('mousedown', startRotate)
      rotateBottomRight.addEventListener('touchstart', startRotate)
    }

    document.addEventListener('mouseup', stopRotate)
  } else if (xrotate === 2) {
    xrotate = 0
    removeDivs()
    document.addEventListener('click', addBorderElement)
  }
}

function activateMarker() {
  xMarker += 1
  selectedShape = null
  if (xMarker === 1) {
    let MarkerExisted = lab_local_storage_object('lab_Marker')
    if (!MarkerExisted) {
      newMarker = document.createElement('div')
      newMarker.style.width = "1px"
      newMarker.style.height = "100svh"
      newMarker.style.backgroundColor = "cyan"
      newMarker.style.top = "0%"
      newMarker.style.left = "50svw"
      newMarker.style.position = 'fixed'
      newMarker.style.display = 'block'
      newMarker.classList.add('escape')
      newMarker.style.cursor = 'col-resize'
      newMarker.style.zIndex = '9990'

      btnRotateMarker = document.createElement('div')
      btnRotateMarker.style.width = "1.5svw"
      btnRotateMarker.style.height = "1.5svw"
      btnRotateMarker.style.borderRadius = '50px 0 50px 50px'
      btnRotateMarker.style.backgroundColor = "cyan"
      btnRotateMarker.style.top = "0.5svh"
      btnRotateMarker.style.left = "-1.7svw"
      btnRotateMarker.style.position = 'absolute'
      btnRotateMarker.style.display = 'block'
      btnRotateMarker.style.cursor = 'pointer'

      document.body.appendChild(newMarker)
      newMarker.appendChild(btnRotateMarker)
      newMarker.addEventListener('mousedown', startDraggingMarker)
      newMarker.addEventListener('touchstart', startDraggingMarker)
      btnRotateMarker.addEventListener('click', rotateMarker)

      let markerData = {
        width: newMarker.style.width,
        height: newMarker.style.height,
        backgroundColor: newMarker.style.backgroundColor,
        top: newMarker.style.top,
        left: newMarker.style.left,
        position: newMarker.style.position
      }

      lab_local_storage_object_set('lab_Marker', markerData)
    } else {
      let storedMarker = JSON.parse(localStorage.getItem('lab_Marker'))
      newMarker = document.createElement('div')
      newMarker.style.width = storedMarker.width
      newMarker.style.height = storedMarker.height
      newMarker.style.backgroundColor = storedMarker.backgroundColor
      newMarker.style.top = storedMarker.top
      newMarker.style.left = storedMarker.left
      newMarker.style.position = storedMarker.position
      newMarker.style.display = 'block'
      newMarker.style.zIndex = '9990'
      newMarker.classList.add('escape')
      document.body.appendChild(newMarker)
      newMarker.addEventListener('mousedown', startDraggingMarker)
      newMarker.addEventListener('touchstart', startDraggingMarker)

      btnRotateMarker = document.createElement('div')
      btnRotateMarker.style.width = "1.5svw"
      btnRotateMarker.style.height = "1.5svw"
      btnRotateMarker.style.backgroundColor = "#00f6ff"
      btnRotateMarker.style.position = 'absolute'
      btnRotateMarker.style.display = 'block'
      btnRotateMarker.style.cursor = 'pointer'

      if (newMarker.style.width === '100svw') {
        newMarker.style.cursor = 'row-resize'
        btnRotateMarker.style.left = "0.5svw"
        btnRotateMarker.style.top = "-1.7svw"
        btnRotateMarker.style.borderRadius = '50px 0 50px 50px'
        btnRotateMarker.style.rotate = '90deg'
      } else {
        btnRotateMarker.style.top = "0.5svh"
        btnRotateMarker.style.left = "-1.7svw"
        btnRotateMarker.style.borderRadius = '50px 0 50px 50px'
        btnRotateMarker.style.rotate = '0deg'
        newMarker.style.cursor = 'col-resize'
      }

      newMarker.appendChild(btnRotateMarker)
      btnRotateMarker.addEventListener('click', rotateMarker)
    }
  } else if (xMarker === 2) {
    xMarker = 0
    if (newMarker) {
      newMarker.remove()
    }
  }
}

// MARKER AND TRANSLATION
function rotateMarker() {
  if (!newMarker || !btnRotateMarker) {
    console.error("newMarker or btnRotateMarker is null")
    return
  }
  xMarkerRotate += 1
  if (xMarkerRotate === 1) {
    newMarker.style.cursor = 'row-resize'
    newMarker.style.width = "100svw"
    newMarker.style.height = "1px"
    newMarker.style.top = "50svh"
    newMarker.style.left = "0%"
    btnRotateMarker.style.left = "0.5svw"
    btnRotateMarker.style.top = "-1.7svw"
    btnRotateMarker.style.rotate = '90deg'
    updateLocalStorageMarker()
  } else if (xMarkerRotate === 2) {
    xMarkerRotate = 0
    newMarker.style.width = "1px"
    newMarker.style.height = "100svh"
    newMarker.style.top = "0%"
    newMarker.style.left = "50svw"
    btnRotateMarker.style.top = "0.5svh"
    btnRotateMarker.style.left = "-1.7svw"
    btnRotateMarker.style.rotate = '0deg'
    newMarker.style.cursor = 'col-resize'
    updateLocalStorageMarker()
  }
}

function updateLocalStorageMarker() {
  if (newMarker) {
    let storedMarker = JSON.parse(localStorage.getItem('lab_Marker')) || {}
    storedMarker.width = newMarker.style.width
    storedMarker.height = newMarker.style.height
    storedMarker.backgroundColor = newMarker.style.backgroundColor
    storedMarker.top = newMarker.style.top
    storedMarker.left = newMarker.style.left
    storedMarker.position = newMarker.style.position
    localStorage.setItem('lab_Marker', JSON.stringify(storedMarker))
  }
}

function startDraggingMarker(e) {
  if (!newMarker) {
    console.error("newMarker is null");
    return;
  }
  let element = newMarker;
  if (window.getComputedStyle(element).position === "static") return;

  let initialMouseX = e.clientX || e.touches[0].clientX;
  let initialMouseY = e.clientY || e.touches[0].clientY;
  let computedStyle = window.getComputedStyle(element);
  let initialElementX = parseFloat(computedStyle.left);
  let initialElementY = parseFloat(computedStyle.top);
  let initialElementX_pct = (initialElementX / window.innerWidth) * 100;
  let initialElementY_pct = (initialElementY / window.innerHeight) * 100;

  function moveElement(event) {
    let clientX = event.clientX || event.touches[0].clientX;
    let clientY = event.clientY || event.touches[0].clientY;
    let deltaX = ((clientX - initialMouseX) / window.innerWidth) * 100;
    let deltaY = ((clientY - initialMouseY) / window.innerHeight) * 100;
    if (element.style.width === '100svw') {
      element.style.top = (initialElementY_pct + deltaY) + '%';
      applyCenterMagnetismY(element);
    } else if (element.style.height === '100svh') {
      element.style.left = (initialElementX_pct + deltaX) + '%';
      applyCenterMagnetism(element);
    }
    updateLocalStorageMarker();
    applyMagnetism(element);
  }
  function stopMoveElement() {
    document.removeEventListener('mousemove', moveElement);
    document.removeEventListener('mouseup', stopMoveElement);
    document.removeEventListener('touchmove', moveElement);
    document.removeEventListener('touchend', stopMoveElement);
  }
  document.addEventListener('mousemove', moveElement);
  document.addEventListener('mouseup', stopMoveElement);
  document.addEventListener('touchmove', moveElement);
  document.addEventListener('touchend', stopMoveElement);
}

// MARKER AIM
function applyCenterMagnetism(element) {
  const elements = Array.from(document.body.children)
  const viewportWidth = window.innerWidth
  const rect1 = element.getBoundingClientRect()

  elements.forEach(otherElement => {
    if (
      otherElement !== element &&
      !isDescendantOf(otherElement, 'lab-selected-elements') &&
      !isDescendantOf(otherElement, 'lab-designers-bar')
    ) {
      const rect2 = otherElement.getBoundingClientRect()
      const centerX1 = (rect1.left + rect1.width / 2)
      const centerX2 = (rect2.left + rect2.width / 2)

      if (Math.abs(centerX1 - centerX2) <= 20) {
        alignElementsCenterX(element, rect1, rect2, viewportWidth)
      }
    }
  })
}

function isDescendantOf(element, id) {
  let currentElement = element
  while (currentElement) {
    if (currentElement.id === id) {
      return true
    }

    currentElement = currentElement.parentElement
  }

  return false
}

function alignElementsCenterX(element, rect1, rect2, viewportWidth) {
  const centerX2 = (rect2.left + rect2.width / 2)
  const newLeft = centerX2 - (rect1.width / 2)
  element.style.position = 'fixed'
  element.style.left = `${newLeft}px`
}

function applyCenterMagnetismY(element) {
  const elements = Array.from(document.body.children)
  const viewportHeight = window.innerHeight
  const rect1 = element.getBoundingClientRect()

  elements.forEach(otherElement => {
    if (
      otherElement !== element &&
      !isDescendantOf(otherElement, 'lab-selected-elements') &&
      !isDescendantOf(otherElement, 'lab-designers-bar')
    ) {
      const rect2 = otherElement.getBoundingClientRect()
      const centerY1 = (rect1.top + rect1.height / 2)
      const centerY2 = (rect2.top + rect2.height / 2)

      if (Math.abs(centerY1 - centerY2) <= 20) {
        alignElementsCenterY(element, rect1, rect2, viewportHeight)
      }
    }
  })
}

function alignElementsCenterY(element, rect1, rect2, viewportHeight) {
  const centerY2 = (rect2.top + rect2.height / 2)
  const newTop = centerY2 - (rect1.height / 2)
  element.style.position = 'fixed'
  element.style.top = `${newTop}px`
}

// AIMING
function applyMagnetism(element) {
  let elements = [...document.body.children]

  elements = elements.filter(otherElement =>
    !isDescendantOf(otherElement, 'lab-selected-elements') &&
    !isDescendantOf(otherElement, 'lab-designers-bar')
  )

  let rect1 = element.getBoundingClientRect()

  for (let i = 0; i < elements.length; i++) {
    let otherElement = elements[i]

    if (otherElement !== element) {
      let rect2 = otherElement.getBoundingClientRect()

      if (isClose(rect1, rect2)) {
        alignElements(element, otherElement, rect1, rect2)
      }
    }
  }
}

function isClose(rect1, rect2) {
  let threshold = 10
  return (
    Math.abs(rect1.right - rect2.left) <= threshold ||
    Math.abs(rect1.left - rect2.right) <= threshold ||
    Math.abs(rect1.bottom - rect2.top) <= threshold ||
    Math.abs(rect1.top - rect2.bottom) <= threshold
  )
}

function alignElements(element, otherElement, rect1, rect2) {
  let elementRect = element.getBoundingClientRect()
  let screenWidth_vw = window.innerWidth * 0.01
  let screenHeight_vh = window.innerHeight * 0.01

  if (Math.abs(rect1.right - rect2.left) < 10) {
    let newElementLeft_vw = (rect2.left - elementRect.width) / screenWidth_vw;
    element.style.left = newElementLeft_vw + 'svw'
  } else if (Math.abs(rect1.left - rect2.right) < 10) {
    let newElementLeft_vw = rect2.right / screenWidth_vw
    element.style.left = newElementLeft_vw + 'svw'
  } else if (Math.abs(rect1.bottom - rect2.top) < 10) {
    let newElementTop_vh = (rect2.top - elementRect.height) / screenHeight_vh
    element.style.top = newElementTop_vh + 'svh'
  } else if (Math.abs(rect1.top - rect2.bottom) < 10) {
    let newElementTop_vh = rect2.bottom / screenHeight_vh
    element.style.top = newElementTop_vh + 'svh'
  }
}

// SHAPE
function activateSquare() {
  isControlEnabled = false
  selectedShape = 'square'
  elementDragging = false
}

function activateCircle() {
  isControlEnabled = false
  selectedShape = 'circle'
  elementDragging = false
}

function activateTriangle() {
  isControlEnabled = false
  selectedShape = 'triangle'
  elementDragging = false
}

function activateformPath() {
  isControlEnabled = false
  selectedShape = 'formPath'
  elementDragging = false
}

function startDrawing(e) {
  const userLSG = lab_local_storage_object('global')
  if (userLSG.ctx === "Applications" && userLSG.mode === "Designer") {
    const designers_bar = document.getElementById('lab-designers-bar')
    if (designers_bar.contains(e.target)) return
    if (!selectedShape) return

    elementDragging = false
    isControlEnabled = false
    isDrawing = true
    startX = e.clientX || e.touches[0].clientX
    startY = e.clientY || e.touches[0].clientY
    endX = startX
    endY = startY
    document.addEventListener('mousemove', draw)
    document.addEventListener('touchmove', draw)
  }
}

function draw(e) {
  const designers_bar = document.getElementById('lab-designers-bar')
  if (designers_bar.contains(e.target)) return
  if (!isDrawing || !selectedShape) return
  endX = e.clientX || e.touches[0].clientX
  endY = e.clientY || e.touches[0].clientY
  if (!tempShape) {
    tempShape = createTempShape(startX, startY, endX, endY)
  } else {
    updateTempShape(tempShape, startX, startY, endX, endY)
  }
}

function stopDrawing(e) {
  if (e.target.id === 'lab-designers-bar') return
  if (!isDrawing || !selectedShape) return
  isDrawing = false

  if (tempShape) {
    document.body.removeChild(tempShape);
    tempShape = null
  }

  if (startX === endX && startY === endY) return

  if (selectedShape === 'square') {
    drawSquare(startX, startY, endX, endY, shiftKeyPressed)
  } else if (selectedShape === 'circle') {
    drawCircle(startX, startY, endX, endY)
  } else if (selectedShape === 'triangle') {
    drawTriangle(startX, startY, endX, endY)
  }
}

function createTempShape(x1, y1, x2, y2) {
  const shape = document.createElement('div')
  shape.style.zIndex = '99'
  shape.style.position = 'absolute'
  updateTempShape(shape, x1, y1, x2, y2)
  document.body.appendChild(shape)
  return shape
}

function updateTempShape(shape, x1, y1, x2, y2) {
  if (selectedShape === 'square') {
    shape.style.left = Math.min(x1, x2) + 'px'
    shape.style.top = Math.min(y1, y2) + 'px'
    let width = Math.abs(x2 - x1)
    let height = Math.abs(y2 - y1)

    if (shiftKeyPressed) {
      shape.style.width = width + 'px'
      shape.style.height = width + 'px'
    } else {
      shape.style.width = width + 'px'
      shape.style.height = height + 'px'
    }
    shape.style.border = '1px solid black'
  } else if (selectedShape === 'circle') {
    if (shiftKeyPressed) {
      const radius = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
      shape.style.left = (x1 - radius) + 'px'
      shape.style.top = (y1 - radius) + 'px'
      shape.style.width = (2 * radius) + 'px'
      shape.style.height = (2 * radius) + 'px'
      shape.style.borderRadius = '50%'
      shape.style.border = '1px solid black'
    } else {
      const horizontalRadius = Math.abs(x2 - x1) / 2
      const verticalRadius = Math.abs(y2 - y1) / 2
      shape.style.left = (Math.min(x1, x2) + horizontalRadius) + 'px'
      shape.style.top = (Math.min(y1, y2) + verticalRadius) + 'px'
      shape.style.width = (2 * horizontalRadius) + 'px'
      shape.style.height = (2 * verticalRadius) + 'px'
      shape.style.borderRadius = '50%'
      shape.style.border = '1px solid black'
    }
  } else if (selectedShape === 'triangle') {
    const direction = y2 < y1 ? 'up' : 'down'
    const width = Math.abs(x2 - x1)
    const height = Math.abs(y2 - y1)
    const left = Math.min(x1, x2)
    const top = Math.min(y1, y2)
    let points
    if (direction === 'up') {
      points = [{
        x: 0,
        y: height
      },
      {
        x: width / 2,
        y: 0
      },
      {
        x: width,
        y: height
      }
      ]
    } else {
      points = [{
        x: 0,
        y: 0
      },
      {
        x: width / 2,
        y: height
      },
      {
        x: width,
        y: 0
      }
      ]
    }

    const clipPath = `polygon(${points.map(point => `${point.x}px ${point.y}px`).join(', ')})`
    shape.style.clipPath = clipPath
    shape.style.left = left + 'px'
    shape.style.top = top + 'px'
    shape.style.width = width + 'px'
    shape.style.height = height + 'px'
    shape.style.backgroundColor = 'black'
  }
}

function drawCircle(x1, y1, x2, y2) {
  const circle = document.createElement('div')
  assignRandomId(circle);
  const designers_bar = document.querySelector('#lab-designers-bar')
  let designerBarChildren = designers_bar ? Array.from(designers_bar.querySelectorAll('*')) : [];
  allElements = Array.from(document.querySelectorAll('body *')).filter(child =>
    child.tagName.toLowerCase() !== 'script' &&
    child.id !== 'lab-designers-bar' &&
    !designerBarChildren.includes(child)
  )
  if (shiftKeyPressed) {
    const radius = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    circle.className = 'shape'
    circle.style.left = (x1 - radius) + 'px'
    circle.style.top = (y1 - radius) + 'px'
    circle.style.width = (2 * radius) + 'px'
    circle.style.height = (2 * radius) + 'px'
    circle.style.borderRadius = '50%'
    circle.style.position = 'absolute'
    document.body.appendChild(circle)
  } else {
    const horizontalRadius = Math.abs(x2 - x1) / 2
    const verticalRadius = Math.abs(y2 - y1) / 2
    const centerX = Math.min(x1, x2) + horizontalRadius
    const centerY = Math.min(y1, y2) + verticalRadius
    circle.className = 'shape'
    circle.style.left = centerX + 'px'
    circle.style.top = centerY + 'px'
    circle.style.width = (2 * horizontalRadius) + 'px'
    circle.style.height = (2 * verticalRadius) + 'px'
    circle.style.borderRadius = '50%'
  }

  circle.style.backgroundColor = '#FED05E'
  circle.style.position = 'absolute'
  circle.style.zIndex = '2'
  document.body.appendChild(circle)
  allElements = Array.from(document.querySelectorAll('body *')).filter(child =>
    child.tagName.toLowerCase() !== 'script' &&
    child.id !== 'lab-designers-bar' &&
    !designerBarChildren.includes(child)
  )
}

function drawSquare(x1, y1, x2, y2, shiftKeyPressed) {
  const width = Math.abs(x2 - x1)
  const height = Math.abs(y2 - y1)
  const left = Math.min(x1, x2)
  const top = Math.min(y1, y2)
  const square = document.createElement('div')
  assignRandomId(square);
  const designers_bar = document.querySelector('#lab-designers-bar')
  let designerBarChildren = designers_bar ? Array.from(designers_bar.querySelectorAll('*')) : [];
  allElements = Array.from(document.querySelectorAll('body *')).filter(child =>
    child.tagName.toLowerCase() !== 'script' &&
    child.id !== 'lab-designers-bar' &&
    !designerBarChildren.includes(child)
  )
  square.className = 'shape'
  square.style.position = 'absolute'
  square.style.left = left + 'px'
  square.style.top = top + 'px'
  if (shiftKeyPressed) {
    square.style.height = width + 'px'
    square.style.width = width + 'px'
  } else {
    square.style.width = width + 'px'
    square.style.height = height + 'px'
  }

  square.style.backgroundColor = '#FED05E'
  square.style.zIndex = '2'
  document.body.appendChild(square)
  allElements = Array.from(document.querySelectorAll('body *')).filter(child =>
    child.tagName.toLowerCase() !== 'script' &&
    child.id !== 'lab-designers-bar' &&
    !designerBarChildren.includes(child)
  )
}

function drawTriangle(x1, y1, x2, y2) {
  const triangle = document.createElement('div')
  assignRandomId(triangle);

  triangle.className = 'shape'
  triangle.style.position = 'absolute'
  const width = Math.abs(x2 - x1)
  const height = Math.abs(y2 - y1)
  const direction = y2 < y1 ? 'up' : 'down'
  let points
  if (direction === 'up') {
    points = [{
      x: 0,
      y: height
    },
    {
      x: width / 2,
      y: 0
    },
    {
      x: width,
      y: height
    }
    ];
  } else {
    points = [{
      x: 0,
      y: 0
    },
    {
      x: width / 2,
      y: height
    },
    {
      x: width,
      y: 0
    }
    ]
  }

  const clipPath = `polygon(${points.map(point => `${point.x}px ${point.y}px`).join(', ')})`
  triangle.style.clipPath = clipPath
  triangle.style.backgroundColor = '#FED05E'
  triangle.style.zIndex = '2'

  triangle.style.left = Math.min(x1, x2) + 'px'
  triangle.style.top = Math.min(y1, y2) + 'px'
  triangle.style.width = width + 'px'
  triangle.style.height = height + 'px'
  document.body.appendChild(triangle)
  const designers_bar = document.querySelector('#lab-designers-bar')
  let designerBarChildren = designers_bar ? Array.from(designers_bar.querySelectorAll('*')) : [];
  allElements = Array.from(document.querySelectorAll('body *')).filter(child =>
    child.tagName.toLowerCase() !== 'script' &&
    child.id !== 'lab-designers-bar' &&
    !designerBarChildren.includes(child)
  )
}

function startFormPathing(e) {
  const userLSG = lab_local_storage_object('global')
  if (userLSG.ctx === "Applications" && userLSG.mode === "Designer") {
    const designers_bar = document.getElementById('lab-designers-bar')
    if (designers_bar.contains(e.target)) return
    if (selectedShape !== 'formPath') return
    isFormPathing = true
    const touch = e.touches ? e.touches[0] : e
    path = `M${touch.clientX},${touch.clientY}`
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", "100%")
    svg.setAttribute("height", "100%")
    svg.style.position = 'absolute'
    svg.style.top = 0
    document.body.appendChild(svg)
  }
}

function formPath(e) {
  if (e.target.id === 'lab-designers-bar') return;
  if (!isFormPathing) return;
  const touch = e.touches ? e.touches[0] : e;
  path += ` L${touch.clientX},${touch.clientY}`;
  svg.innerHTML = `<path d="${path}" stroke="black" fill="none"/>`;
}

function endFormPathing(e) {
  if (!isFormPathing) return;
  isFormPathing = false;
  if (svg) {
    assignRandomId(svg);
    svg.innerHTML = `<path d="${path}" stroke="none" fill="black"/>`;
    const designers_bar = document.querySelector('#lab-designers-bar')
    let designerBarChildren = designers_bar ? Array.from(designers_bar.querySelectorAll('*')) : [];
    allElements = Array.from(document.querySelectorAll('body *')).filter(child =>
      child.tagName.toLowerCase() !== 'script' &&
      child.id !== 'lab-designers-bar' &&
      !designerBarChildren.includes(child)
    )
  }
}

// HIERARCHY

function indexElementUp() {
  if (!selectedElementChangeId) return

  let currentZIndex = parseInt(window.getComputedStyle(selectedElementChangeId).zIndex) || 0

  for (let i = 0; i < allElementsZindex.length; i++) {
    if (allElementsZindex[i] === selectedElementChangeId) {
      let previousElement = allElementsZindex[i - 1]
      let nextElement = allElementsZindex[i + 1]

      let previousZIndex = previousElement ? parseInt(window.getComputedStyle(previousElement).zIndex) || 0 : null
      let nextZIndex = nextElement ? parseInt(window.getComputedStyle(nextElement).zIndex) || 0 : null

      if ((previousZIndex !== null && currentZIndex === previousZIndex) ||
        (nextZIndex !== null && currentZIndex === nextZIndex)) {
        selectedElementChangeId.style.zIndex = currentZIndex + 1
      } else if (nextZIndex !== null && currentZIndex < nextZIndex) {
        selectedElementChangeId.style.zIndex = nextZIndex + 1
      }

      break
    }
  }

  allElementsZindex = allElements.sort((a, b) => {
    let zIndexA = window.getComputedStyle(a).zIndex
    let zIndexB = window.getComputedStyle(b).zIndex

    zIndexA = isNaN(parseInt(zIndexA)) ? 0 : parseInt(zIndexA)
    zIndexB = isNaN(parseInt(zIndexB)) ? 0 : parseInt(zIndexB)

    return zIndexA - zIndexB
  });

}

function indexElementsDown() {
  if (!selectedElementChangeId) return

  let currentZIndex = parseInt(window.getComputedStyle(selectedElementChangeId).zIndex) || 0

  for (let i = allElementsZindex.length - 1; i >= 0; i--) {
    if (allElementsZindex[i] === selectedElementChangeId) {
      let previousElement = allElementsZindex[i - 1]
      let nextElement = allElementsZindex[i + 1]

      let previousZIndex = previousElement ? parseInt(window.getComputedStyle(previousElement).zIndex) || 0 : null
      let nextZIndex = nextElement ? parseInt(window.getComputedStyle(nextElement).zIndex) || 0 : null

      if ((previousZIndex !== null && currentZIndex === previousZIndex) ||
        (nextZIndex !== null && currentZIndex === nextZIndex)) {
        selectedElementChangeId.style.zIndex = currentZIndex - 1
      } else if (previousZIndex !== null && currentZIndex > previousZIndex) {
        selectedElementChangeId.style.zIndex = previousZIndex - 1
      }

      break
    }
  }

  allElementsZindex = allElements.sort((a, b) => {
    let zIndexA = window.getComputedStyle(a).zIndex
    let zIndexB = window.getComputedStyle(b).zIndex;

    zIndexA = isNaN(parseInt(zIndexA)) ? 0 : parseInt(zIndexA)
    zIndexB = isNaN(parseInt(zIndexB)) ? 0 : parseInt(zIndexB)

    return zIndexA - zIndexB
  });

}

// RESIZE
function labResizeElements(event) {

  xResize++
  if (xResize === 1) {

    if (selectedElementChangeId) {
      labIsElementDragging = false
      // Vérifier si l'élément est un canvas
      if (selectedElementChangeId.tagName === 'CANVAS') {
        // Créer un conteneur si ce n'est pas déjà fait
        if (selectedElementChangeId.tagName === 'CANVAS') {
          let container

          // Vérifier si le canvas est déjà dans un conteneur
          if (selectedElementChangeId.parentElement.classList.contains('lab-canvas-container')) {
            container = selectedElementChangeId.parentElement // Récupérer le conteneur existant
          } else {
            // Créer un conteneur si ce n'est pas déjà fait
            container = document.createElement('div')
            container.classList.add('lab-canvas-container')
            container.style.position = 'absolute'
            container.style.top = `${selectedElementChangeId.offsetTop}px`
            container.style.left = `${selectedElementChangeId.offsetLeft}px`
            container.style.width = `${selectedElementChangeId.offsetWidth}px`
            container.style.height = `${selectedElementChangeId.offsetHeight}px`
            container.style.transformOrigin = 'center center'

            // Placer le canvas dans le conteneur
            selectedElementChangeId.style.position = 'absolute'
            selectedElementChangeId.style.top = '0'
            selectedElementChangeId.style.left = '0'
            selectedElementChangeId.style.width = '100%'
            selectedElementChangeId.style.height = '100%'

            // Insérer le canvas dans le conteneur
            container.appendChild(selectedElementChangeId)
            document.body.appendChild(container)
          }

          // Le conteneur devient l'élément sélectionné
          selectedElementChangeId = container
        }
      }

      resizeDiv = document.createElement('div')
      resizeDiv.style.zIndex = '2'
      resizeDiv.setAttribute('class', 'escape')
      resizeDiv.style.width = '0.7svw'
      resizeDiv.style.height = '0.7svw'
      resizeDiv.style.backgroundColor = 'cyan'
      resizeDiv.style.position = 'absolute'
      resizeDiv.style.right = '0'
      resizeDiv.style.bottom = '0'
      resizeDiv.style.cursor = 'nwse-resize'

      selectedElementChangeId.appendChild(resizeDiv)

      let isResizing = false

      let initialRelativeElementsPositions = []
      let relativeElements = document.querySelectorAll('[data-relative]')
      relativeElements.forEach(element => {
        initialRelativeElementsPositions.push({
          element: element,
          top: element.getBoundingClientRect().top,
          left: element.getBoundingClientRect().left
        });
      });

      function startResizing(e) {
        e.preventDefault()
        isResizing = true

        let initialWidth = selectedElementChangeId.offsetWidth
        let initialHeight = selectedElementChangeId.offsetHeight
        let initialX = (e.type === 'mousedown') ? e.clientX : e.touches[0].clientX
        let initialY = (e.type === 'mousedown') ? e.clientY : e.touches[0].clientY

        function moveHandler(e) {
          if (isResizing) {
            let clientX = (e.type === 'mousemove') ? e.clientX : e.touches[0].clientX
            let clientY = (e.type === 'mousemove') ? e.clientY : e.touches[0].clientY
            let dx = clientX - initialX
            let dy = clientY - initialY

            selectedElementChangeId.style.width = (initialWidth + dx) + 'px'
            selectedElementChangeId.style.height = (initialHeight + dy) + 'px'

            let currentHeight = selectedElementChangeId.offsetHeight

            initialRelativeElementsPositions.forEach(item => {
              let itemRect = item.element.getBoundingClientRect()
              let distanceFromTop = itemRect.top - selectedElementChangeId.getBoundingClientRect().top
              let newTop = item.top - (initialHeight - currentHeight) + distanceFromTop
              item.element.style.top = newTop + 'px'
            })
          }
        }

        function endResizing() {
          isResizing = false
          document.removeEventListener('mousemove', moveHandler)
          document.removeEventListener('mouseup', endResizing)
          document.removeEventListener('touchmove', moveHandler)
          document.removeEventListener('touchend', endResizing)
        }

        document.addEventListener('mousemove', moveHandler)
        document.addEventListener('mouseup', endResizing)
        document.addEventListener('touchmove', moveHandler)
        document.addEventListener('touchend', endResizing)
      }

      resizeDiv.addEventListener('mousedown', startResizing)
      resizeDiv.addEventListener('touchstart', startResizing)
    }
  } else if (xResize === 2) {
    xResize = 0;
    if (resizeDiv !== null) {
      resizeDiv.remove()
      resizeDiv = null
    }
  }
}

document.addEventListener('click', (event) => {
  const userLSG = lab_local_storage_object('global')
  if (userLSG && userLSG.ctx === "Applications" && userLSG.mode === "Designer") {
    if (xResize === 1 && resizeDiv !== null && !resizeDiv.contains(event.target)) {
      labResizeElements()
    } else {
      if (event.target.id == 'lab-resize-tool') {
        labResizeElements()
      }
    }
  }
})

// GROUP
function createGroupDiv() {
  const groupDiv = document.createElement('div')

  function addElementToGroup(element) {
    if (element.parentNode && clickedElementGroup.includes(element.parentNode)) {
      if (!groupDiv.contains(element.parentNode)) {
        groupDiv.appendChild(element.parentNode)
        document.body.appendChild(groupDiv)
      }
    } else {
      if (!groupDiv.contains(element)) {
        groupDiv.appendChild(element)
        document.body.appendChild(groupDiv)
      }
    }
  }

  function haveSameParent(elements) {
    if (elements.length === 0) return false
    let parent = elements[0].parentNode
    return elements.every(el => el.parentNode === parent)
  }

  if (startMultipleSelect) {
    if (haveSameParent(clickedElementGroup)) {
      let parent = clickedElementGroup[0].parentNode
      parent.appendChild(groupDiv)
      clickedElementGroup.forEach(function (element) {
        groupDiv.appendChild(element)
      })
    } else {
      clickedElementGroup.forEach(function (element) {
        addElementToGroup(element)
      })
    }
  } else {
    let parent = selectedElementChangeId.parentNode
    groupDiv.appendChild(selectedElementChangeId)
    parent.appendChild(groupDiv)
  }

  assignRandomId(groupDiv)

  allElements = Array.from(document.querySelectorAll('body *')).filter(child =>
    child.tagName.toLowerCase() !== 'script' &&
    child.id !== 'lab-designers-bar' &&
    ![...document.querySelector('#lab-designers-bar').children].includes(child)
  )
}

// MERGE
function mergeSelectedElements() {
  if (!startMultipleSelect) {
    return;
  }

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.style.position = 'absolute'

  let minX = Number.POSITIVE_INFINITY
  let minY = Number.POSITIVE_INFINITY
  let maxX = Number.NEGATIVE_INFINITY
  let maxY = Number.NEGATIVE_INFINITY

  clickedElementGroup.forEach(function (element) {
    const rect = element.getBoundingClientRect()
    minX = Math.min(minX, rect.left)
    minY = Math.min(minY, rect.top)
    maxX = Math.max(maxX, rect.right)
    maxY = Math.max(maxY, rect.bottom)
  });

  const width = maxX - minX
  const height = maxY - minY

  svg.setAttribute("width", width)
  svg.setAttribute("height", height)
  svg.style.left = minX + "px"
  svg.style.top = minY + "px"

  clickedElementGroup.forEach(function (element) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    const rect = element.getBoundingClientRect()
    const relativeX = rect.left - minX;
    const relativeY = rect.top - minY
    const w = rect.width
    const h = rect.height
    const clipPathStyle = getComputedStyle(element).clipPath
    const borderRadius = window.getComputedStyle(element).borderRadius

    if (clipPathStyle && clipPathStyle.startsWith("polygon")) {
      const points = clipPathStyle
        .replace('polygon(', '')
        .replace(')', '')
        .split(',')
        .map(p => {
          const [x, y] = p.trim().split(' ')
          let xAbs, yAbs
          if (x.includes('%')) {
            xAbs = (parseFloat(x) / 100) * w
          } else {
            xAbs = parseFloat(x)
          }
          if (y.includes('%')) {
            yAbs = (parseFloat(y) / 100) * h
          } else {
            yAbs = parseFloat(y)
          }
          return `${relativeX + xAbs} ${relativeY + yAbs}`
        })

      let pathDataPolygon = `M ${points[0]}`
      points.slice(1).forEach(point => {
        pathDataPolygon += ` L ${point}`
      })
      pathDataPolygon += ' Z'

      path.setAttribute("d", pathDataPolygon)
      path.setAttribute("fill", "lightcoral")
    } else if (clipPathStyle && clipPathStyle.startsWith("ellipse")) {
      const values = clipPathStyle
        .replace('ellipse(', '')
        .replace(')', '')
        .split(',')
        .map(value => value.trim())
      const [rx, ry] = values[0].split(' ').map(v => parseFloat(v))
      const [cx, cy] = values[1].split(' ').map(v => parseFloat(v))

      const cxAbs = cx * w
      const cyAbs = cy * h
      const rxAbs = rx * w
      const ryAbs = ry * h

      path.setAttribute("d", `M ${relativeX + cxAbs - rxAbs} ${relativeY + cyAbs} A ${rxAbs} ${ryAbs} 0 1 0 ${relativeX + cxAbs + rxAbs} ${relativeY + cyAbs} A ${rxAbs} ${ryAbs} 0 1 0 ${relativeX + cxAbs - rxAbs} ${relativeY + cyAbs}`)
      path.setAttribute("fill", "lightcoral")
    } else if (borderRadius !== '0px') {
      const borderRadii = borderRadius.split(' ').map(v => parseFloat(v))
      if (borderRadii.length === 1 && borderRadii[0] > 0) {
        const rx = w / 2
        const ry = h / 2
        path.setAttribute("d", `M ${relativeX + rx} ${relativeY} A ${rx} ${ry} 0 1 0 ${relativeX + rx} ${relativeY + h} A ${rx} ${ry} 0 1 0 ${relativeX + rx} ${relativeY}`)
      } else {
        let [tl, tr, br, bl] = borderRadii
        if (borderRadii.length === 2) {
          bl = tr = borderRadii[0]
          br = tl = borderRadii[1]
        } else if (borderRadii.length === 3) {
          bl = borderRadii[1]
          br = borderRadii[2]
        } else if (borderRadii.length === 4) { }

        let pathData = `M ${relativeX + tl} ${relativeY} `
        pathData += `L ${relativeX + w - tr} ${relativeY} Q ${relativeX + w} ${relativeY} ${relativeX + w} ${relativeY + tr} `
        pathData += `L ${relativeX + w} ${relativeY + h - br} Q ${relativeX + w} ${relativeY + h} ${relativeX + w - br} ${relativeY + h} `
        pathData += `L ${relativeX + bl} ${relativeY + h} Q ${relativeX} ${relativeY + h} ${relativeX} ${relativeY + h - bl} `
        pathData += `L ${relativeX} ${relativeY + tl} Q ${relativeX} ${relativeY} ${relativeX + tl} ${relativeY} `
        pathData += 'Z'

        path.setAttribute("d", pathData)
      }
      path.setAttribute("fill", "purple")
    } else {
      path.setAttribute("d", `M ${relativeX} ${relativeY} L ${relativeX + w} ${relativeY} L ${relativeX + w} ${relativeY + h} L ${relativeX} ${relativeY + h} Z`)
    }
    path.setAttribute("fill", "purple")
    svg.appendChild(path)
  });

  document.body.appendChild(svg)
  assignRandomId(svg)


  allElements = Array.from(document.querySelectorAll('body *')).filter(child =>
    child.tagName.toLowerCase() !== 'script' &&
    child.id !== 'lab-designers-bar' &&
    ![...document.querySelector('#lab-designers-bar').children].includes(child)
  )
}

// FEATHER
function initializeSVG() {
  if (!featherSVG && selectedShape === 'feather') {
    featherSVG = document.createElementNS(svgNamespace, "svg")
    featherSVG.style.zIndex = 1
    featherSVG.setAttribute("width", "100%")
    featherSVG.setAttribute("height", "100%")
    featherSVG.style.position = 'absolute'
    featherSVG.style.top = '0'
    document.body.appendChild(featherSVG);
  }
}

function displayFinalCurves() {
  const userLSG = lab_local_storage_object('global')
  if (userLSG && userLSG.ctx === "Applications" && userLSG.mode === "Designer") {
    if (selectedShape != 'feather') return
    if (!featherSVG) return
    featherSVG.querySelectorAll('.final-curve').forEach(curve => featherSVG.removeChild(curve))
    for (let i = 0; i < finalCurves.length; i++) {
      const curve = finalCurves[i].cloneNode(true)
      curve.classList.add('final-curve')
      featherSVG.appendChild(curve)
      assignRandomId(featherSVG)


      allElements = Array.from(document.querySelectorAll('body *')).filter(child =>
        child.tagName.toLowerCase() !== 'script' &&
        child.id !== 'lab-designers-bar' &&
        ![...document.querySelector("#lab-designers-bar").children].includes(child)
      )
    }
  }
}

displayFinalCurves()


function createControlPoint(event) {
  const userLSG = lab_local_storage_object('global')
  console.log(event.target.classList);

  if (event.target.classList.value == 'escape') return

  if (userLSG && userLSG.ctx === "Applications" && userLSG.mode === "Designer") {

    if (selectedShape != 'feather') return

    const isTouchEvent = event.type.startsWith("touch")
    const inputEvent = isTouchEvent ? event.touches[0] : event

    if (event.detail === 1 || isTouchEvent) {
      initializeSVG()
      isMouseDown = true
      const rect = featherSVG.getBoundingClientRect()
      const x = inputEvent.clientX - rect.left
      const y = inputEvent.clientY - rect.top

      points.push({ x, y })

      const circle = document.createElementNS(svgNamespace, "circle")
      circle.setAttribute("cx", x)
      circle.setAttribute("cy", y)
      circle.setAttribute("r", 5)
      circle.setAttribute("fill", "black")
      featherSVG.appendChild(circle)
      circles.push(circle)
      console.log(circles);

      if (points.length > 1) {
        const previousPoint = points[points.length - 2]
        const currentPoint = points[points.length - 1]
        const line = document.createElementNS(svgNamespace, "line")
        line.setAttribute("x1", previousPoint.x)
        line.setAttribute("y1", previousPoint.y)
        line.setAttribute("x2", currentPoint.x)
        line.setAttribute("y2", currentPoint.y)
        line.setAttribute("stroke", "black")
        line.setAttribute("stroke-width", "2")
        featherSVG.appendChild(line)
        lines.push(line)
      }
      if (points.length === 1) {
        firstPoint = { x, y }
      }
    }
  }

}

function createCurve(event) {
  const userLSG = lab_local_storage_object('global')
  if (userLSG && userLSG.ctx === "Applications" && userLSG.mode === "Designer") {
    const designers_bar = document.getElementById('lab-designers-bar')
    if (designers_bar && [...designers_bar.children].includes(event.target)) return
    if (selectedShape != 'feather') return
    if (!featherSVG) return

    const isTouchEvent = event.type.startsWith("touch")
    const inputEvent = isTouchEvent ? event.touches[0] : event

    if (isMouseDown && points.length > 1) {
      const rect = featherSVG.getBoundingClientRect()
      const x = inputEvent.clientX - rect.left
      const y = inputEvent.clientY - rect.top
      const previousPoint = points[points.length - 2]
      const currentPoint = points[points.length - 1]
      const directionX = x - currentPoint.x
      const directionY = y - currentPoint.y
      const controlPointX = currentPoint.x - directionX / 2
      const controlPointY = currentPoint.y - directionY / 2
      currentCurve = document.createElementNS(svgNamespace, "path")
      currentCurve.setAttribute("d", `M${previousPoint.x},${previousPoint.y} Q${controlPointX},${controlPointY} ${currentPoint.x},${currentPoint.y}`)
      currentCurve.setAttribute("stroke", "black")
      currentCurve.setAttribute("stroke-width", "2")
      currentCurve.setAttribute("fill", "none")

      if (curvePaths.length > 0) {
        featherSVG.removeChild(curvePaths[curvePaths.length - 1])
      }

      featherSVG.appendChild(currentCurve)
      curvePaths.push(currentCurve)
      if (lines.length > 0) {
        const lastLine = lines[lines.length - 1]
        lastLine.setAttribute("stroke", "none")
      }
    }
  }
}

function displayPreviewCurves(event) {
  const userLSG = lab_local_storage_object('global')
  if (userLSG && userLSG.ctx === "Applications" && userLSG.mode === "Designer") {
    const designers_bar = document.getElementById('lab-designers-bar')
    if (designers_bar.contains(event.target)) return
    if (selectedShape != 'feather') return
    if (!featherSVG) return
    isMouseDown = false
    if (currentCurve !== null) {
      finalCurves.push(currentCurve.cloneNode(true))
      currentCurve = null
    }
    displayFinalCurves()
  }
}

function createFinalForm(event) {
  const userLSG = lab_local_storage_object('global')
  if (userLSG.ctx === "Applications" && userLSG.mode === "Designer") {
    if (event.target.classList.contains('escape')) return
    if (selectedShape != 'feather') return
    if (!featherSVG) return

    const isTouchEvent = event.type.startsWith("touch")
    const inputEvent = isTouchEvent ? event.changedTouches[0] : event

    if (firstPoint !== null && points.length > 2) {
      const rect = featherSVG.getBoundingClientRect()
      const mouseX = inputEvent.clientX - rect.left
      const mouseY = inputEvent.clientY - rect.top

      const distance = Math.sqrt((firstPoint.x - mouseX) ** 2 + (firstPoint.y - mouseY) ** 2)
      if (distance < 10) {
        path = document.createElementNS(svgNamespace, "path")
        path.setAttribute("fill", "black")
        path.setAttribute("stroke", "none")
        featherSVG.appendChild(path)

        assignRandomId(path)


        allElements = Array.from(document.querySelectorAll('body *')).filter(child =>
          child.tagName.toLowerCase() !== 'script' &&
          child.id !== 'lab-designers-bar' &&
          ![...document.querySelector('#lab-designers-bar').children].includes(child)
        )

        let pathString = `M${points[0].x},${points[0].y}`
        for (let i = 1; i < points.length; i++) {
          pathString += ` L${points[i].x},${points[i].y}`
        }

        pathString += ` Z`
        for (let i = 0; i < finalCurves.length; i++) {
          pathString += ` ${finalCurves[i].getAttribute("d")}`
        }

        path.setAttribute("d", pathString)
        points = []
        circles.forEach(circle => {
          if (featherSVG.contains(circle)) {
            featherSVG.removeChild(circle)
          }
        });

        circles = []
        lines.forEach(line => {
          if (featherSVG.contains(line)) {
            featherSVG.removeChild(line)
          }
        });

        lines = []
        curvePaths.forEach(curve => {
          if (featherSVG.contains(curve)) {
            featherSVG.removeChild(curve)
          }
        });

        curvePaths = []
        currentCurve = null
        path = null
        firstPoint = null
        finalCurves = []
        displayFinalCurves()
        featherSVG = null
      }
    }
  }
}

document.addEventListener("mousedown", createControlPoint)
document.addEventListener("mousemove", createCurve)
document.addEventListener("mouseup", displayPreviewCurves)
document.addEventListener("click", createFinalForm)

document.addEventListener("touchstart", createControlPoint)
document.addEventListener("touchmove", createCurve)
document.addEventListener("touchend", displayPreviewCurves)
document.addEventListener("touchstart", createFinalForm)


