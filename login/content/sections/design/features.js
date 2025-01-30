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
        zIndex: 9999,
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
        zIndex: 9999,
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
        position: "relative",
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
        zIndex: "9999",
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
        zIndex: '999',
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
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "30px",
        boxSizing: 'border-box'
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
    },
    'blockMenu': {
      'default': {
        'display': 'flex',
        background: "#fff",
        maxWidth: "160px",
        gap: '20px',
        padding: "18px 25px",
        boxShadow: '0px 1px 13.9px 0px #00000014',
        borderRadius: "15px",
        'flexDirection': "column"
      }
    },
    'blockMenuItem': {
      'default': {
        'display': 'flex',
        gap: '12px',
        cursor: 'pointer'
      }
    },
    'codeBox': {
      'default': {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        transition: 'all 0.1s linear',
        top: '0',
        right: 0,
        width: "clamp(320px,49svw, 950px)",
        backgroundColor: '#464C59',
        borderRadius: '30px 0 0 0',
        padding: '80px 20px 0 20px',
        minHeight: 'calc(100vh - 100px)',
        height: '100%',
        transform: 'translateX(100%)',
        zIndex: 99991
      }
    },
    'codeBoxActive': {
      'default': {
        transform: 'none',
        top: '0'
      }
    },
    'codeBoxShow': {
      'default': {
        position: 'absolute',
        top: 0,
        left: '-63px',
        border: "none",
        cursor: 'pointer',
        width: '62px',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '30px 30px 0px 30px',
        opacity: '0px',
        backgroundColor: '#FED05E'
      }
    },
    'codeBoxShowActive': {
      'default': {
        left: '-1px',
        borderRadius: '30px 0px 30px 30px'
      }
    },
    'codeWrapper': {
      'default': {
        width: '87%',
        backgroundColor: '#fff',
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '22px',
        borderRadius: '30px 30px 0 0',
        flex: '0 1 100%',
        padding: '30px 35px',
      }
    },
    'blockMenuWrap': {
      'default': {
        position: "absolute",
        padding: '30px',
        zIndex: 9999
      }
    },
    'styleMenu': {
      'default': {
        position: "absolute",
        padding: '30px',
        zIndex: 9999
      }
    },
    'elementMenu': {
      'default': {
        position: 'fixed',
        right: '2px',
        zIndex: 9999,
        top: '50%',
        transform: "translateY(-50%)"
      }
    },
    'elementMenuBody': {
      'default': {
        backgroundColor: '#fff',
        padding: '20px',
        boxSizing: 'border-box',
        boxShadow: '0px 1px 13.9px 0px #00000014',
        borderRadius: '0 0 30px 30px',
        width: '340px',
        height: '474px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }
    },
    'StyleButtons': {
      'default': {
        width: '100%',
        display: 'flex',
        borderBottom: '1px solid #EFEFEF',
      }
    },
    'StyleBtn': {
      'default': {
        borderRadius: '20px 20px 0 0',
        height: '40px',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '137%',
        textAlign: 'center',
        cursor: 'pointer',
        color: '#000',
        background: '#e5e5e5',
        textTransform: 'capitalize',
        border: "none",
        flex: '0 1 50%'
      }
    },
    'stylesBtn': {
      'default': {
        background: "transparent",
        border: "none"
      }
    },
    'icon': {
      'default': {
        maxWidth: "100%"
      }
    },
    'inputWrap': {
      'default': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '9px',
        borderRadius: '5px',
        background: '#f4f4f5',
        padding: '7px',
        height: '35px',
        boxSizing: 'border-box'
      }
    },
    'input': {
      'default': {
        width: '100%',
        border: 'none',
        outline: "none",
        backgroundColor: 'transparent'
      }
    },
    'dropList': {
      'default': {
        width: '100%',
        position: 'relative'
      }
    },
    'dropSel': {
      'default': {
        width: '100%',
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
        borderRadius: '5px',
        fontSize: '16px',
        cursor: "pointer",
        background: "#F4F4F5",
        boxSizing: "border-box",
        textTransform: "lowercase",
        fontWeight: 500,
        height: '35px',
        padding: '7px',
      }
    },
    'dropListing': {
      'default': {
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        top: 'calc(100% - 7px)',
        left: 0,
        height: 0,
        background: "#F4F4F5",
        cursor: "pointer",
        overflow: "hidden",
        display: "flex",
        gap: "3px",
        boxSizing: "border-box",
        flexDirection: "column",
        fontSize: '14px',
        borderRadius: '0 0 5px 5px'
      }
    },
    'grid-box': {
      'default': {
        display: "grid",
        gap: '4px',
        gridTemplateColumns: "repeat(4, 1fr)"
      }
    },
    'pointer': {
      'default': {
        background: "#464C59",
        width: "24px",
        position: 'absolute',
        height: "7px",
        borderRadius: "20px",
        cursor: "pointer"
      }
    }
  }
}

