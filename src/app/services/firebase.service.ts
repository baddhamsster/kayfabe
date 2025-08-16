import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Analytics, getAnalytics } from "firebase/analytics";
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBdEofjjgoY9x9EQLVpVDk6J0ImZKKglfs",
    authDomain: "kayfabe-2e6b4.firebaseapp.com",
    projectId: "kayfabe-2e6b4",
    storageBucket: "kayfabe-2e6b4.firebasestorage.app",
    messagingSenderId: "412208762020",
    appId: "1:412208762020:web:fbc55575b8ebd82cdb2a31",
    measurementId: "G-H6VJ2LDF0K"
};

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private app = initializeApp(firebaseConfig);
    private analytics: Analytics;
    private auth: Auth;
    private firestore: Firestore;
    private storage: FirebaseStorage;

    constructor() {
        this.auth = getAuth(this.app);
        this.analytics = getAnalytics(this.app);
        this.firestore = getFirestore(this.app);
        this.storage = getStorage(this.app);
    }

    getAuth(): Auth {
        return this.auth;
    }

    getFirestore(): Firestore {
        return this.firestore;
    }

    getStorage(): FirebaseStorage {
        return this.storage;
    }
}