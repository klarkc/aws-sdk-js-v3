import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { DescribeClustersRequest, DescribeClustersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClustersCommandInput extends DescribeClustersRequest {
}
export interface DescribeClustersCommandOutput extends DescribeClustersResponse, __MetadataBearer {
}
/**
 * <p>Gets information about AWS CloudHSM clusters.</p>
 *          <p>This is a paginated operation, which means that each response might contain only a
 *       subset of all the clusters. When the response contains only a subset of clusters, it includes
 *       a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code>
 *       request to get more clusters. When you receive a response with no <code>NextToken</code> (or
 *       an empty or null value), that means there are no more clusters to get.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, DescribeClustersCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, DescribeClustersCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeClustersCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClustersCommand extends $Command<DescribeClustersCommandInput, DescribeClustersCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: DescribeClustersCommandInput;
    constructor(input: DescribeClustersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClustersCommandInput, DescribeClustersCommandOutput>;
    private serialize;
    private deserialize;
}
