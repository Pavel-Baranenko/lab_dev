// let oldSrc = 'https://laboranth.tech/D/R/IMG/CLA/'
let oldSrc = '/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/pavel-barko/content/sections/home/img/'

let ComponentsList = {
  free: {
    button: {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/add_user.svg`,
      'title': "button",
      components: [
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "right-angles",
              text: 'Write here',
              'styles': {
                backgroundColor: 'rgb(37, 37, 37)',
                'padding': '0 16px',
                height: '40px',
                border: 'none',
                whiteSpace: 'nowrap',
                fontFamily: 'system-ui',
                fontSize: 'clamp(1rem, 1.5svw, 16px)',
                color: '#fff',
                cursor: 'pointer',
                'display': 'inline',
                'width': "fit-content",
                'position': "relative",
              }
            },
            'PORTRAIT': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "right-angles",
              text: 'Write here',
              'styles': {
                backgroundColor: 'rgb(37, 37, 37)',
                'padding': '0 16px',
                height: '40px',
                border: 'none',
                fontFamily: 'system-ui',
                fontSize: 'clamp(1rem, 1.5svw, 16px)',
                whiteSpace: 'nowrap',
                color: '#fff',
                cursor: 'pointer',
                'display': 'inline',
                'width': "fit-content",
                'position': "relative",
              }
            },
          }
        },
        {
          'template': {
            'LANDSCAPE': {
              'id': "rounded-corners",
              'tag': "button",
              'root': true,
              'classes': "rounded-corners",
              text: 'Write here',
              'styles': {
                backgroundColor: 'rgb(37, 37, 37)',
                'padding': '0 16px',
                whiteSpace: 'nowrap',
                height: '40px',
                border: 'none',
                fontFamily: 'system-ui',
                fontSize: 'clamp(1rem, 1.5svw, 16px)',
                color: '#fff',
                cursor: 'pointer',
                'display': 'inline',
                'width': "fit-content",
                'borderRadius': "20px",
                'position': "relative",
              }
            },
            'PORTRAIT': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "right-angles",
              text: 'Write here',
              'styles': {
                backgroundColor: 'rgb(37, 37, 37)',
                'padding': '0 16px',
                height: '40px',
                border: 'none',
                fontFamily: 'system-ui',
                fontSize: 'clamp(1rem, 1.5svw, 16px)',
                color: '#fff',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                'borderRadius': "20px",
                'display': 'inline',
                'width': "fit-content",
                'position': "relative",
              }
            },
          }
        },
        {
          'template': {
            'LANDSCAPE': {
              'id': "icon",
              'tag': "button",
              'root': true,
              'classes': "icon",
              text: '+',
              'styles': {
                backgroundColor: 'rgb(37, 37, 37)',
                'padding': '0 8px',
                height: '40px',
                whiteSpace: 'nowrap',
                width: '40px',
                border: 'none',
                fontFamily: 'system-ui',
                fontSize: 'clamp(1.5rem, 3svw, 24px)',
                color: '#fff',
                cursor: 'pointer',
                'borderRadius': "50%",
                'position': "relative",
              }
            },
            'PORTRAIT': {
              'id': "icon",
              'tag': "button",
              'root': true,
              'classes': "icon",
              text: '+',
              'styles': {
                backgroundColor: 'rgb(37, 37, 37)',
                'padding': '0 8px',
                height: '40px',
                whiteSpace: 'nowrap',
                width: '40px',
                border: 'none',
                fontFamily: 'system-ui',
                fontSize: 'clamp(1.5rem, 3svw, 24px)',
                color: '#fff',
                cursor: 'pointer',
                'borderRadius': "50%",
                'position': "relative",
              }
            }
          }
        },
      ]
    },
    'input': {

      //       1) Text
      // 2) Checkbox
      // 3) Radio
      // 4) Select
      // 4) Color
      // date
      // email
      // file
      // number
      // password
      // range
      // time


      // 1) Sign in (eye) UI
      // 2) Log in UI
      // 3) Contact UI




      'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
      'title': "input",
      'components': [
        {
          'template': {
            'LANDSCAPE': {
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
              },
              attributes: {
                type: "text",
                placeholder: "text"
              }
            },
            'PORTRAIT': {
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
        },
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-div-input",
              'tag': "div",
              'classes': "lab-div-input",
              'root': true,
              'styles': {
                'background': '#FFFFFF',
                'padding': '10px 20px',
                'borderRadius': "10px",
                display: "flex",
                gap: '5px',
                alignItems: 'center',
                'position': "relative"
              },
              child: [
                {
                  'LANDSCAPE': {
                    'id': "lab-seacrh-icon",
                    'tag': "img",
                    'classes': "lab-seacrh-icon",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    attributes: {
                      'src': 'https://laboranth.tech/D/R/IMG/CLA/search.svg'
                    }
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-input",
                    'tag': "input",
                    'classes': "lab-input",
                    'styles': {
                      'background': "transparent",
                      outline: "none",
                      width: "100%",
                      border: "none"
                    },
                  }
                },
              ]
            },
            'PORTRAIT': {
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
      ]

    },
    'form': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/form.svg`,
      'title': "form",
      'components': [
        {
          'template': {
            'LANDSCAPE': {
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
                'position': "relative",
                'zIndex': 1,
                'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-div-h6",
                    'tag': "h6",
                    'styles': {
                      'padding': '10px',
                      margin: '0 0 5px 0',
                      'border': "none",
                      fontSize: "28px",
                      'positon': "relative",
                      'width': "100%",
                      'boxSizing': "border-box"
                    },
                    text: "Sign in"
                  }
                },
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                    'text': 'Sign in'
                  },
                  'PORTRAIT': {
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
            'PORTRAIT': {
              'id': "lab-form",
              'tag': "form",
              'root': true,
              'styles': {
                'padding': '15px',
                'borderRadius': "15px",
                'display': "flex",
                'flexDirection': "column",
                'gap': "10px",
                'background': "#FFFFFF",
                'boxSizing': "border-box",
                'position': "relative",
                'zIndex': 1,
                'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
              },
              'child': [
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
        {
          'template': {
            'LANDSCAPE': {
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
                'position': "relative",
                'zIndex': 1,
                'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-div-h6",
                    'tag': "h6",
                    'styles': {
                      'padding': '10px',
                      margin: '0 0 5px 0',
                      'border': "none",
                      fontSize: "28px",
                      'positon': "relative",
                      'width': "100%",
                      'boxSizing': "border-box"
                    },
                    text: "Log in"
                  }
                },
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                    'text': 'Login'
                  },
                  'PORTRAIT': {
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
            'PORTRAIT': {
              'id': "lab-form",
              'tag': "form",
              'root': true,
              'styles': {
                'padding': '15px',
                'borderRadius': "15px",
                'display': "flex",
                'flexDirection': "column",
                'gap': "10px",
                'background': "#FFFFFF",
                'boxSizing': "border-box",
                'position': "relative",
                'zIndex': 1,
                'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
              },
              'child': [
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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

        {
          'template': {
            'LANDSCAPE': {
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
                'position': "relative",
                'zIndex': 1,
                'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-div-h6",
                    'tag': "h6",
                    'styles': {
                      'padding': '10px',
                      margin: '0 0 5px 0',
                      'border': "none",
                      fontSize: "28px",
                      'positon': "relative",
                      'width': "100%",
                      'boxSizing': "border-box"
                    },
                    text: "Contact"
                  }
                },
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
                    'id': "lab-div-wrap",
                    'tag': "div",
                    'styles': {
                      display: 'flex',
                      gap: '10px',
                      'border': "none",
                      'width': "100%",
                      'positon': "relative",
                      'boxSizing': "border-box",
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-div-checkbox",
                          'tag': "input",
                          attributes: {
                            type: 'checkbox',
                            name: "confirmation-checkbox"
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-div-text",
                          'tag': "span",
                          text: "Confirm privacy policy",
                          attributes: {
                            for: 'confirmation-checkbox'
                          }
                        }
                      },
                    ]
                  }
                },
                {
                  'LANDSCAPE': {
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
                    'text': 'Send'
                  },
                  'PORTRAIT': {
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
            'PORTRAIT': {
              'id': "lab-form",
              'tag': "form",
              'root': true,
              'styles': {
                'padding': '15px',
                'borderRadius': "15px",
                'display': "flex",
                'flexDirection': "column",
                'gap': "10px",
                'background': "#FFFFFF",
                'boxSizing': "border-box",
                'position': "relative",
                'zIndex': 1,
                'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
              },
              'child': [
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
      ]
    },
    'header': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
      'title': "header",
      'components': [
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-header",
              'tag': "header",
              'root': true,
              'styles': {
                'background': '#FFFFFF',
                'padding': '10px 20px',
                'position': "relative",
                boxSizing: "border-box",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              },
              child: [
                {
                  'LANDSCAPE': {
                    'id': "lab-logo",
                    'tag': "a",
                    'styles': {
                      display: 'inline-block',
                      marginRight: 'auto'
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-logo-img",
                          'tag': "img",
                          'styles': {
                            height: "50px",
                            width: 'auto'
                          },
                          attributes: {
                            src: 'https://laboranth.tech/D/R/IMG/logoAlt.svg'
                          }
                        },
                      }
                    ]
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-navbar",
                    'tag': "nav",
                    'styles': {
                      display: 'flex',
                      alignItems: 'center',
                      padding: " 10px",
                      borderRadius: "10px",
                      background: "#F0F0F0",
                      gap: '15px',
                      width: "fit-content"
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-nav-link",
                          'tag': "a",
                          text: "home",
                          'styles': {
                            color: "#000",
                            textDecoration: 'none'
                          },
                          attributes: {
                            href: '#'
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-nav-link",
                          'tag': "a",
                          text: "about",
                          'styles': {
                            color: "#000",
                            textDecoration: 'none'
                          },
                          attributes: {
                            href: '#'
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-nav-link",
                          'tag': "a",
                          text: "services",
                          'styles': {
                            color: "#000",
                            textDecoration: 'none'
                          },
                          attributes: {
                            href: '#'
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-nav-link",
                          'tag': "a",
                          text: "use cases",
                          'styles': {
                            color: "#000",
                            textDecoration: 'none'
                          },
                          attributes: {
                            href: '#'
                          }
                        }
                      },
                    ]
                  },
                },
              ]
            }
          }
        },
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-header",
              'tag': "header",
              'root': true,
              'styles': {
                'background': '#FFFFFF',
                'padding': '10px 20px',
                'position': "relative",
                boxSizing: "border-box",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              },
              child: [
                {
                  'LANDSCAPE': {
                    'id': "lab-logo",
                    'tag': "a",
                    'styles': {
                      display: 'inline-block',
                      marginRight: 'auto'
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-logo-img",
                          'tag': "img",
                          'styles': {
                            height: "50px",
                            width: 'auto'
                          },
                          attributes: {
                            src: 'https://laboranth.tech/D/R/IMG/logoAlt.svg'
                          }
                        },
                      }
                    ]
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-navbar",
                    'tag': "nav",
                    'styles': {
                      display: 'flex',
                      alignItems: 'center',
                      padding: " 10px",
                      borderRadius: "10px",
                      background: "#F0F0F0",
                      gap: '15px',
                      width: "fit-content"
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-nav-link",
                          'tag': "a",
                          text: "About",
                          'styles': {
                            color: "#000",
                            textDecoration: 'none'
                          },
                          attributes: {
                            href: '#'
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-nav-link",
                          'tag': "a",
                          text: "Solutions",
                          'styles': {
                            color: "#000",
                            textDecoration: 'none'
                          },
                          attributes: {
                            href: '#'
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-nav-link",
                          'tag': "a",
                          text: "Pricing",
                          'styles': {
                            color: "#000",
                            textDecoration: 'none'
                          },
                          attributes: {
                            href: '#'
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-nav-link",
                          'tag': "a",
                          text: "Contacts",
                          'styles': {
                            color: "#000",
                            textDecoration: 'none'
                          },
                          attributes: {
                            href: '#'
                          }
                        }
                      },
                    ]
                  },
                },
              ]
            }
          }
        },
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-header",
              'tag': "header",
              'root': true,
              child: [
                {
                  'LANDSCAPE': {
                    'id': "lab-header-wrap",
                    'tag': "div",
                    'styles': {
                      'background': '#FFFFFF',
                      'padding': '10px 20px',
                      'position': "relative",
                      display: 'flex',
                      boxSizing: "border-box",
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-logo",
                          'tag': "a",
                          'styles': {
                            boxSizing: "border-box",
                            display: 'inline-block'
                          },
                          child: [
                            {
                              'LANDSCAPE': {
                                'id': "lab-logo-img",
                                'tag': "img",
                                'styles': {
                                  boxSizing: "border-box",
                                  height: "auto",
                                  width: '50px'
                                },
                                attributes: {
                                  src: 'https://laboranth.tech/D/R/IMG/logoAlt.svg'
                                }
                              },
                            }
                          ]
                        },
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-button",
                          'tag': "button",
                          'classes': "lab-button",
                          'styles': {
                            'padding': '10px 20px',
                            'borderRadius': "15px",
                            'display': 'flex',
                            'alignItems': "center",
                            'gap': '10px',
                            boxSizing: "border-box",
                            'width': "fit-content",
                            'position': "relative",
                            'background': "#FED05E"
                          },
                          'child': [
                            {
                              'LANDSCAPE': {
                                'id': "lab-button-span",
                                'tag': "span",
                                'classes': "lab-button-span",
                                'styles': {
                                  'fontWeight': "700",
                                  boxSizing: "border-box",
                                  'color': "#1C1B1F",
                                },
                                'text': 'Button',

                              },
                              'LANDSCAPE': {
                                'id': "lab-button-span",
                                'tag': "span",
                                'classes': "lab-button-span",
                                'styles': {
                                  'fontWeight': "700",
                                  'color': "#1C1B1F",
                                },
                                'text': 'Button',
                              }
                            },
                            {
                              'LANDSCAPE': {
                                'id': "lab-button-icon",
                                'tag': "img",
                                'classes': "lab-button-icon",
                                'styles': {
                                  'fontWeight': "700",
                                  'color': "#1C1B1F",
                                },
                                attributes: {
                                  'src': 'https://laboranth.tech/D/R/IMG/CLA/Arrow.svg'
                                }
                              }

                            },
                          ]
                        },
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-button",
                          'tag': "button",
                          'classes': "lab-button",
                          'styles': {
                            'borderRadius': "15px",
                            'display': 'flex',
                            justifyContent: 'center',
                            'alignItems': "center",
                            border: "none",
                            'width': "40px",
                            height: "40px",
                            borderRadius: "50%",
                            'position': "relative",
                            'background': "#3C4CA6"
                          },
                          'child': [
                            {
                              'LANDSCAPE': {
                                'id': "lab-button-icon",
                                'tag': "img",
                                'classes': "lab-button-icon",
                                'styles': {
                                  'width': "15px",
                                  'height': "15px",
                                },
                                attributes: {
                                  'src': 'https://laboranth.tech/D/R/IMG/CLA/widgets.svg'
                                }
                              }

                            },
                          ]
                        },
                      },
                    ]
                  }
                }
              ]
            }
          }
        },
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-header",
              'tag': "header",
              'root': true,
              'styles': {
                'background': '#FFFFFF',
                'padding': '10px 20px',
                'position': "relative",
                display: 'flex',
                boxSizing: "border-box",
                alignItems: 'center',
              },
              child: [
                {
                  'LANDSCAPE': {
                    'id': "lab-button",
                    'tag': "button",
                    'classes': "lab-button",
                    'styles': {
                      'borderRadius': "15px",
                      'display': 'flex',
                      justifyContent: 'center',
                      'alignItems': "center",
                      border: "none",
                      'width': "40px",
                      height: "40px",
                      borderRadius: "50%",
                      'position': "relative",
                      'background': "#3C4CA6"
                    },
                    'child': [
                      {
                        'LANDSCAPE': {
                          'id': "lab-button-icon",
                          'tag': "img",
                          'classes': "lab-button-icon",
                          'styles': {
                            'width': "15px",
                            'height': "15px",
                          },
                          attributes: {
                            'src': 'https://laboranth.tech/D/R/IMG/CLA/widgets.svg'
                          }
                        }

                      },
                    ]
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-logo",
                    'tag': "a",
                    'styles': {
                      boxSizing: "border-box",
                      display: 'inline-block',
                      margin: "0 auto"
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-logo-img",
                          'tag': "img",
                          'styles': {
                            boxSizing: "border-box",
                            height: "auto",
                            width: '70px'
                          },
                          attributes: {
                            src: 'https://laboranth.tech/D/R/IMG/logoAlt.svg'
                          }
                        },
                      }
                    ]
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-link",
                    'tag': "a",
                    text: "Login",
                    'styles': {
                      'width': "fit-content",
                      'position': "relative",
                      marginRight: "10px",
                    }
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-button",
                    'tag': "button",
                    'classes': "lab-button",
                    'styles': {
                      'padding': '10px 20px',
                      'borderRadius': "15px",
                      'display': 'flex',
                      'alignItems': "center",
                      'gap': '10px',
                      boxSizing: "border-box",
                      'width': "fit-content",
                      'position': "relative",
                      'background': "#FED05E"
                    },
                    'child': [
                      {
                        'LANDSCAPE': {
                          'id': "lab-button-span",
                          'tag': "span",
                          'classes': "lab-button-span",
                          'styles': {
                            'fontWeight': "700",
                            boxSizing: "border-box",
                            'color': "#1C1B1F",
                          },
                          'text': 'Button',

                        },
                        'LANDSCAPE': {
                          'id': "lab-button-span",
                          'tag': "span",
                          'classes': "lab-button-span",
                          'styles': {
                            'fontWeight': "700",
                            'color': "#1C1B1F",
                          },
                          'text': 'Button',
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-button-icon",
                          'tag': "img",
                          'classes': "lab-button-icon",
                          'styles': {
                            'fontWeight': "700",
                            'color': "#1C1B1F",
                          },
                          attributes: {
                            'src': 'https://laboranth.tech/D/R/IMG/CLA/Arrow.svg'
                          }
                        }

                      },
                    ]
                  },
                }
              ]
            }
          }
        },
      ]

    },
  },
  'lab': {
    'button': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/add_user.svg`,
      'title': "button",
      'components': [
        {
          'template': {
            'LANDSCAPE': {
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
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',

                  },
                  'LANDSCAPE': {
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
            'PORTRAIT': {
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
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',
                  },
                  'LANDSCAPE': {
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
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "lab-button",
              'styles': {
                'padding': '10px 20px',
                'borderRadius': "15px",
                'display': 'flex',
                'alignItems': "center",
                'gap': '10px',
                'width': "fit-content",
                'position': "relative",
                'background': "#FED05E"
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',

                  },
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',
                  }
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-button-icon",
                    'tag': "img",
                    'classes': "lab-button-icon",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    attributes: {
                      'src': 'https://laboranth.tech/D/R/IMG/CLA/Arrow.svg'
                    }
                  }

                },
              ]
            },
            'PORTRAIT': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "lab-button",
              'styles': {
                'padding': '10px 20px',
                'borderRadius': "5px",
                'display': "flex",
                'gap': "10px",
                'alignItems': "center",
                'justifyContent': "center",
                'background': "#FED05E"
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',
                  },
                  'LANDSCAPE': {
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
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "lab-button",
              'styles': {
                'padding': '10px 20px',
                'borderRadius': "5px",
                'display': 'inline',
                'width': "fit-content",
                'position': "relative",
                'background': "#FED05E"
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',

                  },
                  'LANDSCAPE': {
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
            'PORTRAIT': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "lab-button",
              'styles': {
                'padding': '10px 20px',
                'borderRadius': "5px",
                'display': "flex",
                'gap': "10px",
                'alignItems': "center",
                'justifyContent': "center",
                'background': "#FED05E"
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',
                  },
                  'LANDSCAPE': {
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
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "lab-button",
              'styles': {
                'padding': '10px 20px',
                'borderRadius': "5px",
                'display': 'flex',
                'gap': '10px',
                'width': "fit-content",
                'position': "relative",
                'background': "#FED05E"
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',

                  },
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',
                  }
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-button-icon",
                    'tag': "img",
                    'classes': "lab-button-icon",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    attributes: {
                      'src': 'https://laboranth.tech/D/R/IMG/CLA/Arrow.svg'
                    }
                  }

                },
              ]
            },
            'PORTRAIT': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "lab-button",
              'styles': {
                'padding': '10px 20px',
                'borderRadius': "5px",
                'display': "flex",
                'gap': "10px",
                'alignItems': "center",
                'justifyContent': "center",
                'background': "#FED05E"
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',
                  },
                  'LANDSCAPE': {
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

        {
          'template': {
            'LANDSCAPE': {
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
                'background': "transparent",
                'border': "2px solid #000",
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',

                  },
                  'LANDSCAPE': {
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
            'PORTRAIT': {
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
                'background': "transparent",
                'border': "2px solid #000",
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',

                  },
                  'LANDSCAPE': {
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
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "lab-button",
              'styles': {
                'padding': '10px 20px',
                'borderRadius': "15px",
                'display': 'flex',
                'alignItems': "center",
                'gap': '10px',
                'width': "fit-content",
                'position': "relative",
                'background': "transparent"
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',

                  },
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',
                  }
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-button-icon",
                    'tag': "img",
                    'classes': "lab-button-icon",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    attributes: {
                      'src': 'https://laboranth.tech/D/R/IMG/CLA/Arrow.svg'
                    }
                  }

                },
              ]
            },
            'PORTRAIT': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "lab-button",
              'styles': {
                'padding': '10px 20px',
                'borderRadius': "5px",
                'display': "flex",
                'gap': "10px",
                'alignItems': "center",
                'justifyContent': "center",
                'background': "transparent"
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',
                  },
                  'LANDSCAPE': {
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
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "lab-button",
              'styles': {
                'padding': '10px 20px',
                'borderRadius': "5px",
                'display': 'inline',
                'width': "fit-content",
                'position': "relative",
                'background': "transparent"
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',

                  },
                  'LANDSCAPE': {
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
            'PORTRAIT': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "lab-button",
              'styles': {
                'padding': '10px 20px',
                'borderRadius': "5px",
                'display': "flex",
                'gap': "10px",
                'alignItems': "center",
                'justifyContent': "center",
                'background': "#FED05E"
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',
                  },
                  'LANDSCAPE': {
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
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "lab-button",
              'styles': {
                'padding': '10px 20px',
                'borderRadius': "5px",
                'display': 'flex',
                'alignItems': "center",
                'gap': '10px',
                'width': "fit-content",
                'position': "relative",
                'background': "transparent"
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',

                  },
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',
                  }
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-button-icon",
                    'tag': "img",
                    'classes': "lab-button-icon",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    attributes: {
                      'src': 'https://laboranth.tech/D/R/IMG/CLA/Arrow.svg'
                    }
                  }

                },
              ]
            },
            'PORTRAIT': {
              'id': "lab-button",
              'tag': "button",
              'root': true,
              'classes': "lab-button",
              'styles': {
                'padding': '10px 20px',
                'borderRadius': "5px",
                'display': "flex",
                'gap': "10px",
                'alignItems': "center",
                'justifyContent': "center",
                'background': "transparent"
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-button-span",
                    'tag': "span",
                    'classes': "lab-button-span",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    'text': 'Button',
                  },
                  'LANDSCAPE': {
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
        }
      ]
    },
    'section': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
      'title': "section",
      'components': [
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-section",
              'tag': "section",
              'classes': "lab-empty-section",
              'root': true,
              'styles': {
                'background': '#FFFFFF',
                'padding': '80px 20px',
                'position': "relative",
                'zIndex': 1
              }
            },
            'PORTRAIT': {
              'id': "lab-section",
              'tag': "section",
              'classes': "lab-empty-section",
              'root': true,
              'styles': {
                'padding': '80px 20px',
                'background': '#FFFFFF',
                'position': "relative",
                'zIndex': 1
              }
            },
          }
        },
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-section",
              'tag': "div",
              'classes': "lab-empty-section",
              'root': true,
              'styles': {
                'background': '#FFFFFF',
                'padding': '20px 20px',
                'position': "relative",
                'zIndex': 1
              }
            },
            'PORTRAIT': {
              'id': "lab-section",
              'tag': "div",
              'classes': "lab-empty-section",
              'root': true,
              'styles': {
                'background': '#FFFFFF',
                'padding': '20px 20px',
                'position': "relative",
                'zIndex': 1
              }
            },
          }
        }
      ]

    },
    'form': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/form.svg`,
      'title': "form",
      'components': [
        {
          'template': {
            'LANDSCAPE': {
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
                'position': "relative",
                'zIndex': 1,
                'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
              },
              'child': [
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
            'PORTRAIT': {
              'id': "lab-form",
              'tag': "form",
              'root': true,
              'styles': {
                'padding': '15px',
                'borderRadius': "15px",
                'display': "flex",
                'flexDirection': "column",
                'gap': "10px",
                'background': "#FFFFFF",
                'boxSizing': "border-box",
                'position': "relative",
                'zIndex': 1,
                'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
              },
              'child': [
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
        {
          'template': {
            'LANDSCAPE': {
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
                'position': "relative",
                'zIndex': 1,
                'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-div-h6",
                    'tag': "h6",
                    'styles': {
                      'padding': '10px',
                      margin: '0 0 5px 0',
                      'border': "none",
                      fontSize: "28px",
                      'positon': "relative",
                      'width': "100%",
                      'boxSizing': "border-box"
                    },
                    text: "Form heading"
                  }
                },
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
            'PORTRAIT': {
              'id': "lab-form",
              'tag': "form",
              'root': true,
              'styles': {
                'padding': '15px',
                'borderRadius': "15px",
                'display': "flex",
                'flexDirection': "column",
                'gap': "10px",
                'background': "#FFFFFF",
                'boxSizing': "border-box",
                'position': "relative",
                'zIndex': 1,
                'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
              },
              'child': [
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
        {
          'template': {
            'LANDSCAPE': {
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
                'position': "relative",
                'zIndex': 1,
                'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
              },
              'child': [
                {
                  'LANDSCAPE': {
                    'id': "lab-div-h6",
                    'tag': "h6",
                    'styles': {
                      'padding': '10px',
                      margin: '0 0 5px 0',
                      'border': "none",
                      fontSize: "28px",
                      'positon': "relative",
                      'width': "100%",
                      'boxSizing': "border-box"
                    },
                    text: "Form heading"
                  }
                },
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
                    'id': "lab-div-wrap",
                    'tag': "div",
                    'styles': {
                      display: 'flex',
                      gap: '10px',
                      'border': "none",
                      'width': "100%",
                      'positon': "relative",
                      'boxSizing': "border-box",
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-div-checkbox",
                          'tag': "input",
                          attributes: {
                            type: 'checkbox',
                            name: "confirmation-checkbox"
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-div-text",
                          'tag': "span",
                          text: "Confirm privacy policy",
                          attributes: {
                            for: 'confirmation-checkbox'
                          }
                        }
                      },
                    ]
                  }
                },
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
            'PORTRAIT': {
              'id': "lab-form",
              'tag': "form",
              'root': true,
              'styles': {
                'padding': '15px',
                'borderRadius': "15px",
                'display': "flex",
                'flexDirection': "column",
                'gap': "10px",
                'background': "#FFFFFF",
                'boxSizing': "border-box",
                'position': "relative",
                'zIndex': 1,
                'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
              },
              'child': [
                {
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
                  'LANDSCAPE': {
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
                  'PORTRAIT': {
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
      ]
    },
    'input': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
      'title': "input",
      'components': [
        {
          'template': {
            'LANDSCAPE': {
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
            'PORTRAIT': {
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
        },
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-div-input",
              'tag': "div",
              'classes': "lab-div-input",
              'root': true,
              'styles': {
                'background': '#FFFFFF',
                'padding': '10px 20px',
                'borderRadius': "10px",
                display: "flex",
                gap: '5px',
                alignItems: 'center',
                'position': "relative"
              },
              child: [
                {
                  'LANDSCAPE': {
                    'id': "lab-seacrh-icon",
                    'tag': "img",
                    'classes': "lab-seacrh-icon",
                    'styles': {
                      'fontWeight': "700",
                      'color': "#1C1B1F",
                    },
                    attributes: {
                      'src': 'https://laboranth.tech/D/R/IMG/CLA/search.svg'
                    }
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-input",
                    'tag': "input",
                    'classes': "lab-input",
                    'styles': {
                      'background': "transparent",
                      outline: "none",
                      width: "100%",
                      border: "none"
                    },
                  }
                },
              ]
            },
            'PORTRAIT': {
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
      ]

    },
    'header': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
      'title': "header",
      'components': [
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-header",
              'tag': "header",
              'root': true,
              'styles': {
                'background': '#FFFFFF',
                'padding': '10px 20px',
                'position': "relative",
                boxSizing: "border-box",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              },
              child: [
                {
                  'LANDSCAPE': {
                    'id': "lab-logo",
                    'tag': "a",
                    'styles': {
                      display: 'inline-block',
                      marginRight: 'auto'
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-logo-img",
                          'tag': "img",
                          'styles': {
                            height: "50px",
                            width: 'auto'
                          },
                          attributes: {
                            src: 'https://laboranth.tech/D/R/IMG/logoAlt.svg'
                          }
                        },
                      }
                    ]
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-navbar",
                    'tag': "nav",
                    'styles': {
                      display: 'flex',
                      alignItems: 'center',
                      padding: " 10px",
                      borderRadius: "10px",
                      background: "#F0F0F0",
                      gap: '15px',
                      width: "fit-content"
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-nav-link",
                          'tag': "a",
                          text: "About",
                          'styles': {
                            color: "#000",
                            textDecoration: 'none'
                          },
                          attributes: {
                            href: '#'
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-nav-link",
                          'tag': "a",
                          text: "Solutions",
                          'styles': {
                            color: "#000",
                            textDecoration: 'none'
                          },
                          attributes: {
                            href: '#'
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-nav-link",
                          'tag': "a",
                          text: "Pricing",
                          'styles': {
                            color: "#000",
                            textDecoration: 'none'
                          },
                          attributes: {
                            href: '#'
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-nav-link",
                          'tag': "a",
                          text: "Contacts",
                          'styles': {
                            color: "#000",
                            textDecoration: 'none'
                          },
                          attributes: {
                            href: '#'
                          }
                        }
                      },
                    ]
                  },
                },
              ]
            }
          }
        },
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-header",
              'tag': "header",
              'root': true,
              child: [
                {
                  'LANDSCAPE': {
                    'id': "lab-header-wrap",
                    'tag': "div",
                    'styles': {
                      'background': '#FFFFFF',
                      'padding': '10px 20px',
                      'position': "relative",
                      display: 'flex',
                      boxSizing: "border-box",
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-logo",
                          'tag': "a",
                          'styles': {
                            boxSizing: "border-box",
                            display: 'inline-block'
                          },
                          child: [
                            {
                              'LANDSCAPE': {
                                'id': "lab-logo-img",
                                'tag': "img",
                                'styles': {
                                  boxSizing: "border-box",
                                  height: "auto",
                                  width: '50px'
                                },
                                attributes: {
                                  src: 'https://laboranth.tech/D/R/IMG/logoAlt.svg'
                                }
                              },
                            }
                          ]
                        },
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-button",
                          'tag': "button",
                          'classes': "lab-button",
                          'styles': {
                            'padding': '10px 20px',
                            'borderRadius': "15px",
                            'display': 'flex',
                            'alignItems': "center",
                            'gap': '10px',
                            boxSizing: "border-box",
                            'width': "fit-content",
                            'position': "relative",
                            'background': "#FED05E"
                          },
                          'child': [
                            {
                              'LANDSCAPE': {
                                'id': "lab-button-span",
                                'tag': "span",
                                'classes': "lab-button-span",
                                'styles': {
                                  'fontWeight': "700",
                                  boxSizing: "border-box",
                                  'color': "#1C1B1F",
                                },
                                'text': 'Button',

                              },
                              'LANDSCAPE': {
                                'id': "lab-button-span",
                                'tag': "span",
                                'classes': "lab-button-span",
                                'styles': {
                                  'fontWeight': "700",
                                  'color': "#1C1B1F",
                                },
                                'text': 'Button',
                              }
                            },
                            {
                              'LANDSCAPE': {
                                'id': "lab-button-icon",
                                'tag': "img",
                                'classes': "lab-button-icon",
                                'styles': {
                                  'fontWeight': "700",
                                  'color': "#1C1B1F",
                                },
                                attributes: {
                                  'src': 'https://laboranth.tech/D/R/IMG/CLA/Arrow.svg'
                                }
                              }

                            },
                          ]
                        },
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-button",
                          'tag': "button",
                          'classes': "lab-button",
                          'styles': {
                            'borderRadius': "15px",
                            'display': 'flex',
                            justifyContent: 'center',
                            'alignItems': "center",
                            border: "none",
                            'width': "40px",
                            height: "40px",
                            borderRadius: "50%",
                            'position': "relative",
                            'background': "#3C4CA6"
                          },
                          'child': [
                            {
                              'LANDSCAPE': {
                                'id': "lab-button-icon",
                                'tag': "img",
                                'classes': "lab-button-icon",
                                'styles': {
                                  'width': "15px",
                                  'height': "15px",
                                },
                                attributes: {
                                  'src': 'https://laboranth.tech/D/R/IMG/CLA/widgets.svg'
                                }
                              }

                            },
                          ]
                        },
                      },
                    ]
                  }
                }
              ]
            }
          }
        },
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-header",
              'tag': "header",
              'root': true,
              'styles': {
                'background': '#FFFFFF',
                'padding': '10px 20px',
                'position': "relative",
                display: 'flex',
                boxSizing: "border-box",
                alignItems: 'center',
              },
              child: [
                {
                  'LANDSCAPE': {
                    'id': "lab-button",
                    'tag': "button",
                    'classes': "lab-button",
                    'styles': {
                      'borderRadius': "15px",
                      'display': 'flex',
                      justifyContent: 'center',
                      'alignItems': "center",
                      border: "none",
                      'width': "40px",
                      height: "40px",
                      borderRadius: "50%",
                      'position': "relative",
                      'background': "#3C4CA6"
                    },
                    'child': [
                      {
                        'LANDSCAPE': {
                          'id': "lab-button-icon",
                          'tag': "img",
                          'classes': "lab-button-icon",
                          'styles': {
                            'width': "15px",
                            'height': "15px",
                          },
                          attributes: {
                            'src': 'https://laboranth.tech/D/R/IMG/CLA/widgets.svg'
                          }
                        }

                      },
                    ]
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-logo",
                    'tag': "a",
                    'styles': {
                      boxSizing: "border-box",
                      display: 'inline-block',
                      margin: "0 auto"
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-logo-img",
                          'tag': "img",
                          'styles': {
                            boxSizing: "border-box",
                            height: "auto",
                            width: '70px'
                          },
                          attributes: {
                            src: 'https://laboranth.tech/D/R/IMG/logoAlt.svg'
                          }
                        },
                      }
                    ]
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-link",
                    'tag': "a",
                    text: "Login",
                    'styles': {
                      'width': "fit-content",
                      'position': "relative",
                      marginRight: "10px",
                    }
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-button",
                    'tag': "button",
                    'classes': "lab-button",
                    'styles': {
                      'padding': '10px 20px',
                      'borderRadius': "15px",
                      'display': 'flex',
                      'alignItems': "center",
                      'gap': '10px',
                      boxSizing: "border-box",
                      'width': "fit-content",
                      'position': "relative",
                      'background': "#FED05E"
                    },
                    'child': [
                      {
                        'LANDSCAPE': {
                          'id': "lab-button-span",
                          'tag': "span",
                          'classes': "lab-button-span",
                          'styles': {
                            'fontWeight': "700",
                            boxSizing: "border-box",
                            'color': "#1C1B1F",
                          },
                          'text': 'Button',

                        },
                        'LANDSCAPE': {
                          'id': "lab-button-span",
                          'tag': "span",
                          'classes': "lab-button-span",
                          'styles': {
                            'fontWeight': "700",
                            'color': "#1C1B1F",
                          },
                          'text': 'Button',
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-button-icon",
                          'tag': "img",
                          'classes': "lab-button-icon",
                          'styles': {
                            'fontWeight': "700",
                            'color': "#1C1B1F",
                          },
                          attributes: {
                            'src': 'https://laboranth.tech/D/R/IMG/CLA/Arrow.svg'
                          }
                        }

                      },
                    ]
                  },
                }
              ]
            }
          }
        },
      ]

    },
    'footer': {
      'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
      'title': "footer",
      'components': [
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-footer",
              'tag': "footer",
              'root': true,
              'styles': {
                'background': '#464C59',
                'padding': '20px 50px',
                color: '#fff',
                width: "100%",
                'position': "relative",
                boxSizing: "border-box",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              },
              child: [
                {
                  'LANDSCAPE': {
                    'id': "lab-div",
                    'tag': "div",
                    'styles': {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '45px',
                      marginRight: 'auto'
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-span",
                          'tag': "span",
                          text: 'Laboranth  |  2024',
                          'styles': {
                            fontSize: "14px",
                            fontWeight: '400'
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-link",
                          'tag': "a",
                          text: 'Legal CGU/CGV',
                          'styles': {
                            textDecoration: 'underline',
                            fontSize: "14px",
                            fontWeight: '400'
                          }
                        }
                      }
                    ]
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-email",
                    'tag': "a",
                    text: "info@laboranth.tech",
                    'styles': {
                      fontWeight: '700',
                      fontSize: "14px"
                    }
                  }
                }
              ]
            }
          }
        },
        {
          'template': {
            'LANDSCAPE': {
              'id': "lab-footer",
              'tag': "footer",
              'root': true,
              'styles': {
                'background': '#1E2022',
                'padding': '40px 70px',
                color: '#fff',
                borderRadius: "40px",
                width: "calc(100% - 120px)",
                margin: "0 auto",
                'position': "relative",
                boxSizing: "border-box",
                display: 'flex',
                justifyContent: 'space-between'
              },
              child: [
                {
                  'LANDSCAPE': {
                    'id': "lab-div",
                    'tag': "div",
                    'styles': {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-span",
                          'tag': "span",
                          text: 'Laboranth  |  2024',
                          'styles': {
                            fontSize: "14px",
                            fontWeight: '400'
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-link",
                          'tag': "a",
                          text: 'Legal CGU/CGV',
                          'styles': {
                            textDecoration: 'underline',
                            fontSize: "14px",
                            fontWeight: '400'
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-email",
                          'tag': "a",
                          text: "info@laboranth.tech",
                          'styles': {
                            fontWeight: '700',
                            fontSize: "14px"
                          }
                        }
                      }
                    ]
                  },
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-div",
                    'tag': "div",
                    'styles': {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-link",
                          'tag': "a",
                          text: "E-commerce Websites",
                          'styles': {
                            textDecoration: "underline"
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-link",
                          'tag': "a",
                          text: "Portfolio Websites",
                          'styles': {
                            textDecoration: "underline"
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-link",
                          'tag': "a",
                          text: "Corporate Websites",
                          'styles': {
                            textDecoration: "underline"
                          }
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-link",
                          'tag': "a",
                          text: "Blogs",
                          'styles': {
                            textDecoration: "underline"
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  'LANDSCAPE': {
                    'id': "lab-div",
                    'tag': "div",
                    'styles': {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    },
                    child: [
                      {
                        'LANDSCAPE': {
                          'id': "lab-link",
                          'tag': "a",
                          child: [
                            {
                              'LANDSCAPE': {
                                'id': "lab-link",
                                'tag': "img",
                                attributes: {
                                  src: 'https://laboranth.tech/D/R/IMG/CLA/fb-icon.svg'
                                }
                              }
                            }
                          ]
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-link",
                          'tag': "a",
                          child: [
                            {
                              'LANDSCAPE': {
                                'id': "lab-link",
                                'tag': "img",
                                attributes: {
                                  src: 'https://laboranth.tech/D/R/IMG/CLA/x-icon.svg'
                                }
                              }
                            }
                          ]
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-link",
                          'tag': "a",
                          child: [
                            {
                              'LANDSCAPE': {
                                'id': "lab-link",
                                'tag': "img",
                                attributes: {
                                  src: "https://laboranth.tech/D/R/IMG/CLA/pinterest-icon.svg"
                                }
                              }
                            }
                          ]
                        }
                      },
                      {
                        'LANDSCAPE': {
                          'id': "lab-link",
                          'tag': "a",
                          child: [
                            {
                              'LANDSCAPE': {
                                'id': "lab-link",
                                'tag': "img",
                                attributes: {
                                  src: 'https://laboranth.tech/D/R/IMG/CLA/instagram-icon.svg'
                                }
                              }
                            }
                          ]
                        }
                      },
                    ]
                  }
                },
              ]
            }
          }
        }
      ]

    },
  },
  'laboranth': {},
  'agency': {},
  'agency-premium': {}
}



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

  static WriteStyle(element, styleName, styleValue) {
    element.style[styleName] = styleValue
    Designer.removePointer()
  }
}

