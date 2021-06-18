import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetRequestValidatorsRequest, RequestValidators } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetRequestValidatorsCommandInput extends GetRequestValidatorsRequest {}
export interface GetRequestValidatorsCommandOutput extends RequestValidators, __MetadataBearer {}
/**
 * <p>Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRequestValidatorsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRequestValidatorsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetRequestValidatorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRequestValidatorsCommandInput} for command's `input` shape.
 * @see {@link GetRequestValidatorsCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRequestValidatorsCommand extends $Command<
  GetRequestValidatorsCommandInput,
  GetRequestValidatorsCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetRequestValidatorsCommandInput;
  constructor(input: GetRequestValidatorsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRequestValidatorsCommandInput, GetRequestValidatorsCommandOutput>;
  private serialize;
  private deserialize;
}
