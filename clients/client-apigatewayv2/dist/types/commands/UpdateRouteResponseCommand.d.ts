import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { UpdateRouteResponseRequest, UpdateRouteResponseResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateRouteResponseCommandInput extends UpdateRouteResponseRequest {}
export interface UpdateRouteResponseCommandOutput extends UpdateRouteResponseResponse, __MetadataBearer {}
/**
 * <p>Updates a RouteResponse.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateRouteResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateRouteResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new UpdateRouteResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRouteResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateRouteResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRouteResponseCommand extends $Command<
  UpdateRouteResponseCommandInput,
  UpdateRouteResponseCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: UpdateRouteResponseCommandInput;
  constructor(input: UpdateRouteResponseCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRouteResponseCommandInput, UpdateRouteResponseCommandOutput>;
  private serialize;
  private deserialize;
}
