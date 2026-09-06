function Header() {
    return (
        <header className="fixed top-0 flex w-full items-center justify-between px-4 py-2">
            <h2 className="font-semibold text-white">Goals Demo</h2>
            <label
                htmlFor="theme-toggle"
                className="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full bg-white/30 transition-colors has-checked:bg-indigo-900">
                <input type="checkbox" id="theme-toggle" className="peer sr-only" />
                <span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-white transition-transform peer-checked:translate-x-6" />
            </label>
        </header>
    );
}

export default Header;
