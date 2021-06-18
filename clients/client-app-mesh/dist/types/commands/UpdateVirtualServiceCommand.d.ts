import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { UpdateVirtualServiceInput, UpdateVirtualServiceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateVirtualServiceCommandInput extends UpdateVirtualServiceInput {}
export interface UpdateVirtualServiceCommandOutput extends UpdateVirtualServiceOutput, __MetadataBearer {}
/**
 * <p>Updates an existing virtual service in a specified service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateVirtualServiceCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new UpdateVirtualServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualServiceCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateVirtualServiceCommand extends $Command<
  UpdateVirtualServiceCommandInput,
  UpdateVirtualServiceCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: UpdateVirtualServiceCommandInput;
  constructor(input: UpdateVirtualServiceCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVirtualServiceCommandInput, UpdateVirtualServiceCommandOutput>;
  private serialize;
  private deserialize;
}
