import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetRequestValidatorRequest, RequestValidator } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetRequestValidatorCommandInput extends GetRequestValidatorRequest {}
export interface GetRequestValidatorCommandOutput extends RequestValidator, __MetadataBearer {}
/**
 * <p>Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetRequestValidatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link GetRequestValidatorCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRequestValidatorCommand extends $Command<
  GetRequestValidatorCommandInput,
  GetRequestValidatorCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetRequestValidatorCommandInput;
  constructor(input: GetRequestValidatorCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRequestValidatorCommandInput, GetRequestValidatorCommandOutput>;
  private serialize;
  private deserialize;
}
