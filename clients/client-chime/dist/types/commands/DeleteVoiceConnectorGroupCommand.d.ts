import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { DeleteVoiceConnectorGroupRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteVoiceConnectorGroupCommandInput extends DeleteVoiceConnectorGroupRequest {}
export interface DeleteVoiceConnectorGroupCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes the specified Amazon Chime Voice Connector group. Any
 * <code>VoiceConnectorItems</code>
 * and phone numbers associated with the group must be removed before it can be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVoiceConnectorGroupCommand extends $Command<
  DeleteVoiceConnectorGroupCommandInput,
  DeleteVoiceConnectorGroupCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: DeleteVoiceConnectorGroupCommandInput;
  constructor(input: DeleteVoiceConnectorGroupCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVoiceConnectorGroupCommandInput, DeleteVoiceConnectorGroupCommandOutput>;
  private serialize;
  private deserialize;
}
