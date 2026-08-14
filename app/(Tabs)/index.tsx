import "@/global.css"
import { FlatList, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import { HOME_USER } from "@/constants/data";
import ListHeading from "../components/ListHeading";
import UpcomingSubscriptionCard from "../components/UpcomingSubscriptionCard";
import dayjs from "dayjs";
import { useMemo } from "react";
import { useSubscriptionStore } from "@/lib/subscriptionStore";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {

  const { subscriptions, addSubscription } = useSubscriptionStore();

  // Get upcoming subscriptions (active subscriptions with renewal date within next 7 days)
  const upcomingSubscriptions = useMemo(() => {
    const now = dayjs();
    const nextWeek = now.add(7, 'days');
    return subscriptions.filter(sub =>
      sub.status === 'active' &&
      dayjs(sub.renewalDate).isAfter(now) &&
      dayjs(sub.renewalDate).isBefore(nextWeek)
    ).sort((a, b) => dayjs(a.renewalDate).diff(dayjs(b.renewalDate)));
  }, [subscriptions]);

  return (
    <SafeAreaView className="">
      <Text className="text-xl font-bold text-blue-500">
        Welcome {HOME_USER.name}
      </Text>

      <View className="mb-5">
        <ListHeading title="Upcoming" />

        <FlatList
          data={upcomingSubscriptions}
          renderItem={({ item }) => (<UpcomingSubscriptionCard daysLeft={0} {...item} />)}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text className="home-empty-state">No upcoming renewals yet.</Text>}
        />
      </View>

      <View className="mb-5">
        <ListHeading title="All Subscriptions" />

        <FlatList
          data={upcomingSubscriptions}
          renderItem={({ item }) => (<UpcomingSubscriptionCard daysLeft={0} {...item} />)}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text className="home-empty-state">No upcoming renewals yet.</Text>}
        />
      </View>




    </SafeAreaView >
  );
}