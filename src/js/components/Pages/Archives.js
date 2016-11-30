import React from "react";

export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { one } = query;

    return(
      <div>
        <h2>Archives ({article}) with param {one}</h2>
      </div>
    );
  }
}