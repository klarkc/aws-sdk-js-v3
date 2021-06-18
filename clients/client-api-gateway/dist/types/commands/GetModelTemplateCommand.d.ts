import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetModelTemplateRequest, Template } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetModelTemplateCommandInput extends GetModelTemplateRequest {}
export interface GetModelTemplateCommandOutput extends Template, __MetadataBearer {}
/**
 * <p>Generates a sample mapping template that can be used to transform a payload into the structure of a model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetModelTemplateCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetModelTemplateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetModelTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetModelTemplateCommandInput} for command's `input` shape.
 * @see {@link GetModelTemplateCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetModelTemplateCommand extends $Command<
  GetModelTemplateCommandInput,
  GetModelTemplateCommandOutput,
  APIGatewayClientResolvedConfig
> {
  readonly input: GetModelTemplateCommandInput;
  constructor(input: GetModelTemplateCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetModelTemplateCommandInput, GetModelTemplateCommandOutput>;
  private serialize;
  private deserialize;
}
