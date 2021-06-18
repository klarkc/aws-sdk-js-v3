import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteMeshInput, DeleteMeshOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteMeshCommandInput extends DeleteMeshInput {}
export interface DeleteMeshCommandOutput extends DeleteMeshOutput, __MetadataBearer {}
/**
 * <p>Deletes an existing service mesh.</p>
 *          <p>You must delete all resources (virtual services, routes, virtual routers, and virtual
 *          nodes) in the service mesh before you can delete the mesh itself.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteMeshCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteMeshCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DeleteMeshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMeshCommandInput} for command's `input` shape.
 * @see {@link DeleteMeshCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMeshCommand extends $Command<
  DeleteMeshCommandInput,
  DeleteMeshCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: DeleteMeshCommandInput;
  constructor(input: DeleteMeshCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMeshCommandInput, DeleteMeshCommandOutput>;
  private serialize;
  private deserialize;
}
