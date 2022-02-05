import React, { useState, useRef, useEffect } from "react";
import { Keyboard } from "react-native";

/**
 * Returns if the keyboard is open/closed
 *
 * @return {bool} isKeyboardOpen
 */
export function useKeyboardStatus() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const keyboardShowListener = useRef(null);
  const keyboardHideListener = useRef(null);

  useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener("keyboardDidShow", () =>
      setIsKeyboardOpen(true)
    );
    keyboardHideListener.current = Keyboard.addListener("keyboardDidHide", () =>
      setIsKeyboardOpen(false)
    );

    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    };
  });

  return isKeyboardOpen;
}