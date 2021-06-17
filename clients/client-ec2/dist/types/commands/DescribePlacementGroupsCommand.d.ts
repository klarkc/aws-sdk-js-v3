import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribePlacementGroupsRequest, DescribePlacementGroupsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePlacementGroupsCommandInput extends DescribePlacementGroupsRequest {
}
export interface DescribePlacementGroupsCommandOutput extends DescribePlacementGroupsResult, __MetadataBearer {
}
/**
 * <p>Describes the specified placement groups or all of your placement groups. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePlacementGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePlacementGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribePlacementGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlacementGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribePlacementGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePlacementGroupsCommand extends $Command<DescribePlacementGroupsCommandInput, DescribePlacementGroupsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribePlacementGroupsCommandInput;
    constructor(input: DescribePlacementGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePlacementGroupsCommandInput, DescribePlacementGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
