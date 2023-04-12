'use client'
import { Box,IconButton, Button, Container, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function header() {
  return (
    <>
    <Box backgroundImage={
        'url(https://media.istockphoto.com/id/1174989482/photo/gray-abstract-minimal-motion-backgrounds-loopable-elements-4k-resolution.jpg?b=1&s=170667a&w=0&k=20&c=hn1EQ6i2fEBS0Cf-tFMfUsbNBGY1ATMNwgz1n7ffIKg=)'
      } bgAttachment={'fixed'} backgroundSize={'cover'}
      backgroundPosition={'center center'}>
        <Container maxW={1400}>
          <Flex display={{lg:'flex',base:'flex-1'}}>
            <Box  >
            <Heading pt={100} fontSize={60} fontWeight={400}>Presidential Initiative</Heading>
            <Heading fontSize={40} fontWeight={300}>for Artificial Intelligence & Computing (PIAIC)</Heading>
            <Text pt={50}>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</Text>
            <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'#285E61'}
                w={100}
                h={50}
                borderRadius={30}
                float='left'
                mt={'40px'}
                href={'https://portal.piaic.org/signup'}
                _hover={{
                  bg: '#1D4044',
                  border: '0px solid white',
                  boxShadow: "#d5d5d5"
                }}>
                Apply
              </Button>
            </Box>
            <Box>
              <Image src={'/Images/arifAlvi.png'} alt='Arif Alvi Image' width={1050} height={1050}/>
            </Box>
            </Flex>
        </Container>
    </Box>
    </>
  )
}
