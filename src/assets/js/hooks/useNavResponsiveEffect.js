import {useState , useRef , useEffect} from 'react'

function useResponsiveEffect() {
  const navRef = useRef(null)
  const [screenWidth , getNavbarWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener("scroll" , event => {
      const navbar = navRef.current
      navbar.style.backgroundColor = window.scrollY >= 30 ? "var(--primery-color)" : "var(--transparent)"
    })
    window.addEventListener("resize" , event => {
      getNavbarWidth(window.innerWidth)
    })
  } , [])
  return {
    navRef,
    screenWidth
  }
}

export default useResponsiveEffect
