import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { GetRouteRequest, GetRouteResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetRouteCommandInput extends GetRouteRequest {}
export interface GetRouteCommandOutput extends GetRouteResult, __MetadataBearer {}
/**
 * <p>Gets a Route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetRouteCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetRouteCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRouteCommandInput} for command's `input` shape.
 * @see {@link GetRouteCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRouteCommand extends $Command<
  GetRouteCommandInput,
  GetRouteCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: GetRouteCommandInput;
  constructor(input: GetRouteCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRouteCommandInput, GetRouteCommandOutput>;
  private serialize;
  private deserialize;
}
