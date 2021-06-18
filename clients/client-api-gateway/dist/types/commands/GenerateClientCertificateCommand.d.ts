import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { ClientCertificate, GenerateClientCertificateRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GenerateClientCertificateCommandInput extends GenerateClientCertificateRequest {}
export interface GenerateClientCertificateCommandOutput extends ClientCertificate, __MetadataBearer {}
/**
 * <p>Generates a <a>ClientCertificate</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GenerateClientCertificateCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GenerateClientCertificateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GenerateClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateClientCertificateCommandInput} for command's `input` shape.
 * @see {@link GenerateClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GenerateClientCertificateCommand extends $Command<
  GenerateClientCertificateCommandInput,
  GenerateClientCertificateCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GenerateClientCertificateCommandInput;
  constructor(input: GenerateClientCertificateCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateClientCertificateCommandInput, GenerateClientCertificateCommandOutput>;
  private serialize;
  private deserialize;
}
