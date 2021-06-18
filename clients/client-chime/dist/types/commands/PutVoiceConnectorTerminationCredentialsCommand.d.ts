import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { PutVoiceConnectorTerminationCredentialsRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PutVoiceConnectorTerminationCredentialsCommandInput
  extends PutVoiceConnectorTerminationCredentialsRequest {}
export interface PutVoiceConnectorTerminationCredentialsCommandOutput extends __MetadataBearer {}
/**
 * <p>Adds termination SIP credentials for the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorTerminationCredentialsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorTerminationCredentialsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutVoiceConnectorTerminationCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutVoiceConnectorTerminationCredentialsCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorTerminationCredentialsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutVoiceConnectorTerminationCredentialsCommand extends $Command<
  PutVoiceConnectorTerminationCredentialsCommandInput,
  PutVoiceConnectorTerminationCredentialsCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: PutVoiceConnectorTerminationCredentialsCommandInput;
  constructor(input: PutVoiceConnectorTerminationCredentialsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutVoiceConnectorTerminationCredentialsCommandInput, PutVoiceConnectorTerminationCredentialsCommandOutput>;
  private serialize;
  private deserialize;
}
