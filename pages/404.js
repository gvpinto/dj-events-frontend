import { FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Header.module.css';
export default function PageNotFound() {
    return (
        <Layout>
            <div className={styles.error}>
                <h1><FaExclamationTriangle /> 404</h1>
                <h4>Sorry, There is nothing here</h4>
                <Link href="/">Go Back Home</Link>
            </div>
        </Layout>
    )
}
