function plan_payment_steps(parent, plan, price, lngData) {
  if (!document.getElementById('lab-steps')) {
    const closeWrapper = lab_design_system("div", "close-wrapper", parent, 0, 0, ["steps", "closeWrapper"])
    closeWrapper.addEventListener('click', () => {
      parent.removeChild(closeWrapper)
      parent.removeChild(wrap)
    })
    const wrap = lab_design_system("div", "steps", parent, 0, 0, ["steps", "wrap"])

    const top = lab_design_system("div", "steps-top", wrap, 'Payment information', 0, ["steps", "top"])

    const box = lab_design_system("div", "steps-box", wrap, 0, 0, ["steps", "box"])

    const steps = lab_design_system("div", "steps-items", box, 0, 0, ["steps", "items"])

    const stepsLng = {
      step1: "Step 1",
      step2: "Step 2",
      step3: "Step 3"
    }
    Object.keys(stepsLng).forEach((e, index) => {
      const step = lab_design_system("div", `steps-items-${e}`, steps, 0, 0, ["steps", "item"])
      const stepMark = lab_design_system("div", `steps-mark-${e}`, step, 0, 0, ["steps", "mark"])
      const stepText = lab_design_system("span", `steps-${e}`, step, stepsLng[e])

      if (index < 2) {
        const line = lab_design_system("div", `steps-line-${e}`, steps, 0, 0, ["steps", "line"])
      }
    })
    const form = lab_design_system("div", "steps-form", box, 0, 0, ["steps", "form"])

    function renderForm(stepNumber) {
      if (stepNumber === 1) {
        form.innerHTML = ''
        const lastName = lab_design_system("input", "steps-form-last-name", form, 0, 0, ["steps", "input"])
        lastName.setAttribute('value', customerData.customerLastName)
        lastName.setAttribute('placeholder', lngData.last_name)
        const firstName = lab_design_system("input", "steps-form-first-name", form, 0, 0, ["steps", "input"])
        firstName.setAttribute('value', customerData.customerFirstName)

        firstName.setAttribute('placeholder', lngData.first_name)
        const BillingAddress = lab_design_system("input", "steps-form-billing-address", form, 0, 0, ["steps", "input"])
        BillingAddress.setAttribute('value', customerData.customerStreetAdress)

        BillingAddress.style.width = 'calc(72% - 10px)'
        BillingAddress.setAttribute('placeholder', lngData.billing_address)
        const postCode = lab_design_system("input", "steps-form-post-code", form, 0, 0, ["steps", "input"])
        postCode.setAttribute('value', customerData.customerZipCode)

        postCode.style.width = 'calc(28% - 10px)'
        postCode.setAttribute('placeholder', lngData.zip_code)
        const country = lab_design_system("input", "steps-form-country", form, 0, 0, ["steps", "input"])
        country.setAttribute('placeholder', lngData.country)
        country.setAttribute('value', customerData.customerCountry)

        const city = lab_design_system("input", "steps-form-City", form, 0, 0, ["steps", "input"])
        city.setAttribute('placeholder', lngData.city)
        city.setAttribute('value', customerData.customerCity)

        const check = lab_design_system("div", "steps-form-check", form, 0, 0, ["steps", "check"])
        const checkInput = lab_design_system("input", "steps-form-checkbox", check, 0, 0, ["steps", "checkbox"])
        checkInput.setAttribute('type', 'checkbox')

        const checkText = lab_design_system("div", "steps-form-check-text", check, lngData.pay_as_enterprise)
        const btn = lab_design_system("button", "steps-form-btn", form, lngData.next_element, 0, ['steps', 'btn'])
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
        const companyName = lab_design_system("input", "steps-form-last-name", form, 0, 0, ["steps", "input"])
        companyName.setAttribute('placeholder', lngData.company_name)
        companyName.style.width = '100%'
        // companyName.setAttribute('value',customerData.customerCountry)


        const check = lab_design_system("div", "steps-form-check", form, 0, 0, ["steps", "check"])
        const checkInput = lab_design_system("input", "steps-form-checkbox", check, 0, 0, ["steps", "checkbox"])
        checkInput.setAttribute('type', 'checkbox')


        const checkText = lab_design_system("div", "steps-form-check-text", check, lngData.to_the_billing_address)


        const BillingAddress = lab_design_system("input", "steps-form-billing-address", form, 0, 0, ["steps", "input"])
        BillingAddress.style.width = 'calc(72% - 10px)'
        BillingAddress.setAttribute('placeholder', lngData.billing_address)
        BillingAddress.setAttribute('value', customerData.customerHDAdress)

        const postCode = lab_design_system("input", "steps-form-post-code", form, 0, 0, ["steps", "input"])
        postCode.style.width = 'calc(28% - 10px)'
        postCode.setAttribute('placeholder', lngData.zip_code)
        postCode.setAttribute('value', customerData.customerHDZip)

        checkInput.addEventListener('change', () => {
          BillingAddress.setAttribute('value', customerData.customerStreetAdress)
          postCode.setAttribute('value', customerData.customerZipCode)
        })

        const vat = lab_design_system("input", "steps-form-vat", form, 0, 0, ["steps", "input"])
        vat.setAttribute('placeholder', lngData.vat_number + '(' + lngData.optional + ")")
        vat.style.width = '100%'
        postCode.setAttribute('value', customerData.customerVatNumber)


        const btn = lab_design_system("button", "steps-form-btn", form, 'Next step', 0, ['steps', 'btn'])
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
        const heading = lab_design_system("div", "steps-heading", form, 0, 0, ["steps", "heading"])

        if (price) {
          const headingFirst = lab_design_system("span", "steps-heading-one", heading, lngData.billing_amount_is + " ")
          const priceText = lab_design_system("span", "steps-heading-price", heading, price + '€')

          const headingLast = lab_design_system("span", "steps-heading-two", heading, " " + lngData.tax_included)

          priceText.style.fontWeight = '700'
          priceText.style.fontSize = '32px'

        }


        const check = lab_design_system("div", "steps-form-check", form, 0, 0, ["steps", "check"])
        const checkInput = lab_design_system("input", "steps-form-checkbox", check, 0, 0, ["steps", "checkbox"])
        checkInput.setAttribute('type', 'checkbox')
        const checkText = lab_design_system("div", "steps-form-check-text", check, lngData.accept + lngData.laboranth_general_conditions)
        check.style.width = 'fit-content'


        const text = lab_design_system("div", "steps-heading-text", form, 'You will be redirected to the mollie platform. All banking Information to process this payment are secured.', 0, ["steps", "heading"])
        text.style.marginTop = '25px'

        const btn = lab_design_system("button", "steps-form-btn", form, 'Pay', 0, ['steps', 'btn'])

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

  const top = lab_design_system("div", "plans-top", parent, 0, 0, ["plans", "top"])
  const heading = lab_design_system("span", "plans-heading", top, 'Tariff plans', 0, ["plans", "heading"])
  const subHeading = lab_design_system("p", "plans-sub-heading", top, "Commencez avec plus de 900 templates gratuits et personnalisables, l'Éditeur intuitif glissez-déposez, des outils pour renforcer votre présence en ligne et plus encore.", 0, ["plans", "text"])

  let activeDuration = 'mounth'

  const plansMass = { 'mounth': 'Monthly', 'year': 'Yearly' }
  const switcher = lab_design_system("div", "plans-switcher", top, 0, 0, ["plans", "switcher"])

  Object.keys(plansMass).forEach(e => {
    const switcherBtn = lab_design_system("button", `plans-switcher-${e}`, switcher, plansMass[e], 0, ["plans", "switcherBtn"])
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

  const wrap = lab_design_system("div", "plans", parent, 0, 0, ["plans", "wrap"])

  function renderPlans(dur) {
    wrap.innerHTML = ''

    tariff.forEach((e, index) => {
      const item = lab_design_system("div", `plans-${index}`, wrap, 0, 0, ["plans", "plan"])
      const angle = lab_design_system("img", `plans-angle-${index}`, item, 0, 0, ["plans", "angle"])
      angle.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/point-card-${e.color.label}.svg`)
      const title = lab_design_system("span", `plans-title-${index}`, item, e.title, 0, ["plans", "title"])
      const description = lab_design_system("p", `plans-description-${index}`, item, e.description, 0, ["plans", "description"])
      if (e.price) {

        const priceBox = lab_design_system("div", `plans-box-${index}`, item, 0, 0, ["plans", "box"])
        const currency = lab_design_system("div", `plans-currency-${index}`, priceBox, 'usd ', 0, 0)
        const price = lab_design_system("div", `plans-price-${index}`, priceBox, String(e.price[dur]), 0, ["plans", "price"])
        const duration = lab_design_system("div", `plans-duration-${index}`, priceBox, ' /month', 0, 0)
      }
      function renderPoint(list, type = '') {
        const points = lab_design_system("div", `points-${type}-${index}`, item, 0, 0, ['plans', 'points'])
        list.forEach((p, i) => {
          const point = lab_design_system("div", `point-${type}-${index}-${i}`, points, 0, 0, ['plans', 'point'])
          const img = lab_design_system("img", `point-img-${type}-${index}-${i}`, point)
          img.setAttribute('src', `https://laboranth.tech/D/R/IMG/CLA/point-${e.color.label}.svg`)
          const span = lab_design_system("span", `point-text-${type}-${index}-${i}`, point, p, 0, (type ? ['plans', type] : 0))
        })
      }

      e.points && renderPoint(e.points)
      e.subPoints && renderPoint(e.points, 'bold')

      e.heading && lab_design_system("span", `heading-${index}`, item, e.heading, 0, ['plans', 'heading'])

      const btn = lab_design_system("button", `plan-btn-${index}`, item, 'Choose plan', 0, ['plans', 'btn'])

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