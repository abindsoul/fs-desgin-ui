// 目录路径
import path from 'node:path';

// 根目录
export const ROOT = path.resolve(__dirname, '..','..');
// fs-desgin
export const EPROOT = path.resolve(ROOT, 'packages');
// 打包入口
export const ENTRY = path.resolve(EPROOT, 'fs-design');
// 打包出口
export const OUTPUT_DIR = path.resolve(ROOT, 'dist');
// types
export const TYPES = path.resolve(OUTPUT_DIR, 'types');
// tsconfig.web.json
export const TSWEBCONFIG = path.resolve(ROOT, 'tsconfig.web.json');
// 扫描文件的规则
export const GLOB_PATTERN = '**/*.{js?*(x),ts?(x),vue}';