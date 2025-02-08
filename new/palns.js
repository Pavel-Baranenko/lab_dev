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
  customerVatNumber: '',
}

const plans_styles = {
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
  }
}

function plans_design_system(tag, id, parent, content, className, styled) {
  const elementToAppend = document.createElement(tag)
  const styles = plans_styles

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


function plan_payment_steps(parent, plan, price, lngData) {
  if (!document.getElementById('lab-steps')) {
    const closeWrapper = plans_design_system("div", "close-wrapper", parent, 0, 0, ["steps", "closeWrapper"])
    closeWrapper.addEventListener('click', () => {
      parent.removeChild(closeWrapper)
      parent.removeChild(wrap)
    })
    const wrap = plans_design_system("div", "steps", parent, 0, 0, ["steps", "wrap"])

    const top = plans_design_system("div", "steps-top", wrap, 'Payment information', 0, ["steps", "top"])

    const box = plans_design_system("div", "steps-box", wrap, 0, 0, ["steps", "box"])

    const steps = plans_design_system("div", "steps-items", box, 0, 0, ["steps", "items"])

    const stepsLng = {
      step1: "Step 1",
      step2: "Step 2",
      step3: "Step 3"
    }
    Object.keys(stepsLng).forEach((e, index) => {
      const step = plans_design_system("div", `steps-items-${e}`, steps, 0, 0, ["steps", "item"])
      const stepMark = plans_design_system("div", `steps-mark-${e}`, step, 0, 0, ["steps", "mark"])
      const stepText = plans_design_system("span", `steps-${e}`, step, stepsLng[e])

      if (index < 2) {
        const line = plans_design_system("div", `steps-line-${e}`, steps, 0, 0, ["steps", "line"])
      }
    })
    const form = plans_design_system("div", "steps-form", box, 0, 0, ["steps", "form"])

    function renderForm(stepNumber) {
      if (stepNumber === 1) {
        form.innerHTML = ''
        const lastName = plans_design_system("input", "steps-form-last-name", form, 0, 0, ["steps", "input"])
        lastName.setAttribute('value', customerData.customerLastName)
        lastName.setAttribute('placeholder', lngData.last_name)
        const firstName = plans_design_system("input", "steps-form-first-name", form, 0, 0, ["steps", "input"])
        firstName.setAttribute('value', customerData.customerFirstName)

        firstName.setAttribute('placeholder', lngData.first_name)
        const BillingAddress = plans_design_system("input", "steps-form-billing-address", form, 0, 0, ["steps", "input"])
        BillingAddress.setAttribute('value', customerData.customerStreetAdress)

        BillingAddress.style.width = 'calc(72% - 10px)'
        BillingAddress.setAttribute('placeholder', lngData.billing_address)
        const postCode = plans_design_system("input", "steps-form-post-code", form, 0, 0, ["steps", "input"])
        postCode.setAttribute('value', customerData.customerZipCode)

        postCode.style.width = 'calc(28% - 10px)'
        postCode.setAttribute('placeholder', lngData.zip_code)
        const country = plans_design_system("input", "steps-form-country", form, 0, 0, ["steps", "input"])
        country.setAttribute('placeholder', lngData.country)
        country.setAttribute('value', customerData.customerCountry)

        const city = plans_design_system("input", "steps-form-City", form, 0, 0, ["steps", "input"])
        city.setAttribute('placeholder', lngData.city)
        city.setAttribute('value', customerData.customerCity)

        const check = plans_design_system("div", "steps-form-check", form, 0, 0, ["steps", "check"])
        const checkInput = plans_design_system("input", "steps-form-checkbox", check, 0, 0, ["steps", "checkbox"])
        checkInput.setAttribute('type', 'checkbox')

        const checkText = plans_design_system("div", "steps-form-check-text", check, lngData.pay_as_enterprise)
        const btn = plans_design_system("button", "steps-form-btn", form, lngData.next_element, 0, ['steps', 'btn'])
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

            console.log(customerData);

            renderForm(2)
          } else {
            alertUser(lngData.input_cannot_be_empty)
          }


        })
      }
      else if (stepNumber === 2) {
        document.getElementById('lab-steps-mark-step1').style.background = '#FED05E'
        document.getElementById('lab-steps-line-step1').style.borderTop = '1px solid #FED05E'

        form.innerHTML = ''
        const companyName = plans_design_system("input", "steps-form-last-name", form, 0, 0, ["steps", "input"])
        companyName.setAttribute('placeholder', lngData.company_name)
        companyName.style.width = '100%'
        // companyName.setAttribute('value',customerData.customerCountry)


        const check = plans_design_system("div", "steps-form-check", form, 0, 0, ["steps", "check"])
        const checkInput = plans_design_system("input", "steps-form-checkbox", check, 0, 0, ["steps", "checkbox"])
        checkInput.setAttribute('type', 'checkbox')


        const checkText = plans_design_system("div", "steps-form-check-text", check, lngData.to_the_billing_address)


        const BillingAddress = plans_design_system("input", "steps-form-billing-address", form, 0, 0, ["steps", "input"])
        BillingAddress.style.width = 'calc(72% - 10px)'
        BillingAddress.setAttribute('placeholder', lngData.billing_address)
        BillingAddress.setAttribute('value', customerData.customerHDAdress)

        const postCode = plans_design_system("input", "steps-form-post-code", form, 0, 0, ["steps", "input"])
        postCode.style.width = 'calc(28% - 10px)'
        postCode.setAttribute('placeholder', lngData.zip_code)
        postCode.setAttribute('value', customerData.customerHDZip)

        checkInput.addEventListener('change', () => {
          BillingAddress.setAttribute('value', customerData.customerStreetAdress)
          postCode.setAttribute('value', customerData.customerZipCode)
        })

        const vat = plans_design_system("input", "steps-form-vat", form, 0, 0, ["steps", "input"])
        vat.setAttribute('placeholder', lngData.vat_number + '(' + lngData.optional + ")")
        vat.style.width = '100%'
        postCode.setAttribute('value', customerData.customerVatNumber)


        const btn = plans_design_system("button", "steps-form-btn", form, 'Next step', 0, ['steps', 'btn'])
        btn.style.margin = '20px auto 0 0'
        btn.addEventListener('click', () => {
          //! companyName

          if (BillingAddress.value && postCode.value && companyName.value) {
            customerData.customerHDAdress = BillingAddress.value
            customerData.customerHDZip = postCode.value
            customerData.customerVatNumber = vat.value
            renderForm(3)

          } else {
            alertUser(lngData.input_cannot_be_empty)
          }

        })

      }
      else if (stepNumber === 3) {
        document.getElementById('lab-steps-mark-step2').style.background = '#FED05E'
        document.getElementById('lab-steps-line-step2').style.borderTop = '1px solid #FED05E'

        form.innerHTML = ''
        form.style.flexDirection = 'column'
        const heading = plans_design_system("div", "steps-heading", form, 0, 0, ["steps", "heading"])

        if (price) {
          const headingFirst = plans_design_system("span", "steps-heading-one", heading, lngData.billing_amount_is + " ")
          const priceText = plans_design_system("span", "steps-heading-price", heading, price + '€')

          const headingLast = plans_design_system("span", "steps-heading-two", heading, " " + lngData.tax_included)

          priceText.style.fontWeight = '700'
          priceText.style.fontSize = '32px'

        }


        const check = plans_design_system("div", "steps-form-check", form, 0, 0, ["steps", "check"])
        const checkInput = plans_design_system("input", "steps-form-checkbox", check, 0, 0, ["steps", "checkbox"])
        checkInput.setAttribute('type', 'checkbox')
        const checkText = plans_design_system("div", "steps-form-check-text", check, lngData.accept + lngData.laboranth_general_conditions)
        check.style.width = 'fit-content'


        const text = plans_design_system("div", "steps-heading-text", form, 'You will be redirected to the mollie platform. All banking Information to process this payment are secured.', 0, ["steps", "heading"])
        text.style.marginTop = '25px'

        const btn = plans_design_system("button", "steps-form-btn", form, 'Pay', 0, ['steps', 'btn'])

        btn.style.margin = '40px auto 0 auto'
        btn.addEventListener('click', () => {
          if (checkInput.value == 'on') {
            let temp = []

            Object.keys(customerData).forEach(e => {
              temp.push({ [e]: customerData[e] })
            })
            customerData = temp
            console.log(customerData);

          } else {
            alertUser(lngData.general_conditions_must_be_accepted)
          }

        })
      }
    }

    renderForm(1)

    lab_fade_in_recursively(wrap, 0.3)
  }

}

