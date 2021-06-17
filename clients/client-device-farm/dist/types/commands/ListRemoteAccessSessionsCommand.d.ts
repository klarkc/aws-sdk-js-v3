import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListRemoteAccessSessionsRequest, ListRemoteAccessSessionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRemoteAccessSessionsCommandInput extends ListRemoteAccessSessionsRequest {
}
export interface ListRemoteAccessSessionsCommandOutput extends ListRemoteAccessSessionsResult, __MetadataBearer {
}
/**
 * <p>Returns a list of all currently running remote access sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListRemoteAccessSessionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListRemoteAccessSessionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListRemoteAccessSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRemoteAccessSessionsCommandInput} for command's `input` shape.
 * @see {@link ListRemoteAccessSessionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRemoteAccessSessionsCommand extends $Command<ListRemoteAccessSessionsCommandInput, ListRemoteAccessSessionsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListRemoteAccessSessionsCommandInput;
    constructor(input: ListRemoteAccessSessionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRemoteAccessSessionsCommandInput, ListRemoteAccessSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
