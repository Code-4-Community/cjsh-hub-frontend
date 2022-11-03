import React from 'react';
import PropTypes from 'prop-types';

const PostsItem = ({
  post = {
    topic: 'Student',
    title:
      '\'WE LOVE HUSKIES.\' NORTHEASTERN STUDENTS TACKLE NEIGHBORHOOD SERVICE PROJECTS IN ROXBURY',
    text: 'It’s been really nice to be here and to serve that community - said Barker-Waters, a political science and international affairs major at the College of Social Sciences and Humanities.',
    time: '2h',
    image: 'tree.jpg',
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div className="fw-bolder">
            {post.title} . {post.time}
          </div>
          <div className="fw-bolder">{post.topic}</div>
          <div>{post.text}</div>
        </div>
        <div className="col-2">
          <img
            width={70}
            className="float-end rounded-3"
            src={'../images/' + `${post.image}`}
          />
        </div>
      </div>
    </li>
  );
};

PostsItem.propTypes = {
  post: PropTypes.object
};

export default PostsItem;
