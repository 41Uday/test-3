import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const data = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
  { id: 5, title: "Post 5" },
  { id: 6, title: "Post 6" },
  { id: 7, title: "Post 7" },
  { id: 8, title: "Post 8" },
  { id: 9, title: "Post 9" },
  { id: 10, title: "Post 10" },
  { id: 11, title: "Post 11" },
  { id: 12, title: "Post 12" },
  { id: 13, title: "Post 13" },
  { id: 14, title: "Post 14" },
  { id: 15, title: "Post 15" },
  { id: 16, title: "Post 16" },
  { id: 17, title: "Post 17" },
  { id: 18, title: "Post 18" },
  { id: 19, title: "Post 19" },
  { id: 20, title: "Post 20" },
  { id: 21, title: "Post 21" },
  { id: 22, title: "Post 22" },
  { id: 23, title: "Post 23" },
  { id: 24, title: "Post 24" },
  { id: 25, title: "Post 25" },
  { id: 26, title: "Post 26" },
  { id: 27, title: "Post 27" },
  { id: 28, title: "Post 28" },
  { id: 29, title: "Post 29" },
  { id: 30, title: "Post 30" },
];

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = [];

  const visiblePages = 3; // Number of visible page pills
  const maxLeft = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
  const maxRight = Math.min(maxLeft + visiblePages - 1, totalPages);

  for (let i = maxLeft; i <= maxRight; i++) {
    pageNumbers.push(i);
  }

  function handlePageChange(pageNumber) {
    onPageChange(pageNumber);
  }

  const abc = () => {
    // setCurrentPage(1);
    // paginate(1);
    onPageChange(1);
    console.log("first");
  };

  const lastArrow = () => {
    onPageChange(totalPages);
    // console.log("last");
  };

  return (
    <nav className="flex  justify-center mt-10">
      <ul className="pagination flex items-center  rounded-lg hover:cursor-pointer">
        <li>
          <AiOutlineLeft
            className="hover:text-blue-500 hover:cursor-pointer text-xl"
            onClick={abc}
          />
        </li>
        {currentPage !== 1 ? (
          <li
            className="g-white  hover:underline text-blue-500 font-semibold py-2 px-4 border-none"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </li>
        ) : (
          <li
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-none  opacity-50 cursor-not-allowed"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </li>
        )}

        {pageNumbers[0] !== 1 && (
          <li
            className="page-item m-2 font-semibold"
            onClick={() => handlePageChange(1)}
          >
            1
          </li>
        )}

        {pageNumbers[0] > 2 && <li className="page-item disabled m-2">...</li>}

        {pageNumbers.map((pageNumber, index) => (
          <li
            key={index}
            // className={`page-item${
            //   pageNumber === currentPage ? " active" : ""
            // } m-2`}
            className={`${
              pageNumber === currentPage
                ? // "bg-blue-500 hover:bg-blue-700 text-white rounded-md border-none"
                  "text-blue-700 border-none underline  hover:text-blue-700 "
                : "hover:text-blue-700 border-none"
            } font-semibold py-2 px-4 border border-gray-400`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}

        {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
          <li className="page-item disabled m-2">...</li>
        )}

        {pageNumbers[pageNumbers.length - 1] !== totalPages && (
          <li
            className="page-item m-2"
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </li>
        )}

        {currentPage !== totalPages ? (
          <li
            className="g-white  hover:underline text-blue-500 font-semibold py-2 px-4 border-none"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </li>
        ) : (
          <li
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-none  opacity-50 cursor-not-allowed"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </li>
        )}
        <li>
          <AiOutlineRight
            className="hover:text-blue-500 hover:cursor-pointer text-xl"
            onClick={lastArrow}
          />
        </li>
      </ul>
    </nav>
  );
}

function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(data.length / postsPerPage);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">My Data</h1>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr key={post.id}>
              <td className="border px-4 py-2">{post.id}</td>
              <td className="border px-4 py-2">{post.title}</td>
              <td className="border px-4 py-2">{post.email}</td>
              <td className="border px-4 py-2">{post.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Page;
