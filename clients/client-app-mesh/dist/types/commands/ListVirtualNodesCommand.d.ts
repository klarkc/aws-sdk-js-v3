import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListVirtualNodesInput, ListVirtualNodesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListVirtualNodesCommandInput extends ListVirtualNodesInput {}
export interface ListVirtualNodesCommandOutput extends ListVirtualNodesOutput, __MetadataBearer {}
/**
 * <p>Returns a list of existing virtual nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualNodesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualNodesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListVirtualNodesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualNodesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualNodesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListVirtualNodesCommand extends $Command<
  ListVirtualNodesCommandInput,
  ListVirtualNodesCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: ListVirtualNodesCommandInput;
  constructor(input: ListVirtualNodesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVirtualNodesCommandInput, ListVirtualNodesCommandOutput>;
  private serialize;
  private deserialize;
}
