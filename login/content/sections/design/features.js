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
    "styleWrapper": {
      "default": {
        "position": "relative",
        "maxWidth": "300px",
        "order": 3,
        "width": "100%",
        "padding": "0",
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
        width: '100%',
        aspectRatio: "1.7",
        position: 'relative',
        boxShadow: '0px 0px 50px 12px rgba(0, 0, 0, 0.1) inset'
      }
    },
    "fileBoxInput": {
      "default": {
        width: '100%',
        height: '100%',
        position: 'absolute',
        cursor: "pointer",
        left: 0,
        top: 0,
        zIndex: 2,
        opacity: 0
      }
    },
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
        "position": 'absolute',
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
let styles = styles_d


function lab_design_system(tag, id, parent, content, className, styled) {
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

function AppMenu(dashObj) {
  const userLSG = lab_local_storage_object('global')
  const lngData = dashObj.lngData
  if (userLSG.ctx = 'Laboranth') {
    userLSG.app = dashObj.selectedApp
    userLSG.section = 'home'
  }

  socket.emit('getAppData', userLSG, res => {
    sectionElementsObject = res
    const menuWrap = lab_design_system('div', 'app-menu-wrap', rootLayer, '', '', ['appMenu', 'wrap'])
    const menu = lab_design_system('div', 'app-menu', rootLayer, '', '', ['appMenu', 'menu'])
    const side = lab_design_system('div', 'app-menu-side', menu, '', '', ['appMenu', 'side'])
    const box = lab_design_system('div', 'app-menu-box', menu, '', '', ['appMenu', 'box'])

    let activeSlide;

    const sideButtons = {
      'backup': lngData.settings,
      'css': 'CSS',
      'js': 'JS',
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
      'laboranth_remote_server': lngData.laboranth_remote_server,
      "laboranth_deploy_git": "Git",
      "laboranth_deploy_zip": "Zip"
    }

    function Folders(value, type) {
      if (type == 'delete') {
        const userLSG = lab_local_storage_object('global')
        userLSG.mediaListToRemove = value
        socket.emit('deleteMediaList', userLSG)
      }
    }

    Object.keys(sideButtons).forEach(e => {
      const btn = lab_design_system('button', `app-menu-btn-${e}`, side, '', '', ['appMenu', 'sideBtn'])
      const icon = lab_design_system('img', `app-menu-btn-icon-${e}`, btn)
      const span = lab_design_system('span', `app-menu-btn-span-${e}`, btn, sideButtons[e])
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
        const wrapper = lab_design_system('div', 'app-menu-wrapper', box, '', 'scrollable', ['appMenu', 'wrapper'])
        dropDown(settings, settings.versioning, 'settings', (e) => Settings(e), wrapper)
        const setWrap = lab_design_system('div', 'setWrap', wrapper, '', '', ['appMenu', 'setWrap'])

        function Settings(name = 'versioning') {
          setWrap.innerHTML = ''
          if (name == 'versioning') {
            socket.emit("getUserBackups", lab_local_storage_object('global'), b => {
              const heading = lab_design_system('h6', 'manual-backup', setWrap, lngData.manual_management, '', ['appMenu', 'heading'])
              const row = lab_design_system('div', 'backup', setWrap, '', '', ['appMenu', 'execute'])
              row.style.position = 'relative'
              row.style.zIndex = 2
              const create = lab_design_system('button', `c-backup`, row, lngData.create, '', ['buttons', 'action'])
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

              const text = lab_design_system('span', `row-text`, row, lngData.load_a_previous_version)
              const previous = dropDown(b.manual, b.manual[0], 'previous-backup', null, row)
              previous.wrap.style.maxWidth = '200px'
              const upload = lab_design_system('button', `u-backup`, row, lngData.load, '', ['buttons', 'action'])
              upload.style.width = 'fit-content'
              upload.addEventListener('click', e => {
                const userLSG = lab_local_storage_object('global')
                userLSG.backupDate = previous.text.innerHTML
                socket.emit('eraseByBackup', userLSG)
              })

              const auto = lab_design_system('h6', 'auto-backup', setWrap, lngData.automatic_management, '', ['appMenu', 'heading'])
              const autoRow = lab_design_system('div', 'a-backup', setWrap, '', '', ['appMenu', 'execute'])
              const autoBack = dropDown(b.auto, b.auto[0], 'previous-backup-auto', null, autoRow)
              autoBack.wrap.style.maxWidth = '200px'

              const uploadAuto = lab_design_system('button', `u-backup-a`, autoRow, lngData.load, '', ['buttons', 'action'])
              uploadAuto.style.width = 'fit-content'

              uploadAuto.addEventListener('click', e => {
                const userLSG = lab_local_storage_object('global')
                userLSG.auto = true
                userLSG.day = autoBack.text.innerHTML
                socket.emit('eraseByBackup', userLSG)
              })
              lab_fade_in_recursively(box, 0.3)
            })
          }
          else if (name == 'pages_management') {
            const heading = lab_design_system('h6', 'app-menu-heading', setWrap, lngData.pages_management, '', ['appMenu', 'heading'])
            const scrollList = lab_design_system('div', 'scrollList', setWrap, '', 'scrollable', ['appMenu', 'scrollList'])
            const pList = lab_design_system('div', 'app-menu-act', scrollList, '', '', ['appMenu', 'DBList'])
            sectionElementsObject.sections.forEach((e, index) => {
              const pageLink = lab_design_system('div', `page-link-${index}`, pList, '', '', ['appMenu', 'db'])
              const name = lab_design_system('span', `page-name-${index}`, pageLink, e, '', ['appMenu', 'link'])
              name.style.width = '100%'
              name.style.cursor = 'pointer'
              name.addEventListener('click', () => {
                lab_local_storage_object_update('global', { "section": e })
                window.open(window.location.protocol + "//" + window.location.host + "/" + lab_local_storage_object('global').app + "/" + e, "_self")
              })

              const del = lab_design_system('button', `db-del-btn-${index}`, pageLink, '', '', ['appMenu', 'deleteBtn'])
              const delIcon = lab_design_system('img', `del-btn-icon-${index}`, del, '', '', ['design', 'icon'])
              delIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/close.svg')
              del.addEventListener('click', () => {
                let removeSectionObject = {
                  app: userLSG.app,
                  uid: userLSG.uid,
                  lng: userLSG.lng,
                  removingSection: e
                }
                if (e == sectionElementsObject.section) {
                  removeSectionObject.deleteCurrent = true
                } else {
                  removeSectionObject.deleteCurrent = false
                  pageLink.remove()
                }
                socket.emit('removeSection', removeSectionObject)
              })

            })
            const bottom = lab_design_system('div', `bottom`, setWrap, '', '', ['appMenu', 'execute'])
            const input = Input('act-name', bottom)
            input.style.minWidth = '220px'
            input.style.width = 'fit-content'
            const btn = lab_design_system('button', 'creare-page', bottom, lngData.add, '', ['buttons', 'action'])
            btn.style.width = 'fit-content'
            btn.addEventListener('click', (e) => {
              e.preventDefault()
              const regex = /^[A-Za-z0-9-._~]+$/
              if (input.value && regex.test(input.value)) {
                const lab_user_current_config = lab_local_storage_object('global')

                let addSectionObject = {
                  app: lab_user_current_config.app,
                  uid: lab_user_current_config.uid,
                  lng: lab_user_current_config.lng,
                  addingSection: input.value
                }

                socket.emit('addNewSection', addSectionObject)

              } else alertUser(lngData.column_name_cannot_be_empty)
            })
          }
          else if (name == 'libraries') {
            const heading = lab_design_system('h6', 'app-menu-heading', setWrap, lngData.libraries, '', ['appMenu', 'heading'])
            const scrollList = lab_design_system('div', 'scrollList', setWrap, '', 'scrollable', ['appMenu', 'scrollList'])
            const libList = lab_design_system('div', 'app-menu-act', scrollList, '', '', ['appMenu', 'DBList'])
            sectionElementsObject.configuration.scripts.forEach((e, index) => {
              const pageLink = lab_design_system('div', `library-link-${index}`, libList, '', '', ['appMenu', 'db'])
              const name = lab_design_system('span', `library-name-${index}`, pageLink, e, '', ['appMenu', 'link'])
              name.style.width = '100%'
              const del = lab_design_system('button', `db-del-btn-${index}`, pageLink, '', '', ['appMenu', 'deleteBtn'])
              const delIcon = lab_design_system('img', `del-btn-icon-${index}`, del, '', '', ['design', 'icon'])
              delIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/close.svg')
              del.addEventListener('click', () => {
                userLSG.scriptToDelete = e
                socket.emit('deleteLib', userLSG)
              })
            })

            const bottom = lab_design_system('div', `bottom`, setWrap, '', '', ['appMenu', 'execute'])
            const input = Input('act-name', bottom)
            input.style.minWidth = '220px'
            input.style.width = 'fit-content'
            const btn = lab_design_system('button', 'add-library', bottom, lngData.add, '', ['buttons', 'action'])
            btn.style.width = 'fit-content'
            btn.addEventListener('click', (e) => {
              e.preventDefault()
              if (input.value) {
                fetchLibrary(input.value)
              } else alertUser(lngData.column_name_cannot_be_empty)
            })
          }
          else if (name == 'ephemeral_sharing') {
            socket.emit("getUserBackups", lab_local_storage_object('global'), b => {
              const heading = lab_design_system('h6', 'manual-backup', setWrap, lngData.ephemeral_sharing, '', ['appMenu', 'heading'])
              const row = lab_design_system('div', 'backup', setWrap, '', '', ['appMenu', 'execute'])
              const text = lab_design_system('span', `row-text`, row, lngData.share_id)
              const id = Input('share', row)
              row.style.position = 'relative'
              row.style.zIndex = 2
              const update = lab_design_system('button', `c-backup`, row, lngData.update, '', ['buttons', 'action'])
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

              const autoRow = lab_design_system('div', 'a-backup', setWrap, '', '', ['appMenu', 'execute'])
              let duration
              const autoBack = dropDown(list, list['1'], 'previous-backup-auto', (e) => {
                duration = list[e]
              }, autoRow)
              autoBack.wrap.style.maxWidth = '200px'

              const load = lab_design_system('button', `u-backup-a`, autoRow, lngData.load, '', ['buttons', 'action'])
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
            const heading = lab_design_system('h6', 'app-menu-heading', setWrap, lngData.svg_fragmentation, '', ['appMenu', 'heading'])
            const importSvg = lab_design_system('button', `c-backup`, setWrap, lngData.import_svg, '', ['buttons', 'action'])
            importSvg.style.width = 'fit-content'

            importSvg.addEventListener('click', () => {
              getFile('svg', "lab-file-input")
              document.querySelector('#lab-file-input').click()
            })
          }
          else if (name == 'collaborative_mode') {
            const heading = lab_design_system('h6', 'app-menu-heading', setWrap, lngData.collaborative_mode, '', ['appMenu', 'heading'])
            const content = lab_design_system('div', 'app-menu-content', setWrap, '', '', ['appMenu', 'deploy'])
            const collaborators = lab_design_system('div', 'app-menu-collaborators', content, '', '', ['appMenu', 'collaborators'])
            const rights = lab_design_system('div', 'app-menu-rights', content, '', '', ['appMenu', 'collaborators'])
            const collabText = lab_design_system('span', 'collabs-head-text', collaborators, lngData.add_a_collaborator)
            const rightsText = lab_design_system('span', 'rights-text', rights, lngData.collaborators_rights)

            let collabs = sectionElementsObject.userConfigs.collaboratorsLIST.map(e => e.collaborator_email)


            const collRow = lab_design_system('div', 'collab-row', collaborators, '', '', ['appMenu', 'execute'])
            collRow.style.width = '100%'
            let selectedCol = collabs[0]

            function select(index) {
              selectedCol = collabs[index]
            }

            const list = dropDown(collabs, selectedCol, 'collabs', select, collRow)
            list.wrap.style.width = '60%'

            const del = lab_design_system('button', 'del-collab', collRow, lngData.delete, '', ['buttons', 'action'])
            del.style.width = '30%'

            del.addEventListener('click', () => {
              const userLSG = lab_local_storage_object('global')
              userLSG.collaborator_email = selectedCol
              socket.emit('removeCollaboratorFromProject', userLSG, res => {

              })
            })

            const row = lab_design_system('div', 'app-menu-row', collaborators, '', '', ['appMenu', 'execute'])
            row.style.width = '100%'

            const newCollaborator = Input('collab', row)
            newCollaborator.style.width = '60%'

            const add = lab_design_system('button', 'add-collab', row, lngData.add, '', ['buttons', 'action'])
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
            const rightsRow = lab_design_system('div', 'rightsRow', rights, '', '', ['appMenu', 'execute'])
            const rightsCollabs = dropDown(collabs, selected, 'collabs-rights', writeCollab, rightsRow)

            const pointers = lab_design_system('div', 'pointers', rights, '', '', ['appMenu', 'collaborators'])

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
                  const row = lab_design_system('div', `${e}-${i}`, pointers, '', '', ['appMenu', 'execute'])
                  const text = lab_design_system('span', `${e}-text`, row, e)
                  const check = lab_design_system('input', `${e}-check`, row, '', '', ['appMenu', 'checkbox'])
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
        const media = lab_design_system('div', 'app-menu-media', box, '', '', ['appMenu', 'media'])
        const folders = lab_design_system('div', 'app-menu-fold', media, '', '', ['appMenu', 'fold'])
        const wrapper = lab_design_system('div', 'app-menu-wrapper', media, '', 'scrollable', ['appMenu', 'wrapper'])
        const files = lab_design_system('div', 'app-menu-files', wrapper, '', '', ['appMenu', 'files'])
        if (sectionElementsObject.mediaLists && sectionElementsObject.mediaLists.length > 0) {
          sectionElementsObject.mediaLists.forEach(e => {
            const item = lab_design_system('div', `forder-${e.listName}`, folders, '', '', ['appMenu', 'folder'])
            const icon = lab_design_system('img', `forder-${e.listName}-icon`, item)
            icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/folder.svg`)
            const text = lab_design_system('div', `forder-${e.listName}-name`, item, e.listName)
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
              const file = lab_design_system('div', `file-${i}`, files, '', '', ['appMenu', 'fileImg'])
              const fileImg = lab_design_system('div', `f-img-${i}`, file, '', '', ['appMenu', 'boxImg'])
              const img = lab_design_system('img', `file-img-${i}`, fileImg)
              img.style.maxWidth = '100%'
              img.style.aspectRatio = '1'
              img.style.objectFit = 'cover'
              const span = lab_design_system('span', `file-span-${i}`, file, e)
              img.setAttribute('src', `/DB/USERS_FOLDERS/${sectionElementsObject.uid}/apps/${sectionElementsObject.app}/content/ressources/medias/${selectedFolder}/${e}`)
            })
          } else {
            files.innerHTML = lngData.zero_media_list_files
          }
          lab_fade_in_recursively(files, 0.3)
        }

        const bottom = lab_design_system('div', 'app-fold-bottom', folders, '', '', ['appMenu', 'bottom'])

        let buttons = {
          'import': lngData.import_files,
          'create': lngData.new_folder
        }

        Object.keys(buttons).forEach(e => {
          const btn = lab_design_system('div', `forder-${e}`, bottom, '', '', ['appMenu', 'borderBtn'])
          const icon = lab_design_system('img', `forder-${e}-icon`, btn)
          icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/new-folder.svg`)
          const text = lab_design_system('div', `forder-${e}-name`, btn, buttons[e])
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
        const wrapper = lab_design_system('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])
        const deploy = lab_design_system('div', 'app-menu-deploy', wrapper, '', 'scrollable', ['appMenu', 'deploy'])
        const left = lab_design_system('div', 'app-deploy-left', deploy, '', '', ['appMenu', 'left'])
        const right = lab_design_system('div', 'app-deploy-right', deploy, '', '', ['appMenu', 'right'])
        const heading = lab_design_system('h6', 'app-menu-heading', left, sideButtons[slide], '', ['appMenu', 'heading'])
        const wrap = lab_design_system('div', `app-menu-text-wrap`, right, '', '', ['appMenu', 'textBox'])
        right.style.position = 'relative'
        wrap.style.height = '100%'
        wrap.style.maxHeight = '100%'

        const drop = dropDown(server, server.lab_user_personnal_server, 'serv', (e) => deployBox(e), left)
        drop.wrap.style.position = 'relative'
        drop.wrap.style.zIndex = 25

        const leftBox = lab_design_system('form', 'app-deploy-box', left, '', '', ['appMenu', 'leftBox'])

        function deployBox(e = 'lab_user_personnal_server') {
          removeCommandsBox()
          leftBox.innerHTML = ''
          if (e == 'lab_user_personnal_server') {
            const ip = Input('ip', leftBox, 'XX.XX.XXX.XX', '')
            const ssh = Input('ssh', leftBox, lngData.username_ssh, '')
            const pass = Input('pass', leftBox, lngData.password, '')
            const dir = Input('dir', leftBox, lngData.remote_app_dir, '')
            const port = Input('port', leftBox, lngData.port, '')
            const save = lab_design_system('button', `save`, leftBox, lngData.save, '', ['buttons', 'action'])
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

            CommandsBox()
          }
          if (e == 'laboranth_remote_server') {
            socket.emit('checkAgencyStatus', userLSG, agencyStatus => {
              function serverHandler(userConfiguration) {
                const ressourceIPV4Label = lab_design_system("div", "ressource-ip4-label", leftBox, lngData.host_ip + 'V4 :' + userConfiguration.configs.agencyServer.public_ipv4, '')
                const serverUserLabel = lab_design_system("div", "ressource-username-label", leftBox, lngData.username_ssh + " : " + userConfiguration.configs.agencyServer.username, '')
                const ressourcePassword = lab_design_system("button", "ressource-password", leftBox, lngData.copy + " " + lngData.password, '', ['buttons', 'action'])
                ressourcePassword.style.display = 'inline-block'

                ressourcePassword.addEventListener('click', () => {
                  const userLSG = lab_local_storage_object('global')
                  socket.emit('fetchUserVMPass', userLSG, res => {
                    navigator.clipboard.writeText(res.data)
                      .then(() => {
                        alertUser(lngData.copied)
                      })
                      .catch((err) => {
                        console.error("Copy Error :", err)
                        if (err.name === "NotAllowedError") {
                          alert("Clipboard permission denied")
                        } else if (err.name === "NotFoundError") {
                          alert("Clipboard error")
                        } else {
                          alert("Unexpected Error.")
                        }
                      })
                  })
                })

                const deployButton = lab_design_system('button', "server-deploy", leftBox, lngData.deployment, '', ['buttons', 'action'])
                deployButton.style.display = 'inline-block'

                deployButton.addEventListener('click', () => {
                  const userLSG = lab_local_storage_object('global')
                  userLSG.agencyServer = true
                  socket.emit('sshDeploy', userLSG)
                })

                const destroyButton = lab_design_system('button', "server-destroy", leftBox, lngData.delete, '', ['buttons', 'action'])
                destroyButton.style.display = 'inline-block'

                destroyButton.addEventListener('click', () => {
                  vm_deletion_confirm.addEventListener('click', () => {
                    socket.emit('deleteVM', userLSG)
                  })
                })
                CommandsBox()
              }
              if (agencyStatus.success) {
                socket.emit('getUserConfigs', userLSG, userConfiguration => {
                  if (userConfiguration.configs.agencyServer) {
                    serverHandler(userConfiguration)
                    console.log(userConfiguration.configs);
                  } else {

                    const usernameSsh = lab_design_system('div', 'username-ssh', leftBox, lngData.username_ssh)
                    const userNameInput = Input('user-ssh-input', leftBox, 'root')

                    const userPass = lab_design_system('div', 'user-password', leftBox, lngData.password)
                    const userPassInput = Input('user-password-input', leftBox)
                    userPassInput.setAttribute('type', 'password')
                    const initialize = lab_design_system('button', 'server-initialize', leftBox, lngData.initialize, '', ['buttons', 'action'])

                    function isValidPassword(password) {
                      if (
                        password.length >= 8 &&
                        /[a-z]/.test(password) &&
                        /[A-Z]/.test(password) &&
                        /[0-9]/.test(password)
                      ) {
                        return true
                      } else {
                        return false
                      }
                    }

                    initialize.addEventListener('click', (e) => {
                      e.preventDefault()
                      if (userNameInput.value && userPassInput.value && isValidPassword(userPassInput.value)) {
                        userLSG.username = userNameInput.value
                        userLSG.password = userPassInput.value
                        userLSG.status = agencyStatus.status

                        const spinner = lab_design_system('img', 'load-spinner', right)
                        spinner.setAttribute('src', '/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/design/img/pre-loader.svg')
                        spinner.style.left = 'calc(50% - 40px)'
                        spinner.style.width = '80px'
                        spinner.style.height = '80px'
                        spinner.style.position = 'absolute'
                        spinner.style.top = 'calc(50% - 40px)'
                        spinner.style.animation = "lab_spinner_rotate 2s linear infinite"

                        socket.emit('createVM', userLSG, res => {
                          leftBox.innerHTML = ''
                          console.log(res);

                          socket.emit('getUserConfigs', userLSG, userConfiguration => {
                            if (userConfiguration.configs.agencyServer) {
                              serverHandler(userConfiguration)
                            }
                          })
                        })
                      } else {
                        labAlerts({
                          alertText: lngData.password_condition,
                          duration: 7000
                        })
                      }
                    })
                  }
                })
              }
            })
          }
          if (e == 'laboranth_deploy_zip') {
            const donwload = lab_design_system('button', `donwload`, leftBox, lngData.download, '', ['buttons', 'action'])
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
            const drop = dropDown(git_settings, git_settings.credentials, 'git', (e) => subBox(git, e), leftBox)
            const git = lab_design_system('div', 'app-sub-box', left, '', '', ['appMenu', 'leftBox'])
            subBox(git)
          }

          lab_fade_in_recursively(leftBox, 0.3)
        }

        function subBox(parent, e = 'credentials') {
          parent.innerHTML = ''

          if (e == 'credentials') {
            const username = Input('ssh', parent, lngData.username, '')
            const email = Input('pass', parent, lngData.email, '')
            const dir = Input('dir', parent, lngData.remote_app_dir, '')
            const port = Input('port', parent, lngData.port, '')
            const save = lab_design_system('button', `save`, parent, lngData.save, '', ['buttons', 'action'])
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
          if (e == 'create') {
            const nameLabel = lab_design_system("div", "rep-name", parent, lngData.repository_name)

            const repoName = Input('rep-name-input', parent)
            const privateLabel = lab_design_system("div", "rep-private-label", parent, lngData.private_repository)

            const privateInput = lab_design_system('input', `private-rep`, parent, '', '', ['steps', 'checkbox'])

            const descriptionLabel = lab_design_system("div", "rep-description-label", parent, lngData.description)

            const descriptionInput = Input('rep-description-input', parent)

            const create = lab_design_system('button', `create-rep`, parent, lngData.create, '', ['buttons', 'action'])
            create.style.width = 'fit-content'

            create.addEventListener('click', (e) => {
              e.preventDefault()
              if (repoName.value) {
                userLSG.newGitRepo = repoName.value
                userLSG.private = privateInput.checked
                userLSG.description = descriptionInput.value
                userLSG.gitOp = 'createRepo'

                socket.emit('launchGitHubOperation', userLSG, res => {
                  console.log(res)
                })
              }
            })
          }

          if (e == 'delete') {
            const delLabel = lab_design_system("div", "rep-delete", parent, lngData.repository_name)
            const repoName = Input('rep-name-input', parent)
            const del = lab_design_system('button', `delete-rep`, parent, lngData.delete, '', ['buttons', 'action'])
            del.style.width = 'fit-content'

            del.addEventListener('click', e => {
              e.preventDefault()
              userLSG.gitRepoToDelete = repoName.value
              userLSG.gitOp = "deleteRepo"
              socket.emit('launchGitHubOperation', userLSG, res => {
                console.log(res)
              })
            })

          }

        }
        function removeCommandsBox() {
          let btn = document.getElementById('lab-btn-deploy')
          let last = document.getElementById('lab-deploy-execute')
          if (last) {
            last.remove()
            btn.remove()
          }
        }
        function CommandsBox() {
          removeCommandsBox()
          const executeBox = lab_design_system('div', 'deploy-execute', wrapper, '', '', ['appMenu', 'execute'])
          const command = Input('command', executeBox, 'ls')
          const execute = lab_design_system('button', `execute`, executeBox, lngData.run_cmd, '', ['buttons', 'action'])
          execute.style.width = 'fit-content'
          execute.style.whiteSpace = 'nowrap'

          execute.addEventListener('click', () => {
            const userLSG = lab_local_storage_object('global')
            userLSG.command = command.value
            command.value = ""
            socket.emit("runRemoteCommand", userLSG)
          })

          const deployBtn = lab_design_system('button', `btn-deploy`, wrapper, lngData.deployment, '', ['buttons', 'action'])
          deployBtn.style.width = 'fit-content'

          deployBtn.addEventListener('click', e => {
            const userLSG = lab_local_storage_object('global')
            userLSG.uploadingConfig = uploadingConfig
            socket.emit('sshDeploy', userLSG)
          })
        }


        deployBox()
      }

      else if (slide == 'database') {
        function DBLists() {
          box.innerHTML = ''
          const wrapper = lab_design_system('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])

          const heading = lab_design_system('h6', 'app-menu-heading', wrapper, lngData.sql_databases, '', ['appMenu', 'heading'])
          const scrollList = lab_design_system('div', 'scrollList', wrapper, '', 'scrollable', ['appMenu', 'scrollList'])
          const dbList = lab_design_system('div', 'app-menu-act', scrollList, '', '', ['appMenu', 'DBList'])

          sectionElementsObject.databases.forEach((e, index) => {
            const pageLink = lab_design_system('div', `db-link-${index}`, dbList, '', '', ['appMenu', 'db'])
            const name = lab_design_system('span', `db-name-${index}`, pageLink, e, '', ['appMenu', 'link'])
            name.style.cursor = 'pointer'
            name.style.width = '100%'
            name.addEventListener('click', () => {
              OpenDB(e)
            })
            const del = lab_design_system('button', `db-del-btn-${index}`, pageLink, '', '', ['appMenu', 'deleteBtn'])
            const delIcon = lab_design_system('img', `del-btn-icon-${index}`, del, '', '', ['design', 'icon'])
            delIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/close.svg')
            del.addEventListener('click', () => {
              userLSG.sqlDB = e
              socket.emit('deleteSqlDB', userLSG, res => {
                if (res.success) {
                  sectionElementsObject.databases = sectionElementsObject.databases.filter(db => db != e)
                  pageLink.remove()
                }
              })
            })
          })

          const bottom = lab_design_system('div', `bottom`, wrapper, '', '', ['appMenu', 'execute'])
          const input = Input('act-name', bottom)
          input.style.minWidth = '220px'
          input.style.width = 'fit-content'
          const btn = lab_design_system('button', 'add-db', bottom, lngData.add, '', ['buttons', 'action'])
          btn.style.width = 'fit-content'
          btn.addEventListener('click', (e) => {
            if (input.value) {
              userLSG.db_name = input.value

              socket.emit('createSQLiteDB', userLSG, res => {
                if (res.success) {
                  sectionElementsObject.databases.push(userLSG.db_name + ".db")
                  DBLists()
                }
              })
            } else alertUser(lngData.column_name_cannot_be_empty)
          })
          lab_fade_in_recursively(box, 0.3)
        }

        function OpenDB(dbName) {

          lab_local_storage_object_update('global', { openedMenu: 'app_databases' })
          lab_local_storage_object_update('global', { current_sql_db: dbName })

          box.innerHTML = ''
          userLSG.sqlDB = dbName

          lab_local_storage_object_update('global', { openedSqlTable: "" })
          socket.emit('getSqlTables', userLSG, res => {
            const dbInfo = res.data

            // if (dbInfo.dbTables && dbInfo.dbTables.length > 0) {
            //   lab_local_storage_object_update('global', { openedSqlTable: dbInfo.dbTables[0].tableName })
            // }

            if (dbInfo) {

              const media = lab_design_system('div', 'app-menu-media', box, '', '', ['appMenu', 'media'])
              const folders = lab_design_system('div', 'app-menu-fold', media, '', '', ['appMenu', 'fold'])
              const wrapper = lab_design_system('div', 'app-menu-wrapper', media, '', 'scrollable', ['appMenu', 'wrapper'])


              function RenderColumns(dbTable) {
                wrapper.innerHTML = ""
                let types = {
                  'integer': "INTEGER",
                  'text': "TEXT",
                  'blob': "BLOB",
                  'real': "REAL"
                }

                const columns = lab_design_system('div', 'columns', wrapper, '', 'scrolable', ['appMenu', 'columns'])

                columns.innerHTML = ''

                const top = lab_design_system('div', 'top', columns, '', '', ['appMenu', 'column'])
                top.style.background = '#3C4CA6'
                top.style.borderRadius = '10px 10px 0 0'
                const name = lab_design_system('div', 'h-name', top, lngData.name_of_column, '', ['appMenu', 'columnHead'])
                const type = lab_design_system('div', 'h-type', top, lngData.data_type, '', ['appMenu', 'columnHead'])
                const notNull = lab_design_system('div', 'h-notNull', top, lngData.not_null, '', ['appMenu', 'columnHead'])
                const unique = lab_design_system('div', 'h-unique', top, lngData.unique, '', ['appMenu', 'columnHead'])
                //COLUMN

                const newColumn = lab_design_system('div', 'new-column', columns, '', '', ['appMenu', 'column'])
                newColumn.style.position = 'relative'
                newColumn.style.order = 9999

                const addColumn = lab_design_system('button', 'add-column', newColumn, '', '', ['appMenu', 'addColumn'])
                const addIcon = lab_design_system('img', 'add-column-icon', addColumn, '', '', ['design', 'icon'])
                addIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/add_user.svg')

                const newColumnName = lab_design_system('div', 'new-column-name', newColumn, '', '', ['appMenu', 'columnBox'])
                newColumnName.style.padding = '0'

                const newColumnNameInput = Input('new-column-name-input', newColumnName)

                const newColumnType = lab_design_system('div', 'new-column-type', newColumn, '', '', ['appMenu', 'columnBox'])
                newColumnType.style.padding = '0'
                let newColumnDataType = 'INTEGER'

                const newColumnTypeInput = dropDown(types, newColumnDataType, 'new-column-type-input', (e) => {
                  newColumnDataType = e
                }, newColumnType)
                newColumnTypeInput.wrap.style.width = '100%'

                const newColumnNotNull = lab_design_system('div', 'new-column-notNull', newColumn, '', '', ['appMenu', 'columnBox'])
                newColumnNotNull.style.padding = '0'

                const newColumnNotNullInput = lab_design_system('input', 'new-column-notNull-input', newColumnNotNull, '', '', ['steps', 'checkbox'])
                newColumnNotNullInput.setAttribute('type', 'checkbox')

                const newColumnUnique = lab_design_system('div', 'new-column-unique', newColumn, '', '', ['appMenu', 'columnBox'])
                newColumnUnique.style.padding = '0'

                const newColumnUniqueInput = lab_design_system('input', 'new-column-unique-input', newColumnUnique, '', '', ['steps', 'checkbox'])

                newColumnUniqueInput.setAttribute('type', 'checkbox')

                function addRow(c, index) {
                  const column = lab_design_system('div', `column-${index}`, columns, '', 'sql-column', ['appMenu', 'column'])
                  const Cname = lab_design_system('div', `column-name-${index}`, column, c.name, '', ['appMenu', 'columnBox'])
                  Cname.setAttribute('data-column', 'name')
                  const Ctype = lab_design_system('div', `column-type-${index}`, column, c.type, '', ['appMenu', 'columnBox'])
                  Ctype.setAttribute('data-column', 'type')
                  const CnotNull = lab_design_system('div', `column-not-null-${index}`, column, Boolean(c.notnull).toString(), '', ['appMenu', 'columnBox'])
                  CnotNull.setAttribute('data-column', 'notNull')
                  const Cunique = lab_design_system('div', `column-unique-${index}`, column, String(c.unique), '', ['appMenu', 'columnBox'])
                  Cunique.setAttribute('data-column', 'unique')

                  column.addEventListener('click', (e) => {
                    column.classList.add('active-column')
                    column.style.background = '#ECF0F9'
                    if (e.target.getAttribute('data-column')) {
                      ColumnSettings(e.target.getAttribute('data-column'), c, e.target.id)
                    }
                  })
                  lab_fade_in_recursively(column, 0.3)
                  newColumnNameInput.value = ""
                  newColumnNotNullInput.checked = ""
                  newColumnNotNullInput.checked = ""
                }

                dbTable.tablePragma.forEach((c, index) => {
                  addRow(c, index)
                })

                addColumn.addEventListener('click', () => {
                  if (newColumnNameInput.value) {
                    userLSG.sqlTable = lab_local_storage_object('global').openedSqlTable
                    userLSG.newColumnName = newColumnNameInput.value
                    userLSG.dataType = newColumnDataType
                    userLSG.notNull = newColumnNotNull.checked
                    userLSG.unique = newColumnUniqueInput.checked

                    socket.emit('sqlNewColumn', userLSG, res => {
                      addRow({ name: userLSG.newColumnName, type: userLSG.dataType, notnull: Boolean(userLSG.notNull), unique: userLSG.unique }, newColumnNameInput.value)
                    })
                  }
                })

                function ColumnSettings(field, columnInfo, fieldId) {
                  let last = document.getElementById('lab-column-setting')
                  if (last) last.remove()
                  const columnSetting = lab_design_system('div', 'column-setting', wrapper, '', '', ['appMenu', 'columnSetting'])
                  const del = lab_design_system('div', 'del', columnSetting, lngData.delete, '', ['buttons', 'action'])
                  del.style.width = 'fit-content'
                  del.style.marginRight = 'auto'

                  del.addEventListener('click', () => {
                    userLSG.sqlTable = lab_local_storage_object('global').openedSqlTable
                    userLSG.columnToDelete = columnInfo.name
                    const countColumns = document.querySelectorAll('.lab-sql-column').length

                    if (countColumns > 1) {
                      socket.emit('sqlDeleteColumn', userLSG, res => {
                        if (res.success) {
                          document.querySelector('.active-column').remove()
                          columnSetting.remove()
                        }
                      })
                    } else {
                      alertUser(lngData.minimum_reached)
                    }
                  })

                  let action
                  if (field == 'name') {
                    let input = Input('column-name', columnSetting, columnInfo.name)
                    input.style.maxWidth = '220px'

                    action = lab_design_system('div', 'action', columnSetting, lngData.update_column_name, '', ['buttons', 'action'])

                    action.addEventListener('click', function () {
                      userLSG.sqlTable = lab_local_storage_object('global').openedSqlTable
                      userLSG.rowName = columnInfo.name
                      userLSG.newName = input.value
                      userLSG.operation = "nameUpdate"

                      socket.emit('sqlUpdateColumnPragma', userLSG, res => {
                        if (res.success) {
                          const table = dbInfo.dbTables.find(t => t.tableName === userLSG.sqlTable)
                          table.tablePragma[0].name = userLSG.newName
                          document.getElementById(fieldId).innerHTML = input.value
                        }
                      })
                    })
                  }
                  if (field == 'type') {
                    let newType = columnInfo.type
                    let drop = dropDown(types, newType, 'column-type', (e) => {
                      newType = e
                    }, columnSetting)
                    drop.wrap.style.maxWidth = '220px'
                    drop.wrap.style.width = '100%'
                    action = lab_design_system('div', 'action', columnSetting, lngData.update_data_type, '', ['buttons', 'action'])

                    action.addEventListener('click', function () {
                      userLSG.sqlTable = lab_local_storage_object('global').openedSqlTable
                      userLSG.rowName = columnInfo.name
                      userLSG.newType = newType
                      userLSG.operation = "typeUpdate"

                      socket.emit('sqlUpdateColumnPragma', userLSG, res => {
                        if (res.success) {
                          document.getElementById(fieldId).innerHTML = newType.toUpperCase()
                          const table = dbInfo.dbTables.find(t => t.tableName === userLSG.sqlTable)
                          table.tablePragma[0].type = userLSG.newType
                        }
                      })
                    })
                  }
                  if (field == 'notNull') {
                    let temp = columnInfo.notnull == true ? 'change_true_to_false' : 'change_false_to_true'
                    action = lab_design_system('div', 'action', columnSetting, lngData[temp], '', ['buttons', 'action'])

                    action.addEventListener('click', () => {
                      userLSG.sqlTable = lab_local_storage_object('global').openedSqlTable
                      userLSG.rowName = columnInfo.name
                      userLSG.operation = "not_null"

                      if (columnInfo.notnull === 1 || columnInfo.notnull === '1') {
                        userLSG.newVal = false
                      } else {
                        userLSG.newVal = true
                      }

                      socket.emit('sqlUpdateColumnPragma', userLSG, res => {
                        if (res.success) {
                          document.getElementById(fieldId).innerHTML = userLSG.newVal
                          if (userLSG.newVal === true || userLSG.newVal === 'true') {
                            action.innerHTML = lngData.change_true_to_false
                            columnInfo.notnull = 1
                          } else {
                            document.getElementById(fieldId).innerHTML = userLSG.newVal
                            action.innerHTML = lngData.change_false_to_true
                            columnInfo.notnull = 0
                          }
                          const table = dbInfo.dbTables.find(t => t.tableName === userLSG.sqlTable)
                          table.tablePragma[0].notnull = columnInfo.notnull
                        }
                      })
                    })
                  }
                  if (field == 'unique') {
                    let temp = columnInfo.unique == true ? 'change_true_to_false' : 'change_false_to_true'
                    action = lab_design_system('div', 'action', columnSetting, lngData[temp], '', ['buttons', 'action'])

                    action.addEventListener('click', () => {
                      userLSG.sqlTable = lab_local_storage_object('global').openedSqlTable
                      userLSG.rowName = columnInfo.name
                      userLSG.operation = "unique"
                      userLSG.newVal = !Boolean(columnInfo.unique)

                      socket.emit('sqlUpdateColumnPragma', userLSG, res => {
                        if (res.success) {
                          document.getElementById(fieldId).innerHTML = userLSG.newVal
                          if (userLSG.newVal === true || userLSG.newVal === 'true') {
                            action.innerHTML = lngData.change_true_to_false
                          } else {
                            document.getElementById(fieldId).innerHTML = userLSG.newVal
                            action.innerHTML = lngData.change_false_to_true
                          }
                          columnInfo.unique = userLSG.newVal
                        }
                        const table = dbInfo.dbTables.find(t => t.tableName === userLSG.sqlTable)
                        table.tablePragma[0].unique = userLSG.newVal
                      })
                    })
                  }

                  action.style.width = 'fit-content'
                  lab_fade_in_recursively(columnSetting, 0.3)
                }
                lab_fade_in_recursively(columns, 0.3)
              }

              function addTable(e, index) {
                const item = lab_design_system('div', `table-${e.tableName}`, folders, '', 'sql-table', ['appMenu', 'folder'])
                const text = lab_design_system('div', `table-${index}-name`, item, e.tableName)
                text.style.width = '100%'
                text.addEventListener('click', () => {
                  if (!item.classList.contains('lab-selected-table')) {
                    let last = document.querySelector('.lab-selected-table')
                    if (last) {
                      last.classList.remove('lab-selected-table')
                      last.style.background = 'transparent'
                      last.querySelector('#lab-table-del-btn').remove()
                    }
                    item.classList.add('lab-selected-table')
                    item.style.background = '#fff'

                    const del = lab_design_system('button', `table-del-btn`, item, '', '', ['appMenu', 'deleteBtn'])
                    const delIcon = lab_design_system('img', `del-btn-icon`, del, '', '', ['design', 'icon'])
                    delIcon.setAttribute('src', 'https://laboranth.tech/D/R/IMG/CLA/close.svg')
                    del.addEventListener('click', () => {
                      userLSG.tableToDel = e.tableName
                      socket.emit('sqlTableDel', userLSG, res => {
                        if (res.success) {
                          item.remove()
                          document.getElementById('lab-app-menu-wrapper').innerHTML = ""
                          dbInfo.dbTables = dbInfo.dbTables.filter(t => t.tableName != e.tableName)
                        }
                      })
                    })
                    lab_local_storage_object_update('global', { openedSqlTable: e.tableName })
                    const selectedTable = dbInfo.dbTables.find(t => t.tableName == e.tableName)
                    RenderColumns(selectedTable)
                    lab_fade_in_recursively(item, 0.3)
                  }
                })
                lab_fade_in_recursively(item, 0.3)
              }

              if (dbInfo.dbTables && dbInfo.dbTables.length > 0) {
                dbInfo.dbTables.forEach((e, index) => {
                  addTable(e, index)
                })
              }

              const bottom = lab_design_system('div', 'app-fold-bottom', folders, '', '', ['appMenu', 'bottom'])
              bottom.style.order = 9999
              const NewTable = lab_design_system('div', `new-table`, bottom, '', '', ['appMenu', 'borderBtn'])
              const icon = lab_design_system('img', `new-table-icon`, NewTable)
              icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/new-folder.svg`)
              const text = lab_design_system('div', `new-table-name`, NewTable, lngData.new_table)

              NewTable.addEventListener('click', (e) => {
                e.preventDefault()
                let input = document.getElementById('lab-new-table-input')
                if (input) {
                  userLSG.newTable = input.value
                  socket.emit('newSqlTable', userLSG, res => {
                    if (res.success) {
                      const sqlTables = document.querySelectorAll('.lab-sql-table').length
                      dbInfo.dbTables.push({
                        tableName: userLSG.newTable,
                        tablePragma: [{
                          cid: 0,
                          dflt_value: null,
                          name: 'item',
                          notnull: 0,
                          pk: 0,
                          type: "TEXT",
                          unique: false
                        }]
                      })
                      addTable({ tableName: userLSG.newTable }, sqlTables)
                    }
                  })
                } else {
                  const inputTable = Input('new-table-input', bottom)
                  inputTable.style.opacity = ""
                }
              })
            }
            lab_fade_in_recursively(box, 0.3)
          })
        }
        DBLists()
      }
      lab_fade_in_recursively(box, 0.3)
    }

    RenderBox()

    function moreBtn(parent, id, list, el, func) {
      const more = lab_design_system('button', `more-btn-${id}`, parent, '', '', ['appMenu', 'more'])
      const icon = lab_design_system('img', `more-btn-${id}-icon`, more)
      icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/more_vert.svg`)
      icon.style.transform = 'rotate(90deg)'

      more.addEventListener('click', () => {
        const listing = lab_design_system('div', `more-list-${id}`, more, '', '', ['appMenu', 'moreList'])

        Object.keys(list).forEach((e, i) => {
          const item = lab_design_system('div', `more-list-${i}`, listing, list[e])
          item.addEventListener('click', () => func(el, e))
        })

        listing.addEventListener('mouseleave', () => listing.remove())
      })
    }

    function TextEditableBox(type) {
      const wrapper = lab_design_system('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])
      const heading = lab_design_system('h6', 'app-menu-heading', wrapper, sideButtons[type], '', ['appMenu', 'heading'])
      const wrap = lab_design_system('div', `app-menu-text-wrap`, wrapper, '', '', ['appMenu', 'textBox'])
      const textArea = lab_design_system('div', `app-menu-textArea`, wrap, '', 'scrollable', ['appMenu', 'textArea'])
      textArea.contentEditable = true

      const btn = lab_design_system('button', `app-menu-btn`, wrapper, lngData.save, '', ['buttons', 'action'])
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
      const input = lab_design_system('input', id, parent, '', '', ['appMenu', 'Input'])
      input.setAttribute('placeholder', placeholder)
      input.setAttribute('value', value)
      return input
    }

    function dropDown(list, value, id, func, parent = box) {
      const wrap = lab_design_system('div', `${id}-wrap`, parent, '', '', ['appMenu', 'drop'])
      const selected = lab_design_system('div', `${id}-selected`, wrap, '', '', ['appMenu', 'selected'])
      const text = lab_design_system('span', `${id}-text`, selected, value.replace(/"/gi, ''))
      const icon = lab_design_system('img', `${id}-icon`, selected, '', '', ['design', 'icon'])
      icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/arrow_drop_down.svg`)

      const listing = lab_design_system('div', `${id}-list`, wrap, '', 'scrollable', ['appMenu', 'list'])
      if (typeof list == 'array') {
        list.forEach(e => {
          const item = lab_design_system('div', `${id}-list-${e}`, listing, e)
          item.addEventListener('click', () => {
            text.innerHTML = e
            func(e)
          })
        })
      } else {
        Object.keys(list).forEach(e => {
          const item = lab_design_system('div', `${id}-list-${e}`, listing, list[e])
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

    const fileInput = lab_design_system('input', 'file-input', rootLayer, '', '', ['design', 'noneFile'])
    fileInput.setAttribute('type', 'file')

    lab_fade_in_recursively(menu, 0.3)
  })

}

// socket.emit("askAccount", lab_local_storage_object("global"), res => {
//   lab_load_language_module(res.configs.language).then(lngData => {
//     res.lngData = lngData
//     res.lng = res.configs.language
//     AppMenu(res)
//   })
// })


const oldSRC = 'https://laboranth.tech/D/R/IMG/CLA/'

// let lab_ui_styles_d = lab_ui_styles

let ActiveMode
let selected
let mouseIsDown = false

const uditableTags = ["SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "P", "I", "B", "STRONG", "FONT", "EM", "SMALL", "SUP", "SUB", "Q", "BLOCKQUOTE"]

class Designer {
  static ID() {
    const S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return ('lab-element' + S4() + S4() + S4() + S4() + S4());
  }

  static async create(TemplatesList, template_id, parent, vpm, random, id) {
    const T = TemplatesList[template_id].template
    let A

    function readObject(temt, child) {
      const obj = temt[vpm]
      const element = document.createElement(obj.tag)

      if (obj.root) {
        parent.appendChild(element)
        A = element
      }

      element.id = id ? id : (random ? Designer.ID() : obj.id)

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
}

class DesignConstructor {
  static button(parent, styles, content, icon, className = 'none', id = Designer.ID()) {
    const btn = lab_design_system('button', id, parent, content, className, styles)
    if (icon) {
      const btnIcon = lab_design_system('img', `${id}-icon`, btn, '', 'none', ['design', 'icon'])
      btnIcon.setAttribute('src', `${oldSRC}${icon}.svg`)
    }
    return btn;
  }

  static input(parent, value, placeholder, icon, params, className = 'none', styles, id = Designer.ID()) {
    const wrap = lab_design_system('div', id, parent, '', '', ['design', 'inputWrap'])
    if (icon) {
      const innerIcon = lab_design_system('img', id, wrap, '', '', ['design', 'icon'])
      innerIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${icon}.svg`)
    }
    const Input = lab_design_system('input', `input-${id}`, wrap, '', '', ['design', 'input'])

    value && Input.setAttribute('value', value)
    placeholder && Input.setAttribute('placeholder', placeholder)
    params && Input.addEventListener('input', () => Designer.WriteStyle(params.el, params.style, Input.value)
    )
    return Input
  }

  static dropList(parent, list, value, func) {
    let id = Designer.ID()
    const wrap = lab_design_system('div', id, parent, '', '', ['design', 'dropList'])
    const selected = lab_design_system('div', id + '-selected', wrap, '', '', ['design', 'dropSel'])
    const text = lab_design_system('span', Designer.ID(), selected, value.replace(/"/gi, ''))
    const icon = lab_design_system('img', id + '-icon', selected, '', '', ['design', 'icon'])
    icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/arrow_drop_down.svg`)

    const listing = lab_design_system('div', id + '-list', wrap, '', '', ['design', 'dropListing'])
    list.forEach(e => {
      const item = lab_design_system('span', Designer.ID(), listing, e)
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

    const menuWrap = lab_design_system('div', 'block-menu-wrap', parent, '', 'none', ['design', 'blockMenuWrap'])

    const menu = lab_design_system('div', 'block-menu', menuWrap, '', 'none', ['design', 'blockMenu'])
    Object.keys(options).forEach(e => {
      const item = lab_design_system('div', Designer.ID(), menu, '', 'none', ['design', 'blockMenuItem'])
      const itemIcon = lab_design_system('img', Designer.ID(), item, '0', 'none')
      const itemText = lab_design_system('span', Designer.ID(), item, options[e], 'none')
      itemIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${e}-icon.svg`)
      itemIcon.style.width = '15px'

      item.addEventListener('click', () => {
        menuWrap.remove()
        selected = null
        if (e == 'transform') selectTool('resize')
        if (e == 'drag') selectTool('move')
        if (e == 'copy') Designer.copy(element)
        if (e == 'del') Designer.del(element)
        if (e == 'db_actions') db_popup(element, lngData)
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
          'position': "relative",
          'objectFit': "cover",
          'objectPosition': "50% 50%"
        }
      },
      'landscape': {
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

// function design_mode() {
//   const labBody = document.querySelector('body')
//   labBody.style.position = "relative"
//   labBody.style.overflow = "hidden"
//   labBody.style.display = "flex"
//   labBody.style.width = "100svw"
//   labBody.style.height = "100svh"

//   const ElementsList = {
//     'button': {
//       'icon': `https://laboranth.tech/D/R/IMG/CLA/add_user.svg`,
//       'title': "button",
//       'template': {
//         'landscape': {
//           'id': "lab-button",
//           'tag': "button",
//           'root': true,
//           'classes': "lab-button",
//           'styles': {
//             'padding': '10px 20px',
//             'borderRadius': "15px",
//             'display': 'inline',
//             'width': "fit-content",
//             'position': "relative",
//             'background': "#FED05E"
//           },
//           'child': [
//             {
//               'landscape': {
//                 'id': "lab-button-span",
//                 'tag': "span",
//                 'classes': "lab-button-span",
//                 'styles': {
//                   'fontWeight': "700",
//                   'color': "#1C1B1F",
//                 },
//                 'text': 'Button',

//               },
//               'landscape': {
//                 'id': "lab-button-span",
//                 'tag': "span",
//                 'classes': "lab-button-span",
//                 'styles': {
//                   'fontWeight': "700",
//                   'color': "#1C1B1F",
//                 },
//                 'text': 'Button',
//               }
//             }
//           ]
//         },
//         'portrait': {
//           'id': "lab-button",
//           'tag': "button",
//           'root': true,
//           'classes': "lab-button",
//           'styles': {
//             'padding': '10px 20px',
//             'borderRadius': "15px",
//             'display': "flex",
//             'gap': "10px",
//             'alignItems': "center",
//             'justifyContent': "center",
//             'background': "#FED05E"
//           },
//           'child': [
//             {
//               'landscape': {
//                 'id': "lab-button-span",
//                 'tag': "span",
//                 'classes': "lab-button-span",
//                 'styles': {
//                   'fontWeight': "700",
//                   'color': "#1C1B1F",
//                 },
//                 'text': 'Button',
//               },
//               'landscape': {
//                 'id': "lab-button-span",
//                 'tag': "span",
//                 'classes': "lab-button-span",
//                 'styles': {
//                   'fontWeight': "700",
//                   'color': "#1C1B1F",
//                 },
//                 'text': 'Button',
//               }
//             }
//           ]
//         }
//       }
//     },
//     'section': {
//       'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
//       'title': "section",
//       'template': {
//         'landscape': {
//           'id': "lab-section",
//           'tag': "section",
//           'classes': "lab-empty-section",
//           'root': true,
//           'styles': {
//             'background': '#FFFFFF',
//             'position': "relative"
//           }
//         },
//         'portrait': {
//           'id': "lab-section",
//           'tag': "section",
//           'classes': "lab-empty-section",
//           'root': true,
//           'styles': {
//             'padding': '80px 20px',
//             'background': '#FFFFFF',
//             'position': "relative"
//           }
//         },
//       }
//     },
//     'div': {
//       'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
//       'title': "div",
//       'template': {
//         'landscape': {
//           'id': "lab-section",
//           'tag': "div",
//           'classes': "lab-empty-section",
//           'root': true,
//           'styles': {
//             'background': '#FFFFFF',
//             'padding': '20px 20px',
//             'position': "relative"
//           }
//         },
//         'portrait': {
//           'id': "lab-section",
//           'tag': "div",
//           'classes': "lab-empty-section",
//           'root': true,
//           'styles': {
//             'background': '#FFFFFF',
//             'padding': '20px 20px',
//             'position': "relative"
//           }
//         },
//       }
//     },
//     'form': {
//       'icon': `https://laboranth.tech/D/R/IMG/CLA/form.svg`,
//       'title': "form",
//       'template': {
//         'landscape': {
//           'id': "lab-form",
//           'tag': "form",
//           'root': true,
//           'styles': {
//             'padding': '15px',
//             'positon': "relative",
//             'borderRadius': "15px",
//             'display': "flex",
//             'flexDirection': "column",
//             'gap': "10px",
//             'background': "#FFFFFF",
//             'boxSizing': "border-box",
//             'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
//           },
//           'child': [
//             {
//               'landscape': {
//                 'id': "lab-div-input",
//                 'tag': "input",
//                 'styles': {
//                   'padding': '10px',
//                   'borderRadius': "10px",
//                   'border': "none",
//                   'positon': "relative",
//                   'width': "100%",
//                   'boxSizing': "border-box",
//                   'background': "#EFEFEF"
//                 },
//               },
//               'portrait': {
//                 'id': "lab-div-input",
//                 'tag': "input",
//                 'styles': {
//                   'padding': '10px',
//                   'borderRadius': "10px",
//                   'border': "none",
//                   'positon': "relative",
//                   'width': "100%",
//                   'boxSizing': "border-box",
//                   'background': "#EFEFEF"
//                 },
//               }
//             },
//             {
//               'landscape': {
//                 'id': "lab-div-input",
//                 'tag': "input",
//                 'styles': {
//                   'padding': '10px',
//                   'borderRadius': "10px",
//                   'border': "none",
//                   'width': "100%",
//                   'positon': "relative",
//                   'boxSizing': "border-box",
//                   'background': "#EFEFEF"
//                 },
//               },
//               'portrait': {
//                 'id': "lab-div-input",
//                 'tag': "input",
//                 'styles': {
//                   'padding': '10px',
//                   'borderRadius': "10px",
//                   'border': "none",
//                   'boxSizing': "border-box",
//                   'positon': "relative",
//                   'width': "100%",
//                   'background': "#EFEFEF"
//                 },
//               }
//             },
//             {
//               'landscape': {
//                 'id': "lab-button",
//                 'tag': "button",
//                 'styles': {
//                   'padding': '10px 25px',
//                   'textAlign': "center",
//                   'borderRadius': "15px",
//                   'fontWeight': "700",
//                   'positon': "relative",
//                   'color': "#1C1B1F",
//                   'boxSizing': "border-box",
//                   'background': "#FED05E"
//                 },
//                 'attributes': {
//                   'type': "button"
//                 },
//                 'text': 'Button'
//               },
//               'portrait': {
//                 'id': "lab-button",
//                 'tag': "button",
//                 'styles': {
//                   'padding': '10px 25px',
//                   'textAlign': "center",
//                   'borderRadius': "15px",
//                   'fontWeight': "700",
//                   'color': "#1C1B1F",
//                   'boxSizing': "border-box",
//                   'positon': "relative",
//                   'background': "#FED05E"
//                 },
//                 'text': 'Button'
//               }
//             }
//           ]
//         },
//         'portrait': {
//           'id': "lab-form",
//           'tag': "form",
//           'root': true,
//           'styles': {
//             'padding': '15px',
//             'positon': "relative",
//             'borderRadius': "15px",
//             'display': "flex",
//             'flexDirection': "column",
//             'gap': "10px",
//             'background': "#FFFFFF",
//             'boxSizing': "border-box",
//             'boxShadow': '1px 2px 8px 0px rgba(34, 60, 80, 0.2)'
//           },
//           'child': [
//             {
//               'landscape': {
//                 'id': "lab-div-input",
//                 'tag': "input",
//                 'styles': {
//                   'padding': '10px',
//                   'borderRadius': "10px",
//                   'border': "none",
//                   'positon': "relative",
//                   'width': "100%",
//                   'boxSizing': "border-box",
//                   'background': "#EFEFEF"
//                 },
//               },
//               'portrait': {
//                 'id': "lab-div-input",
//                 'tag': "input",
//                 'styles': {
//                   'padding': '10px',
//                   'borderRadius': "10px",
//                   'border': "none",
//                   'positon': "relative",
//                   'width': "100%",
//                   'boxSizing': "border-box",
//                   'background': "#EFEFEF"
//                 },
//               }
//             },
//             {
//               'landscape': {
//                 'id': "lab-div-input",
//                 'tag': "input",
//                 'styles': {
//                   'padding': '10px',
//                   'borderRadius': "10px",
//                   'border': "none",
//                   'width': "100%",
//                   'positon': "relative",
//                   'boxSizing': "border-box",
//                   'background': "#EFEFEF"
//                 },
//               },
//               'portrait': {
//                 'id': "lab-div-input",
//                 'tag': "input",
//                 'styles': {
//                   'padding': '10px',
//                   'borderRadius': "10px",
//                   'border': "none",
//                   'boxSizing': "border-box",
//                   'positon': "relative",
//                   'width': "100%",
//                   'background': "#EFEFEF"
//                 },
//               }
//             },
//             {
//               'landscape': {
//                 'id': "lab-button",
//                 'tag': "button",
//                 'styles': {
//                   'padding': '10px 25px',
//                   'textAlign': "center",
//                   'borderRadius': "15px",
//                   'fontWeight': "700",
//                   'positon': "relative",
//                   'color': "#1C1B1F",
//                   'boxSizing': "border-box",
//                   'background': "#FED05E"
//                 },
//                 'attributes': {
//                   'type': "button"
//                 },
//                 'text': 'Button'
//               },
//               'portrait': {
//                 'id': "lab-button",
//                 'tag': "button",
//                 'styles': {
//                   'padding': '10px 25px',
//                   'textAlign': "center",
//                   'borderRadius': "15px",
//                   'fontWeight': "700",
//                   'color': "#1C1B1F",
//                   'boxSizing': "border-box",
//                   'positon': "relative",
//                   'background': "#FED05E"
//                 },
//                 'text': 'Button'
//               }
//             }
//           ]
//         }
//       }
//     },
//     'input': {
//       'icon': `https://laboranth.tech/D/R/IMG/CLA/grid.svg`,
//       'title': "input",
//       'template': {
//         'landscape': {
//           'id': "lab-input",
//           'tag': "input",
//           'classes': "lab-empty-input",
//           'root': true,
//           'styles': {
//             'background': '#FFFFFF',
//             'padding': '10px 20px',
//             'borderRadius': "10px",
//             'border': "none",
//             'outline': "none",
//             'position': "relative"
//           }
//         },
//         'portrait': {
//           'id': "lab-input",
//           'tag': "input",
//           'classes': "lab-empty-input",
//           'root': true,
//           'styles': {
//             'background': '#FFFFFF',
//             'padding': '10px 20px',
//             'borderRadius': "10px",
//             'border': "none",
//             'outline': "none",
//             'position': "relative"
//           }
//         },
//       }
//     }
//   }

//   function Options(obj, key, value) {
//     obj[key] = value ? value : !obj[key]
//     localStorage.setItem('options', JSON.stringify(obj))
//   }

//   const designBody = document.querySelector('body')

//   let options = JSON.parse(localStorage.getItem('options')) || {
//     'vpm': "landscape",
//     'zoom': 100,
//     'toolBar': true,
//     'settingsBar': true,
//     'sideMenu': true,
//   }

//   //SIDE MENU

//   const menu = lab_design_system('div', 'side-menu', designBody, '', 'scrollable', ['design', 'side'])
//   const menuButton = DesignConstructor.button(menu, ['design', 'showMenu'], '', 'arrow_menu_close')

//   menuButton.addEventListener('click', () => {
//     DesignConstructor.toggleClass(menu, 'design', 'side', 'hideSide')
//     DesignConstructor.toggleClass(menuButton, 'design', 'showMenu', 'hideMenu')
//     Options(options, 'sideMenu')
//   })

//   if (!options.sideMenu) {
//     DesignConstructor.addClass(menu, 'design', 'hideSide')
//     DesignConstructor.addClass(menuButton, 'design', 'hideMenu')
//   }

//   const elementsBox = lab_design_system('div', "elements-box", menu, '', 'scrollable', ['design', 'elementsBox'])

//   const elementsTitle = lab_design_system('span', Designer.ID(), elementsBox, "Elements", '', ['design', 'templatesHeading'])
//   const elementsWrap = lab_design_system('div', Designer.ID(), elementsBox, '', '', ['design', 'templates'])

//   function addList(e, list) {
//     Object.keys(e).map(el => {
//       const item = lab_design_system('div', Designer.ID(), list, '', '', ['design', 'template'])
//       const icon = lab_design_system('div', Designer.ID(), item, '', '', ['design', 'templateIcon'])
//       const img = lab_design_system('img', Designer.ID(), icon)
//       img.setAttribute('src', e[el].icon)
//       img.style.width = '30px'
//       img.style.height = '30px'
//       const text = lab_design_system('span', Designer.ID(), item, e[el].title)

//       item.addEventListener('click', () => {
//         const coord = item.getBoundingClientRect()
//         const copy = Designer.copy(item)
//         copy.style.position = "absolute"
//         copy.style.opacity = "0.7"
//         copy.style.left = `${coord.left}px`
//         copy.style.top = `${coord.top}px`

//         Designer.move(copy, async () => {
//           const copyPos = copy.getBoundingClientRect()
//           const pagePos = document.getElementById('lab-user-page').getBoundingClientRect()
//           list.removeChild(copy)
//           const item = await Designer.create(e, el, page, 'landscape', true)
//           if (!['form', 'div', 'section'].includes(el)) {
//             item.style.top = (copyPos.y - pagePos.y) / pagePos.height * 100 + '%'
//             item.style.left = (copyPos.x - pagePos.x) / pagePos.width * 100 + '%'
//             item.style.position = 'absolute'
//             item.style.zIndex = '1'
//           }
//         })
//       })
//     })
//   }

//   addList(ElementsList, elementsWrap)

//   //SIDE MENU END

//   //USER PAGE

//   let pageWrap
//   if (!document.querySelector('#lab-user-page')) {
//     pageWrap = lab_design_system('div', "user-page-wrap", designBody, '', 'scrollable', ['design', 'pageWrap'])
//     pageWrap.classList.remove('escape')
//     pageWrap.setAttribute('class', 'lab-scrollable')
//   } else {
//     pageWrap = document.querySelector('#lab-user-wrap')
//   }

//   let page
//   if (!document.querySelector('#lab-user-page')) {
//     page = lab_design_system('div', "user-page", pageWrap, '', '', ['design', 'page'])
//   } else {
//     page = document.querySelector('#lab-user-page')
//   }
//   page.classList.remove('escape')

//   page.addEventListener('mouseover', (p) => {
//     Designer.hover(p.target)
//   })

//   page.addEventListener('click', (e) => {
//     let element = document.elementFromPoint(e.clientX, e.clientY)
//     const stopList = ['lab-HoverBox', 'lab-HoverBoxbtn-icon', 'lab-HoverBoxbtn']
//     if (!stopList.includes(element.id) && !element.classList.contains('lab-none')) {
//       StylesMenu(document.elementFromPoint(e.clientX, e.clientY))
//     }
//   })

//   page.addEventListener('mousedown', () => {
//     mouseIsDown = true
//   })
//   page.addEventListener('mouseup', () => {
//     mouseIsDown = false
//   })


//   page.addEventListener('contextmenu', function (e) {
//     e.preventDefault()
//     let element = document.elementFromPoint(e.clientX, e.clientY)
//     const stopList = ['lab-HoverBox', 'lab-HoverBoxbtn-icon', 'lab-HoverBoxbtn']
//     if (!stopList.includes(element.id) && !element.classList.contains('lab-none')) {
//       const BlockOptions = {
//         'copy': lngData.copy,
//         'drag': lngData.translate,
//         'transform': lngData.resize,
//         'del': lngData.delete
//       }
//       if (['form', 'input', 'button'].includes(element.tagName)) {
//         BlockOptions['db_actions'] = lngData.link_to_database
//       }
//       const menu = DesignConstructor.blockMenu(element, page, BlockOptions)
//       const pagePos = page.getBoundingClientRect()
//       menu.style.left = e.clientX - pagePos.x - 30 + 'px'
//       menu.style.top = e.clientY - pagePos.y - 30 + 'px'
//     }
//   })


//   //USER PAGE END

//   //TOOLBAR

//   const toolBar = lab_design_system('div', "designers-bar-s", designBody, '', '', ['design', 'toolbar'])
//   // const toolBar = lab_design_system('div', "designers-bar", designBody, '', '', ['design', 'toolbar'])

//   const tools = {
//     'cursor': [{
//       value: 'cursor',
//       icon: `${oldSRC}cursor.svg`
//     },
//     {
//       value: 'group',
//       icon: `${oldSRC}cursor.svg`
//     }],
//     'rotate': "rotate",
//     'move': "move",
//     'resize': "resize",
//     'square': [{
//       value: 'square',
//       icon: `${oldSRC}square.svg`
//     },
//     {
//       value: 'circle',
//       icon: `${oldSRC}Ellipse.svg`
//     },
//     {
//       value: 'triangle',
//       icon: `${oldSRC}triangle.svg`
//     },
//     {
//       value: 'formPath',
//       icon: `https://laboranth.tech/D/R/IMG/LAB/designer_mode/labIconFormPathShape.svg`
//     }],
//     'pen': "pen",
//     'text': 'text',
//     'img': "img"
//   }

//   Object.keys(tools).forEach(tool => {
//     let toolBtn
//     if (typeof tools[tool] == 'object') {
//       const toolWrap = lab_design_system('div', `${tool}-wrap`, toolBar, '', '', ['design', 'toolbarItemWrap'])
//       toolBtn = DesignConstructor.button(toolWrap, ['design', 'toolbarItem'], '', tool, 'toolBtn', `${tool}-btn`)
//       const arrow = DesignConstructor.button(toolWrap, ['design', 'toolArrow'], '', `keyboard_arrow_down`)
//       toolBtn.setAttribute('data-tool', tool)


//       const list = lab_design_system('div', `${tool}-list`, toolWrap, '', '', ['design', 'toolbarItemList'])
//       tools[tool].forEach(e => {
//         let btn = lab_design_system('button', `${e.value}-wrap-btn`, list,
//           '', '', ['design', 'toolbarItem'])

//         const icon = lab_design_system('img', `${e.value}-wrap-icon`, btn,
//           '', '', ['design', 'icon'])
//         icon.setAttribute('src', e.icon)
//         btn.addEventListener('click', () => {
//           toolBtn.setAttribute('data-tool', e.value)
//           toolBtn.querySelector('img').setAttribute('src', e.icon)
//           selectTool(e.value)
//           list.style.display = "none"
//           arrow.style.transform = arrow.style.transform == 'translateY(-50%) rotate(180deg)' ? "translateY(-50%)" : "translateY(-50%) rotate(180deg)"
//         })
//       })

//       arrow.addEventListener('click', () => {
//         arrow.style.transform = arrow.style.transform == 'translateY(-50%) rotate(180deg)' ? "translateY(-50%)" : "translateY(-50%) rotate(180deg)"
//         list.style.display = list.style.display == "none" ? "flex" : "none"
//       })
//     }
//     else {
//       toolBtn = DesignConstructor.button(toolBar, ['design', 'toolbarItem'], '', tool, 'toolBtn', `${tool}-tool`)
//       toolBtn.setAttribute('data-tool', tool)
//     }

//     toolBtn.addEventListener('click', () => {
//       let last = document.querySelector('.lab-toolBtn.active')
//       if (last) {
//         last.style.background = 'transparent'
//         last.classList.remove('active')
//       }
//       selectTool(toolBtn.getAttribute('data-tool'))
//       toolBtn.classList.add('active')
//       toolBtn.style.background = '#EBEEFF'
//     })
//   })

//   const blind = lab_design_system('button', "blind-tools", toolBar, '', '', ['design', 'blindTools'])
//   blind.addEventListener('click', () => {
//     DesignConstructor.toggleClass(toolBar, 'design', 'toolbar', 'hideToolbar')
//     Options(options, 'toolBar')
//   })

//   if (!options.toolBar) DesignConstructor.addClass(toolBar, 'design', 'hideToolbar')

//   //TOPSETTINGS

//   const topSettings = lab_design_system('div', "top-settings", designBody, '', '', ['design', 'top'])
//   const settingsBtn = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'settings-white')
//   const responsiveList = ["landscape", "portrait"]

//   function setVpm(vpm) {
//     Designer.removePointer()
//     if (vpm == 'landscape') {
//       pixelScreen.innerHTML = window.outerWidth + 'px'
//       page.style.maxWidth = 'none'
//       page.style.maxHeight = 'none'
//     }

//     if (vpm == 'portrait') {
//       pixelScreen.innerHTML = '414px '
//       page.style.maxWidth = '414px'
//       page.style.maxHeight = '896px'
//     }
//   }

//   responsiveList.map(e => {
//     const btn = DesignConstructor.button(topSettings, ['design', 'screenBtn'], '', e, 'screen-btn')

//     if (e == options.vpm) activeBtn(btn)

//     function activeBtn(btn) {
//       btn.style.background = '#6a768e'
//       btn.classList.add('active')
//     }

//     btn.addEventListener('click', () => {
//       if (e != options.vpm) {
//         let last = document.querySelector('.lab-screen-btn.active')
//         last.style.background = 'transparent'
//         last.classList.remove('active')

//         activeBtn(btn)
//         Options(options, 'vpm', e)
//         setVpm(e)
//       }
//     })
//   })

//   const pixelScreen = lab_design_system('div', "top-settings-pixel", topSettings, window.outerWidth + ' px', 0, ['design', 'pixelView'])
//   pixelScreen.style.width = '65px'
//   setVpm(options.vpm)

//   const pixelSettings = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'settings-white')
//   pixelSettings.querySelector('img').style.width = '15px'

//   const setPage = DesignConstructor.button(topSettings, ['design', 'setPage'], '', 'page-box')

//   setPage.appendChild(document.createTextNode(sectionElementsObject.section))
//   const arrow = lab_design_system('img', 'page-arrow', setPage)
//   arrow.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/chevron_right.svg`)

//   setPage.addEventListener('click', () => {
//     let last = document.getElementById('lab-page-list')
//     if (last) last.remove()
//     const list = lab_design_system('div', 'pages-list', setPage, '', '', ['design', 'pagesList'])

//     sectionElementsObject.sections.forEach(e => {
//       if (e != sectionElementsObject.section) {
//         const btn = lab_design_system('a', `pages-list-${e}`, list, e, '', ['design', 'pageLink'])
//         btn.setAttribute('href', `./${e}`)
//       }
//     })
//     list.addEventListener('mouseleave', () => list.remove())
//   })

//   const sizeSwitcher = lab_design_system('input', 'sliderRange', topSettings, null, null)
//   sizeSwitcher.setAttribute('type', "range")
//   sizeSwitcher.setAttribute('min', "1")
//   sizeSwitcher.setAttribute('max', "100")
//   sizeSwitcher.setAttribute('type', "range")
//   sizeSwitcher.setAttribute('value', "100")

//   const size = lab_design_system('div', 'screen-size', topSettings, options.zoom + '%', '', ['design', 'pixelView'])
//   size.style.width = "60px"
//   sizeSwitcher.value = options.zoom
//   page.style.scale = options.zoom / 100

//   sizeSwitcher.oninput = function () {
//     size.innerHTML = this.value + "%"
//     Options(options, 'zoom', this.value)
//     page.style.scale = this.value / 100
//   }

//   const view = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'visibility')
//   view.addEventListener('click', DesignConstructor.closeAll)
//   const download = DesignConstructor.button(topSettings, ['design', 'btn'], '', 'download')

//   const blindTop = lab_design_system('button', "blind-btn", topSettings, '', '', ['design', 'blind'])

//   blindTop.addEventListener('click', () => {
//     DesignConstructor.toggleClass(topSettings, 'design', 'top', 'hideTop')
//     Options(options, 'settingsBar')
//   })

//   if (!options.settingsBar) DesignConstructor.addClass(topSettings, 'design', 'hideTop')

//   const styleMenu = lab_design_system('div', 'style-box', designBody, '', 'none ', ['design', 'styleWrapper'])
//   const styleWrap = lab_design_system('div', 'style-wrap', styleMenu, '', 'none')
//   styleWrap.style.paddingTop = '75px'
//   styleWrap.style.overflowY = 'scroll'
//   styleWrap.style.maxHeight = 'calc(100% - 75px)'
//   styleWrap.classList.add('lab-scrollable')

//   const styleHide = lab_design_system('button', 'style-hide', styleMenu, '', 'none', ['design', 'hideStyles'])
//   const styleHideIcon = lab_design_system('img', 'style-hide-icon', styleHide, '', 'none')
//   styleHideIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/hide.svg`)
//   styleHideIcon.style.maxWidth = '100%'
//   styleHideIcon.style.marginLeft = '-4px'

//   styleHide.addEventListener('click', () => {
//     Designer.removePointer()
//     styleMenu.style.marginRight = styleMenu.style.marginRight == '-300px' ? '0' : '-300px'
//   })

//   StylesMenu(page)
//   //CODE MENU

//   const codeMenu = lab_design_system('div', 'code-box', designBody, '', 'none', ['design', 'codeBox'])
//   const codeMenuButton = DesignConstructor.button(codeMenu, ['design', 'codeBoxShow'], '', 'code-btn')
//   const codeWrapper = lab_design_system('div', "code-wrapper", codeMenu, '', '', ['design', 'codeWrapper'])
//   codeMenuButton.addEventListener('click', () => {
//     codeWrapper.innerHTML = ''
//     DesignConstructor.toggleClass(codeMenu, 'design', 'codeBox', 'codeBoxActive')
//     DesignConstructor.toggleClass(codeMenuButton, 'design', 'codeBoxShow', 'codeBoxShowActive')
//     document.getElementById('lab-user-page').innerHTML.split('>').forEach(e => {
//       codeWrapper.innerText += e + '>\n            '
//     })
//   })

//   //CODE MENU END

//   const fileInput = lab_design_system('input', 'img-input', designBody, '', '', ['design', 'noneFile'])
//   fileInput.setAttribute('type', 'file')

//   DesignConstructor.BlockResize()
//   lab_fade_in_recursively(designBody, 0.3)

//   window.addEventListener('resize', () => {
//     Designer.removePointer()
//   })


//   function rgb2hex(rgb) {
//     var rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
//     return (rgb && rgb.length === 4) ? "#" +
//       ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
//       ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
//       ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
//   }

//   function StylesMenu(item) {
//     const lastSelected = document.querySelector('.lab-selectedItem')
//     const box = document.getElementById('lab-style-wrap')
//     const itemStyles = window.getComputedStyle(item)
//     selectedElementChangeId = item

//     if (ActiveMode === 'rotation') {
//       activeRotateElement()
//     }

//     if (ActiveMode === 'resize') {
//       labResizeElements()
//     }

//     const css = {
//       'font-family': itemStyles.fontFamily,
//       'text-align': itemStyles.textAlign,
//       'font-style': itemStyles.fontStyle,
//       'font-weight': itemStyles.fontWeight,
//       'font-size': itemStyles.fontSize,
//       'line-height': itemStyles.lineHeight,
//       'letter-spacing': itemStyles.letterSpacing,
//       'stroke': itemStyles.stroke,
//       'color': itemStyles.color,
//       'background': rgb2hex(itemStyles.background),
//       'stroke-width': itemStyles.strokeWidth,
//       'padding-top': itemStyles.paddingTop,
//       'padding-right': itemStyles.paddingRight,
//       'padding-bottom': itemStyles.paddingBottom,
//       'padding-left': itemStyles.paddingLeft,
//       'margin-top': itemStyles.marginTop,
//       'margin-right': itemStyles.marginRight,
//       'margin-bottom': itemStyles.marginBottom,
//       'margin-left': itemStyles.marginLeft,
//     }

//     if (lastSelected) {
//       box.innerHTML = ''
//       lastSelected.classList.remove('lab-selectedItem')
//       renderMenu()
//     }
//     if (!lastSelected) renderMenu()

//     function renderMenu() {
//       item.classList.add('lab-selectedItem')
//       box.innerHTML = ''

//       const elementMenuButtons = lab_design_system('div', "elementMenu-buttons", box, '', '', ['design', 'StyleButtons'])
//       const elementMenuBody = lab_design_system('div', "elementMenuBody", box, '', '', ['design', 'elementMenuBody'])
//       const menuSettings = ['general', 'additional']
//       const activeSettings = 'general'

//       menuSettings.forEach((e) => {
//         const btn = lab_design_system('button', Designer.ID(), elementMenuButtons, e, 'element-menu-btn', ['design', 'StyleBtn'])
//         if (e == activeSettings) {
//           btn.classList.add('active')
//           btn.style.background = '#F7F7F7'
//           StyleSection(e)
//         }

//         btn.addEventListener('click', () => {
//           if (!btn.classList.contains('active')) {
//             let last = document.querySelector('.lab-element-menu-btn.active')
//             last.classList.remove('active')
//             last.style.background = '#E5E5E5'
//             StyleSection(e)
//             btn.classList.add('active')
//             btn.style.background = '#F7F7F7'
//           }
//         })
//       })

//       function StyleSection(param) {
//         elementMenuBody.innerHTML = ''
//         if (param == 'general') {
//           const idInput = DesignConstructor.input(elementMenuBody, "#" + item.id, '#')
//           idInput.addEventListener('input', () => {
//             item.id = idInput.value.trim().replace('#', '')
//           })
//           if (item.classList.contains('lab-img-container')) {
//             const fileBox = lab_design_system('div', 'file-preview-box', elementMenuBody, '', '', ['design', 'fileBox'])
//             let image = item.querySelector('img')


//             const fileInput = lab_design_system('input', 'file-preview-input', fileBox, '', '', ['design', 'fileBoxInput'])
//             fileInput.style.opacity = 0
//             fileInput.setAttribute('type', 'file')
//             const preview = lab_design_system('img', 'file-preview', fileBox)
//             preview.style.width = '100%'
//             preview.style.height = '100%'
//             preview.style.objectFit = 'cover'
//             preview.style.zIndex = '3'
//             preview.style.pointerEvents = 'none'
//             preview.style.position = 'relative'
//             preview.setAttribute('src', image.src)

//             fileInput.addEventListener('change', (i) => {
//               async function setSrc() {
//                 await loadImg(Array.from(i.target.files)[0], [image, preview])
//               }
//               setSrc()
//             })

//             const srcWrap = lab_design_system('div', Designer.ID(), elementMenuBody, '', '', ['design', 'styleBox'])
//             const fileSrc = lab_design_system('span', Designer.ID(), srcWrap, 'src')
//             fileSrc.style.marginRight = '10px'
//             let attrubuteInput = DesignConstructor.input(srcWrap, image.src)
//             attrubuteInput.addEventListener('input', () => {
//               image.setAttribute('src', attrubuteInput.value)
//             })

//             const objFit = DesignConstructor.dropList(elementMenuBody, ['cover', 'fill', 'contain', 'none', 'scale-down'], image.style.objectFit, (e) => Designer.WriteStyle(image, 'objectFit', e))

//             const horizontal = lab_design_system('div', Designer.ID(), elementMenuBody, '', '', ['design', 'styleBox'])
//             const horizontalLabel = lab_design_system('span', Designer.ID(), horizontal, 'horizontal')
//             horizontalLabel.style.marginRight = '10px'
//             horizontalLabel.style.minWidth = '50%'
//             let imagePos = image.style.objectPosition.split(' ')

//             let horizontalInput = DesignConstructor.input(horizontal, imagePos[0].replace('%', ''), '%')
//             horizontalInput.setAttribute('type', 'number')
//             horizontalInput.addEventListener('input', () => {
//               image.style.objectPosition = horizontalInput.value + "% " + image.style.objectPosition.split(' ')[1]
//             })
//             const imgWidth = lab_design_system('div', 'image-width', elementMenuBody, '', '', ['design', 'styleBox'])
//             const imgWidthLabel = lab_design_system('span', 'image-width-label', imgWidth, 'width')
//             imgWidthLabel.style.marginRight = '10px'
//             imgWidthLabel.style.minWidth = '50%'

//             let imgWidthInput = DesignConstructor.input(imgWidth, image.style.width.replace("%", ''), '%')
//             imgWidthInput.setAttribute('type', 'number')
//             imgWidthInput.addEventListener('input', () => {
//               image.style.width = imgWidthInput.value + '%'
//             })

//             const imgHeight = lab_design_system('div', 'image-height', elementMenuBody, '', '', ['design', 'styleBox'])
//             const imgHeightLabel = lab_design_system('span', 'image-height-label', imgHeight, 'height')
//             imgHeightLabel.style.marginRight = '10px'
//             imgHeightLabel.style.minWidth = '50%'

//             let imgHeightInput = DesignConstructor.input(imgHeight, image.style.height.replace("%", ''), '%')
//             imgHeightInput.setAttribute('type', 'number')
//             imgHeightInput.addEventListener('input', () => {
//               image.style.height = imgHeightInput.value + '%'
//             })


//             const vertical = lab_design_system('div', Designer.ID(), elementMenuBody, '', '', ['design', 'styleBox'])
//             const verticalLabel = lab_design_system('span', Designer.ID(), vertical, 'vertical')
//             verticalLabel.style.marginRight = '10px'
//             verticalLabel.style.minWidth = '50%'

//             let verticalInput = DesignConstructor.input(vertical, imagePos[1].replace('%', ''), '%')
//             verticalInput.setAttribute('type', 'number')

//             verticalInput.addEventListener('input', () => {
//               image.style.objectPosition = image.style.objectPosition.split(' ')[0] + " " + verticalInput.value + "%"
//             })


//             const aspect = lab_design_system('div', 'image-aspect', elementMenuBody, '', '', ['design', 'styleBox'])
//             const aspectLabel = lab_design_system('span', 'image-aspect-label', aspect, 'aspect-ratio')
//             aspectLabel.style.marginRight = '10px'
//             aspectLabel.style.minWidth = '50%'
//             console.log(image.style.aspectRatio);

//             let aspectInput = DesignConstructor.input(aspect, image.style.aspectRatio.split(' ')[0])
//             aspectInput.setAttribute('type', 'number')

//             aspectInput.addEventListener('input', () => {
//               image.style.aspectRatio = aspectInput.value
//             })

//           } else {
//             const tagList = ['div', 'section', 'p', 'span', 'a', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'form', 'input', 'ul', 'ol', 'li', 'font', 'i', 'strong', 'strike']
//             const tag = DesignConstructor.dropList(elementMenuBody, tagList, item.tagName, (e) => {
//               let newEl = document.createElement(e)
//               item.getAttributeNames().forEach(n => {
//                 newEl.setAttribute(n, item.getAttribute(n))
//               })
//               newEl.innerHTML = item.innerHTML
//               item.replaceWith(newEl)
//               item = newEl
//             })
//           }

//           const settings = lab_design_system('div', "menu-style-settings", elementMenuBody, '', '', ['design', 'styleGrid'])
//           const display = DesignConstructor.dropList(settings, ['flex', 'inline', 'block'], item.style.display, (e) => Designer.WriteStyle(item, 'display', e))


//           const pos = DesignConstructor.dropList(settings, ['absolute', 'fixed', 'relative'], item.style.position, (e) => Designer.WriteStyle(item, 'position', e))

//           const padding = lab_design_system('span', Designer.ID(), elementMenuBody, 'padding')

//           const paddingBox = lab_design_system('div', "padding-box", elementMenuBody, '', '', ['design', 'grid-box'])
//           const margin = lab_design_system('span', Designer.ID(), elementMenuBody, 'margin')
//           const marginBox = lab_design_system('div', "margin-box", elementMenuBody, '', '', ['design', 'grid-box'])

//           const padList = ['top', 'right', 'bottom', 'left']

//           padList.forEach(e => {
//             const padInput = DesignConstructor.input(paddingBox, css[`padding-${e}`], '', '', { el: item, style: `padding${capitalizeFirstLetter(e)}` })
//           })

//           padList.forEach(e => {
//             const marInput = DesignConstructor.input(marginBox, css[`margin-${e}`], '', '', { el: item, style: `margin${capitalizeFirstLetter(e)}` })
//           })


//           const colorSettings = lab_design_system('div', "colorSettings", elementMenuBody, '', '', ['design', 'styleBox'])
//           const textColor = lab_design_system('span', Designer.ID(), colorSettings, 'background')
//           const colorInput = lab_design_system('input', "input-text-color", colorSettings, '', '', ['design', 'colorInput'])
//           colorInput.setAttribute('type', 'color')
//           colorInput.setAttribute('value', css['background'])
//           if (item.tagName == 'svg') {
//             colorInput.setAttribute('value', item.getAttribute('fill'))
//           }

//           colorInput.addEventListener('input', () => {
//             if (item.tagName == 'svg') {
//               Designer.WriteStyle(item, 'fill', colorInput.value)
//             } else {
//               Designer.WriteStyle(item, 'background', colorInput.value)
//             }
//           })

//           item.getAttributeNames().forEach(n => {
//             if (!['style', 'id'].includes(n)) {
//               const wrap = lab_design_system('div', Designer.ID(), elementMenuBody, '', '', ['design', 'styleBox'])
//               const name = lab_design_system('span', Designer.ID(), wrap, n)
//               name.style.marginRight = '10px'
//               if (n != 'class') {
//                 let attrubuteInput = DesignConstructor.input(wrap, item.getAttribute(n))
//                 attrubuteInput.addEventListener('input', () => {
//                   item.setAttribute(n, attrubuteInput.value)
//                 })
//               } else {
//                 let attrubuteInput = DesignConstructor.input(wrap, '')
//                 let systemClasses = ['lab-selectedItem', 'lab-active-element', 'lab-img-container']
//                 let classes = String(item.getAttribute(n)).split(' ')

//                 classes.forEach(e => {
//                   if (!systemClasses.includes(e)) {
//                     attrubuteInput.value += e + ' '
//                   }
//                 })
//                 attrubuteInput.addEventListener('input', () => {
//                   item.setAttribute(n, attrubuteInput.value)
//                 })
//               }
//             }
//           })

//         }
//         if (param == 'additional') {
//           const fontFamily = DesignConstructor.dropList(elementMenuBody, ['Arial', 'Arial2', 'Arial3'], css['font-family'], (e) => Designer.WriteStyle(item, 'fontFamily', e))

//           const fontSettings = lab_design_system('div', "fontSettings", elementMenuBody, '', '', ['design', 'styleGrid'])
//           const textALign = lab_design_system('div', "textALign", fontSettings)
//           const textStyle = lab_design_system('div', "textStyle", fontSettings)
//           const textALignList = ['left', 'center', 'right', 'justify']
//           const textStyleList = ['italic', 'underline', 'line', 'dec']

//           textALignList.forEach(e => {
//             const btn = DesignConstructor.button(textALign, ['design', 'stylesBtn'], '', `${e}-text`)
//             btn.addEventListener('click', () => Designer.WriteStyle(item, 'textAlign', e))
//           })

//           const italic = DesignConstructor.button(textStyle, ['design', 'stylesBtn'], '', `italic-style`)
//           const underline = DesignConstructor.button(textStyle, ['design', 'stylesBtn'], '', `underline-style`)
//           const line = DesignConstructor.button(textStyle, ['design', 'stylesBtn'], '', `line-through-style`)
//           const dec = DesignConstructor.button(textStyle, ['design', 'stylesBtn'], '', `text-decoration-style`)

//           const textSettings = lab_design_system('div', "textSettings", elementMenuBody, '', '', ['design', 'styleGrid'])

//           const weight = DesignConstructor.dropList(textSettings, ['normal', 'bold', 'thin', 'medium', 'black'], css['font-weight'], (e) => Designer.WriteStyle(item, 'fontWeight', e))

//           const fontSize = DesignConstructor.input(textSettings, css['font-size'], 'px', '', { el: item, style: 'fontSize' })

//           const lineHeight = DesignConstructor.input(textSettings, css['line-height'], '', 'line-height', { el: item, style: 'lineHeight' })

//           const letterSpacing = DesignConstructor.input(textSettings, css['letter-spacing'], '', 'letter-spacing', { el: item, style: 'letterSpacing' })

//           const colorSettings = lab_design_system('div', "colorSettings", elementMenuBody, '', '', ['design', 'styleBox'])
//           const textColor = lab_design_system('span', "text-color", colorSettings, 'Text color')
//           const textColorInput = lab_design_system('input', "input-text-color", colorSettings, '', '', ['design', 'colorInput'])
//           textColorInput.setAttribute('type', 'color')
//           textColorInput.setAttribute('value', css['color'])
//           textColorInput.addEventListener('input', () => {
//             Designer.WriteStyle(item, 'color', textColorInput.value)
//           })
//         }
//         lab_fade_in_recursively(elementMenuBody, 0.2)
//       }

//       lab_fade_in_recursively(box, 0.3)
//     }
//   }
// }

// function selectTool(toolName) {
//   ActiveMode = null
//   selectedShape = null
//   elementDragging = false
//   labIsElementDragging = false
//   if (toolName == 'pen') {
//     selectedShape = 'feather'
//   }
//   else if (toolName == 'move') {
//     ActiveMode = 'translation'
//     labIsElementDragging = true
//   }
//   else if (toolName == 'resize') {
//     ActiveMode = 'resize'
//     isResizing = true
//   }
//   else if (toolName == 'rotate') {
//     ActiveMode = 'rotation'
//   }

//   else if (['text', 'img'].includes(toolName)) {
//     mode(toolName)
//   }

//   else if (toolName == 'square') {
//     isControlEnabled = false
//     selectedShape = 'square'
//     elementDragging = false
//   }
//   else if (toolName == 'circle') {
//     isControlEnabled = false
//     selectedShape = 'circle'
//     elementDragging = false
//   }
//   else if (toolName == 'triangle') {
//     isControlEnabled = false
//     selectedShape = 'triangle'
//     elementDragging = false
//   }
//   else if (toolName == 'formPath') {
//     isControlEnabled = false
//     selectedShape = 'formPath'
//     elementDragging = false
//   }
// }

// function capitalizeFirstLetter(val) {
//   return String(val).charAt(0).toUpperCase() + String(val).slice(1);
// }


// function mode(modeName) {
//   const page = document.getElementById('lab-user-page')
//   const pagePos = page.getBoundingClientRect()
//   let mouse = false
//   let startCoords
//   selectedShape = modeName
//   if (['text', 'img'].includes(modeName)) {
//     page.addEventListener('mousemove', write)
//   }

//   const types = {
//     'text': 'span',
//     'img': 'img',
//   }

//   async function write({ x, y }) {
//     if (selectedShape == modeName) {
//       if (mouse) {
//         let area = !document.getElementById('lab-area') ? lab_design_system('div', 'area', page, '', 'none', ['design', 'area']) : document.getElementById('lab-area')
//         area.style.top = (startCoords.y - pagePos.y) / pagePos.height * 100 + '%'
//         area.style.left = (startCoords.x - pagePos.x) / pagePos.width * 100 + '%'
//         area.style.width = (x - startCoords.x) / pagePos.width * 100 + '%'
//         area.style.height = (y - startCoords.y) / pagePos.height * 100 + '%'
//         area.style.opacity = ''

//         page.addEventListener('mouseup', CreateEl)

//       }
//       page.addEventListener('mousedown', start)
//     }
//     else {
//       page.removeEventListener('mousedown', start)
//       page.removeEventListener('mouseup', CreateEl)
//       page.removeEventListener('mousemove', write)
//       return false
//     }
//   }

//   function start(e) {
//     if (!mouse) {
//       mouse = true
//       startCoords = { x: e.clientX, y: e.clientY }
//     }
//   }

//   async function CreateEl() {
//     const area = document.getElementById('lab-area')
//     if (area) {
//       const areaPos = area.getBoundingClientRect()
//       mouse = false
//       startCoords = null
//       if (modeName == 'text') {
//         const item = await Designer.create(elementsToolsList, types[modeName], page, 'landscape', true)
//         item.style.position = 'absolute'
//         item.style.top = (areaPos.y - pagePos.y) / pagePos.height * 100 + '%'
//         item.style.left = (areaPos.x - pagePos.x) / pagePos.width * 100 + '%'
//         item.style.width = (areaPos.width) / pagePos.width * 100 + '%'
//         item.style.aspectRatio = areaPos.width / areaPos.height
//       }

//       if (modeName == 'img') {
//         let input = document.getElementById('lab-img-input')
//         input.click()
//         async function IMG(e) {
//           if (e.target.files.length > 0) {
//             const fileInfo = e.target.files[0]
//             console.log(fileInfo);

//             const itemBox = document.createElement('div')
//             itemBox.classList.add('lab-img-container')
//             itemBox.id = Designer.ID()

//             const item = await Designer.create(elementsToolsList, types[modeName], itemBox, 'landscape', true)
//             itemBox.style.position = 'absolute'
//             itemBox.style.top = (areaPos.y - pagePos.y) / pagePos.height * 100 + '%'
//             itemBox.style.left = (areaPos.x - pagePos.x) / pagePos.width * 100 + '%'
//             itemBox.style.width = (areaPos.width) / pagePos.width * 100 + '%'
//             item.style.aspectRatio = areaPos.width / areaPos.height
//             item.style.width = '100%'
//             item.style.pointerEvents = 'none'
//             item.setAttribute('src', URL.createObjectURL(fileInfo))
//             let i = Array.from(e.target.files)[0]

//             async function setSrc() {
//               await loadImg(i, [item])
//             }

//             setSrc()

//             item.style.objectFit = 'cover'
//             item.style.objectPosition = '50% 50%'
//             page.appendChild(itemBox)
//             input.removeEventListener('change', IMG)
//           }
//         }

//         input.addEventListener('change', IMG)
//       }
//       area.remove()
//     }
//   }

//   page.addEventListener('click', () => mouse = false)
// }

// design_mode()

// // return design_mode


// async function loadImg(i, items) {
//   let nameWithoutFirstNumbers = idStartWithoutNumbers(i.name.split('.')[0])
//   let withoutSpecChar = formatFromSpecChar(nameWithoutFirstNumbers)
//   let finalNameWithExtension = withoutSpecChar + "." + i.name.split('.')[1]
//   const userLSG = lab_local_storage_object('global')
//   userLSG.name = finalNameWithExtension
//   userLSG.type = i.type
//   userLSG.support = ""
//   let newSrc

//   function readFileAsync(file) {
//     return new Promise((resolve, reject) => {
//       let reader = new FileReader()
//       reader.readAsDataURL(file)

//       reader.onload = () => {
//         resolve(reader.result)
//       }
//       reader.onerror = reject;
//     })
//   }

//   async function processFile() {
//     try {
//       let imgData = await readFileAsync(i)
//       let regExp64 = "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
//       userLSG.support = imgData.trim().toString('base64').replace(regExp64, '')

//       await socket.emit('droppedImages', userLSG, async res => {
//         items.forEach(e => {
//           e.setAttribute('src', `/DB/USERS_FOLDERS/${res.uid}/apps/${res.path}/${res.mediaType}/${res.id}.webp`)
//           e.id = res.id
//           let opt = lab_local_storage_object('options').vpm
//           lab_save_section(opt)
//         })
//         return newSrc
//       })

//     } catch (err) {
//       console.log(err)
//     }
//   }



//   return await processFile()
// }


// function db_popup(el, lngData) {
//   const wrap = lab_design_system('div', 'db-popup-wrap', rootLayer, '', '', ['popup', 'wrap'])
//   const box = lab_design_system('div', 'db-popup', rootLayer, '', '', ['popup', 'box'])
//   box.style.flexDirection = 'column'
//   box.style.gap = '40px'

//   const inputs = el.querySelectorAll('input')
//   if (inputs && inputs.length > 0) {
//     inputs.forEach((e, index) => {
//       const line = lab_design_system('div', `db-popup-${index}`, box, '', '', ['design', 'styleBox'])
//       line.style.width = '100%'
//       line.style.justifyContent = 'space-evenly'
//       line.style.position = 'relative'
//       line.style.zIndex = inputs.length - index

//       const label = lab_design_system('div', `db-popup-${index}-label`, line, 'label')
//       const lineDb = DesignConstructor.dropList(line, sectionElementsObject.databases, '', (e) => {
//         // dbAction.line.db = e
//       })


//       lineDb.style.maxWidth = '20%'
//       const lineTable = DesignConstructor.dropList(line, sectionElementsObject.databases, '', (e) => {
//         // dbAction.line.table = e
//       })
//       lineTable.style.maxWidth = '20%'


//     })
//   }



//   let dbAction = {
//     top: {
//       db: null,
//       table: null
//     },
//     midle: {
//       db: null,
//       table: null
//     },
//     bottom: {
//       db: null,
//       table: null
//     },
//     operationType: null
//   }


//   let options = ['registration', 'auntification', 'write', 'read', 'update']
//   const operationType = DesignConstructor.dropList(box, options, '', (e) => {
//     dbAction.operationType = e
//   })
//   operationType.style.width = '50%'

//   const save = lab_design_system('button', 'save-db-options', box, lngData.save, '', ['buttons', 'action'])
//   save.style.width = 'fit-content'

//   save.addEventListener('click', () => {
//     //something
//   })

//   wrap.addEventListener('click', () => {
//     box.remove()
//     wrap.remove()
//   })
// }


function newSettings() {


  let last = document.getElementById('lab-top-settings')
  if (last) last.remove()
  let options = {
    vpm: "landscape"
  }
  let page = document.getElementById('lab-user-page')



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

}


setTimeout(() => {

  newSettings()
}, 1000);