class DesignConstructor {
  static button(parent, styles, content, icon, className = 'none', id = Designer.ID()) {
    const btn = lab_design_system_d('button', id, parent, content, className, styles)
    if (icon) {
      const btnIcon = lab_design_system_d('img', `${id}-icon`, btn, '', 'none', ['design', 'icon'])
      btnIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${icon}.svg`)
    }
    return btn;
  }

  static input(parent, value, placeholder, icon, params, id = Designer.ID()) {
    const wrap = lab_design_system_d('div', id, parent, '', '', ['design', 'inputWrap'])
    if (icon) {
      const innerIcon = lab_design_system_d('img', id, wrap, '', '', ['design', 'icon'])
      innerIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${icon}.svg`)
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
    icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/arrow_drop_down.svg`)

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
    const stopList = ['lab-user-page']
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

    const menuWrap = lab_design_system_d('div', 'block-menu-wrap', parent, '', 'none', ['design', 'blockMenuWrap'])

    const menu = lab_design_system_d('div', 'block-menu', menuWrap, '', 'none', ['design', 'blockMenu'])
    Object.keys(options).forEach(e => {
      const item = lab_design_system_d('div', Designer.ID(), menu, '', 'none', ['design', 'blockMenuItem'])
      const itemIcon = lab_design_system_d('img', Designer.ID(), item, '0', 'none')
      const itemText = lab_design_system_d('span', Designer.ID(), item, options[e], 'none')
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
    let Listing = document.getElementById('lab-template-list')
    if (Listing) Listing.remove()
    document.getElementById('lab-style-box').style.marginRight = '-300px'
  }

  static ImageBox() {
    const fileBox = lab_design_system_d('div', 'file-preview-box', parent, '', '', ['design', 'fileBox'])
    let image = item.querySelector('img')
    const fileInput = lab_design_system_d('input', 'file-preview-input', fileBox, '', '', ['design', 'fileBoxInput'])
    fileInput.style.opacity = 0
    fileInput.setAttribute('type', 'file')
    const preview = lab_design_system_d('img', 'file-preview', fileBox)
    preview.style.width = '100%'
    preview.style.height = '100%'
    preview.style.objectFit = 'cover'
    preview.style.zIndex = '3'
    preview.style.pointerEvents = 'none'
    preview.style.position = 'relative'
    preview.setAttribute('src', image.src)

    fileInput.addEventListener('change', async (i) => {
      await loadImg(Array.from(i.target.files)[0], [image, preview])
    })

    const srcWrap = lab_design_system_d('div', Designer.ID(), parent, '', '', ['design', 'styleBox'])
    const fileSrc = lab_design_system_d('span', Designer.ID(), srcWrap, 'src')
    fileSrc.style.marginRight = '10px'
    let attrubuteInput = DesignConstructor.input(srcWrap, image.src)
    attrubuteInput.addEventListener('input', () => {
      image.setAttribute('src', attrubuteInput.value)
    })

    const objFit = DesignConstructor.dropList(parent, ['cover', 'fill', 'contain', 'none', 'scale-down'], image.style.objectFit, (e) => Designer.WriteStyle(image, 'objectFit', e))

    const horizontal = lab_design_system_d('div', Designer.ID(), parent, '', '', ['design', 'styleBox'])
    const horizontalLabel = lab_design_system_d('span', Designer.ID(), horizontal, 'horizontal')
    horizontalLabel.style.marginRight = '10px'
    horizontalLabel.style.minWidth = '50%'
    let imagePos = image.style.objectPosition.split(' ')

    let horizontalInput = DesignConstructor.input(horizontal, imagePos[0].replace('%', ''), '%')
    horizontalInput.setAttribute('type', 'number')
    horizontalInput.addEventListener('input', () => {
      image.style.objectPosition = horizontalInput.value + "% " + image.style.objectPosition.split(' ')[1]
    })
    const imgWidth = lab_design_system_d('div', 'image-width', parent, '', '', ['design', 'styleBox'])
    const imgWidthLabel = lab_design_system_d('span', 'image-width-label', imgWidth, 'width')
    imgWidthLabel.style.marginRight = '10px'
    imgWidthLabel.style.minWidth = '50%'

    let imgWidthInput = DesignConstructor.input(imgWidth, image.style.width.replace("%", ''), '%')
    imgWidthInput.setAttribute('type', 'number')
    imgWidthInput.addEventListener('input', () => {
      image.style.width = imgWidthInput.value + '%'
    })

    const imgHeight = lab_design_system_d('div', 'image-height', parent, '', '', ['design', 'styleBox'])
    const imgHeightLabel = lab_design_system_d('span', 'image-height-label', imgHeight, 'height')
    imgHeightLabel.style.marginRight = '10px'
    imgHeightLabel.style.minWidth = '50%'

    let imgHeightInput = DesignConstructor.input(imgHeight, image.style.height.replace("%", ''), '%')
    imgHeightInput.setAttribute('type', 'number')
    imgHeightInput.addEventListener('input', () => {
      image.style.height = imgHeightInput.value + '%'
    })

    const vertical = lab_design_system_d('div', Designer.ID(), parent, '', '', ['design', 'styleBox'])
    const verticalLabel = lab_design_system_d('span', Designer.ID(), vertical, 'vertical')
    verticalLabel.style.marginRight = '10px'
    verticalLabel.style.minWidth = '50%'

    let verticalInput = DesignConstructor.input(vertical, imagePos[1].replace('%', ''), '%')
    verticalInput.setAttribute('type', 'number')

    verticalInput.addEventListener('input', () => {
      image.style.objectPosition = image.style.objectPosition.split(' ')[0] + " " + verticalInput.value + "%"
    })

    const aspect = lab_design_system_d('div', 'image-aspect', parent, '', '', ['design', 'styleBox'])
    const aspectLabel = lab_design_system_d('span', 'image-aspect-label', aspect, 'aspect-ratio')
    aspectLabel.style.marginRight = '10px'
    aspectLabel.style.minWidth = '50%'

    let aspectInput = DesignConstructor.input(aspect, image.style.aspectRatio.split(' ')[0])
    aspectInput.setAttribute('type', 'number')

    aspectInput.addEventListener('input', () => {
      image.style.aspectRatio = aspectInput.value
    })
  }

  static generalStyles(item, parent) {
    const idInput = DesignConstructor.input(parent, "#" + item.id, '#')
    idInput.addEventListener('input', () => {
      item.id = idInput.value.trim().replace('#', '')
    })

    if (item.classList.contains('lab-img-container')) DesignConstructor.ImageBox(item, parent)

    else {
      const tagList = ['div', 'section', 'p', 'span', 'a', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'form', 'input', 'ul', 'ol', 'li', 'font', 'i', 'strong', 'strike']

      const tag = DesignConstructor.dropList(parent, tagList, item.tagName, (e) => {
        let newEl = document.createElement(e)
        item.getAttributeNames().forEach(n => {
          newEl.setAttribute(n, item.getAttribute(n))
        })
        newEl.innerHTML = item.innerHTML
        item.replaceWith(newEl)
        item = newEl
      })
    }

    const settings = lab_design_system_d('div', "menu-style-settings", parent, '', '', ['design', 'styleGrid'])

    const display = DesignConstructor.dropList(settings, ['flex', 'inline', 'block'], item.style.display, (e) => Designer.WriteStyle(item, 'display', e))

    const pos = DesignConstructor.dropList(settings, ['absolute', 'fixed', 'relative'], item.style.position, (e) => Designer.WriteStyle(item, 'position', e))

    const sizeBox = lab_design_system_d('div', 'width-box', parent, '', '', ['design', 'styleBox'])
    sizeBox.style.gap = '20px'
    const widthInput = DesignConstructor.input(sizeBox, item.style.width)
    widthInput.placeholder = 'width'
    widthInput.style.width = 'calc(50% - 10px)'
    widthInput.addEventListener('input', () => {
      item.style.width = widthInput.value
    })

    const heightInput = DesignConstructor.input(sizeBox, item.style.height)
    heightInput.placeholder = 'height'
    heightInput.style.width = 'calc(50% - 10px)'
    heightInput.addEventListener('input', () => {
      item.style.height = heightInput.value
    })

    const posBox = lab_design_system_d('div', "position-box", parent, '', '', ['design', 'styleBox'])
    posBox.style.gap = '20px'

    const XBox = lab_design_system_d('div', 'x-box', posBox, '', '', ['design', 'styleBox'])
    XBox.style.gap = '10px'

    const XLabel = lab_design_system_d('span', 'x-label', XBox, 'x')
    const XInput = DesignConstructor.input(XBox, item.style.left)
    XInput.addEventListener('input', () => {
      item.style.left = XInput.value
    })

    const YBox = lab_design_system_d('div', 'y-box', posBox, '', '', ['design', 'styleBox'])
    YBox.style.gap = '10px'

    const YLabel = lab_design_system_d('span', 'y-label', YBox, 'y')
    const YInput = DesignConstructor.input(YBox, item.style.left)
    YInput.addEventListener('input', () => {
      item.style.top = YInput.value
    })

    const ZBox = lab_design_system_d('div', 'z-box', posBox, '', '', ['design', 'styleBox'])
    ZBox.style.gap = '10px'

    const ZLabel = lab_design_system_d('span', 'z-label', ZBox, 'z')
    const ZInput = DesignConstructor.input(ZBox, item.style.zIndex)

    ZInput.addEventListener('input', () => {
      item.style.zIndex = ZInput.value
    })

    const padding = lab_design_system_d('span', 'padding-box-label', parent, 'padding')

    const paddingBox = lab_design_system_d('div', "padding-box", parent, '', '', ['design', 'grid-box'])
    const margin = lab_design_system_d('span', 'margin-box-label', parent, 'margin')
    const marginBox = lab_design_system_d('div', "margin-box", parent, '', '', ['design', 'grid-box'])

    const PositionsList = ['top', 'right', 'bottom', 'left']

    PositionsList.forEach(e => {
      const padInput = DesignConstructor.input(paddingBox, item.style[`padding${capitalizeFirstLetter(e)}`])
      padInput.addEventListener('input', () => {
        item.style[`padding${capitalizeFirstLetter(e)}`] = padInput.value
      })
    })

    PositionsList.forEach(e => {
      const marInput = DesignConstructor.input(marginBox, item.style[`margin${capitalizeFirstLetter(e)}`])
      marInput.addEventListener('input', () => {
        item.style[`margin${capitalizeFirstLetter(e)}`] = marInput.value
      })
    })


    item.getAttributeNames().forEach(n => {
      if (!['style', 'id'].includes(n)) {
        const wrap = lab_design_system_d('div', Designer.ID(), parent, '', '', ['design', 'styleBox'])
        const name = lab_design_system_d('span', Designer.ID(), wrap, n)
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
}

//FOR TOOLBAR ELEMENTS
const elementsToolsList = {
  'span': {
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
    'title': "span",
    'template': {
      'LANDSCAPE': {
        'id': "lab-text",
        'tag': "span",
        'classes': "lab-text",
        'root': true,
        'styles': {
          'padding': '10px',
          'position': "relative",
        }
      },
      'LANDSCAPE': {
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
      'LANDSCAPE': {
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
      'LANDSCAPE': {
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
      'LANDSCAPE': {
        'id': "lab-svg",
        'tag': "svg",
        'classes': "lab-svg",
        'root': true,
        'styles': {
          'position': "relative"
        }
      },
      'LANDSCAPE': {
        'id': "lab-svg",
        'tag': "svg",
        'classes': "lab-svg",
        'root': true,
        'styles': {
          'position': "relative"
        }
      }
    }
  }
}

async function CreateComponent(component, parent, vpm, random, escape = false, id) {
  const T = component.template
  let A
  let S = component.scripts

  async function readObject(temp, child) {

    const obj = temp[vpm]
    const element = document.createElement(obj.tag)
    if (obj.root) {
      parent.appendChild(element)
      A = element
      if (S) {
        const code = await lab_code_injection_array(S, true)
      }
    }

    element.id = id ? id : (random ? Designer.ID() : obj.id)

    if (obj.classes) {
      const classes = obj.classes.split(' ')
      element.classList.add(...classes)
    }
    if (escape) {
      element.classList.add('escape')
    }
    obj.attributes && Object.keys(obj.attributes).forEach(e => {
      element.setAttribute(e, obj.attributes[e])
    })
    element.style.position = 'relative'

    obj.styles && Object.keys(obj.styles).forEach(e => {
      element.style[e] = obj.styles[e]
    })

    element.style.opacity = ''

    obj.text && element.appendChild(document.createTextNode(obj.text))

    if (obj.child && obj.child.length > 0) {
      obj.child.forEach(async (e) => {
        let clild = await readObject(e, true)
        element.appendChild(clild)
      })
    }

    if (child) return element
  }

  readObject(T)

  return A

}

function Options(obj, key, value) {
  obj[key] = value ? value : !obj[key]
  lab_local_storage_object_update("global", { classic_options: obj })
}

function design_mode(app) {
  const labBody = document.querySelector('body')
  labBody.style.position = "relative"
  labBody.style.overflow = "hidden"
  labBody.style.display = "flex"
  labBody.style.width = "100svw"
  labBody.style.height = "100svh"

  const designBody = document.querySelector('body')

  let options = lab_local_storage_object("global").classic_options || {
    'vpm': "LANDSCAPE",
    'zoom': 100,
    'toolBar': true,
    'settingsBar': true,
    'sideMenu': true,
  }

  //SIDE MENU

  const menu = lab_design_system_d('div', 'side-menu', designBody, '', 'scrollable', ['design', 'side'])
  const menuButton = DesignConstructor.button(menu, ['design', 'showMenu'], '', 'arrow_menu_close', 'none', 'side-menu-open')
  menu.style.position = 'fixed'
  menu.style.zIndex = '10000'
  menu.style.maxHeight = lab_orientation == "PORTRAIT" ? 'calc(100% - 200px)' : "100%"
  menu.style.top = lab_orientation == 'PORTRAIT' ? '100px' : "0"
  menu.style.borderRadius = lab_orientation == 'PORTRAIT' ? '0 16px 16px 0' : "0"
  menu.style.paddingTop = lab_orientation == 'PORTRAIT' ? '0' : "60px"

  menuButton.style.top = lab_orientation == 'PORTRAIT' ? 'calc(100% - 40px)' : "-4px"
  menuButton.style.zIndex = 10

  menuButton.addEventListener('click', () => {
    DesignConstructor.toggleClass(menu, 'design', 'side', 'hideSide')
    DesignConstructor.toggleClass(menuButton, 'design', 'showMenu', 'hideMenu')
    let Listing = document.getElementById('lab-template-list')
    if (Listing) Listing.remove()
    Options(options, 'sideMenu')
  })

  if (!options.sideMenu) {
    DesignConstructor.addClass(menu, 'design', 'hideSide')
    DesignConstructor.addClass(menuButton, 'design', 'hideMenu')
  }

  const elementsBox = lab_design_system_d('div', "elements-box", menu, '', 'scrollable', ['design', 'elementsBox'])

  const elementsTitle = lab_design_system_d('span', 'elements-box-heading', elementsBox, "Elements", '', ['design', 'templatesHeading'])
  const elementsWrap = lab_design_system_d('div', 'elements-box-wrap', elementsBox, '', '', ['design', 'templates'])

  function addList(e, list) {
    Object.keys(e).map(el => {
      const item = lab_design_system_d('div', Designer.ID(), list, '', '', ['design', 'template'])
      const icon = lab_design_system_d('div', Designer.ID(), item, '', '', ['design', 'templateIcon'])
      const img = lab_design_system_d('img', Designer.ID(), icon)
      img.setAttribute('src', e[el].icon)
      img.style.width = '30px'
      img.style.height = '30px'
      const text = lab_design_system_d('span', Designer.ID(), item, e[el].title)
      item.addEventListener('click', () => OpenList(e[el]))
    })
  }

  addList(ComponentsList.free, elementsWrap)

  function OpenList(componentGroup) {
    let last = document.getElementById('lab-template-list')
    if (last) {
      let selected = last.getAttribute('data-group')
      last.remove()
      if (selected != componentGroup.title) {
        RenrerComponentsList()
      }
    }
    else RenrerComponentsList()

    function RenrerComponentsList() {
      const list = componentGroup.components
      const listing = lab_design_system_d('div', 'template-list', menu, '', '', ['design', 'templateList'])
      listing.setAttribute('data-group', componentGroup.title)

      list.forEach(async (e) => {
        let parent = listing
        if (['header', 'footer'].includes(e.template.LANDSCAPE.tag)) {
          const componentWrap = lab_design_system_d('div', 'component-wrap', listing)
          componentWrap.style.width = '300px'
          componentWrap.style.overflowX = 'hidden'
          parent = componentWrap
        }

        const component = await CreateComponent(e, parent, 'LANDSCAPE', true, true)
        component.style.cursor = 'pointer'
        component.style.boxShadow = '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'

        if (['header', 'footer'].includes(e.template.LANDSCAPE.tag)) {
          component.style.width = '600px'
          component.style.scale = '0.5'
          component.style.position = 'relative'
          component.style.left = '-150px'
        }

        component.addEventListener('mousedown', () => {
          const coord = component.getBoundingClientRect()
          const copy = Designer.copy(component)
          copy.style.position = "absolute"
          copy.style.opacity = "0.7"
          copy.style.left = `${coord.left}px`
          copy.style.top = `${coord.top}px`

          Designer.move(copy, async () => {
            const copyPos = copy.getBoundingClientRect()
            copy.remove()
            const pagePos = document.getElementById('lab-user-page').getBoundingClientRect()
            const item = await CreateComponent(e, page, 'LANDSCAPE', true)

            if (!['header', 'div', 'section', 'footer'].includes((item.tagName).toLowerCase())) {
              item.style.top = (copyPos.y - pagePos.y) / pagePos.height * 100 + '%'
              item.style.left = (copyPos.x - pagePos.x) / pagePos.width * 100 + '%'
              item.style.position = 'absolute'
              item.style.zIndex = '1'
            }
          })
        })
      })
      lab_fade_in_recursively(listing, 0.3)
    }
  }

  //SIDE MENU END

  //USER PAGE


  page.addEventListener('mouseover', (p) => {
    Designer.hover(p.target)
  })

  page.addEventListener('click', (e) => {
    let element = document.elementFromPoint(e.clientX, e.clientY)
    if (!element.classList.contains('lab-none')) {
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

    if (!element.classList.contains('lab-none')) {
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

  const toolBar = lab_design_system_d('div', "designers-bar", designBody, '', '', ['design', 'toolbar'])

  const prewiewTool = lab_design_system_d('div', "prewiew-tool", toolBar, '', '', ['design', 'prewiewTool'])

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
    'img': "img",
    'ai': 'AI-icon'
  }

  Object.keys(tools).forEach(tool => {
    let toolBtn
    if (typeof tools[tool] == 'object') {
      const toolWrap = lab_design_system_d('div', `${tool}-wrap`, toolBar, '', '', ['design', 'toolbarItemWrap'])
      toolBtn = DesignConstructor.button(toolWrap, ['design', 'toolbarItem'], '', tool, 'toolBtn', `${tool}-btn`)
      const arrow = DesignConstructor.button(toolWrap, ['design', 'toolArrow'], '', `keyboard_arrow_down`)
      toolBtn.setAttribute('data-tool', tool)

      const list = lab_design_system_d('div', `${tool}-list`, toolWrap, '', '', ['design', 'toolbarItemList'])

      tools[tool].forEach(e => {
        let btn = lab_design_system_d('button', `${e.value}-wrap-btn`, list, '', '', ['design', 'toolbarItem'])

        const icon = lab_design_system_d('img', `${e.value}-wrap-icon`, btn, '', '', ['design', 'icon'])
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

      if (tool == 'ai') {
        toolBtn.querySelector('img').style.width = '70%'
      }

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

  const blind = lab_design_system_d('button', "blind-tools", toolBar, '', '', ['design', 'blindTools'])
  blind.addEventListener('click', () => {
    DesignConstructor.toggleClass(toolBar, 'design', 'toolbar', 'hideToolbar')
    Options(options, 'toolBar')
    if (lab_orientation == "PORTRAIT") {
      toolBar.style.bottom = toolBar.style.bottom == "30px" ? "10px" : "-78px"
    }
  })

  toolBar.style.bottom = lab_orientation == "PORTRAIT" ? "10px" : "30px"
  if (!options.toolBar) DesignConstructor.addClass(toolBar, 'design', 'hideToolbar')

  //TOPSETTINGS
  pageWrap.style.position = 'relative'
  designBody.appendChild(pageWrap)

  let last = document.getElementById('lab-top-settings')
  if (last) last.remove()
  const topSettings = lab_design_system_d('div', "top-settings", pageWrap, '', '', ['design', 'top'])


  const settingsBtn = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'settings-white', 'none', 'settings-open-app-menu')
  settingsBtn.addEventListener('click', () => {
    lab_local_storage_object_update('global', { openedMenu: "app_menu" })
    const userLSG = lab_local_storage_object('global')
    const appObject = {}
    appObject.selectedApp = userLSG.app
    appObject.lngData = app.lngData
    lab_load_component('/D/C/UI/CLA/lab_app_menu.js', appObject)
  })

  const responsiveList = ["LANDSCAPE", "PORTRAIT"]

  function setVpm(vpm) {
    const currentScale = lab_local_storage_object('global').classic_options.zoom
    document.querySelector('#lab-user-page').innerHTML = ""
    page.style.scale = currentScale / 100

    if (vpm === "LANDSCAPE") {
      vpm = "LANDSCAPE"
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

    if (vpm == 'LANDSCAPE') {
      page.style.maxWidth = 'none'
      page.style.maxHeight = 'none'
      page.style.minHeight = '100svh'
    }

    if (vpm == 'PORTRAIT') {
      page.style.scale = 0.7
      page.style.minHeight = page.getBoundingClientRect().width * 1.8 + 'px'
    }
  }

  if (lab_orientation == 'LANDSCAPE') {
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

  if (lab_local_storage_object('global').classic_options.vpm == 'PORTRAIT') {
    page.style.minHeight = page.getBoundingClientRect().width * 1.8 + 'px'
  }

  if (lab_orientation == 'LANDSCAPE') {
    const sizeSwitcher = lab_design_system_d('input', 'sliderRange', topSettings, '', 'styled-input')
    sizeSwitcher.setAttribute('type', "range")
    sizeSwitcher.setAttribute('min', "1")
    sizeSwitcher.setAttribute('max', "100")
    sizeSwitcher.setAttribute('type', "range")
    sizeSwitcher.setAttribute('value', "100")
    sizeSwitcher.style.width = 'clamp(10%, 12%, 130px)'
    sizeSwitcher.style.background = '#fff'
    const size = lab_design_system_d('div', 'screen-size', topSettings, options.zoom + '%', '', ['design', 'pixelView'])
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

  const setPage = DesignConstructor.button(topSettings, ['design', 'setPage'], '', 'page-box', '', 'set-page-btn')
  setPage.style.margin = lab_orientation == 'PORTRAIT' ? '0 auto' : "0"

  setPage.appendChild(document.createTextNode(sectionElementsObject.section))
  const arrow = lab_design_system_d('img', 'page-arrow', setPage)
  arrow.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/chevron_right.svg`)


