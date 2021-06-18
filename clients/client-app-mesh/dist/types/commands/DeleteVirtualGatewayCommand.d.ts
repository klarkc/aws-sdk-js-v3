import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteVirtualGatewayInput, DeleteVirtualGatewayOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteVirtualGatewayCommandInput extends DeleteVirtualGatewayInput {}
export interface DeleteVirtualGatewayCommandOutput extends DeleteVirtualGatewayOutput, __MetadataBearer {}
/**
 * <p>Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway
 *          routes are associated to it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteVirtualGatewayCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteVirtualGatewayCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DeleteVirtualGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVirtualGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualGatewayCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVirtualGatewayCommand extends $Command<
  DeleteVirtualGatewayCommandInput,
  DeleteVirtualGatewayCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: DeleteVirtualGatewayCommandInput;
  constructor(input: DeleteVirtualGatewayCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVirtualGatewayCommandInput, DeleteVirtualGatewayCommandOutput>;
  private serialize;
  private deserialize;
}
