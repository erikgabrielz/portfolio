import './Footer.css';

export default function Footer(){

    const getDate = () => {
        let date = new Date();
        return date.getFullYear();
    }

    return(
        <footer>
            &copy;&nbsp; Copyright {getDate()}.
        </footer>
    )
}