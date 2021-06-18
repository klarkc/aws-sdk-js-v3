import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { PutInvitationConfigurationRequest, PutInvitationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PutInvitationConfigurationCommandInput extends PutInvitationConfigurationRequest {}
export interface PutInvitationConfigurationCommandOutput extends PutInvitationConfigurationResponse, __MetadataBearer {}
/**
 * <p>Configures the email template for the user enrollment invitation with the specified
 *          attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutInvitationConfigurationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutInvitationConfigurationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new PutInvitationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInvitationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutInvitationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutInvitationConfigurationCommand extends $Command<
  PutInvitationConfigurationCommandInput,
  PutInvitationConfigurationCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: PutInvitationConfigurationCommandInput;
  constructor(input: PutInvitationConfigurationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutInvitationConfigurationCommandInput, PutInvitationConfigurationCommandOutput>;
  private serialize;
  private deserialize;
}
