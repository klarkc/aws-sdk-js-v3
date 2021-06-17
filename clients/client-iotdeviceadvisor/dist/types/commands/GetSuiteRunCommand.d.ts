import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { GetSuiteRunRequest, GetSuiteRunResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSuiteRunCommandInput extends GetSuiteRunRequest {
}
export interface GetSuiteRunCommandOutput extends GetSuiteRunResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a Device Advisor test suite run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetSuiteRunCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetSuiteRunCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new GetSuiteRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSuiteRunCommandInput} for command's `input` shape.
 * @see {@link GetSuiteRunCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSuiteRunCommand extends $Command<GetSuiteRunCommandInput, GetSuiteRunCommandOutput, IotDeviceAdvisorClientResolvedConfig> {
    readonly input: GetSuiteRunCommandInput;
    constructor(input: GetSuiteRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IotDeviceAdvisorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSuiteRunCommandInput, GetSuiteRunCommandOutput>;
    private serialize;
    private deserialize;
}
