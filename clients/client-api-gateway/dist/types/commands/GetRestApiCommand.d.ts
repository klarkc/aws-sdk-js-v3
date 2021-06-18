import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetRestApiRequest, RestApi } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetRestApiCommandInput extends GetRestApiRequest {}
export interface GetRestApiCommandOutput extends RestApi, __MetadataBearer {}
/**
 * <p>Lists the <a>RestApi</a> resource in the collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetRestApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRestApiCommandInput} for command's `input` shape.
 * @see {@link GetRestApiCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRestApiCommand extends $Command<
  GetRestApiCommandInput,
  GetRestApiCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetRestApiCommandInput;
  constructor(input: GetRestApiCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRestApiCommandInput, GetRestApiCommandOutput>;
  private serialize;
  private deserialize;
}
