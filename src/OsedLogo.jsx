export const OsedLogo = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  }

  return (
    <div className={`flex items-center gap-3 ${sizeClasses[size]}`}>
      <div className="flex items-center justify-center rounded-md bg-[#11131A] p-2">
        <svg viewBox="0 0 80 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="46" width="10" height="8" rx="1" fill="#8B0E1A" />
          <rect x="20" y="36" width="10" height="8" rx="1" fill="#8B0E1A" />
          <rect x="32" y="26" width="10" height="8" rx="1" fill="#8B0E1A" />

          <polygon points="12,56 22,34 32,38 22,60" fill="#D0D2D6" />
          <polygon points="22,44 32,22 42,26 32,48" fill="#D0D2D6" />
          <polygon points="32,32 42,10 52,14 42,36" fill="#D0D2D6" />
          <polygon points="52,14 70,14 70,22 50,22" fill="#D0D2D6" />
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-xl font-bold tracking-[0.2em] text-[#D0D2D6] uppercase">OSED</span>
        <span className="text-[10px] uppercase tracking-[0.32em] text-gray-500">ONE STEP EVERYDAY.</span>
      </div>
    </div>
  )
}
