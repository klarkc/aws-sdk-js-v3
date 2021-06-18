import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DeleteMethodResponseRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteMethodResponseCommandInput extends DeleteMethodResponseRequest {}
export interface DeleteMethodResponseCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes an existing <a>MethodResponse</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteMethodResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteMethodResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteMethodResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMethodResponseCommandInput} for command's `input` shape.
 * @see {@link DeleteMethodResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMethodResponseCommand extends $Command<
  DeleteMethodResponseCommandInput,
  DeleteMethodResponseCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: DeleteMethodResponseCommandInput;
  constructor(input: DeleteMethodResponseCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMethodResponseCommandInput, DeleteMethodResponseCommandOutput>;
  private serialize;
  private deserialize;
}
