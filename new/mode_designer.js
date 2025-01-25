class Designer {
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


}
