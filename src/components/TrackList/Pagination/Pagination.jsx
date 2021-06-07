import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const Pagination = ({ page, postsPerPage, totalPosts, paginate}) => {
    // const pageNumbers = [];

    const pages = Math.ceil(totalPosts / postsPerPage);

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
            <nav>
                <button onClick={() => paginate(page+1)} className="pagination__btn">
                    <span>Page {page + 1}</span>
                    <FaAngleRight />
                </button>
            </nav>
        );
    } else if (page < pages) {
        return (
          <nav>
            <button
              onClick={() => paginate(page - 1)}
              className="pagination__btn"
            >
              <span>Page {page - 1}</span>
              <FaAngleLeft />
            </button>
                
            <button
              onClick={() => paginate(page + 1)}
              className="pagination__btn"
            >
              <span>Page {page + 1}</span>
              <FaAngleRight />
            </button>
          </nav>
        );
    } else if (page === pages && pages > 1) {
        return (
          <nav>
            <button
              onClick={() => paginate(page - 1)}
              className="pagination__btn"
            >
              <span>Page {page - 1}</span>
              <FaAngleLeft />
            </button>
          </nav>
        );
    }
}

export default Pagination;