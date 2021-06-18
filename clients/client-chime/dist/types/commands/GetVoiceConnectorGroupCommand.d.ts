import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { GetVoiceConnectorGroupRequest, GetVoiceConnectorGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetVoiceConnectorGroupCommandInput extends GetVoiceConnectorGroupRequest {}
export interface GetVoiceConnectorGroupCommandOutput extends GetVoiceConnectorGroupResponse, __MetadataBearer {}
/**
 * <p>
 * Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps,name, and associated
 * <code>VoiceConnectorItems</code>
 * .
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetVoiceConnectorGroupCommand extends $Command<
  GetVoiceConnectorGroupCommandInput,
  GetVoiceConnectorGroupCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: GetVoiceConnectorGroupCommandInput;
  constructor(input: GetVoiceConnectorGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetVoiceConnectorGroupCommandInput, GetVoiceConnectorGroupCommandOutput>;
  private serialize;
  private deserialize;
}
