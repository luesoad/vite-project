import about from "./pages/about.svelte";
import press from "./pages/press.svelte";
//import blog from "./pages/blog.svelte";
import live from "./pages/live.svelte";
import impressum from "./pages/impressum.svelte";
import index from "./pages/index.svelte";
import listen from "./pages/listen.svelte";
import PublicLayout from "./layout/public_layout.svelte";
import privacy from "./pages/privacy.svelte";


const routes = [
    {
        name: '/',
        component: index,
        layout: PublicLayout
    },
    { name: 'about', component: about, layout: PublicLayout },
    { name: 'press', component: press, layout: PublicLayout },
    { name: 'live', component: live, layout: PublicLayout },
    { name: 'impressum', component: impressum, layout: PublicLayout },
    { name: 'listen', component: listen, layout: PublicLayout },
    { name: 'privacy', component: privacy, layout: PublicLayout },

]

export { routes }
