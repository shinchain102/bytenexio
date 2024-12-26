import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Terminal className="h-8 w-8 text-indigo-400" />
      <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
        Bytenex
      </span>
    </Link>
  );
};

export default NavbarLogo;