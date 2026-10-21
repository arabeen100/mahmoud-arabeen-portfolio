import MSA from '../assets/images/MSA.png'

export default function BrandMark({ size = 44, ...props }) {
  return (
    <span
      aria-hidden='true'
      style={{
        display: 'inline-block',
        flex: 'none',
        boxSizing: 'border-box',
        width: size,
        height: size,
        padding: 2,
        borderRadius: '50%',
        background: 'var(--gradient-accent)',
        boxShadow: '0 0 14px 1px rgb(45 212 191 / 0.45)',
      }}
      {...props}
    >
      <img
        src={MSA}
        alt=''
        width={size}
        height={size}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%',
          background: 'var(--bg)',
        }}
      />
    </span>
  )
}
