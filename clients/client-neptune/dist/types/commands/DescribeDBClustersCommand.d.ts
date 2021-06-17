import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBClusterMessage, DescribeDBClustersMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBClustersCommandInput extends DescribeDBClustersMessage {
}
export interface DescribeDBClustersCommandOutput extends DBClusterMessage, __MetadataBearer {
}
/**
 * <p>Returns information about provisioned DB clusters, and supports
 *       pagination.</p>
 *
 *          <note>
 *             <p>This operation can also return information for Amazon RDS clusters
 *     and Amazon DocDB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBClustersCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBClustersCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClustersCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBClustersCommand extends $Command<DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DescribeDBClustersCommandInput;
    constructor(input: DescribeDBClustersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput>;
    private serialize;
    private deserialize;
}
