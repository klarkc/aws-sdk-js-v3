import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotDatafeedSubscriptionRequest, DescribeSpotDatafeedSubscriptionResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSpotDatafeedSubscriptionCommandInput extends DescribeSpotDatafeedSubscriptionRequest {
}
export interface DescribeSpotDatafeedSubscriptionCommandOutput extends DescribeSpotDatafeedSubscriptionResult, __MetadataBearer {
}
/**
 * <p>Describes the data feed for Spot Instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot
 *                 Instance data feed</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotDatafeedSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotDatafeedSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotDatafeedSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotDatafeedSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotDatafeedSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSpotDatafeedSubscriptionCommand extends $Command<DescribeSpotDatafeedSubscriptionCommandInput, DescribeSpotDatafeedSubscriptionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSpotDatafeedSubscriptionCommandInput;
    constructor(input: DescribeSpotDatafeedSubscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSpotDatafeedSubscriptionCommandInput, DescribeSpotDatafeedSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
