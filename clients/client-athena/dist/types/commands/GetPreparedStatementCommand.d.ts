import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetPreparedStatementInput, GetPreparedStatementOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetPreparedStatementCommandInput extends GetPreparedStatementInput {}
export interface GetPreparedStatementCommandOutput extends GetPreparedStatementOutput, __MetadataBearer {}
/**
 * <p>Retrieves the prepared statement with the specified name from the specified
 *             workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetPreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetPreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetPreparedStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPreparedStatementCommandInput} for command's `input` shape.
 * @see {@link GetPreparedStatementCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPreparedStatementCommand extends $Command<
  GetPreparedStatementCommandInput,
  GetPreparedStatementCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: GetPreparedStatementCommandInput;
  constructor(input: GetPreparedStatementCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPreparedStatementCommandInput, GetPreparedStatementCommandOutput>;
  private serialize;
  private deserialize;
}
