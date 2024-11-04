import { Typography } from '@/components/atoms/Typography/Typography'

interface FooterInfoProps {
  title: string
  description?: string
  address?: string
  tel?: string
}

export const FooterInfo = ({ title, description, address, tel }: FooterInfoProps) => {
  return (
    <div>
      <Typography variant="h3" className="mb-4">{title}</Typography>
      {description && (
        <Typography variant="small" className="mb-4">
          {description}
        </Typography>
      )}
      {(address || tel) && (
        <Typography variant="small">
          {address && (
            <>
              {address}<br />
            </>
          )}
          {tel && (
            <>
              TEL: {tel}
            </>
          )}
        </Typography>
      )}
    </div>
  )
} 