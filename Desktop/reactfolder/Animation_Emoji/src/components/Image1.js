
import "./Image1.css"
import React from 'react'


class Image1 extends React.Component {

    state = { height: 55, width: 55 }
    imgRef = React.createRef()

    componentDidMount() {

        this.initialHeight = this.imgRef.current.clientHeight
        this.initialWidth = this.imgRef.current.clientWidth
       
        
    }

    zoomEmoji = () => {


        const height = this.imgRef.current.clientHeight
        const width = this.imgRef.current.clientWidth


        this.setState({
            height: height + 15,
            width: width + 15,  
        })

        setTimeout(() => {

            this.setState({
                height: this.initialHeight,
                width: this.initialWidth,    
            })

        }, 1500);
    }



    render() {

        const imgStyle = { height: this.state.height, width: this.state.width }
        return (
            <span style={{ padding: "25px", textAlign: "center" }} className="spidey">


                <img style={imgStyle} ref={this.imgRef} src={this.props.src} onClick={this.zoomEmoji} alt={this.props.text} />{this.props.text}


            </span>

        )
    }
}
export default Image1;
