import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { StartBgpFailoverTestRequest, StartBgpFailoverTestResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartBgpFailoverTestCommandInput extends StartBgpFailoverTestRequest {
}
export interface StartBgpFailoverTestCommandOutput extends StartBgpFailoverTestResponse, __MetadataBearer {
}
/**
 * <p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p>
 *          <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p>
 *          <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p>
 *          <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, StartBgpFailoverTestCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, StartBgpFailoverTestCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new StartBgpFailoverTestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBgpFailoverTestCommandInput} for command's `input` shape.
 * @see {@link StartBgpFailoverTestCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartBgpFailoverTestCommand extends $Command<StartBgpFailoverTestCommandInput, StartBgpFailoverTestCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: StartBgpFailoverTestCommandInput;
    constructor(input: StartBgpFailoverTestCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartBgpFailoverTestCommandInput, StartBgpFailoverTestCommandOutput>;
    private serialize;
    private deserialize;
}
