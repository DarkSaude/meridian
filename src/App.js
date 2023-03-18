/* < ---__ Подключение компонентов __--- > */

    import Header from "./Components/Header/";
    import Footer from "./Components/Footer/";
// import HeaderImg from '@img/8d337ba72e16ed52.png';

/* < ---__ Подключение стилей __--- > */

// import styles from './publick/scss/components/App/App.module.scss';



function App() {
    return (
            <>
                <Header />
                <main>
                    <p>
                        Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
                    </p>
                </main>
                <Footer />
            </>
            )
}

export default App;