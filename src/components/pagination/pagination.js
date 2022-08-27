import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginations({ page, setPage, setFetch }) {
  const handleChange = (event, value) => {
    setPage(value);
    setFetch(true)
  };

  return (
    <Stack spacing={2} mt={3} sx={{ color: "#fff!important" }} >
      <Pagination 
        sx={{ 
          "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root": {
            color: "#fff!important",
            fontSize: "15px"
          }
        }} 
        count={5} 
        page={page} 
        onChange={handleChange} 
      />
    </Stack>
  );
}
