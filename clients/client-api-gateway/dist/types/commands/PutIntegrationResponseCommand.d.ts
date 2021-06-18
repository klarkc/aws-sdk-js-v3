import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { IntegrationResponse, PutIntegrationResponseRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PutIntegrationResponseCommandInput extends PutIntegrationResponseRequest {}
export interface PutIntegrationResponseCommandOutput extends IntegrationResponse, __MetadataBearer {}
/**
 * <p>Represents a put integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutIntegrationResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutIntegrationResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new PutIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link PutIntegrationResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutIntegrationResponseCommand extends $Command<
  PutIntegrationResponseCommandInput,
  PutIntegrationResponseCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: PutIntegrationResponseCommandInput;
  constructor(input: PutIntegrationResponseCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutIntegrationResponseCommandInput, PutIntegrationResponseCommandOutput>;
  private serialize;
  private deserialize;
}
