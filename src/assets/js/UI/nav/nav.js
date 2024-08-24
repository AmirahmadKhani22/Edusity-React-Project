import useResponsiveEffect from './../../hooks/useNavResponsiveEffect.js'
import Logo from './components/logo.js'
import DefaultMenu from './components/defaultTypeMenu.js'
import ShutterMenu from './components/shutterTypeMenu.js'

function Nav() {
  const {navRef , screenWidth} = useResponsiveEffect()
  return (
    <nav className='nav-container' ref={navRef}>
      <Logo />
      {screenWidth <= 841 ? <ShutterMenu />:<DefaultMenu />}
    </nav>
  )
}

export default Nav
