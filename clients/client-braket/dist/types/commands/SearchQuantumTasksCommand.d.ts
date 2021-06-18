import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { SearchQuantumTasksRequest, SearchQuantumTasksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface SearchQuantumTasksCommandInput extends SearchQuantumTasksRequest {}
export interface SearchQuantumTasksCommandOutput extends SearchQuantumTasksResponse, __MetadataBearer {}
/**
 * <p>Searches for tasks that match the specified filter values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, SearchQuantumTasksCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, SearchQuantumTasksCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const command = new SearchQuantumTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchQuantumTasksCommandInput} for command's `input` shape.
 * @see {@link SearchQuantumTasksCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchQuantumTasksCommand extends $Command<
  SearchQuantumTasksCommandInput,
  SearchQuantumTasksCommandOutput,
  BraketClientResolvedConfig
> {
  readonly input: SearchQuantumTasksCommandInput;
  constructor(input: SearchQuantumTasksCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BraketClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchQuantumTasksCommandInput, SearchQuantumTasksCommandOutput>;
  private serialize;
  private deserialize;
}
