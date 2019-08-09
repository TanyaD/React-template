import React, {Component} from 'react';

class LikeDislike extends Component{
    constructor(props){
        super(props);
        this.state={
            likeCount: 100,
            isLiked: false
        }
        }

    handleclick=()=>{
        const count = this.state.isLiked ? this.state.likeCount - 1 : this.state.likeCount + 1;
            this.setState({
                likeCount: count,
                isLiked: !this.state.isLiked
            })
    }
    render(){
        let btnClassName = this.state.isLiked ? "liked like-button" : "like-button"
        return(
            <div>
                <h2>Like Button</h2>
                <button onClick={ this.handleclick } className={ btnClassName }>Like |
                    <span>
                        {this.state.likeCount}
                    </span>
                </button>
            </div>
        )
    }
}

export default LikeDislike;
