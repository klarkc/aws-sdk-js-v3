import {
  ApiGatewayManagementApiClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApiGatewayManagementApiClient";
import { PostToConnectionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PostToConnectionCommandInput extends PostToConnectionRequest {}
export interface PostToConnectionCommandOutput extends __MetadataBearer {}
/**
 * <p>Sends the provided data to the specified connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayManagementApiClient, PostToConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi"; // ES Modules import
 * // const { ApiGatewayManagementApiClient, PostToConnectionCommand } = require("@aws-sdk/client-apigatewaymanagementapi"); // CommonJS import
 * const client = new ApiGatewayManagementApiClient(config);
 * const command = new PostToConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostToConnectionCommandInput} for command's `input` shape.
 * @see {@link PostToConnectionCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayManagementApiClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PostToConnectionCommand extends $Command<
  PostToConnectionCommandInput,
  PostToConnectionCommandOutput,
  ApiGatewayManagementApiClientResolvedConfig
> {
  readonly input: PostToConnectionCommandInput;
  constructor(input: PostToConnectionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayManagementApiClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PostToConnectionCommandInput, PostToConnectionCommandOutput>;
  private serialize;
  private deserialize;
}
