function alert(text) {
  let last = document.getElementById('lab-alert')
  if (last) last.remove()
  const wrap = lab_design_system("div", "alert", document.querySelector('body'), text, null, ["alert", "wrap"])

  wrap.style.transition = "all 0.4s linear"
  wrap.style.opacity = 1
  wrap.style.transform = "none"

  let fadeTimeout, removeTimeout

  fadeTimeout = setTimeout(() => {
    wrap.style.transition = "all 0.2s linear"
    wrap.style.opacity = 0

    removeTimeout = setTimeout(() => {
      wrap.remove()
    }, 2000)
  }, 6000)

  wrap.addEventListener("transitionend", () => {
    clearTimeout(fadeTimeout)
    clearTimeout(removeTimeout)
  })
}

return alert