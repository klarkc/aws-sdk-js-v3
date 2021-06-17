import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListDeviceInstancesRequest, ListDeviceInstancesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDeviceInstancesCommandInput extends ListDeviceInstancesRequest {
}
export interface ListDeviceInstancesCommandOutput extends ListDeviceInstancesResult, __MetadataBearer {
}
/**
 * <p>Returns information about the private device instances associated with one or more AWS
 *             accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListDeviceInstancesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListDeviceInstancesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListDeviceInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceInstancesCommandInput} for command's `input` shape.
 * @see {@link ListDeviceInstancesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeviceInstancesCommand extends $Command<ListDeviceInstancesCommandInput, ListDeviceInstancesCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListDeviceInstancesCommandInput;
    constructor(input: ListDeviceInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeviceInstancesCommandInput, ListDeviceInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
