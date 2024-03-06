import { FunctionComponent, ComponentProps } from 'react';

const EcoSolIcon: FunctionComponent<ComponentProps<'svg'>> = ({
   className,
}) => {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 50 50'
         className={className}
         strokeWidth='1.5'
         stroke='currentColor'
         fill='none'
      >
         <path d='M7.896578,5.106262L5.962652,43.543048h33.60197L39.081141,5.106262h-31.184563Z' />
         <path d='M42.223771,5.106262l3.626112,38.436786h-3.626112' />
         <path
            d='M13.422745,11.770301c-.426813,5.731061,4.008646,12.554353,10.178745,12.554353c5.969788.045175,10.111368-7.094401,10.152336-12.554353'
            transform='translate(.000001 0.000001)'
         />
         <path
            d='M31.441682,13.190508c-.525393-1.681955.028944-3.340965,2.139364-3.534715c2.293087.038949,3.300757,2.153799,2.266771,4.229017'
            transform='translate(.000001 0)'
         />
         <path
            d='M31.441682,13.190508c-.525393-1.681955.028944-3.340965,2.139364-3.534715c2.293087.038949,3.300757,2.153799,2.266771,4.229017'
            transform='matrix(-1.075339 0 0 1 49.719552 0)'
         />
      </svg>
   );
};

export default EcoSolIcon;
