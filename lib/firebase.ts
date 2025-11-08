import { initializeApp, getApps } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firebase only if config is available
let app: ReturnType<typeof initializeApp> | undefined;
let database: ReturnType<typeof getDatabase> | undefined;

try {
  if (firebaseConfig.databaseURL) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
    database = getDatabase(app)
  }
} catch (error) {
  console.error('Firebase initialization error:', error)
}

export { database }

