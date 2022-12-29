import { Flex, Image } from "@chakra-ui/react";
import spinner from "../../assets/spinner.gif";

const Loading = () => {
  return (
    <Flex align="center" justify="center" mt="3">
      <Image data-testid="next-spinner" alt="loading" src={spinner} />
    </Flex>
  );
};

export default Loading;
