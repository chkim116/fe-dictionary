import fs from 'fs';
import path from 'path';

export default function getSlugFolderNames(): string[] {
  const publicFolderPath = path.join(__dirname, 'public');
  const folderNames: string[] = [];

  fs.readdirSync(publicFolderPath, { withFileTypes: true }).forEach(
    (dirent) => {
      if (dirent.isDirectory()) {
        const slugFolderPath = path.join(publicFolderPath, dirent.name, 'slug');
        if (fs.existsSync(slugFolderPath)) {
          folderNames.push(dirent.name);
        }
      }
    },
  );

  return folderNames;
}
