import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { DeleteVoiceConnectorRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteVoiceConnectorCommandInput extends DeleteVoiceConnectorRequest {}
export interface DeleteVoiceConnectorCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the
 *             Amazon Chime Voice Connector must be disassociated from it before it can be
 *             deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteVoiceConnectorCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteVoiceConnectorCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVoiceConnectorCommand extends $Command<
  DeleteVoiceConnectorCommandInput,
  DeleteVoiceConnectorCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: DeleteVoiceConnectorCommandInput;
  constructor(input: DeleteVoiceConnectorCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVoiceConnectorCommandInput, DeleteVoiceConnectorCommandOutput>;
  private serialize;
  private deserialize;
}
