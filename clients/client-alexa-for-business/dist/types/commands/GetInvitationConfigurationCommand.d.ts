import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetInvitationConfigurationRequest, GetInvitationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetInvitationConfigurationCommandInput extends GetInvitationConfigurationRequest {}
export interface GetInvitationConfigurationCommandOutput extends GetInvitationConfigurationResponse, __MetadataBearer {}
/**
 * <p>Retrieves the configured values for the user enrollment invitation email
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetInvitationConfigurationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetInvitationConfigurationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new GetInvitationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInvitationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetInvitationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInvitationConfigurationCommand extends $Command<
  GetInvitationConfigurationCommandInput,
  GetInvitationConfigurationCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  readonly input: GetInvitationConfigurationCommandInput;
  constructor(input: GetInvitationConfigurationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInvitationConfigurationCommandInput, GetInvitationConfigurationCommandOutput>;
  private serialize;
  private deserialize;
}
