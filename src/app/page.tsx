import { Flex,Box, Button } from "@radix-ui/themes";


export default function Home() {
  return (
    <Flex gap={"5"} className="bg-gray-200">
      <Box>
        Hello1
      </Box>
      <Box>
        Hello2
      </Box>
      <Box>
        <Button color="cyan" variant="soft">Click me</Button>
      </Box>
    </Flex>
);
}
