import { SearchQuantumTasksCommandInput, SearchQuantumTasksCommandOutput } from "../commands/SearchQuantumTasksCommand";
import { BraketPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchQuantumTasks(
  config: BraketPaginationConfiguration,
  input: SearchQuantumTasksCommandInput,
  ...additionalArguments: any
): Paginator<SearchQuantumTasksCommandOutput>;
