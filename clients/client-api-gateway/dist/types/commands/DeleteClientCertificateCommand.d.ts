import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DeleteClientCertificateRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteClientCertificateCommandInput extends DeleteClientCertificateRequest {}
export interface DeleteClientCertificateCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes the <a>ClientCertificate</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteClientCertificateCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteClientCertificateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClientCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteClientCertificateCommand extends $Command<
  DeleteClientCertificateCommandInput,
  DeleteClientCertificateCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: DeleteClientCertificateCommandInput;
  constructor(input: DeleteClientCertificateCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClientCertificateCommandInput, DeleteClientCertificateCommandOutput>;
  private serialize;
  private deserialize;
}
