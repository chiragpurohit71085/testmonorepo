declare const _default: {
    input: string;
    external: (string | RegExp)[];
    plugins: import("rollup").Plugin<any>[];
    output: {
        file: string;
        format: string;
        sourcemap: boolean;
    }[];
};
export default _default;
