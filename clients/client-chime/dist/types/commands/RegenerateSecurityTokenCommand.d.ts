import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { RegenerateSecurityTokenRequest, RegenerateSecurityTokenResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface RegenerateSecurityTokenCommandInput extends RegenerateSecurityTokenRequest {}
export interface RegenerateSecurityTokenCommandOutput extends RegenerateSecurityTokenResponse, __MetadataBearer {}
/**
 * <p>Regenerates the security token for a bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RegenerateSecurityTokenCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RegenerateSecurityTokenCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new RegenerateSecurityTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegenerateSecurityTokenCommandInput} for command's `input` shape.
 * @see {@link RegenerateSecurityTokenCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegenerateSecurityTokenCommand extends $Command<
  RegenerateSecurityTokenCommandInput,
  RegenerateSecurityTokenCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: RegenerateSecurityTokenCommandInput;
  constructor(input: RegenerateSecurityTokenCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegenerateSecurityTokenCommandInput, RegenerateSecurityTokenCommandOutput>;
  private serialize;
  private deserialize;
}
