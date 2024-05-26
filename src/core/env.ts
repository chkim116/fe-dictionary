interface Env {
  repoURL: string;
  cwd: string;
}

const env: Env = {
  repoURL: 'https://github.com/chkim116/fe-dictionary',
  cwd: process.cwd(),
};

export default env;
