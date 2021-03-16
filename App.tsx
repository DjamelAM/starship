import React from 'react';
import { SafeAreaView, SafeAreaViewBase, Text, View } from 'react-native';
import { NetworkProvider } from 'react-native-offline';
import AppLayout from './AppLayout';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import fetchAsync from './lib/fetchAsync';
import { StarshipCard } from './components/StarshipCard';
import { data } from './data3';


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
const App = () => {


    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView>
                <NetworkProvider>
                    <AppLayout title="Starships">
                        {/*  <Offline /> */}
                        <StarshipContainer />
                        <StarshipCard name={data.results[0].name} model={data.results[0].model} crew={data.results[0].crew} />

                    </AppLayout>
                </NetworkProvider>
            </SafeAreaView>
        </QueryClientProvider>

    );

};

export default App;