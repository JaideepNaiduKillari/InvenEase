"use client";

import { useRouter } from 'next/navigation';
import { Package, TrendingUp, Archive, ShoppingCart, Users, BarChart3 } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();

  const handleCardClick = (route: string) => {
    router.push(route);
  };

  return (
    <div suppressHydrationWarning className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">InvenEase</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Dashboard</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Settings</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Support</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">InvenEase</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your complete Point-of-Sale solution with integrated inventory management, sales analytics, and subscription billing powered by Razorpay.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Product Management Card */}
          <div 
            onClick={() => handleCardClick('/products')}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-6 group-hover:shadow-lg transition-shadow">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Management</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Efficiently manage your product catalog with barcode support, real-time inventory tracking, and automated stock alerts.
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Manage Products</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Sales Management Card */}
          <div 
            onClick={() => handleCardClick('/sales')}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-6 group-hover:shadow-lg transition-shadow">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sales Management</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Process transactions seamlessly with integrated POS, generate GST invoices, and access comprehensive sales analytics and reports.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Manage Sales</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Inventory Management Card */}
          <div 
            onClick={() => handleCardClick('/inventory')}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 group-hover:shadow-lg transition-shadow">
                <Archive className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Inventory Control</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Advanced inventory management with low-stock alerts, automated reordering, and detailed inventory analytics.
              </p>
              <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Manage Inventory</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Quick Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">1,234</p>
              <p className="text-gray-600 dark:text-gray-300">Active Customers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-4">
                <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5,678</p>
              <p className="text-gray-600 dark:text-gray-300">Products in Stock</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">₹2,34,567</p>
              <p className="text-gray-600 dark:text-gray-300">Monthly Revenue</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to streamline your business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get started with InvenEase today and experience the power of integrated POS and inventory management.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">InvenEase</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-center md:text-right">
              © 2025 InvenEase. All rights reserved. Powered by Razorpay.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

