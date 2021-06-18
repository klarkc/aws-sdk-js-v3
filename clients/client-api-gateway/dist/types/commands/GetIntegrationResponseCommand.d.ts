import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetIntegrationResponseRequest, IntegrationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetIntegrationResponseCommandInput extends GetIntegrationResponseRequest {}
export interface GetIntegrationResponseCommandOutput extends IntegrationResponse, __MetadataBearer {}
/**
 * <p>Represents a get integration response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetIntegrationResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetIntegrationResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetIntegrationResponseCommand extends $Command<
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetIntegrationResponseCommandInput;
  constructor(input: GetIntegrationResponseCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIntegrationResponseCommandInput, GetIntegrationResponseCommandOutput>;
  private serialize;
  private deserialize;
}
