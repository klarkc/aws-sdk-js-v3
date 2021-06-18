import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListVirtualRoutersInput, ListVirtualRoutersOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListVirtualRoutersCommandInput extends ListVirtualRoutersInput {}
export interface ListVirtualRoutersCommandOutput extends ListVirtualRoutersOutput, __MetadataBearer {}
/**
 * <p>Returns a list of existing virtual routers in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualRoutersCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualRoutersCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListVirtualRoutersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualRoutersCommandInput} for command's `input` shape.
 * @see {@link ListVirtualRoutersCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListVirtualRoutersCommand extends $Command<
  ListVirtualRoutersCommandInput,
  ListVirtualRoutersCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: ListVirtualRoutersCommandInput;
  constructor(input: ListVirtualRoutersCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVirtualRoutersCommandInput, ListVirtualRoutersCommandOutput>;
  private serialize;
  private deserialize;
}
