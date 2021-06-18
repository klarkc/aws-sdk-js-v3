import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { RevokeInvitationRequest, RevokeInvitationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface RevokeInvitationCommandInput extends RevokeInvitationRequest {}
export interface RevokeInvitationCommandOutput extends RevokeInvitationResponse, __MetadataBearer {}
/**
 * <p>Revokes an invitation and invalidates the enrollment URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, RevokeInvitationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, RevokeInvitationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new RevokeInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeInvitationCommandInput} for command's `input` shape.
 * @see {@link RevokeInvitationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RevokeInvitationCommand extends $Command<
  RevokeInvitationCommandInput,
  RevokeInvitationCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: RevokeInvitationCommandInput;
  constructor(input: RevokeInvitationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeInvitationCommandInput, RevokeInvitationCommandOutput>;
  private serialize;
  private deserialize;
}
