import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateInstanceProfileRequest, CreateInstanceProfileResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateInstanceProfileCommandInput extends CreateInstanceProfileRequest {
}
export interface CreateInstanceProfileCommandOutput extends CreateInstanceProfileResult, __MetadataBearer {
}
/**
 * <p>Creates a profile that can be applied to one or more private fleet device
 *             instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateInstanceProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateInstanceProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateInstanceProfileCommand extends $Command<CreateInstanceProfileCommandInput, CreateInstanceProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateInstanceProfileCommandInput;
    constructor(input: CreateInstanceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstanceProfileCommandInput, CreateInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
