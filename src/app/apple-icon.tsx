import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 60,
          color: 'white',
          fontFamily: 'serif',
          fontWeight: 300,
        }}
      >
        NE
      </div>
    ),
    {
      ...size,
    }
  )
}
