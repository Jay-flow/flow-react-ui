import "./styles/index.scss"
import { Calendar } from "./components/Calendar"

const App = (): JSX.Element => {
    return (
        <div>
            <h1>Hello Webpack!</h1>
            <div>
                <Calendar />
            </div>
        </div>
    )
}

export default App
