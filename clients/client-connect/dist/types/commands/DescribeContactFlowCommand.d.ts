import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeContactFlowRequest, DescribeContactFlowResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeContactFlowCommandInput extends DescribeContactFlowRequest {
}
export interface DescribeContactFlowCommandOutput extends DescribeContactFlowResponse, __MetadataBearer {
}
/**
 * <p>Describes the specified contact flow.</p>
 *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeContactFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContactFlowCommandInput} for command's `input` shape.
 * @see {@link DescribeContactFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeContactFlowCommand extends $Command<DescribeContactFlowCommandInput, DescribeContactFlowCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DescribeContactFlowCommandInput;
    constructor(input: DescribeContactFlowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeContactFlowCommandInput, DescribeContactFlowCommandOutput>;
    private serialize;
    private deserialize;
}
