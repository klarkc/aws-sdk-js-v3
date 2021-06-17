import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteInstanceProfileRequest, DeleteInstanceProfileResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInstanceProfileCommandInput extends DeleteInstanceProfileRequest {
}
export interface DeleteInstanceProfileCommandOutput extends DeleteInstanceProfileResult, __MetadataBearer {
}
/**
 * <p>Deletes a profile that can be applied to one or more private device instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteInstanceProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteInstanceProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInstanceProfileCommand extends $Command<DeleteInstanceProfileCommandInput, DeleteInstanceProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: DeleteInstanceProfileCommandInput;
    constructor(input: DeleteInstanceProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInstanceProfileCommandInput, DeleteInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
