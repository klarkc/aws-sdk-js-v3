import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { StartSuiteRunRequest, StartSuiteRunResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartSuiteRunCommandInput extends StartSuiteRunRequest {
}
export interface StartSuiteRunCommandOutput extends StartSuiteRunResponse, __MetadataBearer {
}
/**
 * <p>Starts a Device Advisor test suite run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, StartSuiteRunCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, StartSuiteRunCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new StartSuiteRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSuiteRunCommandInput} for command's `input` shape.
 * @see {@link StartSuiteRunCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartSuiteRunCommand extends $Command<StartSuiteRunCommandInput, StartSuiteRunCommandOutput, IotDeviceAdvisorClientResolvedConfig> {
    readonly input: StartSuiteRunCommandInput;
    constructor(input: StartSuiteRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IotDeviceAdvisorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSuiteRunCommandInput, StartSuiteRunCommandOutput>;
    private serialize;
    private deserialize;
}
