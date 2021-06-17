import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { GetSuiteDefinitionRequest, GetSuiteDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSuiteDefinitionCommandInput extends GetSuiteDefinitionRequest {
}
export interface GetSuiteDefinitionCommandOutput extends GetSuiteDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a Device Advisor test suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new GetSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetSuiteDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSuiteDefinitionCommand extends $Command<GetSuiteDefinitionCommandInput, GetSuiteDefinitionCommandOutput, IotDeviceAdvisorClientResolvedConfig> {
    readonly input: GetSuiteDefinitionCommandInput;
    constructor(input: GetSuiteDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IotDeviceAdvisorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSuiteDefinitionCommandInput, GetSuiteDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
