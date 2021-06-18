import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { GetIntegrationResponsesRequest, GetIntegrationResponsesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetIntegrationResponsesCommandInput extends GetIntegrationResponsesRequest {}
export interface GetIntegrationResponsesCommandOutput extends GetIntegrationResponsesResponse, __MetadataBearer {}
/**
 * <p>Gets the IntegrationResponses for an Integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetIntegrationResponsesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetIntegrationResponsesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetIntegrationResponsesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntegrationResponsesCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationResponsesCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetIntegrationResponsesCommand extends $Command<
  GetIntegrationResponsesCommandInput,
  GetIntegrationResponsesCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: GetIntegrationResponsesCommandInput;
  constructor(input: GetIntegrationResponsesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIntegrationResponsesCommandInput, GetIntegrationResponsesCommandOutput>;
  private serialize;
  private deserialize;
}
