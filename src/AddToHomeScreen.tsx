import React, { useState, useEffect } from "react";

const AddToHomeScreen: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any | null>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("beforeinstallprompt", (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e);
      });
    }
  }, []);

  const handleAddToHomeScreen = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div>
      {deferredPrompt && (
        <button onClick={handleAddToHomeScreen}>Add to Home Screen</button>
      )}
    </div>
  );
};

export default AddToHomeScreen;
