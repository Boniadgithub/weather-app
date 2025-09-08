
import {Link} from "react-router-dom"
import {useTheme} from "@/context/theme-provider"
const Header = () => {
 const {theme ,setTheme } = useTheme();
 const isDark = theme === "dark"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2">
      <div className="container mx-auto flex h-16 item-center justify-between px-4">
        <Link to = {'/'}>
          <img src = {theme==="dark" ? "/logo (1).png": "/logo2.png"}  alt="climate logo" className="h-14"/>
        </Link>
        <div>
            {/* search */}
            {/* theme togel */}
            <div onClick={()=> setTheme(isDark? "light" :"dark")}>
                toggle
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
