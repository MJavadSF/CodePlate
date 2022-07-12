import { NodePlopAPI } from "node-plop";
import { componentGenerator } from "./component";
import shell from "shelljs";
interface PrettifyCustomActionData {
  path: string;
}

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('component', componentGenerator);
  plop.setActionType('prettify', (answers, config) => {
    const data = config!.data as PrettifyCustomActionData;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
}
