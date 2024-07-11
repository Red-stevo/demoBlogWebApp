import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPost} from "../Redux/Actions/Actions.js";
import {Card} from "react-bootstrap";

const  UserHomePage = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const getPosts = () => {
        dispatch(fetchPost());
    }

    useEffect(() => {
        getPosts();
    }, []);


    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default UserHomePage;