import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterParameterGroupDetails, DescribeDBClusterParametersMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBClusterParametersCommandInput extends DescribeDBClusterParametersMessage {
}
export interface DescribeDBClusterParametersCommandOutput extends DBClusterParameterGroupDetails, __MetadataBearer {
}
/**
 * <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterParametersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterParametersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBClusterParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBClusterParametersCommand extends $Command<DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBClusterParametersCommandInput;
    constructor(input: DescribeDBClusterParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput>;
    private serialize;
    private deserialize;
}
