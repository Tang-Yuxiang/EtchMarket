'use client';

import {
  Box,
  Collapse,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useMemo, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MediaList from './MediaList';
import SharpSVG from '@/assets/icons/sharp.svg';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import ConnectWallet from '@/containers/ConnectWallet';

type INavigationAPP = {
  onClick?: () => void;
};

const IndexerMenu: React.FC<INavigationAPP> = ({ onClick }) => {
  const matches = useMediaQuery('(min-width:750px)');
  const [anchorIndexerEl, setanchorIndexerEl] = useState<null | HTMLElement>(null);
  const openIndexer = Boolean(anchorIndexerEl);
  const [expandIndexer, setExpandIndexer] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const onClickIndexer = (event: React.MouseEvent<HTMLDivElement>) => {
    setanchorIndexerEl(event.currentTarget);
  };
  const handleCloseIndexer = () => {
    setanchorIndexerEl(null);
  };
  const indexerLinks = [
    {
      pathname: '/ethscriptions',
      name: 'Ethscriptions',
      isNew: false,
    },
    {
      pathname: '/transactions',
      name: 'Transactions',
      isNew: false,
    },
  ];
  const isIndexerRoutes = useMemo(
    () => Boolean(indexerLinks.find((item) => item.pathname === pathname)),
    [pathname, indexerLinks],
  );
  return (
    <>
      {matches ? (
        <>
          <Box className={'menu'} sx={{ display: 'flex' }} onClick={onClickIndexer}>
            <Box className={isIndexerRoutes ? 'active-menu' : ''}>Indexer</Box>
            {openIndexer ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorIndexerEl}
            open={openIndexer}
            onClose={handleCloseIndexer}
            sx={{
              '& .MuiMenu-paper': {
                borderRadius: '8px',
                mt: '10px',
              },
            }}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {indexerLinks.map((item) => (
              <MenuItem
                key={item.name}
                sx={{
                  color: pathname === item.pathname ? 'white' : 'rgba(255,255,255,0.64)',
                  fontSize: '14px',
                  '&:hover': { color: 'white' },
                }}
                onClick={() => {
                  router.push(item.pathname);
                  handleCloseIndexer();
                }}
              >
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
              lineHeight: '40px',
              height: '40px',
            }}
            className="h5 memu"
            onClick={() => setExpandIndexer(!expandIndexer)}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Indexer</Typography>
            {expandIndexer ? <ExpandLess /> : <ExpandMore />}
          </Box>
          <Collapse sx={{ width: '100%' }} in={expandIndexer} timeout="auto" unmountOnExit>
            {indexerLinks.map((item) => {
              const active = item.pathname === pathname;
              return (
                <Box
                  onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    onClick && onClick();
                  }}
                  key={item.name}
                  sx={{ width: '100%', textAlign: 'left', p: '0 12px' }}
                >
                  <Link
                    href={item.pathname}
                    key={item.name}
                    className={'h5 menu sub'}
                    style={{ position: 'relative', color: active ? 'white' : 'rgba(255,255,255,0.65)' }}
                  >
                    {item.name}
                  </Link>
                </Box>
              );
            })}
          </Collapse>
        </>
      )}
    </>
  );
};
const MoreMenu: React.FC<INavigationAPP> = ({ onClick }) => {
  const matches = useMediaQuery('(min-width:750px)');
  const [anchorMoreEl, setanchorMoreEl] = useState<null | HTMLElement>(null);
  const openMore = Boolean(anchorMoreEl);
  const [expandMore, setExpandMore] = useState(false);
  const pathname = usePathname();
  const onClickMore = (event: React.MouseEvent<HTMLDivElement>) => {
    setanchorMoreEl(event.currentTarget);
  };
  const handleCloseMore = () => {
    setanchorMoreEl(null);
  };
  const outerLinks = [
    {
      name: 'List Marketplace',
      pathname: 'https://forms.gle/T4n73hAWoJNKSjgFA',
    },
    {
      name: 'Apply For Launchpad',
      pathname: 'https://forms.gle/i54oqjXL2Rqsi61y8',
    },
    {
      name: 'Dune Analytics',
      pathname: 'https://dune.com/etchmarket/ethscriptions-marketplaces',
    },
  ];

  return (
    <>
      {matches ? (
        <>
          <Box className={'menu'} sx={{ display: 'flex' }} onClick={onClickMore}>
            <Box>...</Box>
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorMoreEl}
            open={openMore}
            onClose={handleCloseMore}
            sx={{
              '& .MuiMenu-paper': {
                borderRadius: '8px',
                mt: '10px',
              },
            }}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {outerLinks.map((item) => (
              <MenuItem
                key={item.name}
                sx={{
                  color: pathname === item.pathname ? 'white' : 'rgba(255,255,255,0.64)',
                  fontSize: '14px',
                  '&:hover': { color: 'white' },
                }}
                onClick={() => {
                  window.open(item.pathname);
                  handleCloseMore();
                }}
              >
                {item.name}
                <SharpSVG color="rgba(255,255,255,0.45)" style={{ marginLeft: '4px' }} />
              </MenuItem>
            ))}
            <Divider sx={{ mx: '10px' }} />
            <MediaList color="rgba(255,255,255,0.45)" />
          </Menu>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
              height: '40px',
              lineHeight: '40px',
            }}
            className="h5 memu"
            onClick={() => setExpandMore(!expandMore)}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>More</Typography>
            {expandMore ? <ExpandLess /> : <ExpandMore />}
          </Box>
          <Collapse sx={{ width: '100%' }} in={expandMore} timeout="auto" unmountOnExit>
            {outerLinks.map((item) => (
              <Box
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  onClick && onClick();
                }}
                key={item.name}
                sx={{ width: '100%', textAlign: 'left', pl: '12px', whiteSpace: 'noWrap' }}
              >
                <Link href={item.pathname} target="_blank" key={item.name} className={'h5 menu sub'}>
                  {item.name}
                </Link>
              </Box>
            ))}
          </Collapse>
        </>
      )}
    </>
  );
};

