import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { BasePathMapping, CreateBasePathMappingRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateBasePathMappingCommandInput extends CreateBasePathMappingRequest {}
export interface CreateBasePathMappingCommandOutput extends BasePathMapping, __MetadataBearer {}
/**
 * <p>Creates a new <a>BasePathMapping</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateBasePathMappingCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateBasePathMappingCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new CreateBasePathMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBasePathMappingCommandInput} for command's `input` shape.
 * @see {@link CreateBasePathMappingCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBasePathMappingCommand extends $Command<
  CreateBasePathMappingCommandInput,
  CreateBasePathMappingCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: CreateBasePathMappingCommandInput;
  constructor(input: CreateBasePathMappingCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBasePathMappingCommandInput, CreateBasePathMappingCommandOutput>;
  private serialize;
  private deserialize;
}
