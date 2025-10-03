/**
 * Custom React hook for modal state management
 * NASA Space Apps Challenge 2025
 */

import { useState } from 'react';

/**
 * Hook to manage modal open/close state
 * @param initialState - Initial open state (default: false)
 * @returns Modal state and control functions
 */
export const useModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  /**
   * Open the modal
   */
  const open = () => setIsOpen(true);

  /**
   * Close the modal
   */
  const close = () => setIsOpen(false);

  /**
   * Toggle modal state
   */
  const toggle = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    open,
    close,
    toggle
  };
};
