import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReleaseHostsRequest, ReleaseHostsResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ReleaseHostsCommandInput extends ReleaseHostsRequest {
}
export interface ReleaseHostsCommandOutput extends ReleaseHostsResult, __MetadataBearer {
}
/**
 * <p>When you no longer want to use an On-Demand Dedicated Host it can be released.
 *             On-Demand billing is stopped and the host goes into <code>released</code> state. The
 *             host ID of Dedicated Hosts that have been released can no longer be specified in another
 *             request, for example, to modify the host. You must stop or terminate all instances on a
 *             host before it can be released.</p>
 *         <p>When Dedicated Hosts are released, it may take some time for them to stop counting
 *             toward your limit and you may receive capacity errors when trying to allocate new
 *             Dedicated Hosts. Wait a few minutes and then try again.</p>
 *         <p>Released hosts still appear in a <a>DescribeHosts</a> response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReleaseHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReleaseHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReleaseHostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReleaseHostsCommandInput} for command's `input` shape.
 * @see {@link ReleaseHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReleaseHostsCommand extends $Command<ReleaseHostsCommandInput, ReleaseHostsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReleaseHostsCommandInput;
    constructor(input: ReleaseHostsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReleaseHostsCommandInput, ReleaseHostsCommandOutput>;
    private serialize;
    private deserialize;
}
