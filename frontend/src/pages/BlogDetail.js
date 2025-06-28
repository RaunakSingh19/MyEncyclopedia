// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import './BlogDetail.css';

// const BlogDetail = () => {
//   const { id } = useParams();
  
//   const blogContent = {
//     1: {
//       title: "Top 10 Healthiest Fruits You Should Eat Daily",
//       author: "Dr. Sarah Johnson",
//       date: "March 15, 2024",
//       content: `
//         Eating fruits daily is one of the best ways to maintain optimal health. Here are the top 10 healthiest fruits that should be part of your regular diet:

//         1. **Blueberries** - Packed with antioxidants and vitamin C
//         2. **Apples** - High in fiber and various vitamins
//         3. **Bananas** - Rich in potassium and vitamin B6
//         4. **Oranges** - Excellent source of vitamin C and folate
//         5. **Strawberries** - High in vitamin C and manganese
//         6. **Avocados** - Healthy fats and fiber
//         7. **Pomegranates** - Powerful antioxidants
//         8. **Grapes** - Resveratrol and other beneficial compounds
//         9. **Kiwi** - Vitamin C and K, fiber
//         10. **Watermelon** - Hydration and lycopene

//         Each of these fruits offers unique health benefits and can contribute to a balanced, nutritious diet.
//       `,
//       image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061"
//     },
//     2: {
//       title: "Seasonal Fruit Guide: What to Eat When",
//       author: "Mike Chen",
//       date: "March 10, 2024",
//       content: `
//         Understanding seasonal fruits helps you get the best flavors, prices, and nutritional value. Here's a guide to eating seasonally:

//         **Spring (March-May):**
//         - Strawberries
//         - Apricots
//         - Rhubarb
//         - Early cherries

//         **Summer (June-August):**
//         - Berries (blueberries, raspberries, blackberries)
//         - Stone fruits (peaches, plums, nectarines)
//         - Melons
//         - Grapes

//         **Fall (September-November):**
//         - Apples
//         - Pears
//         - Pomegranates
//         - Cranberries

//         **Winter (December-February):**
//         - Citrus fruits (oranges, grapefruits, lemons)
//         - Kiwi
//         - Persimmons

//         Eating seasonally ensures you get the freshest, most flavorful fruits while supporting local agriculture.
//       `,
//       image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba"
//     }
//   };

//   const post = blogContent[id] || {
//     title: "Blog Post Not Found",
//     author: "Unknown",
//     date: "Unknown",
//     content: "Sorry, this blog post doesn't exist or hasn't been published yet.",
//     image: null
//   };
  
//   return (
//     <div className="blog-detail-container">
//       <Link to="/" className="back-link">
//         ← Back to Blog
//       </Link>
      
//       <article className="blog-post">
//         {post.image && (
//           <div className="post-image-container">
//             <img 
//               src={post.image} 
//               alt={post.title} 
//               className="post-image"
//             />
//           </div>
//         )}
        
//         <div className="post-header">
//           <h1 className="post-title">{post.title}</h1>
          
//           <div className="post-meta">
//             <span className="post-author">By {post.author}</span>
//             <span className="meta-separator">•</span>
//             <span className="post-date">{post.date}</span>
//           </div>
//         </div>
        
//         <div className="post-content">
//           {post.content.split('\n').map((paragraph, index) => (
//             <p key={index} className="content-paragraph">
//               {paragraph.trim() === '' ? <br /> : paragraph}
//             </p>
//           ))}
//         </div>

//         <div className="post-footer">
//           <div className="social-share">
//             <span>Share this post:</span>
//             <button className="share-button facebook">Facebook</button>
//             <button className="share-button twitter">Twitter</button>
//             <button className="share-button linkedin">LinkedIn</button>
//           </div>
//         </div>
//       </article>

//       <div className="related-posts">
//         <h3>You Might Also Like</h3>
//         <div className="related-grid">
//           {Object.entries(blogContent)
//             .filter(([key]) => key !== id)
//             .map(([key, post]) => (
//               <Link to={`/blog/${key}`} key={key} className="related-post">
//                 <h4>{post.title}</h4>
//                 <p className="related-author">By {post.author}</p>
//               </Link>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://myencyclopedia-76ou.onrender.com/api/blogs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Not found');
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setNotFound(false);
      })
      .catch(() => {
        setNotFound(true);
      });
  }, [id]);

  // Static fallback posts for "You Might Also Like"
  const relatedPosts = [
    {
      _id: '1',
      title: 'Top 10 Healthiest Fruits You Should Eat Daily',
      author: 'Dr. Sarah Johnson',
    },
    {
      _id: '2',
      title: 'Seasonal Fruit Guide: What to Eat When',
      author: 'Mike Chen',
    },
  ];

  return (
    <div className="blog-detail-container">
      <Link to="/" className="back-link">
        ← Back to Blog
      </Link>

      <article className="blog-post">
        {!notFound && post?.image && (
          <div className="post-image-container">
            <img
              src={post.image}
              alt={post.title}
              className="post-image"
            />
          </div>
        )}

        <div className="post-header">
          <h1 className="post-title">
            {notFound ? 'Blog Post Not Found' : post?.title}
          </h1>

          <div className="post-meta">
            <span className="post-author">
              By {notFound ? 'Unknown' : post?.author}
            </span>
            <span className="meta-separator">•</span>
            <span className="post-date">
              {notFound ? 'Unknown' : post?.date}
            </span>
          </div>
        </div>

        <div className="post-content">
          {notFound ? (
            <p>
              Sorry, this blog post doesn't exist or hasn't been published yet.
            </p>
          ) : (
            post?.content?.split('\n').map((para, index) => (
              <p key={index} className="content-paragraph">
                {para.trim() === '' ? <br /> : para}
              </p>
            ))
          )}
        </div>

        <div className="post-footer">
          <div className="social-share">
            <span>Share this post:</span>
            <button className="share-button facebook">Facebook</button>
            <button className="share-button twitter">Twitter</button>
            <button className="share-button linkedin">LinkedIn</button>
          </div>
        </div>
      </article>

      <div className="related-posts">
        <h3>You Might Also Like</h3>
        <div className="related-grid">
          {relatedPosts
            .filter((item) => item._id !== id)
            .map((item) => (
              <Link to={`/blog/${item._id}`} key={item._id} className="related-post">
                <h4>{item.title}</h4>
                <p className="related-author">By {item.author}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
