import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBClusterMessage, DescribeDBClustersMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBClustersCommandInput extends DescribeDBClustersMessage {
}
export interface DescribeDBClustersCommandOutput extends DBClusterMessage, __MetadataBearer {
}
/**
 * <p>Returns information about provisioned Amazon DocumentDB clusters. This API
 *             operation supports pagination. For certain management features
 *             such as cluster and instance lifecycle management, Amazon DocumentDB leverages
 *             operational technology that is shared with Amazon RDS and Amazon
 *             Neptune. Use the <code>filterName=engine,Values=docdb</code> filter
 *             parameter to return only Amazon DocumentDB clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBClustersCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBClustersCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeDBClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClustersCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBClustersCommand extends $Command<DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DescribeDBClustersCommandInput;
    constructor(input: DescribeDBClustersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput>;
    private serialize;
    private deserialize;
}
