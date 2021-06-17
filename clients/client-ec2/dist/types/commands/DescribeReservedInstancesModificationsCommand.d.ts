import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeReservedInstancesModificationsRequest, DescribeReservedInstancesModificationsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReservedInstancesModificationsCommandInput extends DescribeReservedInstancesModificationsRequest {
}
export interface DescribeReservedInstancesModificationsCommandOutput extends DescribeReservedInstancesModificationsResult, __MetadataBearer {
}
/**
 * <p>Describes the modifications made to your Reserved Instances. If no parameter is specified, information about all your Reserved Instances modification requests is returned. If a modification ID is specified, only information about the specific modification is returned.</p>
 *    	     <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeReservedInstancesModificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeReservedInstancesModificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeReservedInstancesModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedInstancesModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedInstancesModificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReservedInstancesModificationsCommand extends $Command<DescribeReservedInstancesModificationsCommandInput, DescribeReservedInstancesModificationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeReservedInstancesModificationsCommandInput;
    constructor(input: DescribeReservedInstancesModificationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedInstancesModificationsCommandInput, DescribeReservedInstancesModificationsCommandOutput>;
    private serialize;
    private deserialize;
}
