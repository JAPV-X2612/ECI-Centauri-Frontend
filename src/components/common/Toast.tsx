/**
 * Toast Component - Toast notification system
 * NASA Space Apps Challenge 2025
 */

import React, { useState, useEffect, createContext, useContext, useCallback, useMemo } from 'react';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

interface ToastContextType {
  showToast: (type: ToastType, message: string, duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

/**
 * Hook to use toast notifications
 */
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

/**
 * Toast Provider Component
 */
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((type: ToastType, message: string, duration: number = 4000) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const newToast: Toast = { id, type, message, duration };
    
    setToasts((prev) => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, [removeToast]);

  const contextValue = useMemo(
    () => ({ showToast, removeToast }),
    [showToast, removeToast]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};

/**
 * Toast Container Component
 */
interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
};

/**
 * Individual Toast Item Component
 */
interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Auto-remove animation
    if (toast.duration && toast.duration > 0) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, toast.duration - 300);

      return () => clearTimeout(exitTimer);
    }
  }, [toast.duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onRemove(toast.id);
    }, 300);
  };

  const getToastStyles = () => {
    const baseStyles = "pointer-events-auto flex items-start gap-3 p-4 rounded-lg shadow-2xl border backdrop-blur-lg min-w-[320px] max-w-md transition-all duration-300";
    
    switch (toast.type) {
      case 'success':
        return `${baseStyles} bg-green-900/90 border-green-500/50 text-green-100`;
      case 'error':
        return `${baseStyles} bg-red-900/90 border-red-500/50 text-red-100`;
      case 'warning':
        return `${baseStyles} bg-yellow-900/90 border-yellow-500/50 text-yellow-100`;
      case 'info':
        return `${baseStyles} bg-blue-900/90 border-blue-500/50 text-blue-100`;
      default:
        return `${baseStyles} bg-slate-900/90 border-slate-500/50 text-slate-100`;
    }
  };

  const getIcon = () => {
    const iconClass = "w-5 h-5 flex-shrink-0 mt-0.5";
    
    switch (toast.type) {
      case 'success':
        return <CheckCircle className={`${iconClass} text-green-400`} />;
      case 'error':
        return <AlertCircle className={`${iconClass} text-red-400`} />;
      case 'warning':
        return <AlertTriangle className={`${iconClass} text-yellow-400`} />;
      case 'info':
        return <Info className={`${iconClass} text-blue-400`} />;
      default:
        return <Info className={`${iconClass}`} />;
    }
  };

  return (
    <div
      className={`${getToastStyles()} ${
        isExiting ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
      }`}
    >
      {getIcon()}
      <div className="flex-1 text-sm font-medium leading-relaxed">
        {toast.message}
      </div>
      <button
        onClick={handleClose}
        className="flex-shrink-0 hover:opacity-70 transition-opacity"
        aria-label="Close notification"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};
