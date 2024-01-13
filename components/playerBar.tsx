import { Box, Flex, Text } from "@chakra-ui/layout";
import { useStoreState } from "easy-peasy";
import Player from "./player";

const PlayerBar = () => {
  const songs = useStoreState((state) => state.activeSongs);
  const activeSong = useStoreState((state) => state.activeSong);
  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        {activeSong ? (
          <>
            <Box padding="20px" color="white" width="30%">
              <Text fontSize="large">{activeSong.name}</Text>
              <Text fontSize="sm">{activeSong.artist.name}</Text>
            </Box>
            <Box width="40%">
              <Player songs={songs} activeSong={activeSong} />
            </Box>
            <Box width="30%">Controls</Box>
          </>
        ) : null}
      </Flex>
    </Box>
  );
};
export default PlayerBar;