  setPage.addEventListener('click', () => {
    let last = document.getElementById('lab-pages-list')
    if (last) last.remove()
    const list = lab_design_system_d('div', 'pages-list', setPage, '', '', ['design', 'pagesList'])
    list.style.paddingTop = "15px"
    list.style.gap = "15px"

    sectionElementsObject.sections.forEach(e => {
      if (e != sectionElementsObject.section) {
        const btn = lab_design_system_d('a', `pages-list-${e}`, list, e, '', ['design', 'pageLink'])
        btn.setAttribute('href', `./${e}`)
      }
    })

    const add = lab_design_system_d('button', `add-page-btn`, list, '+', '', ['design', 'pageLink'])
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
      const popupWrap = lab_design_system_d("div", `add-popup-wrap`, designBody, '', '', ["popup", "wrap"])
      const popup = lab_design_system_d("div", `add-popup`, designBody, '', '', ["popup", "box"])
      const popupContent = lab_design_system_d("div", `add-popup-content`, popup, '', '', ["popup", "content"])
      popupWrap.addEventListener("click", () => {
        parent.removeChild(popupWrap)
        parent.removeChild(popup)
      })
      const pageInput = DesignConstructor.input(popupContent)
      const addBtn = lab_design_system_d("button", `add-popup-btn`, popupContent, 'add', '', ["buttons", "action"])

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

  const historyButtons = lab_design_system_d('div', 'history-button-group', topSettings)
  historyButtons.style.display = 'flex'
  historyButtons.style.alignItems = 'center'
  historyButtons.style.gap = '10px'

  const back = lab_design_system_d('button', 'back-btn', historyButtons, '', 'none', ['design', 'btn'])
  back.style.width = '30px'
  const backIcon = lab_design_system_d('img', `back-btn-icon`, back, '', 'none', ['design', 'icon'])
  backIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/back-arrow-icon.svg`)

  const next = lab_design_system_d('button', 'next-btn', historyButtons, '', 'none', ['design', 'btn'])
  next.style.width = '30px'
  const nextIcon = lab_design_system_d('img', `next-btn-icon`, next, '', 'none', ['design', 'icon'])
  nextIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/next-arrow-icon.svg`)

  const save = lab_design_system_d('button', 'save-btn', topSettings, '', 'none', ['design', 'btn'])
  const saveIcon = lab_design_system_d('img', `save-btn-icon`, save, '', 'none', ['design', 'icon'])
  saveIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/save-icon.svg`)
  save.addEventListener('click', () => lab_save_section(options.vpm))

  const blindTop = lab_design_system_d('button', "blind-btn", topSettings, '', '', ['design', 'blind'])
  blindTop.addEventListener('click', () => {
    DesignConstructor.toggleClass(topSettings, 'design', 'top', 'hideTop')
    Options(options, 'settingsBar')
  })

  if (!options.settingsBar) DesignConstructor.addClass(topSettings, 'design', 'hideTop')

  const styleMenu = lab_design_system_d('div', 'style-box', designBody, '', 'none ', ['design', 'styleWrapper'])
  const styleWrap = lab_design_system_d('div', 'style-wrap', styleMenu, '', 'none', ['design', 'styleWrap'])
  styleWrap.classList.add('lab-scrollable')


  styleMenu.style.top = lab_orientation == "PORTRAIT" ? "100px" : 0
  styleMenu.style.borderRadius = lab_orientation == "PORTRAIT" ? "16px 0 0 16px" : 0
  if (lab_orientation == "PORTRAIT") {
    styleMenu.style.marginRight = '-300px'
    styleMenu.style.height = 'calc(100% - 200px)'
  }

  const styleHide = lab_design_system_d('button', 'style-hide', styleMenu, '', 'none', ['design', 'hideStyles'])
  const styleHideIcon = lab_design_system_d('img', 'style-hide-icon', styleHide, '', 'none')
  styleHideIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/hide.svg`)
  styleHideIcon.style.maxWidth = '100%'
  styleHideIcon.style.marginLeft = '-4px'

