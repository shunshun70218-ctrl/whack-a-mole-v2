// === 學號 → 小美女照片對應 ===
// 來源同步自 all.html 的 14 位秀朗 415 同學/老師
export const STUDENT_PHOTOS = {
  '15': 'face-07.jpg',
  '16': 'face-03.jpg',
  '17': 'face-05.jpg',
  '18': 'face-12.jpg',
  '19': 'face-08.jpg',
  '20': 'face-11.jpg',
  '21': 'face-02.jpg',
  '22': 'face-10.jpg',
  '23': 'face-09.jpg',
  '24': 'face-06.jpg',
  '25': 'face-04.jpg',
  '26': 'face-13.jpg',
  '27': 'face-14.jpg',
  '0':  'face-01.jpg', // 老師
};

export function photoForStudent(studentId) {
  if (!studentId) return null;
  return STUDENT_PHOTOS[studentId] || null;
}
