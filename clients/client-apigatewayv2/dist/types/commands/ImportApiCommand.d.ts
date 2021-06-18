import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { ImportApiRequest, ImportApiResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ImportApiCommandInput extends ImportApiRequest {}
export interface ImportApiCommandOutput extends ImportApiResponse, __MetadataBearer {}
/**
 * <p>Imports an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ImportApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ImportApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new ImportApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportApiCommandInput} for command's `input` shape.
 * @see {@link ImportApiCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportApiCommand extends $Command<
  ImportApiCommandInput,
  ImportApiCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: ImportApiCommandInput;
  constructor(input: ImportApiCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportApiCommandInput, ImportApiCommandOutput>;
  private serialize;
  private deserialize;
}
