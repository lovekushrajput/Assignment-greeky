import App from "./components/App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import AppContext from './utils/context';



import './style/index.css'


const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <AppContext>
            <App />
        </AppContext>
    </BrowserRouter>

)
