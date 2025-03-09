import * as React from 'react';
import { Menu, MenuItem, Button, Divider, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    boxShadow: 'none',
    color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : 'rgb(55, 65, 81)',
    '& .MuiMenuItem-root': {
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  },
}));

export default function MentorshipMenu({ title = "Menu", menuItems = [] }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={open ? 'custom-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ backgroundColor: 'transparent', color: 'black', boxShadow: 'none' }}
      >
        {title}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => (
          item.divider ? <Divider key={`divider-${index}`} sx={{ my: 0.5 }} /> :
          <MenuItem key={index} onClick={handleClose} disableRipple>
            {item.icon}
            {item.label}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
