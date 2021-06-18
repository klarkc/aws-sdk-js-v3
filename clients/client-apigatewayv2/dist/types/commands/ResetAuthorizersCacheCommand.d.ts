import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { ResetAuthorizersCacheRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ResetAuthorizersCacheCommandInput extends ResetAuthorizersCacheRequest {}
export interface ResetAuthorizersCacheCommandOutput extends __MetadataBearer {}
/**
 * <p>Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ResetAuthorizersCacheCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ResetAuthorizersCacheCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new ResetAuthorizersCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetAuthorizersCacheCommandInput} for command's `input` shape.
 * @see {@link ResetAuthorizersCacheCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetAuthorizersCacheCommand extends $Command<
  ResetAuthorizersCacheCommandInput,
  ResetAuthorizersCacheCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: ResetAuthorizersCacheCommandInput;
  constructor(input: ResetAuthorizersCacheCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetAuthorizersCacheCommandInput, ResetAuthorizersCacheCommandOutput>;
  private serialize;
  private deserialize;
}
