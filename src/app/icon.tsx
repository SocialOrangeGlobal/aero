import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px',
        }}
      >
        <img 
          src="https://conference.eresearch.edu.au/wp-content/uploads/2025/08/AeRO_Logo_CMYK.png" 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        />
      </div>
    ),
    { ...size }
  );
}
