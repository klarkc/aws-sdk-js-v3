import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { GetApiMappingsRequest, GetApiMappingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetApiMappingsCommandInput extends GetApiMappingsRequest {}
export interface GetApiMappingsCommandOutput extends GetApiMappingsResponse, __MetadataBearer {}
/**
 * <p>Gets API mappings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetApiMappingsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetApiMappingsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetApiMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApiMappingsCommandInput} for command's `input` shape.
 * @see {@link GetApiMappingsCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetApiMappingsCommand extends $Command<
  GetApiMappingsCommandInput,
  GetApiMappingsCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: GetApiMappingsCommandInput;
  constructor(input: GetApiMappingsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApiMappingsCommandInput, GetApiMappingsCommandOutput>;
  private serialize;
  private deserialize;
}
