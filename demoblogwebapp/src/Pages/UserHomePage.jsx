import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPost} from "../Redux/Actions/Actions.js";
import {Card, CardLink, Spinner} from "react-bootstrap";
import "./../Styling/UserHomePage.css";
import {LiaComment} from "react-icons/lia";
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
       <div id={"posts"}>
           {posts.length >= 1 ? posts.map(({id, title, body,link, comment_count}) => { return(
                   <Card id="post" key={id} style={{ width: '18rem' }}>
                       <Card.Body>
                           <Card.Title>{title}</Card.Title>
                           <Card.Text>
                               {body}
                           </Card.Text>
                           <Card.Text>
                               <Card.Link href={link} id={"read"}>Read More</Card.Link>
                               <CardLink id={"comments-count"}> <LiaComment id={"comments-icon"} className={"m-2"}/>
                                   {comment_count}</CardLink>
                           </Card.Text>
                       </Card.Body>
                   </Card>
           );}) : <div className={"spinner"}><Spinner animation={"border"} /></div>}
       </div>
    );
}

export default UserHomePage;