const styles_d = {
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
        "borderRadius": "15px",
        "paddingBottom": "clamp(2svh, 5svh, 12px)",
        "paddingTop": "clamp(2svh, 5svh, 12px)",
        "paddingLeft": "clamp(2svw, 5svw, 20px)",
        "paddingRight": "clamp(2svw, 5svw, 20px)",
        "background": "#feda31",
        "fontWeight": "700",
        "font-size": "clamp(10px, 14px, 18px)",
        "color": "#000",
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
        "maxHeight": "100svh",
        "overflowY": "auto",
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
  }
}

let oldSRC = '/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/'
let staticCLA = 'https://laboranth.tech/D/R/IMG/CLA/'

let selectedChat;
let customerData = {
  customerFirstName: '',
  customerLastName: '',
  customerCountry: '',
  customerStreetAdress: '',
  customerCity: '',
  customerZipCode: '',
  customerIsPro: '',
  customerHDAdress: '',
  customerHDCity: '',
  customerHDZip: '',
  customerVatNumber: ''
}

let plansLng = {
  'payment_informations': "Payment information",
  'free': "Free",
  'step': "Step",
  'creation_of_3_projects': "Creation of 3 projects",
  'disk_space_limit': "Disk space",
  'personnal_plan': "Personal",
  'unlimited_project_creation': 'Unlimited project creation',
  'collaborators': "collaborators",
  'full_transfer_of_source_code_rights': "Full transfer of source code",
  "ephemeral_sharing": "Ephemeral sharing",
  'yearly_payment': "Yearly",
  'monthly': 'Monthly',
  'contact_us': 'Contact us',
  //!========================

  "business_lite": "Business Lite",
  'business_premium': "Business Premium",
  'tailored': "Tailored",

  'tariff_free_description': "Tariff where you can get acquainted with the service's capabilities and create your own website",
  'tariff_personal_description': "Suitable for aspiring businessmen, individual entrepreneurs and experts",
  'tariff_business_lite_description': "An exceptional choice for growing businesses with up to 5 team members.",
  'tariff_business_premium_description': "For businesses that want to use all the capabilities of the service. Also ideal for web studios and IT companies",
  'tariff_tailored_description': "Extended solution for high scale businesses and organizations like universities",
  'on_request': "On request",


  'content_and_plugins_basic': "Content and Plugins Basic",
  'content_and_plugins_pro': "Content and Plugins Pro",
  'content_and_plugins_vip': "Content and Plugins Vip",


  "creation_of_15_projects": "Creation of 15 projects",
  'linking_your_domain': "Linking your domain",
  'export_formats': "Export git / .zip / serveurs persos (purchasing servers from our partners)",
  'using_ai': "Using AI",
  'payment_tools': "Payment tools",
  'automaticly_daily_backup': "Automaticly daily backup",
  'ecommerce': "eCommerce",
  'access_to_training_materials': "Access to training materials",


  'tariff_heading': "Commencez avec plus de 900 templates gratuits et personnalisables, l'Éditeur intuitif glissez-déposez, des outils pour renforcer votre présence en ligne et plus encore.",
  'tariff_plans': "Tariff plans",
  'choose_plan': "Choose plan",
}

