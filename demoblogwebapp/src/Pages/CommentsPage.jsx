import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {fetchComments} from "../Redux/Actions/Actions.js";

const CommentsPage = () => {
    const path = useParams();


    useEffect(() => {
       fetchComments(path.post)
    }, []);

    return(
        <>
            Comments page.
        </>
    );
}

export default CommentsPage;