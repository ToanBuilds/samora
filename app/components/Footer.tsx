"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, FacebookIcon, Headphones, InstagramIcon, Leaf, Settings, Shield, Twitter, Wine } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


export default function FooterSection() {

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
  return (
    <footer className="bg-zinc-100 text-black py-12">
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
                className="rounded-full bg-blue-500"
              />
            </div>
            {/* Company Name */}
            <h2 className="text-xl font-bold">Bảo Ly</h2>
          </div>
  
          {/* Description */}
          <p className="text-black mb-6 max-w-2xl">
            Chúng tôi tự hào là đơn vị tiên phong trong việc sản xuất và phân phối Rượu Sâm Ngọc Linh
            chất lượng cao, được chế biến từ những củ sâm Ngọc Linh quý hiếm trên dãy Trường Sơn của Việt Nam.
          </p>
  
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Sản phẩm</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-black hover:text-blue-600 transition-colors">Sâm Ngọc Linh</Link></li>
                <li><Link href="#" className="text-black hover:text-blue-600 transition-colors">Rượu Sâm</Link></li>
                <li><Link href="#" className="text-black hover:text-blue-600 transition-colors">Combo Quà Tặng</Link></li>
                <li><Link href="#" className="text-black hover:text-blue-600 transition-colors">Sản Phẩm Mới</Link></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-3">Công ty</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-black hover:text-blue-600 transition-colors">Giới Thiệu</Link></li>
                <li><Link href="#" className="text-black hover:text-blue-600 transition-colors">Tuyển Dụng</Link></li>
                <li><Link href="#" className="text-black hover:text-blue-600 transition-colors">Tin Tức</Link></li>
                <li><Link href="#" className="text-black hover:text-blue-600 transition-colors">Đối Tác</Link></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-3">Hỗ trợ</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-black hover:text-blue-600 transition-colors">Trung Tâm Hỗ Trợ</Link></li>
                <li><Link href="#" className="text-black hover:text-blue-600 transition-colors">Liên Hệ</Link></li>
                <li><Link href="#" className="text-black hover:text-blue-600 transition-colors">Chính Sách Bảo Mật</Link></li>
                <li><Link href="#" className="text-black hover:text-blue-600 transition-colors">Điều Khoản Sử Dụng</Link></li>
              </ul>
            </div>
          </div>
  
          {/* CTA Button */}
          <a
            href="tel:0905422412"
            className="bg-blue-500 text-amber-50 font-bold py-2 px-6 rounded-md hover:bg-blue-600 transition-colors inline-block"
          >
            Liên hệ ngay
          </a>
        </div>
  
        {/* Right Section (1/3 width) */}
        <div className="lg:w-1/3 bg-zinc-200 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-black">Hãy giữ liên lạc</h3>
          <p className="text-black mb-4">
            Đăng ký để nhận những thông báo và ưu đãi lớn từ Sâm Ngọc Linh Bảo Ly.
          </p>
  
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              Địa chỉ Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 bg-zinc-100 text-black border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Submit Button */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-amber-50 font-medium py-2 px-4 rounded-md transition-colors">
            Đăng Ký
          </button>
        </div>
      </div>
  
      {/* Bottom Copyright */}
      <div className="mt-12 pt-8 border-t border-blue-100 text-center text-black text-sm">
        <p>© {new Date().getFullYear()} Sâm Ngọc Linh Bảo Ly. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
}