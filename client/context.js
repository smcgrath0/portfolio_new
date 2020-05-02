import React from 'react';

export const app = {
    isClicked: false,
    setClicked: () => {},
    currentSlide: '',
    setCurrentSlide: () => {}
};

export const AppContext = React.createContext(
    app
);
