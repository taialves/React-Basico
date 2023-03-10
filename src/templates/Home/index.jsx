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
    postsPerPage : 30,
    theresMostPosts : true
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

    const MostPosts = nextPage + postsPerPage >= allPosts.length ? false : true;
    this.setState({theresMostPosts: MostPosts});
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
    const {posts, theresMostPosts} = this.state
    return (
      <section className='container'>
        <Posts posts = {posts}/>
        <div className='button-container'>
          <Button
            onClick = {this.loadMorePosts}
            text = "Botao Miguel"
            disabled = {!theresMostPosts}
          ></Button>
        </div>
      </section>
    );
  }
  
  
}

