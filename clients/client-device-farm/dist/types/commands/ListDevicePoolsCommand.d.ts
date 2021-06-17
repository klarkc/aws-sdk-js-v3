import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListDevicePoolsRequest, ListDevicePoolsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDevicePoolsCommandInput extends ListDevicePoolsRequest {
}
export interface ListDevicePoolsCommandOutput extends ListDevicePoolsResult, __MetadataBearer {
}
/**
 * <p>Gets information about device pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListDevicePoolsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListDevicePoolsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListDevicePoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevicePoolsCommandInput} for command's `input` shape.
 * @see {@link ListDevicePoolsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDevicePoolsCommand extends $Command<ListDevicePoolsCommandInput, ListDevicePoolsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListDevicePoolsCommandInput;
    constructor(input: ListDevicePoolsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDevicePoolsCommandInput, ListDevicePoolsCommandOutput>;
    private serialize;
    private deserialize;
}
