import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeGlobalClustersMessage, GlobalClustersMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeGlobalClustersCommandInput extends DescribeGlobalClustersMessage {
}
export interface DescribeGlobalClustersCommandOutput extends GlobalClustersMessage, __MetadataBearer {
}
/**
 * <p>
 *         Returns information about Aurora global database clusters. This API supports pagination.
 *       </p>
 *          <p>
 *         For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the
 *         <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeGlobalClustersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeGlobalClustersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeGlobalClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalClustersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeGlobalClustersCommand extends $Command<DescribeGlobalClustersCommandInput, DescribeGlobalClustersCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeGlobalClustersCommandInput;
    constructor(input: DescribeGlobalClustersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGlobalClustersCommandInput, DescribeGlobalClustersCommandOutput>;
    private serialize;
    private deserialize;
}
