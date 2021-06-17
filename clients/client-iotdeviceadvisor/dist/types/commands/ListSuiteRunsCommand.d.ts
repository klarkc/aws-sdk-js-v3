import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { ListSuiteRunsRequest, ListSuiteRunsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSuiteRunsCommandInput extends ListSuiteRunsRequest {
}
export interface ListSuiteRunsCommandOutput extends ListSuiteRunsResponse, __MetadataBearer {
}
/**
 * <p>Lists the runs of the specified Device Advisor test suite.
 *             You can list all runs of the test suite, or the runs of a specific version of the test suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, ListSuiteRunsCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, ListSuiteRunsCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const command = new ListSuiteRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSuiteRunsCommandInput} for command's `input` shape.
 * @see {@link ListSuiteRunsCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSuiteRunsCommand extends $Command<ListSuiteRunsCommandInput, ListSuiteRunsCommandOutput, IotDeviceAdvisorClientResolvedConfig> {
    readonly input: ListSuiteRunsCommandInput;
    constructor(input: ListSuiteRunsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IotDeviceAdvisorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSuiteRunsCommandInput, ListSuiteRunsCommandOutput>;
    private serialize;
    private deserialize;
}
