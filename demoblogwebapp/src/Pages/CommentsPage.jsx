import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {fetchComments} from "../Redux/Actions/Actions.js";
import {useDispatch} from "react-redux";

const CommentsPage = () => {
    const path = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(fetchComments(path));
    }, []);

    return(
        <>
            Comments page.
        </>
    );
}

export default CommentsPage;