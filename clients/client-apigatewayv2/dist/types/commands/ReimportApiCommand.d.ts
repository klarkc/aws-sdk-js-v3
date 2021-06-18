import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { ReimportApiRequest, ReimportApiResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ReimportApiCommandInput extends ReimportApiRequest {}
export interface ReimportApiCommandOutput extends ReimportApiResponse, __MetadataBearer {}
/**
 * <p>Puts an Api resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ReimportApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ReimportApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new ReimportApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReimportApiCommandInput} for command's `input` shape.
 * @see {@link ReimportApiCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReimportApiCommand extends $Command<
  ReimportApiCommandInput,
  ReimportApiCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: ReimportApiCommandInput;
  constructor(input: ReimportApiCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReimportApiCommandInput, ReimportApiCommandOutput>;
  private serialize;
  private deserialize;
}
