import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ScheduleRunRequest, ScheduleRunResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ScheduleRunCommandInput extends ScheduleRunRequest {
}
export interface ScheduleRunCommandOutput extends ScheduleRunResult, __MetadataBearer {
}
/**
 * <p>Schedules a run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ScheduleRunCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ScheduleRunCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ScheduleRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ScheduleRunCommandInput} for command's `input` shape.
 * @see {@link ScheduleRunCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ScheduleRunCommand extends $Command<ScheduleRunCommandInput, ScheduleRunCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ScheduleRunCommandInput;
    constructor(input: ScheduleRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ScheduleRunCommandInput, ScheduleRunCommandOutput>;
    private serialize;
    private deserialize;
}
