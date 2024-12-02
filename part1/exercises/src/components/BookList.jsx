import React from "react";
import "./BookList.css";

export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = {
      src: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593904749_p0_v10%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      title: "Impossible Creatures by Katherine Rundell",
   };
   let book2 = {
      src: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781538757932_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      title: "To Die For by David Baldacci",
   };
   let book3 = {
      src: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250288783_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      title: "The Mirror by Nora Roberts",
   };

   return (
      <main className="main">
         <h3 className="page-title">{pageTitle}</h3>
         <div className="book-list">
            {[book1, book2, book3].map((book, index) => (
               <div key={index} className="book-item">
                  <img src={book.src} alt={book.title} className="book-image" />
                  <p className="book-title">{book.title}</p>
               </div>
            ))}
         </div>
      </main>
   );
}
