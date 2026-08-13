import { useLocalSearchParams } from "expo-router"
import { View , Text} from "react-native"

import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

const SubscriptionDetail =() => {

    const {id} = useLocalSearchParams<{id:string}>()
    return (
        <SafeAreaView>
            <Text>Subscription</Text>
            <Text>the id : {id}</Text>
        </SafeAreaView>
    )
}

export default SubscriptionDetail