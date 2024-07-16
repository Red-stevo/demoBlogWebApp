import {useEffect} from "react";
import {useParams} from "react-router-dom";

const CommentsPage = () => {
    const path = useParams();


    useEffect(() => {
        console.log(path);
    }, []);

    return(
        <>
            Comments page.
        </>
    );
}

export default CommentsPage;