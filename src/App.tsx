import React from 'react';
import { Toaster } from 'react-hot-toast';
import AuthTabs from './components/AuthTabs';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Sistema de Autenticación
        </h1>
        <AuthTabs />
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
