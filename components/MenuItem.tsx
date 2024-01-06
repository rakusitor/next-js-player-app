import { ListItem, ListIcon, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import NextLink from "next/link";

const MenuItem = ({ name, route, icon, hasIcon = true }) => {
  return (
    <ListItem paddingX="20px" fontSize="16px" key={name}>
      <LinkBox>
        <NextLink href={route} passHref>
          <LinkOverlay>
            {hasIcon && <ListIcon as={icon} color="white" marginRight="20px" />}
            {name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};
export default MenuItem;