  styleHide.addEventListener('click', () => {
    Designer.removePointer()
    styleMenu.style.marginRight = styleMenu.style.marginRight == '-300px' ? '0' : '-300px'
  })

  StylesMenu(page)
  //CODE MENU

  const codeMenu = lab_design_system_d('div', 'code-box', designBody, '', 'none', ['design', 'codeBox'])
  const codeMenuButton = DesignConstructor.button(codeMenu, ['design', 'codeBoxShow'], '', 'code-btn')

  const codeWrapper = lab_design_system_d('div', "code-wrapper", codeMenu, '', '', ['design', 'codeWrapper'])

  codeMenu.style.top = lab_orientation == "PORTRAIT" ? '100px' : "0"
  codeMenu.style.width = 'clamp(320px, 100%, 950px)'
  codeMenu.style.boxSizing = 'border-box'

  codeMenuButton.addEventListener('click', () => {
    codeWrapper.innerHTML = ''
    DesignConstructor.toggleClass(codeMenu, 'design', 'codeBox', 'codeBoxActive')
    DesignConstructor.toggleClass(codeMenuButton, 'design', 'codeBoxShow', 'codeBoxShowActive')
    codeMenu.style.top = lab_orientation == "PORTRAIT" ? '100px' : "0"

    document.getElementById('lab-user-page').innerHTML.split('>').forEach(e => {
      codeWrapper.innerText += e + '>\n            '
    })
  })


  //CODE MENU END

  const fileInput = lab_design_system_d('input', 'img-input', designBody, '', '', ['design', 'noneFile'])
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

  function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return [r, g, b]
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

      const elementMenuButtons = lab_design_system_d('div', "elementMenu-buttons", box, '', '', ['design', 'StyleButtons'])
      const elementMenuBody = lab_design_system_d('div', "elementMenuBody", box, '', '', ['design', 'elementMenuBody'])
      const menuSettings = ['position', 'coloring', 'text', 'styles', 'data']
      const activeSettings = 'position'

