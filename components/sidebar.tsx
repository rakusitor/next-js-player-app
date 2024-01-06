import NextImage from "next/image";
import NextLink from "next/link";
import MenuItem from "./MenuItem";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playList = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const SideBar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => {
              return <MenuItem key={menu.name} {...menu} />;
            })}
          </List>
        </Box>
        <Box marginTop="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => {
              return <MenuItem key={menu.name} {...menu} />;
            })}
          </List>
        </Box>
        <Box marginTop="20px" />
        <Divider color="gray.900" />
        <Box height="calc(100vh - 380px)" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playList.map((name) => {
              return (
                <MenuItem key={name} name={name} hasIcon={false} route="/" />
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
export default SideBar;
