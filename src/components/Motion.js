import { Box, Container, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(10deg); border-radius: 20%; }
  75% { transform: scale(1) rotate(10deg); border-radius: 20%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;
  
export default function Motion(props) {
  return (
    <Container  display="flex" alignItems="center" justifyContent="center">
      <Box
        as={motion.div}
        animation={animation}
        // not work: transition={{ ... }}
        padding="2"
        // @ts-ignore - "Does not exist" Type Error against Motion
        bgGradient="linear(to-l, #219EBC, rgb(0, 81, 109))"

        width="24"
        height="10"
        display="flex"
      > {props.name}

      </Box>
      
    </Container>
  )
};