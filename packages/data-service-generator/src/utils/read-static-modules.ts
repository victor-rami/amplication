import * as fs from "fs";
import normalize from "normalize-path";
import fg from "fast-glob";
import { Module } from "@amplication/code-gen-types";

const filesToFilter = /(\._.*)|(.DS_Store)$/;

/**
 * Reads files from given source directory and maps them to module objects with
 * path relative to given basePath
 * @param source source directory to read files from
 * @param basePath path to base the created modules path on
 * @returns array of modules
 */
export async function readStaticModules(
  source: string,
  basePath: string
): Promise<Module[]> {
  const directory = `${normalize(source)}/`;
  const staticModules = await fg(`${directory}**/*`, {
    absolute: false,
    dot: true,
    ignore: ["**.js", "**.js.map", "**.d.ts"],
  });

  return Promise.all(
    staticModules
      .sort()
      .filter(
        (module) =>
          !filesToFilter.test(
            module.replace(directory, basePath ? basePath + "/" : "")
          )
      )
      .map(async (module) => ({
        path: module.replace(directory, basePath ? basePath + "/" : ""),
        code: await fs.promises.readFile(module, "utf-8"),
      }))
  );
}

export async function readPluginStaticModules(
  source: string,
  basePath: string
): Promise<Module[]> {
  const directory = `${normalize(source)}/`;
  const staticModules = await fg(`${directory}**/*`, {
    absolute: false,
    dot: true,
    ignore: ["**.js", "**.js.map", "**.d.ts"],
  });

  return Promise.all(
    staticModules
      .sort()
      .filter(
        (module) =>
          !filesToFilter.test(
            module.replace(directory, basePath ? basePath + "/" : "")
          )
      )
      .map(async (module) => ({
        path: module.replace(directory, basePath ? basePath + "/" : ""),
        code: await fs.promises.readFile(module, "utf-8"),
      }))
  );
}
