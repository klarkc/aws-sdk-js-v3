import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateInstanceProfileRequest, UpdateInstanceProfileResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateInstanceProfileCommandInput extends UpdateInstanceProfileRequest {
}
export interface UpdateInstanceProfileCommandOutput extends UpdateInstanceProfileResult, __MetadataBearer {
}
/**
 * <p>Updates information about an existing private device instance profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateInstanceProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateInstanceProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateInstanceProfileCommand extends $Command<UpdateInstanceProfileCommandInput, UpdateInstanceProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateInstanceProfileCommandInput;
    constructor(input: UpdateInstanceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInstanceProfileCommandInput, UpdateInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
