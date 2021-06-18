import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { DeleteRouteRequestParameterRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteRouteRequestParameterCommandInput extends DeleteRouteRequestParameterRequest {}
export interface DeleteRouteRequestParameterCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes a route request parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteRouteRequestParameterCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteRouteRequestParameterCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new DeleteRouteRequestParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRouteRequestParameterCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteRequestParameterCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRouteRequestParameterCommand extends $Command<
  DeleteRouteRequestParameterCommandInput,
  DeleteRouteRequestParameterCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: DeleteRouteRequestParameterCommandInput;
  constructor(input: DeleteRouteRequestParameterCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRouteRequestParameterCommandInput, DeleteRouteRequestParameterCommandOutput>;
  private serialize;
  private deserialize;
}
