import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListRoutesInput, ListRoutesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListRoutesCommandInput extends ListRoutesInput {}
export interface ListRoutesCommandOutput extends ListRoutesOutput, __MetadataBearer {}
/**
 * <p>Returns a list of existing routes in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListRoutesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListRoutesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoutesCommandInput} for command's `input` shape.
 * @see {@link ListRoutesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRoutesCommand extends $Command<
  ListRoutesCommandInput,
  ListRoutesCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: ListRoutesCommandInput;
  constructor(input: ListRoutesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRoutesCommandInput, ListRoutesCommandOutput>;
  private serialize;
  private deserialize;
}
