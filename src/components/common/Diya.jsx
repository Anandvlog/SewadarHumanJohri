const Diya =({ size = 56, className = "" }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#B85A12" />
          <stop offset="45%" stopColor="#E1791F" />
          <stop offset="100%" stopColor="#F6D06B" />
        </linearGradient>

        <radialGradient id="glowGrad" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#F6D06B" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F6D06B" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="50" cy="38" r="34" fill="url(#glowGrad)" />

      <path
        className="diya-flame"
        d="M50 20c-6 9-11 15-11 24a11 11 0 0 0 22 0c0-9-5-15-11-24z"
        fill="url(#flameGrad)"
      />

      <path
        d="M12 66c6 7 21 11 38 11s32-4 38-11c-3 9-18 16-38 16s-35-7-38-16z"
        fill="#B85A12"
      />

      <path
        d="M8 62c8 8 24 13 42 13s34-5 42-13c-2 3-4 5-8 7-9 6-21 16-34 16s-25-10-34-16c-4-2-6-4-8-7z"
        fill="#E1791F"
      />

      <ellipse cx="50" cy="62" rx="42" ry="9" fill="#C9781E" />
    </svg>
  );
}

export default Diya;