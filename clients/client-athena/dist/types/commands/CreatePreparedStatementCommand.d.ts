import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { CreatePreparedStatementInput, CreatePreparedStatementOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreatePreparedStatementCommandInput extends CreatePreparedStatementInput {}
export interface CreatePreparedStatementCommandOutput extends CreatePreparedStatementOutput, __MetadataBearer {}
/**
 * <p>Creates a prepared statement for use with SQL queries in Athena.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreatePreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreatePreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new CreatePreparedStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePreparedStatementCommandInput} for command's `input` shape.
 * @see {@link CreatePreparedStatementCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePreparedStatementCommand extends $Command<
  CreatePreparedStatementCommandInput,
  CreatePreparedStatementCommandOutput,
  AthenaClientResolvedConfig
> {
  readonly input: CreatePreparedStatementCommandInput;
  constructor(input: CreatePreparedStatementCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePreparedStatementCommandInput, CreatePreparedStatementCommandOutput>;
  private serialize;
  private deserialize;
}
