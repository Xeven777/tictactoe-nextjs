"use client";

import Image from "next/image";
import install from "@/../public/install.svg";
import usePwa from "use-pwa";

const InstallBtn = () => {
  const { appinstalled, canInstallprompt, isLoading, showInstallPrompt } =
    usePwa();

  if (!canInstallprompt || appinstalled || isLoading) return null;

  return (
    <div className="fixed md:top-6 md:left-24 bottom-2 left-2">
      <button
        type="button"
        id="installApp"
        onClick={showInstallPrompt}
        className="bg-slate-300 text-sm text-slate-800 font-semibold px-4 rounded-md py-2 inline-flex active:scale-95 transition-all hover:bg-slate-100 focus:outline-none focus:ring-slate-500"
      >
        Install <Image src={install} alt="app" width={18} />
      </button>
    </div>
  );
};

export default InstallBtn;
