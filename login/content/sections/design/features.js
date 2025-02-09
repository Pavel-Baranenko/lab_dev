const oldSRC = '/DB/USERS_FOLDERS/BHCJFJFCJHBBI_809/apps/login/content/sections/profile/img/'

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
        cursor: "pointer",
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
        cursor: "pointer",
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
        height: '100vh',
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
    'pageLink': {
      'default': {
        'color': "#fff",
        'textDecoration': "none"
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
        boxSizing: 'border-box',
      }
    },
    'pageWrap': {
      'default': {
        'overflowY': 'scroll',
        'maxWidth': '100svw',
        'minHeight': '100svh',
        'width': '100%',
        'paddingBottom': '50svh',
        'boxSizing': 'border-box',
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
        overflow: "hidden",
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
        cursor: "grab"
      }
    },
    'area': {
      'default': {
        position: 'absolute',
        border: "2px solid rgba(36, 99, 235, 1)",
        zIndex: 999
      }
    },
    'noneFile': {
      'default': {
        position: 'absolute',
        top: '-999999999999999999px',
        left: '-999999999999999999px',
        width: 0,
        height: 0
      }
    },
    'pagesList': {
      'default': {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '100%',
        background: '#464C59',
        borderRadius: "0 0 10px 10px",
        padding: '5px',
        display: 'flex',
        flexDirection: "column",
        gap: '5px',
        zIndex: 99
      }
    },
    'styleBox': {
      'default': {
        'display': "flex",
        'justifyContent': "space-between",
        'alignItems': "center"
      }
    },
    'colorInput': {
      'default': {
        'border': 'none',
        borderRadius: '4px',
        marginLeft: 'auto',
        width: '24px !important',
        minWidth: '24px !important',
        height: '24px !important',
        minHeight: '24px !important',
        border: 'none',
        backgroundColor: 'transparent',
      }
    },
    'styleGrid': {
      'default': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
      }
    },
    'hover': {
      'default': {
        'position': 'absolute',
        'background': 'linear-gradient(180deg, rgba(36,99,235,1) 0%, rgba(36,99,235,0) 100%)'
      }
    },
  },
  'appMenu': {
    'link': {
      'default': {
        'color': "inherit",
        'textDecoration': "none"
      }
    },
    'wrap': {
      'default': {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99999999
      }
    },
    'menu': {
      'default': {
        position: "fixed",
        top: '50%',
        left: '50%',
        transform: "translateY(-50%) translateX(-50%)",
        width: '100%',
        maxWidth: "clamp(69%, 90%, 1320px)",
        maxHeight: "clamp(69%, 90%, 820px)",
        height: "100%",
        display: "flex",
        boxShadow: '0px 4px 18.9px -4px #0000002E',
        zIndex: 99999999,
        borderRadius: "50px"
      }
    },
    'side': {
      'default': {
        background: "#3C4CA6",
        borderRadius: "50px 0 0 50px",
        width: '100%',
        maxWidth: "clamp(9%, 10%, 110px)",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "30px 0 30px 18px",
        boxSizing: "border-box"
      }
    },
    'sideBtn': {
      'default': {
        background: "transparent",
        borderRadius: "15px 0 0 15px",
        padding: "15px 30px 15px 15px",
        width: '100%',
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: '10px',
        color: "#fff",
        fontSize: '14px',
        cursor: "pointer",
        fontWeight: 500,
        textAlign: 'center',
        border: 'none'
      }
    },
    'box': {
      'default': {
        background: "#fff",
        borderRadius: " 0 50px 50px 0",
        width: '100%',
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%"
      }
    },
    'wrapper': {
      'default': {
        padding: "45px 50px",
        boxSizing: "border-box",
        display: "flex",
        maxHeight: "100%",
        height: "100%",
        width: '100%',
        flexDirection: "column",
        gap: '20px'
      }
    },
    'heading': {
      'default': {
        fontSize: '22px',
        fontWeight: 700,
        margin: '0',
        color: "#000"
      }
    },
    'textBox': {
      'default': {
        borderRadius: "25px",
        background: "#F7F7F7",
        boxSizing: "border-box",
        width: '100%',
        flex: '0 1 100%',
        display: 'flex',
        flexDirection: "column",
        padding: "25px",
        maxHeight: "calc(100% - 100px)",
      }
    },
    'textArea': {
      'default': {
        width: '100%',
        maxHeight: "550px",
        outline: "none",
        overflowY: "scroll",
      }
    },
    'drop': {
      'default': {
        position: "relative",
        cursor: "pointer",
        zIndex: 10
      }
    },
    'selected': {
      'default': {
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
        padding: "10px 6px",
        background: "#F4F4F5",
        borderRadius: "10px",
        boxSizing: 'border-box',
        height: "50px"
      }
    },
    'list': {
      'default': {
        position: "absolute",
        top: '40px',
        left: 0,
        right: 0,
        display: "none",
        flexDirection: "column",
        alignItems: "center",
        maxHeight: "100px",
        overflowY: "scroll",
        gap: "5px",
        padding: "10px",
        background: "#F4F4F5",
        borderRadius: "0 0 10px 10px",
        boxSizing: 'border-box'
      }
    },
    'row': {
      'default': {
        display: "flex",
        alignItems: "center",
        maxWidth: "700px",
        justifyContent: "space-between"
      }
    },
    'fold': {
      'default': {
        display: "flex",
        height: "100%",
        boxSizing: 'border-box',
        width: "100%",
        maxWidth: "255px",
        background: "#ECF0F9",
        display: "flex",
        flexDirection: "column",
        padding: '30px 0 25px 30px'
      }
    },
    'media': {
      'default': {
        display: "flex",
        boxSizing: 'border-box',
        height: "100%",
        width: "100%"
      }
    },
    'folder': {
      'default': {
        width: '100%',
        boxSizing: 'border-box',
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        gap: '12px',
        fontWeight: 500,
        padding: '15px',
        borderRadius: "10px 0 0 10px",
        color: '#000'
      }
    },
    'bottom': {
      'default': {
        width: '100%',
        boxSizing: 'border-box',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        padding: '0 30px 0 0',
        gap: '12px',
        marginTop: "auto"
      }
    },
    'borderBtn': {
      'default': {
        width: '100%',
        boxSizing: 'border-box',
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        gap: '12px',
        color: "#575757",
        padding: '13px',
        border: '1.55px dashed #000',
        borderRadius: '8px',
      }
    },
    'Input': {
      'default': {
        width: '100%',
        background: '#F4F4F5',
        boxSizing: 'border-box',
        cursor: "pointer",
        height: "50px",
        padding: '5px 20px',
        outline: 'none',
        border: 'none',
        textALign: 'center',
        borderRadius: '12px',
      }
    },
    'deploy': {
      'default': {
        width: '100%',
        display: 'flex',
        gap: '40px'
      }
    },
    'left': {
      'default': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '260px',
      }
    },
    'leftBox': {
      'default': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }
    },
    'right': {
      'default': {
        width: '100%'
      }
    },
    'execute': {
      'default': {
        display: "flex",
        gap: "30px"
      }
    },
    "DBList": {
      'default': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: "770px"
      }
    },
    'db': {
      'default': {
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
        fontWeight: 500,
        lineHeight: '34.81px',
        padding: ' 7px 0 7px 20px',
        background: '#F7F7F7',
        color: "#000",
        borderRadius: '12px'
      }
    },
    'setWrap': {
      'default': {
        display: "flex",
        flexDirection: "column",
        gap: '10px',
        maxHeight: "100%",
        flex: '0 1 100%'
      }
    },
    'scrollList': {
      'default': {
        display: "flex",
        flexDirection: "column",
        flex: "0 1 auto",
        maxHeight: 'calc(100% - 170px)',
        gap: '10px',
        overflowY: 'scroll'
      }
    },
    'files': {
      'default': {
        'display': 'flex',
        'flexWrap': 'wrap',
        'gap': "20px"
      }
    },
    'fileImg': {
      'default': {
        'display': 'flex',
        'flexDirection': "column",
        'maxWidth': "100px",
        'overflow': "hidden",
        'flexWrap': 'wrap',
        'gap': "5px"
      }
    },
    'boxImg': {
      'default': {
        'maxWidth': "100px",
        'aspectRatio': 1,
        'background': "#FED05E"
      }
    },
    'more': {
      'default': {
        position: "relative",
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: 'pointer'
      }
    },
    'moreList': {
      'default': {
        position: "absolute",
        background: "#fff",
        borderRadius: "10px",
        display: 'flex',
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "10px",
        padding: '10px',
        right: 0,
        zIndex: 99,
        paddingBottom: '100px',
        top: '25px'
      }
    },

  }
}

