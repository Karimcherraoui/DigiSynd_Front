import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Box pos="fixed"
    bottom="0"
    left="0"
    right="0"
     textAlign="center" color="gray.300" fontFamily="Alata" fontSize="14px" fontStyle="normal" lineHeight="150%">
    @ 2023, Made with <Text as="span" fontWeight="bold">❤️ by Karim Cherraoui</Text> for a better web
  </Box>
  )
}
