export const getWindowWidth = () => {
  if (window.innerWidth <= 768) return 0.45
  else if (window.innerWidth <= 1024) return 1
  else if (window.innerWidth <= 1200) return 1.2
  else return 1.5
}
