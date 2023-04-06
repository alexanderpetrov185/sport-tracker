import Auth from "@/components/screens/auth/Auth";
import { IRoute } from "./navigation.types";
import Home from "@/components/screens/home/Home";
import Profile from "@/components/screens/profile/Profile";
import Statistic from "@/components/screens/statistic/Statistic";
import Workouts from "@/components/screens/workouts/Workouts";

export const routes:IRoute[] = [
    {
        name: 'Auth',
        component: Auth
    },
    {
        name: 'Home',
        component: Home
    },
    {
        name: 'Profile',
        component: Profile
    },
    {
        name: 'Statistic',
        component: Statistic
    },
    {
        name: 'Workouts',
        component: Workouts
    }
]