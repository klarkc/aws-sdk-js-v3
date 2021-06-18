import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { UpdateProxySessionRequest, UpdateProxySessionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateProxySessionCommandInput extends UpdateProxySessionRequest {}
export interface UpdateProxySessionCommandOutput extends UpdateProxySessionResponse, __MetadataBearer {}
/**
 * <p>Updates the specified proxy session details, such as voice or SMS capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateProxySessionCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateProxySessionCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateProxySessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProxySessionCommandInput} for command's `input` shape.
 * @see {@link UpdateProxySessionCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateProxySessionCommand extends $Command<
  UpdateProxySessionCommandInput,
  UpdateProxySessionCommandOutput,
  ChimeClientResolvedConfig
> {
  readonly input: UpdateProxySessionCommandInput;
  constructor(input: UpdateProxySessionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProxySessionCommandInput, UpdateProxySessionCommandOutput>;
  private serialize;
  private deserialize;
}
