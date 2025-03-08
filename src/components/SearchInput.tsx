'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Divider, IconButton, InputBase, InputBaseProps } from '@mui/material';

import ClearSVG from '../assets/images/clear-icon.svg';
import SearchSVG from '../assets/images/search-icon.svg';

interface ISearchInput {
  onClear: () => void;
  onClick: (val: string) => void;
  onEnter: (val: string) => void;
}

const SearchInput: React.FC<ISearchInput & InputBaseProps> = ({
  onClick,
  onClear,
  onEnter,
  defaultValue,
  placeholder,
  sx,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isClear, setIsClear] = useState<boolean>(false);

  return (
    <Box
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 640,
        height: 52,
        borderRadius: '6px',
        border: '1px solid #2F343E',
        background: '#202229',
        transition: 'all 0.2s ease-in-out',
        ':focus-within': {
          border: '1px solid #E5FF65',
        },
        ...sx,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        inputRef={inputRef}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onInput={(event) => {
          const _value = inputRef.current?.value.trim() ?? '';
          if (_value != '') {
            setIsClear(true);
          } else {
            setIsClear(false);
            onClear();
          }
        }}
        onKeyUp={(event) => {
          const _value = inputRef.current?.value.trim() ?? '';
          if (event.key === 'Enter' && _value != '') {
            onEnter(_value);
          }
        }}
      />

      {isClear && (
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.value = '';
              setIsClear(false);
              onClear();
            }
          }}
        >
          <ClearSVG />
        </IconButton>
      )}

      <Divider sx={{ height: '100%', m: 0.5 }} orientation="vertical" />
      <IconButton
        color="primary"
        sx={{ p: '10px' }}
        aria-label="directions"
        onClick={() => {
          const _value = inputRef.current?.value.trim() ?? '';
          onClick(_value);
        }}
      >
        <SearchSVG />
      </IconButton>
    </Box>
  );
};

export default SearchInput;