const NavigationAPP: React.FC<INavigationAPP> = ({ onClick }) => {
  const matches = useMediaQuery('(min-width:750px)');
  const pathname = usePathname();
  const menu = [
    // {
    //   name: 'ERC20S',
    //   pathname: '/erc20s',
    //   isNew: false,
    // },
    // {
    //   name: 'Staking',
    //   pathname: '/staking',
    //   isNew: false,
    // },
    {
      name: 'Tokens',
      pathname: '/tokens',
      isNew: false,
    },
    {
      name: 'Marketplace',
      pathname: '/market',
      isNew: false,
    },
    // {
    //   name: 'Swap',
    //   pathname: '/swap',
    //   isNew: false,
    // },
    // {
    //   name: 'Bridge',
    //   pathname: '/bridge',
    //   isNew: false,
    // },
    {
      name: 'Launchpad',
      pathname: '/launchpad',
      isNew: false,
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: matches ? 'row' : 'column',
        gap: matches ? '28px' : 'none',
        '& .menu': {
          fontSize: '16px',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.64)',
          textDecoration: 'none',
          '&:hover': {
            cursor: 'pointer',
          },

          '&.h5': {
            width: '100%',
            lineHeight: '40px',
            background: '#171A1F',
            color: 'white',
          },
          '&.sub': {
            color: 'rgba(255,255,255,0.65)',
            fontWeight: 400,
          },
          '& .active-menu': {
            color: '#fff',
          },
        },
        '& .active-menu': {
          color: '#fff',
        },
      }}
    >
      {!matches && (
        <Box
          sx={{
            mb: '24px',
          }}
        >
          <ConnectWallet />
        </Box>
      )}
      <IndexerMenu onClick={onClick} />
      {menu.map((item) => {
        const isActive = item.pathname == '/' ? item.pathname == pathname : pathname.startsWith(item.pathname);
        return (
          <Link
            href={item.pathname}
            key={item.name}
            className={matches ? (isActive ? 'menu active-menu' : 'menu') : 'h5 menu'}
            style={{ position: 'relative' }}
            onClick={onClick}
          >
            {item.name}
            {item.isNew && (
              <Typography
                sx={{
                  p: '0 6px',
                  background: '#80ec9f',
                  color: '#000',
                  position: { xs: 'unset', sm: 'absolute' },
                  right: '-25px',
                  top: '-10px',
                  borderRadius: '30px',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                New
              </Typography>
            )}
          </Link>
        );
      })}
      {!matches && (
        <Link href={'/owner'} className={'h5 menu'} style={{ position: 'relative' }} onClick={onClick}>
          My Ethscriptions
        </Link>
      )}

      {!matches && (
        <Link href={'/asset'} className={'h5 menu'} style={{ position: 'relative' }} onClick={onClick}>
          My Assets
        </Link>
      )}

      <MoreMenu onClick={onClick} />
      {!matches && (
        <Box mt={'14px'} width={'100%'}>
          <MediaList
            sx={{
              justifyContent: 'flex-start',
              p: 0,
              width: '100%',
            }}
            color="rgba(255,255,255,0.45)"
          />
        </Box>
      )}
    </Box>
  );
};

export default NavigationAPP;
