import React, {useState} from "react";

const 댓글내용 = (props) => {
    const {handler} = props;
    // id inputComment
    return(
        <div className="Wrapper">
            <label htmlFor="inputComment">댓글내용 : </label>
            <input type="text" id="inputComment" onChange={handler} />
        </div>
    )
}

const 작성자 = ({handler}) => {
    // id inputWriter
    return(
        <div className="Wrapper">
            <label htmlFor="inputWriter">작성자 : </label>
            <input type="text" id="inputWriter" onChange={handler} />
        </div>
    )
}

const 댓글창 = () => {
    const [comment, setComment] = useState('');
    const [writer, setWriter] = useState('');

    const 댓글확인 = (e) => {
        setComment(e.target.value);
    }
    const 작성자확인 = (e) => {
        setWriter(e.target.value);
    }

    return (
        <>
            <댓글내용 handler={댓글확인}/>
            <작성자 handler={작성자확인}/>
            <button disabled={comment.length === 0 || writer.length === 0}>댓글달기</button>
        </>
    )
}

export default 댓글창;