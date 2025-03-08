'use client';

import { Box, Typography, Divider, Link } from '@mui/material';
import MediaList from './MediaList';

interface IFooter {
  showMedia?: boolean;
}

const Footer: React.FC<IFooter> = ({ showMedia = true }) => {
  return (
    <Box>
      {showMedia && <MediaList />}
      <Divider />
      <Box sx={{ padding: '30px 0 50px 0' }}>
        <Typography
          variant={'h5'}
          sx={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.44)',
            fontSize: '14px',
            fontFamily: 'HarmonyOS Sans',
            lineHeight: '16px',
          }}
        >
          Media inquires for EtchMarket - Contact
          <Link
            href="https://twitter.com/EtchMarket"
            target="__blank"
            sx={{ fontWeight: '500', textDecoration: 'none', color: '#FAFAFA', ml: '12px' }}
          >
            @EtchMarket
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
