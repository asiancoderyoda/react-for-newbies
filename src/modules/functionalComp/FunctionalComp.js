import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../apis";

const FunctionalComp = () => {
    // const [posts, setPosts] = useState(() => {
    //     return [];
    // });
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async() => {
            const posts = await fetchPosts();
            console.log(posts);
        })();
    }, [window.location.pathname]);

    return (
        <div>
            <p>Functional Comp Counter</p>
        </div>
    );
}

export default FunctionalComp;