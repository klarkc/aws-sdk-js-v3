import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteVirtualNodeInput, DeleteVirtualNodeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteVirtualNodeCommandInput extends DeleteVirtualNodeInput {}
export interface DeleteVirtualNodeCommandOutput extends DeleteVirtualNodeOutput, __MetadataBearer {}
/**
 * <p>Deletes an existing virtual node.</p>
 *          <p>You must delete any virtual services that list a virtual node as a service provider
 *          before you can delete the virtual node itself.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteVirtualNodeCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteVirtualNodeCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DeleteVirtualNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVirtualNodeCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualNodeCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVirtualNodeCommand extends $Command<
  DeleteVirtualNodeCommandInput,
  DeleteVirtualNodeCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: DeleteVirtualNodeCommandInput;
  constructor(input: DeleteVirtualNodeCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVirtualNodeCommandInput, DeleteVirtualNodeCommandOutput>;
  private serialize;
  private deserialize;
}
