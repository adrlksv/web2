import styles from '@/styles/Home.module.css';

const Chats = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>Chats Page</header>
            <main className={styles.main}>
                <div className={styles.card}>
                    <h3>Chat 1</h3>
                    <p>Details about chat 1...</p>
                </div>
                <div className={styles.card}>
                    <h3>Chat 2</h3>
                    <p>Details about chat 2...</p>
                </div>
            </main>
            <footer className={styles.footer}>
                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                    Powered by Next.js
                </a>
            </footer>
        </div>
    );
};

export default Chats;
