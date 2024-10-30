import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share'
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, useNavigate } from 'react-router-dom';


const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
    { icon: <HomeIcon />, name: 'Home' },
];

const Dial = ({ height=100 }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    //    social


    const actionHanlder = (route) => {     // naviagte to home page
        if (route == "Home") {
            navigate("/")
        }
    }

    //Height adjustment of dial in social cmpt
    const setHeight = () => {
        let val;

        if (pathname === "/social") {
            val = height.h1
        } else if (pathname === "/social/home") {
            val = height.h2
        } else if (pathname === "/social/create") {
            val = height.h3
        }
        else {
            console.log("Pathname not matched");
            val = height.default;  // Optional: Handle unmatched paths if needed
        }

        return val; // Return the value if you need to use it outside
    };


    return (
        <Box sx={{ height: setHeight, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => actionHanlder(action.name)}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}

export default Dial