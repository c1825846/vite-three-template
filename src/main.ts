import { App } from './app'

import './style.css'

const appContainer = document.querySelector('#app') as HTMLDivElement

const app = new App(appContainer)
app.run()
