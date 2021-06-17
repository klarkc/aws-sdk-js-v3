import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreatePlacementGroupRequest, CreatePlacementGroupResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePlacementGroupCommandInput extends CreatePlacementGroupRequest {
}
export interface CreatePlacementGroupCommandOutput extends CreatePlacementGroupResult, __MetadataBearer {
}
/**
 * <p>Creates a placement group in which to launch instances. The strategy of the placement
 *             group determines how the instances are organized within the group. </p>
 *         <p>A <code>cluster</code> placement group is a logical grouping of instances within a
 *             single Availability Zone that benefit from low network latency, high network throughput.
 *             A <code>spread</code> placement group places instances on distinct hardware. A
 *                 <code>partition</code> placement group places groups of instances in different
 *             partitions, where instances in one partition do not share the same hardware with
 *             instances in another partition.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreatePlacementGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreatePlacementGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreatePlacementGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlacementGroupCommandInput} for command's `input` shape.
 * @see {@link CreatePlacementGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePlacementGroupCommand extends $Command<CreatePlacementGroupCommandInput, CreatePlacementGroupCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreatePlacementGroupCommandInput;
    constructor(input: CreatePlacementGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlacementGroupCommandInput, CreatePlacementGroupCommandOutput>;
    private serialize;
    private deserialize;
}