      menuSettings.forEach((e) => {
        const btn = lab_design_system_d('button', `${e}-tab-btn`, elementMenuButtons, '', 'element-menu-btn', ['design', 'StyleBtn'])
        btn.style.flex = '0 1 20%'
        btn.style.display = 'flex'
        btn.style.alignItems = 'center'
        btn.style.justifyContent = 'center'

        const btnIcon = lab_design_system_d('img', `${e}-tab-icon`, btn)
        btnIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${e}-icon.svg`)
        btnIcon.style.position = 'relative'
        btnIcon.style.width = 'auto'
        btnIcon.style.height = '24px'

        if (e == 'text') {
          btnIcon.style.height = '28px'
          btnIcon.style.bottom = '-2px'
        }
        if (e == 'styles') {
          btnIcon.style.height = '32px'
        }


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
            btn.classList.add('active')
            btn.style.background = '#F7F7F7'
            StyleSection(e)
          }
        })
      })

      function StyleSection(param) {
        const userLSG = lab_local_storage_object('global')

        elementMenuBody.innerHTML = ''
        if (param == 'position') DesignConstructor.generalStyles(item, elementMenuBody)

        if (param == 'coloring') {
          const colorSettings = lab_design_system_d('div', "colorSettings", elementMenuBody)
          const backgroundColorLabel = lab_design_system_d('strong', 'bg-color-label', colorSettings, 'background')
          const backgroundTabs = lab_design_system_d('div', 'bg-tabs', colorSettings)
          backgroundTabs.style.display = 'flex'
          backgroundTabs.style.justifyContent = 'space-between'
          backgroundTabs.style.gap = '5px'
          backgroundTabs.style.border = '4px solid rgb(242, 243, 247)'
          backgroundTabs.style.borderRadius = '10px'
          backgroundTabs.style.margin = '10px 0 5px 0'
          backgroundTabs.style.padding = '5px'

          const backgroundBox = lab_design_system_d('div', 'bg-box', colorSettings)
          backgroundBox.style.display = 'flex'
          backgroundBox.style.flexDirection = 'column'
          backgroundBox.style.gap = '10px'
          backgroundBox.style.paddingTop = '10px'

          const bgTabs = ['color', 'gradient', 'image']

          bgTabs.forEach(e => {
            const bgButton = lab_design_system_d('div', `bg-tabs-${e}`, backgroundTabs, e)
            bgButton.style.width = '30%'
            bgButton.style.textAlign = 'center'
            bgButton.style.fontWeight = '600'
            bgButton.style.padding = '5px'
            bgButton.style.cursor = 'pointer'
            bgButton.style.position = 'relative'
            bgButton.style.borderRadius = '5px'
            bgButton.addEventListener('click', () => ColorTabs(e))
          })

          function ColorTabs(tab = 'color') {
            let btn = document.getElementById(`lab-bg-tabs-${tab}`)
            let last = document.querySelector('.lab-color-tab-btn-active')
            if (last) {
              last.style.backgroundColor = 'transparent'
              last.classList.remove('lab-color-tab-btn-active')
              last.style.top = 'unset'
            }

            btn.classList.add('lab-color-tab-btn-active')
            btn.style.backgroundColor = '#FED05E'
            btn.style.top = '1px'

            backgroundBox.innerHTML = ''
            if (tab == 'color') {
              let colorBgPoints
              if (!item.style.backgroundColor) {
                colorBgPoints = ['255', '255', '255', '1']
              }
              else if (item.style.backgroundColor == 'transparent') {
                colorBgPoints = ['255', '255', '255', '0']
              }
              else {
                colorBgPoints = String(item.style.backgroundColor).split('(')[1].slice(0, -1).split(',')
              }
              if (colorBgPoints.length == 3) {
                colorBgPoints[3] = '1'
              }

              const colorWrap = lab_design_system_d('div', "color-wrap", backgroundBox, '', '', ['design', 'styleBox'])
              colorWrap.style.justifyContent = 'unset'
              colorWrap.style.gap = '15px'
              colorWrap.style.padding = '5px'
              colorWrap.style.backgroundColor = '#F4F4F5'

              const colorInputBox = lab_design_system_d('div', "color-wrap-box", colorWrap)
              colorInputBox.style.display = 'flex'
              colorInputBox.style.alignItems = 'center'
              colorInputBox.style.gap = '5px'

              const colorInput = lab_design_system_d('input', "input-bg-color", colorInputBox, '', 'color-input', ['design', 'colorInput'])
              colorInput.style.width = '25px'
              colorInput.style.height = '25px'
              colorInput.style.margin = '0'
              colorInput.style.padding = '0'
              colorInput.setAttribute('type', 'color')
              let colorString = `rgb(${colorBgPoints[0]},${colorBgPoints[1]},${colorBgPoints[2]})`

              colorInput.setAttribute('value', rgb2hex(colorString))
              const colorLabel = lab_design_system_d('label', "input-label-color", colorInputBox, rgb2hex(colorString))
              colorLabel.setAttribute('for', 'lab-input-bg-color')

              if (item.tagName == 'svg') {
                colorInput.setAttribute('value', item.getAttribute('fill'))
              }

              colorInput.addEventListener('input', () => {
                colorLabel.innerHTML = colorInput.value
                if (item.tagName == 'svg') {
                  Designer.WriteStyle(item, 'fill', colorInput.value)
                } else {
                  let colorArray = hexToRgb(colorInput.value)

                  Designer.WriteStyle(item, 'background', `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${Number(colorBgPoints[3])})`)
                }
              })

              const opacityInputBox = lab_design_system_d('div', "opacity-wrap-box", colorWrap)
              colorInputBox.style.display = 'flex'
              colorInputBox.style.alignItems = 'center'
              colorInputBox.style.gap = '3px'

              const opacityInput = lab_design_system_d('input', "input-opacity-color", opacityInputBox)
              opacityInput.style.width = '45px'
              opacityInput.style.border = 'none'
              opacityInput.style.outline = 'none'
              opacityInput.style.background = 'transparent'
              opacityInput.setAttribute('type', 'number')
              opacityInput.setAttribute('min', 0)
              opacityInput.setAttribute('max', 100)


              opacityInput.setAttribute('value', Number(colorBgPoints[3]) * 100)

              opacityInput.addEventListener('input', () => {
                item.style.background = `rgba(${colorBgPoints[0]}, ${colorBgPoints[1]}, ${colorBgPoints[2]}, ${opacityInput.value / 100})`
                colorBgPoints[3] = opacityInput.value / 100
              })
              const opacityLabel = lab_design_system_d('label', "input-label-opacity", opacityInputBox, '%')

              const removeBg = lab_design_system_d('button', "remove-bg-btn", colorWrap)
              removeBg.style.background = 'transparent'
              removeBg.style.border = 'none'
              removeBg.style.cursor = 'pointer'
              removeBg.style.padding = '4px'
              removeBg.style.marginLeft = 'auto'

              const removeIcon = lab_design_system_d('img', "remove-bg-btn-icon", removeBg)
              removeIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/close.svg')

              removeBg.addEventListener('click', () => {
                colorInput.value = '#ffffff'
                colorLabel.innerHTML = '#fff'
                item.style.background = ''
              })
            }
            if (tab == 'image') {
              const fileBox = lab_design_system_d('div', 'file-image-box', backgroundBox, '', '', ['design', 'fileBox'])
              const fileInput = lab_design_system_d('input', 'file-image-input', fileBox, '', '', ['design', 'fileBoxInput'])
              fileInput.style.opacity = 0
              fileInput.setAttribute('type', 'file')
              const preview = lab_design_system_d('img', 'file-preview', fileBox)
              preview.style.width = '100%'
              preview.style.height = '100%'
              preview.style.objectFit = 'cover'
              preview.style.zIndex = '3'
              preview.style.pointerEvents = 'none'
              preview.style.position = 'relative'

              if (item.style.backgroundImage && item.style.backgroundImage.includes('url')) {
                preview.setAttribute('src', item.style.backgroundImage.split('url(')[1].slice(1, -2))
              }

              fileInput.addEventListener('change', (e) => {
                const fileInfo = e.target.files[0]
                item.style.backgroundImage = `url(${URL.createObjectURL(fileInfo)})`
                preview.setAttribute('src', URL.createObjectURL(fileInfo))
              })

              const bgRepeat = lab_design_system_d('div', 'bg-repeat', backgroundBox, '', '', ['design', 'styleBox'])
              bgRepeat.style.gap = '10px'
              bgRepeat.style.justifyContent = 'unset'
              const bgRepeatLabel = lab_design_system_d('span', 'bg-repeat-label', bgRepeat, 'no-repeat')
              const bgRepeatCheck = lab_design_system_d('input', 'bg-repeat-check', bgRepeat)
              bgRepeatCheck.setAttribute('type', 'checkbox')

              bgRepeatCheck.addEventListener('change', () => {
                item.style.backgroundRepeat = item.style.backgroundRepeat == 'no-repeat' ? 'repeat' : "no-repeat"
              })

              const bgPos = lab_design_system_d('div', 'bg-pos', backgroundBox, '', '', ['design', 'styleBox'])
              bgPos.style.gap = '10px'
              bgPos.style.justifyContent = 'unset'
              const bgPosLabel = lab_design_system_d('span', 'bg-pos-label', bgPos, 'position')

              const bgPosList = ['unset', 'top', 'left', 'bottom', 'right', 'bottom', 'center']
              const bgPosDrop = DesignConstructor.dropList(bgPos, bgPosList, 'unset', (e) => {
                item.style.backgroundPosition = e
              })

              const bgSize = lab_design_system_d('div', 'bg-size', backgroundBox, '', '', ['design', 'styleBox'])
              bgSize.style.gap = '10px'
              bgSize.style.justifyContent = 'unset'
              const bgSizeLabel = lab_design_system_d('span', 'bg-size-label', bgSize, 'size')

              const bgSizeList = ['contain', 'cover', 'fill', 'auto', 'right']
              const bgSizeDrop = DesignConstructor.dropList(bgSize, bgSizeList, 'contain', (e) => {
                item.style.backgroundSize = e
              })
            }
            if (tab == 'gradient') {
              let gradientType = 'linear'
              let gradientAngle = 180
              let colors = {}

              const gradientTypes = ['linear', 'radial', 'conic']

              if (item.style.backgroundImage && item.style.backgroundImage.includes('gradient')) {
                gradientArray = item.style.backgroundImage.split('gradient(')[1].slice(0, -1).replaceAll(', rgb(', '#').replace('rgb(', '').replaceAll(')', '').split('#')

                if (item.style.backgroundImage.includes('linear')) gradientType = 'linear'
                else if (item.style.backgroundImage.includes('radial')) gradientType = 'radial'
                else if (item.style.backgroundImage.includes('conic')) gradientType = 'conic'
              }

              const gradientTabs = lab_design_system_d('div', 'gradient-tabs', backgroundBox)
              gradientTabs.style.display = 'flex'
              gradientTabs.style.justifyContent = 'space-between'
              gradientTabs.style.gap = '5px'
              gradientTabs.style.border = '4px solid rgb(242, 243, 247)'
              gradientTabs.style.borderRadius = '10px'
              gradientTabs.style.margin = '0 0 5px 0'
              gradientTabs.style.padding = '5px'

              let gradient = lab_design_system_d('div', `gradient-background`, backgroundBox)

              gradientTypes.forEach(e => {
                const typeGradientBtn = lab_design_system_d('div', `gradient-tabs-${e}`, gradientTabs, e)
                typeGradientBtn.style.width = '50%'
                typeGradientBtn.style.textAlign = 'center'
                typeGradientBtn.style.fontWeight = '600'
                typeGradientBtn.style.padding = '5px'
                typeGradientBtn.style.cursor = 'pointer'
                typeGradientBtn.style.position = 'relative'
                typeGradientBtn.style.borderRadius = '5px'
                typeGradientBtn.addEventListener('click', () => GradientTypeSelect(e))
              })

              function GradientTypeSelect(type = 'linear') {
                gradientType = type
                let btnGradient = document.getElementById(`lab-gradient-tabs-${type}`)
                let lastGrType = document.querySelector('.lab-gradient-tab-btn-active')

                if (lastGrType) {
                  lastGrType.style.backgroundColor = 'transparent'
                  lastGrType.classList.remove('lab-gradient-tab-btn-active')
                  lastGrType.style.top = 'unset'
                }

                btnGradient.classList.add('lab-gradient-tab-btn-active')
                btnGradient.style.backgroundColor = '#FED05E'
                btnGradient.style.top = '1px'

                function Range() {
                  if (!document.getElementById('angle-box')) {
                    if (gradientAngle == 'circle') gradientAngle = 180
                    const angleBox = document.createElement('div')
                    angleBox.id = 'angle-box'
                    angleBox.classList.add('escape')
                    angleBox.style.display = 'flex'
                    angleBox.style.gap = '10px'
                    angleBox.style.alignItems = 'center'

                    gradientTabs.after(angleBox)
                    const angle = lab_design_system_d('input', `angle-range`, angleBox, '', 'styled-input')
                    angle.setAttribute('type', 'range')
                    angle.setAttribute('max', '360')
                    angle.setAttribute('min', '-360')
                    angle.setAttribute('value', gradientAngle)
                    angle.style.width = '100%'

                    const angleVal = lab_design_system_d('span', `angle-range-value`, angleBox, `${gradientAngle}deg`)

                    angle.addEventListener('input', () => {
                      angleVal.innerHTML = angle.value + 'deg'
                      gradientAngle = angle.value
                      writeColor()
                    })

                    lab_fade_in_recursively(backgroundBox, 0.3)

                  }
                }

                if (['linear', 'conic'].includes(type)) Range()

                if (type == 'radial') {
                  gradientAngle = 'circle'
                  let angleBox = document.getElementById('angle-box')
                  if (angleBox) angleBox.remove()
                }
                writeColor()
              }

              GradientTypeSelect()

              const gradientColors = lab_design_system_d('div', `gradient-colors`, backgroundBox)
              gradientColors.style.position = 'relative'
              gradientColors.style.display = 'flex'
              gradientColors.style.flexDirection = 'column'
              gradientColors.style.gap = '10px'

              const newColorBtn = lab_design_system_d('button', `add-new-color`, gradientColors, 'add color +')

              newColorBtn.style.background = 'rgb(254, 208, 94)'
              newColorBtn.style.padding = '10px'
              newColorBtn.style.color = '#000'
              newColorBtn.style.width = '100%'
              newColorBtn.style.borderRadius = '5px'
              newColorBtn.style.fontWeight = '700'
              newColorBtn.style.border = 'none'
              newColorBtn.style.cursor = 'pointer'
              newColorBtn.addEventListener('click', () => addColor())


              function writeColor() {
                let gradientStr = `${gradientType}-gradient(${gradientAngle}${gradientAngle == 'circle' ? "" : "deg"}`

                Object.keys(colors).forEach(j => {
                  gradientStr += `, ${colors[j]}`
                })
                gradientStr += ')'
                gradient.style.backgroundImage = gradientStr
                if (Object.keys(colors).length > 1) {
                  gradient.style.aspectRatio = '1.7'
                }

                item.style.backgroundImage = gradientStr
              }

              function addColor() {
                let id = Designer.ID()
                const colorWrap = lab_design_system_d('div', `color-wrap-${id}`, gradientColors, '', '', ['design', 'styleBox'])
                colorWrap.style.justifyContent = 'unset'
                colorWrap.style.gap = '15px'
                colorWrap.style.padding = '5px'
                colorWrap.style.backgroundColor = '#F4F4F5'

                const colorInputBox = lab_design_system_d('div', `color-wrap-box-${id}`, colorWrap)
                colorInputBox.style.display = 'flex'
                colorInputBox.style.alignItems = 'center'
                colorInputBox.style.gap = '5px'

                const colorInput = lab_design_system_d('input', `input-bg-color-${id}`, colorInputBox, '', 'color-input', ['design', 'colorInput'])
                colorInput.style.width = '25px'
                colorInput.style.height = '25px'
                colorInput.style.margin = '0'
                colorInput.style.padding = '0'
                colorInput.setAttribute('type', 'color')
                colorInput.setAttribute('value', '#fed05e')

                colors[id] = '#fed05e'

                colorInput.addEventListener('input', () => {
                  colors[id] = colorInput.value
                  writeColor()
                })

                const colorLabel = lab_design_system_d('label', `label-color-${id}`, colorInputBox, colorInput.value)
                colorLabel.setAttribute('for', `lab-input-bg-color-${id}`)

                const removeBg = lab_design_system_d('button', `remove-bg-btn-${id}`, colorWrap)
                removeBg.style.background = 'transparent'
                removeBg.style.border = 'none'
                removeBg.style.cursor = 'pointer'
                removeBg.style.padding = '4px'
                removeBg.style.marginLeft = 'auto'

                const removeIcon = lab_design_system_d('img', `remove-bg-btn-icon-${id}`, removeBg)
                removeIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/close.svg')

                removeBg.addEventListener('click', () => {
                  colorWrap.remove()
                  delete colors[id]
                  writeColor()
                })
                writeColor()
                lab_fade_in_recursively(gradientColors, 0.3)
              }

            }
            lab_fade_in_recursively(backgroundBox, 0.3)
          }
          ColorTabs()

          let shadows = [0, 0, 0, 0]
          let shadowColors = '#000'
          function whriteShadow() {
            item.style.boxShadow = `${shadows[0]}px ${shadows[1]}px ${shadows[2]}px ${shadows[3]}px ${shadowColors}`
          }
          const shadowLabel = lab_design_system_d('strong', 'shadow-label', elementMenuBody, 'box-shadows')

          const xOffset = lab_design_system_d('span', 'x-offset', elementMenuBody, 'Horizontal offset')
          const xOffsetBox = lab_design_system_d('span', 'x-offset-box', elementMenuBody)
          xOffsetBox.style.display = 'flex'
          xOffsetBox.style.gap = '10px'
          xOffsetBox.style.alignItems = 'center'

          const xOffsetInput = lab_design_system_d('input', `x-offset-range`, xOffsetBox, '', 'styled-input')
          xOffsetInput.setAttribute('type', 'range')
          xOffsetInput.setAttribute('max', '100')
          xOffsetInput.setAttribute('min', '-100')
          xOffsetInput.setAttribute('value', 0)
          xOffsetInput.style.width = '100%'

          const xOffsetVal = lab_design_system_d('p', `x-offset-value`, xOffsetBox, `0`)
          xOffsetVal.style.minWidth = '50px'
          xOffsetVal.style.margin = '0'

          xOffsetInput.addEventListener('input', () => {
            xOffsetVal.innerHTML = xOffsetInput.value + 'px'
            shadows[0] = xOffsetInput.value
            whriteShadow()
          })

          const yOffset = lab_design_system_d('span', 'y-offset', elementMenuBody, 'Vertical offset')
          const yOffsetBox = lab_design_system_d('span', 'y-offset-box', elementMenuBody)
          yOffsetBox.style.display = 'flex'
          yOffsetBox.style.gap = '10px'
          yOffsetBox.style.alignItems = 'center'

          const yOffsetInput = lab_design_system_d('input', `y-offset-range`, yOffsetBox, '', 'styled-input')
          yOffsetInput.setAttribute('type', 'range')
          yOffsetInput.setAttribute('max', '100')
          yOffsetInput.setAttribute('min', '-100')
          yOffsetInput.setAttribute('value', 0)
          yOffsetInput.style.width = '100%'

          const yOffsetVal = lab_design_system_d('p', `y-offset-value`, yOffsetBox, `0`)
          yOffsetVal.style.minWidth = '50px'
          yOffsetVal.style.margin = '0'

          yOffsetInput.addEventListener('input', () => {
            yOffsetVal.innerHTML = yOffsetInput.value + 'px'
            shadows[1] = yOffsetInput.value
            whriteShadow()
          })

          const blur = lab_design_system_d('span', 'blur-shadow', elementMenuBody, 'Blurring')
          const blurBox = lab_design_system_d('span', 'blur-shadow-box', elementMenuBody)
          blurBox.style.display = 'flex'
          blurBox.style.gap = '10px'
          blurBox.style.alignItems = 'center'

          const blurInput = lab_design_system_d('input', `blur-shadow-range`, blurBox, '', 'styled-input')
          blurInput.setAttribute('type', 'range')
          blurInput.setAttribute('max', '100')
          blurInput.setAttribute('min', '-100')
          blurInput.setAttribute('value', 0)
          blurInput.style.width = '100%'

          const blurVal = lab_design_system_d('p', `blur-shadow-value`, blurBox, `0`)
          blurVal.style.minWidth = '50px'
          blurVal.style.margin = '0'

          blurInput.addEventListener('input', () => {
            blurVal.innerHTML = blurInput.value + 'px'
            shadows[2] = blurInput.value
            whriteShadow()
          })


          const stretc = lab_design_system_d('span', 'stretc-shadow', elementMenuBody, 'Stretching')
          const stretcBox = lab_design_system_d('span', 'stretc-shadow-box', elementMenuBody)
          stretcBox.style.display = 'flex'
          stretcBox.style.gap = '10px'
          stretcBox.style.alignItems = 'center'

          const stretcInput = lab_design_system_d('input', `stretc-shadow-range`, stretcBox, '', 'styled-input')
          stretcInput.setAttribute('type', 'range')
          stretcInput.setAttribute('max', '100')
          stretcInput.setAttribute('min', '-100')
          stretcInput.setAttribute('value', 0)
          stretcInput.style.width = '100%'

          const stretcVal = lab_design_system_d('p', `stretc-shadow-value`, stretcBox, `0`)
          stretcVal.style.minWidth = '50px'
          stretcVal.style.margin = '0'

          stretcInput.addEventListener('input', () => {
            shadows[3] = stretcInput.value
            stretcVal.innerHTML = stretcInput.value + 'px'
            whriteShadow()
          })

          const shadowColorBox = lab_design_system_d('div', 'color-shadow-box', elementMenuBody)
          const shadowColor = lab_design_system_d('span', 'color-shadow', shadowColorBox, 'Color')
          shadowColorBox.style.display = 'flex'
          shadowColorBox.style.gap = '10px'
          shadowColorBox.style.border = 'none'
          shadowColorBox.style.justifyContent = 'space-between'

          const shadowColorInput = lab_design_system_d('input', `shadow-color-range`, shadowColorBox, '', 'color-input')
          shadowColorInput.setAttribute('type', 'color')

          shadowColorInput.addEventListener('input', () => {
            shadowColors = shadowColorInput.value
            whriteShadow()
          })

          const border = lab_design_system_d('strong', 'border', elementMenuBody, 'Border radius')
          const borderGrid = lab_design_system_d('div', "border-box", elementMenuBody, '', '', ['design', 'grid-box'])

          const borderTop = DesignConstructor.input(borderGrid, item.style.borderTopLeftRadius, '', '', { el: item, style: `borderTopLeftRadius` })
          const borderTopRight = DesignConstructor.input(borderGrid, item.style.borderTopRightRadius, '', '', { el: item, style: `borderTopRightRadius` })
          const borderBottomRigth = DesignConstructor.input(borderGrid, item.style.borderBottomRightRadius, '', '', { el: item, style: `borderBottomRightRadius` })
          const borderBottomLEft = DesignConstructor.input(borderGrid, item.style.borderBottomLeftRadius, '', '', { el: item, style: `borderBottomLeftRadius` })

          const borderColorBox = lab_design_system_d('div', 'color-border-box', elementMenuBody)
          const borderColor = lab_design_system_d('span', 'color-border', borderColorBox, 'Border-color')
          borderColorBox.style.display = 'flex'
          borderColorBox.style.gap = '10px'
          borderColorBox.style.border = 'none'
          borderColorBox.style.justifyContent = 'space-between'

          const borderColorInput = lab_design_system_d('input', `border-color-range`, borderColorBox, '', 'color-input')
          borderColorInput.setAttribute('type', 'color')

          borderColorInput.addEventListener('input', () => {
            item.style.borderColor = borderColorInput.value
          })

        }

        if (param == 'text') {
          const fontFamily = DesignConstructor.dropList(elementMenuBody, ['Arial', 'Arial2', 'Arial3'], css['font-family'], (e) => Designer.WriteStyle(item, 'fontFamily', e))

          const fontSettings = lab_design_system_d('div', "fontSettings", elementMenuBody, '', '', ['design', 'styleGrid'])
          const textALign = lab_design_system_d('div', "textALign", fontSettings)
          const textStyle = lab_design_system_d('div', "textStyle", fontSettings)
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

          const textSettings = lab_design_system_d('div', "textSettings", elementMenuBody, '', '', ['design', 'styleGrid'])

          const weight = DesignConstructor.dropList(textSettings, ['normal', 'bold', 'thin', 'medium', 'black'], css['font-weight'], (e) => Designer.WriteStyle(item, 'fontWeight', e))

          const fontSize = DesignConstructor.input(textSettings, css['font-size'], 'px', '', { el: item, style: 'fontSize' })

          const lineHeight = DesignConstructor.input(textSettings, css['line-height'], '', 'line-height', { el: item, style: 'lineHeight' })

          const letterSpacing = DesignConstructor.input(textSettings, css['letter-spacing'], '', 'letter-spacing', { el: item, style: 'letterSpacing' })

          const colorSettings = lab_design_system_d('div', "colorSettings", elementMenuBody, '', '', ['design', 'styleBox'])
          const textColor = lab_design_system_d('span', "text-color", colorSettings, 'Text color')
          const textColorInput = lab_design_system_d('input', "input-text-color", colorSettings, '', 'color-input', ['design', 'colorInput'])
          textColorInput.setAttribute('type', 'color')
          textColorInput.setAttribute('value', css['color'])
          textColorInput.addEventListener('input', () => {
            Designer.WriteStyle(item, 'color', textColorInput.value)
          })
        }

        if (param == 'styles') {
          let cssText = ''
          let tempCSS = document.getElementById('lab-temp-css')

          const cssLabel = lab_design_system_d('strong', "css-label", elementMenuBody, 'CSS')
          const cssBox = lab_design_system_d('strong', "css-box", elementMenuBody, '', 'scrollable')
          cssBox.setAttribute('contenteditable', true)
          cssBox.style.borderRadius = '25px'
          cssBox.style.outline = 'none'
          cssBox.style.minHeight = '130px'
          cssBox.style.background = '#F7F7F7'
          cssBox.style.padding = '20px'
          cssBox.style.overflowY = 'scroll'

          socket.emit(`askCSSFile`, userLSG, e => {
            if (e.success) {
              cssText = e.data
              let formatedItemCss = ''
              let itemClass = item.className.split(' ').find(p => cssText.includes(`.${p}`))

              let checkId = false
              let checkClass = false

              function searchStyle() {

                checkId = cssText.includes(`#${item.id} `) || cssText.includes(`#${item.id}{`) || cssText.includes(`#${item.id}:`)
                checkClass = cssText.includes(`.${itemClass}`)

                if (!checkId && !checkClass) return

                if (checkId) {
                  let a = cssText.indexOf(`#${item.id} `)
                  let b = cssText.indexOf(`#${item.id}{`)
                  let c = cssText.indexOf(`#${item.id}:`)

                  let startValue = (a > -1 ? a : null) || (b > -1 ? b : null) || (c > -1 ? c : null)

                  let sctyleStr = cssText.substring(
                    startValue,
                    cssText.indexOf("}", startValue) + 1
                  )

                  cssText = cssText.substring(0, startValue) + cssText.substring(cssText.indexOf("}", startValue) + 1);

                  formatedItemCss += sctyleStr
                }

                if (checkClass) {
                  let a = cssText.indexOf(`.${itemClass} `)
                  let b = cssText.indexOf(`.${itemClass}{`)
                  let c = cssText.indexOf(`.${itemClass}:`)
                  let startValue = (a > -1 ? a : null) || (b > -1 ? b : null) || (c > -1 ? c : null)

                  if (startValue == -1) checkClass = false

                  let styleStr = cssText.substring(
                    startValue,
                    cssText.indexOf("}", startValue) + 1
                  )

                  cssText = cssText.substring(0, startValue) + cssText.substring(cssText.indexOf("}", startValue) + 1);

                  formatedItemCss += styleStr
                }
                searchStyle()
              }
              searchStyle()

              let text = formatedItemCss.replaceAll('{', '{<br>').replaceAll('}', '<br>}<br>')
              let textArray = text.split('<br>')
              let newCssString = ''
              textArray.forEach((p, index) => {
                if (!p.includes('{') && !p.includes('}')) {
                  textArray[index] = `    ${p}<br>`
                } else {
                  textArray[index] = p + '<br>'
                }
                newCssString += textArray[index]
              })

              cssBox.innerHTML = newCssString
            }
          })

          cssBox.addEventListener('input', () => {
            let boxText = cssBox.innerHTML

            tempCSS.innerHTML += cssBox.innerHTML.replaceAll('<br>', '')
            let checkId = boxText.includes(`#${item.id} `) || boxText.includes(`#${item.id}{`)
            let checkClass = item.className.split(' ').find(p => boxText.includes(`.${p} ` || boxText.includes(`.${p}{`)))

            if (checkId || checkClass) {
              if (checkId) {
                let startValue = cssText.indexOf(`#${item.id} `) || cssText.indexOf(`#${item.id}{`) || cssText.indexOf(`#${item.id}:`)

                let sctyleStr = cssText.substring(
                  startValue,
                  cssText.indexOf("}", startValue) + 1
                )
                cssText.replace(sctyleStr, '')
              }

              if (checkClass) {
                let startValue = cssText.indexOf(`.${checkClass} `) || cssText.indexOf(`.${checkClass}{`) || cssText.indexOf(`.${checkClass}:`)

                let sctyleStr = cssText.substring(
                  startValue,
                  cssText.indexOf("}", startValue) + 1
                )
                cssText.replace(sctyleStr, '')
              }
            }

            userLSG.string = cssBox.innerHTML.replaceAll('<br>', '')
            socket.emit('saveCSS', userLSG)
          })

        }
        lab_fade_in_recursively(elementMenuBody, 0.2)
      }

      lab_fade_in_recursively(box, 0.3)
    }
  }

  const TempCss = lab_design_system_d('style', 'temp-css', document.querySelector('body'))
  TempCss.position = 'absolute'
  TempCss.left = '-999999999999px'
  TempCss.top = '-999999999999px'
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
        let area = !document.getElementById('lab-area') ? lab_design_system_d('div', 'area', page, '', 'none', ['design', 'area']) : document.getElementById('lab-area')
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
        const item = await CreateComponent(elementsToolsList.span, page, 'LANDSCAPE', true)
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
            const item = await CreateComponent(elementsToolsList.img, itemBox, 'LANDSCAPE', true)

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
        })
        return newSrc
      })

    } catch (err) {
      console.log(err)
    }
  }



  return await processFile()
}


