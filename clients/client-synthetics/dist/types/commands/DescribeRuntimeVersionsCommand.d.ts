import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";
import { DescribeRuntimeVersionsRequest, DescribeRuntimeVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRuntimeVersionsCommandInput extends DescribeRuntimeVersionsRequest {
}
export interface DescribeRuntimeVersionsCommandOutput extends DescribeRuntimeVersionsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of Synthetics canary runtime versions. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
 *             Canary Runtime Versions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeRuntimeVersionsCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeRuntimeVersionsCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new DescribeRuntimeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRuntimeVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRuntimeVersionsCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRuntimeVersionsCommand extends $Command<DescribeRuntimeVersionsCommandInput, DescribeRuntimeVersionsCommandOutput, SyntheticsClientResolvedConfig> {
    readonly input: DescribeRuntimeVersionsCommandInput;
    constructor(input: DescribeRuntimeVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SyntheticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRuntimeVersionsCommandInput, DescribeRuntimeVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
