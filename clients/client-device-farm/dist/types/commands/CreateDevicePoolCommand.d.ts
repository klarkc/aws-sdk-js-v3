import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateDevicePoolRequest, CreateDevicePoolResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDevicePoolCommandInput extends CreateDevicePoolRequest {
}
export interface CreateDevicePoolCommandOutput extends CreateDevicePoolResult, __MetadataBearer {
}
/**
 * <p>Creates a device pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateDevicePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDevicePoolCommandInput} for command's `input` shape.
 * @see {@link CreateDevicePoolCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDevicePoolCommand extends $Command<CreateDevicePoolCommandInput, CreateDevicePoolCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateDevicePoolCommandInput;
    constructor(input: CreateDevicePoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDevicePoolCommandInput, CreateDevicePoolCommandOutput>;
    private serialize;
    private deserialize;
}
