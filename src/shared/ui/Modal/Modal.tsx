import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
// import 'app/styles/index.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  useEffect(() => {
    if(isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const closeHeandler = useCallback(() => {
    if(onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false)
      }, 300)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if(e.key === 'Escape') {
      closeHeandler();
    }
  }, [closeHeandler])

  const stop = (e:React.MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if(isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDown)
    }  
  }, [isOpen, onKeyDown])

  const mods: Mods = {
    [cls.opend]:isOpen,
    [cls.isClosing]: isClosing,
  };

  if(lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
        <div className={cls.overlay} onClick={closeHeandler}>
          <div className={cls.content} onClick={stop}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
    
  );
};
