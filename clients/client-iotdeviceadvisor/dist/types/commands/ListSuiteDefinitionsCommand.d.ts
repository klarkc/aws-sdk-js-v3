import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { ListSuiteDefinitionsRequest, ListSuiteDefinitionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSuiteDefinitionsCommandInput extends ListSuiteDefinitionsRequest {
}
export interface ListSuiteDefinitionsCommandOutput extends ListSuiteDefinitionsResponse, __MetadataBearer {
}
/**
 * <p>Lists the Device Advisor test suites you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, ListSuiteDefinitionsCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, ListSuiteDefinitionsCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new ListSuiteDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSuiteDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListSuiteDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSuiteDefinitionsCommand extends $Command<ListSuiteDefinitionsCommandInput, ListSuiteDefinitionsCommandOutput, IotDeviceAdvisorClientResolvedConfig> {
    readonly input: ListSuiteDefinitionsCommandInput;
    constructor(input: ListSuiteDefinitionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IotDeviceAdvisorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSuiteDefinitionsCommandInput, ListSuiteDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
