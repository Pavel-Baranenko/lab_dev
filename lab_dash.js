
function select(label, list, parent, value, func) {
    const select = lab_design_system("div", `select-${value}`, parent, null, null, ["select", "box"])
    const top = lab_design_system("div", `select-top-${value}`, select, null, null, ["select", "top"])
    const topSpan = lab_design_system("span", `selected-${value}`, top, label, null)
    const listing = lab_design_system("div", `select-list-${value}`, select, null, null, ["select", "list"])
    const arrow = lab_design_system("img", `select-arrow-${value}`, top, null, null)
    arrow.src = "https://laboranth.tech/D/R/IMG/CLA/arrow_drop_down.svg"

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

    lab_fade_in_recursively(popup, 0.3)
    return wrap ? popup : popupContent;
}

async function checkMicrophoneStatus() {
    if ("permissions" in navigator) {
        const permission = await navigator.permissions.query({ name: "microphone" });
        if (permission.state === "granted") return true
    }
    return false
}

let activeOption

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

    activeOption = 'dash'

    const line = lab_design_system("div", "alt-label-line", parent, null, null, ["parameters", "line"])

    const shortcuts = select(functionalitiesList.dash, functionalitiesList, line, activeOption, (e) => {
        activeOption = e
        socket.emit('userShortcuts', lab_local_storage_object('global'), callback => {
            applyShortcuts(callback.data)
        })
    })

    const altLabel = lab_design_system("div", "alt-label", line, "CTRL | CMD +", null)

    const keyInput = input('', '', line)

    keyInput.setAttribute('readonly', true)

    // let findAssociatedIndex
    // if (u.configs.shortcuts) {
    //     findAssociatedIndex = u.configs.shortcuts.find(s => s.fn_name === activeOption)
    // } else {
    //     findAssociatedIndex = defaultOpt[activeOption]
    // }


    keyInput.addEventListener('keydown', e => {
        e.preventDefault()
        keyInput.value = e.key
    })
    const buttons = lab_design_system("div", "alt-buttons-line", parent, null, null, ["parameters", "line"])

    const reinitialize = lab_design_system("button", "reinitialize", buttons, u.lngData.reinitialize, null, ['buttons', 'grey'])
    const save = lab_design_system("button", "save", buttons, u.lngData.save, null, ['buttons', 'action'])

    const defaultOpt = {
        dash: 'h',
        save: 's',
        text_editor: 't',
        menu: 'm',
        manual: 'i',
        designer_mode: 'd',
        copy: 'c',
        paste: 'v',
        translate: 'q',
        rotate: 'a',
        foreground: 'w',
        background: 'x',
        merge: 'y',
        up: '+',
        down: '-',
        marker: 'r',
        peeling_mask: 'u',
        square: 'k',
        circle: 'j',
        triangle: 'b',
        free_form: 'l',
        feather: 'f',
    }

    reinitialize.addEventListener('click', () => {
        keyInput.value = defaultOpt[activeOption]
        const findAssociatedIndex = u.configs.shortcuts.find(s => s.fn_name === activeOption)

        const userLSG = lab_local_storage_object('global')
        userLSG.bindedTo = findAssociatedIndex.fn
        userLSG.binding = keyInput.value
        userLSG.fn_name = activeOption
        socket.emit('bindShortcut', userLSG)
    })

    save.addEventListener('click', () => {
        let findAssociatedIndex
        if (u.configs.shortcuts) {
            findAssociatedIndex = u.configs.shortcuts.find(s => s.fn_name === activeOption)
        } else {
            findAssociatedIndex = defaultOpt[activeOption]
        }

        const userLSG = lab_local_storage_object('global')
        if (keyInput.value) {
            userLSG.bindedTo = findAssociatedIndex.fn
            userLSG.binding = keyInput.value
            userLSG.fn_name = activeOption
            socket.emit('bindShortcut', userLSG)
        } else {
            alertUser(u.lngData.input_cannot_be_empty)
        }
    })

    function defaults() {
        console.log(activeOption);
        
        keyInput.setAttribute('placeholder', defaultOpt[activeOption])
    }

    function applyShortcuts(configs) {
        keyInput.value = ""
        if (configs) {
            u.configs = configs
        }

        if (lab_obj_has_key(u.configs, 'shortcuts')) {
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
                lab_fade_in_recursively(boxWrap, 0.5)
            })


        }
        else if (tabValue == "controls") {
            const line = lab_design_system("div", "profile-box-voice", boxWrap, null, null, ["parameters", "line"])
            line.style.width = "100%"
            line.style.alignItems = "center"

            const voice = lab_design_system("span", "voice-command", line, u.lngData.vocal_command, null)

            if (checkMicrophoneStatus()) {
                const voiceBtn = lab_design_system("button", "voice-activate", line, u.lngData.activate, null, ["buttons", "action"])
                voiceBtn.addEventListener("click", () => {
                    lab_vocal_control("on", u.lng)
                    lab_local_storage_object_update("global", { speech: "enabled" })
                    location.reload()
                })
            }
            else {
                const voiceBtn = lab_design_system("button", "voice-activate", line, u.lngData.disable, null, ["buttons", "grey"])
                voiceBtn.addEventListener("click", () => {
                    lab_vocal_control("off")
                    lab_local_storage_object_update("global", { speech: "disabled" })
                    location.reload()
                })

            }
            shortcutsSettings(u, boxWrap)


        }

        lab_fade_in_recursively(boxWrap, 0.5)
    }


    const tabButtons = lab_design_system("div", "tab-buttons", side, null, null)
    tabButtons.style.position = "relative"

    const tabs = {
        "profile": u.lngData.profile,
        "settings": u.lngData.settings,
        "controls": u.lngData.controls
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

    // itemMenu.addEventListener("mouseleave", () => {
    //     parent.removeChild(itemMenu)
    // })

    menuItems.forEach(p => {
        const item = lab_design_system("button", `project-menu-${p}`, itemMenuBox, lngData[p], null, ["apps", "settings"])
        const itemImg = lab_design_system("img", `project-menu-img-${p}`, item, null, null)
        itemImg.style.transform = 'rotate(-deg)'
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

function footer(parent) {
    rootLayer.setAttribute('class', 'lab-laboranth-scroll-classic')
    const footer = lab_design_system("div", "footer", parent, null, null, ['containers', 'footer'])
    const text = lab_design_system("span", "date", footer, `Laboranth>  |  ${new Date().getFullYear()}`, null, ['elements', 'date'])

    const link = lab_design_system("a", "legal", footer, "Legal CGU/CGV", null, ['links', 'legal'])
    link.style.cursor = "pointer"
    link.addEventListener('click', e => {
        window.open('/D/R/PDF/LegalLaboranthSAS.pdf')
    })

    const contact = lab_design_system("a", "contacts", footer, "contact@laboranth.tech", null, ['links', 'contact'])
    contact.setAttribute("href", "mailto:contact@laboranth.tech")
}

function dashboard(dashObject) {
    let appList = dashObject.appList, externalApps = dashObject.externalApps, lngData = dashObject.lngData
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
    darkTheme.setAttribute("src", "https://laboranth.tech/D/R/IMG/CLA/nightlight.svg")
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
    searchImage.setAttribute("src", "https://laboranth.tech/D/R/IMG/CLA/search.svg")

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
        lab_fade_in_recursively(result, 0.6)

    })
    const gridSwitch = lab_design_system("div", "grid-switch", header, null, null, ["elements", "gridSwitch"])

    let activeSwitch = "row"

    const gridLayouts = ["row", "column"]
    gridLayouts.forEach((e, index) => {
        const btn = lab_design_system("button", `grid-switch-${e}`, gridSwitch, null, null, ["elements", "gridBtn"])

        e == activeSwitch && (btn.style.background = "#fff")


        const icon = lab_design_system("img", `grid-icon-${e}`, btn)
        icon.setAttribute("src", `https://laboranth.tech/D/R/IMG/CLA/${e}.svg`)
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

    const create = lab_design_system("button", "create-btn", header, lngData.create, null, ["buttons", "action"])

    create.addEventListener("click", e => {
        const createPopup = popup("create-app", rootLayer)
        const popupTitle = lab_design_system("span", "popup-title", createPopup, lngData.create_app, null, ["popup", "title"])

        const popupInput = input("name", "create", createPopup, null, "100%", ["popup", "input"])
        const createPopupBtn = lab_design_system("button", "create-popup-btn", createPopup, lngData.create, null, ["buttons", "action"])

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
                image.setAttribute("src", `https://laboranth.tech/D/R/IMG/CLA/${e}.svg`)
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
            if (!e.startsWith('.')) {

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

                img.setAttribute("src", "https://laboranth.tech/D/R/IMG/CLA/more_vert.svg")

                img.addEventListener("click", () => {

                    if (document.getElementById("apps-item-menu")) {
                        project.removeChild(document.getElementById(`apps-item-menu`))
                    } else {
                        const itemMenu = lab_design_system("div", `apps-item-menu`, project, null, null, ["apps", "menu"])

                        const menuImg = lab_design_system("img", `apps-menu-img-${e}`, itemMenu, null, null, ["apps", "more"])

                        menuImg.setAttribute("src", "https://laboranth.tech/D/R/IMG/CLA/more_vert.svg")

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

return dashboard