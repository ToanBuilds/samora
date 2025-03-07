"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, FacebookIcon, Headphones, InstagramIcon, Leaf, Settings, Shield, Twitter, Wine } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function FooterSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bannerMessage, setBannerMessage] = useState(0);
  const cardData = [
    {
      title: 'Sâm Ngọc Linh',
      description: 'Sản phẩm cao cấp từ thiên nhiên',
      icon: <Leaf className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Rượu Sâm',
      description: 'Tinh hoa từ thảo dược',
      icon: <Wine className="h-6 w-6 text-red-600" />
    },
    {
      title: 'Chứng nhận',
      description: 'Đạt chuẩn chất lượng',
      icon: <Shield className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Tư vấn',
      description: 'Hỗ trợ 24/7',
      icon: <Headphones className="h-6 w-6 text-purple-500" />
    }
  ];
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-zinc-100 p-4 rounded-xl hover:bg-blue-100 transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
              <div className="ml-4">
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Carousel container */}
      <div className="relative rounded-xl overflow-hidden">
        <div className="max-w-8xl mx-auto relative overflow-hidden ">
          <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row">
                {/* Left Section (2/3 width) */}
                <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-12">
                  <div className="flex items-center mb-6">
                    {/* Logo */}
                    <div className="w-20 h-20 mr-3 relative">
                      <Image
                        src="/logo.png"
                        alt="Company Logo"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-full bg-white"
                      />
                    </div>
                    {/* Company Name */}
                    <h2 className="text-xl font-bold">Bảo Ly</h2>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 max-w-2xl">
                    Chúng tôi tự hào là đơn vị tiên phong trong việc sản xuất và phân phối Rượu Sâm Ngọc Linh
                    chất lượng cao, được chế biến từ những củ sâm Ngọc Linh quý hiếm trên dãy Trường Sơn của Việt Nam.
                  </p>

                  {/* Links */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Sản phẩm</h3>
                      <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Sâm Ngọc Linh</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Rượu Sâm</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Combo Quà Tặng</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Sản Phẩm Mới</Link></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Công ty</h3>
                      <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Giới Thiệu</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Tuyển Dụng</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Tin Tức</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Đối Tác</Link></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Hỗ trợ</h3>
                      <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Trung Tâm Hỗ Trợ</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Liên Hệ</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Chính Sách Bảo Mật</Link></li>
                        <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Điều Khoản Sử Dụng</Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="tel:0905422412"
                    className="bg-white text-black font-bold py-2 px-6 rounded-md hover:bg-gray-200 transition-colors inline-block"
                  >
                    Liên hệ ngay
                  </a>
                </div>

                {/* Right Section (1/3 width) */}
                <div className="lg:w-1/3 bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Hãy giữ liên lạc</h3>
                  <p className="text-gray-400 mb-4">
                    Đăng ký để nhận những thông báo và ưu đãi lớn từ Sâm Ngọc Linh Bảo Ly.
                  </p>

                  {/* Email Input */}
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                      Địa chỉ Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 bg-zinc-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button className="w-full bg-zinc-600 hover:bg-zinc-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Đăng Ký
                  </button>
                </div>
              </div>

              {/* Bottom Copyright */}
              <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Sâm Ngọc Linh Bảo Ly. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}