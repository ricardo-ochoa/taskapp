import React, { FC } from 'react'

import { Box } from '@mui/material'
import Head from 'next/head'
import { Navbar, Sidebar } from '../ui';

interface Props {
    title?: string;
    children?: any;
}

export const Layout:FC<Props> = ({ title = 'Task App', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }} padding="1rem">
        <Head>
            <title>{ title }</title>
        </Head>

        <Sidebar />
        <Navbar />

        <Box>
            { children }
        </Box>

    </Box>
  )
}
