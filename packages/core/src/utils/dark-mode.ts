// Dark mode adapter
const darkModeEnabled = () => {
  const forceSetting = localStorage.getItem('forceDarkModeOn')
  const browserPrefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const darkModeEnabled =
    forceSetting === 'true' || (!forceSetting && browserPrefersDark)

  if (browserPrefersDark) {
    document.body.classList.toggle('has-darkmode', darkModeEnabled)
    document.body.classList.toggle('has-darkmode__forced', false)
  } else {
    document.body.classList.toggle('has-darkmode', true)
    document.body.classList.toggle('has-darkmode__forced', darkModeEnabled)
  }
}

export default darkModeEnabled
