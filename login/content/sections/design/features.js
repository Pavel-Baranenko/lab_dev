async function lab_load_component(url, parameters) {
  try {
    const response = await fetch(url)
    const scriptContent = await response.text()
    const scriptFunction = new Function(scriptContent)
    const execution = scriptFunction(parameters)
    return execution(parameters)
  } catch (error) {
    console.log('LAB COMPONENTS LOADER LOAD ERROR', error)
    throw error
  }
}

function lab_design_system(tag, id, parent, content, className) {
  const elementToAppend = document.createElement(tag)
  elementToAppend.setAttribute('id', 'lab-' + id)
  parent.appendChild(elementToAppend)

  const A = document.querySelector('#' + 'lab-' + id)
  A.setAttribute('class', 'escape')
  className ? elementToAppend.setAttribute('class', `lab-${className} escape`) : ""

  if (content != "" && content != null && content != undefined && typeof String) {
    A.innerText = content
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

function header1() {
  let header = document.createElement('header')
  let container = createElement('div', header, null)
  container.style.maxWidth = '1180px'
  container.style.width = '100%'
  container.style.padding = '10px 20px'
  container.style.margin = '0 auto'
  container.style.display = 'flex'
  container.style.alignItems = 'center'
  container.style.gap = '15px'
  let logo = createElement('a', container, null)
  let img = createElement('img', logo, null)
  img.setAttribute("src", "file:///C:/Users/Pavel/Desktop/SiteLogo.png")
  logo.style.margin = "0 auto 0 0"
  let link = createElement('a', container, "about")
  let link2 = createElement('a', container, "Pricing")
  let link3 = createElement('a', container, "Gallery")
  let btn = createElement('button', container, "Get started")
  btn.style.padding = "10px 35px"
  btn.style.color = "#fff"
  btn.style.borderRadius = "30px"
  btn.style.background = "linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
  return header;
}

function hero() {
  let section = document.createElement('section')
  section.style.padding = "90px 0"
  let container = createElement('div', section, null)
  container.style.maxWidth = '1180px'
  container.style.width = '100%'
  container.style.padding = '10px 20px'
  container.style.margin = '0 auto'
  container.style.display = 'flex'
  container.style.justifyContent = 'space-between'

  let left = createElement('div', container, null)

  let h1 = createElement('h1', left, "Connecting all your banking opportunities in one app")
  let p = createElement('p', left, "A smart mobile application you can control your business needs")
  h1.style.color = "#37383C"
  h1.style.weight = "700"
  h1.style.fontSize = "60px"
  p.style.margin = "64px 0"
  p.style.color = "#696C73"

  let btn = createElement('button', left, "Download")
  btn.style.padding = "15px 64px"
  btn.style.color = "#fff"
  btn.style.borderRadius = "30px"
  btn.style.background = "linear-gradient(90deg, #00D2FF 0%, #3A7BD5 100%)"

  let img = createElement('img', container, null)
  img.setAttribute("src", "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/Samsung Galaxy S21.png")

  return section;
}


let h1 = '<header><div style="max-width: 1180px; width: 100%; padding: 10px 20px; margin: 0px auto; display: flex; align-items: center; gap: 15px;"><a style="margin: 0px auto 0px 0px;"><img src="/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/SiteLogo.png"></a><a>about</a><a>Pricing</a><a>Gallery</a><button style="padding: 10px 35px; color: rgb(255, 255, 255); border-radius: 30px; background: linear-gradient(90deg, rgb(230, 92, 0) 0%, rgb(249, 212, 35) 100%);">Get started</button></div></header>'

let section1 = '<section style="padding: 90px 0px;"><div style="max-width: 1180px; width: 100%; padding: 10px 20px; margin: 0px auto; display: flex; justify-content: space-between;"><div><h1 style="color: rgb(55, 56, 60); font-size: 60px;">Connecting all your banking opportunities in one app</h1><p style="margin: 64px 0px; color: rgb(105, 108, 115);">A smart mobile application you can control your business needs</p><button style="padding: 15px 64px; color: rgb(255, 255, 255); border-radius: 30px; background: linear-gradient(90deg, rgb(0, 210, 255) 0%, rgb(58, 123, 213) 100%);">Download</button></div><img src="/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/Samsung Galaxy S21.png"></div></section>'


let TEMPLATES = {
  "header-1": h1,
  "section-1": section1,
}
let contentTags = ["DIV", "SECTION"]

let uditableTags = ["SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "P", "I", "B", "STRONG", "FONT", "EM", "SMALL", "SUP", "SUB", "Q", "BLOCKQUOTE"]

function sideMenu(TemplatesList, ElementsLists, box) {

  let menu = lab_design_system('div', 'side-menu', box, null, 'side-menu');
  let menuButton = lab_design_system('div', "show-menu", menu, null, "show-menu")
  let buttonIcon = lab_design_system('img', "show-menu-icon", menuButton, null, null)
  buttonIcon.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/arrow_menu_close.svg")

  menuButton.addEventListener('click', () => {
    menu.style.margin = menu.style.margin == "0px 0px 0px -100px" ? "0" : "0px 0px 0px -100px"
    menuButton.style.transform = menuButton.style.transform == "translateX(40px) rotate(-180deg)" ? "none" : "translateX(40px) rotate(-180deg)"
  })

  let templatesBox = lab_design_system('div', "templates-box", menu, null, null)
  let templatesTitle = lab_design_system('span', "templates-menu-span", templatesBox, "Templates", "side-menu-span")
  let templatesWrap = lab_design_system('div', "templates-wrap", templatesBox, null, "side-menu-templates")


  let elementsBox = lab_design_system('div', "elements-box", menu, null, null)
  elementsBox.style.margin = "40px 0 0 0"
  let elementsTitle = lab_design_system('span', "elements-menu-span", elementsBox, "Elements", "side-menu-span")
  let elementsWrap = lab_design_system('div', "elements-wrap", elementsBox, null, "side-menu-templates")


  function addList(e, listing) {
    e.map(el => {
      let item = lab_design_system('div', `side-menu-template-${el.code}`, listing, null, "side-menu-template")
      let icon = lab_design_system('div', `${el.code}-icon-box`, item, null, "side-menu-template-icon")
      let img = lab_design_system('img', `${el.code}-icon`, icon, null, "side-menu-template-img")
      img.setAttribute('src', el.icon)
      let text = lab_design_system('span', `${el.code}-label`, item, el.label, "side-menu-template-span")

      item.addEventListener('click', () => {
        item.style.position = "relative"
        let coord = item.getBoundingClientRect();
        let copy = item.cloneNode(true)
        copy.style.position = "absolute"
        copy.style.opacity = "0.7"
        item.after(copy);
        copy.style.left = `${coord.left + 7}px`;
        copy.style.top = `${coord.top}px`;

        let page = document.getElementById('lab-user-page')

        if (copy) {
          function onMouseDrag({ movementX, movementY }) {
            let getContainerStyle = window.getComputedStyle(copy);
            let leftValue = parseInt(getContainerStyle.left);
            let topValue = parseInt(getContainerStyle.top);
            copy.style.left = `${leftValue + movementX}px`;
            copy.style.top = `${topValue + movementY}px`;
          }
          //!добавить общий листенер на mousemove, внутри него остальные
          copy.addEventListener("mousedown", () => {
            copy.addEventListener("mousemove", onMouseDrag);
            let el = document.elementsFromPoint(e.pageX, e.pageY)[1]
            if (contentTags.indexOf(el.tagName) != -1) {
              console.log(el.tagName);
            }
          });

          // document.addEventListener('mousemove', (e) => {
          //   let el = document.elementsFromPoint(e.pageX, e.pageY)[1]
          //   if (contentTags.indexOf(el.tagName) != -1) {
          //     console.log(el.tagName);
          //   }
          // })

          document.addEventListener("mouseup", () => {
            copy.removeEventListener("mousemove", onMouseDrag);
            listing.removeChild(copy)
            page.innerHTML += TEMPLATES[el.code]
            // page.appendChild(TEMPLATES[el.code])
          });
        }
      })
    })
  }

  addList(TemplatesList, templatesWrap)
  addList(ElementsLists, elementsWrap)
}

function rightMenu(box) {
  let menu = lab_design_system('div', 'code-box', box, null, 'code-box');

  let menuButton = lab_design_system('div', "code-menu-show", menu, null, "code-menu-show")
  let buttonIcon = lab_design_system('img', "code-menu-icon", menuButton, null, null)
  buttonIcon.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/message-code 1.svg")
  let codeWrapper = lab_design_system('div', "code-wrapper", menu, null, "code-wrapper")

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('active')
    let page = document.getElementById('lab-user-page').innerHTML
    codeWrapper.innerText = `${page}`

  })

}

function topSettingsBar(box) {

  let topSettings = lab_design_system('div', "top-settings", box, null, "top-settings");

  let button = lab_design_system("button", "top-settings-btn", topSettings, null, null)
  let buttonImg = lab_design_system("img", "top-settings-btn-img", button, null, null)
  buttonImg.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/settings.svg")
  let responsiveList = ["desctop", "tablet", "mobile"]

  responsiveList.map(e => {
    let button = lab_design_system("button", `set-responsive-${e}`, topSettings, null, 'top-settings-screen')

    e == "desctop" && button.classList.add('active')

    button.addEventListener('click', () => {
      if (document.querySelector('.lab-top-settings-screen.active')) {
        document.querySelector('.lab-top-settings-screen.active').classList.remove('active')
      }
      button.classList.add('active')
    })

    let buttonImg = lab_design_system("img", `set-responsive-icon-${e}`, button, null, "top-settings-btn-img")
    buttonImg.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/${e}.svg`)
  })


  let pixelScreen = lab_design_system('div', "top-settings-pixel", topSettings, window.outerWidth + ' px', "top-settings-pixel");
  let pixelSettings = lab_design_system("button", "top-settings-btn-pixel", topSettings, null, "top-settings-btn mini line")
  let pixelSettingsImg = lab_design_system("img", "top-settings-btn-icon", pixelSettings, null, null)
  pixelSettingsImg.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/settings.svg")
  let setPage = lab_design_system('button', "top-settings-page", topSettings, null, "top-settings-page line",)
  let img = lab_design_system('img', 'page-box', setPage, null, null)
  img.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/page-box.svg`)

  setPage.appendChild(document.createTextNode("Main"))

  let arrow = lab_design_system('img', 'page-arrow', setPage, null, "top-settings-page-arrow")

  arrow.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/chevron_right.svg`)

  let sizeSwitcher = lab_design_system('input', 'sliderRange', topSettings, null, null)
  sizeSwitcher.setAttribute('type', "range")
  sizeSwitcher.setAttribute('min', "1")
  sizeSwitcher.setAttribute('max', "100")
  sizeSwitcher.setAttribute('type', "range")
  sizeSwitcher.setAttribute('value', "100")

  let size = lab_design_system('div', 'screen-size', topSettings, "100%", "top-settings-pixel lined ");
  size.style.width = "60px"

  sizeSwitcher.oninput = function () {
    size.innerHTML = this.value + "%";
    document.getElementById('lab-user-page').style.transform = `scale(${this.value / 100})`
  }

  let view = lab_design_system('button', "top-settings-view", topSettings, null, null)
  let viewImg = lab_design_system('img', "top-settings-view-icon", view, null, null)
  viewImg.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/visibility.svg`)
  let download = lab_design_system('button', "top-settings-btn-download", topSettings, null, null)
  let downloadImg = lab_design_system('img', "top-settings-download-icon", download, null, null)
  downloadImg.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/download.svg`)



  let blind = lab_design_system('button', "blind-btn", topSettings, null, null)
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
  let drop = lab_design_system('div', `drop-${e}`, parent, null, 'drop')
  let selected = lab_design_system('div', `drop-selected-${e}`, drop, value, 'drop-list-selected')
  let list = lab_design_system('div', `drop-list-${e}`, drop, null, 'drop-list')

  selected.addEventListener('click', () => drop.classList.toggle('active'))

  arr.forEach(a => {
    let item = lab_design_system('div', `item-${a}`, list, a, 'drop-list-item')
    item.addEventListener('click', () => {
      drop.classList.remove('active')
      selected.innerHTML = a
    })
  });
}

function button(e, parent, icon, text) {
  let btn = lab_design_system('button', `menu-style-${e}`, parent, null, 'menu-style-btn')

  if (icon) {
    const innerIcon = document.createElement('img')
    innerIcon.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/${icon}`)
    btn.appendChild(innerIcon)
  }

  text && lab_design_system('span', `menu-style-text-${e}`, btn, text, 'menu-style-text')
  return btn
}
function input(e, parent, icon, value) {
  let wrap = lab_design_system('div', `input-wrap-${e}`, parent, null, 'input-wrap')

  if (icon) {
    const innerIcon = document.createElement('img')
    innerIcon.setAttribute('src', `/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/${icon}`)
    wrap.appendChild(innerIcon)
  }

  let input = lab_design_system('input', `input-style-${e}`, wrap, null, 'input-style')

  value && input.setAttribute('value', value)

  return input
}


