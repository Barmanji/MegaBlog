
import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="w-full mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="px-4 py-3">
          <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-700 transition-colors duration-200">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;

