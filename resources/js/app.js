import { createApp, h } from 'vue'
import { createInertiaApp,Link,Head } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
    let page = pages[`./Pages/${name}.vue`];
    return page;
  }
  ,
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Link", Link)
      .component("Head", Head)
      .mount(el)
  },
  title: (title) => `LaraVueTail - ${title}`,
})