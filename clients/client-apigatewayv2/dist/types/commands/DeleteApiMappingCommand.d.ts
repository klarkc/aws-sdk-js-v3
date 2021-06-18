import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { DeleteApiMappingRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteApiMappingCommandInput extends DeleteApiMappingRequest {}
export interface DeleteApiMappingCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes an API mapping.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteApiMappingCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteApiMappingCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new DeleteApiMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApiMappingCommandInput} for command's `input` shape.
 * @see {@link DeleteApiMappingCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteApiMappingCommand extends $Command<
  DeleteApiMappingCommandInput,
  DeleteApiMappingCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: DeleteApiMappingCommandInput;
  constructor(input: DeleteApiMappingCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteApiMappingCommandInput, DeleteApiMappingCommandOutput>;
  private serialize;
  private deserialize;
}
