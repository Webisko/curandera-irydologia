import React from 'react';

export interface Package {
  id: string;
  title: string;
  price: string;
  shortDescription: string;
  features: string[];
  detailsTitle: string;
  detailsContent: string;
}

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
}