import React from 'react';
import City from '../../components/City/City';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <City />
      <Footer />
    </div>
  )
}
