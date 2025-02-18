const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/IsmailOmar22" target="_blank" rel="noreferrer">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 ml-3"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/ismail-omar-0b74602a2/" target="_blank" rel="noreferrer">
                        <img src="/assets/linkedIn.svg" alt="linkedIn" className="w-1/2 h-1/2 ml-3"/>
                    </a>

                </div>
                <div className="social-icon">
                    <a href="https://www.instagram.com/ismail_o05/" target="_blank" rel="noreferrer">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 ml-3"/>
                    </a>
                </div>
            </div>

            <p className="text-white-500">
                © 2025 Ismail. All rights reserved.
            </p>
        </section>
    )
}
export default Footer
