import React, { useState } from 'react';
import { LogIn, UserPlus } from 'lucide-react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

type Tab = 'login' | 'register';

export default function AuthTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('login');

  return (
    <div className="w-full max-w-md">
      <div className="flex mb-8">
        <button
          onClick={() => setActiveTab('login')}
          className={`flex-1 py-3 flex items-center justify-center gap-2 ${
            activeTab === 'login'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 border-b-2 border-gray-200'
          }`}
        >
          <LogIn size={20} />
          <span>Iniciar Sesión</span>
        </button>
        <button
          onClick={() => setActiveTab('register')}
          className={`flex-1 py-3 flex items-center justify-center gap-2 ${
            activeTab === 'register'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 border-b-2 border-gray-200'
          }`}
        >
          <UserPlus size={20} />
          <span>Registrarse</span>
        </button>
      </div>

      {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}
