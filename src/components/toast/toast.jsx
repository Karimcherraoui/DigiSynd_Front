import { createStandaloneToast } from '@chakra-ui/toast'

const {toast} = createStandaloneToast({
    defaultOptions: {
        position: "top-right",
        duration: 2500,
        isClosable: true,
    },
})


export default toast