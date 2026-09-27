import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ServiceType = 'isfp' | 'waermepumpe' | 'foerderung' | 'fachbauleitung' | 'allgemein';

interface ContactModalContextType {
  isOpen: boolean;
  selectedService: ServiceType | null;
  openModal: (service?: ServiceType | null) => void;
  closeModal: () => void;
  selectService: (service: ServiceType) => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  const openModal = (service: ServiceType | null = null) => {
    setSelectedService(service);
    setIsOpen(true);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedService(null);
    document.body.style.overflow = '';
  };

  const selectService = (service: ServiceType) => {
    setSelectedService(service);
  };

  return (
    <ContactModalContext.Provider
      value={{
        isOpen,
        selectedService,
        openModal,
        closeModal,
        selectService
      }}
    >
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = (): ContactModalContextType => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
