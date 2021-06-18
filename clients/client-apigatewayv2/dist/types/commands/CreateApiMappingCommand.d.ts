import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { CreateApiMappingRequest, CreateApiMappingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateApiMappingCommandInput extends CreateApiMappingRequest {}
export interface CreateApiMappingCommandOutput extends CreateApiMappingResponse, __MetadataBearer {}
/**
 * <p>Creates an API mapping.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateApiMappingCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateApiMappingCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new CreateApiMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApiMappingCommandInput} for command's `input` shape.
 * @see {@link CreateApiMappingCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateApiMappingCommand extends $Command<
  CreateApiMappingCommandInput,
  CreateApiMappingCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: CreateApiMappingCommandInput;
  constructor(input: CreateApiMappingCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateApiMappingCommandInput, CreateApiMappingCommandOutput>;
  private serialize;
  private deserialize;
}
