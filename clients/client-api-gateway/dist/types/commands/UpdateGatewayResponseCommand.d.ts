import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GatewayResponse, UpdateGatewayResponseRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateGatewayResponseCommandInput extends UpdateGatewayResponseRequest {}
export interface UpdateGatewayResponseCommandOutput extends GatewayResponse, __MetadataBearer {}
/**
 * <p>Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateGatewayResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateGatewayResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateGatewayResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGatewayResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateGatewayResponseCommand extends $Command<
  UpdateGatewayResponseCommandInput,
  UpdateGatewayResponseCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: UpdateGatewayResponseCommandInput;
  constructor(input: UpdateGatewayResponseCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGatewayResponseCommandInput, UpdateGatewayResponseCommandOutput>;
  private serialize;
  private deserialize;
}
