import { HomeIcon, SettingsIcon, BellIcon } from "../icons";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/settings" text="Settings" icon={SettingsIcon} />
        <MenuItem url="/notifications" text="Notifications" icon={BellIcon} />
      </ul>
    </aside>
  )
}