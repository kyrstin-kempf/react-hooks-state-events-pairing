import React, { useState } from "react";

function Votes({ video }) {
    const [likeCount, setLikeCount] = useState(video.upvotes);
    const [dislikeCount, setDislikeCount] = useState(video.downvotes);

    function addLikeVote() {
        setLikeCount(likeCount => likeCount + 1)
    }
    function addDislikeVote() {
        setDislikeCount(dislikeCount => dislikeCount + 1)
    }

    return (
        <div>
            <button onClick={addLikeVote}>{likeCount} 👍</button>
            <button onClick={addDislikeVote}>{dislikeCount} 👎</button>
        </div>
    )
}

export default Votes;