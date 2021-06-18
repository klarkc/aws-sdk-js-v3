import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GatewayResponses, GetGatewayResponsesRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetGatewayResponsesCommandInput extends GetGatewayResponsesRequest {}
export interface GetGatewayResponsesCommandOutput extends GatewayResponses, __MetadataBearer {}
/**
 * <p>Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetGatewayResponsesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetGatewayResponsesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetGatewayResponsesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGatewayResponsesCommandInput} for command's `input` shape.
 * @see {@link GetGatewayResponsesCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetGatewayResponsesCommand extends $Command<
  GetGatewayResponsesCommandInput,
  GetGatewayResponsesCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetGatewayResponsesCommandInput;
  constructor(input: GetGatewayResponsesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGatewayResponsesCommandInput, GetGatewayResponsesCommandOutput>;
  private serialize;
  private deserialize;
}
