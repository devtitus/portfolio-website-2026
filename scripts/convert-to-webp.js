/**
 * WebP Conversion Script for Frame Hero Section
 * Converts 192 JPG frames to WebP format for ~40% size reduction
 * 
 * Usage: node scripts/convert-to-webp.js
 * Requires: sharp package (npm install sharp)
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../public/macbook');
const OUTPUT_DIR = path.join(__dirname, '../public/macbook-webp');
const FRAME_COUNT = 192;
const QUALITY = 80; // WebP quality (0-100)

async function convertFramesToWebP() {
    console.log('🚀 Starting WebP conversion...\n');

    // Create output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        console.log(`📁 Created output directory: ${OUTPUT_DIR}\n`);
    }

    let totalOriginalSize = 0;
    let totalNewSize = 0;
    let successCount = 0;
    let errorCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
        const paddedIndex = i.toString().padStart(3, '0');
        const inputFileName = `ezgif-frame-${paddedIndex}.jpg`;
        const outputFileName = `ezgif-frame-${paddedIndex}.webp`;

        const inputPath = path.join(INPUT_DIR, inputFileName);
        const outputPath = path.join(OUTPUT_DIR, outputFileName);

        try {
            // Get original file size
            const originalStats = fs.statSync(inputPath);
            totalOriginalSize += originalStats.size;

            // Convert to WebP
            await sharp(inputPath)
                .webp({ quality: QUALITY })
                .toFile(outputPath);

            // Get new file size
            const newStats = fs.statSync(outputPath);
            totalNewSize += newStats.size;

            const savings = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

            if (i % 20 === 0 || i === 1 || i === FRAME_COUNT) {
                console.log(`✅ Converted frame ${paddedIndex}: ${(originalStats.size / 1024).toFixed(1)}KB → ${(newStats.size / 1024).toFixed(1)}KB (-${savings}%)`);
            }

            successCount++;
        } catch (error) {
            console.error(`❌ Error converting frame ${paddedIndex}:`, error.message);
            errorCount++;
        }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 CONVERSION COMPLETE');
    console.log('='.repeat(60));
    console.log(`✅ Successfully converted: ${successCount}/${FRAME_COUNT} frames`);
    if (errorCount > 0) {
        console.log(`❌ Errors: ${errorCount}`);
    }
    console.log(`📦 Original total size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📦 New total size: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`💾 Total savings: ${((1 - totalNewSize / totalOriginalSize) * 100).toFixed(1)}% (${((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(2)} MB saved)`);
    console.log('\n🎉 Done! Update frameHeroSection.tsx to use /macbook-webp/ and .webp extension');
}

convertFramesToWebP().catch(console.error);
