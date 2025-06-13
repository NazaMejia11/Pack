import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBoxOpen,
  FaShapes,
  FaShoppingCart,
  FaUsers,
  FaBullseye,
  FaEye,
  FaPalette,
  FaCubes,
  FaImage,
  FaBalanceScale,
  FaLanguage,
  FaMoneyBillWave,
  FaClock
} from 'react-icons/fa';

const points = [
  {
    icon: FaBoxOpen,
    title: 'Type of product',
    desc: 'Coffee, honey, sauce, chocolate, etc.'
  },
  {
    icon: FaShapes,
    title: 'Preferred format',
    desc: 'Pouch, jar, bottle, box, etc.'
  },
  {
    icon: FaShoppingCart,
    title: 'Estimated monthly quantity',
    desc: 'How many units will you need?'
  },
  {
    icon: FaUsers,
    title: 'Sales channels',
    desc: 'Markets, supermarkets, social media, export, etc.'
  },
  {
    icon: FaBullseye,
    title: 'Target audience',
    desc: 'Age, gender, socioeconomic level'
  },
  {
    icon: FaEye,
    title: 'Competitors or visual references',
    desc: 'Brands you like or compete with'
  },
  {
    icon: FaPalette,
    title: 'Brand tone',
    desc: 'Elegant, artisanal, minimalist, colorful, etc.'
  },
  {
    icon: FaCubes,
    title: 'Desired materials',
    desc: 'Glass, plastic, kraft paper, aluminum, etc.'
  },
  {
    icon: FaImage,
    title: 'Available assets',
    desc: 'Logo, photos, brand colors'
  },
  {
    icon: FaBalanceScale,
    title: 'Legal information',
    desc: 'Net content, origin, sanitary registration, etc.'
  },
  {
    icon: FaLanguage,
    title: 'Required languages',
    desc: 'Languages that must appear on the packaging'
  },
  {
    icon: FaMoneyBillWave,
    title: 'Approximate budget',
    desc: 'Your packaging budget'
  },
  {
    icon: FaClock,
    title: 'Expected delivery time',
    desc: 'When do you need the packaging?'
  }
];

export default function BriefSection() {
  return (
    <section id="brief" className="py-16 px-4 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Let’s build your ideal packaging – Fill out this brief.
      </h2>
      <div className="overflow-x-auto flex space-x-4 pb-4">
        {points.map((Point, idx) => {
          const Icon = Point.icon;
          return (
            <motion.div
              key={idx}
              className="min-w-[250px] bg-gray-100 rounded-lg p-4 flex-shrink-0"
              whileHover={{ y: -4 }}
            >
              <Icon className="text-3xl text-blue-600 mb-2" />
              <h3 className="font-semibold mb-1">{Point.title}</h3>
              <p className="text-sm text-gray-600">{Point.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
