import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { DeleteRouteSettingsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteRouteSettingsCommandInput extends DeleteRouteSettingsRequest {}
export interface DeleteRouteSettingsCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes the RouteSettings for a stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteRouteSettingsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteRouteSettingsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new DeleteRouteSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRouteSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteSettingsCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRouteSettingsCommand extends $Command<
  DeleteRouteSettingsCommandInput,
  DeleteRouteSettingsCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  readonly input: DeleteRouteSettingsCommandInput;
  constructor(input: DeleteRouteSettingsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRouteSettingsCommandInput, DeleteRouteSettingsCommandOutput>;
  private serialize;
  private deserialize;
}
