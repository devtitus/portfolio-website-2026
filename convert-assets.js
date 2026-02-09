const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');
const files = [
    { input: 'earth-blue-marble.jpg', output: 'earth-blue-marble.webp' },
    { input: 'earth-topology.png', output: 'earth-topology.webp' }
];

async function convert() {
    for (const file of files) {
        const inputPath = path.join(assetsDir, file.input);
        const outputPath = path.join(assetsDir, file.output);

        try {
            if (fs.existsSync(inputPath)) {
                await sharp(inputPath)
                    .webp({ quality: 80, effort: 6 }) // High compression effort
                    .toFile(outputPath);
                console.log(`Converted ${file.input} to ${file.output}`);
            } else {
                console.error(`File not found: ${inputPath}`);
            }
        } catch (err) {
            console.error(`Error converting ${file.input}:`, err);
        }
    }
}

convert();
