import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DeleteGatewayResponseRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteGatewayResponseCommandInput extends DeleteGatewayResponseRequest {}
export interface DeleteGatewayResponseCommandOutput extends __MetadataBearer {}
/**
 * <p>Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteGatewayResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteGatewayResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteGatewayResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGatewayResponseCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteGatewayResponseCommand extends $Command<
  DeleteGatewayResponseCommandInput,
  DeleteGatewayResponseCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: DeleteGatewayResponseCommandInput;
  constructor(input: DeleteGatewayResponseCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGatewayResponseCommandInput, DeleteGatewayResponseCommandOutput>;
  private serialize;
  private deserialize;
}
