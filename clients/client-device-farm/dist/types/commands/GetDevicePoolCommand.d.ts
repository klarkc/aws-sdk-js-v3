import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetDevicePoolRequest, GetDevicePoolResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDevicePoolCommandInput extends GetDevicePoolRequest {
}
export interface GetDevicePoolCommandOutput extends GetDevicePoolResult, __MetadataBearer {
}
/**
 * <p>Gets information about a device pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetDevicePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicePoolCommandInput} for command's `input` shape.
 * @see {@link GetDevicePoolCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDevicePoolCommand extends $Command<GetDevicePoolCommandInput, GetDevicePoolCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetDevicePoolCommandInput;
    constructor(input: GetDevicePoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDevicePoolCommandInput, GetDevicePoolCommandOutput>;
    private serialize;
    private deserialize;
}
