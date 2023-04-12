'use client'
import React from 'react'
import { AspectRatio, Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function sentionThree() {
    return (
        <>
            <Box >
                <Container maxW={1200} mt={100}>
                    <Box>
                        <Flex display={{ lg: 'flex', base: 'flex-1' }}>
                            <Box>
                                <Image src={'/Images/m1.jpg'} alt='Image no 01' width={3000} height={400} />
                            </Box>
                            <Box>
                                <Heading pl={{lg:30,base:0}} pt={50} fontWeight={500} color='#285E61'>President launching the PIAIC website.</Heading>
                                <Text pl={{lg:30,base:0}}>President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).</Text>
                            </Box>
                        </Flex>
                    </Box>



                    <Box mt={100}>
                        <Flex display={{ lg: 'flex', base: 'flex-reverse' }}>
                            <Box>
                                <Heading pr={{lg:30,base:0}} pt={{lg:100,base:10}} fontWeight={500} color='#285E61'>First meeting with the President.</Heading>
                                <Text pr={{lg:30,base:0}}>First official PIAIC meeting on November 1st, 2018. From left to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf Lakhani (Presdent Saylani Welfare Trust, Mr. Muhammad Ghazzal (COO Saylani Welfare Trust).</Text>
                            </Box>
                            <Box>
                                <Image src={'/Images/m2.jpg'} alt='Image no 01' width={2200} height={400} />
                            </Box>
                        </Flex>
                    </Box>



                    <Box mt={100} mb={50}>
                        <Flex display={{ lg: 'flex', base: 'flex-1' }}>
                            <Box>
                                <Image src={'/Images/m3.jpg'} alt='Image no 01' width={2000} height={400} />
                            </Box>
                            <Box>
                                <Heading pl={{lg:30,base:0}} pt={{lg:100,base:10}} fontWeight={500} color='#285E61'>Meeting with Chief Secretary Sindh.</Heading>
                                <Text pl={{lg:30,base:0}}>Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah on December 28th, where he assured the PIAIC management team of his full support for the national cause and offered space at all the public universities in Sindh.</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
