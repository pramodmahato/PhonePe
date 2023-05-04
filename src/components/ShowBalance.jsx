import { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Carousell from './Carousell';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';



function ShowBalance() {
    const [fetched, setFetched] = useState(false);
    const navigate = useNavigate();

    //Fake loading time
    setTimeout(() => {
        setFetched(true)
    }, 1500)

    return (<>
        {fetched ?
            <div className='center balance-main'>
                <section className='balance-icon-section'>
                    <CheckCircleOutlineIcon className='balance-icon'/>
                </section>
                <section className='balance-text'>
                    <label className='balance-label'>
                        Bank account balance fetched succesfully
                    </label>
                    <div className='bank-logo-outer'>
                        <div className='bank-logo-inner'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Citi.svg" alt="Citi"
                                height="15px"
                            ></img>
                        </div>
                        <div className='bank-name'>Citibank -1809</div>
                        <div className='bank-amount'>
                            ₹ 3,22,284
                        </div>
                    </div>
                </section>
                <section className='balance-carousel'>
                    <Carousell />
                </section>
                <Card
                    className="sticky balance-bottom"
                >
                    <div onClick={()=> navigate({pathname:'/'})}>
                        DONE
                    </div>
                    <CardContent>
                    </CardContent>
                </Card>

            </div>
            :
            <div className='balance-loading'>
                <Box style={{width:'50%'}}>
                    <CircularProgress className='balance-progress' />
                </Box>
                <div className='balance-loading-text'>
                    Fetching bank balance
                </div>
            </div>}
    </>)
}

export default ShowBalance;