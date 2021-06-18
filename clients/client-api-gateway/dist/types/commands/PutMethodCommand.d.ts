import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { Method, PutMethodRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PutMethodCommandInput extends PutMethodRequest {}
export interface PutMethodCommandOutput extends Method, __MetadataBearer {}
/**
 * <p>Add a method to an existing <a>Resource</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutMethodCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutMethodCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new PutMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMethodCommandInput} for command's `input` shape.
 * @see {@link PutMethodCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutMethodCommand extends $Command<
  PutMethodCommandInput,
  PutMethodCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: PutMethodCommandInput;
  constructor(input: PutMethodCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutMethodCommandInput, PutMethodCommandOutput>;
  private serialize;
  private deserialize;
}
