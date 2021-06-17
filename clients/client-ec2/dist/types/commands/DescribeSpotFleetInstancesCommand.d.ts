import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotFleetInstancesRequest, DescribeSpotFleetInstancesResponse } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSpotFleetInstancesCommandInput extends DescribeSpotFleetInstancesRequest {
}
export interface DescribeSpotFleetInstancesCommandOutput extends DescribeSpotFleetInstancesResponse, __MetadataBearer {
}
/**
 * <p>Describes the running instances for the specified Spot Fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotFleetInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotFleetInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotFleetInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotFleetInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotFleetInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSpotFleetInstancesCommand extends $Command<DescribeSpotFleetInstancesCommandInput, DescribeSpotFleetInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSpotFleetInstancesCommandInput;
    constructor(input: DescribeSpotFleetInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSpotFleetInstancesCommandInput, DescribeSpotFleetInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
