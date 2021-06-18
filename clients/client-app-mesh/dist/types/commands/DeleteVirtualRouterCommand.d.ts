import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteVirtualRouterInput, DeleteVirtualRouterOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteVirtualRouterCommandInput extends DeleteVirtualRouterInput {}
export interface DeleteVirtualRouterCommandOutput extends DeleteVirtualRouterOutput, __MetadataBearer {}
/**
 * <p>Deletes an existing virtual router.</p>
 *          <p>You must delete any routes associated with the virtual router before you can delete the
 *          router itself.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteVirtualRouterCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteVirtualRouterCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DeleteVirtualRouterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVirtualRouterCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualRouterCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVirtualRouterCommand extends $Command<
  DeleteVirtualRouterCommandInput,
  DeleteVirtualRouterCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: DeleteVirtualRouterCommandInput;
  constructor(input: DeleteVirtualRouterCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVirtualRouterCommandInput, DeleteVirtualRouterCommandOutput>;
  private serialize;
  private deserialize;
}
