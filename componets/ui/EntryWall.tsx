import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, CardHeader, Divider, Grid, IconButton, Stack } from '@mui/material';
import { EntryList } from './EntryList';

import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import NewEntry from './NewEntry';

export default function EntryWall() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div >
      <Divider sx={{borderColor:"#1C1C24"}} ></Divider>  
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            
            >

            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems="flex-start" >
                <Typography variant='h4' sx={{ width: "90%" ,flexShrink: 0 }}>
                    El inico del nuevo mundo
                </Typography>
                <IconButton size='large' edge='start' sx={{ margin: "0 1rem 0 1rem"}}>
                    <MoreHorizTwoToneIcon />
                </IconButton>
            </Stack>

            </AccordionSummary>

            <AccordionDetails>
                <Grid container spacing={ 2 } width={ "fit-content" }>
                    
                    <Grid item xs={ 12 } sm={ 4 } width={"400px"} >
                        <Card sx={{  backgroundColor:"transparent" }} className="gridCard">

                            <Stack sx={{ display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems: "center", padding:"0rem 0.4rem"}}>
                            <CardHeader title="Pendientes"/>
                            <IconButton size='large' edge='start' >
                                <MoreHorizTwoToneIcon />
                            </IconButton>
                            </Stack>

                            <EntryList status="pennding" />

                        <Stack >
                            <NewEntry statusName='Pendientes'/>
                        </Stack>

                        </Card>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 4 } width={"400px"}>
                        <Card sx={{  backgroundColor:"transparent" }} className="gridCard">

                        <Stack sx={{ display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems: "center", padding:"0rem 0.4rem"}}>
                        <CardHeader title="En proceso"/>
                        <IconButton size='large' edge='start' >
                            <MoreHorizTwoToneIcon />
                        </IconButton>
                        </Stack>

                        <EntryList status="in-progress" />

                    <Stack >
                        <NewEntry statusName='En proceso'/>
                    </Stack>

                    </Card>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 4 } width={"400px"}>
                        <Card sx={{  backgroundColor:"transparent" }} className="gridCard">

                        <Stack sx={{ display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems: "center", padding:"0rem 0.4rem"}}>
                        <CardHeader title="Terminadas"/>
                        <IconButton size='large' edge='start' >
                            <MoreHorizTwoToneIcon />
                        </IconButton>
                        </Stack>

                        <EntryList status="done" />

                    <Stack >
                        <NewEntry statusName='Terminadas'/>
                    </Stack>

                    </Card>
                    </Grid>

                </Grid>

            </AccordionDetails>
        </Accordion>
      <Divider sx={{borderColor:"#1C1C24"}} ></Divider>  
    </div>
  );
}
