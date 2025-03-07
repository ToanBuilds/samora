"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Sample image data - replace with your actual image URLs
const carouselImages = [
    {
        src: "/hero.jpg",
        alt: "Sale on summer collection",
        title: "Summer Collection",
        subtitle: "Up to 50% off on selected items"
    },
    {
        src: "/hero.jpg",
        alt: "New arrivals",
        title: "New Arrivals",
        subtitle: "Check out our latest products"
    },
    {
        src: "/hero.jpg",
        alt: "Exclusive deals",
        title: "Exclusive Deals",
        subtitle: "Limited time offers"
    }
];

export default function AboutSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [bannerMessage, setBannerMessage] = useState(0);

    const bannerMessages = [
        "🔥 Summer sale - Up to 50% off 🔥",
        "⚡ Free shipping on orders over $50 ⚡",
        "🎁 Use code 'WELCOME10' for 10% off your first order 🎁"
    ];

    // Auto rotate banner messages
    // useEffect(() => {
    // const interval = setInterval(() => {
    //     setBannerMessage((prev) => (prev + 1) % bannerMessages.length);
    // }, 4000);
    // return () => clearInterval(interval);
    // }, [bannerMessages.length]);

    // Function to move to next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    // Function to move to previous slide
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    // Auto rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    const navItems = [
        { title: "Women", href: "#" },
        { title: "Men", href: "#" },
        { title: "Kids", href: "#" },
        { title: "Blog", href: "#" },
    ];
    return (
        <div className="h-full w-full max-w-8xl mx-auto p-2 space-y-3 bg-white">
            <div
                className="bg-zinc-100 flex items-center justify-center text-black p-6 rounded-xl overflow-hidden relative"
            >
                <div className="text-center text-base font-normal">
                    <span>Về Chúng Tôi</span>
                </div>
            </div>

            {/* Carousel container */}
            <div className="relative rounded-xl overflow-hidden">
                <div className="max-w-8xl mx-auto relative overflow-hidden ">
                    <div className="bg-white rounded-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Text Content (1/3 width) */}
                            <div className="md:w-1/3 p-12 bg-zinc-100 rounded-xl flex flex-col justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Rượu Sâm Ngọc Linh Bảo Ly</h2>
                                </div>

                                <div>
                                    <p className="text-gray-800 mb-4 text-sm md:text-base">
                                    Chúng tôi tự hào là đơn vị tiên phong trong việc sản xuất và phân phối Rượu Sâm Ngọc Linh 
                                    chất lượng cao, được chế biến từ những củ sâm Ngọc Linh quý hiếm trên dãy Trường Sơn của Việt Nam.
                                    </p>
                                    <p className="text-gray-800 mb-6 text-sm md:text-base">
                                    Với hơn 10 năm kinh nghiệm, chúng tôi cam kết mang đến cho khách hàng những sản phẩm 
                                        rượu sâm nguyên chất, được sản xuất theo quy trình nghiêm ngặt, đảm bảo giữ trọn vẹn 
                                        dược tính quý báu của sâm Ngọc Linh.
                                    </p>
                                    <a href="#" className="text-zinc-800 hover:text-zinc-600 text-sm transition duration-200">
                                        Xem Thêm
                                    </a>
                                </div>
                            </div>

                            {/* Image (2/3 width) */}
                            <div className="md:w-2/3 relative rounded-xl">
                                <div className="h-[30rem] md:h-[40rem] rounded-lg overflow-hidden">
                                    <Image
                                        src="/SAM20-scaled.png"
                                        alt="Bottom right image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}