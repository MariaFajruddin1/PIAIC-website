'use client'
import React from 'react'
import { Box,  Container, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'

export default function sectionOne() {
    return (
        <>
            <Box>
                <Container maxW={1000}>
                    <Heading pt={50} textAlign='center' fontSize='50px'>Strategic Partners</Heading>
                    <Flex gap={50} mt={'50px'} justifyContent="center" >
                        <Image src={'/Images/Saylani.png'} alt='Arif Alvi Image' width={100} height={200} />
                        <Image src={'/Images/pana.png'} alt='Arif Alvi Image' width={100} height={200} />
                    </Flex>
                </Container>
            </Box>
        </>
    )
}
