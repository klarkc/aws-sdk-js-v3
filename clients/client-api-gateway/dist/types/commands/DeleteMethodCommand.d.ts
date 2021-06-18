import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DeleteMethodRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteMethodCommandInput extends DeleteMethodRequest {}
export interface DeleteMethodCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes an existing <a>Method</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteMethodCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteMethodCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMethodCommandInput} for command's `input` shape.
 * @see {@link DeleteMethodCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMethodCommand extends $Command<
  DeleteMethodCommandInput,
  DeleteMethodCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: DeleteMethodCommandInput;
  constructor(input: DeleteMethodCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMethodCommandInput, DeleteMethodCommandOutput>;
  private serialize;
  private deserialize;
}
