import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DeleteRequestValidatorRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteRequestValidatorCommandInput extends DeleteRequestValidatorRequest {}
export interface DeleteRequestValidatorCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new DeleteRequestValidatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link DeleteRequestValidatorCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRequestValidatorCommand extends $Command<
  DeleteRequestValidatorCommandInput,
  DeleteRequestValidatorCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: DeleteRequestValidatorCommandInput;
  constructor(input: DeleteRequestValidatorCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRequestValidatorCommandInput, DeleteRequestValidatorCommandOutput>;
  private serialize;
  private deserialize;
}
