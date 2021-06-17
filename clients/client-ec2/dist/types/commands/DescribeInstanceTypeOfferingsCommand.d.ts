import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceTypeOfferingsRequest } from "../models/models_2";
import { DescribeInstanceTypeOfferingsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInstanceTypeOfferingsCommandInput extends DescribeInstanceTypeOfferingsRequest {
}
export interface DescribeInstanceTypeOfferingsCommandOutput extends DescribeInstanceTypeOfferingsResult, __MetadataBearer {
}
/**
 * <p>Returns a list of all instance types offered. The results can be filtered by location (Region or Availability
 *    Zone). If no location is specified, the instance types offered in the current Region are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceTypeOfferingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceTypeOfferingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceTypeOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceTypeOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceTypeOfferingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInstanceTypeOfferingsCommand extends $Command<DescribeInstanceTypeOfferingsCommandInput, DescribeInstanceTypeOfferingsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeInstanceTypeOfferingsCommandInput;
    constructor(input: DescribeInstanceTypeOfferingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceTypeOfferingsCommandInput, DescribeInstanceTypeOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
