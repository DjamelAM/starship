import React from "react";
import { Modal, Portal, Provider, Text } from "react-native-paper";
import { StarshipCard } from "./StarshipCard";




  
export const StarshipModal = (state:boolean) => {
    const [visible, setVisible] = React.useState(false);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return <>{
 <Provider>
        <Portal>
           <Modal visible={state} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                
                  <Text>Example Modal.  Click outside this area to dismiss.</Text>
              
            </Modal>
        </Portal>

    </Provider>
    }</>
   

}
    

