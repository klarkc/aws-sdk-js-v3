import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { RequestValidator, UpdateRequestValidatorRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateRequestValidatorCommandInput extends UpdateRequestValidatorRequest {}
export interface UpdateRequestValidatorCommandOutput extends RequestValidator, __MetadataBearer {}
/**
 * <p>Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateRequestValidatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link UpdateRequestValidatorCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRequestValidatorCommand extends $Command<
  UpdateRequestValidatorCommandInput,
  UpdateRequestValidatorCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: UpdateRequestValidatorCommandInput;
  constructor(input: UpdateRequestValidatorCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRequestValidatorCommandInput, UpdateRequestValidatorCommandOutput>;
  private serialize;
  private deserialize;
}
