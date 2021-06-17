import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { StopBgpFailoverTestRequest, StopBgpFailoverTestResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopBgpFailoverTestCommandInput extends StopBgpFailoverTestRequest {
}
export interface StopBgpFailoverTestCommandOutput extends StopBgpFailoverTestResponse, __MetadataBearer {
}
/**
 * <p>Stops the virtual interface failover test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, StopBgpFailoverTestCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, StopBgpFailoverTestCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new StopBgpFailoverTestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopBgpFailoverTestCommandInput} for command's `input` shape.
 * @see {@link StopBgpFailoverTestCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopBgpFailoverTestCommand extends $Command<StopBgpFailoverTestCommandInput, StopBgpFailoverTestCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: StopBgpFailoverTestCommandInput;
    constructor(input: StopBgpFailoverTestCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopBgpFailoverTestCommandInput, StopBgpFailoverTestCommandOutput>;
    private serialize;
    private deserialize;
}
