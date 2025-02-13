

const styles_d = {
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
      "Portrait": {
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
      "Portrait": {
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
      "Portrait": {
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
      "Portrait": {
        "order": "98",
        "width": "100%"
      },
      "Landscape": {
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
      "Portrait": {
        "justifyContent": "space-between",
        "flexWrap": "wrap",
        "gap": "20px 8px"
      }
    },
    "headerWrap": {
      "default": {
        "display": "none"
      },
      "Portrait": {
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
      "Portrait": {
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
      "Landscape": {
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
      "Landscape": {
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
      "Landscape": {
        "padding": "5px",
        "borderRadius": "50px",
        "marginRight": "5svw",
        "width": "110px"
      },
      "Portrait": {
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
      "Portrait": {
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
      "Landscape": {
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
      "Portrait": {
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
      "Portrait": {
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
      "Portrait": {
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
      "Portrait": {
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
        "zIndex": "99",
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
        "zIndex": "99"
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
      "Portrait": {
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
      "Landscape": {
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
      "Landscape": {
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
        "gap": "16px",
        "padding": "12px 40px 18px 40px",
        "display": "flex",
        "alignItems": "center",
        "boxSizing": "border-box",
        "justifyContent": "space-between",
        "backgroundColor": "#464C59",
        "position": "fixed",
        "top": 0,
        "left": "50%",
        "transform": "translateX(-50%)",
        "maxWidth": "56%",
        "width": "100%",
        "borderRadius": "0 0 30px 30px",
        "height": "70px",
        "zIndex": 9999
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
        "gap": "30px",
        "display": "flex",
        "boxSizing": "border-box",
        "alignItems": "center",
        "justifyContent": "space-between",
        "padding": "18px 40px",
        "maxWidth": "620px",
        "height": "81px",
        "boxShadow": "-1px 1px 13px 0 rgba(0,0,0,0.11)",
        "transform": "translateX(-50%)"
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
        "display": "flex",
        "flexDirection": "column",
        "gap": "20px",
        "padding": "30px",
        "boxSizing": "border-box"
      }
    },
    "pageWrap": {
      "default": {
        "overflowY": "scroll",
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
        "gap": "20px"
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
    "styleWrapper": {
      "default": {
        "position": "relative",
        "maxWidth": "300px",
        "order": 3,
        "width": "100%",
        "padding": "75px 0 0 0",
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
  },
  "appMenu": {
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
        "padding": " 7px 0 7px 20px",
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



function AppMenu(dashObj) {
  const userLSG = lab_local_storage_object('global')
  const lngData = dashObj.lngData
  userLSG.app = dashObj.selectedApp
  userLSG.section = 'home'

  socket.emit('getAppData', userLSG, res => {


    const menuWrap = lab_design_system_d('div', 'app-menu-wrap', rootLayer, '', '', ['appMenu', 'wrap'])
    const menu = lab_design_system_d('div', 'app-menu', rootLayer, '', '', ['appMenu', 'menu'])
    const side = lab_design_system_d('div', 'app-menu-side', menu, '', '', ['appMenu', 'side'])
    const box = lab_design_system_d('div', 'app-menu-box', menu, '', '', ['appMenu', 'box'])

    let activeSlide;

    const sideButtons = {
      'backup': lngData.settings,
      'css': 'CSS',
      'js': 'Js',
      'media': lngData.mediatheque,
      'database': lngData.sql_databases,
      'deploy': lngData.deployment
    }

    const settings = {
      'versioning': lngData.versioning,
      'pages_management': lngData.pages_management,
      'libraries': lngData.libraries,
      'collaborative_mode': lngData.collaborative_mode,
      'svg_fragmentation': lngData.svg_fragmentation,
      'ephemeral_sharing': lngData.ephemeral_sharing
    }

    const git_settings = {
      'credentials': lngData.credentials,
      'delete': lngData.delete,
      'create': lngData.create,
      'git_push': lngData.git_push
    }

    const server = {
      'lab_user_personnal_server': lngData.personnal_distant_server,
      // 'laboranth_remote_server': lngData.laboranth_remote_server,
      // "laboranth_deploy_git": "Git",
      "laboranth_deploy_zip": "Zip"
    }

    function Pages(name, type) {
      if (['addNewSection', 'removeSection'].includes(type)) {

        let sectionObj = {
          app: sectionElementsObject.app,
          uid: sectionElementsObject.uid,
          lng: sectionElementsObject.lng,
        }

        if (type == 'removeSection') sectionObj.removingSection = name
        else sectionObj.addingSection = name

        socket.emit(type, sectionObj)
      }
      else if (type == 'open') {
        lab_local_storage_object_update('global', { "section": name })
        window.open(window.location.protocol + "//" + window.location.host + "/" + lab_local_storage_object('global').app + "/" + name, "_self")
      }
    }

    function Libs(value, type) {
      if (type == 'delete') {
        let globalCtx = lab_local_storage_object("global")
        globalCtx.scriptToDelete = value
        socket.emit('deleteLib', globalCtx)
      }
      if (type == 'fetch')
        fetchLibrary(value)
    }

    function Folders(value, type) {
      if (type == 'delete') {
        const userLSG = lab_local_storage_object('global')
        userLSG.mediaListToRemove = value
        socket.emit('deleteMediaList', userLSG)
      }
    }

    function SQL(value, type) {
      if (['newSqlTable', 'sqlTableDel'].includes(type)) {
        let info
        if (type == 'sqlTableDel') info == 'tableToDel'
        else info == 'newTable'

        userLSG[info] = value

        socket.emit(type, userLSG)
      }
    }

    function ActionListing(parent, array, head, func, list, btnVal, onCLick) {
      const heading = lab_design_system_d('h6', 'app-menu-heading', parent, head, '', ['appMenu', 'heading'])
      const scrollList = lab_design_system_d('div', 'scrollList', parent, '', 'scrollable', ['appMenu', 'scrollList'])
      const pList = lab_design_system_d('div', 'app-menu-act', scrollList, '', '', ['appMenu', 'DBList'])

      array.forEach((e, index) => {
        const db = lab_design_system_d('div', `actions-${index}`, pList, '', '', ['appMenu', 'db'])
        const name = lab_design_system_d('span', `actions-name-${index}`, db, e, '', ['appMenu', 'link'])
        name.style.width = '100%'
        name.style.cursor = 'pointer'
        if (onCLick) {
          name.addEventListener('click', () => {
            onCLick(e)
          })
        }
        moreBtn(db, `actions-item-${index}`, list, e, func)
      })

      const bottom = lab_design_system_d('div', `bottom`, parent, '', '', ['appMenu', 'execute'])
      const input = Input('act-name', bottom)
      input.style.minWidth = '220px'
      input.style.width = 'fit-content'
      const btn = lab_design_system_d('button', 'act-btn', bottom, lngData.add, '', ['buttons', 'action'])
      btn.style.width = 'fit-content'
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const regex = /^[A-Za-z0-9-._~]+$/
        if (input.value && regex.test(input.value)) {
          func(input.value, btnVal)
        } else alertUser(lngData.column_name_cannot_be_empty)
      })

    }

    Object.keys(sideButtons).forEach(e => {
      const btn = lab_design_system_d('button', `app-menu-btn-${e}`, side, '', '', ['appMenu', 'sideBtn'])
      const icon = lab_design_system_d('img', `app-menu-btn-icon-${e}`, btn)
      const span = lab_design_system_d('span', `app-menu-btn-span-${e}`, btn, sideButtons[e])
      icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${e}.svg`)

      btn.addEventListener('click', () => {
        if (activeSlide != e) {
          const last = document.querySelector('.app-menu-active')
          if (last) {
            last.classList.remove('app-menu-active')
            last.style.color = '#fff'
            last.style.background = '#3C4CA6'
            let img = last.querySelector('img')
            img.setAttribute('src', img.src.replace('-white', ''))
          }
          RenderBox(e)
        }
      })
    })

    function RenderBox(slide = 'backup') {
      box.innerHTML = ''
      activeSlide = slide
      let btn = document.getElementById(`lab-app-menu-btn-${slide}`)
      btn.classList.add('app-menu-active')
      btn.style.color = '#3C4CA6'
      btn.style.background = '#fff'
      btn.querySelector('img').setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${slide}-white.svg`)

      if (slide == 'backup') {
        const wrapper = lab_design_system_d('div', 'app-menu-wrapper', box, '', 'scrollable', ['appMenu', 'wrapper'])
        dropDown(settings, settings.versioning, 'settings', (e) => Settings(e), wrapper)
        const setWrap = lab_design_system_d('div', 'setWrap', wrapper, '', '', ['appMenu', 'setWrap'])

        function Settings(name = 'versioning') {
          setWrap.innerHTML = ''
          if (name == 'versioning') {
            socket.emit("getUserBackups", lab_local_storage_object('global'), b => {
              const heading = lab_design_system_d('h6', 'manual-backup', setWrap, lngData.manual_management, '', ['appMenu', 'heading'])
              const row = lab_design_system_d('div', 'backup', setWrap, '', '', ['appMenu', 'execute'])
              row.style.position = 'relative'
              row.style.zIndex = 2
              const create = lab_design_system_d('button', `c-backup`, row, lngData.create, '', ['buttons', 'action'])
              create.style.width = 'fit-content'

              create.addEventListener('click', e => {
                const userLSG = lab_local_storage_object('global')
                const now = new Date(Date.now())
                const year = now.getFullYear()
                const month = (now.getMonth() + 1).toString().padStart(2, '0')
                const day = now.getDate().toString().padStart(2, '0')
                const hours = now.getHours().toString().padStart(2, '0')
                const minutes = now.getMinutes().toString().padStart(2, '0')
                userLSG.timeStamp = `${year}_${month}_${day}_${hours}_${minutes}`
                socket.emit("makeAppBackup", userLSG)
              })

              const text = lab_design_system_d('span', `row-text`, row, lngData.load_a_previous_version)
              const previous = dropDown(b.manual, b.manual[0], 'previous-backup', null, row)
              previous.wrap.style.maxWidth = '200px'
              const upload = lab_design_system_d('button', `u-backup`, row, lngData.load, '', ['buttons', 'action'])
              upload.style.width = 'fit-content'
              upload.addEventListener('click', e => {
                const userLSG = lab_local_storage_object('global')
                userLSG.backupDate = previous.text.innerHTML
                socket.emit('eraseByBackup', userLSG)
              })

              const auto = lab_design_system_d('h6', 'auto-backup', setWrap, lngData.automatic_management, '', ['appMenu', 'heading'])
              const autoRow = lab_design_system_d('div', 'a-backup', setWrap, '', '', ['appMenu', 'execute'])
              const autoBack = dropDown(b.auto, b.auto[0], 'previous-backup-auto', null, autoRow)
              autoBack.wrap.style.maxWidth = '200px'

              const uploadAuto = lab_design_system_d('button', `u-backup-a`, autoRow, lngData.load, '', ['buttons', 'action'])
              uploadAuto.style.width = 'fit-content'

              uploadAuto.addEventListener('click', e => {
                const userLSG = lab_local_storage_object('global')
                userLSG.auto = true
                userLSG.day = autoBack.text.innerHTML
                socket.emit('eraseByBackup', userLSG)
              })
            })
          }
          else if (name == 'pages_management') {
            ActionListing(setWrap, sectionElementsObject.sections, lngData.pages_management, Pages, {
              'removeSection': "delete",
              'open': "open"
            }, 'addNewSection')
          }
          else if (name == 'libraries') {
            ActionListing(setWrap, sectionElementsObject.configuration.scripts, lngData.libraries, Libs, { 'delete': "delete" }, 'fetch')
          }
          else if (name == 'ephemeral_sharing') {
            socket.emit("getUserBackups", lab_local_storage_object('global'), b => {
              const heading = lab_design_system_d('h6', 'manual-backup', setWrap, lngData.ephemeral_sharing, '', ['appMenu', 'heading'])
              const row = lab_design_system_d('div', 'backup', setWrap, '', '', ['appMenu', 'execute'])
              const text = lab_design_system_d('span', `row-text`, row, lngData.share_id)
              const id = Input('share', row)
              row.style.position = 'relative'
              row.style.zIndex = 2
              const update = lab_design_system_d('button', `c-backup`, row, lngData.update, '', ['buttons', 'action'])
              update.style.width = 'fit-content'

              update.addEventListener('click', e => {
                if (id.value) {
                  userLSG.newPublicID = id.value
                  socket.emit('updatePublicID', userLSG)
                }
                else {
                  alert(lngData.input_cannot_be_empty)
                }
              })

              const list = {
                1: '1 ' + lngData.day,
                2: '2 ' + lngData.day,
                3: '3 ' + lngData.day,
                4: '4 ' + lngData.day,
                5: '5 ' + lngData.day,
                6: '6 ' + lngData.day,
                7: '7 ' + lngData.day,
                8: '8 ' + lngData.day,
                9: '9 ' + lngData.day,
                10: '10 ' + lngData.day
              }

              const autoRow = lab_design_system_d('div', 'a-backup', setWrap, '', '', ['appMenu', 'execute'])
              let duration
              const autoBack = dropDown(list, list['1'], 'previous-backup-auto', (e) => {
                duration = list[e]
              }, autoRow)
              autoBack.wrap.style.maxWidth = '200px'

              const load = lab_design_system_d('button', `u-backup-a`, autoRow, lngData.load, '', ['buttons', 'action'])
              load.style.width = 'fit-content'


              load.addEventListener('click', e => {
                if (duration) {
                  userLSG.duration = duration
                  socket.emit('showUserProject', userLSG)
                }
                else {
                  alert(lngData.input_cannot_be_empty)
                }
              })
            })
          }
          else if (name == 'svg_fragmentation') {
            const heading = lab_design_system_d('h6', 'app-menu-heading', setWrap, lngData.svg_fragmentation, '', ['appMenu', 'heading'])
            const importSvg = lab_design_system_d('button', `c-backup`, setWrap, lngData.import_svg, '', ['buttons', 'action'])
            importSvg.style.width = 'fit-content'

            importSvg.addEventListener('click', () => {
              getFile('svg', "lab-file-input")
              document.querySelector('#lab-file-input').click()
            })
          }
          else if (name == 'collaborative_mode') {
            const heading = lab_design_system_d('h6', 'app-menu-heading', setWrap, lngData.collaborative_mode, '', ['appMenu', 'heading'])
            const content = lab_design_system_d('div', 'app-menu-content', setWrap, '', '', ['appMenu', 'deploy'])
            const collaborators = lab_design_system_d('div', 'app-menu-collaborators', content, '', '', ['appMenu', 'collaborators'])
            const rights = lab_design_system_d('div', 'app-menu-rights', content, '', '', ['appMenu', 'collaborators'])
            const collabText = lab_design_system_d('span', 'collabs-head-text', collaborators, lngData.add_a_collaborator)
            const rightsText = lab_design_system_d('span', 'rights-text', rights, lngData.collaborators_rights)

            let collabs = sectionElementsObject.userConfigs.collaboratorsLIST.map(e => e.collaborator_email)


            const collRow = lab_design_system_d('div', 'collab-row', collaborators, '', '', ['appMenu', 'execute'])
            collRow.style.width = '100%'
            let selectedCol = collabs[0]

            function select(index) {
              selectedCol = collabs[index]
            }

            const list = dropDown(collabs, selectedCol, 'collabs', select, collRow)
            list.wrap.style.width = '60%'

            const del = lab_design_system_d('button', 'del-collab', collRow, lngData.delete, '', ['buttons', 'action'])
            del.style.width = '30%'

            del.addEventListener('click', () => {
              const userLSG = lab_local_storage_object('global')
              userLSG.collaborator_email = selectedCol
              socket.emit('removeCollaboratorFromProject', userLSG, res => {

              })
            })

            const row = lab_design_system_d('div', 'app-menu-row', collaborators, '', '', ['appMenu', 'execute'])
            row.style.width = '100%'

            const newCollaborator = Input('collab', row)
            newCollaborator.style.width = '60%'

            const add = lab_design_system_d('button', 'add-collab', row, lngData.add, '', ['buttons', 'action'])
            add.style.width = '30%'

            add.addEventListener('click', () => {
              const userLSG = lab_local_storage_object('global')
              userLSG.collaborator_email = newCollaborator.value
              socket.emit('addCollaboratorToProject', userLSG, res => {
                if (res.success) {
                  const userLSG = lab_local_storage_object('global')
                  userLSG.message = userLSG.app
                  userLSG.recipient = collaborator_email
                  userLSG.under_review = true
                  userLSG.review_type = "access_granted"
                  socket.emit('sendMessage', userLSG, sended => {

                  })
                }
              })
            })

            const rightArr = ['designer', 'developer', 'administrator', 'custom']
            let collabRights = sectionElementsObject.userConfigs.collaboratorsLIST.map(e => e.rights.preset)
            let selected = collabs[0]
            const rightsRow = lab_design_system_d('div', 'rightsRow', rights, '', '', ['appMenu', 'execute'])
            const rightsCollabs = dropDown(collabs, selected, 'collabs-rights', writeCollab, rightsRow)

            const pointers = lab_design_system_d('div', 'pointers', rights, '', '', ['appMenu', 'collaborators'])

            function writeCollab(index = 0) {
              selected = collabs[index]
              const rightsTypes = dropDown(rightArr, collabRights[index], 'rights-type', selcetRights, rightsRow)
              let checkInputs = ['sftpAccess', 'ephemeralSharing', 'deployment', 'dbModelisation', 'collaboratorsRights']

              let checkRights = {
                'designer': [false, true, false, false, false],
                'developer': [true, true, true, false, false],
                'administrator': [true, true, true, true, true],
                'custom': []
              }

              function selcetRights(a = 0) {
                pointers.innerHTML = ''
                checkInputs.forEach((e, i) => {
                  const row = lab_design_system_d('div', `${e}-${i}`, pointers, '', '', ['appMenu', 'execute'])
                  const text = lab_design_system_d('span', `${e}-text`, row, e)
                  const check = lab_design_system_d('input', `${e}-check`, row, '', '', ['appMenu', 'checkbox'])
                  check.setAttribute('type', 'checkbox')
                  check.checked = checkRights[rightArr[a]][i]
                  if (rightArr[a] != 'custom') check.disabled = true
                })
              }

              selcetRights()
            }
            writeCollab()
          }

          lab_fade_in_recursively(setWrap, 0.3)
        }
        Settings()
      }

      else if (['css', 'js'].includes(slide)) TextEditableBox(slide)

      else if (slide == 'media') {
        let selectedFolder;
        const media = lab_design_system_d('div', 'app-menu-media', box, '', '', ['appMenu', 'media'])
        const folders = lab_design_system_d('div', 'app-menu-fold', media, '', '', ['appMenu', 'fold'])
        const wrapper = lab_design_system_d('div', 'app-menu-wrapper', media, '', 'scrollable', ['appMenu', 'wrapper'])
        const files = lab_design_system_d('div', 'app-menu-files', wrapper, '', '', ['appMenu', 'files'])
        if (sectionElementsObject.mediaLists && sectionElementsObject.mediaLists.length > 0) {
          sectionElementsObject.mediaLists.forEach(e => {
            const item = lab_design_system_d('div', `forder-${e.listName}`, folders, '', '', ['appMenu', 'folder'])
            const icon = lab_design_system_d('img', `forder-${e.listName}-icon`, item)
            icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/folder.svg`)
            const text = lab_design_system_d('div', `forder-${e.listName}-name`, item, e.listName)
            text.style.marginRight = 'auto'
            moreBtn(item, `folder-${e.listName}`, { 'delete': "delete" }, e.listName, Folders)

            item.addEventListener('click', () => {
              if (e.listName != selectedFolder) {
                let last = document.querySelector('.selected-folder')
                if (last) {
                  last.style.background = 'transparent'
                  last.classList.remove('selected-folder')
                }
                item.classList.add('selected-folder')
                item.style.background = '#fff'

                selectedFolder = e.listName
                openFolder(e.files)
              }

            })
          })
        }
        else folders.innerHTML = lngData.zero_media_list

        function openFolder(list) {
          files.innerHTML = ''
          if (list.length > 0) {
            list.forEach((e, i) => {
              const file = lab_design_system_d('div', `file-${i}`, files, '', '', ['appMenu', 'fileImg'])
              const fileImg = lab_design_system_d('div', `f-img-${i}`, file, '', '', ['appMenu', 'boxImg'])
              const img = lab_design_system_d('img', `file-img-${i}`, fileImg)
              img.style.maxWidth = '100%'
              img.style.aspectRatio = '1'
              img.style.objectFit = 'cover'
              const span = lab_design_system_d('span', `file-span-${i}`, file, e)
              img.setAttribute('src', `/DB/USERS_FOLDERS/${sectionElementsObject.uid}/apps/${sectionElementsObject.app}/content/ressources/medias/${selectedFolder}/${e}`)
            })
          } else {
            files.innerHTML = lngData.zero_media_list_files
          }
          lab_fade_in_recursively(files, 0.3)
        }

        const bottom = lab_design_system_d('div', 'app-fold-bottom', folders, '', '', ['appMenu', 'bottom'])

        let buttons = {
          'import': lngData.import_files,
          'create': lngData.new_folder
        }

        Object.keys(buttons).forEach(e => {
          const btn = lab_design_system_d('div', `forder-${e}`, bottom, '', '', ['appMenu', 'borderBtn'])
          const icon = lab_design_system_d('img', `forder-${e}-icon`, btn)
          icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/new-folder.svg`)
          const text = lab_design_system_d('div', `forder-${e}-name`, btn, buttons[e])
          btn.addEventListener('click', (ev) => {
            ev.preventDefault()
            if (e == 'create') {
              let input = document.getElementById('lab-new-folder-name')
              if (input) {
                userLSG.addedMediaList = input.value
                socket.emit('addNewMediaList', userLSG)
              } else Input('new-folder-name', bottom)
            } else {
              let input = document.getElementById('lab-file-input')
              if (selectedFolder) {
                getMediaFilesFile(input.id, selectedFolder)
                input.click()
              }
            }
          })

        })

      }

      else if (slide == 'deploy') {
        const wrapper = lab_design_system_d('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])
        const deploy = lab_design_system_d('div', 'app-menu-deploy', wrapper, '', 'scrollable', ['appMenu', 'deploy'])
        const left = lab_design_system_d('div', 'app-deploy-left', deploy, '', '', ['appMenu', 'left'])
        const right = lab_design_system_d('div', 'app-deploy-right', deploy, '', '', ['appMenu', 'right'])
        const heading = lab_design_system_d('h6', 'app-menu-heading', left, sideButtons[slide], '', ['appMenu', 'heading'])
        const wrap = lab_design_system_d('div', `app-menu-text-wrap`, right, '', '', ['appMenu', 'textBox'])
        wrap.style.height = '100%'
        wrap.style.maxHeight = '100%'

        const drop = dropDown(server, server.lab_user_personnal_server, 'serv', (e) => deployBox(e), left)
        const leftBox = lab_design_system_d('div', 'app-deploy-box', left, '', '', ['appMenu', 'leftBox'])

        function deployBox(e = 'lab_user_personnal_server') {
          leftBox.innerHTML = ''
          if (e == 'lab_user_personnal_server') {
            const ip = Input('ip', leftBox, 'XX.XX.XXX.XX', '')
            const ssh = Input('ssh', leftBox, lngData.username_ssh, '')
            const pass = Input('pass', leftBox, lngData.password, '')
            const dir = Input('dir', leftBox, lngData.remote_app_dir, '')
            const port = Input('port', leftBox, lngData.port, '')
            const save = lab_design_system_d('button', `save`, leftBox, lngData.save, '', ['buttons', 'action'])
            save.style.width = 'fit-content'

            save.addEventListener('click', () => {
              const userLSG = lab_local_storage_object('global')
              userLSG.host = ip.value
              userLSG.username = ssh.value
              userLSG.password = pass.value
              userLSG.remoteDir = dir.value
              userLSG.port = port.value
              socket.emit("saveSID", userLSG)
            })
          }
          if (e == 'laboranth_deploy_zip') {
            const donwload = lab_design_system_d('button', `donwload`, leftBox, lngData.download, '', ['buttons', 'action'])
            donwload.addEventListener('click', e => {
              socket.emit('askAppZipFolder', lab_local_storage_object('global'), res => {
                const blob = new Blob([res.fileData], { type: 'application/zip' })
                const downloadUrl = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = downloadUrl
                a.download = res.fileName
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
                URL.revokeObjectURL(downloadUrl)
              })
            })
          }
          if (e == 'laboranth_deploy_git') {
            const drop = dropDown(git_settings, git_settings.credentials, 'git', (e) => subBox(git, e), left)
            const git = lab_design_system_d('div', 'app-sub-box', leftBox, '', '', ['appMenu', 'leftBox'])

          }
          lab_fade_in_recursively(leftBox, 0.3)
        }

        function subBox(parent, e) {
          parent.innerHTML = ''

          if (e == 'credentials') {
            const username = Input('ssh', subBox, lngData.username, '')
            const email = Input('pass', subBox, lngData.email, '')
            const dir = Input('dir', subBox, lngData.remote_app_dir, '')
            const port = Input('port', subBox, lngData.port, '')
            const save = lab_design_system_d('button', `save`, subBox, lngData.save, '', ['buttons', 'action'])
            save.style.width = 'fit-content'

            save.addEventListener('click', () => {
              const userLSG = lab_local_storage_object('global')
              userLSG.host = ip.value
              userLSG.username = ssh.value
              userLSG.password = pass.value
              userLSG.remoteDir = dir.value
              userLSG.port = port.value
              socket.emit("saveSID", userLSG)
            })
          }

        }


        const executeBox = lab_design_system_d('div', 'deploy-execute', wrapper, '', '', ['appMenu', 'execute'])
        const command = Input('command', executeBox, 'ls')
        const execute = lab_design_system_d('button', `execute`, executeBox, lngData.run_cmd, '', ['buttons', 'action'])
        execute.style.width = 'fit-content'
        execute.style.whiteSpace = 'nowrap'

        execute.addEventListener('click', () => {
          const userLSG = lab_local_storage_object('global')
          userLSG.command = command.value
          command.value = ""
          socket.emit("runRemoteCommand", userLSG)
        })

        const deployBtn = lab_design_system_d('button', `btn-deploy`, wrapper, lngData.deployment, '', ['buttons', 'action'])
        deployBtn.style.width = 'fit-content'

        deployBtn.addEventListener('click', e => {
          const userLSG = lab_local_storage_object('global')
          userLSG.uploadingConfig = uploadingConfig
          socket.emit('sshDeploy', userLSG)
        })

        deployBox()
      }

      else if (slide == 'database') {
        function DBLists() {
          box.innerHTML = ''
          const wrapper = lab_design_system_d('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])
          ActionListing(wrapper, sectionElementsObject.databases, sideButtons[slide], SQL, {
            'sqlTableDel': "delete"
          }, 'newSqlTable', OpenDB)
        }
        DBLists()

        function OpenDB(dbName) {
          box.innerHTML = ''

          const media = lab_design_system_d('div', 'app-menu-media', box, '', '', ['appMenu', 'media'])
          const folders = lab_design_system_d('div', 'app-menu-fold', media, '', '', ['appMenu', 'fold'])
          const wrapper = lab_design_system_d('div', 'app-menu-wrapper', media, '', 'scrollable', ['appMenu', 'wrapper'])
          const columns = lab_design_system_d('div', 'columns', wrapper, '', 'scrolable', ['appMenu', 'columns'])
          const top = lab_design_system_d('div', 'top', columns, '', '', ['appMenu', 'column'])
          top.style.background = '#3C4CA6'
          top.style.borderRadius = '10px 10px 0 0'
          const name = lab_design_system_d('div', 'h-name', top, lngData.name_of_column, '', ['appMenu', 'columnHead'])
          const type = lab_design_system_d('div', 'h-type', top, lngData.data_type, '', ['appMenu', 'columnHead'])
          const notNull = lab_design_system_d('div', 'h-notNull', top, lngData.not_null, '', ['appMenu', 'columnHead'])
          const unique = lab_design_system_d('div', 'h-unique', top, lngData.unique, '', ['appMenu', 'columnHead'])

          const column = lab_design_system_d('div', 'column', columns, '', '', ['appMenu', 'column'])
          const Cname = lab_design_system_d('div', 'c-name', column, 'name', '', ['appMenu', 'columnBox'])
          const Ctype = lab_design_system_d('div', 'c-type', column, 'type', '', ['appMenu', 'columnBox'])
          const CnotNull = lab_design_system_d('div', 'c-notNull', column, 'notNull', '', ['appMenu', 'columnBox'])
          const Cunique = lab_design_system_d('div', 'c-unique', column, 'unique', '', ['appMenu', 'columnBox'])
          column.addEventListener('click', () => {
            column.classList.add('active-column')
            column.style.background = '#ECF0F9'
            ColumnSettings('name')
          })

          function ColumnSettings(field) {
            let last = document.getElementById('lab-column-setting')
            if (last) last.remove()
            const columnSetting = lab_design_system_d('div', 'column-setting', wrapper, '', '', ['appMenu', 'columnSetting'])
            const del = lab_design_system_d('div', 'del', columnSetting, lngData.delete, '', ['buttons', 'action'])
            del.style.width = 'fit-content'
            del.style.marginRight = 'auto'


            let action
            if (field == 'name') {
              let input = Input('column-name', columnSetting, 'name')
              input.style.maxWidth = '220px'

              action = lab_design_system_d('div', 'action', columnSetting, lngData.update_column_name, '', ['buttons', 'action'])
            }
            if (field == 'type') {
              let types = {
                'integer': "integer",
                'text': "text",
                'blob': "blob",
                'real': "real"
              }
              let drop = dropDown(types, 'integer', 'column-type', null, columnSetting)
              drop.wrap.style.maxWidth = '220px'
              drop.wrap.style.width = '100%'
              action = lab_design_system_d('div', 'action', columnSetting, lngData.update_data_type, '', ['buttons', 'action'])
            }
            if (field == 'notNull') {
              // change_true_to_false
              // change_false_to_true
              action = lab_design_system_d('div', 'action', columnSetting, lngData.change_true_to_false, '', ['buttons', 'action'])
            }
            if (field == 'unique') {
              action = lab_design_system_d('div', 'action', columnSetting, lngData.change_true_to_false, '', ['buttons', 'action'])
            }

            action.style.width = 'fit-content'
          }




          if (sectionElementsObject.databases && sectionElementsObject.databases.length > 0) {
            sectionElementsObject.databases.forEach(e => {
              const item = lab_design_system_d('div', `table-${e.split('.')[0]}`, folders, '', '', ['appMenu', 'folder'])
              const text = lab_design_system_d('div', `table-${e.split('.')[0]}-name`, item, e)
              text.style.marginRight = 'auto'
              // moreBtn(item, `folder-${e.listName}`, { 'delete': "delete" }, e.listName, Folders)

              // item.addEventListener('click', () => {
              //   if (e.listName != selectedFolder) {
              //     let last = document.querySelector('.selected-folder')
              //     if (last) {
              //       last.style.background = 'transparent'
              //       last.classList.remove('selected-folder')
              //     }
              //     item.classList.add('selected-folder')
              //     item.style.background = '#fff'

              //     selectedFolder = e.listName
              //     openFolder(e.files)
              //   }

              // })
            })
          }

          const bottom = lab_design_system_d('div', 'app-fold-bottom', folders, '', '', ['appMenu', 'bottom'])

          const NewTable = lab_design_system_d('div', `new-table`, bottom, '', '', ['appMenu', 'borderBtn'])
          const icon = lab_design_system_d('img', `new-table-icon`, NewTable)
          icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/new-folder.svg`)
          const text = lab_design_system_d('div', `new-table-name`, NewTable, lngData.new_table)

          // btn.addEventListener('click', (ev) => {
          //   ev.preventDefault()
          //   if (e == 'create') {
          //     let input = document.getElementById('lab-new-folder-name')
          //     if (input) {
          //       userLSG.addedMediaList = input.value
          //       socket.emit('addNewMediaList', userLSG)
          //     } else Input('new-folder-name', bottom)
          //   } else {
          //     let input = document.getElementById('lab-file-input')
          //     if (selectedFolder) {
          //       getMediaFilesFile(input.id, selectedFolder)
          //       input.click()
          //     }
          //   }
          // })



          userLSG.sqlDB = dbName
          lab_local_storage_object_update('global', { openedSqlTable: "" })
          socket.emit('getSqlTables', userLSG, res => {
            console.log(res);
          })
        }

      }

      lab_fade_in_recursively(box, 0.3)
    }
    RenderBox()

    function moreBtn(parent, id, list, el, func) {
      const more = lab_design_system_d('button', `more-btn-${id}`, parent, '', '', ['appMenu', 'more'])
      const icon = lab_design_system_d('img', `more-btn-${id}-icon`, more)
      icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/more_vert.svg`)
      icon.style.transform = 'rotate(90deg)'

      more.addEventListener('click', () => {
        const listing = lab_design_system_d('div', `more-list-${id}`, more, '', '', ['appMenu', 'moreList'])

        Object.keys(list).forEach((e, i) => {
          const item = lab_design_system_d('div', `more-list-${i}`, listing, list[e])
          item.addEventListener('click', () => func(el, e))
        })

        listing.addEventListener('mouseleave', () => listing.remove())
      })
    }

    function TextEditableBox(type) {
      const wrapper = lab_design_system_d('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])
      const heading = lab_design_system_d('h6', 'app-menu-heading', wrapper, sideButtons[type], '', ['appMenu', 'heading'])
      const wrap = lab_design_system_d('div', `app-menu-text-wrap`, wrapper, '', '', ['appMenu', 'textBox'])
      const textArea = lab_design_system_d('div', `app-menu-textArea`, wrap, '', 'scrollable', ['appMenu', 'textArea'])
      textArea.contentEditable = true

      const btn = lab_design_system_d('button', `app-menu-btn`, wrapper, lngData.save, '', ['buttons', 'action'])
      btn.style.width = 'fit-content'

      let FileType = type == 'css' ? "CSS" : "Features"
      let SaveFile = type == 'css' ? "CSS" : "Feature"

      socket.emit(`ask${FileType}File`, userLSG, e => {
        if (e.success) {
          textArea.innerText = e.data
          btn.addEventListener('click', e => {
            const userLSG = lab_local_storage_object('global')
            userLSG.string = textArea.innerHTML
            socket.emit(SaveFile, userLSG)
          })
        }
      })
    }

    function Input(id, parent, placeholder = '', value = '') {
      const input = lab_design_system_d('input', id, parent, '', '', ['appMenu', 'Input'])
      input.setAttribute('placeholder', placeholder)
      input.setAttribute('value', value)
      return input
    }

    function dropDown(list, value, id, func, parent = box) {
      const wrap = lab_design_system_d('div', `${id}-wrap`, parent, '', '', ['appMenu', 'drop'])
      const selected = lab_design_system_d('div', `${id}-selected`, wrap, '', '', ['appMenu', 'selected'])
      const text = lab_design_system_d('span', `${id}-text`, selected, value.replace(/"/gi, ''))
      const icon = lab_design_system_d('img', `${id}-icon`, selected, '', '', ['design', 'icon'])
      icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/arrow_drop_down.svg`)

      const listing = lab_design_system_d('div', `${id}-list`, wrap, '', 'scrollable', ['appMenu', 'list'])
      if (typeof list == 'array') {
        list.forEach(e => {
          const item = lab_design_system_d('div', `${id}-list-${e}`, listing, e)
          item.addEventListener('click', () => {
            text.innerHTML = e
            func(e)
          })
        })
      } else {
        Object.keys(list).forEach(e => {
          const item = lab_design_system_d('div', `${id}-list-${e}`, listing, list[e])
          item.addEventListener('click', () => {
            text.innerHTML = list[e]
            func(e)
          })
        })
      }

      listing.addEventListener('mouseleave', () => {
        listing.style.display = 'none'
      })

      wrap.addEventListener('click', () => {
        listing.style.display = listing.style.display == 'flex' ? 'none' : 'flex'
      })
      return { wrap, text }
    }

    menuWrap.addEventListener('click', () => {
      menuWrap.remove()
      menu.remove()
    })

    const fileInput = lab_design_system_d('input', 'file-input', rootLayer, '', '', ['design', 'noneFile'])
    fileInput.setAttribute('type', 'file')
  })
}

socket.emit("askAccount", lab_local_storage_object("global"), res => {
  lab_load_language_module(res.configs.language).then(lngData => {
    res.lngData = lngData
    res.lng = res.configs.language
    AppMenu(res)
  })
})

// const oldSRC = '/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/new/img/'
const oldSRC = 'https://laboranth.tech/D/R/IMG/CLA/'

let styles = styles_d
let lab_ui_styles_d = styles_d

let ActiveMode
let selected

const uditableTags = ["SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "P", "I", "B", "STRONG", "FONT", "EM", "SMALL", "SUP", "SUB", "Q", "BLOCKQUOTE"]

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
          const hover = lab_design_system_d('div', "hover", page, '', 'none', ['design', 'hover'])
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
          const pointer = lab_design_system_d('div', 'pointer', page, '', `none ${direction}`, ['design', 'pointer'])
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
          let area = !document.getElementById('lab-area') ? lab_design_system_d('div', 'area', page, '', 'none', ['design', 'area']) : document.getElementById('lab-area')
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
    const stopList = ['lab-HoverBox', 'lab-HoverBoxbtn-icon', 'lab-HoverBoxbtn', 'lab-user-page']
    if (!stopList.includes(element.id)) {
      await Designer.removePointer()

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
      lab_fade_in_recursively(parent, 0.3)
    }
  }

  static blockMenu(element, parent, options) {
    ActiveMode = null
    let last = document.getElementById('lab-block-menu')
    if (last) {
      last.remove()
    }
    const menuWrap = lab_design_system_d('div', 'block-menu-wrap', parent, '', 'none', ['design', 'blockMenuWrap'])
    console.log(menuWrap);

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

  const menu = lab_design_system_d('div', 'side-menu', designBody, '', 'scrollable', ['design', 'side'])
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

  const elementsBox = lab_design_system_d('div', "elements-box", menu, '', 'scrollable', ['design', 'elementsBox'])

  const elementsTitle = lab_design_system_d('span', Designer.ID(), elementsBox, "Elements", '', ['design', 'templatesHeading'])
  const elementsWrap = lab_design_system_d('div', Designer.ID(), elementsBox, '', '', ['design', 'templates'])

  function addList(e, list) {
    Object.keys(e).map(el => {
      const item = lab_design_system_d('div', Designer.ID(), list, '', '', ['design', 'template'])
      const icon = lab_design_system_d('div', Designer.ID(), item, '', '', ['design', 'templateIcon'])
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
    pageWrap = lab_design_system_d('div', "user-page-wrap", designBody, '', 'scrollable', ['design', 'pageWrap'])
    pageWrap.classList.remove('escape')
    pageWrap.setAttribute('class', 'lab-scrollable')
  } else {
    pageWrap = document.querySelector('#lab-user-wrap')
  }

  let page
  if (!document.querySelector('#lab-user-page')) {
    page = lab_design_system_d('div', "user-page", pageWrap, '', '', ['design', 'page'])
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

  const toolBar = lab_design_system_d('div', "toolbar", designBody, '', '', ['design', 'toolbar'])

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
      const toolWrap = lab_design_system_d('div', `${tool}-wrap`, toolBar, '', '', ['design', 'toolbarItemWrap'])
      toolBtn = DesignConstructor.button(toolWrap, ['design', 'toolbarItem'], '', tool, 'toolBtn', `${tool}-btn`)
      const arrow = DesignConstructor.button(toolWrap, ['design', 'toolArrow'], '', `keyboard_arrow_down`)
      toolBtn.setAttribute('data-tool', tool)


      const list = lab_design_system_d('div', `${tool}-list`, toolWrap, '', '', ['design', 'toolbarItemList'])
      tools[tool].forEach(e => {
        let btn = lab_design_system_d('button', `${e.value}-wrap-btn`, list,
          '', '', ['design', 'toolbarItem'])

        const icon = lab_design_system_d('img', `${e.value}-wrap-icon`, btn,
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

  const blind = lab_design_system_d('button', "blind-tools", toolBar, '', '', ['design', 'blindTools'])
  blind.addEventListener('click', () => {
    DesignConstructor.toggleClass(toolBar, 'design', 'toolbar', 'hideToolbar')
    Options(options, 'toolBar')
  })

  if (!options.toolBar) DesignConstructor.addClass(toolBar, 'design', 'hideToolbar')

  //TOPSETTINGS

  const topSettings = lab_design_system_d('div', "top-settings", designBody, '', '', ['design', 'top'])
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

  const pixelScreen = lab_design_system_d('div', "top-settings-pixel", topSettings, window.outerWidth + ' px', 0, ['design', 'pixelView'])
  pixelScreen.style.width = '65px'
  setVpm(options.vpm)

  const pixelSettings = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'settings-white')
  pixelSettings.querySelector('img').style.width = '15px'

  const setPage = DesignConstructor.button(topSettings, ['design', 'setPage'], '', 'page-box')

  setPage.appendChild(document.createTextNode(sectionElementsObject.section))
  const arrow = lab_design_system_d('img', 'page-arrow', setPage)
  arrow.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/chevron_right.svg`)

  setPage.addEventListener('click', () => {
    let last = document.getElementById('lab-page-list')
    if (last) last.remove()
    const list = lab_design_system_d('div', 'pages-list', setPage, '', '', ['design', 'pagesList'])

    sectionElementsObject.sections.forEach(e => {
      if (e != sectionElementsObject.section) {
        const btn = lab_design_system_d('a', `pages-list-${e}`, list, e, '', ['design', 'pageLink'])
        btn.setAttribute('href', `./${e}`)
      }
    })
    list.addEventListener('mouseleave', () => list.remove())
  })

  const sizeSwitcher = lab_design_system_d('input', 'sliderRange', topSettings, null, null)
  sizeSwitcher.setAttribute('type', "range")
  sizeSwitcher.setAttribute('min', "1")
  sizeSwitcher.setAttribute('max', "100")
  sizeSwitcher.setAttribute('type', "range")
  sizeSwitcher.setAttribute('value', "100")

  const size = lab_design_system_d('div', 'screen-size', topSettings, options.zoom + '%', '', ['design', 'pixelView'])
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

  const blindTop = lab_design_system_d('button', "blind-btn", topSettings, '', '', ['design', 'blind'])

  blindTop.addEventListener('click', () => {
    DesignConstructor.toggleClass(topSettings, 'design', 'top', 'hideTop')
    Options(options, 'settingsBar')
  })

  if (!options.settingsBar) DesignConstructor.addClass(topSettings, 'design', 'hideTop')

  const styleMenu = lab_design_system_d('div', 'style-box', designBody, '', 'none', ['design', 'styleWrapper'])
  const styleWrap = lab_design_system_d('div', 'style-wrap', styleMenu, '', 'none')

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
  codeMenuButton.addEventListener('click', () => {
    codeWrapper.innerHTML = ''
    DesignConstructor.toggleClass(codeMenu, 'design', 'codeBox', 'codeBoxActive')
    DesignConstructor.toggleClass(codeMenuButton, 'design', 'codeBoxShow', 'codeBoxShowActive')
    document.getElementById('lab-user-page').innerHTML.split('>').forEach(e => {
      codeWrapper.innerText += e + '>\n            '
    })
  })

  //CODE MENU END

  const fileInput = lab_design_system_d('input', 'img-input', designBody, '', '', ['design', 'noneFile'])
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

      const elementMenuButtons = lab_design_system_d('div', "elementMenu-buttons", box, '', '', ['design', 'StyleButtons'])
      const elementMenuBody = lab_design_system_d('div', "elementMenuBody", box, '', '', ['design', 'elementMenuBody'])
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

          const settings = lab_design_system_d('div', "menu-style-settings", elementMenuBody, '', '', ['design', 'styleGrid'])
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



          const colorSettings = lab_design_system_d('div', "colorSettings", elementMenuBody, '', '', ['design', 'styleBox'])
          const textColor = lab_design_system_d('span', Designer.ID(), colorSettings, 'background')
          const colorInput = lab_design_system_d('input', "input-text-color", colorSettings, '', '', ['design', 'colorInput'])
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
          const settings = lab_design_system_d('div', "menu-style-settings", elementMenuBody, '', '', ['design', 'styleGrid'])

          const tag = DesignConstructor.dropList(settings, ['div', 'span', 'h1'], item.tagName, (e) => {
            item.tagName = e
          })
          tag.style.flex = '0 1 35%'


          const fontFamily = DesignConstructor.dropList(settings, ['Arial', 'Arial2', 'Arial3'], css['font-family'], (e) => Designer.WriteStyle(item, 'fontFamily', e))

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
          const textColorInput = lab_design_system_d('input', "input-text-color", colorSettings, '', '', ['design', 'colorInput'])
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

  if (xrotate === 1) {
    if (event.target !== selectedElementChangeId && !isTargetNewDiv) {
      activeRotateElement()
    }
  } else {
    if (event.target.id == 'lab-rotate-tool') {
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


