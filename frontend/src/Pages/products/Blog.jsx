// import React from "react";

// const blogPosts = [
//   {
//     title: "Boost Your Sales with Data Insights",
//     date: "April 28, 2025",
//     author: "Admin",
//     content:
//       "Learn how to use real-time analytics and dashboards to enhance your team's performance and increase conversions.",
//     image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?fit=crop&w=600&q=80",
//   },
//   {
//     title: "Top 5 Features of Our Sales Tracker",
//     date: "April 20, 2025",
//     author: "Jane Doe",
//     content:
//       "Discover the key features that make our sales tracker an indispensable tool for sales teams.",
//     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=600&q=80",
//   },
//   {
//     title: "How to Motivate Your Sales Team",
//     date: "April 10, 2025",
//     author: "John Smith",
//     content:
//       "Motivation is key to performance. Explore proven strategies to keep your sales team engaged and driven.",
//     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?fit=crop&w=600&q=80",
//   },
//   {
//     title: "Using CRM to Improve Customer Experience",
//     date: "March 30, 2025",
//     author: "Emily Clark",
//     content:
//       "Customer experience can make or break a sale. Learn how CRM tools help personalize and streamline customer interactions.",
//     image: "https://images.unsplash.com/photo-1581093588401-9cb9c4b6d05c?fit=crop&w=600&q=80",
//   },
//   {
//     title: "Why Sales Forecasting Matters",
//     date: "March 18, 2025",
//     author: "Michael Lee",
//     content:
//       "Accurate forecasting helps teams set realistic goals and plan ahead. Here’s how to get it right with minimal effort.",
//     image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fit=crop&w=600&q=80",
//   },
//   {
//     title: "Leveraging AI in Sales Strategy",
//     date: "March 5, 2025",
//     author: "Sophia Patel",
//     content:
//       "AI isn’t just hype—it's transforming sales from top to bottom. Find out how to implement AI-driven strategies today.",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=600&q=80",
//   },
// ];

// const BlogPage = () => {
//   return (
//     <div className="relative min-h-screen font-sans">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1522199670076-2852f80289c3?fit=crop&w=1600&q=80')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//       </div>

//       {/* Content layer */}
//       <div className="relative z-10 py-12 px-4">
//         <h1 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">
//           Sales Tracker Blog
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
//           {blogPosts.map((post, index) => (
//             <div
//               key={index}
//               className="group transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer max-w-[400px] mx-auto"
//             >
//               <div
//                 className="bg-white rounded-lg shadow-md overflow-hidden relative"
//                 style={{ height: "460px" }}
//               >
//                 {/* Image */}
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-52 object-cover"
//                 />

//                 {/* Hover overlay */}
//                 <div className="relative overflow-hidden h-[calc(100%-13rem)]">
//                   {/* Hover background animation */}
//                   <div className="absolute inset-0 bg-blue-900 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700 z-0 rounded-b-lg" />

//                   {/* Text content */}
//                   <div className="relative z-10 p-4 transition-colors duration-300">
//                     <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-2 transition-colors duration-300">
//                       {post.title}
//                     </h2>
//                     <p className="text-sm text-gray-500 group-hover:text-gray-300 mb-2 transition-colors duration-300">
//                       {post.date} • {post.author}
//                     </p>
//                     <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
//                       {post.content.slice(0, 100)}...
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;
import React from 'react'
import Cards2 from '../Cards2'

const Blog = () => {
  return (
    <>
    <div className='bg-gray-100'>
       <Cards2/>
</div>
    </>
  )
}

export default Blog