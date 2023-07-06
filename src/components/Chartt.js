 import React from 'react'
 import BarChart from "./Barchart"
 import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
 import { RiArrowUpSFill } from "react-icons/ri";

 import { Card } from 'reactstrap';
import {
 
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
 
} from "./Charts"
 const Users = () => {
  const textColor = useColorModeValue("black", "white");

   return (
<div style={{background:"#F7FAFC"}}>
    <Flex justify='space-between' align='start' px='10px' pt='5px'>
    <Flex flexDirection='column' align='start' me='20px'>
      <Text color='secondaryGray.600' fontSize='sm' fontWeight='500'>
        Daily Traffic
      </Text>
      <Flex align='end'>
        <Text
          color={textColor}
          fontSize='34px'
          fontWeight='700'
          lineHeight='100%'>
          2.579
        </Text>
        <Text
          ms='6px'
          color='secondaryGray.600'
          fontSize='sm'
          fontWeight='500'>
          Visitors
        </Text>
      </Flex>
    </Flex>
    <Flex align='center'>
      <Icon as={RiArrowUpSFill} color='green.500' />
      <Text color='green.500' fontSize='sm' fontWeight='700'>
        +2.45%
      </Text>
    </Flex>
  </Flex>
  <Box h='240px' mt='auto'>
    <BarChart
      chartData={barChartDataDailyTraffic}
      chartOptions={barChartOptionsDailyTraffic}
    />
  </Box> 
  </div>)
 }
 
 export default Users