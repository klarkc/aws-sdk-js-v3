import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotFleetRequestsRequest, DescribeSpotFleetRequestsResponse } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSpotFleetRequestsCommandInput extends DescribeSpotFleetRequestsRequest {
}
export interface DescribeSpotFleetRequestsCommandOutput extends DescribeSpotFleetRequestsResponse, __MetadataBearer {
}
/**
 * <p>Describes your Spot Fleet requests.</p>
 *          <p>Spot Fleet requests are deleted 48 hours after they are canceled and their instances are terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotFleetRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotFleetRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotFleetRequestsCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotFleetRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSpotFleetRequestsCommand extends $Command<DescribeSpotFleetRequestsCommandInput, DescribeSpotFleetRequestsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSpotFleetRequestsCommandInput;
    constructor(input: DescribeSpotFleetRequestsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSpotFleetRequestsCommandInput, DescribeSpotFleetRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
