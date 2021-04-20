import React from 'react';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import { IconButton, Tooltip } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness7Icon from '@material-ui/icons/Brightness7';

// const themeNames = ['dark', 'blue', 'colored', 'light'];

export default function ToggleThemeMenu({ themeName, toggleTheme, t }) {
    // const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        // setAnchorEl(event.currentTarget);
        toggleTheme();
    };

    // const handleClose = (name) => {
    //     setAnchorEl(null);
    //     toggleTheme(name);
    // };

    return (
        <div>

            <Tooltip title={t('Change color theme')}>
                <IconButton onClick={handleClick}>
                    {themeName === 'dark' && <Brightness4Icon />}
                    {themeName === 'blue' && <Brightness5Icon />}
                    {themeName === 'colored' && <Brightness6Icon />}
                    {themeName === 'light' && <Brightness7Icon />}
                </IconButton>
            </Tooltip>
            {/* <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {themeNames.map(name => <MenuItem
                    key={name}
                    selected={name === themeName}
                    onClick={() => handleClose(name)}>
                    {t(name)}
                </MenuItem>)}
            </Menu> */}
        </div>
    );
}