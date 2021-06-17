import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { DescribeClusterRequest, DescribeClusterResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClusterCommandInput extends DescribeClusterRequest {
}
export interface DescribeClusterCommandOutput extends DescribeClusterResult, __MetadataBearer {
}
/**
 * <p>Returns information about a specific cluster including shipping information, cluster
 *       status, and other important metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClusterCommand extends $Command<DescribeClusterCommandInput, DescribeClusterCommandOutput, SnowballClientResolvedConfig> {
    readonly input: DescribeClusterCommandInput;
    constructor(input: DescribeClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterCommandInput, DescribeClusterCommandOutput>;
    private serialize;
    private deserialize;
}
