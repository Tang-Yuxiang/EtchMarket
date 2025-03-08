'use client';

import { red } from '@mui/material/colors';
import Footer from '../../containers/Footer';
import { Box } from '@mui/material';
// import React from '../../assets/images/hom'
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        background: "url('/images/home_bg.webp')",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
      <Footer />
    </Box>
  );
}
