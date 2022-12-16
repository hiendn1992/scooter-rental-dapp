import CurrentTotals from "./CurrentTotals"
import { Stack, Box, Flex, Center } from "@chakra-ui/react"
import Scooter from "./Scooter"
import Scooter1 from '../assets/scooter1.jpg'
import Scooter2 from '../assets/scooter2.jpg'
import Scooter3 from '../assets/scooter3.jpg'
import RenterForm from "./RenterForm"
import { useContext, useState } from "react"
import { BlockchainContext } from "../context/BlockchainContext"
import ClipLoader from "react-spinners/ClipLoader";

const Dashboard = () => {
    const { renterExists, currentAccount } = useContext(BlockchainContext)
    let [loading, setLoading] = useState(true);
    console.log(renterExists)
    return (
        <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36}}>
        { renterExists == null && currentAccount ? <Center><ClipLoader loading={loading} size={75} /></Center> : renterExists ? <CurrentTotals /> : <RenterForm /> }
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Scooter scooter={Scooter1}/>
            <Scooter scooter={Scooter2}/>
            <Scooter scooter={Scooter3}/>
        </Flex>
        </Stack>
    )
}

export default Dashboard