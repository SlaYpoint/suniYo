import React from "react";
import "./Pagination.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const Pagination = ({ page, postsPerPage, totalPosts, paginate}) => {

    const pages = Math.ceil(totalPosts / postsPerPage);
  // console.log(page);
    // for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++){
    //     pageNumbers.push(i);
    // }

    // return (
    //     // <nav>
    //     //     <ul className="pagination">
    //     //         {pageNumbers.map(num => (
    //     //             <li key={num} className="page-item">
    //     //                 <a onClick={() => paginate(num)} href="!#" className="page-link">
    //     //                     {num}
    //     //                 </a>
    //     //             </li>
    //     //         ))}
    //     //     </ul>
    //     // </nav>
        
    // );

    if (page === 1 && pages > 1) {
        return (
            <nav className="pagination">
                <button onClick={() => paginate(page+1)} className="pagination__btn">
                    <span>{page + 1}</span>
                    <FaAngleRight />
                </button>
            </nav>
        );
    } else if (page < pages) {
        return (
          <nav className="pagination">
            <button
              onClick={() => paginate(page - 1)}
              className="pagination__btn"
            >
              <FaAngleLeft />
              <span>{page - 1}</span>
            </button>

            <button
              onClick={() => paginate(page + 1)}
              className="pagination__btn"
            >
              <span>{page + 1}</span>
              <FaAngleRight />
            </button>
          </nav>
        );
    } else if (page === pages && pages > 1) {
        return (
          <nav className="pagination">
            <button
              onClick={() => paginate(page - 1)}
              className="pagination__btn"
            >
              <FaAngleLeft />
              <span>{page - 1}</span>
            </button>
          </nav>
        );
    }
  return (
    <>
    </>
  );
}

export default Pagination;