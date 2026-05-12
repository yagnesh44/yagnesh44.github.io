'use client';

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export default function TypingAnimation({ 
  words, 
  typingSpeed = 100, 
  deletingSpeed = 50,
  delayBetweenWords = 1000 
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="text-pink-500 dark:text-pink-400 font-semibold">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

