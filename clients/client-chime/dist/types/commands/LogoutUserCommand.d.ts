import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { LogoutUserRequest, LogoutUserResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface LogoutUserCommandInput extends LogoutUserRequest {}
export interface LogoutUserCommandOutput extends LogoutUserResponse, __MetadataBearer {}
/**
 * <p>Logs out the specified user from all of the devices they are currently logged into.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, LogoutUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, LogoutUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new LogoutUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LogoutUserCommandInput} for command's `input` shape.
 * @see {@link LogoutUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class LogoutUserCommand extends $Command<
  LogoutUserCommandInput,
  LogoutUserCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: LogoutUserCommandInput;
  constructor(input: LogoutUserCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LogoutUserCommandInput, LogoutUserCommandOutput>;
  private serialize;
  private deserialize;
}