function plan_payment_steps(parent, plan, price, lngData) {
  if (!document.getElementById('lab-steps')) {

    const closeWrapper = lab_design_system_d("div", "close-wrapper", parent, 0, 0, ["steps", "closeWrapper"])
    closeWrapper.addEventListener('click', () => {
      parent.removeChild(closeWrapper)
      parent.removeChild(wrap)
    })
    const wrap = lab_design_system_d("div", "steps", parent, 0, 0, ["steps", "wrap"])

    const top = lab_design_system_d("div", "steps-top", wrap, lngData.payment_informations, 0, ["steps", "top"])

    const box = lab_design_system_d("div", "steps-box", wrap, 0, 0, ["steps", "box"])

    const steps = lab_design_system_d("div", "steps-items", box, 0, 0, ["steps", "items"])

    const stepsLng = {
      step1: lngData.step + " 1",
      step2: lngData.step + " 2",
      step3: lngData.step + " 3"
    }
    Object.keys(stepsLng).forEach((e, index) => {
      const step = lab_design_system_d("div", `steps-items-${e}`, steps, 0, 0, ["steps", "item"])
      const stepMark = lab_design_system_d("div", `steps-mark-${e}`, step, 0, 0, ["steps", "mark"])
      const stepText = lab_design_system_d("span", `steps-${e}`, step, stepsLng[e])

      if (index < 2) {
        const line = lab_design_system_d("div", `steps-line-${e}`, steps, 0, 0, ["steps", "line"])
      }
    })
    const form = lab_design_system_d("div", "steps-form", box, 0, 0, ["steps", "form"])

    function renderForm(stepNumber) {
      if (stepNumber === 1) {
        form.innerHTML = ''
        const lastName = lab_design_system_d("input", "steps-form-last-name", form, 0, 0, ["steps", "input"])
        lastName.setAttribute('value', customerData.customerLastName)
        lastName.setAttribute('placeholder', lngData.last_name)
        const firstName = lab_design_system_d("input", "steps-form-first-name", form, 0, 0, ["steps", "input"])
        firstName.setAttribute('value', customerData.customerFirstName)

        firstName.setAttribute('placeholder', 'First name')
        const BillingAddress = lab_design_system_d("input", "steps-form-billing-address", form, 0, 0, ["steps", "input"])
        BillingAddress.setAttribute('value', customerData.customerStreetAdress)

        BillingAddress.style.width = 'calc(72% - 10px)'
        BillingAddress.setAttribute('placeholder', 'Billing address')
        const postCode = lab_design_system_d("input", "steps-form-post-code", form, 0, 0, ["steps", "input"])
        postCode.setAttribute('value', customerData.customerZipCode)

        postCode.style.width = 'calc(28% - 10px)'
        postCode.setAttribute('placeholder', 'Postal code')
        const country = lab_design_system_d("input", "steps-form-country", form, 0, 0, ["steps", "input"])
        country.setAttribute('placeholder', 'Country')
        country.setAttribute('value', customerData.customerCountry)

        const city = lab_design_system_d("input", "steps-form-City", form, 0, 0, ["steps", "input"])
        city.setAttribute('placeholder', 'City')
        city.setAttribute('value', customerData.customerCity)

        const check = lab_design_system_d("div", "steps-form-check", form, 0, 0, ["steps", "check"])
        const checkInput = lab_design_system_d("input", "steps-form-checkbox", check, 0, 0, ["steps", "checkbox"])
        checkInput.setAttribute('type', 'checkbox')

        const checkText = lab_design_system_d("div", "steps-form-check-text", check, 'Pay as enterprise')
        const btn = lab_design_system_d("button", "steps-form-btn", form, 'Next step', 0, ['steps', 'btn'])
        btn.style.margin = '20px auto 0 0'
        btn.addEventListener('click', () => {
          if (lastName.value && firstName.value && BillingAddress.value && postCode.value && country.value && city.value) {
            customerData.customerLastName = lastName.value
            customerData.customerFirstName = firstName.value
            customerData.customerStreetAdress = BillingAddress.value
            customerData.customerZipCode = postCode.value
            customerData.customerCountry = country.value
            customerData.customerCity = city.value
            customerData.customerIsPro = checkInput.value == 'on'

            renderForm(2)
          } else {
            alertUser("Fill in all the required fields")
          }


        })
      }
      else if (stepNumber === 2) {
        document.getElementById('lab-steps-mark-step1').style.background = '#FED05E'
        document.getElementById('lab-steps-line-step1').style.borderTop = '1px solid #FED05E'

        form.innerHTML = ''
        const companyName = lab_design_system_d("input", "steps-form-last-name", form, 0, 0, ["steps", "input"])
        companyName.setAttribute('placeholder', 'Company name')
        companyName.style.width = '100%'
        // companyName.setAttribute('value',customerData.customerCountry)


        const check = lab_design_system_d("div", "steps-form-check", form, 0, 0, ["steps", "check"])
        const checkInput = lab_design_system_d("input", "steps-form-checkbox", check, 0, 0, ["steps", "checkbox"])
        checkInput.setAttribute('type', 'checkbox')


        const checkText = lab_design_system_d("div", "steps-form-check-text", check, 'Same to the billing address')


        const BillingAddress = lab_design_system_d("input", "steps-form-billing-address", form, 0, 0, ["steps", "input"])
        BillingAddress.style.width = 'calc(72% - 10px)'
        BillingAddress.setAttribute('placeholder', 'Billing address')
        BillingAddress.setAttribute('value', customerData.customerHDAdress)

        const postCode = lab_design_system_d("input", "steps-form-post-code", form, 0, 0, ["steps", "input"])
        postCode.style.width = 'calc(28% - 10px)'
        postCode.setAttribute('placeholder', 'Postal code')
        postCode.setAttribute('value', customerData.customerHDZip)

        checkInput.addEventListener('change', () => {
          BillingAddress.setAttribute('value', customerData.customerStreetAdress)
          postCode.setAttribute('value', customerData.customerZipCode)
        })

        const vat = lab_design_system_d("input", "steps-form-vat", form, 0, 0, ["steps", "input"])
        vat.setAttribute('placeholder', 'VAT number (optional)')
        vat.style.width = '100%'
        postCode.setAttribute('value', customerData.customerVatNumber)


        const btn = lab_design_system_d("button", "steps-form-btn", form, 'Next step', 0, ['steps', 'btn'])
        btn.style.margin = '20px auto 0 0'
        btn.addEventListener('click', () => {
          //! companyName

          if (BillingAddress.value && postCode.value && companyName.value) {
            customerData.customerHDAdress = BillingAddress.value
            customerData.customerHDZip = postCode.value
            customerData.customerVatNumber = vat.value
            renderForm(3)

          } else {
            alertUser("Fill in all the required fields")
          }

        })

      }
      else if (stepNumber === 3) {
        document.getElementById('lab-steps-mark-step2').style.background = '#FED05E'
        document.getElementById('lab-steps-line-step2').style.borderTop = '1px solid #FED05E'

        form.innerHTML = ''
        form.style.flexDirection = 'column'
        const heading = lab_design_system_d("div", "steps-heading", form, 0, 0, ["steps", "heading"])

        if (price) {
          const headingFirst = lab_design_system_d("span", "steps-heading-one", heading, 'The billed amourt is ')
          const priceText = lab_design_system_d("span", "steps-heading-price", heading, price + '€')

          const headingLast = lab_design_system_d("span", "steps-heading-two", heading, ' Tax Included')

          priceText.style.fontWeight = '700'
          priceText.style.fontSize = '32px'

        }


        const check = lab_design_system_d("div", "steps-form-check", form, 0, 0, ["steps", "check"])
        const checkInput = lab_design_system_d("input", "steps-form-checkbox", check, 0, 0, ["steps", "checkbox"])
        checkInput.setAttribute('type', 'checkbox')
        const checkText = lab_design_system_d("div", "steps-form-check-text", check, 'Accept - Laboranth> General Conditions')
        check.style.width = 'fit-content'


        const text = lab_design_system_d("div", "steps-heading-text", form, 'You will be redirected to the mollie platform. All banking Information to process this payment are secured.', 0, ["steps", "heading"])
        text.style.marginTop = '25px'

        const btn = lab_design_system_d("button", "steps-form-btn", form, 'Pay', 0, ['steps', 'btn'])

        btn.style.margin = '40px auto 0 auto'
        btn.addEventListener('click', () => { })
      }
    }

    renderForm(1)

    lab_fade_in_recursively(wrap, 0.3)
  }

}

