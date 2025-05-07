import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import ignore from "rollup-plugin-ignore";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "build/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "build/index.es.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Automatically exclude peer dependencies
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    ignore(["**/*.flow","react-native","react","react-dom","react-native-web"]),
  ],
  external: ["react", "react-dom", "react-native","react-native-web"], // Exclude react-native
};