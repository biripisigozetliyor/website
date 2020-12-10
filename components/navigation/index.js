import MainNavigation from "./mainNavigation"
import LayoutNavigation from "./layoutNavigation"
function Navigation(props) {
  const { type } = props

  const renderNav = (type) => {
    if (type === "main") {
      return <MainNavigation />
    }
    if (type === "layout") {
      return <LayoutNavigation />
    }
  }
  return renderNav(type)
}

export default Navigation
