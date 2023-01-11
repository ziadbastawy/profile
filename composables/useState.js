import { reactive } from "vue";

export default reactive({
    tabs: [{
            id: "home",
            label: "Home",
            component: "Home",
            route: "",
        },
        {
            id: "about-me",
            label: "About me",
            component: 'About',
            route: "",
        },
        {
            id: "experience",
            label: "Experience",
            component: "Experience",
            route: "",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            component: "Portfolio",
            route: "",
        },
        {
            id: "contactUs",
            label: "Contact Us",
            component: "Contact",
            route: "",
        },
    ],
    activeTab: {
        id: "about-me",
        label: "About me",
        component: 'About',
        route: "",
    },

    setActiveTab(id = "home") {
        const selectedTab = this.tabs.find(tab => tab.id === id)
        this.activeTab = selectedTab
    }
})