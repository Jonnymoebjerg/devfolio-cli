#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import inquirer from 'inquirer';
import open from 'open';
import figlet from 'figlet';
import fetch from 'node-fetch';
import { konamiCodeListener } from '../utils/konami.js';
import { resumeDownload } from '../utils/resume.js';
import { getGithubStats } from '../utils/github.js';

const userData = {
  name: 'Jonny Møbjerg',
  title: 'PHP / JS / WP Dev | Systems, APIs, UI/UX nerd',
  email: 'jom@vardemuseerne.dk',
  website: 'https://jonnymoebjerg.com',
  github: 'https://github.com/mobjerg',
  projects: [
    { name: 'CodeToolery – Dev tools for CSS/HTML', url: 'https://codetoolery.com' },
    { name: 'Keeya – Steam key e-commerce platform', url: 'https://keeya.gg' },
    { name: 'UpHub – DK freelancer & biz network', url: 'https://uphub.dk' }
  ],
  resume: 'https://jonnymoebjerg.com/resume.pdf'
};

function renderHeader() {
  return boxen(
    chalk.green(figlet.textSync('Jonny', { horizontalLayout: 'full' })) +
    '\n' + chalk.white(`${userData.title}`) +
    '\n' + chalk.cyan(`🌐 ${userData.website}`) +
    '\n' + chalk.cyan(`📧 ${userData.email}`) +
    '\n' + chalk.cyan(`GitHub: ${userData.github}`),
    { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'cyan' }
  );
}

async function mainMenu() {
  const githubStats = await getGithubStats('mobjerg');

  console.log(renderHeader());
  console.log(chalk.magenta(`⭐ GitHub Stats: ${githubStats}`));

  const choices = [
    ...userData.projects.map((p, i) => ({ name: p.name, value: i })),
    new inquirer.Separator(),
    { name: '📄 Download my resume', value: 'resume' },
    { name: '❌ Exit', value: 'exit' }
  ];

  const answer = await inquirer.prompt({
    name: 'choice',
    type: 'list',
    message: 'What would you like to do?',
    choices
  });

  if (answer.choice === 'exit') return;
  if (answer.choice === 'resume') {
    await resumeDownload(userData.resume);
  } else {
    open(userData.projects[answer.choice].url);
  }

  console.log();
  mainMenu();
}

(async () => {
  konamiCodeListener(() => {
    console.log(chalk.yellow('\n🎉 You unlocked the secret easter egg! 🚀'));
  });
  await mainMenu();
})();
