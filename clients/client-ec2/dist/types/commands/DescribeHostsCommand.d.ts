import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeHostsRequest, DescribeHostsResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeHostsCommandInput extends DescribeHostsRequest {
}
export interface DescribeHostsCommandOutput extends DescribeHostsResult, __MetadataBearer {
}
/**
 * <p>Describes the specified Dedicated Hosts or all your Dedicated Hosts.</p>
 *         <p>The results describe only the Dedicated Hosts in the Region you're currently using.
 *             All listed instances consume capacity on your Dedicated Host. Dedicated Hosts that have
 *             recently been released are listed with the state <code>released</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeHostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHostsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeHostsCommand extends $Command<DescribeHostsCommandInput, DescribeHostsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeHostsCommandInput;
    constructor(input: DescribeHostsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHostsCommandInput, DescribeHostsCommandOutput>;
    private serialize;
    private deserialize;
}
