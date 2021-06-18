import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { ImportRestApiRequest, RestApi } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ImportRestApiCommandInput extends ImportRestApiRequest {}
export interface ImportRestApiCommandOutput extends RestApi, __MetadataBearer {}
/**
 * <p>A feature of the API Gateway control service for creating a new API from an external API definition file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, ImportRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, ImportRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new ImportRestApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportRestApiCommandInput} for command's `input` shape.
 * @see {@link ImportRestApiCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportRestApiCommand extends $Command<
  ImportRestApiCommandInput,
  ImportRestApiCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: ImportRestApiCommandInput;
  constructor(input: ImportRestApiCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportRestApiCommandInput, ImportRestApiCommandOutput>;
  private serialize;
  private deserialize;
}
