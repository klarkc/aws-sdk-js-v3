import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { GetRouteResponseRequest, GetRouteResponseResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetRouteResponseCommandInput extends GetRouteResponseRequest {}
export interface GetRouteResponseCommandOutput extends GetRouteResponseResponse, __MetadataBearer {}
/**
 * <p>Gets a RouteResponse.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetRouteResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetRouteResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetRouteResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRouteResponseCommandInput} for command's `input` shape.
 * @see {@link GetRouteResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRouteResponseCommand extends $Command<
  GetRouteResponseCommandInput,
  GetRouteResponseCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: GetRouteResponseCommandInput;
  constructor(input: GetRouteResponseCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRouteResponseCommandInput, GetRouteResponseCommandOutput>;
  private serialize;
  private deserialize;
}
