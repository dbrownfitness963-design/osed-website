export const OsedLogo = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
  }

  return (
    <img 
      src="/osed-logo.png" 
      alt="OSED - One Step Every Day" 
      className={`${sizeClasses[size]} object-contain`}
    />
  )
}
