import React, { Component } from "react";
import axios from "axios";

/**
 * #1-Let's do this same example using React hooks.
 * #2-Apply the componentWillUnmount lifecycle method with useEffect hooks.
 */

class App extends Component {
  state = { posts: [] };

  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      this.setState({ posts: data });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    );
  }
}

export default App;
