import fetch from 'node-fetch';

export async function getGithubStats(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const json = await res.json();
    return `${json.public_repos} repos · ${json.followers} followers`;
  } catch {
    return 'Unavailable';
  }
}
