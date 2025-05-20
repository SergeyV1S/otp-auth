interface IContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => (
  <div className='flex justify-center items-center min-h-screen'>
    <div className='container'>{children}</div>
  </div>
);
