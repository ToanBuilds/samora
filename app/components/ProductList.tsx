'use client'
import { Product } from './api';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
   

    return (
        <div className="max-w-8xl mx-auto mt-4 relative overflow-hidden">
            {/* Cards container */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-0 md:gap-0">
                {products.map(product => (
                    <div
                        key={product._id}
                        className="flex-shrink-0 transition-opacity duration-300 md:p-2 p-1"
                      
                    >
                        <Link href={`/san-pham/chi-tiet/${product.slug}`}>
                            <div className="absolute z-30">
                                {/* Top right square box */}
                                <div className="absolute -right-4">
                                    <div className="w-4 h-4 relative bg-white/0">
                                        <div
                                            className="absolute top-0 right-0 w-4 h-4 bg-white"
                                            style={{
                                                clipPath: 'path("M16 0C7.16344 0 0 8.83656 0 16L0 0L16 0Z")'
                                            }}
                                        />
                                    </div>
                                </div>

                                <nav className="bg-white rounded-br-3xl">
                                    <ul className="flex">
                                        <li key={product._id}>
                                            <span className="block px-4 py-2 text-[0.65rem] md:text-sm font-semibold text-black transition-all">
                                                {product.name}
                                            </span>
                                        </li>
                                    </ul>
                                </nav>
                                {/* Bottom square box */}
                                <div className="w-4 h-4 relative bg-white/0">
                                    <div
                                        className="absolute top-0 right-0 w-4 h-4 bg-white"
                                        style={{
                                            clipPath: 'path("M16 0C7.16344 0 0 8.83656 0 16L0 0L16 0Z")'
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="bg-white rounded-xl overflow-hidden transition-opacity duration-300 relative group">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem] object-cover transition-all group-hover:blur-sm"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-blue-100 p-2 md:p-4 m-2 md:m-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center">
                                    <p className="text-gray-600 text-xs md:text-sm font-semibold">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</p>
                                    <span className="text-zinc-600 text-xs font-semibold hover:underline">Xem thêm</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
}