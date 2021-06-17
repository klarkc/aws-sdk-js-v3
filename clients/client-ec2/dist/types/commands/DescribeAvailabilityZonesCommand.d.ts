import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeAvailabilityZonesRequest, DescribeAvailabilityZonesResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAvailabilityZonesCommandInput extends DescribeAvailabilityZonesRequest {
}
export interface DescribeAvailabilityZonesCommandOutput extends DescribeAvailabilityZonesResult, __MetadataBearer {
}
/**
 * <p>Describes the Availability Zones, Local Zones, and Wavelength Zones that are available to
 *       you. If there is an event impacting a zone, you can use this request to view the state and any
 *       provided messages for that zone.</p>
 *          <p>For more information about Availability Zones, Local Zones, and Wavelength Zones, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">Regions, Zones and
 *         Outposts</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAvailabilityZonesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAvailabilityZonesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAvailabilityZonesCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailabilityZonesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAvailabilityZonesCommand extends $Command<DescribeAvailabilityZonesCommandInput, DescribeAvailabilityZonesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeAvailabilityZonesCommandInput;
    constructor(input: DescribeAvailabilityZonesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAvailabilityZonesCommandInput, DescribeAvailabilityZonesCommandOutput>;
    private serialize;
    private deserialize;
}
