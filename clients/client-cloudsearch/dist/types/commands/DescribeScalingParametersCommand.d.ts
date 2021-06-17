import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeScalingParametersRequest, DescribeScalingParametersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeScalingParametersCommandInput extends DescribeScalingParametersRequest {
}
export interface DescribeScalingParametersCommandOutput extends DescribeScalingParametersResponse, __MetadataBearer {
}
/**
 * <p>Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see   <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeScalingParametersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeScalingParametersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeScalingParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingParametersCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeScalingParametersCommand extends $Command<DescribeScalingParametersCommandInput, DescribeScalingParametersCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeScalingParametersCommandInput;
    constructor(input: DescribeScalingParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScalingParametersCommandInput, DescribeScalingParametersCommandOutput>;
    private serialize;
    private deserialize;
}