function UserContent(box) {
  let page = lab_design_system('div', "user-page", box, null, null)


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
      let elementMenu = lab_design_system('div', "elementMenu", box, null, null)
      let elementMenuButtons = lab_design_system('div', "elementMenu-buttons", elementMenu, null, null)
      let elementMenuBody = lab_design_system('div', "elementMenuBody", elementMenu, null, null)
      let menuSettings = ['general', 'additional']
      let activeSettings = 'additional'

      menuSettings.forEach((e) => {
        let btn = lab_design_system('button', e, elementMenuButtons, e, 'element-menu-btn')
        e == activeSettings && btn.classList.add('active')

        btn.addEventListener('click', () => {
          if (!btn.classList.contains('active')) {
            document.querySelector('.lab-element-menu-btn.active').classList.remove('active')
            btn.classList.add('active')
          }
        })
      })

      let settings = lab_design_system('div', "menu-style-settings", elementMenuBody, null, null)

      dropList('tag', 'p', ['div', 'span', 'h1'], settings)
      dropList('font', css['font-family'], ['Arial', 'Arial2', 'Arial3'], settings)

      let fontSettings = lab_design_system('div', "fontSettings", elementMenuBody, null, null)
      let textALign = lab_design_system('div', "textALign", fontSettings, null, null)
      let textStyle = lab_design_system('div', "textStyle", fontSettings, null, null)
      let textALignList = ['left', 'center', 'right', 'justify']
      let textStyleList = ['italic', 'underline', 'line', 'dec']

      textALignList.forEach(v => {
        let btn = button(v, textALign, `${v}-text.svg`, null)
        btn.addEventListener('click', () => {
          item.style.textAlign = v
        })
      })

      // textStyleList.forEach(v => {
      //   let btn = button(v, textALign, `${v}-style.svg`, null)
      // })


      button('italic', textStyle, 'italic-style.svg', null)
      button('underline', textStyle, 'underline-style.svg', null)
      button('line', textStyle, 'line-through-style.svg', null)
      button('dec', textStyle, 'text-decoration-style.svg', null)


      let textSettings = lab_design_system('div', "textSettings", elementMenuBody, null, null)

      dropList('weight', css['font-weight'], ['normal', 'bold', 'thin', 'medium', 'black'], textSettings)
      let fontSize = input('size', textSettings, null, css['font-size'])

      function inputStyle(e, style, postfix) {
        item.style[style] = `${e.value}${postfix ? postfix : ''}`
        console.log(item.style[style]);

      }
      fontSize.addEventListener('input', () => inputStyle(fontSize, 'fontSize', 'px'))

      let lineHeight = input('line-height', textSettings, 'line-height.svg', css['line-height'])

      lineHeight.addEventListener('input', () => inputStyle(lineHeight, 'lineHeight', null))

      let letterSpacing = input('letter-spacing', textSettings, 'letter-spacing.svg', css['letter-spacing'])
      letterSpacing.addEventListener('input', () => inputStyle(letterSpacing, 'letterSpacing', null))



      let colorSettings = lab_design_system('div', "colorSettings", elementMenuBody, null, null)
      let textColor = lab_design_system('span', "text-color", colorSettings, 'Text color', null)
      let textColorInput = lab_design_system('input', "input-text-color", colorSettings, null, 'color-input')
      textColorInput.setAttribute('type', 'color')
      textColorInput.setAttribute('value', css['color'])
      textColorInput.addEventListener('input', () => {
        console.log("aaaaaa");

        inputStyle(textColorInput, 'color', null)
        console.log(textColorInput.value);

      })

      let stroke = lab_design_system('span', "text-stroke", colorSettings, 'Stroke', null)



      let strokeWrap = lab_design_system('div', "strokeWrap", colorSettings, null, null)
      input('stroke', strokeWrap, null, null)
      let strokeColorInput = lab_design_system('input', "input-stroke-color", strokeWrap, null, 'color-input')
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

      console.log(el);
      StylesMenu(el)
    })

  })
}

function design_mode() {
  let designBody = lab_design_system('div', "designBody", rootLayer, null, null)

  sideMenu(TemplatesList, ElementsList, designBody)
  topSettingsBar(designBody)
  UserContent(designBody)
  rightMenu(designBody)
}






design_mode()
