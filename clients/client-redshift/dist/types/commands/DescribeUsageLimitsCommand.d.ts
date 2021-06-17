import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeUsageLimitsMessage, UsageLimitList } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUsageLimitsCommandInput extends DescribeUsageLimitsMessage {
}
export interface DescribeUsageLimitsCommandOutput extends UsageLimitList, __MetadataBearer {
}
/**
 * <p>Shows usage limits on a cluster.
 *             Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p>
 *         <ul>
 *             <li>
 *                <p>If usage limit identifier, cluster identifier, and feature type are not provided,
 *                 then all usage limit objects for the current account in the current region are returned.</p>
 *             </li>
 *             <li>
 *                <p>If usage limit identifier is provided,
 *                 then the corresponding usage limit object is returned.</p>
 *             </li>
 *             <li>
 *                <p>If cluster identifier is provided,
 *                 then all usage limit objects for the specified cluster are returned.</p>
 *             </li>
 *             <li>
 *                <p>If cluster identifier and feature type are provided,
 *                 then all usage limit objects for the combination of cluster and feature are returned.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeUsageLimitsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeUsageLimitsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeUsageLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUsageLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeUsageLimitsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUsageLimitsCommand extends $Command<DescribeUsageLimitsCommandInput, DescribeUsageLimitsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeUsageLimitsCommandInput;
    constructor(input: DescribeUsageLimitsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUsageLimitsCommandInput, DescribeUsageLimitsCommandOutput>;
    private serialize;
    private deserialize;
}
