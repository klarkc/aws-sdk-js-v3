import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeAutomationExecutionsRequest, DescribeAutomationExecutionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAutomationExecutionsCommandInput extends DescribeAutomationExecutionsRequest {
}
export interface DescribeAutomationExecutionsCommandOutput extends DescribeAutomationExecutionsResult, __MetadataBearer {
}
/**
 * <p>Provides details about all active and terminated Automation executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAutomationExecutionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAutomationExecutionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeAutomationExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAutomationExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAutomationExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAutomationExecutionsCommand extends $Command<DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeAutomationExecutionsCommandInput;
    constructor(input: DescribeAutomationExecutionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
