import React from 'react';

const Navigation = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white" href="#">
              <span className="material-symbols-outlined text-3xl text-primary">all_inclusive</span>
              <span className="font-display">Cluely</span>
            </a>
            <div className="hidden lg:flex items-center gap-6">
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Pricing</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Enterprise</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Careers</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Help Center</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a className="hidden sm:inline-block bg-slate-900 dark:bg-slate-800 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-slate-700 dark:hover:bg-slate-700 transition-colors" href="#">
              <div className="flex items-center gap-2">
                {/* Apple SVG Icon */}
                <svg className="bi bi-apple" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.182.008C10.148-.03 9.05.037 8.017.23c-.98.187-1.844.5-2.618.94C4.605 1.57 3.93 2.15 3.38 2.885c-.53.71-1.01 1.57-1.396 2.53C1.576 6.29 1.42 7.15 1.49 8.02c.07.86.32 1.66.72 2.37.405.71.98 1.34 1.74 1.81.75.46 1.63.76 2.59.88.96.12 1.95.03 2.92-.18.97-.21 1.9-.59 2.72-1.12C13.207 11.23 14 10.16 14.5 9c.14-.33.22-.68.22-1.05 0-.03-.01-.06-.01-.1.01-.13.01-.27.01-.4 0-.4-.08-.8-.22-1.18-.14-.38-.34-.73-.58-1.05-.24-.32-.53-.61-.85-.85C12.18 3.53 11.25 3.2 10.37 3c-.88-.2-1.78-.2-2.68-.02-.9.18-1.7.53-2.39 1.05-.69.52-1.17 1.24-1.38 2.12-.21.87-.1 1.8.3 2.6.4.8.97 1.44 1.72 1.88.75.44 1.6.66 2.5.6a4.6 4.6 0 0 0 2.22-.5c.67-.32.98-.72 1-1.14.02-.42-.28-.78-.72-1.02-.44-.24-.9-.3-1.4-.18-.5.12-1.02.43-1.5.86-.48.43-.9.96-1.22 1.56-.32.6-.45 1.28-.4 1.97.05.68.27 1.32.64 1.88.37.56.86 1 1.45 1.28.59.28 1.25.4 1.92.36.67-.04 1.31-.25 1.88-.6.56-.34 1.06-.8 1.46-1.35.39-.55.69-1.18.88-1.85.19-.67.28-1.37.28-2.08 0-.85-.2-1.68-.53-2.43-.33-.75-.78-1.42-1.32-2.02C12.18 1.18 11.24.63 10.2.3c-.5-.15-1-.24-1.5-.28A4.4 4.4 0 0 0 8 0c-.85 0-1.7.11-2.5.33-.8.22-1.55.54-2.2.95-.65.4-1.22.9-1.68 1.48-.46.58-.8 1.23-1.02 1.92-.22.69-.3 1.43-.25 2.18.05.75.26 1.48.6 2.15.34.67.8 1.27 1.35 1.78.55.5 1.18.9 1.88 1.16.7.26 1.42.36 2.15.3.73-.05 1.44-.26 2.1-.6.66-.34 1.26-.82 1.75-1.4.1-.12.2-.24.28-.37a.5.5 0 0 1 .6-.18c.2.07.35.22.4.4.05.18.02.38-.1.52-.08.1-.17.2-.25.3-.5.6-1.1 1.1-1.78 1.5-1.35.8-2.95 1-4.55.6-1.6-.4-2.9-1.4-3.68-2.8-.78-1.4-1-3-0.6-4.6.4-1.6 1.4-2.9 2.8-3.7.8-.46 1.7-.77 2.6-.9.9-.13 1.8-.1 2.7.05.9.16 1.75.45 2.5.85.75.4 1.4.92 1.95 1.55.55.63.98 1.38 1.28 2.2.3.8.45 1.68.45 2.55 0 .15 0 .3-.02.45a.5.5 0 0 1-1 0c0-.15.02-.3.02-.45 0-.8-.14-1.6-.42-2.3-.28-.7-.68-1.3-1.18-1.8-.5-.5-1.1-.9-1.78-1.2-.7-.28-1.4-.4-2.1-.4-.7 0-1.4.1-2.08.35-.68.24-1.3.6-1.82 1.05-.52.45-.94 1-1.25 1.65-.3.65-.48 1.35-.5 2.1.1.9.4 1.7.9 2.4.5.7 1.2 1.2 2 1.5.8.3 1.7.3 2.5 0 .8-.3 1.5-.8 2-1.5.3-.4.4-.8.4-1.3 0-.4-.2-.8-.5-1.1-.3-.3-.7-.5-1.1-.5-.5 0-1 .2-1.4.5-.4.3-.8.7-1.1 1.2-.3.5-.5 1-.5 1.6 0 .6.2 1.2.5 1.7.3.5.8.9 1.3 1.1.5.2 1.1.3 1.6.2.5-.1 1-.3 1.5-.6s.8-.7 1.1-1.1c.3-.4.5-.9.5-1.4 0-.5-.2-1-.5-1.4-.3-.4-.7-.7-1.1-.9-.4-.2-.9-.3-1.3-.3-.5 0-.9.1-1.3.3-.4.2-.7.5-.9.9-.2.4-.3.8-.2 1.3.1.5.3.9.7 1.2.4.3.8.5 1.3.5.5 0 1-.2 1.4-.5.4-.3.7-.7.9-1.2.2-.5.3-1 .2-1.5-.1-.5-.3-.9-.6-1.3-.3-.4-.7-.7-1.1-.9-.4-.2-.9-.3-1.3-.2-.5.1-.9.3-1.3.6-.4.3-.7.7-.9 1.1-.2.4-.3.9-.2 1.3.1.4.3.8.6 1.1l.1.1.1.1z"></path>
                </svg>
                <span>Get Started for Free</span>
              </div>
            </a>
            <button className="lg:hidden p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700">
              <span className="material-symbols-outlined text-slate-800 dark:text-slate-200">menu</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;