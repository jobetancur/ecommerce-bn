import { createContext, useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import PropTypes from 'prop-types';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// eslint-disable-next-line react-refresh/only-export-components
export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
    const [mostPopular, setMostPopular] = useState([]);
    const [recommended, setRecommended] = useState([]);
    const [loading, setLoading] = useState(true);

    // Función para obtener los productos de la colección 'most_popular' de Firestore
    const getMostPopularProducts = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, 'most_popular'));
            const products = querySnapshot.docs.map(doc => doc.data());
            setMostPopular(products);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    // Función para obtener los productos de la colección 'recommended' de Firestore
    const getRecommendedProducts = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, 'recommended'));
            const products = querySnapshot.docs.map(doc => doc.data());
            setRecommended(products);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMostPopularProducts();
        getRecommendedProducts();
    }, []);

    return (
        <FirebaseContext.Provider value={{ mostPopular, recommended, loading }}>
            {children}
        </FirebaseContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
