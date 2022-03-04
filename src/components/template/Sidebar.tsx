import { HomeIcon, SettingsIcon, BellIcon, LogoutIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  return (
    <aside className={`
      flex flex-col 
      bg-gray-200
      dark:bg-gray-900 
    `}>
      <div className={`
        w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-800
        flex flex-col items-center justify-center
      `}>
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/settings" text="Settings" icon={SettingsIcon} />
        <MenuItem url="/notifications" text="Notifications" icon={BellIcon} />
      </ul>
      <ul>
        <MenuItem 
          text="Logout" icon={LogoutIcon} 
          className={`
            text-red-600 hover:bg-red-500 hover:text-white
            dark:text-red-400 dark:hover:text-white
          `}
          onClick={() => console.log('logout')} 
        />
      </ul>
    </aside>
  )
}