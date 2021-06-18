import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { BatchGetNamedQueryInput, BatchGetNamedQueryOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface BatchGetNamedQueryCommandInput extends BatchGetNamedQueryInput {}
export interface BatchGetNamedQueryCommandOutput extends BatchGetNamedQueryOutput, __MetadataBearer {}
/**
 * <p>Returns the details of a single named query or a list of up to 50 queries, which you
 *             provide as an array of query ID strings. Requires you to have access to the workgroup in
 *             which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the
 *             list of named query IDs in the specified workgroup. If information could not be
 *             retrieved for a submitted query ID, information about the query ID submitted is listed
 *             under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed
 *             queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each
 *             unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of
 *             query execution IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, BatchGetNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, BatchGetNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new BatchGetNamedQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetNamedQueryCommandInput} for command's `input` shape.
 * @see {@link BatchGetNamedQueryCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetNamedQueryCommand extends $Command<
  BatchGetNamedQueryCommandInput,
  BatchGetNamedQueryCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: BatchGetNamedQueryCommandInput;
  constructor(input: BatchGetNamedQueryCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput>;
  private serialize;
  private deserialize;
}
