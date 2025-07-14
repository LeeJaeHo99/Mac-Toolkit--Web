export default function Footer() {
    return (
        <footer>
            <div className="inner">
                <FooterContent title={'Contact Me'} list={['Book a Call', 'Email']}/>
                <FooterContent title={'Useful Links'} list={['Apps', 'Features', 'Pricing', 'Support']}/>
                <FooterContent title={'Social'} list={['Youtube']}/>
            </div>
        </footer>
    );
}

function FooterContent({title, list}: {title: string, list: string[]}){
    return(
        <div className="footer-content">
            <h4>{title}</h4>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}