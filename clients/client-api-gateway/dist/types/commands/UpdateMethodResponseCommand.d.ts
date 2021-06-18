import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { MethodResponse, UpdateMethodResponseRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateMethodResponseCommandInput extends UpdateMethodResponseRequest {}
export interface UpdateMethodResponseCommandOutput extends MethodResponse, __MetadataBearer {}
/**
 * <p>Updates an existing <a>MethodResponse</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateMethodResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateMethodResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateMethodResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMethodResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateMethodResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMethodResponseCommand extends $Command<
  UpdateMethodResponseCommandInput,
  UpdateMethodResponseCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: UpdateMethodResponseCommandInput;
  constructor(input: UpdateMethodResponseCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMethodResponseCommandInput, UpdateMethodResponseCommandOutput>;
  private serialize;
  private deserialize;
}
