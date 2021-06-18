import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { Method, UpdateMethodRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateMethodCommandInput extends UpdateMethodRequest {}
export interface UpdateMethodCommandOutput extends Method, __MetadataBearer {}
/**
 * <p>Updates an existing <a>Method</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateMethodCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateMethodCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMethodCommandInput} for command's `input` shape.
 * @see {@link UpdateMethodCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMethodCommand extends $Command<
  UpdateMethodCommandInput,
  UpdateMethodCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: UpdateMethodCommandInput;
  constructor(input: UpdateMethodCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMethodCommandInput, UpdateMethodCommandOutput>;
  private serialize;
  private deserialize;
}