function chat(parent, lngData) {
  if (!document.getElementById('lab-chat')) {
    const wrap = lab_design_system_d("div", "chat", parent, 0, 0, ["chat", "wrap"])

    const close = lab_design_system_d("button", "chat-close", wrap, 0, 0, ["chat", "close"])
    const closeIcon = lab_design_system_d("img", "chat-close-icon", close)
    closeIcon.setAttribute('src', `${oldSRC}close.svg`)

    close.addEventListener('click', () => {
      wrap.style.transition = 'all 0.2s linear'
      wrap.style.transform = 'translateX(100%)'
      wrap.style.opacity = '0'

      setTimeout(() => {
        parent.removeChild(wrap)
      }, 2000);
    })

    const body = lab_design_system_d("div", "chat-body", wrap, 0, 0, ["chat", "body"])

    function chatRoom(email, messages, status, type) {
      let userContact = email.split('@')[0]
      body.innerHTML = ''
      function renderChat() {
        body.innerHTML = ''
        const room = lab_design_system_d("div", "chat-room", body, 0, 0, ["chat", "room"])
        const top = lab_design_system_d("div", "chat-top", room, email, 0, ["chat", "top"])
        const messagesBox = lab_design_system_d("div", "chat-messages", room, 0, 0, ["chat", "messages"])
        const bottom = lab_design_system_d("div", "chat-bottom", body, 0, 0, ["chat", "bottom"])
        const input = lab_design_system_d("input", "chat-input", bottom, 0, 0, ["chat", "input"])
        const send = lab_design_system_d("button", "chat-send", bottom, 0, 0, ["chat", "send"])
        const sendIcon = lab_design_system_d("img", "chat-send-icon", send)

        function renderMessages(messagesArray) {
          messagesBox.innerHTML = ''
          messagesArray.forEach((m) => {
            if (m.expeditor != email) {
              const message = lab_design_system_d("span", `chat-message-${m.messageID}`, messagesBox, m.message, 0, ["chat", "myMessage"])
            }
            else {
              const message = lab_design_system_d("span", `chat-message-${m.messageID}`, messagesBox, m.message, 0, ["chat", "message"])
            }

          })
        }

        renderMessages(messages)
        sendIcon.style.width = '100%'
        sendIcon.style.height = '100%'
        sendIcon.setAttribute('src', `${oldSRC}send.svg`)

        send.addEventListener('click', () => {
          if (input.value) {
            const userLSG = lab_local_storage_object('global')
            userLSG.message = input.value
            userLSG.recipient = email
            socket.emit('sendMessage', userLSG, sended => {
              if (sended.success) {
                const message = lab_design_system_d("span", `chat-message-${sended.data.messageID}`, messagesBox, input.value, 0, ["chat", "myMessage"])
                input.value = ""
              }
            })
          } else {
            alertUser(lngData.input_cannot_be_empty)
          }
        })

      }

      if (status == 'pending') {
        if (type == 'new') {
          const newUser = lab_design_system_d("div", "chat-new-user", body, 0, 0, ["chat", "new"])
          const newHeading = lab_design_system_d("div", "chat-heading", newUser, email, 0, ["chat", "heading"])
          const box = lab_design_system_d("div", "chat-box", newUser, 0, 0, ["chat", "box"])
          box.style.justifyContent = 'space-between'
          const acceptBtn = lab_design_system_d("button", "chat-btn-accept", box, 'lngData.accept', 0, ["chat", "boxBtn"])
          acceptBtn.addEventListener('click', () => {
            const userLSG = lab_local_storage_object('global')
            userLSG.contactToAdd = email
            userLSG.addOrRemove = 'add'
            socket.emit('acceptContact', userLSG, acceptRes => {
              if (acceptRes.success === true) renderChat()
            })
          })
          const refuseBtn = lab_design_system_d("button", "chat-btn-refuse", box, 'lngData.refuse', 0, ["chat", "boxBtn"])
          refuseBtn.addEventListener('click', () => {
            const userLSG = lab_local_storage_object('global')
            userLSG.contactToAdd = email
            userLSG.addOrRemove = 'remove'
            socket.emit('refuseContact', userLSG, refuseRes => {
              if (refuseRes.success === true) {
                body.innerHTML = ''
                document.getElementById(`lab-chat-user-contact-${userContact}`).remove()
              }
            })
          })
        }
        else {
          const awaitingValidation = lab_design_system_d("div", "chat-body-awaiting-validation", body, 'lngData.awaiting_validation', 0, ["chat", "top"])
          awaitingValidation.style.color = "#fff"
        }
      }

      if (status == 'accepted') renderChat()
    }


    function addUserContact() {
      body.innerHTML = ''
      const newUser = lab_design_system_d("div", "chat-new-user", body, 0, 0, ["chat", "new"])
      const newHeading = lab_design_system_d("div", "chat-heading", newUser, 'Enter an email to invite you to your project', 0, ["chat", "heading"])
      const box = lab_design_system_d("div", "chat-box", newUser, 0, 0, ["chat", "box"])
      const boxInput = lab_design_system_d("input", "chat-box-input", box, 0, 0, ["chat", "boxInput"])
      const boxBtn = lab_design_system_d("button", "chat-box-btn", box, 'Invite', 0, ["chat", "boxBtn"])

      boxBtn.addEventListener('click', () => {
        if (boxInput.value) {
          const userLSG = lab_local_storage_object('global')
          userLSG.contactEmail = boxInput.value

          socket.emit('addNewContact', userLSG, contactData => {
            if (contactData.success === true) {
              // contactData.data.email
            }
          })
        } else {
          alertUser(lngData.input_cannot_be_empty)
        }
      })
    }

    const users = lab_design_system_d("div", "chat-users", wrap, 0, 0, ["chat", "users"])
    const addUser = lab_design_system_d("button", "chat-add-user", users, 0, 0, ["chat", "add"])
    const addUserIcon = lab_design_system_d("img", "chat-add-user-icon", addUser)
    addUserIcon.setAttribute('src', `${oldSRC}add_user.svg`)
    addUser.addEventListener('click', () => addUserContact())

    socket.emit('fetchMessages', lab_local_storage_object('global'), reloadMessages => {
      if (reloadMessages.success === true) {
        function parseMessages(messagesArray, type) {
          messagesArray.forEach(e => {
            if (e.email) {
              let userContact = e.email.split('@')[0]
              if (selectedChat == e.email) {
                if (!document.getElementById('lab-chat-room')) chatRoom(e.email, e.messages, e.status, type)
              }
              if (!document.getElementById(`lab-chat-user-contact-${userContact}`)) {
                const contact = lab_design_system_d("div", `chat-user-contact-${userContact}`, users, 0, 0, ["chat", "contact"])
                const contactAvatar = lab_design_system_d("img", `chat-user-avatar-${userContact}`, contact)
                contactAvatar.setAttribute('src', `${oldSRC}/avatar.svg`)
                contactAvatar.style.width = '100%'
                contactAvatar.style.aspectRatio = '1'
                contactAvatar.style.boxSizing = 'border-box'
                contactAvatar.style.borderRadius = '50%'
                if (selectedChat == e.email) {
                  contactAvatar.style.border = '2px solid #FED05E'
                  contactAvatar.classList.add('selected-chat')
                }
                const contactEmail = lab_design_system_d("div", `chat-user-${userContact}`, contact, userContact, 0, ["chat", "email"])

                contact.addEventListener('click', () => {
                  selectedChat = e.email
                  let last = document.querySelector('.selected-chat')
                  if (last) {
                    last.style.border = 'none'
                    last.classList.remove('selected-chat')
                  }
                  contactAvatar.classList.add('selected-chat')
                  contactAvatar.style.border = '2px solid #FED05E'

                  if (contact.querySelector('.lab-label')) {
                    contact.removeChild(contact.querySelector('.lab-label'))
                  }

                  chatRoom(e.email, e.messages, e.status)

                })
              }

            }

            if (e.expeditor) {
              const messageFromUser = messagesArray.filter(i => i.expeditor == e.expeditor)

              if (selectedChat != e.expeditor) {
                const userContact = e.expeditor.split('@')[0]
                const chatUser = document.getElementById(`lab-chat-user-contact-${userContact}`)
                const messageLabel = lab_design_system_d("div", `chat-user-message-label-${userContact}`, chatUser, String(messageFromUser.length), 'label', ["chat", "label"])
              }
              else {
                const userLSG = lab_local_storage_object('global')
                userLSG.expeditor = e.expeditor
                socket.emit('moveNewMessagesToMessages', userLSG)
              }
            }

          })
        }

        parseMessages(reloadMessages.data.messages, 'my')
        parseMessages(reloadMessages.data.newMessages, 'new')


        setInterval(() => {
          socket.emit('fetchMessages', lab_local_storage_object('global'), mes => {
            if (mes.data.newMessages && mes.data.newMessages.length > 0) {
              parseMessages(reloadMessages.data.messages, 'my')
              parseMessages(reloadMessages.data.newMessages, 'new')
            }
          })
        }, 1000);


      }
    })


    lab_fade_in_recursively(wrap, 0.3)
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

function plans(dashObject) {
  const parent = dashObject.parent, lngData = dashObject.lngData, closeAction = dashObject.closeAction


  const tariff = [
    {
      title: lngData.free,
      description: lngData.tariff_free_description,
      price: {
        mounth: 0,
        year: 0
      },
      points: [
        lngData.creation_of_3_projects,
        lngData.disk_space_limit + ' 200mb',
        lngData.content_and_plugins_basic
      ],
      color: {
        label: "black",
        value: "#243042"
      }
    },
    {
      title: lngData.personnal_plan,
      description: lngData.tariff_personal_description,
      price: {
        mounth: 35,
        year: 420
      },
      points: [
        lngData.creation_of_15_projects,
        lngData.disk_space_limit + ' 1GB',
        lngData.export_formats,
        lngData.linking_your_domain,
        lngData.content_and_plugins_basic,
        lngData.content_and_plugins_pro,

      ],
      color: {
        label: "green",
        value: "#3e8483"
      }
    },
    {
      title: lngData.business_lite,
      description: lngData.tariff_business_lite_description,
      price: {
        mounth: 60,
        year: 720
      },
      points: [
        lngData.unlimited_project_creation,
        lngData.disk_space_limit + ' 10GB',
        '5 ' + lngData.collaborators,
        lngData.export_formats,
        lngData.linking_your_domain,
        lngData.content_and_plugins_basic,
        lngData.content_and_plugins_pro,
      ],
      subPoints: [
        lngData.full_transfer_of_source_code_rights,
        lngData.using_ai,
        lngData.ephemeral_sharing,
        lngData.payment_tools,
        lngData.automaticly_daily_backup
      ],
      color: {
        label: "orange",
        value: "#ff642a"
      }
    },
    {
      title: lngData.business_premium,
      description: lngData.tariff_business_premium_description,
      price: {
        mounth: 350,
        year: 4200
      },
      points: [
        lngData.unlimited_project_creation,
        lngData.disk_space_limit + ' 50GB',
        '15 ' + lngData.collaborators,
        lngData.export_formats,
        lngData.linking_your_domain,
        lngData.content_and_plugins_basic,
        lngData.content_and_plugins_pro,
        lngData.content_and_plugins_vip
      ],
      subPoints: [
        lngData.full_transfer_of_source_code_rights,
        lngData.using_ai,
        lngData.ephemeral_sharing,
        lngData.payment_tools,
        lngData.automaticly_daily_backup,
        lngData.ecommerce,
        lngData.access_to_training_materials
      ],
      color: {
        label: "blue",
        value: "#2463eb"
      }
    },
    {
      title: lngData.tailored,
      description: lngData.tariff_tailored_description,
      heading: lngData.on_request,
      color: {
        label: "yellow",
        value: "#fed05e"
      }
    }
  ]

  const top = lab_design_system_d("div", "plans-top", parent, 0, 0, ["plans", "top"])
  const heading = lab_design_system_d("span", "plans-heading", top, 'Tariff plans', 0, ["plans", "heading"])
  const subHeading = lab_design_system_d("p", "plans-sub-heading", top, lngData.tariff_heading, 0, ["plans", "text"])

  const close = lab_design_system_d("button", "plans-close", top, '<', 0, ['plans', 'close'])
  close.addEventListener('click', () => closeAction())
  let activeDuration = 'mounth'

  const plansMass = { 'mounth': lngData.monthly, 'year': lngData.yearly_payment }
  const switcher = lab_design_system_d("div", "plans-switcher", top, 0, 0, ["plans", "switcher"])

  Object.keys(plansMass).forEach(e => {
    const switcherBtn = lab_design_system_d("button", `plans-switcher-${e}`, switcher, plansMass[e], 0, ["plans", "switcherBtn"])
    if (e == activeDuration) {
      switcherBtn.style.background = '#FED05E'
      switcherBtn.style.fontWeight = '700'
    }
    switcherBtn.addEventListener('click', () => {
      if (e != activeDuration) {
        let last = document.getElementById(`lab-plans-switcher-${activeDuration}`)
        last.style.background = 'transparent'
        last.style.fontWeight = '500'

        switcherBtn.style.background = '#FED05E'
        switcherBtn.style.fontWeight = '700'
        activeDuration = e
        renderPlans(activeDuration)
      }
    })
  })

  const wrap = lab_design_system_d("div", "plans", parent, 0, 0, ["plans", "wrap"])

  function renderPlans(dur) {
    wrap.innerHTML = ''

    tariff.forEach((e, index) => {
      const item = lab_design_system_d("div", `plans-${index}`, wrap, 0, 0, ["plans", "plan"])
      const angle = lab_design_system_d("img", `plans-angle-${index}`, item, 0, 0, ["plans", "angle"])
      angle.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/point-card-${e.color.label}.svg`)
      const title = lab_design_system_d("span", `plans-title-${index}`, item, e.title, 0, ["plans", "title"])
      const description = lab_design_system_d("p", `plans-description-${index}`, item, e.description, 0, ["plans", "description"])
      if (e.price) {

        const priceBox = lab_design_system_d("div", `plans-box-${index}`, item, 0, 0, ["plans", "box"])
        const currency = lab_design_system_d("div", `plans-currency-${index}`, priceBox, 'usd ', 0, 0)
        const price = lab_design_system_d("div", `plans-price-${index}`, priceBox, String(e.price[dur]), 0, ["plans", "price"])
        const duration = lab_design_system_d("div", `plans-duration-${index}`, priceBox, ' /month', 0, 0)
      }
      function renderPoint(list, type = '') {
        const points = lab_design_system_d("div", `points-${type}-${index}`, item, 0, 0, ['plans', 'points'])
        list.forEach((p, i) => {
          const point = lab_design_system_d("div", `point-${type}-${index}-${i}`, points, 0, 0, ['plans', 'point'])
          const img = lab_design_system_d("img", `point-img-${type}-${index}-${i}`, point)
          img.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/point-${e.color.label}.svg`)
          const span = lab_design_system_d("span", `point-text-${type}-${index}-${i}`, point, p, 0, (type ? ['plans', type] : 0))
        })
      }

      e.points && renderPoint(e.points)
      e.subPoints && renderPoint(e.points, 'bold')

      e.heading && lab_design_system_d("span", `heading-${index}`, item, e.heading, 0, ['plans', 'heading'])

      if (index != 4) {
        const btn = lab_design_system_d("button", `plan-btn-${index}`, item, lngData.choose_plan, 0, ['plans', 'btn'])
        btn.addEventListener('click', () => {
          plan_payment_steps(parent, e.title, e.price[dur])
        })
        btn.style.backgroundColor = e.color.value
      } else {
        const btn = lab_design_system_d("a", `plan-btn-${index}`, item, lngData.contact_us, 0, ['plans', 'btn'])
        btn.setAttribute('href', 'mailto:contact@laboranth.tech')
        btn.style.textDecoration = 'none'
        btn.style.backgroundColor = e.color.value
        e.color.label == 'yellow' && (btn.style.color = '#000')
      }

    })

    lab_fade_in_recursively(wrap, 0.3)

  }
  lab_fade_in_recursively(top, 0.3)
  renderPlans(activeDuration)


}

