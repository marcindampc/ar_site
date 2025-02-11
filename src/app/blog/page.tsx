'use client'

import { useState, useEffect } from "react";


interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

export default function BlogMain() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(postsUrl);
      const data = await res.json()
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between py-8">
      <div className="max-w-5xl w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {post.body.substring(0, 100)}...
            </p>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-600 font-medium"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </main>

  );
}
