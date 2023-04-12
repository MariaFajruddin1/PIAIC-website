'use client'
import React from 'react'
import { Box, IconButton, Button, Container, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import { HamburgerIcon,ArrowForwardIcon } from '@chakra-ui/icons'

export default function page() {
  return (
    <>
      <Box bg={'#285E61'}>
        <Container maxW={1400}>
          <SimpleGrid templateColumns={{ lg: 'repeat(3,1fr)', base: 'repeat(2,1fr)' }} >
            <Box ml={{ lg: '0', base: '20px' }} mt='10px'>
              <Link href='/'>
                <Image
                  src='/Images/logo.png'
                  alt='panaverse Logo'
                  width={80}
                  height={80} />
              </Link>
            </Box>
            <Flex display={{ lg: 'flex', base: 'none' }} alignItems='center' color='white' fontSize={18} gap={10}>
              <Link href={'/steps'}>How it Works</Link>
              <Link href='/course'>Available Course</Link>
              <Link href='/about'>About</Link>
              <Link href='/study'>WIT</Link>
            </Flex>
            <Box display={{ xl: 'initial', lg: 'none', base: 'none' }}>

              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'#1D4044'}
                w={100}
                h={50}
                borderRadius={30}
                float='right'
                mt={'40px'}
                href={'https://portal.piaic.org/signup'}
                _hover={{
                  bg: '#319795',
                  border: '0px solid white',
                  boxShadow: "#d5d5d5"
                }}>
                Apply
              </Button>
            </Box>
            <Box pt={'40px'} float='right' display={{ lg: 'none', md: 'initial', base: 'initial' }}>
              <Menu>
                <MenuButton
                  float='right'
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon color='black' />}
                  variant='outline'
                />
                <MenuList bg={'green.800'}>
                  <MenuItem bg={'green.800'} color={'white'}>
                    <Link href='/steps'>How it Works</Link>
                  </MenuItem>
                  <MenuItem bg={'green.800'} color={'white'}>
                    <Link href='/course'>Available Course</Link>
                  </MenuItem>
                  <MenuItem bg={'green.800'} color={'white'}>
                    <Link href='/about'>About</Link>
                  </MenuItem>
                  <MenuItem bg={'green.800'} color={'white'}>
                    <Link href='/study'>WIT</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </SimpleGrid>

        </Container>
      </Box>


















      <Box backgroundImage={
        'url(https://media.istockphoto.com/id/1174989482/photo/gray-abstract-minimal-motion-backgrounds-loopable-elements-4k-resolution.jpg?b=1&s=170667a&w=0&k=20&c=hn1EQ6i2fEBS0Cf-tFMfUsbNBGY1ATMNwgz1n7ffIKg=)'
      } bgAttachment={'fixed'} backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <Container maxW={1400} pt={20}>
          <Heading textAlign={'center'} mb={'50px'} fontSize='50px'>Available Courses</Heading>
          <Flex gap={5} display={{lg:'flex',base:'flex-1'}}>
            <Box bg={'white'} border={'none'} pl={5} pr={5} pt={5} pb={5} boxShadow='2xl' _hover={{ bg: '#285E61', color: 'white' }}>
              <Image src='/Images/ai.png' alt='Artifical intelligence image' width={100} height={0} />
              <Text pt={2} fontWeight={500} fontSize={20}>Artifical Intelligence</Text>
              <Text>A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ...</Text>
              <br />
              <Link href='https://www.piaic.org/artificial-inteligence'>Learn More <ArrowForwardIcon /></Link>
            </Box>
            <Box mt={{lg:0,base:10}}  bg={'white'} border={'none'} pl={5} pr={5} pt={5} pb={5} boxShadow='2xl' _hover={{ bg: '#285E61', color: 'white' }}>
              <Image src='/Images/cn.png' alt='Blockchain image' width={100} height={0} />
              <Text fontWeight={500} fontSize={20}>Cloud Native and Mobile Web Computing</Text>
              <Text>A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF ...</Text>
              <br />
              <Link href='https://www.piaic.org/cloud-native'>Learn More <ArrowForwardIcon /></Link>
            </Box>
            <Box mt={{lg:0,base:10}} bg={'white'} border={'none'} pl={5} pr={5} pt={3} pb={5} boxShadow='2xl' _hover={{ bg: '#285E61', color: 'white' }}>
              <Image src='/Images/bc2.png' alt='Cloud Computing image' width={100} height={0} />
              <Text pt={2} fontWeight={500} fontSize={20}>Blackchain</Text>
              <Text>A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF ...</Text>
              <br />
              <Link href='https://www.piaic.org/block-chain'>Learn More <ArrowForwardIcon /></Link>
            </Box>
          </Flex>
        </Container>



        <Container maxW={900} mt={{lg:20,base:10}} pb={20}>
          <Flex gap={5} display={{lg:'flex',base:'flex-1'}}>
            <Box bg={'white'} border={'none'} pl={5} pr={5} pt={5} pb={5} boxShadow='2xl' _hover={{ bg: '#285E61', color: 'white' }}>
              <Image src='/Images/iot1.png' alt='Artifical intelligence image' width={100} height={0} />
              <Text pt={2} fontWeight={500} fontSize={20}>Internet of Thing</Text>
              <Text>A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA ...</Text>
              <br />
              <Link href='https://www.piaic.org/iot'>Learn More <ArrowForwardIcon /></Link>
            </Box>
            <Box mt={{lg:0,base:10}}  bg={'white'} border={'none'} pl={5} pr={5} pt={5} pb={5} boxShadow='2xl' _hover={{ bg: '#285E61', color: 'white' }}>
              <Image src='/Images/meta.png' alt='Blockchain image' width={100} height={0} />
              <Text fontWeight={500} fontSize={20}>Web 3.0 and Metaverse Developer</Text>
              <Text>Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar ...</Text>
              <br />
              <Link href='https://www.panaverse.co/'>Learn More <ArrowForwardIcon /></Link>
            </Box>
          </Flex>
        </Container>
      </Box>














      <Footer />
    </>
  )
}