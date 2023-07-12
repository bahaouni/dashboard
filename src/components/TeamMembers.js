import { StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Avatar, Text, Heading, Card, useBreakpointValue } from '@chakra-ui/react';

const TeamMembers = () => {
  const avatarSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Card maxW={['100%', 'md']} margin="10px" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" borderRadius="20px" padding="10px">
      <Flex spacing="4" direction={['column', 'row']}>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name="Segun Adebayo" size={avatarSize} />

          <Box>
            <Heading size={avatarSize === 'sm' ? 'sm' : 'md'}>Segun Adebayo</Heading>
            <Text>Admin</Text>
          </Box>
        </Flex>
        <StarIcon boxSize={6} color="yellow.500" />
      </Flex>
    </Card>
  );
};

export default TeamMembers;
