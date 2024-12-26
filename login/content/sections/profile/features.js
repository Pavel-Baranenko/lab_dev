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


function footer(parent) {
  let footer = lab_design_system('div', "footer", parent, null, 'wrapper-box')

  footer.style.color = "#fff"
  footer.style.marginTop = "auto"
  footer.style.background = "#464C59"
  footer.style.padding = "20px 50px"

  let text = lab_design_system('span', 'date', footer, `Laboranth  |   ${new Date().getFullYear()}`, null)
  text.style.marginRight = "45px"

  let link = lab_design_system('a', 'legal', footer, "Legal CGU/CGV", null)
  link.setAttribute('href', "#")
  link.style.textDecoration = "underline"

  let contact = lab_design_system('a', 'contacts', footer, "info@laboranth.tech", null)
  contact.setAttribute('href', "mailto:info@laboranth.tech")
  contact.style.marginLeft = "auto"
  contact.style.fontWeight = "700"

}
function header(parent) {

  let header = lab_design_system('div', 'header', parent, null, 'wrapper-box')
  header.style.paddingTop = "30px"

  let logo = lab_design_system('a', 'logo', header, null, null);
  logo.style.marginRight = "auto"
  logo.setAttribute('href', "/")

  let logoImg = lab_design_system('img', 'logo-img', logo, null, null);
  logoImg.style.width = "67px"

  logoImg.setAttribute('src', "https://laboranth.tech/D/R/IMG/logoAlt.svg")


  let create = lab_design_system('button', "create-btn", header, "+ Create project", "create-btn")

  create.style.marginRight = "100px"

  let avatar = lab_design_system('button', 'user-avatar', header, null, null)
  avatar.style.width = '50px'
  avatar.style.height = '50px'
  avatar.style.borderRadius = '50px'
  avatar.style.backgroundColor = '#ddd'
  // avatar.style.overflow = 'hidden'
  avatar.style.position = 'relative'

  let img = lab_design_system('img', 'user-picture', avatar, null, null)
  img.style.width = "100%"
  img.style.objectFit = "cover"






  avatar.addEventListener('click', () => {
    if (document.querySelector('.lab-header-menu')) {
      let menu = document.querySelector('.lab-header-menu')
      avatar.removeChild(menu)
    } else {
      let headerMenu = lab_design_system('div', 'header-menu', avatar, null, 'header-menu')

      headerMenu.style.position = 'absolute'
      headerMenu.style.top = 'calc(100% + 9px)'
      headerMenu.style.right = '0'
      headerMenu.style.boxShadow = '0px 1px 13.9px 0px #00000014'
      headerMenu.style.padding = '32px 25px'
      headerMenu.style.borderRadius = '15px'
      headerMenu.style.backgroundColor = '#fff'

      let headerMenuProfile = lab_design_system('button', 'header-menu-profile', headerMenu, 'Profile', 'header-menu-btn')
      let profPic = lab_design_system('img', 'header-profile-img', headerMenuProfile, null, null)
      profPic.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/dash/img/profile.svg")
      let headerPlans = lab_design_system('button', 'header-menu-plans', headerMenu, 'Plans', 'header-menu-btn')
      let plansPic = lab_design_system('img', 'header-plans-img', headerPlans, null, null)
      plansPic.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/dash/img/plans.svg")
      let headerLogout = lab_design_system('button', 'header-menu-logout', headerMenu, 'Logout', 'header-menu-btn')
      let LogPic = lab_design_system('img', 'header-log-img', headerLogout, null, null)
      LogPic.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/dash/img/logout.svg")
    }
  })
}





