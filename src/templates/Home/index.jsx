import './style.css';
import { Component } from 'react';
import { loadPost } from '../../utils/load-posts';
import { Posts } from '../../components/Posts'
import { Button } from '../../components/Buttom';

export class Home extends Component {
  
  state = {
    posts : [],
    allPosts : [],
    page : 0,
    postsPerPage : 2
  };

  async componentDidMount(){
    await this.loadPost()
  }
  
  loadMorePosts = () =>{
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const slicePost = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...slicePost);
    this.setState({posts, page : nextPage})
  }

  loadPost = async () =>{
    const {page, postsPerPage} = this.state;

    const postAndPhotos = await loadPost();
    this.setState({
      posts: postAndPhotos.slice(page, postsPerPage),
      allPosts: postAndPhotos
    })
  }
  render(){
    const {posts} = this.state

    return (
      <section className='container'>
        <Posts posts = {posts}/>
        <Button
          onClick = {this.loadMorePosts}
          text = "Botao Miguel"
        ></Button>
      </section>
    );
  }
  
  
}

