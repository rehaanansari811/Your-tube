import React from 'react'
import { Box, Button, Stack, HStack, Heading, VStack, Input, Text } from '@chakra-ui/react'
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineSend } from 'react-icons/ai'
const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
            <Stack direction={['column', 'row']} >
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']} >
                        Subscribe to get updates
                    </Heading>
                    <HStack
                        borderBottom={'2px solid white'}
                    >
                        <Input placeholder='Enter email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                        <Button
                            p={'0'}
                            colorScheme={'purple'}
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend />
                        </Button>
                    </HStack>
                </VStack>
                <VStack
                    w={'full'}
                    borderLeft={['none', '1px solid  white']}
                    borderRight={['none', '1px solid  white']}
                >
                    <Heading
                        textTransform={'uppercase'}
                        textAlign={'center'}
                    >
                        Your Tube
                    </Heading>
                    <Text>All right reserved</Text>
                </VStack>

                <VStack w={'full'}>
                    <Heading size={'md'}>
                        Social Media
                    </Heading>
                    <HStack mt={'3'}>
                        <Button
                            variant={'link'}
                            colorScheme={'white'}
                        >
                            <a target='_blank' href="https://www.youtube.com/">Youtube</a>
                            <AiFillYoutube size={'20'} />
                        </Button>

                        <Button
                            variant={'link'}
                            colorScheme={'white'}
                        >
                            <a target='_blank' href="https://www.instagram.com/the_ansariii/">Instagram</a>
                            <AiFillInstagram size={'20'} />
                        </Button>

                        <Button
                            variant={'link'}
                            colorScheme={'white'}
                        >
                            <a target='_blank' href="https://www.linkedin.com/in/rehaan-ansari/">Linkedin</a>
                            <AiFillLinkedin size={'20'} />
                        </Button>
                    </HStack>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer