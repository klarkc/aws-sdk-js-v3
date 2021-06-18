import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { BatchGetQueryExecutionInput, BatchGetQueryExecutionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface BatchGetQueryExecutionCommandInput extends BatchGetQueryExecutionInput {}
export interface BatchGetQueryExecutionCommandOutput extends BatchGetQueryExecutionOutput, __MetadataBearer {}
/**
 * <p>Returns the details of a single query execution or a list of up to 50 query
 *             executions, which you provide as an array of query execution ID strings. Requires you to
 *             have access to the workgroup in which the queries ran. To get a list of query execution
 *             IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ
 *             from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details
 *             about named queries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, BatchGetQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, BatchGetQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new BatchGetQueryExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link BatchGetQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetQueryExecutionCommand extends $Command<
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: BatchGetQueryExecutionCommandInput;
  constructor(input: BatchGetQueryExecutionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetQueryExecutionCommandInput, BatchGetQueryExecutionCommandOutput>;
  private serialize;
  private deserialize;
}
