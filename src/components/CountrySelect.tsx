import React from 'react';
import { ChevronDown } from 'lucide-react';

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CountrySelect = ({ value, onChange }: CountrySelectProps) => {
  const countries = [
    { code: '+1', name: 'USA/Canada' },
    { code: '+44', name: 'UK' },
    { code: '+91', name: 'India' },
    { code: '+971', name: 'UAE' },
    { code: '+966', name: 'Saudi Arabia' },
    // Add more countries as needed
  ];

  return (
    <div className="relative w-full sm:w-32">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none px-4 py-2 pr-8 rounded-lg cyber-border bg-gray-900/50 text-white focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.code} {country.name}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
    </div>
  );
};

export default CountrySelect;