import { FunctionComponent } from 'react';
import Image from 'next/image';
import UsContent, { UsContentProps } from '../../molecules/UsContent/UsContent';

interface UsProps {
   body: UsContentProps;
   src: string;
}

const Us: FunctionComponent<UsProps> = ({ body, src }) => {
   return (
      <div className='mx-auto my-16 flex w-10/12 flex-col lg:flex-row'>
         <UsContent {...body}></UsContent>
         <Image
            src={src}
            width={100}
            height={100}
            alt='Us picture'
            className='mx-auto h-auto w-10/12 lg:w-1/3'
         />
      </div>
   );
};

export default Us;
