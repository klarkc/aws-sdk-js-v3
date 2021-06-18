import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { GetAccountRequest, GetAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetAccountCommandInput extends GetAccountRequest {}
export interface GetAccountCommandOutput extends GetAccountResponse, __MetadataBearer {}
/**
 * <p>Retrieves details for the specified Amazon Chime account, such as account type and supported
 *             licenses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountCommandInput} for command's `input` shape.
 * @see {@link GetAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAccountCommand extends $Command<
  GetAccountCommandInput,
  GetAccountCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: GetAccountCommandInput;
  constructor(input: GetAccountCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccountCommandInput, GetAccountCommandOutput>;
  private serialize;
  private deserialize;
}
