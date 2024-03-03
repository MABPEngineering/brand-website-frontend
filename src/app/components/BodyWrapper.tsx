import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="bg-white mx-auto max-w-screen-2xl font-body text-black text-center">
      {children}
    </div>
  );
};

export default Wrapper;