let styles = styles_d

function AppMenu() {
  const userLSG = lab_local_storage_object('global')

  lab_load_language_module(userLSG.lng).then(lngData => {

    const menuWrap = lab_design_system_d('div', 'app-menu-wrap', rootLayer, '', '', ['appMenu', 'wrap'])
    const menu = lab_design_system_d('div', 'app-menu', rootLayer, '', '', ['appMenu', 'menu'])
    const side = lab_design_system_d('div', 'app-menu-side', menu, '', '', ['appMenu', 'side'])
    const box = lab_design_system_d('div', 'app-menu-box', menu, '', '', ['appMenu', 'box'])


    console.log(sectionElementsObject);

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

    const server = {
      'lab_user_personnal_server': lngData.personnal_distant_server,
      // 'laboranth_remote_server': lngData.laboranth_remote_server,
      "laboranth_deploy_git": "Git",
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
    function SQL(value, type) {

    }

    function ActionListing(parent, array, head, func, list, btnVal) {
      const heading = lab_design_system_d('h6', 'app-menu-heading', parent, head, '', ['appMenu', 'heading'])
      const scrollList = lab_design_system_d('div', 'scrollList', parent, '', 'scrollable', ['appMenu', 'scrollList'])
      const pList = lab_design_system_d('div', 'app-menu-act', scrollList, '', '', ['appMenu', 'DBList'])

      array.forEach((e, index) => {
        const db = lab_design_system_d('div', `actions-${index}`, pList, '', '', ['appMenu', 'db'])
        const name = lab_design_system_d('span', `actions-name-${index}`, db, e, '', ['appMenu', 'link'])
        moreBtn(db, `actions-item-${index}`, list, e, func)
      })

      const bottom = lab_design_system_d('div', `bottom`, parent, '', '', ['appMenu', 'execute'])
      const input = Input('act-name', bottom)
      input.style.maxWidth = '220px'

      const btn = lab_design_system_d('button', 'act-btn', bottom, lngData.add, '', ['buttons', 'action'])
      btn.style.width = 'fit-content'

      btn.addEventListener('click', () => {
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

          btn.classList.add('app-menu-active')
          btn.style.color = '#3C4CA6'
          btn.style.background = '#fff'
          icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${e}-white.svg`)

          RenderBox(e)
        }
      })
    })

    function RenderBox(slide = 'backup') {
      box.innerHTML = ''
      activeSlide = slide

      if (slide == 'backup') {
        const wrapper = lab_design_system_d('div', 'app-menu-wrapper', box, '', 'scrollable', ['appMenu', 'wrapper'])
        dropDown(settings, settings.versioning, 'settings', (e) => Settings(e), wrapper)

        const setWrap = lab_design_system_d('div', 'setWrap', wrapper, '', '', ['appMenu', 'setWrap'])

        Settings('versioning')

        function Settings(name) {
          setWrap.innerHTML = ''
          if (name == 'versioning') {
            socket.emit("getUserBackups", lab_local_storage_object('global'), b => {
              const heading = lab_design_system_d('h6', 'manual-backup', setWrap, lngData.manual_management, '', ['appMenu', 'heading'])
              const row = lab_design_system_d('div', 'backup', setWrap, '', '', ['appMenu', 'row'])
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
              const autoRow = lab_design_system_d('div', 'a-backup', setWrap, '', '', ['appMenu', 'row'])
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
        }
      }

      else if (['css', 'js'].includes(slide)) TextEditableBox(slide)

      else if (slide == 'media') {
        let selectedFolder;
        const media = lab_design_system_d('div', 'app-menu-media', box, '', '', ['appMenu', 'media'])
        const folders = lab_design_system_d('div', 'app-menu-fold', media, '', '', ['appMenu', 'fold'])
        const wrapper = lab_design_system_d('div', 'app-menu-wrapper', media, '', 'scrollable', ['appMenu', 'wrapper'])
        const files = lab_design_system_d('div', 'app-menu-files', wrapper, '', '', ['appMenu', 'files'])
        sectionElementsObject.mediaLists.forEach(e => {
          const item = lab_design_system_d('div', `forder-${e.listName}`, folders, '', '', ['appMenu', 'folder'])
          const icon = lab_design_system_d('img', `forder-${e.listName}-icon`, item)
          icon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/folder.svg`)
          const text = lab_design_system_d('div', `forder-${e.listName}-name`, item, e.listName)

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

        function openFolder(list) {
          files.innerHTML = ''
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
          btn.addEventListener('click', () => {
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


        wrap.contentEditable = true


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
        const wrapper = lab_design_system_d('div', 'app-menu-wrapper', box, '', '', ['appMenu', 'wrapper'])

        ActionListing(wrapper, sectionElementsObject.databases, sideButtons[slide], SQL, {
          'removeSection': "delete",
          'open': "open"
        }, 'newSqlTable')
      }
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

      wrap.addEventListener('click', () => {
        listing.style.display = listing.style.display == 'flex' ? 'none' : 'flex'
      })

      return { wrap, text }
    }

    menuWrap.addEventListener('click', () => {
      menuWrap.remove()
      menu.remove()
    })
  })
  const fileInput = lab_design_system_d('input', 'file-input', rootLayer, '', '', ['design', 'noneFile'])
  fileInput.setAttribute('type', 'file')

}

AppMenu()




















const uditableTags = ["SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "P", "I", "B", "STRONG", "FONT", "EM", "SMALL", "SUP", "SUB", "Q", "BLOCKQUOTE"]


const ElementsList = {
  'button': {
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
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
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
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
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
    'title': "div",
    'template': {
      'landscape': {
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
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
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
  },
  'p': {
    'icon': `https://laboranth.tech/D/R/IMG/CLA/arrow_menu_close.svg`,
    'title': "p",
    'template': {
      'landscape': {
        'id': "lab-text",
        'tag': "p",
        'classes': "lab-text",
        'root': true,
        'styles': {
          'display': 'inline-block',
          'padding': '10px',
          'position': "relative",
        }
      },
      'landscape': {
        'id': "lab-text",
        'tag': "p",
        'classes': "lab-text",
        'root': true,
        'styles': {
          'display': 'inline-block',
          'padding': '10px',
          'position': "relative",
        }
      }
    }
  },
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

let ActiveMode
let selected

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

  static async removePointer() {
    if (document.getElementById('lab-HoverBox')) document.getElementById('lab-HoverBox').remove()
    if (document.getElementById('lab-HoverBoxbtn')) document.getElementById('lab-HoverBoxbtn').remove()
    if (document.getElementById('lab-block-menu')) document.getElementById('lab-block-menu').remove()
    if (document.getElementById('lab-block-menu-wrap')) document.getElementById('lab-block-menu-wrap').remove()
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
          if (direction == 'top') {
            top = -4
            left = -(pos.width / 2 + 12)
          }
          else if (direction == 'bottom') {
            top = pos.height - 4
            left = -(pos.width / 2 + 12)
          }
          else if (direction == 'left') {
            top = (pos.height / 2 - 4)
            left = -(pos.width + 12)
          }
          else if (direction == 'right') {
            top = (pos.height / 2 - 4)
            left = -12
          }
        }

        let last = document.getElementById('lab-pointer')
        if (!last || !last.classList.contains(direction) || mouseIsDown) {
          Designer.removePointer()
          const pointer = lab_design_system_d('div', 'pointer', page, '', `none ${direction}`, ['design', 'pointer'])
          pointer.style.transition = 'all 0.1s ease'

          if (['left', 'right'].includes(direction)) pointer.style.rotate = '90deg'

          Designer.Proportions(pointer, el, page, { top: top, left: left })
        }
      }

      if (y < (pos.y + 10) && y > pos.y - 50) writePointer('top')

      else if (y > (pos.y + pos.height - 10) && y < (pos.y + pos.height + 50)) writePointer('bottom')

      else if (x < (pos.x + 10) && x > (pos.x - 50)) writePointer('left')

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
    ActiveMode = modeName
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
      if (ActiveMode == modeName) {
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
            let input = document.getElementById('lab-file-input')
            input.click()
            function IMG(e) {
              const fileInfo = e.target.files[0];
              item.setAttribute('src', URL.createObjectURL(fileInfo))
              input.removeEventListener('change', IMG)
            }
            input.addEventListener('change', IMG)
          }
        }

        if (modeName == 'shape') {
          const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          const rect = document.createElementNS(svg.namespaceURI, "rect");
          svg.style.position = 'absolute'
          svg.style.width = areaPos.width / pagePos.width * 100 + '%'
          svg.style.height = areaPos.height / pagePos.height * 100 + '%'
          svg.style.left = (areaPos.x - pagePos.x) / pagePos.width * 100 + '%'
          svg.style.top = (areaPos.y - pagePos.y) / pagePos.height * 100 + '%'
          rect.classList.add('lab-none')
          rect.setAttribute("width", '100%');
          rect.setAttribute("height", '100%');
          svg.setAttribute("fill", "#FED05E");
          rect.style.pointerEvents = 'none'
          svg.appendChild(rect);
          page.appendChild(svg);
        }

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
      btnIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${icon}.svg`)
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
    }
  }

  static blockMenu(element, parent, options) {
    ActiveMode = null
    let last = document.getElementById('lab-block-menu')
    if (!last) {
      const menuWrap = lab_design_system_d('div', 'block-menu-wrap', parent, '', 'none', ['design', 'blockMenuWrap'])
      const menu = lab_design_system_d('div', 'block-menu', menuWrap, '', 'none', ['design', 'blockMenu'])
      Object.keys(options).forEach(e => {
        const item = lab_design_system_d('div', Designer.ID(), menu, '', 'none', ['design', 'blockMenuItem'])
        const itemIcon = lab_design_system_d('img', Designer.ID(), item, '0', 'none')
        const itemText = lab_design_system_d('span', Designer.ID(), item, options[e], 'none')
        itemIcon.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/${e}-icon.svg`)
        itemIcon.style.width = '15px'

        item.addEventListener('click', () => {
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
    } else last.remove()
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

function design_mode() {
  const designBody = lab_design_system_d('div', "designBody", rootLayer, '', '', ['design', 'body'])
  let options = JSON.parse(localStorage.getItem('options')) || {
    'vpm': "landscape",
    'zoom': 100,
    'toolBar': true,
    'settingsBar': true,
    'sideMenu': true,
  }

  //SIDE MENU

  const menu = lab_design_system_d('div', 'side-menu', designBody, '', '', ['design', 'side'])
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

  const elementsBox = lab_design_system_d('div', "elements-box", menu)
  elementsBox.style.margin = "40px 0 0 0"

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

  const pageWrap = lab_design_system_d('div', "user-page-wrap", designBody, '', '', ['design', 'pageWrap'])
  const page = lab_design_system_d('div', "user-page", pageWrap, '', '', ['design', 'page'])
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

  const tools = ['cursor', 'resize', 'shape', 'pen', 'text', 'actions', 'img']

  tools.forEach(tool => {
    const toolBtn = DesignConstructor.button(toolBar, ['design', 'toolbarItem'], '', tool, 'toolBtn')
    toolBtn.addEventListener('click', () => {

      let last = document.querySelector('.lab-toolBtn.active')
      if (last) {
        last.style.background = 'transparent'
        last.classList.remove('active')
      }
      toolBtn.classList.add('active')
      toolBtn.style.background = '#EBEEFF'
      Designer.mode(tool)
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
      pixelScreen.innerHTML = '414px'
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

  //CODE MENU

  const codeMenu = lab_design_system_d('div', 'code-box', designBody, '', 'none', ['design', 'codeBox'])
  const codeMenuButton = DesignConstructor.button(codeMenu, ['design', 'codeBoxShow'], '', 'code-btn')
  const codeWrapper = lab_design_system_d('div', "code-wrapper", codeMenu, '', '', ['design', 'codeWrapper'])
  codeMenuButton.addEventListener('click', () => {
    DesignConstructor.toggleClass(codeMenu, 'design', 'codeBox', 'codeBoxActive')
    DesignConstructor.toggleClass(codeMenuButton, 'design', 'codeBoxShow', 'codeBoxShowActive')

    document.getElementById('lab-user-page').innerHTML.split('>').forEach(e => {
      codeWrapper.innerText += e + '>\n            '
    })
  })

  //CODE MENU END

  const fileInput = lab_design_system_d('input', 'file-input', designBody, '', '', ['design', 'noneFile'])
  fileInput.setAttribute('type', 'file')

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
    const last = document.getElementById('lab-elementMenu')
    if (last) last.remove()

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
    const page = document.getElementById('lab-user-page')
    page.addEventListener('click', () => {
      item.classList.remove('selectedItem')
      if (elementMenu) elementMenu.remove()
    })
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
  Designer.removePointer()
})



