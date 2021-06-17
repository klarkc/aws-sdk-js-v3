import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { StopSuiteRunRequest, StopSuiteRunResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopSuiteRunCommandInput extends StopSuiteRunRequest {
}
export interface StopSuiteRunCommandOutput extends StopSuiteRunResponse, __MetadataBearer {
}
/**
 * <p>Stops a Device Advisor test suite run that is currently running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, StopSuiteRunCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, StopSuiteRunCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new StopSuiteRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopSuiteRunCommandInput} for command's `input` shape.
 * @see {@link StopSuiteRunCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopSuiteRunCommand extends $Command<StopSuiteRunCommandInput, StopSuiteRunCommandOutput, IotDeviceAdvisorClientResolvedConfig> {
    readonly input: StopSuiteRunCommandInput;
    constructor(input: StopSuiteRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IotDeviceAdvisorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopSuiteRunCommandInput, StopSuiteRunCommandOutput>;
    private serialize;
    private deserialize;
}
