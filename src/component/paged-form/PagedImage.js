import React, {Component} from 'react';

class PagedImage extends Component {

    generateImg = () => {
        if(this.props.contents){
            console.log(this.props.selectedId)
            const cs = this.props.contents.map((c) => {
                console.log(c.id)
                return (
                    <img
                        key={c.id}
                        src={c.url}
                        style={this.props.selectedId!==c.id?{'display':'none'}:{}}
                        width={'500px'}
                        height={'300px'}/>
                )
            })
            return cs;
        }
    }

    componentDidUpdate(){
        console.log(this.props.contents);
        this.generateImg();
    }

    render() {

        return (
            <div
                className={'container full-width center-item'}>
                {this.generateImg()}
            </div>
        );
    }
}

export default PagedImage;