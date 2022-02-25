import Link from "next/link";

interface MenuItemProps {
  url?: string;
  text: string;
  icon: any;
  className?: string;
  onClick?: (event: any) => void;
}

export default function MenuItem(props: MenuItemProps) {

  return (
    <li onClick={props.onClick} className={`
      hover:bg-gray-100 cursor-pointer ${props.className}
    `}>
        {props.url ? (
         <Link href={props.url}>
          <a className={`
            flex flex-col justify-center items-center 
            h-20 w-20 text-gray-600 ${props.className}
          `}>
            {props.icon}
            <span className={`text-xs font-light `}>
              {props.text}
            </span>
          </a>
         </Link>
        ) : (
          <a className={`
            flex flex-col justify-center items-center 
            h-20 w-20 text-gray-600 ${props.className}
          `}>
            {props.icon}
            <span className={`text-xs font-light`}>
              {props.text}
            </span>
          </a>
        )}
    </li>
  )
}