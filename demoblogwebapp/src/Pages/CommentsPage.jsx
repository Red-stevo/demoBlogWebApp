import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchComments} from "../Redux/Actions/Actions.js";
import {useDispatch, useSelector} from "react-redux";
import {Card, Spinner} from "react-bootstrap";
import "./../Styling/UserHomePage.css"

const CommentsPage = () => {
    const comments = useSelector(state => state.comments)
    const path = useParams();
    const dispatch = useDispatch();
    const [load, setLoad] = useState(true);
    //const navigate = useNavigate();


    useEffect(() => {
      dispatch(fetchComments(path));
      updateLoader();
    }, [path]);


    const updateLoader = () => {
        setTimeout(() => {
            setLoad(false);
        }, 10000)
    }

    return(
        <div id={"post-comments"}>
            {comments.length > 0? comments.map((({id, name, email, body}) => {
                    return(
                        <Card key={id}>
                            <Card.Title>{name}</Card.Title>
                            <Card.Body>
                                {body}
                            </Card.Body>
                            <Card.Footer>{email}</Card.Footer>
                        </Card>

                    )})): load ? <Spinner animation={"border"} /> : <h1>No Comments Found‼️‼️‼️‼️</h1>}
        </div>
    );
}
export default CommentsPage;