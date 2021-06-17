import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeMovingAddressesRequest, DescribeMovingAddressesResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMovingAddressesCommandInput extends DescribeMovingAddressesRequest {
}
export interface DescribeMovingAddressesCommandOutput extends DescribeMovingAddressesResult, __MetadataBearer {
}
/**
 * <p>Describes your Elastic IP addresses that are being moved to the EC2-VPC platform, or that are being restored to the EC2-Classic platform. This request does not return information about any other Elastic IP addresses in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeMovingAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeMovingAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeMovingAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMovingAddressesCommandInput} for command's `input` shape.
 * @see {@link DescribeMovingAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMovingAddressesCommand extends $Command<DescribeMovingAddressesCommandInput, DescribeMovingAddressesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeMovingAddressesCommandInput;
    constructor(input: DescribeMovingAddressesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMovingAddressesCommandInput, DescribeMovingAddressesCommandOutput>;
    private serialize;
    private deserialize;
}
