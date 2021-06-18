import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { ClientCertificate, GetClientCertificateRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetClientCertificateCommandInput extends GetClientCertificateRequest {}
export interface GetClientCertificateCommandOutput extends ClientCertificate, __MetadataBearer {}
/**
 * <p>Gets information about the current <a>ClientCertificate</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetClientCertificateCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetClientCertificateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClientCertificateCommandInput} for command's `input` shape.
 * @see {@link GetClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetClientCertificateCommand extends $Command<
  GetClientCertificateCommandInput,
  GetClientCertificateCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetClientCertificateCommandInput;
  constructor(input: GetClientCertificateCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetClientCertificateCommandInput, GetClientCertificateCommandOutput>;
  private serialize;
  private deserialize;
}
