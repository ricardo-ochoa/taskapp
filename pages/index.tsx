import { Button, Card, CardContent, CardHeader, Grid, IconButton, Stack, Typography } from '@mui/material';
import type { NextPage } from 'next'
import { Layout } from '../componets/layout';
import { EntryList } from '../componets/ui';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import AddIcon from '@mui/icons-material/Add';
import NewEntry from '../componets/ui/NewEntry';
import EntryWall from '../componets/ui/EntryWall';


const HomePage: NextPage = () => {
  return (
    <Layout title=' TaskApp'>

      <Button size='large' variant="contained" startIcon={ <AddIcon /> } sx={{ margin:"1.5rem 0 1.5rem 0" }} >
       Add Wall
      </Button>
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
              <NewEntry wall='Pendientes'/>
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
              <NewEntry wall='En proceso'/>
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
              <NewEntry wall='Terminadas'/>
          </Stack>

          </Card>
        </Grid>

      </Grid>

      <EntryWall/>
    </Layout>
  )
}

export default HomePage;
