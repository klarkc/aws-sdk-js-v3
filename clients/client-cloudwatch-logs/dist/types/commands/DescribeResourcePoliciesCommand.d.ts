import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeResourcePoliciesRequest, DescribeResourcePoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeResourcePoliciesCommandInput extends DescribeResourcePoliciesRequest {
}
export interface DescribeResourcePoliciesCommandOutput extends DescribeResourcePoliciesResponse, __MetadataBearer {
}
/**
 * <p>Lists the resource policies in this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeResourcePoliciesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeResourcePoliciesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DescribeResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeResourcePoliciesCommand extends $Command<DescribeResourcePoliciesCommandInput, DescribeResourcePoliciesCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DescribeResourcePoliciesCommandInput;
    constructor(input: DescribeResourcePoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeResourcePoliciesCommandInput, DescribeResourcePoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