// return design_mode




setTimeout(() => {
  document.querySelector('body').innerHTML = ''
  design_mode()
}, 500);






const styles = {
  "inputs": {
    "standard": {
      "default": {
        "boxSizing": "border-box",
        "borderRadius": "18px",
        "padding": "0 15px",
        "outline": "none !important",
        "width": "90%",
        "maxWidth": "350px",
        "height": "clamp(5svh, 15vh, 70px)",
        "background": "#f4f4f5",
        "backgroundColor": "white",
        "marginBottom": "clamp(1svh, 15vw, 20px)",
        "border": "none"
      }
    }
  },
  "pages": {
    "login": {
      "default": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100svw",
        "height": "100svh",
        "background": "#EFEFEF",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "fontFamily": "Petrona"
      },
      "PORTRAIT": {
        "justifyContent": "center"
      }
    },
    "dash": {
      "default": {
        "background": "rgb(239, 239, 239)",
        "display": "flex",
        "flexDirection": "column",
        "minHeight": "100vh",
        "overflowY": "auto"
      }
    }
  },
  "labels": {
    "h6": {
      "default": {
        "width": "90%",
        "color": "#808080",
        "fontWeight": "700",
        "fontSize": "clamp(20px, 2vw, 40px)",
        "marginBottom": "clamp(5px, 10svh, 44px)",
        "textAlign": "center"
      }
    }
  },
  "links": {
    "underline": {
      "default": {
        "fontWeight": "300",
        "fontSize": "clamp(12px, 2vw, 20px)",
        "textDecoration": "underline",
        "textAlign": "center",
        "color": "#808080"
      }
    },
    "legal": {
      "default": {
        "fontWeight": "400",
        "fontSize": "14px",
        "textDecoration": "underline",
        "textAlign": "left",
        "color": "#fff",
        "marginRight": "20px"
      },
      "PORTRAIT": {
        "marginRight": "0"
      }
    },
    "contact": {
      "default": {
        "fontWeight": "700",
        "fontSize": "14px",
        "textDecoration": "underline",
        "textAlign": "left",
        "color": "#fff",
        "marginLeft": "auto"
      },
      "PORTRAIT": {
        "marginLeft": "0"
      }
    }
  },
  "logo": {
    "medium": {
      "default": {
        "marginTop": "clamp(10px, 2vw, 60px)",
        "marginBottom": "clamp(10px, 2vw, 60px)",
        "width": "clamp(50px, 15svh, 101px)"
      }
    },
    "small": {
      "default": {
        "width": "clamp(40px, 2svw,67px)",
        "height": "clamp(45px, 2svw,75px)"
      }
    }
  },
  "search": {
    "box": {
      "default": {
        "background": "#fff",
        "height": "clamp(35px, 5svh, 50px)",
        "boxSizing": "border-box",
        "borderRadius": "40px",
        "cursor": "pointer",
        "display": "flex",
        "alignItems": "center",
        "position": "relative",
        "padding": "0 15px"
      },
      "PORTRAIT": {
        "order": "98",
        "width": "100%"
      },
      "LANDSCAPE": {
        "width": "clamp(20svw, 50svw, 500px)",
        "margin": "0 auto 0 0"
      }
    },
    "input": {
      "default": {
        "width": "100%",
        "padding": "0 10px 0 5px",
        "border": "none",
        "outline": "none"
      }
    },
    "result": {
      "default": {
        "zIndex": "-1",
        "position": "absolute",
        "top": "calc(100% - 20px)",
        "width": "100%",
        "left": "0",
        "borderRadius": "0 0 15px 15px",
        "overFlow": "hidden",
        "fontSize": "14px",
        "background": "#fff"
      }
    },
    "item": {
      "default": {
        "padding": "5px 50px",
        "display": "block",
        "textDecoration": "none",
        "color": "#000"
      }
    },
    "first": {
      "default": {
        "padding": "20px 50px 5px 50px",
        "display": "block",
        "textDecoration": "none",
        "color": "#000"
      }
    }
  },
  "containers": {
    "header": {
      "default": {
        "display": "flex",
        "boxSizing": "border-box",
        "alignItems": "center",
        "paddingTop": "clamp(2svh, 12svh, 30px)",
        "paddingBottom": "clamp(0, 0, 30px)",
        "paddingLeft": "clamp(2svw, 5svw, 60px)",
        "paddingRight": "clamp(2svw, 5svw, 60px)",
        "position": "relative",
        "zIndex": "9999",
        "width": "100%"
      },
      "PORTRAIT": {
        "justifyContent": "space-between",
        "flexWrap": "wrap",
        "gap": "20px 8px"
      }
    },
    "headerWrap": {
      "default": {
        "display": "none"
      },
      "PORTRAIT": {
        "display": "flex",
        "justifyContent": "space-between",
        "gap": "8px",
        "order": 99,
        "alignItems": "center",
        "width": "100%"
      }
    },
    "footer": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "color": "#fff",
        "boxSizing": "border-box",
        "marginTop": "auto",
        "flexWrap": "wrap",
        "background": "#464C59",
        "paddingTop": "clamp(2svh, 12svh, 30px)",
        "paddingBottom": "clamp(2svh, 12svh, 30px)",
        "paddingLeft": "clamp(2svw, 5svw, 60px)",
        "paddingRight": "clamp(2svw, 12svw, 60px)"
      },
      "PORTRAIT": {
        "justifyContent": "center",
        "gap": "8px"
      }
    }
  },
  "elements": {
    "showPass": {
      "default": {
        "border": "none",
        "background": "transparent",
        "position": "absolute",
        "top": "50%",
        "transform": "translateY(-50%)",
        "right": "10px",
        "opacity": "0",
        "pointerIvents": "none",
        "cursor": "pointer",
        "zIndex": "99",
        "width": "25px"
      }
    },
    "avatar": {
      "default": {
        "position": "relative",
        "cursor": "pointer",
        "border": "none",
        "background": "#FFFFFF",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "borderRadius": "50%",
        "width": "clamp(35px, 5svh, 50px)",
        "height": "clamp(35px, 5svh, 50px)",
        "boxSizing": "border-box"
      },
      "LANDSCAPE": {
        "marginLeft": "40px"
      }
    },
    "avatarIcon": {
      "default": {
        "max-height": "50%",
        "height": "100%",
        "width": "auto"
      }
    },
    "date": {
      "default": {
        "fontSize": "14px",
        "fontWeight": "400",
        "lineHeight": "19.1px",
        "textAlign": "left"
      },
      "LANDSCAPE": {
        "marginRight": "45px"
      }
    },
    "theme": {
      "default": {
        "border": "2px solid #585858",
        "cursor": "pointer",
        "width": "40px",
        "height": "20px",
        "boxSizing": "border-box",
        "display": "flex",
        "alignItems": "center",
        "borderRadius": "10px",
        "padding": "0 2px"
      }
    },
    "lightTheme": {
      "default": {
        "background": "rgb(252, 206, 92)",
        "width": "10px",
        "height": "10px",
        "boxSizing": "border-box",
        "display": "flex",
        "borderRadius": "10px",
        "alignItems": "center",
        "justifyContent": "start"
      }
    },
    "gridSwitch": {
      "default": {
        "background": "#E2E2E2",
        "boxSizing": "border-box",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "height": "clamp(35px, 5svh, 50px)"
      },
      "LANDSCAPE": {
        "padding": "5px",
        "borderRadius": "50px",
        "marginRight": "5svw",
        "width": "110px"
      },
      "PORTRAIT": {
        "padding": "3.5px",
        "width": "85px",
        "borderRadius": "35px",
        "order": "99"
      }
    },
    "gridBtn": {
      "default": {
        "border": "none",
        "background": "transparent",
        "boxSizing": "border-box",
        "borderRadius": "50%",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "height": "100%",
        "padding": "5px",
        "aspectRatio": "1"
      }
    },
    "share": {
      "default": {
        "border": "none",
        "borderRadius": "50%",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "width": "clamp(35px, 5svh, 50px)",
        "height": "clamp(35px, 5svh, 50px)",
        "padding": "9px",
        "background": "#fff",
        "margin": "0 10px 0 auto",
        "boxSizing": "border-box",
        "transition": "all 0.3s linear"
      },
      "PORTRAIT": {
        "order": "1",
        "margin": "0",
        "minWidth": "clamp(35px, 5svh, 50px)"
      }
    },
    "chatsBtn": {
      "default": {
        "border": "none",
        "background": "transparent",
        "width": "30px",
        "height": "30px"
      },
      "LANDSCAPE": {
        "marginLeft": "30px"
      }
    },
    "checkBox": {
      "default": {
        "width": "16px",
        "height": "16px",
        "border": "1px solid #000"
      }
    },
    "avatarBox": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "width": "60px",
        "height": "60px"
      }
    }
  },
  "header": {
    "menu": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "zIndex": "25",
        "gap": "30px",
        "fontSize": "18px",
        "fontWeight": "600",
        "lineHeight": "24.55px",
        "textAlign": "left",
        "position": "absolute",
        "top": "calc(100% + 9px)",
        "right": "0",
        "boxShadow": "0px 1px 13.9px 0px #00000014",
        "padding": "32px 25px",
        "borderRadius": "15px",
        "backgroundColor": "#fff",
        "opacity": "0"
      }
    },
    "link": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "flexDirection": "row-reverse",
        "gap": "12px",
        "justifyContent": "flex-end",
        "color": "#000",
        "textDecoration": "none",
        "border": "none"
      }
    }
  },
  "apps": {
    "list": {
      "default": {
        "position": "relative",
        "display": "flex",
        "flexWrap": "wrap",
        "gap": "20px 0",
        "boxSizing": "border-box",
        "justifyContent": "space-between",
        "paddingTop": "clamp(2svh, 30px, 50px)",
        "paddingBottom": "clamp(2svh, 12svh, 50px)",
        "paddingLeft": "clamp(2svw, 5svw, 60px)",
        "paddingRight": "clamp(2svw, 5svw, 60px)"
      }
    },
    "row": {
      "default": {
        "flex": "0 1 24%",
        "boxshadow": "2px 4px 30px 1px rgba(0, 0, 0, 0.09)",
        "background": "#fff",
        "borderRadius": "20px",
        "height": "clamp(100px,28svh, 310px)",
        "display": "flex",
        "flexDirection": "column",
        "cursor": "pointer",
        "position": "relative",
        "boxSizing": "border-box",
        "zIndex": "0"
      },
      "PORTRAIT": {
        "flex": "0 1 100%"
      }
    },
    "column": {
      "default": {
        "flex": "0 1 100%",
        "background": "#fff",
        "display": "flex",
        "justifyContent": "space-between",
        "cursor": "pointer",
        "position": "relative",
        "boxSizing": "border-box",
        "zIndex": "0",
        "borderRadius": "10px"
      }
    },
    "preview": {
      "default": {
        "height": "calc(100% - 40px)",
        "backgroundColor": "#fff",
        "borderRadius": "20px 20px 0 0",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "backgroundSize": "26%",
        "backgroundImage": "url(`https://laboranth.tech/D/R/IMG/logoAlt.svg`)"
      }
    },
    "wrap-row": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "height": "40px",
        "backgroundColor": "#fff",
        "padding": "10px 10px 10px 30px",
        "fontWeight": "400",
        "fontSize": "16px",
        "color": "#000",
        "borderRadius": "0 0 20px 20px"
      }
    },
    "wrap-column": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "height": "40px",
        "width": "100%",
        "padding": "10px 10px 10px 30px",
        "fontWeight": "400",
        "fontSize": "16px",
        "color": "#000"
      }
    },
    "box": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "gap": "20px",
        "paddingRight": "12px"
      }
    },
    "menu": {
      "default": {
        "position": "absolute",
        "top": "calc(100% - 40px)",
        "backgroundColor": "#fff",
        "boxShadow": "0px 1px 13.9px 0px #00000014",
        "right": 0,
        "display": "flex",
        "opacity": 0,
        "flexDirection": "column",
        "padding": "11px 11px 27px 27px",
        "borderRadius": "15px",
        "gap": "10px",
        "zIndex": "26"
      }
    },
    "settings": {
      "default": {
        "background": "transparent",
        "display": "flex",
        "flexDirection": "row-reverse",
        "justifyContent": "flex-end",
        "alignItems": "center",
        "gap": "12px",
        "textTransform": "capitalize",
        "border": "none"
      }
    },
    "more": {
      "default": {
        "width": "25px",
        "marginLeft": "auto"
      }
    }
  },
  "parameters": {
    "popup": {
      "default": {
        "display": "flex",
        "opacity": "1",
        "backgroundColor": "#FFFFFF",
        "borderRadius": "40px",
        "overflow": "hidden",
        "maxWidth": "1080px",
        "width": "100%",
        "minHeight": "clamp(90%, 50%, 600px)",
        "transform": "translateY(-50%) translateX(-50%)",
        "position": "fixed",
        "zIndex": "9999",
        "left": "50%",
        "top": "50%",
        "transition": "all 0.7s linear"
      }
    },
    "wrapper": {
      "default": {
        "position": "fixed",
        "zIndex": "9999",
        "left": "0",
        "right": "0",
        "top": "0",
        "bottom": "0"
      }
    },
    "side": {
      "default": {
        "backgroundColor": "#3C4CA6",
        "color": "#fff",
        "padding": "clamp(15px, 2vw, 24px) 0 clamp(5px, 2vw, 24px) clamp(15px, 2vw, 24px)",
        "minHeight": "100%",
        "display": "flex",
        "flexDirection": "column",
        "position": "relative"
      }
    },
    "box": {
      "default": {
        "boxSizing": "border-box",
        "paddingTop": "clamp(5px, 35px, 60px)",
        "paddingBottom": "clamp(5px, 35px, 60px)",
        "paddingRight": "clamp(5px, 35px, 120px)",
        "paddingLeft": "clamp(5px, 35px, 60px)",
        "width": "100%",
        "display": "flex",
        "flexDirection": "column",
        "gap": "clamp(2svw, 5svw, 32px)"
      },
      "PORTRAIT": {
        "padding": "clamp(1svw, 3svw, 25px)"
      }
    },
    "btn": {
      "default": {
        "display": "flex",
        "width": "100%",
        "color": "#fff",
        "background-color": "transparent",
        "border": "none",
        "padding": "10px",
        "paddingRight": "3svw",
        "borderRadius": "10px 0 0 10px",
        "gap": "15px",
        "flexDirection": "row-reverse",
        "justifyContent": "flex-end",
        "fontSize": "clamp(12px, 2vw,18px)",
        "height": "45px",
        "fontWeight": "600",
        "lineHeight": "24.55px",
        "textAlign": "left",
        "zIndex": "1",
        "position": "relative"
      }
    },
    "white": {
      "default": {
        "width": "100%",
        "background-color": "#fff",
        "borderRadius": "10px 0 0 10px",
        "height": "45px",
        "position": "absolute",
        "top": 0,
        "right": 0,
        "zIndex": "1",
        "transition": "all 0.1s ease"
      }
    },
    "line": {
      "default": {
        "display": "flex",
        "justifyContent": "space-between",
        "fontSize": "18px",
        "fontWeight": "500",
        "textAlign": "left"
      },
      "PORTRAIT": {
        "flexDirection": "column",
        "gap": "10px"
      }
    },
    "confirm": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "gap": "10px"
      }
    },
    "buttons": {
      "default": {
        "display": "flex",
        "gap": "26px"
      },
      "PORTRAIT": {
        "flexDirection": "column",
        "gap": "10px"
      }
    }
  },
  "select": {
    "box": {
      "default": {
        "cursor": "pointer",
        "width": "clamp(120px, 15svw, 160px)",
        "position": "relative"
      }
    },
    "top": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "width": "100%",
        "boxSizing": "border-box",
        "height": "40px",
        "fontSize": "16px",
        "fontWeight": "500",
        "textAlign": "center",
        "padding": "10px 0 10px 20px",
        "backgroundColor": "#F4F4F5",
        "borderRadius": "10px"
      }
    },
    "list": {
      "default": {
        "display": "none",
        "position": "absolute",
        "top": "calc(100% - 10px)",
        "flexDirection": "column",
        "gap": "4px",
        "boxSizing": "border-box",
        "backgroundColor": "#F4F4F5",
        "padding": "10px",
        "borderRadius": "0 0 10px 10px",
        "width": "100%"
      }
    }
  },
  "input": {
    "box": {
      "default": {
        "outline": "none",
        "width": "clamp(120px, 15svw,200px)",
        "height": "40px",
        "textAlign": "center",
        "backgroundColor": "#F4F4F5",
        "borderRadius": "10px",
        "border": "none"
      }
    }
  },
  "popup": {
    "box": {
      "default": {
        "position": "fixed",
        "top": "20%",
        "cursor": "pointer",
        "width": "clamp(120px, 80svw, 1100px)",
        "background": "#E4E4E4",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "zIndex": "99999",
        "left": "50%",
        "transform": "translateX(-50%)",
        "paddingTop": "clamp(2svh, 5svh, 40px)",
        "paddingBottom": "clamp(2svh, 5svh, 40px)",
        "borderRadius": "30px"
      }
    },
    "wrap": {
      "default": {
        "position": "fixed",
        "top": "0",
        "right": 0,
        "left": 0,
        "bottom": 0,
        "zIndex": "99999"
      }
    },
    "content": {
      "default": {
        "width": "clamp(60%, 60%, 80%)",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "height": "90%",
        "gap": "25px"
      }
    },
    "title": {
      "default": {
        "fontSize": "32px",
        "fontWeight": "700",
        "lineHeight": "38.58px",
        "textAlign": "center",
        "color": "#000",
        "marginBottom": "15px"
      }
    },
    "input": {
      "default": {
        "outline": "none",
        "height": "40px",
        "textAlign": "center",
        "backgroundColor": "#fff",
        "borderRadius": "10px",
        "border": "none"
      }
    }
  },
  "alert": {
    "wrap": {
      "default": {
        "max-width": "250px",
        "position": "fixed",
        "top": "120px",
        "right": "0",
        "background": "#6F6E6E",
        "padding": "10px 16px",
        "borderRadius": "10px 0px 0px 10px",
        "zIndex": "9999",
        "color": "#fff",
        "opacity": "0",
        "transition": "all 0.3s linear",
        "transform": "translateX(100%)"
      }
    }
  },
  "plans": {
    "wrap": {
      "default": {
        "display": "flex",
        "boxSizing": "border-box",
        "justifyContent": "space-between",
        "paddingTop": "clamp(2svh, 30px, 50px)",
        "paddingBottom": "clamp(2svh, 12svh, 50px)",
        "paddingLeft": "clamp(2svw, 5svw, 60px)",
        "paddingRight": "clamp(2svw, 5svw, 60px)",
        "gap": "clamp(10px,2vw,50px)"
      },
      "PORTRAIT": {
        "flexDirection": "column"
      }
    },
    "plan": {
      "default": {
        "display": "flex",
        "position": "relative",
        "height": "fit-content",
        "flexDirection": "column",
        "padding": "34px 20px",
        "borderRadius": "45px",
        "background": "#fff",
        "boxShadow": "0 6px 33px 0 rgba(0, 0, 0, 0.11)"
      },
      "LANDSCAPE": {
        "flex": "0 1 21%"
      }
    },
    "angle": {
      "default": {
        "position": "absolute",
        "top": 0,
        "right": 0
      }
    },
    "close": {
      "default": {
        "fontSize": "18px",
        "background": "#FED05E",
        "width": "35px",
        "height": "35px",
        "borderRadius": "50%",
        "border": "none",
        "position": "absolute",
        "bottom": "12px",
        "left": "clamp(2svw, 5svw, 60px)",
        "fontWeight": 700
      }
    },
    "title": {
      "default": {
        "fontSize": "24px",
        "marginLeft": "12px",
        "fontWeight": 700,
        "marginBottom": "15px"
      }
    },
    "description": {
      "default": {
        "fontSize": "14px",
        "fontStyle": "italic",
        "marginLeft": "12px",
        "fontWeight": 600,
        "marginBottom": "20px"
      }
    },
    "box": {
      "default": {
        "display": "flex",
        "alignItems": "end",
        "marginLeft": "12px",
        "fontSize": "15px",
        "marginBottom": "20px",
        "gap": "4px"
      }
    },
    "price": {
      "default": {
        "fontSize": "40px",
        "fontWeight": 800
      }
    },
    "point": {
      "default": {
        "display": "flex",
        "alignItems": "flex-start",
        "gap": "7px",
        "lineHeight": "1",
        "fontSize": "14px",
        "color": "#000"
      }
    },
    "points": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "gap": "20px",
        "padding": "20px",
        "borderRadius": "25px",
        "marginBottom": "20px",
        "background": "#f0f0f0"
      }
    },
    "heading": {
      "default": {
        "fontWeight": 700,
        "fontSize": "clamp(20px,2vw,40px)",
        "marginBottom": "20px",
        "marginLeft": "12px",
        "color": "#000"
      }
    },
    "bold": {
      "default": {
        "fontWeight": 700
      }
    },
    "top": {
      "default": {
        "position": "relative",
        "textAlign": "center",
        "marginTop": "clamp(35px,2vh,70px)"
      }
    },
    "text": {
      "default": {
        "fontWeight": 600,
        "fontStyle": "italic",
        "fontSize": "clamp(14px,2vw,16px)",
        "textAlign": "center",
        "color": "#000",
        "maxWidth": "clamp(90%,50vw,800px)",
        "margin": "14px auto 0 auto"
      }
    },
    "btn": {
      "default": {
        "fontWeight": 700,
        "fontSize": "18px",
        "textAlign": "center",
        "color": "#fff",
        "padding": "12px 35px",
        "borderRadius": "15px",
        "margin": "0 auto",
        "border": "none",
        "cursor": "pointer"
      }
    },
    "switcher": {
      "default": {
        "display": "flex",
        "fontSize": "18px",
        "borderRadius": "80px",
        "maxWidth": "clamp(200px,2vw,267px)",
        "backgroundColor": "#fff",
        "padding": "7px",
        "margin": "45px auto 0 auto"
      }
    },
    "switcherBtn": {
      "default": {
        "border": "none",
        "flex": "0 1 50%",
        "cursor": "pointer",
        "fontWeight": "500",
        "fontSize": "15px",
        "borderRadius": "80px",
        "backgroundColor": "transparent",
        "color": "#000",
        "padding": "clamp(8px,2vw,10px)"
      }
    }
  },
  "chat": {
    "wrap": {
      "default": {
        "position": "fixed",
        "right": 0,
        "zIndex": 99999,
        "backgroundColor": "#464C59",
        "padding": "5svh 3svw 3svh 3svw",
        "width": "clamp(42svw,85svw,810px)",
        "height": "75svh",
        "display": "flex",
        "top": "11svh",
        "borderRadius": "30px 0px 0px 30px",
        "gap": "3svw"
      }
    },
    "close": {
      "default": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "width": "40px",
        "height": "40px",
        "borderRadius": "30px 30px 30px 0px",
        "background": "#FED05E",
        "border": "none"
      }
    },
    "body": {
      "default": {
        "flex": "0 1 100%",
        "display": "flex",
        "flexDirection": "column",
        "gap": "2svw"
      }
    },
    "users": {
      "default": {
        "flex": "0 1 3.125svw",
        "display": "flex",
        "gap": "10px",
        "flexDirection": "column"
      }
    },
    "add": {
      "default": {
        "borderRadius": "50%",
        "background": "#FED05E",
        "width": "100%",
        "aspectRatio": 1,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "border": "none"
      }
    },
    "room": {
      "default": {
        "background": "#F7F7F7",
        "flex": "0 1 100%",
        "padding": "2.3svh 1svw",
        "borderRadius": "20px",
        "overflowY": "scroll",
        "overflowX": "hidden"
      }
    },
    "top": {
      "default": {
        "textAlign": "center",
        "fontSize": "12px",
        "fontWeight": 500,
        "color": "#464C59",
        "paddingBottom": "2svh",
        "borderBottom": "1px solid #D0D0D0"
      }
    },
    "bottom": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "width": "100%",
        "gap": "1svw"
      }
    },
    "input": {
      "default": {
        "border": "none",
        "flex": "0 1 93%",
        "outline": "none",
        "width": "93%",
        "height": "calmp(15px,6svh,40px)",
        "borderRadius": "60px",
        "padding": "clamp(1svh,2svh,5px) 15px",
        "background": "#fff",
        "boxSizing": "border-box"
      }
    },
    "send": {
      "default": {
        "border": "none",
        "with": "clamp(15px, 3svh,25px)",
        "height": "clamp(15px, 3svh,25px)",
        "background": "transparent"
      }
    },
    "new": {
      "default": {
        "background": "#fff",
        "padding": "3svh",
        "borderRadius": "30px"
      }
    },
    "heading": {
      "default": {
        "textAlign": "center",
        "fontSize": "clamp(10px,2svw,20px)",
        "fontWeight": 500,
        "marginBottom": "4svh"
      }
    },
    "box": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "gap": "10px",
        "boxSizing": "border-box"
      }
    },
    "contact": {
      "default": {
        "display": "flex",
        "position": "relative",
        "alignItems": "center",
        "gap": "10px",
        "boxSizing": "border-box",
        "flexDirection": "column",
        "cursor": "pointer"
      }
    },
    "label": {
      "default": {
        "position": "absolute",
        "width": "fit-content",
        "minWidth": "16px",
        "height": "16px",
        "top": "4px",
        "left": "4px",
        "background": "#FC3F1D",
        "borderRadius": "50%",
        "color": "#fff",
        "fontWeight": "500",
        "fontSize": "14px",
        "lineHeight": "16px",
        "textAlign": "center"
      }
    },
    "email": {
      "default": {
        "fontSize": "12px",
        "fontWeight": 500,
        "color": "#fff",
        "maxWidth": "65px",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
      }
    },
    "boxInput": {
      "default": {
        "border": "none",
        "outline": "none",
        "width": "100%",
        "height": "clamp(15px,5svh,50px)",
        "borderRadius": "40px",
        "padding": "clamp(1svh,1svh,5px) 15px",
        "background": "#E1E1E1",
        "boxSizing": "border-box"
      }
    },
    "boxBtn": {
      "default": {
        "border": "none",
        "height": "clamp(15px,5svh,50px)",
        "boxSizing": "border-box",
        "width": "19%",
        "fontWeight": 500,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "borderRadius": "40px",
        "background": "#FED05E"
      }
    },
    "messages": {
      "default": {
        "display": "flex",
        "margin": "10px 0",
        "gap": "4px",
        "flexDirection": "column"
      }
    },
    "myMessage": {
      "default": {
        "color": "#000",
        "padding": "11px 15px",
        "background": "#FED05E",
        "marginRight": "auto",
        "borderRadius": "8px 8px 8px 0",
        "maxWidth": "90%",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
      }
    },
    "message": {
      "default": {
        "color": "#000",
        "padding": "11px 15px",
        "background": "#EBEEFF",
        "marginLeft": "auto",
        "borderRadius": "8px 8px 0 8px",
        "maxWidth": "90%",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
      }
    }
  },
  "steps": {
    "wrap": {
      "default": {
        "width": "clamp(56%, 90%, 1080px)",
        "minHeight": "56%",
        "background": "#fff",
        "borderRadius": "40px",
        "position": "fixed",
        "left": "50%",
        "transform": "translateX(-50%)",
        "top": "15%",
        "zIndex": "99999"
      }
    },
    "closeWrapper": {
      "default": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "background": "ffff",
        "zIndex": 9999
      }
    },
    "top": {
      "default": {
        "background": "#3C4CA6",
        "color": "#fff",
        "textAlign": "center",
        "padding": "33px",
        "borderRadius": "40px 40px 0px 0px ",
        "fontSize": "24px",
        "fontWeight": "700"
      }
    },
    "box": {
      "default": {
        "width": "clamp(56%, 90%, 532px)",
        "display": "flex",
        "margin": "48px auto 0 auto",
        "flexDirection": "column",
        "paddingBottom": "80px"
      }
    },
    "items": {
      "default": {
        "display": "flex",
        "justifyContent": "space-between"
      }
    },
    "item": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "whiteSpace": "nowrap",
        "fontSize": "16px",
        "gap": "10px"
      }
    },
    "mark": {
      "default": {
        "width": "20px",
        "height": "20px",
        "borderRadius": "50%",
        "boxSizing": "border-box",
        "border": "2px solid #FED05E"
      }
    },
    "line": {
      "default": {
        "width": "100%",
        "margin": "10px",
        "borderTop": "1px dashed #FED05E"
      }
    },
    "form": {
      "default": {
        "marginTop": "60px",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "flexWrap": "wrap",
        "gap": "20px"
      }
    },
    "input": {
      "default": {
        "width": "calc(50% - 10px)",
        "padding": "10px 32px",
        "borderRadius": "40px",
        "background": "#F4F4F5",
        "border": "none",
        "height": "50px",
        "boxSizing": "border-box",
        "outline": "none"
      }
    },
    "check": {
      "default": {
        "width": "100%",
        "display": "flex",
        "alignItems": "center",
        "gap": "10px",
        "color": "#5A5A5A",
        "fontSize": "14px",
        "fontWeight": "500"
      }
    },
    "checkbox": {
      "default": {
        "width": "16px",
        "height": "16px",
        "border": "1px solid #8D8D8D",
        "cursor": "pointer"
      }
    },
    "btn": {
      "default": {
        "width": "140px",
        "height": "40px",
        "color": "#000000",
        "background": "#FED05E",
        "borderRadius": "10px",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "fontWeight": "700",
        "border": "none"
      }
    },
    "heading": {
      "default": {
        "fontSize": "14px",
        "color": "#5A5A5A",
        "textAlign": "center"
      }
    }
  },
  "buttons": {
    "yellowBtn": {
      "default": {
        "borderRadius": "13px",
        "paddingTop": "clamp(2svh, 10svh, 11px)",
        "paddingBottom": "clamp(2svh, 10svh, 11px)",
        "paddingLeft": "clamp(5svw, 2vw, 50px)",
        "paddingRight": "clamp(5svw, 2vw, 50px)",
        "width": "fit-content",
        "background": "#fed05e",
        "fontWeight": "500",
        "cursor": "pointer",
        "fontSize": "clamp(14px, 2vw, 20px)",
        "textAlign": "center",
        "marginTop": "clamp(1svh, 10svh, 40px)",
        "border": "none"
      },
      "LANDSCAPE": {
        "paddingLeft": "50px",
        "paddingRight": "50px"
      }
    },
    "action": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "borderRadius": "15px",
        "paddingLeft": "clamp(2svw, 5svw, 20px)",
        "paddingRight": "clamp(2svw, 5svw, 20px)",
        "height": "clamp(30px, 10vw, 50px)",
        "background": "#feda31",
        "fontWeight": "700",
        "font-size": "clamp(10px, 14px, 18px)",
        "color": "#000",
        "cursor": "pointer",
        "border": "none",
        "boxSizing": "border-box",
        "textAlign": "center"
      }
    },
    "grey": {
      "default": {
        "borderRadius": "15px",
        "paddingBottom": "clamp(2svh, 5svh, 12px)",
        "paddingTop": "clamp(2svh, 5svh, 12px)",
        "paddingLeft": "clamp(2svw, 5svw, 20px)",
        "paddingRight": "clamp(2svw, 5svw, 20px)",
        "background": "#DFDFDF",
        "fontWeight": "700",
        "font-size": "clamp(10px, 14px, 18px)",
        "color": "#000",
        "border": "none",
        "boxSizing": "border-box"
      }
    }
  },
  "design": {
    'templateList': {
      "default": {
        width: '0',
        transition: 'all 0.3s linear',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        top: 0,
        bottom: 0,
        width: '300px',
        right: '-320px',
        zIndex: 9,
        opacity: 1,
        padding: '10px',
        background: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 13.9px 0px'
      }
    },
    "body": {
      "default": {
        "order": 2,
        "position": "relative",
        "overflow": "hidden",
        "display": "flex",
        "width": "100svw",
        "height": "100svh"
      }
    },
    "side": {
      "default": {
        "order": 1,
        "transition": "all 0.1s linear",
        "position": "relative",
        "boxSizing": "border-box",
        "margin": "0",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "backgroundColor": "#fff",
        "height": "100vh",
        "padding": "60px 0 20px 20px",
        "zIndex": 9999,
        "boxShadow": "0 4px 19px - 4px rgba(0, 0, 0, 0.18)",
        "borderRadius": "0 20px 0 0"
      }
    },
    "elementsBox": {
      "default": {
        "overflowY": "scroll",
        "margin": "40px 0 0 0",
        "padding": "0 25px 0 0"
      }
    },
    "hideSide": {
      "default": {
        "margin": "0px 0px 0px -100px"
      }
    },
    "showMenu": {
      "default": {
        "border": "4px solid #f2f3f7",
        "borderRadius": "30px 0 30px 30px",
        "boxSizing": "border-box",
        "width": "40px",
        "height": "40px",
        "background": "#fed05e",
        "position": "absolute",
        "right": "0px",
        "top": "-4px",
        "transform": "none",
        "cursor": "pointer",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      }
    },
    "hideMenu": {
      "default": {
        "transform": "translateX(40px) rotate(-180deg)"
      }
    },
    "templates": {
      "default": {
        "boxSizing": "border-box",
        "display": "flex",
        "flexDirection": "column",
        "gap": "15px",
        "justifyContent": "center",
        "marginTop": "13px"
      }
    },
    "templatesHeading": {
      "default": {
        "fontWeight": 700,
        "boxSizing": "border-box",
        "fontSize": "14px",
        "color": "#000"
      }
    },
    "template": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "boxSizing": "border-box",
        "cursor": "pointer",
        "justifyContent": "center",
        "alignItems": "center",
        "fontWeight": 500,
        "fontSize": "10px",
        "lineHeight": "110%",
        "textAlign": "center",
        "color": "#000",
        "position": "relative",
        "marginTop": "6px"
      }
    },
    "templateIcon": {
      "default": {
        "width": "55px",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "boxSizing": "border-box",
        "height": "55px",
        "borderRadius": "19px",
        "background": "#f2f3f7"
      }
    },
    "top": {
      "default": {
        "transition": "all 0.1s linear",
        "padding": "12px 40px 18px 40px",
        "display": "flex",
        "alignItems": "center",
        "boxSizing": "border-box",
        "justifyContent": "space-between",
        "backgroundColor": "#464C59",
        "top": 0,
        "left": "50%",
        "transform": "translateX(-50%)",
        "width": "100%",
        "borderRadius": "0 0 30px 30px",
        "height": "70px",
        "zIndex": 9999,
        maxWidth: 'clamp(56%, 100%, 1080px)',
        position: 'fixed',
        paddingLeft: 'clamp(10px, 2svw, 40px)',
        paddingRight: 'clamp(10px, 2svw, 40px)',
        gap: '0',
        cursor: 'pointer'
      }
    },
    "hideTop": {
      "default": {
        "transform": "translateY(-98%) translateX(-50%)"
      }
    },
    "btn": {
      "default": {
        "backgroundColor": "transparent",
        "boxSizing": "border-box",
        "border": "none"
      }
    },
    "screenBtn": {
      "default": {
        "backgroundColor": "transparent",
        "border": "none",
        "borderRadius": "8px",
        "width": "42px",
        "boxSizing": "border-box",
        "height": "42px",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      }
    },
    "blind": {
      "default": {
        "position": "absolute",
        "bottom": "-3px",
        "backgroundColor": "#FED05E",
        "width": "96px",
        "cursor": "pointer",
        "boxSizing": "border-box",
        "height": "6px",
        "left": "50%",
        "transform": "translateX(-50%)",
        "borderRadius": "50px",
        "border": "none"
      }
    },
    "pixelView": {
      "default": {
        "borderRadius": "8px",
        "height": "33px",
        "boxSizing": "border-box",
        "background": "#f3f3f3",
        "fontWeight": "400",
        "fontSize": "13px",
        "color": "#000",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "padding": "8px 12px"
      }
    },
    "setPage": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "gap": "8px",
        "fontWeight": 600,
        "position": "relative",
        "fontSize": "18px",
        "color": "#fff",
        "background": "transparent",
        "border": "none"
      }
    },
    "pageLink": {
      "default": {
        "color": "#fff",
        "textDecoration": "none"
      }
    },
    "toolbar": {
      "default": {
        "position": "fixed",
        "left": "50%",
        "bottom": "30px",
        "zIndex": "9999",
        "background": "#fff",
        "borderRadius": "67px",
        "display": "flex",
        "boxSizing": "border-box",
        "alignItems": "center",
        "justifyContent": "space-between",
        "padding": "18px 40px",
        "height": "81px",
        "boxShadow": "-1px 1px 13px 0 rgba(0,0,0,0.11)",
        "transform": "translateX(-50%)",
        maxWidth: 'clamp(320px, 100%, 660px)',
        gap: 'clamp(8px, 2vw, 30px)',
        paddingTop: 'clamp(10px, 2vw, 18px)',
        paddingBottom: 'clamp(10px, 2vw, 18px)',
        paddingLeft: 'clamp(25px, 2vw, 40px)',
        paddingRight: 'clamp(25px, 2vw, 40px)'
      }
    },
    'prewiewTool': {
      'default': {
        position: 'absolute',
        top: '-30px',
        opacity: '0',
        pointerEvents: 'none',
        left: '50%',
        transform: 'translatex(-50%)',
        transition: 'all 0.3s linear'
      }
    },
    "hideToolbar": {
      "default": {
        "bottom": "-78px"
      }
    },
    "toolbarItem": {
      "default": {
        "width": "45px",
        "padding": "0",
        "cursor": "pointer",
        "border": "none",
        "background": "transparent",
        "height": "45px",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "borderRadius": "8px"
      }
    },
    "HoverBox": {
      "default": {
        "position": "absolute",
        "zIndex": "999",
        "pointerEvents": "none",
        "boxShadow": "0px 0px 0px 2px rgba(36,99,235,1) inset"
      }
    },
    "hoverMenuBtn": {
      "default": {
        "borderRadius": "50px",
        "width": "35px",
        "height": "17px",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "background": "#464c59",
        "position": "absolute",
        "zIndex": "99999",
        "border": "none",
        "cursor": "pointer"
      }
    },
    "page": {
      "default": {
        "width": "100%",
        "maxWidth": "100svw",
        "position": "relative",
        "minHeight": "100vh",
        "background": "#EFEFEF",
        "margin": "auto",
        "overflowY": "scroll",
        "boxSizing": "border-box"
      }
    },
    "pageWrap": {
      "default": {
        "maxWidth": "100svw",
        "order": 2,
        "minHeight": "100svh",
        "width": "100%",
        "paddingBottom": "50svh",
        "boxSizing": "border-box"
      }
    },
    "blindTools": {
      "default": {
        "position": "absolute",
        "background": "#FED05E",
        "width": "17.4%",
        "height": "4px",
        "cursor": "pointer",
        "top": "-2px",
        "left": "50%",
        "transform": "translateX(-50%)",
        "borderRadius": "50px",
        "border": "none"
      }
    },
    "blockMenu": {
      "default": {
        "display": "flex",
        "background": "#fff",
        "maxWidth": "160px",
        "gap": "20px",
        "padding": "18px 25px",
        "boxShadow": "0px 1px 13.9px 0px #00000014",
        "borderRadius": "15px",
        "flexDirection": "column"
      }
    },
    "blockMenuItem": {
      "default": {
        "display": "flex",
        "gap": "12px",
        "cursor": "pointer"
      }
    },
    "codeBox": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "position": "fixed",
        "transition": "all 0.1s linear",
        "top": "0",
        "right": 0,
        "width": "clamp(320px,49svw, 950px)",
        "backgroundColor": "#464C59",
        "borderRadius": "30px 0 0 0",
        "padding": "80px 20px 0 20px",
        "minHeight": "calc(100vh - 100px)",
        "height": "100%",
        "transform": "translateX(100%)",
        "zIndex": 99991
      }
    },
    "codeBoxActive": {
      "default": {
        "transform": "none",
        "top": "0"
      }
    },
    "codeBoxShow": {
      "default": {
        "position": "absolute",
        "top": 0,
        "left": "-63px",
        "border": "none",
        "cursor": "pointer",
        "width": "62px",
        "height": "62px",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "borderRadius": "30px 0px 30px 30px",
        "opacity": "0px",
        "backgroundColor": "#FED05E"
      }
    },
    "codeBoxShowActive": {
      "default": {
        "left": "-1px"
      }
    },
    "codeWrapper": {
      "default": {
        "width": "87%",
        "backgroundColor": "#fff",
        "fontSize": "12px",
        "overflow": "hidden",
        "overflowY": "scroll",
        "fontWeight": 500,
        "lineHeight": "22px",
        "borderRadius": "30px 30px 0 0",
        "flex": "0 1 100%",
        "padding": "30px 35px"
      }
    },
    "blockMenuWrap": {
      "default": {
        "position": "absolute",
        "padding": "30px",
        "zIndex": 9999
      }
    },
    "elementMenuBody": {
      "default": {
        "backgroundColor": "#fff",
        "padding": "15px",
        "boxSizing": "border-box",
        "maxWidth": "300px",
        "width": "100%",
        "display": "flex",
        "flexDirection": "column",
        "gap": "10px"
      }
    },
    "StyleButtons": {
      "default": {
        "width": "100%",
        "display": "flex",
        "borderBottom": "1px solid #EFEFEF"
      }
    },
    "StyleBtn": {
      "default": {
        "borderRadius": "20px 20px 0 0",
        "height": "40px",
        "fontWeight": 500,
        "fontSize": "16px",
        "lineHeight": "137%",
        "textAlign": "center",
        "cursor": "pointer",
        "color": "#000",
        "background": "#e5e5e5",
        "textTransform": "capitalize",
        "border": "none",
        "flex": "0 1 50%"
      }
    },
    "stylesBtn": {
      "default": {
        "background": "transparent",
        "border": "none"
      }
    },
    "icon": {
      "default": {
        "maxWidth": "100%"
      }
    },
    "inputWrap": {
      "default": {
        "width": "100%",
        "display": "flex",
        "alignItems": "center",
        "gap": "9px",
        "borderRadius": "5px",
        "background": "#f4f4f5",
        "padding": "7px",
        "height": "35px",
        "boxSizing": "border-box"
      }
    },
    "input": {
      "default": {
        "width": "100%",
        "border": "none",
        "outline": "none",
        "backgroundColor": "transparent"
      }
    },
    "dropList": {
      "default": {
        "width": "100%",
        "position": "relative"
      }
    },
    "dropSel": {
      "default": {
        "width": "100%",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "borderRadius": "5px",
        "fontSize": "16px",
        "cursor": "pointer",
        "background": "#F4F4F5",
        "boxSizing": "border-box",
        "textTransform": "lowercase",
        "fontWeight": 500,
        "height": "35px",
        "padding": "7px"
      }
    },
    "dropListing": {
      "default": {
        "width": "100%",
        "position": "absolute",
        "zIndex": 1,
        "top": "calc(100% - 7px)",
        "left": 0,
        "height": 0,
        "background": "#F4F4F5",
        "cursor": "pointer",
        "overflow": "hidden",
        "display": "flex",
        "gap": "3px",
        "boxSizing": "border-box",
        "flexDirection": "column",
        "fontSize": "14px",
        "borderRadius": "0 0 5px 5px"
      }
    },
    "grid-box": {
      "default": {
        "display": "grid",
        "gap": "4px",
        "gridTemplateColumns": "repeat(4, 1fr)"
      }
    },
    "pointer": {
      "default": {
        "background": "#464C59",
        "width": "24px",
        "position": "absolute",
        "height": "7px",
        "borderRadius": "20px",
        "cursor": "grab"
      }
    },
    "area": {
      "default": {
        "position": "absolute",
        "border": "2px solid rgba(36, 99, 235, 1)",
        "zIndex": 999
      }
    },
    "noneFile": {
      "default": {
        "position": "absolute",
        "top": "-999999999999999999px",
        "left": "-999999999999999999px",
        "width": 0,
        "height": 0
      }
    },
    "pagesList": {
      "default": {
        "position": "absolute",
        "left": 0,
        "right": 0,
        "top": "100%",
        "background": "#464C59",
        "borderRadius": "0 0 10px 10px",
        "padding": "5px",
        "display": "flex",
        "flexDirection": "column",
        "gap": "5px",
        "zIndex": 99
      }
    },
    "styleBox": {
      "default": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center"
      }
    },
    "colorInput": {
      "default": {
        "border": "none",
        "borderRadius": "4px",
        "marginLeft": "auto",
        "width": "24px !important",
        "minWidth": "24px !important",
        "height": "24px !important",
        "minHeight": "24px !important",
        "backgroundColor": "transparent"
      }
    },
    "styleGrid": {
      "default": {
        "display": "grid",
        "gridTemplateColumns": "repeat(2,1fr)",
        "gap": "20px"
      }
    },
    "hover": {
      "default": {
        "position": "absolute",
        "background": "linear-gradient(180deg, rgba(36,99,235,1) 0%, rgba(36,99,235,0) 100%)"
      }
    },
    "styleWrap": {
      'default': {
        paddingTop: '75px',
        overflowY: 'scroll',
        height: '100%',
        boxSizing: 'border-box'
      }
    },
    "styleWrapper": {
      "default": {
        position: 'fixed',
        height: '100%',
        right: 0,
        "maxWidth": "300px",
        "order": 3,
        "width": "100%",
        "padding": "0 0 40px 0",
        "boxSizing": "border-box",
        "zIndex": 9999,
        "background": "#fff",
        "boxShadow": "0px 1px 13.9px 0px #00000014"
      }
    },
    "hideStyles": {
      "default": {
        "position": "absolute",
        "left": "-10px",
        "top": "50%",
        "transform": "translateY(-50%) rotate(180deg)",
        "width": "20px",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "padding": "4px",
        "background": "#FED05E",
        "borderRadius": "8px",
        "cursor": "pointer",
        "border": "2px solid #F2F3F7"
      }
    },
    "toolbarItemWrap": {
      "default": {
        "position": "relative"
      }
    },
    "toolArrow": {
      "default": {
        "height": "12px",
        "width": "12px",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "position": "absolute",
        "top": "50%",
        "transform": "translateY(-50%)",
        "cursor": "pointer",
        "padding": 0,
        "border": "none",
        "background": "transparent",
        "right": "-8px"
      }
    },
    "toolbarItemList": {
      "default": {
        "display": "none",
        "flexDirection": "column",
        "position": "absolute",
        "bottom": "65px",
        "left": 0,
        "cursor": "pointer",
        "padding": "5px",
        "borderRadius": "10px",
        "background": "#F2F3F7"
      }
    },
    "fileBox": {
      "default": {
        "width": "100%",
        "aspectRatio": "1.7",
        "position": "relative",
        "boxShadow": "0px 0px 50px 12px rgba(0,0,0,0.1) inset"
      }
    },
    "fileBoxInput": {
      "default": {
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "cursor": "pointer",
        "left": 0,
        "top": 0,
        "zIndex": 2,
        "opacity": 0
      }
    }
  },
  "appMenu": {
    "addColumn": {
      "default": {
        "height": "clamp(30px, 10vw, 50px)",
        "width": "clamp(30px, 10vw, 50px)",
        "background": "#FED05E",
        "border": "none",
        "top": 0,
        "left": "calc(clamp(30px, 10vw, 50px) / 2 * (-1))",
        "borderRadius": "50%",
        "position": "absolute",
        "cursor": "pointer"
      }
    },
    "deleteBtn": {
      "default": {
        "background": "transparent",
        "border": "none",
        "cursor": "pointer"
      }
    },
    "columns": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "gap": "10px",
        "width": "100%"
      }
    },
    "columnBox": {
      "default": {
        "display": "flex",
        "background": "#F4F4F5",
        "borderRadius": "10px",
        "flex": "0 1 calc(100% - 7.5px)",
        "cursor": "pointer",
        "padding": "15px",
        "justifyContent": "center",
        "alignItems": "center"
      }
    },
    "columnHead": {
      "default": {
        "display": "flex",
        "flex": "0 1 calc(100% - 7.5px)",
        "padding": "5px",
        "justifyContent": "center",
        "alignItems": "center",
        "fontWeight": 700,
        "color": "#FFF"
      }
    },
    "column": {
      "default": {
        "display": "flex",
        "gap": "10px",
        "width": "100%"
      }
    },
    "columnSetting": {
      "default": {
        "marginTop": "auto",
        "display": "flex",
        "gap": "20px",
        "width": "100%"
      }
    },
    "link": {
      "default": {
        "color": "inherit",
        "textDecoration": "none"
      }
    },
    "wrap": {
      "default": {
        "position": "fixed",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "zIndex": 99999999
      }
    },
    "menu": {
      "default": {
        "position": "fixed",
        "top": "50%",
        "left": "50%",
        "transform": "translateY(-50%) translateX(-50%)",
        "width": "100%",
        "maxWidth": "clamp(69%, 90%, 1320px)",
        "maxHeight": "clamp(69%, 90%, 820px)",
        "height": "100%",
        "display": "flex",
        "boxShadow": "0px 4px 18.9px -4px #0000002E",
        "zIndex": 99999999,
        "borderRadius": "50px"
      }
    },
    "side": {
      "default": {
        "background": "#3C4CA6",
        "borderRadius": "50px 0 0 50px",
        "width": "100%",
        "maxWidth": "clamp(9%, 10%, 110px)",
        "minHeight": "100%",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-evenly",
        "padding": "30px 0 30px 18px",
        "boxSizing": "border-box"
      }
    },
    "sideBtn": {
      "default": {
        "background": "transparent",
        "borderRadius": "15px 0 0 15px",
        "padding": "15px 30px 15px 15px",
        "width": "100%",
        "boxSizing": "border-box",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "gap": "10px",
        "color": "#fff",
        "fontSize": "14px",
        "cursor": "pointer",
        "fontWeight": 500,
        "textAlign": "center",
        "border": "none"
      }
    },
    "box": {
      "default": {
        "background": "#fff",
        "borderRadius": " 0 50px 50px 0",
        "width": "100%",
        "boxSizing": "border-box",
        "display": "flex",
        "flexDirection": "column",
        "minHeight": "100%"
      }
    },
    "wrapper": {
      "default": {
        "padding": "45px 50px",
        "boxSizing": "border-box",
        "display": "flex",
        "maxHeight": "100%",
        "height": "100%",
        "width": "100%",
        "flexDirection": "column",
        "gap": "20px"
      }
    },
    "heading": {
      "default": {
        "fontSize": "22px",
        "fontWeight": 700,
        "margin": "0",
        "color": "#000"
      }
    },
    "textBox": {
      "default": {
        "borderRadius": "25px",
        "background": "#F7F7F7",
        "boxSizing": "border-box",
        "width": "100%",
        "flex": "0 1 100%",
        "display": "flex",
        "flexDirection": "column",
        "padding": "25px",
        "maxHeight": "calc(100% - 100px)"
      }
    },
    "textArea": {
      "default": {
        "width": "100%",
        "maxHeight": "550px",
        "outline": "none",
        "overflowY": "scroll"
      }
    },
    "drop": {
      "default": {
        "position": "relative",
        "cursor": "pointer",
        "zIndex": 10
      }
    },
    "selected": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "padding": "10px",
        "height": "clamp(30px, 10vw, 50px)",
        "background": "#F4F4F5",
        "borderRadius": "10px",
        "boxSizing": "border-box"
      }
    },
    "list": {
      "default": {
        "position": "absolute",
        "top": "40px",
        "left": 0,
        "right": 0,
        "display": "none",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "maxHeight": "100px",
        "overflowY": "scroll",
        "gap": "5px",
        "padding": "10px",
        "background": "#F4F4F5",
        "borderRadius": "0 0 10px 10px",
        "boxSizing": "border-box"
      }
    },
    "row": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "maxWidth": "700px",
        "justifyContent": "space-between"
      }
    },
    "fold": {
      "default": {
        "display": "flex",
        "height": "100%",
        "boxSizing": "border-box",
        "width": "100%",
        "maxWidth": "255px",
        "background": "#ECF0F9",
        "flexDirection": "column",
        "padding": "30px 0 25px 30px"
      }
    },
    "media": {
      "default": {
        "display": "flex",
        "boxSizing": "border-box",
        "height": "100%",
        "width": "100%"
      }
    },
    "folder": {
      "default": {
        "width": "100%",
        "boxSizing": "border-box",
        "display": "flex",
        "alignItems": "center",
        "cursor": "pointer",
        "gap": "12px",
        "fontWeight": 500,
        "padding": "15px",
        "borderRadius": "10px 0 0 10px",
        "color": "#000"
      }
    },
    "bottom": {
      "default": {
        "width": "100%",
        "boxSizing": "border-box",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "cursor": "pointer",
        "padding": "0 30px 0 0",
        "gap": "12px",
        "marginTop": "auto"
      }
    },
    "borderBtn": {
      "default": {
        "width": "100%",
        "boxSizing": "border-box",
        "display": "flex",
        "alignItems": "center",
        "cursor": "pointer",
        "gap": "12px",
        "color": "#575757",
        "padding": "13px",
        "border": "1.55px dashed #000",
        "borderRadius": "8px"
      }
    },
    "Input": {
      "default": {
        "width": "100%",
        "background": "#F4F4F5",
        "boxSizing": "border-box",
        "cursor": "pointer",
        "height": "clamp(30px, 10vw, 50px)",
        "padding": "5px 20px",
        "outline": "none",
        "border": "none",
        "textAlign": "center",
        "borderRadius": "12px"
      }
    },
    "deploy": {
      "default": {
        "width": "100%",
        "display": "flex",
        "gap": "40px"
      }
    },
    "left": {
      "default": {
        "width": "100%",
        "display": "flex",
        "flexDirection": "column",
        "gap": "20px",
        "maxWidth": "260px"
      }
    },
    "leftBox": {
      "default": {
        "width": "100%",
        "display": "flex",
        "flexDirection": "column",
        "gap": "10px"
      }
    },
    "right": {
      "default": {
        "width": "100%"
      }
    },
    "execute": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "gap": "30px"
      }
    },
    "DBList": {
      "default": {
        "width": "100%",
        "display": "flex",
        "flexDirection": "column",
        "gap": "10px",
        "maxWidth": "770px"
      }
    },
    "db": {
      "default": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        "fontWeight": 500,
        "lineHeight": "34.81px",
        "padding": " 7px 20px",
        "background": "#F7F7F7",
        "color": "#000",
        "borderRadius": "12px"
      }
    },
    "setWrap": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "gap": "10px",
        "maxHeight": "100%",
        "flex": "0 1 100%"
      }
    },
    "scrollList": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "flex": "0 1 auto",
        "maxHeight": "calc(100% - 170px)",
        "gap": "10px",
        "overflowY": "scroll"
      }
    },
    "files": {
      "default": {
        "display": "flex",
        "flexWrap": "wrap",
        "gap": "20px"
      }
    },
    "fileImg": {
      "default": {
        "display": "flex",
        "flexDirection": "column",
        "maxWidth": "100px",
        "overflow": "hidden",
        "flexWrap": "wrap",
        "gap": "5px"
      }
    },
    "boxImg": {
      "default": {
        "maxWidth": "100px",
        "aspectRatio": 1,
        "background": "#FED05E"
      }
    },
    "more": {
      "default": {
        "position": "relative",
        "background": "transparent",
        "border": "none",
        "height": "29px",
        "padding": 0,
        "cursor": "pointer"
      }
    },
    "moreList": {
      "default": {
        "position": "absolute",
        "background": "#fff",
        "borderRadius": "10px",
        "display": "flex",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "gap": "10px",
        "padding": "10px",
        "right": 0,
        "zIndex": 99,
        "top": "25px"
      }
    },
    "collaborators": {
      "default": {
        "flex": "0 1 50%",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "gap": "30px"
      }
    },
    "checkbox": {
      "default": {
        "width": "16px",
        "height": "16px",
        "border": "1px solid #8D8D8D",
        "cursor": "pointer"
      }
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