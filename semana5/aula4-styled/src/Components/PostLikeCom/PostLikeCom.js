import React from 'react';
import './PostLikeCom.css';

class PostLikeCom extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            hasliked: false,
            likenum: "0",
            iscommenting: false,
            hascommented: false,
            postlikeimg: "https://image.flaticon.com/icons/png/512/2/2267.png", //unfilled heart
            commentnum: "0",
            lastcomment: "",
            currentcomment: ""
        }
    }

    ToggleLike = () =>{
        if(this.state.hasliked){
            this.setState({
                hasliked: false,
                postlikeimg: "https://image.flaticon.com/icons/png/512/2/2267.png",
                likenum: "0"
            })
        }

        else{
            this.setState({
                hasliked: true,
                postlikeimg: "https://freeiconshop.com/wp-content/uploads/edd/heart-outline-filled.png", //filled heart
                likenum: "1"
            })
        }
    }

    CommentTabCheck = () =>{
        if(this.state.iscommenting){
            this.setState({
                iscommenting: false
            })
        }
        else{
            this.setState({
                iscommenting: true
            })
        }
    }

    OpenCommentTab = () =>{
        if(this.state.iscommenting){
            return(
                <div id="commentinteractarea">
                    <input type="text" id="commentboxid" placeholder="Digite seu comentario" value={ this.state.currentcomment } onChange= { this.UpdateInputValue }></input>
                    <button id="sendcommentbutton" onClick={ this.SendComment }>Enviar</button>
                </div>
            )
        }
        else{
            return
        }
    }

    UpdateInputValue = (event) =>{  

        const CommentText = event.target.value

        this.setState({
            currentcomment: CommentText
        })
    }

    SendComment = () =>{

        let CommentNumCheck = this.state.commentnum

        CommentNumCheck++;

        this.setState({
            lastcomment: this.state.currentcomment,
            iscommenting: false,
            commentnum: CommentNumCheck,
            currentcomment: ""
        })
    }

    render(){
        return(

            <div id="postlikecomareaid">
                <img onClick={ this.ToggleLike } id="postlikeimgid"src={ this.state.postlikeimg } />
                <p id="likenumid">{ this.state.likenum }</p>

                <p id="commentnumid">{ this.state.commentnum }</p>
                <img onClick= { this.CommentTabCheck } id="postcomimgid"src={ this.props.postcomimg} />

                <p id="lastcommentid"><strong>Ultimo comentario: </strong>{ this.state.lastcomment }</p>

                { this.OpenCommentTab() }

            </div>

        )
    }
}

export default PostLikeCom;
