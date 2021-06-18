import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { CreateRouteResponseRequest, CreateRouteResponseResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateRouteResponseCommandInput extends CreateRouteResponseRequest {}
export interface CreateRouteResponseCommandOutput extends CreateRouteResponseResponse, __MetadataBearer {}
/**
 * <p>Creates a RouteResponse for a Route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateRouteResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateRouteResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new CreateRouteResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRouteResponseCommandInput} for command's `input` shape.
 * @see {@link CreateRouteResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRouteResponseCommand extends $Command<
  CreateRouteResponseCommandInput,
  CreateRouteResponseCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: CreateRouteResponseCommandInput;
  constructor(input: CreateRouteResponseCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRouteResponseCommandInput, CreateRouteResponseCommandOutput>;
  private serialize;
  private deserialize;
}
