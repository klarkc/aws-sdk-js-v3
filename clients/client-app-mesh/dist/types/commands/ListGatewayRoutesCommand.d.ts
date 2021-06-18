import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListGatewayRoutesInput, ListGatewayRoutesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListGatewayRoutesCommandInput extends ListGatewayRoutesInput {}
export interface ListGatewayRoutesCommandOutput extends ListGatewayRoutesOutput, __MetadataBearer {}
/**
 * <p>Returns a list of existing gateway routes that are associated to a virtual
 *          gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListGatewayRoutesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListGatewayRoutesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link ListGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGatewayRoutesCommand extends $Command<
  ListGatewayRoutesCommandInput,
  ListGatewayRoutesCommandOutput,
  AppMeshClientResolvedConfig
> {
  readonly input: ListGatewayRoutesCommandInput;
  constructor(input: ListGatewayRoutesCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGatewayRoutesCommandInput, ListGatewayRoutesCommandOutput>;
  private serialize;
  private deserialize;
}
