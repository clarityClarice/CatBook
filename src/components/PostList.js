import React, { Component } from 'react'

import Header from './Header'
import PostItem from './PostItem'


class PostList extends Component {
    state = {
      posts: [
        {
          id: 1,
          author: {
            name: 'Neko Mimi',
            avatar: 'https://ih1.redbubble.net/image.467903531.2798/mwo,x1000,ipad_2_snap-pad,750x1000,f8f8f8.jpg'
          },
          date: '23 Oct 2019',
          content: 'nyan desu',
          comments: [
            {
              id: 2,
              author: {
                name: 'Nyazaki',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKVRbmtDns8Nr6YqYUk58QT11mtmJ7OBej88l4dX8vMwlJLl6rg&s'
              },
              date: '23 Oct 2019',
              content:
                'Nyanko desu'
            }
          ]
        },
        {
          id: 3,
          author: {
            name: 'Ruka Miyazaki',
            avatar: 'https://laistassets.scprdev.org/i/1547147a7f50c05ce8059bf88145a0e1/5cd48b964566910009be0288-eight.jpg'
          },
          date: '23 Oct 2019',
          content:
            'Oi pessoal! Acabei de adotar mais um gatinho hoje!',
          comments: [
            {
              id: 4,
              author: {
                name: 'Neko Chan',
                avatar: 'https://cdnb.artstation.com/p/assets/images/images/016/964/293/large/lawnielle-s-art-neko.jpg?1554143997'
              },
              date: '23 Oct 2019',
              content:
                'Nyah!'
            },
            {
              id: 5,
              author: {
                name: 'Clarice Kobayashi',
                avatar: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/caring_for_your_kitten_video/650x350_caring_for_your_kitten_video.jpg'
              },
              date: '23 Oct 2019',
              content:
                'Parabéns <3'
            }
          ]
        },
        {
          id: 6,
          author: {
            name: 'Linda Kitten',
            avatar: 'data:image/jpeg;base64,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'
          },
          date: '23 Oct 2019',
          content:
            'Meu gatinho está com muita bola de pelo, o que eu faço?',
          comments: [
            {
              id: 4,
              author: {
                name: 'Neko Chan',
                avatar: 'https://cdnb.artstation.com/p/assets/images/images/016/964/293/large/lawnielle-s-art-neko.jpg?1554143997'
              },
              date: '23 Oct 2019',
              content:
                'Estou com o mesmo problema'
            },
            {
              id: 5,
              author: {
                name: 'Clarice Kobayashi',
                avatar: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/caring_for_your_kitten_video/650x350_caring_for_your_kitten_video.jpg'
              },
              date: '23 Oct 2019',
              content:
                'O que você está dando pro seu gatinho comer?'
            }
          ]
        }
      ]
    };
  
    render() {
      const { posts } = this.state;
  
      return (
          <>
            <Header />
            <div className="postlist">
            {posts.map(post => (
                <PostItem key={post.id} {...post} />
            ))}
            </div>
        </>
      );
    }
  }
  
  export default PostList;