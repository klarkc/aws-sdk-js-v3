import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { FlushStageAuthorizersCacheRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface FlushStageAuthorizersCacheCommandInput extends FlushStageAuthorizersCacheRequest {}
export interface FlushStageAuthorizersCacheCommandOutput extends __MetadataBearer {}
/**
 * <p>Flushes all authorizer cache entries on a stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, FlushStageAuthorizersCacheCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, FlushStageAuthorizersCacheCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new FlushStageAuthorizersCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FlushStageAuthorizersCacheCommandInput} for command's `input` shape.
 * @see {@link FlushStageAuthorizersCacheCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class FlushStageAuthorizersCacheCommand extends $Command<
  FlushStageAuthorizersCacheCommandInput,
  FlushStageAuthorizersCacheCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: FlushStageAuthorizersCacheCommandInput;
  constructor(input: FlushStageAuthorizersCacheCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FlushStageAuthorizersCacheCommandInput, FlushStageAuthorizersCacheCommandOutput>;
  private serialize;
  private deserialize;
}
