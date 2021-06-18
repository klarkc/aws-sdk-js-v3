import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { CreateVoiceConnectorGroupRequest, CreateVoiceConnectorGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateVoiceConnectorGroupCommandInput extends CreateVoiceConnectorGroupRequest {}
export interface CreateVoiceConnectorGroupCommandOutput extends CreateVoiceConnectorGroupResponse, __MetadataBearer {}
/**
 * <p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can
 *             associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by
 *             including <code>VoiceConnectorItems</code> in the request.</p>
 *          <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This
 *             creates a fault tolerant mechanism for fallback in case of availability events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVoiceConnectorGroupCommand extends $Command<
  CreateVoiceConnectorGroupCommandInput,
  CreateVoiceConnectorGroupCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: CreateVoiceConnectorGroupCommandInput;
  constructor(input: CreateVoiceConnectorGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVoiceConnectorGroupCommandInput, CreateVoiceConnectorGroupCommandOutput>;
  private serialize;
  private deserialize;
}
