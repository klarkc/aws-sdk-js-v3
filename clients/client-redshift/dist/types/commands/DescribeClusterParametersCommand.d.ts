import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterParameterGroupDetails, DescribeClusterParametersMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClusterParametersCommandInput extends DescribeClusterParametersMessage {
}
export interface DescribeClusterParametersCommandOutput extends ClusterParameterGroupDetails, __MetadataBearer {
}
/**
 * <p>Returns a detailed list of parameters contained within the specified Amazon Redshift
 *             parameter group. For each parameter the response includes information such as parameter
 *             name, description, data type, value, whether the parameter value is modifiable, and so
 *             on.</p>
 *         <p>You can specify <i>source</i> filter to retrieve parameters of only
 *             specific type. For example, to retrieve parameters that were modified by a user action
 *             such as from <a>ModifyClusterParameterGroup</a>, you can specify
 *                 <i>source</i> equal to <i>user</i>.</p>
 *         <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterParametersCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterParametersCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClusterParametersCommand extends $Command<DescribeClusterParametersCommandInput, DescribeClusterParametersCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterParametersCommandInput;
    constructor(input: DescribeClusterParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterParametersCommandInput, DescribeClusterParametersCommandOutput>;
    private serialize;
    private deserialize;
}
