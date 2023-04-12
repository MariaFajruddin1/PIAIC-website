'use client'
import React from 'react'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import {ArrowForwardIcon } from '@chakra-ui/icons'

export default function sectionTwo() {
    return (
        <>
            <Box>
                <Container maxW={1400} mt={20}>
                    <Heading textAlign={'center'} mb={'50px'} fontSize='50px'>Available Courses</Heading>
                    <Flex gap={5} display={{lg:'flex',base:'flex-1'}}>
                        <Box  border={'none'} pl={5} pr={5} pt={5} pb={5} boxShadow='2xl' _hover={{bg:'#285E61', color:'white'}}>
                                <Image src='/Images/ai.png' alt='Artifical intelligence image' width={100} height={0} />
                                <Text pt={2} fontWeight={500} fontSize={20}>Artifical Intelligence</Text>
                            <Text>A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.</Text>
                            <Link href='https://www.piaic.org/artificial-inteligence'>Learn More <ArrowForwardIcon /></Link>
                        </Box>
                        <Box mt={{lg:0,base:10}}  border={'none'} pl={5} pr={5} pt={5} pb={5} boxShadow='2xl' _hover={{bg:'#285E61', color:'white'}}>
                                <Image src='/Images/bc2.png' alt='Blockchain image' width={100} height={0} />
                                <Text fontWeight={500} fontSize={20}>Blockchain</Text>
                            <Text>A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.</Text>
                            <Link href='https://www.piaic.org/block-chain'>Learn More <ArrowForwardIcon /></Link>
                        </Box>
                        <Box mt={{lg:0,base:10}} border={'none'} pl={5} pr={5} pt={5} pb={5} boxShadow='2xl' _hover={{bg:'#285E61', color:'white'}}>
                                <Image src='/Images/cn.png' alt='Cloud Computing image' width={100} height={0} />
                                <Text pt={2} fontWeight={500} fontSize={20}>Cloud Native and Mobile Web Developer</Text>
                            <Text>A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.</Text>
                            <Link href='https://www.piaic.org/cloud-native'>Learn More <ArrowForwardIcon /></Link>
                        </Box>
                        <Box mt={{lg:0,base:10}} border={'none'} pl={5} pr={5} pt={5} pb={5} boxShadow='2xl' _hover={{bg:'#285E61', color:'white'}}>
                                <Image src='/Images/iot1.png' alt='Internet of Thing image' width={100} height={0} />
                                <Text pt={2} fontWeight={500} fontSize={20}>Internet of Thing</Text>
                            <Text>A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.</Text>
                            <Link href='https://www.piaic.org/iot'>Learn More <ArrowForwardIcon /></Link>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}
