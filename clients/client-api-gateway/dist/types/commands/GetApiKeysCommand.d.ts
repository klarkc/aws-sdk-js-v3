import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { ApiKeys, GetApiKeysRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetApiKeysCommandInput extends GetApiKeysRequest {}
export interface GetApiKeysCommandOutput extends ApiKeys, __MetadataBearer {}
/**
 * <p>Gets information about the current <a>ApiKeys</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetApiKeysCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetApiKeysCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetApiKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApiKeysCommandInput} for command's `input` shape.
 * @see {@link GetApiKeysCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetApiKeysCommand extends $Command<
  GetApiKeysCommandInput,
  GetApiKeysCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetApiKeysCommandInput;
  constructor(input: GetApiKeysCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApiKeysCommandInput, GetApiKeysCommandOutput>;
  private serialize;
  private deserialize;
}
