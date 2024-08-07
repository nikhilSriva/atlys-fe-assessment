import React, {ReactNode} from 'react';
import styles from './Modal.module.scss';
import CloseIcon from '../../assets/svg/Close button.svg'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    const handleClose = (e: React.MouseEvent) => {
        // Prevent closing modal when clicking inside it
        e.stopPropagation();
        onClose();
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={handleClose}>
                <button className={styles.closeButton} onClick={onClose}>
                    <img src={CloseIcon} alt={'close'}/>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
