import React from 'react';
import { SafeAreaView, SafeAreaViewBase, ScrollView, Text, View } from 'react-native';
import { NetworkProvider } from 'react-native-offline';
import AppLayout from './AppLayout';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import fetchAsync from './lib/fetchAsync';
import { StarshipCard } from './components/StarshipCard';
import { data } from './data3';
import { Button } from 'react-native-paper';
import { StarshipModal } from './components/StarshipModal';


const queryClient = new QueryClient();

const StarshipContainer = () => {
    // 🥑 Query data with fetchAsync
    const { status, error, data } = useQuery('starships', () =>
        fetchAsync(`https://swapi.dev/api/starships/`)
    );
    return (
        <Text>{status}</Text>
    )
}

function Todos(): JSX.Element {
  return <>{
      data.results.map(item => <StarshipCard name={item.name} model={item.model} crew={item.crew} />
      )
  }</>
}

const App = () => {
 const [visible, setVisible] = React.useState(false);
    const hideModal = () => setVisible(false);

    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView>
                <NetworkProvider>
                    <AppLayout title="Starships">
                        {/*  <Offline /> */}
                        <StarshipContainer />
                        <ScrollView>
                            {data.results.map(item => <StarshipCard name={item.name} model={item.model} crew={item.crew} />

                            )
                            
                            }
                        {/* {data.results.map((item: StarshipProp) => {
                           return ( <StarshipCard name={item.name} model={item.model} crew={item.crew} />);

                        })} */}
                            
                        
                        </ScrollView>
                    </AppLayout>
                </NetworkProvider>
            </SafeAreaView>
        </QueryClientProvider>

    );

};

export default App;