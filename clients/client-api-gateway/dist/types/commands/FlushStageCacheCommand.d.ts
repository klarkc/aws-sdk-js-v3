import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { FlushStageCacheRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface FlushStageCacheCommandInput extends FlushStageCacheRequest {}
export interface FlushStageCacheCommandOutput extends __MetadataBearer {}
/**
 * <p>Flushes a stage's cache.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, FlushStageCacheCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, FlushStageCacheCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new FlushStageCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FlushStageCacheCommandInput} for command's `input` shape.
 * @see {@link FlushStageCacheCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class FlushStageCacheCommand extends $Command<
  FlushStageCacheCommandInput,
  FlushStageCacheCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: FlushStageCacheCommandInput;
  constructor(input: FlushStageCacheCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FlushStageCacheCommandInput, FlushStageCacheCommandOutput>;
  private serialize;
  private deserialize;
}
