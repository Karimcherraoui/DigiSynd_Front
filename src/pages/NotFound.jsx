import { Image } from '@chakra-ui/react'
import React from 'react'
import notFound from "../assets/images/notFound.avif"


export default function NotFound() {
  return (
    <Image src = {notFound} w={"full"} h={"100vh"}/>
  )
}
