import { db } from 'config/firebaseConfig';
import { ref, get, query, limitToFirst } from 'firebase/database';

export async function getTeachersList(pageSize) {
  try {
    const dbRef = ref(db, `/teachers`);
    const teachersRef = query(dbRef, limitToFirst(pageSize));
    const teachers = await get(teachersRef);

    if (!teachers.exists()) throw new Error('No data available');
    return teachers.val();
  } catch (e) {
    console.error(e.message);
    return [];
  }
}