function select(label, list, parent, value, func) {
  const select = lab_design_system_d("div", `select-${value}`, parent, null, null, ["select", "box"])
  const top = lab_design_system_d("div", `select-top-${value}`, select, null, null, ["select", "top"])
  const topSpan = lab_design_system_d("span", `selected-${value}`, top, label, null)
  const listing = lab_design_system_d("div", `select-list-${value}`, select, null, null, ["select", "list"])
  const arrow = lab_design_system_d("img", `select-arrow-${value}`, top, null, null)
  arrow.src = "https://laboranth.tech/D/R/IMG/CLA/arrow_drop_down.svg"

  Object.keys(list).forEach(e => {
    const item = lab_design_system_d("div", `select-item-${e}-${value}`, listing, list[e], "select-item")
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
  const popupWrap = lab_design_system_d("div", `popup-wrap-${id}`, parent, null, null, ["popup", "wrap"])
  const popup = lab_design_system_d("div", `popup-${id}`, parent, null, null, ["popup", "box"])
  const popupContent = lab_design_system_d("div", `popup-content-${id}`, popup, null, null, ["popup", "content"])
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
  let activeOption = 'dash'

  const line = lab_design_system_d("div", "alt-label-line", parent, null, null, ["parameters", "line"])

  const shortcuts = select(functionalitiesList.dash, functionalitiesList, line, activeOption, (e) => {
    activeOption = e
    socket.emit('userShortcuts', lab_local_storage_object('global'), callback => {
      applyShortcuts(callback.data)
    })
  })

  const altLabel = lab_design_system_d("div", "alt-label", line, "CTRL | CMD +", null)
  let width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"

  const keyInput = input('', '', line, null, width)
  keyInput.setAttribute('readonly', true)
  keyInput.addEventListener('keydown', e => {
    e.preventDefault()
    keyInput.value = e.key
  })

  const buttons = lab_design_system_d("div", "alt-buttons-line", parent, null, null, ["parameters", "line"])

  const reinitialize = lab_design_system_d("button", "reinitialize", buttons, u.lngData.reinitialize, null, ['buttons', 'grey'])
  const save = lab_design_system_d("button", "save", buttons, u.lngData.save, null, ['buttons', 'action'])

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

  const parametersWrap = lab_design_system_d("div", "parameters-wrapper", rootLayer, null, null, ["parameters", "wrapper"])

  const parameters = lab_design_system_d("div", "parameters", rootLayer, null, null, ["parameters", "popup"])

  parametersWrap.addEventListener("click", () => {
    rootLayer.removeChild(parametersWrap)
    rootLayer.removeChild(parameters)
  })


  const side = lab_design_system_d("div", "parameters-side", parameters, null, null, ["parameters", "side"])

  const boxWrap = lab_design_system_d("div", "parameters-box", parameters, null, null, ["parameters", "box"])

  const user = lab_design_system_d("div", "profile-user", side, null, null)
  user.style.margin = " 0 0 40px 0"

  const userName = lab_design_system_d("span", "profile-user-name", user, u.email.split("@")[0], null)

  function tab(tabValue) {

    activeTab = tabValue
    let width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"

    boxWrap.innerHTML = ""

    if (tabValue == "profile") {
      const line = lab_design_system_d("div", "profile-box-a", boxWrap, null, null, ["parameters", "line"])

      const mail = lab_design_system_d("span", "profile-box-mail", line, u.lngData.email, null)
      const mailValue = lab_design_system_d("p", "profile-box-d3csw", line, u.email, null)

      // const userAvatarLine = lab_design_system_d("span", "profile-box-avatar", boxWrap, null, null, ["parameters", "line"])
      // const userAvatar = lab_design_system_d("span", "profile-box-avatar-text", userAvatarLine, 'Avatar', null)
      // const userAvatarPic = lab_design_system_d("div", "profile-box-avatar-pic", userAvatarLine, 0, 0, ['elements', 'avatarBox'])

      // const userAvatarImg = lab_design_system_d("img", "profile-box-avatar-img", userAvatarPic, 0, 0)
      // userAvatarImg.setAttribute('src', `${oldSRC}/avatar.svg`)
      // userAvatarImg.style.width = '60px'
      // userAvatarImg.style.height = '60px'
      // userAvatarImg.style.objectFit = 'cover'
      // userAvatarImg.style.border = '2px solid #000'
      // userAvatarImg.style.borderRadius = '50%'


      // const inputImg = lab_design_system_d("input", "input-img", userAvatarPic)
      // inputImg.style.width = '0'
      // inputImg.style.height = '0'
      // inputImg.setAttribute('type', 'file')

      // const inputImgLabel = lab_design_system_d("label", "input-img-label", userAvatarPic)
      // inputImgLabel.setAttribute('for', 'lab-input-img')
      // inputImgLabel.style.width = '60px'
      // inputImgLabel.style.height = '60px'
      // inputImgLabel.style.cursor = 'pointer'
      // inputImgLabel.style.marginTop = '-60px'

      // inputImg.addEventListener('change', (e) => {
      //   const fileInfo = e.target.files[0];
      //   userAvatarImg.setAttribute('src', URL.createObjectURL(fileInfo))
      // });


      const password = lab_design_system_d("div", "profile-box-pass", boxWrap, null, null, ["parameters", "line"])
      const passwordSpan = lab_design_system_d("span", "profile-box-passord", password, u.lngData.password, null)
      const confirm = lab_design_system_d("div", "profile-box-conf", password, null, null, ["parameters", "confirm"])

      const passwordInput = input(u.lngData.new_password, "password", confirm, null, width)
      const passwordConfirm = input(u.lngData.confirm, "confirm-password", confirm, null, width)

      const profileButtons = lab_design_system_d("div", "profile-buttons", boxWrap, null, null, ["parameters", "buttons"])

      const save = lab_design_system_d("button", "profile-button-save", profileButtons, u.lngData.save, null, ["buttons", "action"])

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

      const del = lab_design_system_d("button", "profile-button-del", profileButtons, u.lngData.account_deletion, null, ["buttons", "grey"])

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

      const theme = lab_design_system_d("div", "parameters-theme", boxWrap, null, null, ["parameters", "line"])
      themeSwitch(boxWrap)

      const themeTitle = lab_design_system_d("span", "theme-heading", theme, u.lngData.interface_theme, null)
      theme.style.zIndex = "1"
      select(themes[u.configs.ui], themes, theme, "theme", (val) => {
        const userLSG = lab_local_storage_object('global')
        userLSG.newUI = val
        socket.emit('switchUI', userLSG)
      })

      const language = lab_design_system_d("div", "profile-box-language", boxWrap, null, null, ["parameters", "line"])
      const languageTitle = lab_design_system_d("span", "profile-language", language, u.lngData.language, null)

      select(langs[u.lng], langs, language, "language", (lng) => {
        const userLSG = lab_local_storage_object_update("global", { manualLng: lng })
        userLSG.config = "updateLng"
        socket.emit("userConfigsUpdate", lab_local_storage_object("global"))
      })
      const news = lab_design_system_d("div", "news", boxWrap, null, null, ["parameters", "line"])

      const newsTitle = lab_design_system_d("span", "news-title", news, 'Receive news by email')



      const checkBox = lab_design_system_d("input", "checkbox", news, null, null, ["elements", "checkBox"]);
      checkBox.setAttribute('type', 'checkbox')


      const sftp = lab_design_system_d("div", "profile-box-sftp", boxWrap, null, null, ["parameters", "line"])
      const sftpTitle = lab_design_system_d("span", "profile-sftp", sftp, u.lngData.sftp_connection, null)

      const sftpBtn = lab_design_system_d("div", "profile-btn-sftp", sftp, u.lngData.generate_the_key, null, ["buttons", "action"])

      sftpBtn.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"
      sftpBtn.addEventListener("click", () => {
        const userLSG = lab_local_storage_object("global")
        socket.emit("getSftpKey", userLSG)
      })
      const publicId = lab_design_system_d("div", "profile-box-public", boxWrap, null, null, ["parameters", "line"])
      const publicIdTitle = lab_design_system_d("span", "profile-public", publicId, u.lngData.public_id, null)

      let publicIdInput = input("", "publicId", publicId, null, width)

      const publicIdBtn = lab_design_system_d("button", "publicId-btn", publicId, u.lngData.save, null, ["buttons", "action"])


      publicIdBtn.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"
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

      const collaborators = lab_design_system_d("div", "collaborators", boxWrap, null, null, ["parameters", "line"])

      const collaboratorsTitle = lab_design_system_d("span", "profile-collaborators", collaborators, u.lngData.collaborators, null)

      const collaboratorsBtn = lab_design_system_d("button", "collaborators-btn", collaborators, u.lngData.edit, null, ["buttons", "action"])

      collaboratorsBtn.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"


      const rights = {
        "designer": u.lngData.designer,
        "developer": u.lngData.developer,
        "administrator": u.lngData.administrator,
      }

      collaboratorsBtn.addEventListener("click", () => {
        boxWrap.innerHTML = ""
        const newCollaborator = lab_design_system_d("span", `new-collaborator`, boxWrap, u.lngData.add_a_collaborator, null)

        const collaboratorsList = lab_design_system_d("div", "collaborators-list", boxWrap, null, null, ["parameters", "line"])

        input("", "collaborator-email", collaboratorsList, null, width)
        const addCollaborator = lab_design_system_d("button", "add-collaborator", collaboratorsList, u.lngData.add, null, ["buttons", "action"])

        addCollaborator.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"

        let len = u.configs.collaboratorsLIST.length;

        u.configs.collaboratorsLIST.forEach((e, index) => {

          const collaboratorsItem = lab_design_system_d("div", `collaborators-list-${index}`, boxWrap, null, null, ["parameters", "line"])
          collaboratorsItem.style.zIndex = len
          const collaboratorEmail = lab_design_system_d("span", `collaborator-emeil-${index}`, collaboratorsItem, e.collaborator_email, null)

          const collabRights = select(rights[e.rights.preset], rights, collaboratorsItem, `collaborator-rights-${index}`, (value) => {
            const userLSG = lab_local_storage_object("global")
            userLSG.collaborator = e.collaborator_email
            userLSG.new_preset = value
            socket.emit("updateCollaboratorPreset", userLSG)
          })
          collabRights.style.margin = "0 10px 0 auto"

          const deleteCollaborator = lab_design_system_d("button", `delete-collaborator-${index}`, collaboratorsItem, u.lngData.delete, null, ["buttons", "action"])

          deleteCollaborator.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"

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
      const line = lab_design_system_d("div", "profile-box-voice", boxWrap, null, null, ["parameters", "line"])

      const voice = lab_design_system_d("span", "voice-command", line, u.lngData.vocal_command, null)

      if (checkMicrophoneStatus()) {
        const voiceBtn = lab_design_system_d("button", "voice-activate", line, u.lngData.activate, null, ["buttons", "action"])
        voiceBtn.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"
        voiceBtn.addEventListener("click", () => {
          lab_vocal_control("on", u.lng)
          lab_local_storage_object_update("global", { speech: "enabled" })
          location.reload()
        })
      }
      else {
        const voiceBtn = lab_design_system_d("button", "voice-activate", line, u.lngData.disable, null, ["buttons", "grey"])
        voiceBtn.style.width = lab_orientation == "Portrait" ? "100%" : "clamp(120px, 15svw, 160px)"
        voiceBtn.addEventListener("click", () => {
          lab_vocal_control("off")
          lab_local_storage_object_update("global", { speech: "disabled" })
          location.reload()
        })

      }
      shortcutsSettings(u, boxWrap)


    }
    else if (tabValue == "git") {


      //Git

      const gitUserName = lab_design_system_d("div", "git-user-name", boxWrap, null, null, ["parameters", "line"])
      const gitName = lab_design_system_d("span", "git-name", gitUserName, "Nom d'utilisateur Git")
      const gitNameInput = input("", "gitNameInput", gitUserName, null, width)

      const gitUserEmail = lab_design_system_d("div", "git-user-email", boxWrap, null, null, ["parameters", "line"])
      const gitEmail = lab_design_system_d("span", "git-email", gitUserEmail, "Email Github")

      const gitEmailInput = input("", "gitEmailInput", gitUserEmail, null, width)

      const gitUserToken = lab_design_system_d("div", "git-user-token", boxWrap, null, null, ["parameters", "line"])

      const gitToken = lab_design_system_d("span", "git-token", gitUserToken, "Personal Access Token (PAT)")

      const gitTokenInput = input("", "gitTokenInput", gitUserToken, null, width)

      if (u.configs.gitCredentials) {
        gitNameInput.value = u.configs.gitCredentials.userName
        gitEmailInput.value = u.configs.gitCredentials.email
        gitTokenInput.value = u.configs.gitCredentials.PATtoken
      }


      const gitBtn = lab_design_system_d("button", "collaborators-btn", boxWrap, 'Enregistrer les identifiants', null, ["buttons", "action"])

      gitBtn.style.width = lab_orientation == "Portrait" ? "100%" : "fit-content"

      gitBtn.addEventListener('click', () => {
        if (gitNameInput.value && gitEmailInput.value && gitTokenInput.value) {
          u.configs.gitCredentials = {
            "userName": gitNameInput.value,
            "email": gitEmailInput.value,
            "PATtoken": gitTokenInput.value
          }
          console.log(u);

          // socket.emit("userConfigsUpdate", lab_local_storage_object('global'))
        } else {
          alertUser(u.lngData.input_cannot_be_empty)
        }
      })

    }
    lab_fade_in_recursively(boxWrap, 0.5)
  }


  const tabButtons = lab_design_system_d("div", "tab-buttons", side, null, null)
  tabButtons.style.position = "relative"

  const tabs = {
    "profile": u.lngData.profile,
    "settings": u.lngData.settings,
    "controls": u.lngData.controls,
    "git": "Git"
  }

  const white = lab_design_system_d("div", "active-white", tabButtons, null, null, ["parameters", "white"])

  Object.keys(tabs).forEach((e, index) => {
    const tabBtn = lab_design_system_d("button", `parameters-tabs-${e}`, tabButtons, tabs[e], null, ["parameters", "btn"])
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
  const input = lab_design_system_d("input", `input-${value}`, parent, null, null, (style || ["input", "box"]))
  input.placeholder = placeholder
  width ? input.style.width = `${width}` : ""

  func && input.addEventListener("input", () => func(input.value))
  return input
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

function themeSwitch(parent) {
  let theme = localStorage.getItem('theme')

  const themeSwitcher = lab_design_system_d("div", "theme-switcher", parent, null, null, ["elements", "theme"])
  const colorTheme = lab_design_system_d("div", "color-theme", themeSwitcher, null, null, ["elements", "lightTheme"])
  const darkTheme = lab_design_system_d("img", "img-theme", colorTheme, null, null)
  darkTheme.setAttribute("src", "https://laboranth.tech/D/R/IMG/CLA/nightlight.svg")
  darkTheme.style.width = "0"

  if (theme == 'dark') {
    themeSwitcher.style.justifyContent = "end"
    colorTheme.style.background = "transparent"
    colorTheme.style.transform = "rotate(-180deg)"
    darkTheme.style.width = "auto"
  }

  themeSwitcher.addEventListener("click", () => {
    themeSwitcher.style.justifyContent = themeSwitcher.style.justifyContent == "end" ? "start" : "end"
    colorTheme.style.background = colorTheme.style.background == "rgb(252, 206, 92)" ? "transparent" : "rgb(252, 206, 92)"
    colorTheme.style.transform = colorTheme.style.transform == "rotate(-180deg)" ? "none" : "rotate(-180deg)"
    darkTheme.style.width = darkTheme.style.width == "auto" ? "0" : "auto"
    const color = localStorage.getItem('theme')
    localStorage.setItem('theme', (color == 'light' ? "dark" : "light"))

    setTheme(rootLayer)
  })


}

function footer(parent) {
  rootLayer.setAttribute('class', 'lab-laboranth-scroll-classic')
  const footer = lab_design_system_d("div", "footer", parent, null, null, ['containers', 'footer'])
  const text = lab_design_system_d("span", "date", footer, `Laboranth>  |  ${new Date().getFullYear()}`, null, ['elements', 'date'])

  const link = lab_design_system_d("a", "legal", footer, "Legal CGU/CGV", null, ['links', 'legal'])
  link.style.cursor = "pointer"
  link.addEventListener('click', e => {
    window.open('/D/R/PDF/LegalLaboranthSAS.pdf')
  })
  const version = lab_design_system_d("span", "version", footer, "RC Version")

  const contact = lab_design_system_d("a", "contacts", footer, "contact@laboranth.tech", null, ['links', 'contact'])
  contact.setAttribute("href", "mailto:contact@laboranth.tech")
}

function dashboard(dashObject) {
  let appList = dashObject.appList, externalApps = dashObject.externalApps, lngData = dashObject.lngData
  rootLayer.style.overflowY = "auto"
  let viewMyList = true
  const wrapper = lab_design_system_d("div", "body-wrapper", rootLayer, 0, 0, ["pages", "dash"])
  const header = lab_design_system_d("header", "header", wrapper, 0, 0, ["containers", "header"])
  const content = lab_design_system_d("div", "content-box", wrapper, null, null, null)
  const headerWrap = lab_design_system_d("div", "header-wrap", header, 0, 0, ["containers", "headerWrap"])
  let headerLayout = lab_orientation == "Portrait" ? headerWrap : header

  const logo = lab_design_system_d("a", "logo", header, 0, 0, null);
  logo.setAttribute("href", "/")
  const logoImg = lab_design_system_d("img", "logo-img", logo, null, null, ["logo", "small"]);
  logoImg.setAttribute("src", "https://laboranth.tech/D/R/IMG/logoAlt.svg")



  if (externalApps.length > 0) {
    const shared = lab_design_system_d("button", "shared-btn", headerLayout, null, null, ["elements", "share"]);
    const sharedIcon = lab_design_system_d("img", "shared-img", shared);
    sharedIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/share.svg')
    sharedIcon.style.width = '100%'
    shared.addEventListener("click", () => {
      viewMyList = !viewMyList
      viewMyList ? renderList(appList) : renderList(externalApps)
      shared.style.transform = shared.style.transform == 'rotate(70deg)' ? "none" : "rotate(70deg)"
    })

  }



  const searchBox = lab_design_system_d("div", "search-box", headerLayout, null, null, ["search", "box"])
  const searchImage = lab_design_system_d("img", "search-img", searchBox, null, null, null)
  searchImage.setAttribute("src", "https://laboranth.tech/D/R/IMG/CLA/search.svg")

  const searchInput = lab_design_system_d("input", "search", searchBox, null, "search", ["search", "input"])

  const result = lab_design_system_d("div", "result", searchBox, null, null, ["search", "result"])

  searchInput.addEventListener("input", () => {
    result.innerHTML = ""
    if (searchInput.value.length) {
      myList = search(viewMyList ? appList : externalApps, searchInput.value)
      if (myList.length) {
        myList.forEach((item, index) => {
          const resultItem = lab_design_system_d("a", `result-${item}`, result, item, null, ["search", !index ? "first" : "item"])
          resultItem.setAttribute("href", `./${item}/home`)
        })
      }
    }
    lab_fade_in_recursively(result, 0.6)

  })

  const gridSwitch = lab_design_system_d("div", "grid-switch", headerLayout, null, null, ["elements", "gridSwitch"])


  const gridLayouts = ["row", "column"]
  gridLayouts.forEach(e => {
    let activeSwitch = localStorage.getItem('layout') || 'row'

    const btn = lab_design_system_d("button", `grid-switch-${e}`, gridSwitch, null, null, ["elements", "gridBtn"])

    e == activeSwitch && (btn.style.background = "#fff")

    const icon = lab_design_system_d("img", `grid-icon-${e}`, btn)
    icon.setAttribute("src", `https://laboranth.tech/D/R/IMG/CLA/${e}.svg`)
    icon.style.maxWidth = "100%"

    btn.addEventListener("click", () => {
      activeSwitch = localStorage.getItem('layout')
      if (e != activeSwitch) {
        document.getElementById(`lab-grid-switch-${e == "row" ? "column" : "row"}`).style.background = "transparent"
        btn.style.background = "#fff"
        localStorage.setItem('layout', e)

        activeSwitch = e

        viewMyList ? renderList(appList, e) : renderList(externalApps, e)
      }
    })
  })

  const create = lab_design_system_d("button", "create-btn", header, 'lngData.create', null, ["buttons", "action"])
  create.style.height = 'clamp(35px, 5svh, 50px)'
  create.style.boxSizing = 'border-box'
  create.style.paddingBottom = '0'
  create.style.paddingTop = '0'

  create.addEventListener("click", () => {
    if (!document.getElementById('lab-popup-create-app')) {
      const createPopup = popup("create-app", rootLayer)
      const popupTitle = lab_design_system_d("span", "popup-title", createPopup, 'lngData.create_app', null, ["popup", "title"])

      const popupInput = input("name", "create", createPopup, null, "100%", ["popup", "input"])
      const createPopupBtn = lab_design_system_d("button", "create-popup-btn", createPopup, 'lngData.create', null, ["buttons", "action"])

      lab_fade_in_recursively(createPopup, 0.3)

      const lab_user_current_config = lab_local_storage_object("global")

      createPopupBtn.addEventListener("click", () => {
        lab_user_current_config.newApp = popupInput.value
        socket.emit("createApp", lab_user_current_config)
        window.reload()
      })
    }
  })

  const cahtBtn = lab_design_system_d("button", "chats", header, null, null, ["elements", "chatsBtn"])
  const cahtIcon = lab_design_system_d("img", "cahts-icon", cahtBtn)
  cahtIcon.style.width = '100%'
  cahtIcon.setAttribute('src', `${oldSRC}chat.svg`)
  cahtBtn.addEventListener('click', () => { chat(rootLayer, lngData) })

  const avatar = lab_design_system_d("button", "user-avatar", header, null, null, ["elements", "avatar"])
  const avatarIcon = lab_design_system_d("img", "user-avatar-icon", avatar, null, null, ["elements", "avatarIcon"])

  avatarIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/profile.svg')

  avatar.addEventListener("click", () => {

    if (document.getElementById("lab-header-menu")) {
      const menu = document.getElementById("lab-header-menu")
      avatar.removeChild(menu)
    } else {
      const headerMenu = lab_design_system_d("div", "header-menu", avatar, null, null, ["header", "menu"])

      headerMenu.addEventListener("mouseleave", () => {
        avatar.removeChild(headerMenu)
      })

      const menuList = ["settings", "plans", "logout"]

      menuList.forEach(e => {
        const item = lab_design_system_d("a", `menu-${e}`, headerMenu, e, null, ["header", "link"])
        const image = lab_design_system_d("img", `${e}-img`, item, null, null, null)
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
          else if (e == 'plans') {
            content.innerHTML = ''

            lab_load_language_module(res.configs.language).then(lngData => {
              res.lngData = lngData
              res.lng = res.configs.language
              dash_parameters(res)
            })

            plans({ parent: content, lngData: plansLng, closeAction: renderList })
            // lab_load_component('/D/C/UI/GLOB/lab_plans.js', { parent: content, lngData: lngData, closeAction: renderList })
          }
        })
      })

      lab_fade_in_recursively(headerMenu, 0.6)

    }
  })


  function renderList(list = appList, direction = "row") {
    if (localStorage.getItem('layout') == 'column') {
      direction = 'column'
    }
    content.innerHTML = ''
    const apps = lab_design_system_d("div", "app-list", content, null, null, ["apps", "list"])

    apps.innerHTML = ""
    let len = list.length

    list.forEach(e => {
      if (!e.startsWith('.')) {
        const project = lab_design_system_d("div", `project-${e}`, apps, null, null, ["apps", direction])
        project.addEventListener("mouseover", () => {
          project.style.transform = "scale(1.01)";
        })
        project.addEventListener("mouseleave", () => {
          project.style.transform = "none";
        })

        const previewBox = lab_design_system_d("div", `item-preview-${e}`, project, null, null, ["apps", "preview"])

        previewBox.addEventListener("click", () => {
          lab_local_storage_object_update("global", { "ctx": "Application", "app": e, "section": "home", "externalApp": false })
          window.open(window.location.href + e + "/" + "home", "_self")
        })

        const preview = lab_design_system_d("img", `item-img-${e}`, previewBox, null, null)

        const bottom = lab_design_system_d("div", `apps-item-wrap-${e}`, project, null, null, ["apps", `wrap-${direction}`])
        const text = lab_design_system_d("span", `apps-item-${e}`, bottom, e, null, null)

        text.addEventListener("click", () => {
          lab_local_storage_object_update("global", { "ctx": "Application", "app": e, "section": "home", "externalApp": false })
          window.open(window.location.href + e + "/" + "home", "_self")
        })

        const img = lab_design_system_d("img", `apps-item-img-${e}`, bottom, null, null, null)

        img.setAttribute("src", "https://laboranth.tech/D/R/IMG/CLA/more_vert.svg")
        img.style.transform = 'rotate(90deg)'

        img.addEventListener("click", () => {

          if (document.getElementById("apps-item-menu")) {
            project.removeChild(document.getElementById(`apps-item-menu`))
          } else {
            const itemMenu = lab_design_system_d("div", `apps-item-menu`, project, null, null, ["apps", "menu"])

            const menuImg = lab_design_system_d("img", `apps-menu-img-${e}`, itemMenu, null, null, ["apps", "more"])

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

  function renderMenu(itemMenu, e, parent, lngData) {
    const itemMenuBox = lab_design_system_d("div", `apps-item-box-${e}`, itemMenu, null, null, ["apps", "box"])
    const menuItems = ["settings", "copy", "delete"]



    itemMenu.addEventListener("mouseleave", () => {
      parent.removeChild(itemMenu)
    })

    menuItems.forEach(p => {
      const item = lab_design_system_d("button", `project-menu-${p}`, itemMenuBox, lngData[p], null, ["apps", "settings"])
      const itemImg = lab_design_system_d("img", `project-menu-img-${p}`, item, null, null)
      itemImg.style.transform = 'rotate(-deg)'
      itemImg.setAttribute("src", `https://laboranth.tech/D/R/IMG/CLA/${p}.svg`)

      item.addEventListener("click", () => {
        appActions(e, p)
      })
    })

    lab_fade_in_recursively(itemMenu, 0.6)
  }

  function appActions(e, action) {

    if (action == "copy") {
      if (!document.getElementById('lab-popup-copy-app')) {
        const copyPopup = popup("copy-app", rootLayer)
        const popupTitle = lab_design_system_d("span", "popup-title", copyPopup, 'lngData.naming_app', null, ["popup", "title"])
        const inputName = input('', '', copyPopup, null, null, null)
        const copyPopupBtn = lab_design_system_d("button", "delete-popup-btn", copyPopup, 'lngData.copy', null, ["buttons", "action"])

        lab_fade_in_recursively(copyPopup, 0.3)

        copyPopupBtn.addEventListener("click", () => {
          if (inputName.value > 0) {
            if (!appList.includes(inputName.value)) {
              const userLSG = lab_local_storage_object('global')
              userLSG.srcApp = e
              userLSG.newApp = inputName.value
              socket.emit('duplicateAp', userLSG)
              document.getElementById('lab-popup-wrap-copy-app').remove()
              document.getElementById('lab-popup-copy-app').remove()
            }
            else {
              elertUser('An application with that name has already been created')
            }
          }
          else {
            alertUser(lngData.input_cannot_be_empty)
          }
        })
      }

    }
    else if (action == "delete") {
      if (!document.getElementById('lab-popup-delete-app')) {
        const deletePopup = popup("delete-app", rootLayer)
        const popupTitle = lab_design_system_d("span", "popup-title", deletePopup, 'Are you sure you want to uninstall the application', null, ["popup", "title"])

        const deletePopupBtn = lab_design_system_d("button", "delete-popup-btn", deletePopup, 'lngData.delete', null, ["buttons", "action"])

        lab_fade_in_recursively(deletePopup, 0.3)

        const lab_user_current_config = lab_local_storage_object("global")

        deletePopupBtn.addEventListener("click", () => {
          lab_user_current_config.appToDelete = e
          socket.emit("deleteApp", lab_user_current_config)
          document.querySelector(`#lab-project-${e}`).remove()
          document.getElementById('lab-popup-wrap-delete-app').remove()
          document.getElementById('lab-popup-delete-app').remove()
        })
      }

    }
    else if (action == "pages") console.log("pages");
    else if (action == "settings") console.log("settings");

  }


  renderList(appList)

  footer(wrapper)
  const theme = localStorage.getItem('theme')
  if (theme == 'dark') setTheme(rootLayer)

  lab_fade_in_recursively(wrapper, 0.3)

}


let appList = ["test", "test2", "test3", "test4", "test5", "test6", "7", "8", "9", "11", "12", "13", "14", "15", "16", "17", "77", "66", "55", "44", "54", "65", "7656", "4545"]
let externalApps = ["ext1", "ext2", "exfbgnt3", "4545"]

dashboard({ appList: appList, externalApps: externalApps })