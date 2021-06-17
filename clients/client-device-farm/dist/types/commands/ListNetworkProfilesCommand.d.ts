import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListNetworkProfilesRequest, ListNetworkProfilesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListNetworkProfilesCommandInput extends ListNetworkProfilesRequest {
}
export interface ListNetworkProfilesCommandOutput extends ListNetworkProfilesResult, __MetadataBearer {
}
/**
 * <p>Returns the list of available network profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListNetworkProfilesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListNetworkProfilesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListNetworkProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNetworkProfilesCommandInput} for command's `input` shape.
 * @see {@link ListNetworkProfilesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListNetworkProfilesCommand extends $Command<ListNetworkProfilesCommandInput, ListNetworkProfilesCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListNetworkProfilesCommandInput;
    constructor(input: ListNetworkProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNetworkProfilesCommandInput, ListNetworkProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
