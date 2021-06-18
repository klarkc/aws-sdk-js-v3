import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { UpdateApiMappingRequest, UpdateApiMappingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateApiMappingCommandInput extends UpdateApiMappingRequest {}
export interface UpdateApiMappingCommandOutput extends UpdateApiMappingResponse, __MetadataBearer {}
/**
 * <p>The API mapping.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateApiMappingCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateApiMappingCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new UpdateApiMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApiMappingCommandInput} for command's `input` shape.
 * @see {@link UpdateApiMappingCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateApiMappingCommand extends $Command<
  UpdateApiMappingCommandInput,
  UpdateApiMappingCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: UpdateApiMappingCommandInput;
  constructor(input: UpdateApiMappingCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApiMappingCommandInput, UpdateApiMappingCommandOutput>;
  private serialize;
  private deserialize;
}
