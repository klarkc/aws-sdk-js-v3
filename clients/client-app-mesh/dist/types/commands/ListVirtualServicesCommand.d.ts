import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListVirtualServicesInput, ListVirtualServicesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListVirtualServicesCommandInput extends ListVirtualServicesInput {}
export interface ListVirtualServicesCommandOutput extends ListVirtualServicesOutput, __MetadataBearer {}
/**
 * <p>Returns a list of existing virtual services in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualServicesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualServicesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListVirtualServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualServicesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualServicesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListVirtualServicesCommand extends $Command<
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: ListVirtualServicesCommandInput;
  constructor(input: ListVirtualServicesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVirtualServicesCommandInput, ListVirtualServicesCommandOutput>;
  private serialize;
  private deserialize;
}
