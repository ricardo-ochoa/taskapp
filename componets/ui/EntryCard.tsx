import React, { FC, DragEvent, useContext } from 'react'
import { Card, CardContent, CardActionArea, Typography, CardActions, Stack, Avatar } from '@mui/material'
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import { Entry } from '../../interfaces';
import { UIContext } from '../../contex/ui';



interface Props {
    entry: Entry
}

export const EntryCard:FC<Props> = ({ entry }) => {


   const { startDragging , endDragging } = useContext(UIContext)

    const onDragStart = ( event: DragEvent ) => {
        event.dataTransfer.setData('text', entry._id);

        startDragging();
    }

    const onDragEnd = () => {
        endDragging();
    }


  return (
    <Card
        sx={{ marginBottom: 2 }}
        className="card"

        draggable={ true }
        onDragStart={ onDragStart }
        onDragEnd= { onDragEnd }
    >
        <CardActionArea sx={{ display: "flex", alignContent: "flex-start", justifyContent: "start" }}>

            <Stack alignSelf={"flex-start"} marginTop={"1rem"} paddingLeft={"1rem"}>
                <Avatar
                alt="Remy Sharp"
                src="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653446792/profile_ssjwtg.png"
                sx={{ width: 30, height: 30 }}
                />
            </Stack>
            <Stack width={"100%"}>
                <CardContent sx={{margin: "0 0 0 0 "}}>

                    <Stack sx={{display:"flex", flexDirection: 'row', alignItems: "start", justifyContent:"space-between", marginBottom:"0.5rem"}}>
                        <Typography sx={{ whiteSpace: 'pre-line', marginBottom: '0.5rem', marginTop: '0.4rem', fontWeight:"800", fontSize: "16px", lineHeight: "18px" }} variant="subtitle1"> { entry.title } </Typography>

                        <MoreHorizTwoToneIcon></MoreHorizTwoToneIcon>
                    </Stack>
                    <Typography sx={{ whiteSpace: 'pre-line', color: "#696974", lineHeight: 1.2 }} variant="body1" > { entry.description }</Typography>
                    
                </CardContent>

                <CardActions sx={{display:'flex', paddingRight: 2 }} >
                    <Stack sx={{margin: "0 0 0.5rem 0.5rem ", display:"flex", flexDirection: 'row', alignItems: "center",justifyContent: "center", backgroundColor: "#44444F", padding: "5px", borderRadius: "5px"}}>
                        <AccessTimeTwoToneIcon fontSize='small' color={"disabled"} />
                        <Typography variant='caption' marginLeft={"0.3rem"}  color={"#B5B5BE"}> 2011 </Typography>
                    </Stack>
                </CardActions>
            </Stack>
        </CardActionArea>
    </Card>
  )
}
