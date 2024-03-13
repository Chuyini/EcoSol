import { FunctionComponent, HtmlHTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UserIcon from '../icons/User';

interface AvatarProps extends HtmlHTMLAttributes<HTMLAnchorElement> {
   picture?: string;
   userId: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({
   picture,
   userId,
   className,
}) => {
   const btnClass = ' flex  items-center justify-center rounded-full  ';
   return (
      <Link
         href={'/pages/Profile/' + userId}
         className={
            (picture
               ? '  h-12 w-12 overflow-hidden border  '
               : ' bg-primary-1 p-2 ') +
            className +
            btnClass
         }
      >
         {picture && (
            <Image
               className='  '
               src={picture}
               alt={userId}
               width={100}
               height={100}
            />
         )}
         {!picture && <UserIcon className='h-8 w-8 text-white' />}
      </Link>
   );
};

export default Avatar;
