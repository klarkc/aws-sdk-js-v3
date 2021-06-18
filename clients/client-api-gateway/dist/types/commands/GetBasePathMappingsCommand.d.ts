import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { BasePathMappings, GetBasePathMappingsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetBasePathMappingsCommandInput extends GetBasePathMappingsRequest {}
export interface GetBasePathMappingsCommandOutput extends BasePathMappings, __MetadataBearer {}
/**
 * <p>Represents a collection of <a>BasePathMapping</a> resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetBasePathMappingsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetBasePathMappingsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetBasePathMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBasePathMappingsCommandInput} for command's `input` shape.
 * @see {@link GetBasePathMappingsCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBasePathMappingsCommand extends $Command<
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetBasePathMappingsCommandInput;
  constructor(input: GetBasePathMappingsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBasePathMappingsCommandInput, GetBasePathMappingsCommandOutput>;
  private serialize;
  private deserialize;
}
