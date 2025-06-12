import open from 'open';
export async function resumeDownload(url) {
  console.log('📄 Opening resume in browser...');
  await open(url);
}
