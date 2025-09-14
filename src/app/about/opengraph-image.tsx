import { ImageResponse } from 'next/og'

export const alt = 'About | nothing ever stays the same for long'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
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
          flexDirection: 'column',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 300,
            color: 'white',
            textAlign: 'center',
            maxWidth: '80%',
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          About
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 300,
            color: 'white',
            textAlign: 'center',
            opacity: 0.8,
            maxWidth: '70%',
          }}
        >
          nothing ever stays the same for long
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
