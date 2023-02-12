

import Paper from '@mui/material/Paper';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

export default function BottomNav(){
    return(
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value='X'
          onChange={(event, newValue) => {
            // setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} style={{color:'#6739B7'}}/>
          <BottomNavigationAction label="Stores" icon={<WorkOutlineIcon />} />
          <BottomNavigationAction label="Insurance" icon={<GppGoodIcon />} />
          <BottomNavigationAction label="Wealth" icon={<CurrencyRupeeIcon />} />
          <BottomNavigationAction label="History" icon={<SyncAltIcon />} />
        </BottomNavigation>
      </Paper>
    )
}