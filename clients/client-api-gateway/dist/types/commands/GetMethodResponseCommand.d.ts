import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetMethodResponseRequest, MethodResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetMethodResponseCommandInput extends GetMethodResponseRequest {}
export interface GetMethodResponseCommandOutput extends MethodResponse, __MetadataBearer {}
/**
 * <p>Describes a <a>MethodResponse</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetMethodResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetMethodResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetMethodResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMethodResponseCommandInput} for command's `input` shape.
 * @see {@link GetMethodResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMethodResponseCommand extends $Command<
  GetMethodResponseCommandInput,
  GetMethodResponseCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetMethodResponseCommandInput;
  constructor(input: GetMethodResponseCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMethodResponseCommandInput, GetMethodResponseCommandOutput>;
  private serialize;
  private deserialize;
}
