
const topSettings = lab_design_system('div', "top-settings", designBody, '', '', ['design', 'top'])
topSettings.style.maxWidth = '1080px'
const settingsBtn = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'settings-white')
const responsiveList = ["landscape", "portrait"]
settingsBtn.minHeight = '25px'
settingsBtn.minWidth = '25px'

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
  btn.minHeight = '42px'
  btn.minWidth = '42px'
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
pixelScreen.style.minWidth = '65px'
setVpm(options.vpm)

const pixelSettings = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'settings-white')
pixelSettings.querySelector('img').style.width = '15px'

const setPage = DesignConstructor.button(topSettings, ['design', 'setPage'], '', 'page-box')

setPage.appendChild(document.createTextNode(sectionElementsObject.section))
const arrow = lab_design_system('img', 'page-arrow', setPage)
arrow.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/chevron_right.svg`)

setPage.addEventListener('click', () => {
  let last = document.getElementById('lab-pages-list')
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
view.style.minHeight = '25px'

const download = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'download')
download.style.minHeight = '25px'
const blindTop = lab_design_system('button', "blind-btn", topSettings, '', '', ['design', 'blind'])

blindTop.addEventListener('click', () => {
  DesignConstructor.toggleClass(topSettings, 'design', 'top', 'hideTop')
  Options(options, 'settingsBar')
})