import image from "./../assets/pageNotFoundImage.jpeg";
import {Image} from "react-bootstrap";
import "./../Styling/PageNotFound.css";

const  NotFound = () => {
    return(
        <div className={"page-not-found"}>
            <div className={"text-emoji"}>
                <Image src={image} className={"not-found-image"} />
                <span className={"not-found-text"}>Page Not Found‼️</span>
            </div>
        </div>);
}

export default NotFound;