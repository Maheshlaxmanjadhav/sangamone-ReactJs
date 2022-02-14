import React, { Component } from 'react';

export class NewsApi extends Component {
    constructor() {
        super()
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=6d6a5990879e41e69466157544c216db").then((result) => {
            result.json().then((resp) => {
                this.setState({ data: resp.articles })
            })
        })
    }
    render() {
        return (
            <div>
                <>
                    {
                        this.state.data ?
                            this.state.data.map((element, i) =>
                                <>
                                    <div className="card text-dark p-5 m-5" styleName="width: 18rem;">
                                        <img src={element.urlToImage} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{element.title}</h5>
                                                <p className="card-text">{element.description}</p>
                                                <a href={element.url} className="btn btn-primary">Read More</a>
                                            </div>
                                    </div>
                                </>
                            )
                            : null
                    }
                </>
            </div>
        );
    }
}

export default NewsApi;
