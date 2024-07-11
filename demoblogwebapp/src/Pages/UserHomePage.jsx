import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPost} from "../Redux/Actions/Actions.js";
import {Card, Spinner} from "react-bootstrap";
import "./../Styling/UserHomePage.css";
;
const  UserHomePage = () => {
    const posts = useSelector(state => state.Posts);
    const dispatch = useDispatch();

    const getPosts = () => {
        dispatch(fetchPost());
    }

    useEffect(() => {
        if(posts.length < 1)
            getPosts();
        console.log("Posts => ",posts)
    }, [posts]);


    return(
       <>
           {posts.length >= 1 ? posts.map(({id, title, body,link, comment_count}) => { return(
                   <Card key={id} style={{ width: '18rem' }}>
                       <Card.Body>
                           <Card.Title>{title}</Card.Title>
                           <Card.Text>
                               {body}
                           </Card.Text>
                           <Card.Link href={link}>Read More</Card.Link>
                       </Card.Body>
                   </Card>
           );}) : <div className={"spinner"}><Spinner animation={"border"} /></div>}
       </>
    );
}

export default UserHomePage;