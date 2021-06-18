import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { DeleteProxySessionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteProxySessionCommandInput extends DeleteProxySessionRequest {}
export interface DeleteProxySessionCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes the specified proxy session from the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteProxySessionCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteProxySessionCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteProxySessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProxySessionCommandInput} for command's `input` shape.
 * @see {@link DeleteProxySessionCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProxySessionCommand extends $Command<
  DeleteProxySessionCommandInput,
  DeleteProxySessionCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: DeleteProxySessionCommandInput;
  constructor(input: DeleteProxySessionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProxySessionCommandInput, DeleteProxySessionCommandOutput>;
  private serialize;
  private deserialize;
}
