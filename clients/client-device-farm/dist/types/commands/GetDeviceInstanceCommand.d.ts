import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetDeviceInstanceRequest, GetDeviceInstanceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDeviceInstanceCommandInput extends GetDeviceInstanceRequest {
}
export interface GetDeviceInstanceCommandOutput extends GetDeviceInstanceResult, __MetadataBearer {
}
/**
 * <p>Returns information about a device instance that belongs to a private device fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetDeviceInstanceCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetDeviceInstanceCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetDeviceInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceInstanceCommandInput} for command's `input` shape.
 * @see {@link GetDeviceInstanceCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDeviceInstanceCommand extends $Command<GetDeviceInstanceCommandInput, GetDeviceInstanceCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetDeviceInstanceCommandInput;
    constructor(input: GetDeviceInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeviceInstanceCommandInput, GetDeviceInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
