import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetMethodRequest, Method } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetMethodCommandInput extends GetMethodRequest {}
export interface GetMethodCommandOutput extends Method, __MetadataBearer {}
/**
 * <p>Describe an existing <a>Method</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetMethodCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetMethodCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMethodCommandInput} for command's `input` shape.
 * @see {@link GetMethodCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMethodCommand extends $Command<
  GetMethodCommandInput,
  GetMethodCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetMethodCommandInput;
  constructor(input: GetMethodCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMethodCommandInput, GetMethodCommandOutput>;
  private serialize;
  private deserialize;
}
