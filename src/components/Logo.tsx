import type React from 'react';

interface LogoProps {
  color?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  color = 'text-secondary',
  className = '',
}) => {
  return (
    <svg
      className={`w-auto h-full fill-current ${color} ${className}`}
      viewBox='0 0 399.1 400'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className={`fill-current ${color}`}
        d='M384.96,399.07L115.51,129.64v166.82h-20V105.5c0-4.04,2.44-7.69,6.17-9.24,3.73-1.55,8.04-.69,10.9,2.17l286.52,286.5-14.14,14.14Z'
      />
      <path
        className={`fill-current ${color}`}
        d='M306.52,268.64V105.51c0-4.04-2.43-7.69-6.16-9.24-3.74-1.55-8.04-.69-10.9,2.17l-76.61,76.6,14.17,14.11,59.51-59.5v119s19.99,19.99,19.99,19.99Z'
      />
      <path
        className={`fill-current ${color}`}
        d='M201.01,402c-53.78,0-104.29-20.88-142.21-58.8C20.88,305.27,0,254.77,0,200.99S20.88,96.71,58.81,58.79C96.73,20.88,147.23,0,201.01,0c35.38,0,70.16,9.27,100.56,26.82,4.78,2.76,6.42,8.88,3.66,13.66-2.76,4.78-8.88,6.42-13.66,3.66-27.36-15.79-58.68-24.14-90.56-24.14C101.2,20,20,101.19,20,200.99s81.2,181.01,181.01,181.01c31.88,0,63.19-8.35,90.55-24.16,4.78-2.76,10.9-1.12,13.66,3.66,2.76,4.78,1.12,10.9-3.66,13.66-30.4,17.56-65.17,26.84-100.56,26.84Z'
      />
    </svg>
  );
};
export default Logo;
