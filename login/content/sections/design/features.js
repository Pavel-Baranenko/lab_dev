const styles_d = {
  "design": {
    'side': {
      'default': {
        'transition': 'all 0.1s linear',
        'position': 'fixed',
        top: 0,
        left: 0,
        width: '100px',
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
    'showMenu': {
      'default': {
        border: "4px solid #f2f3f7",
        borderRadius: "30px 0 30px 30px",
        width: "40px",
        height: "40px",
        background: '#fed05e',
        position: 'absolute',
        right: '0px',
        top: '-4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    },
    'templates': {
      'default': {
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
        fontSize: '14px',
        color: '#000',
      }
    },
    'template': {
      'default': {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
      }
    },
    'templateIcon': {
      'default': {
        width: '55px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '55px',
        borderRadius: '19px',
        background: '#f2f3f7',
      }
    },
    'templateTitle': {
      'default': {
        fontWeight: 500,
        fontSize: '10px',
        lineHeight: '110%',
        textAlign: 'center',
        color: "#000",
        marginTop: '6px',
      }
    },
    'top': {
      'default': {
        transition: 'all 0.1s linear',
        gap: '16px',
        padding: '12px 40px 18px 40px',
        display: 'flex',
        alignItems: 'center',
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
    'btn': {
      'default': {
        backgroundColor: "transparent",
        border: "none"
      }
    },
    'blind': {
      'default': {
        position: 'absolute',
        bottom: '-3px',
        backgroundColor: '#FED05E',
        width: '96px',
        height: '6px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '50px',
      }
    }
  }
}


function lab_design_system_d(tag, id, parent, content, className, styled) {
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

function createElement(tag, parent, content) {
  const elementToAppend = document.createElement(tag)
  parent.appendChild(elementToAppend)
  if (content != "" && content != null && content != undefined && typeof String) {
    elementToAppend.innerText = content
  }
  return elementToAppend
}

let TEMPLATES = {
  "header-1": 'h1',
  "section-1": 'section1',
}

let contentTags = ["DIV", "SECTION"]

let uditableTags = ["SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "P", "I", "B", "STRONG", "FONT", "EM", "SMALL", "SUP", "SUB", "Q", "BLOCKQUOTE"]

function sideMenu(TemplatesList, ElementsLists, box) {

  let menu = lab_design_system_d('div', 'side-menu', box, 0, 0, ['design', 'side'])
  let menuButton = lab_design_system_d('div', "show-menu", menu, 0, 0, ['design', 'showMenu'])
  let buttonIcon = lab_design_system_d('img', "show-menu-icon", menuButton, null, null)
  buttonIcon.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/arrow_menu_close.svg")

  menuButton.addEventListener('click', () => {
    menu.style.margin = menu.style.margin == "0px 0px 0px -100px" ? "0" : "0px 0px 0px -100px"
    menuButton.style.transform = menuButton.style.transform == "translateX(40px) rotate(-180deg)" ? "none" : "translateX(40px) rotate(-180deg)"
  })

  let templatesBox = lab_design_system_d('div', "templates-box", menu)
  let templatesTitle = lab_design_system_d('span', "templates-menu-span", templatesBox, "Templates", 0, ['design', 'templatesHeading'])
  let templatesWrap = lab_design_system_d('div', "templates-wrap", templatesBox, 0, 0, ['design', 'templates'])


  let elementsBox = lab_design_system_d('div', "elements-box", menu, null, null)
  elementsBox.style.margin = "40px 0 0 0"
  let elementsTitle = lab_design_system_d('span', "elements-menu-span", elementsBox, "Elements", 0, ['design', 'templatesHeading'])
  let elementsWrap = lab_design_system_d('div', "elements-wrap", elementsBox, 0, 0, ['design', 'templates'])


  function addList(e, listing) {
    e.map(el => {
      let item = lab_design_system_d('div', `side-menu-template-${el.code}`, listing, null, 0, ['design', 'template'])
      let icon = lab_design_system_d('div', `${el.code}-icon-box`, item, null, 0, ['design', 'templateIcon'])
      let img = lab_design_system_d('img', `${el.code}-icon`, icon, null, "side-menu-template-img")
      img.setAttribute('src', el.icon)
      img.style.width = '30px'
      img.style.height = '30px'
      let text = lab_design_system_d('span', `${el.code}-label`, item, el.label, 0, ['design', 'templateTitle'])

      item.addEventListener('click', () => {
        item.style.position = "relative"
        let coord = item.getBoundingClientRect()
        let copy = item.cloneNode(true)
        copy.style.position = "absolute"
        copy.style.opacity = "0.7"
        item.after(copy)
        copy.style.left = `${coord.left + 7}px`
        copy.style.top = `${coord.top}px`

        let page = document.getElementById('lab-user-page')

        if (copy) {
          function onMouseDrag({ movementX, movementY }) {
            let getContainerStyle = window.getComputedStyle(copy)
            let leftValue = parseInt(getContainerStyle.left)
            let topValue = parseInt(getContainerStyle.top)
            copy.style.left = `${leftValue + movementX}px`
            copy.style.top = `${topValue + movementY}px`
          }
          //!добавить общий листенер на mousemove, внутри него остальные
          copy.addEventListener("mousedown", () => {
            copy.addEventListener("mousemove", onMouseDrag)
            let el = document.elementsFromPoint(e.pageX, e.pageY)[1]
            if (contentTags.indexOf(el.tagName) != -1) {
              console.log(el.tagName)
            }
          })

          // document.addEventListener('mousemove', (e) => {
          //   let el = document.elementsFromPoint(e.pageX, e.pageY)[1]
          //   if (contentTags.indexOf(el.tagName) != -1) {
          //     console.log(el.tagName)
          //   }
          // })

          document.addEventListener("mouseup", () => {
            copy.removeEventListener("mousemove", onMouseDrag)
            listing.removeChild(copy)
            page.innerHTML += TEMPLATES[el.code]
            // page.appendChild(TEMPLATES[el.code])
          })
        }
      })
    })
  }

  addList(TemplatesList, templatesWrap)
  addList(ElementsLists, elementsWrap)
}

function rightMenu(box) {
  let menu = lab_design_system_d('div', 'code-box', box, null, 'code-box')

  let menuButton = lab_design_system_d('div', "code-menu-show", menu, null, "code-menu-show")
  let buttonIcon = lab_design_system_d('img', "code-menu-icon", menuButton, null, null)
  buttonIcon.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/message-code 1.svg")
  let codeWrapper = lab_design_system_d('div', "code-wrapper", menu, null, "code-wrapper")

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('active')
    let page = document.getElementById('lab-user-page').innerHTML
    codeWrapper.innerText = `${page}`

  })

}

function topSettingsBar(box) {

  let topSettings = lab_design_system_d('div', "top-settings", box, 0, 0, ['design', 'top'])

  let button = lab_design_system_d("button", "top-settings-btn", topSettings, 0, 0, ['design', 'btn'])

  let buttonImg = lab_design_system_d("img", "top-settings-btn-img", button)
  buttonImg.style.maxWidth = '25px'
  buttonImg.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/settings.svg")
  let responsiveList = ["desctop", "tablet", "mobile"]

  responsiveList.map(e => {
    let button = lab_design_system_d("button", `set-responsive-${e}`, topSettings, null, 'top-settings-screen', ['design', 'btn'])

    e == "desctop" && button.classList.add('active')

    button.addEventListener('click', () => {
      if (document.querySelector('.lab-top-settings-screen.active')) {
        document.querySelector('.lab-top-settings-screen.active').classList.remove('active')
      }
      button.classList.add('active')
    })

    let buttonImg = lab_design_system_d("img", `set-responsive-icon-${e}`, button, null, "top-settings-btn-img")
    buttonImg.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/${e}.svg`)
  })


  let pixelScreen = lab_design_system_d('div', "top-settings-pixel", topSettings, window.outerWidth + ' px', "top-settings-pixel")
  let pixelSettings = lab_design_system_d("button", "top-settings-btn-pixel", topSettings, null, "top-settings-btn mini line", ['design', 'btn'])
  let pixelSettingsImg = lab_design_system_d("img", "top-settings-btn-icon", pixelSettings, null, null)
  pixelSettingsImg.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/settings.svg")
  let setPage = lab_design_system_d('button', "top-settings-page", topSettings, null, "top-settings-page line", ['design', 'btn'])
  let img = lab_design_system_d('img', 'page-box', setPage, null, null)
  img.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/page-box.svg`)

  setPage.appendChild(document.createTextNode("Main"))

  let arrow = lab_design_system_d('img', 'page-arrow', setPage, null, "top-settings-page-arrow")

  arrow.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/chevron_right.svg`)

  let sizeSwitcher = lab_design_system_d('input', 'sliderRange', topSettings, null, null)
  sizeSwitcher.setAttribute('type', "range")
  sizeSwitcher.setAttribute('min', "1")
  sizeSwitcher.setAttribute('max', "100")
  sizeSwitcher.setAttribute('type', "range")
  sizeSwitcher.setAttribute('value', "100")

  let size = lab_design_system_d('div', 'screen-size', topSettings, "100%", "top-settings-pixel lined ")
  size.style.width = "60px"

  sizeSwitcher.oninput = function () {
    size.innerHTML = this.value + "%"
    document.getElementById('lab-user-page').style.transform = `scale(${this.value / 100})`
  }

  let view = lab_design_system_d('button', "top-settings-view", topSettings, null, null, ['design', 'btn'])
  let viewImg = lab_design_system_d('img', "top-settings-view-icon", view, null, null)
  viewImg.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/visibility.svg`)
  let download = lab_design_system_d('button', "top-settings-btn-download", topSettings, null, null, ['design', 'btn'])
  let downloadImg = lab_design_system_d('img', "top-settings-download-icon", download, null, null)
  downloadImg.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/download.svg`)



  let blind = lab_design_system_d('button', "blind-btn", topSettings, null, null, ['design', 'blind'])
  blind.addEventListener('click', () => {
    topSettings.style.transform = topSettings.style.transform == "translateY(-98%) translateX(-50%)" ? "translateX(-50%)" : "translateY(-98%) translateX(-50%)"
  })

}

let TemplatesList = [
  { label: "header", code: "header-1", icon: "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/arrow_menu_close.svg" },
  { label: "section", code: "section", icon: "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/arrow_menu_close.svg" },
]

let ElementsList = [
  { label: "button", code: "button", icon: "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/arrow_menu_close.svg" },
  { label: "section", code: "section-1", icon: "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/arrow_menu_close.svg" },
  { label: "div", code: "div", icon: "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/arrow_menu_close.svg" }
]


function dropList(e, value, arr, parent) {
  let drop = lab_design_system_d('div', `drop-${e}`, parent, null, 'drop')
  let selected = lab_design_system_d('div', `drop-selected-${e}`, drop, value, 'drop-list-selected')
  let list = lab_design_system_d('div', `drop-list-${e}`, drop, null, 'drop-list')

  selected.addEventListener('click', () => drop.classList.toggle('active'))

  arr.forEach(a => {
    let item = lab_design_system_d('div', `item-${a}`, list, a, 'drop-list-item')
    item.addEventListener('click', () => {
      drop.classList.remove('active')
      selected.innerHTML = a
    })
  })
}

function button(e, parent, icon, text) {
  let btn = lab_design_system_d('button', `menu-style-${e}`, parent, null, 'menu-style-btn')

  if (icon) {
    const innerIcon = document.createElement('img')
    innerIcon.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/${icon}`)
    btn.appendChild(innerIcon)
  }

  text && lab_design_system_d('span', `menu-style-text-${e}`, btn, text, 'menu-style-text')
  return btn
}
function input(e, parent, icon, value) {
  let wrap = lab_design_system_d('div', `input-wrap-${e}`, parent, null, 'input-wrap')

  if (icon) {
    const innerIcon = document.createElement('img')
    innerIcon.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/${icon}`)
    wrap.appendChild(innerIcon)
  }

  let input = lab_design_system_d('input', `input-style-${e}`, wrap, null, 'input-style')

  value && input.setAttribute('value', value)

  return input
}


function UserContent(box) {
  let page = lab_design_system_d('div', "user-page", box, null, null)


  let selectedItem = ''
  function StylesMenu(item) {
    if (document.querySelector('.selectedItem')) {
      document.querySelector('.selectedItem').classList.remove('selectedItem')
    }
    item.classList.add('selectedItem')


    let itemStyles = window.getComputedStyle(item)
    let css = {
      'font-family': itemStyles.fontFamily,
      'text-align': itemStyles.textAlign,
      'font-style': itemStyles.fontStyle,
      'font-weight': itemStyles.fontWeight,
      'font-size': itemStyles.fontSize,
      'line-height': itemStyles.lineHeight,
      'letter-spacing': itemStyles.letterSpacing,
      'stroke': itemStyles.stroke,
      'color': itemStyles.color,
      'stroke-width': itemStyles.strokeWidth,
    }

    function renderMenu() {
      let elementMenu = lab_design_system_d('div', "elementMenu", box, null, null)
      let elementMenuButtons = lab_design_system_d('div', "elementMenu-buttons", elementMenu, null, null)
      let elementMenuBody = lab_design_system_d('div', "elementMenuBody", elementMenu, null, null)
      let menuSettings = ['general', 'additional']
      let activeSettings = 'additional'

      menuSettings.forEach((e) => {
        let btn = lab_design_system_d('button', e, elementMenuButtons, e, 'element-menu-btn')
        e == activeSettings && btn.classList.add('active')

        btn.addEventListener('click', () => {
          if (!btn.classList.contains('active')) {
            document.querySelector('.lab-element-menu-btn.active').classList.remove('active')
            btn.classList.add('active')
          }
        })
      })

      let settings = lab_design_system_d('div', "menu-style-settings", elementMenuBody, null, null)

      dropList('tag', 'p', ['div', 'span', 'h1'], settings)
      dropList('font', css['font-family'], ['Arial', 'Arial2', 'Arial3'], settings)

      let fontSettings = lab_design_system_d('div', "fontSettings", elementMenuBody, null, null)
      let textALign = lab_design_system_d('div', "textALign", fontSettings, null, null)
      let textStyle = lab_design_system_d('div', "textStyle", fontSettings, null, null)
      let textALignList = ['left', 'center', 'right', 'justify']
      let textStyleList = ['italic', 'underline', 'line', 'dec']

      textALignList.forEach(v => {
        let btn = button(v, textALign, `${v}-text.svg`, null)
        btn.addEventListener('click', () => {
          item.style.textAlign = v
        })
      })



      button('italic', textStyle, 'italic-style.svg', null)
      button('underline', textStyle, 'underline-style.svg', null)
      button('line', textStyle, 'line-through-style.svg', null)
      button('dec', textStyle, 'text-decoration-style.svg', null)


      let textSettings = lab_design_system_d('div', "textSettings", elementMenuBody, null, null)

      dropList('weight', css['font-weight'], ['normal', 'bold', 'thin', 'medium', 'black'], textSettings)
      let fontSize = input('size', textSettings, null, css['font-size'])

      function inputStyle(e, style, postfix) {
        item.style[style] = `${e.value}${postfix ? postfix : ''}`
        console.log(item.style[style])

      }
      fontSize.addEventListener('input', () => inputStyle(fontSize, 'fontSize', 'px'))

      let lineHeight = input('line-height', textSettings, 'line-height.svg', css['line-height'])

      lineHeight.addEventListener('input', () => inputStyle(lineHeight, 'lineHeight', null))

      let letterSpacing = input('letter-spacing', textSettings, 'letter-spacing.svg', css['letter-spacing'])
      letterSpacing.addEventListener('input', () => inputStyle(letterSpacing, 'letterSpacing', null))



      let colorSettings = lab_design_system_d('div', "colorSettings", elementMenuBody, null, null)
      let textColor = lab_design_system_d('span', "text-color", colorSettings, 'Text color', null)
      let textColorInput = lab_design_system_d('input', "input-text-color", colorSettings, null, 'color-input')
      textColorInput.setAttribute('type', 'color')
      textColorInput.setAttribute('value', css['color'])
      textColorInput.addEventListener('input', () => {
        console.log("aaaaaa")

        inputStyle(textColorInput, 'color', null)
        console.log(textColorInput.value)

      })

      let stroke = lab_design_system_d('span', "text-stroke", colorSettings, 'Stroke', null)

      let strokeWrap = lab_design_system_d('div', "strokeWrap", colorSettings, null, null)
      input('stroke', strokeWrap, null, null)
      let strokeColorInput = lab_design_system_d('input', "input-stroke-color", strokeWrap, null, 'color-input')
      strokeColorInput.setAttribute('type', 'color')
      strokeColorInput.setAttribute('value', css['stroke'])
    }
    if (selectedItem == '') {
      renderMenu()
      selectedItem = item
    }
    else {
      box.removeChild(document.getElementById('lab-elementMenu'))
      renderMenu()
      selectedItem = item
    }


  }

  page.addEventListener('mousemove', (e) => {

    page.addEventListener('click', () => {
      let el = document.elementsFromPoint(e.pageX, e.pageY)[0]

      console.log(el)
      StylesMenu(el)
    })

  })
}

function design_mode() {
  let designBody = lab_design_system_d('div', "designBody", rootLayer, null, null)

  sideMenu(TemplatesList, ElementsList, designBody)
  topSettingsBar(designBody)
  UserContent(designBody)
  rightMenu(designBody)

  lab_fade_in_recursively(designBody, 0.3)
}






design_mode()
