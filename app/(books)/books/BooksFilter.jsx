'use client';

import { useMemo, useState } from 'react';
import BookCard from "../../../components/Utils/BookCard";

export default function BooksFilter({ books = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extract unique categories from books
  const categories = useMemo(() => {
    const cats = books.map(book => book.category);
    return ['all', ...new Set(cats)];
  }, [books]);

  // Filter books based on search and category
  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.authorName.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'all' || 
        book.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [books, searchQuery, selectedCategory]);

  return (
    <>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* Search and Filter Section */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col gap-4">
          {/* Search Bar */}
          <div className="relative">
            <svg 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
            <input
              type="text"
              placeholder="Search by book title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#eb7c1f] focus:ring-2 focus:ring-[#eb7c1f]/20 transition-all duration-300 text-sm sm:text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#eb7c1f] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap flex-shrink-0">
              Filter by:
            </span>
            <div className="relative flex-1">
              {/* Scroll container */}
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 pb-2 min-w-min">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize whitespace-nowrap flex-shrink-0 ${
                        selectedCategory === category
                          ? 'bg-[#eb7c1f] text-white shadow-lg shadow-[#eb7c1f]/30'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              {/* Gradient indicators for scroll */}
              <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent"></div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>
              {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} found
            </span>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#eb7c1f] hover:text-[#d16a15] font-medium transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="best-books-container max-w-[1300px] mx-auto gap-8">
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 max-[425px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 mx-auto max-w-7xl max-[1190px]:grid-cols-2">
            {filteredBooks.map((book) => (
              <BookCard
                key={book._id}
                bookname={book.title}
                author={book.authorName}
                price={book.price}
                img={book.coverImage}
                id={book._id}
                rating={book.avgRating}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4">
            <svg 
              className="mx-auto h-16 w-16 text-gray-300 mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No books found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </>
  );
}