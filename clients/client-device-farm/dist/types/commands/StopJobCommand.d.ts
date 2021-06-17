import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { StopJobRequest, StopJobResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopJobCommandInput extends StopJobRequest {
}
export interface StopJobCommandOutput extends StopJobResult, __MetadataBearer {
}
/**
 * <p>Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device
 *             where tests have not started. You are not billed for this device. On the device where tests have started,
 *             setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown,
 *             and any tests that were in progress or already completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, StopJobCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, StopJobCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new StopJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopJobCommandInput} for command's `input` shape.
 * @see {@link StopJobCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopJobCommand extends $Command<StopJobCommandInput, StopJobCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: StopJobCommandInput;
    constructor(input: StopJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopJobCommandInput, StopJobCommandOutput>;
    private serialize;
    private deserialize;
}
