import Link from 'next/link';
import useAuth from '../../data/hook/useAuth';

interface AvatarProps {
  className?: string;
}

export default function Avatar(props: AvatarProps) {
  const { user } = useAuth();

  return (  
    <Link href="/profile">
      <img 
        src={user?.imageUrl ?? '/images/avatar.svg'} 
        alt="avatar" 
        className={`w-8 h-8 rounded-full cursor-pointer ${props.className}`}
      />
    </Link>
  )
}