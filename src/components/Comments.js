import React, { useState } from "react";

function Comments({ video }) {
    const [hidden, setHidden] = useState(false)

    function handleHiddenComments() {
       setHidden((hidden) => !hidden)
    }

    console.log(video.comments[0].comment)

    const obj = video.comments
        const commentsList = obj.map((comment) => {
        return (
            <div
            key={comment.id}
            >
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </div>
        )
    })

    return (
        <div>
            <button 
            style={{
                marginTop: '25px',
                padding: '5px',
                }}
            onClick={handleHiddenComments}
            >
            Hide Comments
            </button>
            <hr></hr>
            <h2>{video.comments.length} Comments</h2>
            {hidden ? null : commentsList}
        </div>
    )
}

export default Comments;