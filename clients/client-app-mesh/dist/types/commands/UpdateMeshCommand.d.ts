import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { UpdateMeshInput, UpdateMeshOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateMeshCommandInput extends UpdateMeshInput {}
export interface UpdateMeshCommandOutput extends UpdateMeshOutput, __MetadataBearer {}
/**
 * <p>Updates an existing service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateMeshCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateMeshCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new UpdateMeshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMeshCommandInput} for command's `input` shape.
 * @see {@link UpdateMeshCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMeshCommand extends $Command<
  UpdateMeshCommandInput,
  UpdateMeshCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: UpdateMeshCommandInput;
  constructor(input: UpdateMeshCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMeshCommandInput, UpdateMeshCommandOutput>;
  private serialize;
  private deserialize;
}
