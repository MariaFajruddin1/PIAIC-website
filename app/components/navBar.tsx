"use client"
import { Box, IconButton, Button, Container, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function navBar() {
  return (
    <>
      <Box backgroundImage={
        'url(https://media.istockphoto.com/id/1174989482/photo/gray-abstract-minimal-motion-backgrounds-loopable-elements-4k-resolution.jpg?b=1&s=170667a&w=0&k=20&c=hn1EQ6i2fEBS0Cf-tFMfUsbNBGY1ATMNwgz1n7ffIKg=)'
      } bgAttachment={'fixed'} backgroundSize={'cover'}
      backgroundPosition={'center center'}>
        <Container maxW={1400}>
          <SimpleGrid templateColumns={{ lg: 'repeat(3,1fr)', base: 'repeat(2,1fr)' }} >
            <Box ml={{ lg: '0', base: '20px' }} mt='10px'>
              <Image
                src='/Images/logo.png'
                alt='panaverse Logo'
                width={80}
                height={80} />
            </Box>
            <Flex display={{ lg: 'flex', base: 'none' }} alignItems='center' color='black' fontSize={18} gap={10}>
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
                bg={'#285E61'}
                w={100}
                h={50}
                borderRadius={30}
                float='right'
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
    </>
  )
}
