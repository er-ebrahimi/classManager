import styles  from './FooterStyle.module.css'


const Footer = () =>{
    return (
        <>
            <div className={styles.Footer}>
                <div className={styles.UpFooter}>
                    <div className={styles.LogoFooter}>

                    </div>
                    <div className={styles.FooterList}>
                        <ul>
                            <li>
                                <h3>
                                    head1
                                </h3>
                            </li>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                        <ul>
                            <li>
                                <h3>
                                    head1
                                </h3>
                            </li>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                        <ul>
                            <li>
                                <h3>
                                    head1
                                </h3>
                            </li>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className={styles.DownFooter}>

                </div>
            </div>
        </>
    )
    }
    export default Footer;