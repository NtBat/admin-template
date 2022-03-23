import useAppData from "../../data/hook/useAppData";
import Avatar from "./Avatar";
import ButtonTheme from "./ButtonTheme";
import Title from "./Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  const {theme, changeTheme} = useAppData();

  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ButtonTheme theme={theme} changeTheme={changeTheme}/>
        <Avatar className="ml-3" />
      </div>
    </div>
  )
}