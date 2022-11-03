import React from 'react';
import postsArray from './posts.json';
import PostsItem from './PostsItem';

const PostSummaryList = () => {
  return (
    <ul className='list-group'>
      {postsArray.map((post) => (
        <PostsItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default PostSummaryList;
