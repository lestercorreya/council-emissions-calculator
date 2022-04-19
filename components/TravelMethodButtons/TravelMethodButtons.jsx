import {
  Flex,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { modesOfTransport } from "../../utils/constants";
import CarpoolCounter from "./CarpoolCounter";
import TravelMethodButton from "./TravelMethodButton";

const TravelMethodButtons  = ({
  methodClickHandler,
  handleMinus,
  handlePlus,
  count,
  status,
  
}) => {
  
  return (
    <>
      <Flex mt={5} width={["268px", "480px"]} justify={["center", "left"]} mb="12px" >
        <Text fontSize="18px">Select the ways you generally travel to work.</Text>
      </Flex>

      {/*ALL travel method button selection */}
     
        <SimpleGrid columns={3} spacingX="20px" spacingY="20px"   >
          {modesOfTransport.map((mode, i) => (
            <Flex justify="center" key={i} direction="column" >
              <TravelMethodButton
                mode={mode}
                isActive={status[i]}
                onClick={methodClickHandler}
                ind={i}
              />
            </Flex>
          ))}
        </SimpleGrid>
    
      {/* Carpool counter */}
      {status[2] && (
        <CarpoolCounter
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          count={count}
        />
      )}
    </>
  );
};

export default TravelMethodButtons ;