const uditableTags = ["SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "P", "I", "B", "STRONG", "FONT", "EM", "SMALL", "SUP", "SUB", "Q", "BLOCKQUOTE"]

let styles = styles_d

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
            'paysage': {
              'id': "lab-button-span",
              'tag': "span",
              'classes': "lab-button-span",
              'styles': {
                'fontWeight': "700",
                'color': "#1C1B1F",
              },
              'text': 'Button',
            },
            'paysage': {
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
            'paysage': {
              'id': "lab-button-span",
              'tag': "span",
              'classes': "lab-button-span",
              'styles': {
                'fontWeight': "700",
                'color': "#1C1B1F",
              },
              'text': 'Button',
            },
            'paysage': {
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
            'paysage': {
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
            'paysage': {
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
            'paysage': {
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
            'paysage': {
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
            'paysage': {
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
            'paysage': {
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

  static async romovePointer() {
    if (document.getElementById('lab-HoverBox')) document.getElementById('lab-HoverBox').remove()
    if (document.getElementById('lab-HoverBoxbtn')) document.getElementById('lab-HoverBoxbtn').remove()
    if (document.getElementById('lab-block-menu')) document.getElementById('lab-block-menu').remove()
    if (document.getElementById('lab-block-menu-wrap')) document.getElementById('lab-block-menu-wrap').remove()
    if (document.getElementById('lab-pointer')) document.getElementById('lab-pointer').remove()
  }

  static copy(element, parent) {
    const copyItem = element.cloneNode(true)
    element.after(copyItem)
    return copyItem
  }

  static del(element) {
    Designer.romovePointer()
    return element.remove()
  }

  static move(element, endFunc = null, moveListener = 'mousemove', endListener = 'mouseup', moveArea = document) {

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
    Designer.romovePointer()
  }
  static drag(el) {
    Designer.romovePointer()

    if (el.style.position == 'static') return
    const page = document.getElementById('lab-user-page')
    el.style.transition = 'all 0.1s ease'

    let elStyles = window.getComputedStyle(el)
    let pagePos = page.getBoundingClientRect()
    let elPos = el.getBoundingClientRect()

    let scale = page.style.scale

    function onMouseDown() {
      el.style.pointerEvents = 'none'
      page.addEventListener('mousemove', onMouseMove)
    }

    function onMouseMove({ x, y }) {
      Designer.romovePointer()

      let item = document.elementFromPoint(x, y)
      const itemPos = item.getBoundingClientRect()
      const windowBox = document.getElementById('lab-designBody')


      if (!document.getElementById('injectHover') && item.id != 'lab-user-page') {
        if (itemPos.y < y && y > (itemPos.y + itemPos.height / 5)) {
          const hover = document.createElement('div')
          el.style.zIndex = item.style.zIndex ? item.style.zIndex + 1 : 1

          hover.className = 'escape none lab-hover-top'

          if (item.style.position == 'absolute') {
            hover.classList.add('lab-absolute')
          }

          hover.id = 'injectHover'
          item.prepend(hover)
          function clear() {
            document.getElementById('injectHover').remove()
            item.classList.contains('lab-empty-section') && item.classList.remove('lab-empty-section')
            const copyItem = el.cloneNode(true)
            el.remove()
            copyItem.style.top = 'unset'
            copyItem.style.left = 'unset'
            copyItem.style.pointerEvents = 'unset'
            item.prepend(copyItem)
            item.removeEventListener('mouseup', clear)
          }

          item.addEventListener('mouseup', clear)
        }
      }

      el.style.left = (x - pagePos.x - (elPos.width / 2)) / scale + 'px'
      el.style.top = (y - pagePos.y - (elPos.height / 2)) / scale + 'px'
    }

    el.addEventListener('mousedown', onMouseDown)

    page.addEventListener('mouseup', () => {
      el.style.transition = elStyles.transition
      el.style.pointerEvents = 'unset'
      el.removeEventListener('mousedown', onMouseDown)
      page.removeEventListener('mousemove', onMouseMove)
    })
  }

  static transform(el) {
    const page = document.getElementById('lab-user-page')
    el.classList.add('lab-transform')

    function movePos({ x, y }) {
      const pos = el.getBoundingClientRect()

      function writePointer(top, left, direction) {
        let last = document.getElementById('lab-pointer')
        if (!last || !last.classList.contains(direction)) {
          Designer.romovePointer()
          const pointer = lab_design_system_d('div', 'pointer', page, '', `none ${direction}`, ['design', 'pointer'])
          if (['left', 'right'].includes(direction)) {
            pointer.style.rotate = '90deg'
          }
          Designer.Proportions(pointer, el, page, { top: top, left: left })
        }
      }

      if (y < (pos.y + (pos.height - (pos.height / 5))) && y > pos.y - 50) {
        writePointer(-4, -(pos.width / 2 + 12), 'top')
      }

      if (y > (pos.y + pos.height - (pos.height / 5)) && y < (pos.y + pos.height + 50)) {
        writePointer(pos.height - 4, -(pos.width / 2 + 12), 'bottom')
      }

      if (x > (pos.x - 50) && x < (pos.x + (pos.width / 5))) {
        writePointer((pos.height / 2 - 4), -(pos.width + 12), 'left')
      }

      if (x > (pos.x + pos.width - (pos.width / 5)) && x < (pos.x + pos.width + 50)) {
        writePointer((pos.height / 2 - 4), -12, 'right')
      }

    }

    document.addEventListener('mousemove', movePos)
  }

}

class DesignConstructor {
  static button(parent, styles, content, icon, className = 'none', id = Designer.ID()) {
    const btn = lab_design_system_d('button', id, parent, content, className, styles)
    if (icon) {
      const btnIcon = lab_design_system_d('img', `${id}-icon`, btn, '', 'none', ['design', 'icon'])
      btnIcon.setAttribute('src', `${oldSRC}${icon}.svg`)
    }
    return btn;
  }

  static input(parent, value, placeholder, icon, params, className = 'none', styles, id = Designer.ID()) {
    const wrap = lab_design_system_d('div', id, parent, '', '', ['design', 'inputWrap'])

    if (icon) {
      const innerIcon = lab_design_system_d('img', id, wrap, '', '', ['design', 'icon'])
      innerIcon.setAttribute('src', `${oldSRC}${icon}.svg`)
    }

    const Input = lab_design_system_d('input', `input-${id}`, wrap, '', '', ['design', 'input'])

    value && Input.setAttribute('value', value)
    placeholder && Input.setAttribute('placeholder', placeholder)
    params && Input.addEventListener('input', () => Designer.WriteStyle(params.el, params.style, Input.value)
    )

    return Input
  }

  static dropList(parent, list, value, func) {
    let id = Designer.ID()
    const wrap = lab_design_system_d('div', id, parent, '', '', ['design', 'dropList'])
    const selected = lab_design_system_d('div', id + '-selected', wrap, '', '', ['design', 'dropSel'])
    const text = lab_design_system_d('span', Designer.ID(), selected, value.replace(/"/gi, ''))
    const icon = lab_design_system_d('img', id + '-icon', selected, '', '', ['design', 'icon'])
    icon.setAttribute('src', `${oldSRC}arrow_drop_down.svg`)

    const listing = lab_design_system_d('div', id + '-list', wrap, '', '', ['design', 'dropListing'])
    list.forEach(e => {
      const item = lab_design_system_d('span', Designer.ID(), listing, e)
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
      await Designer.romovePointer()

      element.classList.add('lab-active-element')

      const HoverBox = lab_design_system_d('div', "HoverBox", parent, 0, 0, ['design', 'HoverBox'])
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
    if (!document.getElementById('lab-block-menu')) {
      const menuWrap = lab_design_system_d('div', 'block-menu-wrap', parent, '', 'none', ['design', 'blockMenuWrap'])
      const menu = lab_design_system_d('div', 'block-menu', menuWrap, '', 'none', ['design', 'blockMenu'])
      Object.keys(options).forEach(e => {
        const item = lab_design_system_d('div', Designer.ID(), menu, '', 'none', ['design', 'blockMenuItem'])
        const itemIcon = lab_design_system_d('img', Designer.ID(), item, '0', 'none')
        const itemText = lab_design_system_d('span', Designer.ID(), item, options[e], 'none')
        itemIcon.setAttribute('src', `${oldSRC}${e}-icon.svg`)
        itemIcon.style.width = '15px'

        item.addEventListener('click', () => {
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
    }
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



let selectedItem = ''


function design_mode() {

  const designBody = lab_design_system_d('div', "designBody", rootLayer, 0, 0, ['design', 'body'])
  let options = JSON.parse(localStorage.getItem('options')) || {
    'vpm': "paysage",
    'zoom': 100,
    'toolBar': true,
    'settingsBar': true,
    'sideMenu': true,
  }

  //SIDE MENU

  const menu = lab_design_system_d('div', 'side-menu', designBody, 0, 0, ['design', 'side'])
  const menuButton = DesignConstructor.button(menu, ['design', 'showMenu'], 0, 'arrow_menu_close', '', 'show-side-menu')

  menuButton.addEventListener('click', () => {
    DesignConstructor.toggleClass(menu, 'design', 'side', 'hideSide')
    DesignConstructor.toggleClass(menuButton, 'design', 'showMenu', 'hideMenu')
    Options(options, 'sideMenu')
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

        const copy = Designer.copy(item)
        copy.style.position = "absolute"
        copy.style.opacity = "0.7"

        copy.style.left = `${coord.left}px`
        copy.style.top = `${coord.top}px`

        Designer.move(copy, () => {
          list.removeChild(copy)

          Designer.create(e, el, page, 'paysage', true)
        })

      })
    })
  }

  addList(ElementsList, elementsWrap)

  //SIDE MENU END

  //USER PAGE

  const pageWrap = lab_design_system_d('div', "user-page-wrap", designBody)
  const page = lab_design_system_d('div', "user-page", pageWrap, '', '', ['design', 'page'])
  page.classList.remove('escape')

  page.addEventListener('mouseover', (p) => {
    Designer.hover(p.target)
  })
  page.addEventListener('click', (e) => {
    StylesMenu(document.elementFromPoint(e.clientX, e.clientY))
  })
  let aaaa = Designer.create(ElementsList, 'button', page, 'paysage')

  //USER PAGE END

  //TOOLBAR

  const toolBar = lab_design_system_d('div', "toolbar", designBody, 0, 0, ['design', 'toolbar'])

  const tools = ['cursor', 'resize', 'shape', 'pen', 'text', 'actions', 'image']

  tools.forEach(tool => DesignConstructor.button(toolBar, ['design', 'toolbarItem'], 0, tool))

  const blind = lab_design_system_d('button', "blind-tools", toolBar, 0, 0, ['design', 'blindTools'])
  blind.addEventListener('click', () => {
    DesignConstructor.toggleClass(toolBar, 'design', 'toolbar', 'hideToolbar')
    Options(options, 'toolBar')
  })

  if (!options.toolBar) DesignConstructor.addClass(toolBar, 'design', 'hideToolbar')

  const topSettings = lab_design_system_d('div', "top-settings", designBody, 0, 0, ['design', 'top'])
  const settingsBtn = DesignConstructor.button(topSettings, ['design', 'btn'], 0, 'settings-white')
  const responsiveList = ["paysage", "portrait"]

  function setVpm(vpm) {
    Designer.romovePointer()
    if (vpm == 'paysage') {
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

    if (e == options.vpm) {
      btn.style.background = '#6a768e'
      btn.classList.add('active')
    }

    btn.addEventListener('click', () => {
      if (e != options.vpm) {
        document.querySelector('.lab-screen-btn.active').style.background = 'transparent'
        document.querySelector('.lab-screen-btn.active').classList.remove('active')

        btn.classList.add('active')
        btn.style.background = '#6a768e'
        Options(options, 'vpm', e)
        setVpm(e)
      }

    })

  })

  const pixelScreen = lab_design_system_d('div', "top-settings-pixel", topSettings, window.outerWidth + ' px', 0, ['design', 'pixelView'])

  setVpm(options.vpm)

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

  const size = lab_design_system_d('div', 'screen-size', topSettings, options.zoom + '%', 0, ['design', 'pixelView'])
  size.style.width = "60px"
  sizeSwitcher.value = options.zoom
  page.style.scale = options.zoom / 100

  sizeSwitcher.oninput = function () {
    size.innerHTML = this.value + "%"
    Options(options, 'zoom', this.value)
    page.style.scale = this.value / 100
  }
  const view = DesignConstructor.button(topSettings, ['design', 'btn'], 0, 'visibility')
  view.addEventListener('click', DesignConstructor.closeAll)
  const download = DesignConstructor.button(topSettings, ['design', 'btn'], 0, 'download')

  const blindTop = lab_design_system_d('button', "blind-btn", topSettings, 0, 0, ['design', 'blind'])

  blindTop.addEventListener('click', () => {
    DesignConstructor.toggleClass(topSettings, 'design', 'top', 'hideTop')
    Options(options, 'settingsBar')
  })

  if (!options.settingsBar) DesignConstructor.addClass(topSettings, 'design', 'hideTop')

  //CODE MENU

  const codeMenu = lab_design_system_d('div', 'code-box', designBody, '', 'none', ['design', 'codeBox'])
  const codeMenuButton = DesignConstructor.button(codeMenu, ['design', 'codeBoxShow'], '', 'message-code 1')
  const codeWrapper = lab_design_system_d('div', "code-wrapper", codeMenu, '', "", ['design', 'codeWrapper'])

  codeMenuButton.addEventListener('click', () => {
    DesignConstructor.toggleClass(codeMenu, 'design', 'codeBox', 'codeBoxActive')
    DesignConstructor.toggleClass(codeMenuButton, 'design', 'codeBoxShow', 'codeBoxShowActive')
    const page = document.getElementById('lab-user-page').innerHTML
    codeWrapper.innerHTML = `${page}`
  })

  //CODE MENU END

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
  const stopList = ['lab-HoverBox', 'lab-HoverBoxbtn-icon', 'lab-HoverBoxbtn']
  if (!stopList.includes(item.id) && !item.classList.contains('lab-none')) {
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
      const elementMenu = lab_design_system_d('div', "elementMenu", box, '', '', ['design', 'elementMenu'])
      const elementMenuButtons = lab_design_system_d('div', "elementMenu-buttons", elementMenu, '', '', ['design', 'StyleButtons'])
      const elementMenuBody = lab_design_system_d('div', "elementMenuBody", elementMenu, '', '', ['design', 'elementMenuBody'])
      const menuSettings = ['general', 'additional']
      const activeSettings = 'general'

      menuSettings.forEach((e) => {
        const btn = lab_design_system_d('button', Designer.ID(), elementMenuButtons, e, 'element-menu-btn', ['design', 'StyleBtn'])
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

          const settings = lab_design_system_d('div', "menu-style-settings", elementMenuBody, null, null)
          const display = DesignConstructor.dropList(settings, ['flex', 'inline', 'block'], item.style.display, (e) => Designer.WriteStyle(item, 'display', e))


          const pos = DesignConstructor.dropList(settings, ['absolute', 'fixed', 'relative'], item.style.position, (e) => Designer.WriteStyle(item, 'position', e))

          const padding = lab_design_system_d('span', Designer.ID(), elementMenuBody, 'padding')

          const paddingBox = lab_design_system_d('div', "padding-box", elementMenuBody, '', '', ['design', 'grid-box'])
          const margin = lab_design_system_d('span', Designer.ID(), elementMenuBody, 'margin')
          const marginBox = lab_design_system_d('div', "margin-box", elementMenuBody, '', '', ['design', 'grid-box'])

          const padList = ['top', 'right', 'bottom', 'left']

          padList.forEach(e => {
            const padInput = DesignConstructor.input(paddingBox, css[`padding-${e}`], '', '', { el: item, style: `padding${capitalizeFirstLetter(e)}` })
          })

          padList.forEach(e => {
            const marInput = DesignConstructor.input(marginBox, css[`margin-${e}`], '', '', { el: item, style: `margin${capitalizeFirstLetter(e)}` })
          })



          const colorSettings = lab_design_system_d('div', "colorSettings", elementMenuBody, null, null)
          const textColor = lab_design_system_d('span', Designer.ID(), colorSettings, 'background')
          const colorInput = lab_design_system_d('input', "input-text-color", colorSettings, null, 'color-input')
          colorInput.setAttribute('type', 'color')
          colorInput.setAttribute('value', css['background'])

          colorInput.addEventListener('input', () => {
            Designer.WriteStyle(item, 'background', colorInput.value)
          })
        }
        if (param == 'additional') {
          const settings = lab_design_system_d('div', "menu-style-settings", elementMenuBody, null, null)

          const tag = DesignConstructor.dropList(settings, ['div', 'span', 'h1'], item.tagName, (e) => {
            item.tagName = e
          })
          tag.style.flex = '0 1 35%'


          const fontFamily = DesignConstructor.dropList(settings, ['Arial', 'Arial2', 'Arial3'], css['font-family'], (e) => Designer.WriteStyle(item, 'fontFamily', e))

          const fontSettings = lab_design_system_d('div', "fontSettings", elementMenuBody, null, null)
          const textALign = lab_design_system_d('div', "textALign", fontSettings, null, null)
          const textStyle = lab_design_system_d('div', "textStyle", fontSettings, null, null)
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

          const textSettings = lab_design_system_d('div', "textSettings", elementMenuBody, null, null)

          const weight = DesignConstructor.dropList(textSettings, ['normal', 'bold', 'thin', 'medium', 'black'], css['font-weight'], (e) => Designer.WriteStyle(item, 'fontWeight', e))

          const fontSize = DesignConstructor.input(textSettings, css['font-size'], 'px', '', { el: item, style: 'fontSize' })

          const lineHeight = DesignConstructor.input(textSettings, css['line-height'], '', 'line-height', { el: item, style: 'lineHeight' })

          const letterSpacing = DesignConstructor.input(textSettings, css['letter-spacing'], '', 'letter-spacing', { el: item, style: 'letterSpacing' })

          const colorSettings = lab_design_system_d('div', "colorSettings", elementMenuBody, null, null)
          const textColor = lab_design_system_d('span', "text-color", colorSettings, 'Text color', null)
          const textColorInput = lab_design_system_d('input', "input-text-color", colorSettings, null, 'color-input')
          textColorInput.setAttribute('type', 'color')
          textColorInput.setAttribute('value', css['color'])
          textColorInput.addEventListener('input', () => {
            // inputStyle(textColorInput, 'color', null)
            // Designer.WriteStyle(item, 'lineHeight', e)
          })

          const stroke = lab_design_system_d('span', "text-stroke", colorSettings, 'Stroke', null)

          const strokeWrap = lab_design_system_d('div', "strokeWrap", colorSettings, null, null)
          const strokeInput = DesignConstructor.input(strokeWrap, css['stroke-width'], '', '', { el: item, style: 'strokeWidth' })

          const strokeColorInput = lab_design_system_d('input', "input-stroke-color", strokeWrap, null, 'color-input')
          strokeColorInput.setAttribute('type', 'color')
          strokeColorInput.setAttribute('value', css['stroke'])
        }

      }
      const page = document.getElementById('lab-user-page')
      page.addEventListener('click', () => {
        item.classList.remove('selectedItem')
        if (elementMenu) elementMenu.remove()
      })


    }
  }

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


window.addEventListener('resize', () => {
  Designer.romovePointer()
})