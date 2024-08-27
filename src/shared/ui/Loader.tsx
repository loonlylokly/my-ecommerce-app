type LoaderProps = {
  size?: 'small' | 'medium' | 'large';
}

export const Loader = ({ size = 'medium' }: LoaderProps) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizeClasses[size]} border-4 border-blue-500 border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};
