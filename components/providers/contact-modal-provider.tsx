"use client";

import React, { createContext, useContext, useState } from "react";
import { ContactModal } from "@/components/features/contact/contact-modal";

interface ContactModalContextType {
    isOpen: boolean;
    openContactModal: () => void;
    closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(
    undefined
);

export const useContactModal = () => {
    const context = useContext(ContactModalContext);
    if (!context) {
        throw new Error(
            "useContactModal must be used within a ContactModalProvider"
        );
    }
    return context;
};

export const ContactModalProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openContactModal = () => setIsOpen(true);
    const closeContactModal = () => setIsOpen(false);

    return (
        <ContactModalContext.Provider
            value={{ isOpen, openContactModal, closeContactModal }}
        >
            {children}
            <ContactModal isOpen={isOpen} onClose={setIsOpen} />
        </ContactModalContext.Provider>
    );
};
