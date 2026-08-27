function Footer({ footerLinks }) {
    return(
        <>
            <nav className="bg-slate-900 text-white shadow-md">
                <div className="grid w-full px-8 py-8">
                    <ul className="grid grid-cols-3">
                        {footerLinks.map((link) => (
                            <li key={link.id}>
                                <a className="text-slate-300 transition hover:text-white" href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Footer