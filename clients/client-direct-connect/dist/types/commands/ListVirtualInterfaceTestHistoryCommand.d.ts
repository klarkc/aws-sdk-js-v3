import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { ListVirtualInterfaceTestHistoryRequest, ListVirtualInterfaceTestHistoryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListVirtualInterfaceTestHistoryCommandInput extends ListVirtualInterfaceTestHistoryRequest {
}
export interface ListVirtualInterfaceTestHistoryCommandOutput extends ListVirtualInterfaceTestHistoryResponse, __MetadataBearer {
}
/**
 * <p>Lists the virtual interface failover test history.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ListVirtualInterfaceTestHistoryCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ListVirtualInterfaceTestHistoryCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ListVirtualInterfaceTestHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualInterfaceTestHistoryCommandInput} for command's `input` shape.
 * @see {@link ListVirtualInterfaceTestHistoryCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListVirtualInterfaceTestHistoryCommand extends $Command<ListVirtualInterfaceTestHistoryCommandInput, ListVirtualInterfaceTestHistoryCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: ListVirtualInterfaceTestHistoryCommandInput;
    constructor(input: ListVirtualInterfaceTestHistoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVirtualInterfaceTestHistoryCommandInput, ListVirtualInterfaceTestHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
