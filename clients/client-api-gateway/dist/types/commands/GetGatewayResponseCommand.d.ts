import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GatewayResponse, GetGatewayResponseRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetGatewayResponseCommandInput extends GetGatewayResponseRequest {}
export interface GetGatewayResponseCommandOutput extends GatewayResponse, __MetadataBearer {}
/**
 * <p>Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetGatewayResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetGatewayResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetGatewayResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGatewayResponseCommandInput} for command's `input` shape.
 * @see {@link GetGatewayResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetGatewayResponseCommand extends $Command<
  GetGatewayResponseCommandInput,
  GetGatewayResponseCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetGatewayResponseCommandInput;
  constructor(input: GetGatewayResponseCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGatewayResponseCommandInput, GetGatewayResponseCommandOutput>;
  private serialize;
  private deserialize;
}
