import React, { FC } from 'react'

import { Box } from '@mui/material'
import Head from 'next/head'

interface Props {
    title?: string;
    children?: any;
}

export const Layout:FC<Props> = ({ title = 'Task App', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            <title>{ title }</title>
        </Head>

        <Box sx={{ padding: '10px 10px' }}>
            { children }
        </Box>

    </Box>
  )
}
