import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceEventNotificationAttributesRequest, DescribeInstanceEventNotificationAttributesResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInstanceEventNotificationAttributesCommandInput extends DescribeInstanceEventNotificationAttributesRequest {
}
export interface DescribeInstanceEventNotificationAttributesCommandOutput extends DescribeInstanceEventNotificationAttributesResult, __MetadataBearer {
}
/**
 * <p>Describes the tag keys that are registered to appear in scheduled event notifications for
 *       	resources in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInstanceEventNotificationAttributesCommand extends $Command<DescribeInstanceEventNotificationAttributesCommandInput, DescribeInstanceEventNotificationAttributesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeInstanceEventNotificationAttributesCommandInput;
    constructor(input: DescribeInstanceEventNotificationAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceEventNotificationAttributesCommandInput, DescribeInstanceEventNotificationAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
