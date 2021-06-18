import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { UpdatePreparedStatementInput, UpdatePreparedStatementOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdatePreparedStatementCommandInput extends UpdatePreparedStatementInput {}
export interface UpdatePreparedStatementCommandOutput extends UpdatePreparedStatementOutput, __MetadataBearer {}
/**
 * <p>Updates a prepared statement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdatePreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdatePreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new UpdatePreparedStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePreparedStatementCommandInput} for command's `input` shape.
 * @see {@link UpdatePreparedStatementCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePreparedStatementCommand extends $Command<
  UpdatePreparedStatementCommandInput,
  UpdatePreparedStatementCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: UpdatePreparedStatementCommandInput;
  constructor(input: UpdatePreparedStatementCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePreparedStatementCommandInput, UpdatePreparedStatementCommandOutput>;
  private serialize;
  private deserialize;
}