function plans(parent, lngData) {
  const tariff = [
    {
      title: lngData.free,
      description: "Tariff where you can get acquainted with the service's capabilities and create your own website",
      price: {
        mounth: 0,
        year: 0
      },
      points: [
        'Creation of 3 projects',
        'Disk space 200MB',
        'Content and Plugins Basic'
      ],
      color: {
        label: "black",
        value: "#243042"
      }
    },
    {
      title: lngData.personnal_plan,
      description: "Suitable for aspiring businessmen, individual entrepreneurs and experts",
      price: {
        mounth: 35,
        year: 420
      },
      points: [
        'Creation of 15 projects',
        'Disk space 1GB',
        'Export git / .zip / serveurs persos (purchasing servers from our partners)',
        'Linking your domain',
        'Content and Plugins Basic',
        'Content and Plugins Pro'
      ],
      color: {
        label: "green",
        value: "#3e8483"
      }
    },
    {
      title: "Business Lite",
      description: "An exceptional choice for growing businesses with up to 5 team members.",
      price: {
        mounth: 60,
        year: 720
      },
      points: [
        'Unlimited project creation',
        'Disk space 10GB',
        '5 collaborators',
        'Export git / .zip / serveurs persos /serveurs auto',
        'Linking your domain',
        'Content and Plugins Basic',
        'Content and Plugins Pro'
      ],
      subPoints: [
        'Full transfer of source code',
        'Using AI',
        'Ephemeral sharing',
        'Payment tools',
        'Automaticly daily backup'
      ],
      color: {
        label: "orange",
        value: "#ff642a"
      }
    },
    {
      title: "Business Premium",
      description: "For businesses that want to use all the capabilities of the service. Also ideal for web studios and IT companies",
      price: {
        mounth: 350,
        year: 4200
      },
      points: [
        'Unlimited project creation',
        'Disk space 50GB',
        '15 collaborators',
        'Export git / .zip / serveurs persos /serveurs auto',
        'Linking your domain',
        'Content and Plugins Basic',
        'Content and Plugins Pro',
        'Content and Plugins VIP'
      ],
      subPoints: [
        'Full transfer of source code',
        'Using AI',
        'Ephemeral sharing',
        'Payment tools',
        'Automaticly daily backup',
        'eCommerce',
        'Access to training materials'
      ],
      color: {
        label: "blue",
        value: "#2463eb"
      }
    },
    {
      title: "Tailored",
      description: "Extended solution for high scale businesses and organizations like universities",
      heading: "On request",
      color: {
        label: "yellow",
        value: "#fed05e"
      }
    }
  ]

  const top = plans_design_system("div", "plans-top", parent, 0, 0, ["plans", "top"])
  const heading = plans_design_system("span", "plans-heading", top, 'Tariff plans', 0, ["plans", "heading"])
  const subHeading = plans_design_system("p", "plans-sub-heading", top, "Commencez avec plus de 900 templates gratuits et personnalisables, l'Éditeur intuitif glissez-déposez, des outils pour renforcer votre présence en ligne et plus encore.", 0, ["plans", "text"])

  let activeDuration = 'mounth'

  const plansMass = { 'mounth': 'Monthly', 'year': 'Yearly' }
  const switcher = plans_design_system("div", "plans-switcher", top, 0, 0, ["plans", "switcher"])

  Object.keys(plansMass).forEach(e => {
    const switcherBtn = plans_design_system("button", `plans-switcher-${e}`, switcher, plansMass[e], 0, ["plans", "switcherBtn"])
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

  const wrap = plans_design_system("div", "plans", parent, 0, 0, ["plans", "wrap"])

  function renderPlans(dur) {
    wrap.innerHTML = ''

    tariff.forEach((e, index) => {
      const item = plans_design_system("div", `plans-${index}`, wrap, 0, 0, ["plans", "plan"])
      const angle = plans_design_system("img", `plans-angle-${index}`, item, 0, 0, ["plans", "angle"])
      angle.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/point-card-${e.color.label}.svg`)
      const title = plans_design_system("span", `plans-title-${index}`, item, e.title, 0, ["plans", "title"])
      const description = plans_design_system("p", `plans-description-${index}`, item, e.description, 0, ["plans", "description"])
      if (e.price) {

        const priceBox = plans_design_system("div", `plans-box-${index}`, item, 0, 0, ["plans", "box"])
        const currency = plans_design_system("div", `plans-currency-${index}`, priceBox, 'usd ', 0, 0)
        const price = plans_design_system("div", `plans-price-${index}`, priceBox, String(e.price[dur]), 0, ["plans", "price"])
        const duration = plans_design_system("div", `plans-duration-${index}`, priceBox, ' /month', 0, 0)
      }
      function renderPoint(list, type = '') {
        const points = plans_design_system("div", `points-${type}-${index}`, item, 0, 0, ['plans', 'points'])
        list.forEach((p, i) => {
          const point = plans_design_system("div", `point-${type}-${index}-${i}`, points, 0, 0, ['plans', 'point'])
          const img = plans_design_system("img", `point-img-${type}-${index}-${i}`, point)
          img.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/point-${e.color.label}.svg`)
          const span = plans_design_system("span", `point-text-${type}-${index}-${i}`, point, p, 0, (type ? ['plans', type] : 0))
        })
      }

      e.points && renderPoint(e.points)
      e.subPoints && renderPoint(e.points, 'bold')

      e.heading && plans_design_system("span", `heading-${index}`, item, e.heading, 0, ['plans', 'heading'])

      const btn = plans_design_system("button", `plan-btn-${index}`, item, 'Choose plan', 0, ['plans', 'btn'])

      btn.addEventListener('click', () => {
        plan_payment_steps(parent, e.title, e.price[dur])
      })
      btn.style.backgroundColor = e.color.value
      e.color.label == 'yellow' && (btn.style.color = '#000')
    })

    lab_fade_in_recursively(wrap, 0.3)

  }
  lab_fade_in_recursively(top, 0.3)
  renderPlans(activeDuration)
}


return plans