function profile() {
  let wrapper = lab_design_system('div', "body-wrapper", rootLayer, null, 'wrapper')
  header(wrapper)

  let activeTab = 'profile'

  let profile = lab_design_system('div', 'profile-page', wrapper, null, null)
  profile.style.display = 'flex'
  profile.style.backgroundColor = '#FFFFFF'
  profile.style.borderRadius = '40px'
  profile.style.overflow = 'hidden'
  profile.style.maxWidth = '1080px'
  profile.style.width = '100%'
  profile.style.margin = '80px auto auto auto'
  profile.style.minHeight = '600px'

  let side = lab_design_system('div', 'profile-side', profile, null, null)

  side.style.backgroundColor = '#3C4CA6'
  side.style.color = '#fff'
  side.style.padding = '24px 0 24px 24px'
  side.style.width = '250px'
  side.style.minHeight = '100%'
  side.style.display = 'flex'
  side.style.flexDirection = "column"

  let boxWrap = lab_design_system('div', 'profile-box', profile, null, null)
  boxWrap.style.padding = "60px 120px 60px 60px"
  boxWrap.style.width = "100%"
  boxWrap.style.display = "flex"
  boxWrap.style.flexDirection = "column"
  boxWrap.style.gap = "25px"

  let user = lab_design_system('div', 'profile-user', side, null, null)
  user.style.margin = ' 0 0 40px 0'
  let userPic = lab_design_system('div', 'profile-user-avatar', user, null, null)
  userPic.style.backgroundColor = '#ddd'
  userPic.style.width = '50px'
  userPic.style.height = '50px'
  userPic.style.borderRadius = '50px'
  let userName = lab_design_system('span', 'profile-user-name', user, "name", null)

  let tabButtons = lab_design_system('div', 'profile-buttons', side, null, null)
  let profileBtn = lab_design_system('button', 'profile-tabs-profile-btn', tabButtons, "Profile", 'profile-btn active')
  profileBtn.addEventListener('click', () => {
    activeTab = 'profile'
    document.querySelector('.lab-profile-btn.active').classList.remove('active')
    profileBtn.classList.add('active')
    boxWrap.innerHTML = ''

    let line = lab_design_system('div', 'profile-box-a', boxWrap, null, 'box-line')


    let name = lab_design_system('span', 'profile-box-22d3w', line, 'Name', null)
    let nameValue = lab_design_system('p', 'profile-box-d3w', line, 'Andrey V', null)
    let editName = lab_design_system('img', 'profile-boxs-d3w', nameValue, null, null)
    editName.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/edit.svg")
    let line2 = lab_design_system('div', 'profile-box-aw', boxWrap, null, 'box-line')

    let mail = lab_design_system('span', 'profile-box-acs', line2, "E-mail", null)
    let mailValue = lab_design_system('p', 'profile-box-d3csw', line2, 'baranenko.work@gmail.com', null)

    let editMail = lab_design_system('img', 'profile-boxs-d3sw', mailValue, null, null)
    editMail.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/edit.svg")
  })
  let settingsBtn = lab_design_system('button', 'profile-tabs-settings-btn', tabButtons, "Settings", 'profile-btn')
  settingsBtn.addEventListener('click', () => {
    activeTab = 'settings'
    document.querySelector('.lab-profile-btn.active').classList.remove('active')
    settingsBtn.classList.add('active')

    boxWrap.innerHTML = ''

    let line = lab_design_system('div', 'profile-box-a', boxWrap, null, 'box-line')


    let name = lab_design_system('span', 'profile-box-22d3w', line, 'Name', null)
    let nameValue = lab_design_system('p', 'profile-box-d3w', line, 'Andrey V', null)
    let editName = lab_design_system('img', 'profile-boxs-d3w', nameValue, null, null)
    editName.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/edit.svg")
    let line2 = lab_design_system('div', 'profile-box-aw', boxWrap, null, 'box-line')

    let mail = lab_design_system('span', 'profile-box-acs', line2, "E-mail", null)
    let mailValue = lab_design_system('p', 'profile-box-d3csw', line2, 'baranenko.work@gmail.com', null)

    let editMail = lab_design_system('img', 'profile-boxs-d3sw', mailValue, null, null)
    editMail.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/edit.svg")
  })
  let paymentsBtn = lab_design_system('button', 'profile-tabs-payments-btn', tabButtons, "Payments", 'profile-btn')

  paymentsBtn.addEventListener('click', () => {
    activeTab = 'payments'
    document.querySelector('.lab-profile-btn.active').classList.remove('active')
    paymentsBtn.classList.add('active')
    boxWrap.innerHTML = ''

    let line = lab_design_system('div', 'profile-box-a', boxWrap, null, 'box-line')


    let heading = lab_design_system('span', 'profile-box-22d3w', line, 'Payment method', null)
    let btn = lab_design_system('button', 'profile-box-22xd3w', boxWrap, '+ Add', 'active-btn')

  })




  if (activeTab == "profile") {
    boxWrap.innerHTML = ''

    let line = lab_design_system('div', 'profile-box-a', boxWrap, null, 'box-line')


    let name = lab_design_system('span', 'profile-box-22d3w', line, 'Name', null)
    let nameValue = lab_design_system('p', 'profile-box-d3w', line, 'Andrey V', null)
    let editName = lab_design_system('img', 'profile-boxs-d3w', nameValue, null, null)
    editName.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/edit.svg")
    let line2 = lab_design_system('div', 'profile-box-aw', boxWrap, null, 'box-line')

    let mail = lab_design_system('span', 'profile-box-acs', line2, "E-mail", null)
    let mailValue = lab_design_system('p', 'profile-box-d3csw', line2, 'baranenko.work@gmail.com', null)

    let editMail = lab_design_system('img', 'profile-boxs-d3sw', mailValue, null, null)
    editMail.setAttribute('src', "/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/edit.svg")


  }
  else if (activeTab == "payments") {
    boxWrap.innerHTML = ''

    let line = lab_design_system('div', 'profile-box-a', boxWrap, null, 'box-line')


    let heading = lab_design_system('span', 'profile-box-22d3w', line, 'Payment method', null)

  }
  footer(wrapper)

}

profile()