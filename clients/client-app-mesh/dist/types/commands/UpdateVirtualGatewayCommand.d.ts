import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { UpdateVirtualGatewayInput, UpdateVirtualGatewayOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateVirtualGatewayCommandInput extends UpdateVirtualGatewayInput {}
export interface UpdateVirtualGatewayCommandOutput extends UpdateVirtualGatewayOutput, __MetadataBearer {}
/**
 * <p>Updates an existing virtual gateway in a specified service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateVirtualGatewayCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateVirtualGatewayCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new UpdateVirtualGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVirtualGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualGatewayCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateVirtualGatewayCommand extends $Command<
  UpdateVirtualGatewayCommandInput,
  UpdateVirtualGatewayCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: UpdateVirtualGatewayCommandInput;
  constructor(input: UpdateVirtualGatewayCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVirtualGatewayCommandInput, UpdateVirtualGatewayCommandOutput>;
  private serialize;
  private deserialize;
}
