import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { StartQueryExecutionInput, StartQueryExecutionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface StartQueryExecutionCommandInput extends StartQueryExecutionInput {}
export interface StartQueryExecutionCommandOutput extends StartQueryExecutionOutput, __MetadataBearer {}
/**
 * <p>Runs the SQL query statements contained in the <code>Query</code>. Requires you to
 *             have access to the workgroup in which the query ran. Running queries against an external
 *             catalog requires <a>GetDataCatalog</a> permission to the catalog. For code
 *             samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StartQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StartQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new StartQueryExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link StartQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartQueryExecutionCommand extends $Command<
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: StartQueryExecutionCommandInput;
  constructor(input: StartQueryExecutionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartQueryExecutionCommandInput, StartQueryExecutionCommandOutput>;
  private serialize;
  private deserialize;
}
