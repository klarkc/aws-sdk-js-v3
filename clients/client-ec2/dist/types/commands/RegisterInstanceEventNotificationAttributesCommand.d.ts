import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RegisterInstanceEventNotificationAttributesRequest, RegisterInstanceEventNotificationAttributesResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterInstanceEventNotificationAttributesCommandInput extends RegisterInstanceEventNotificationAttributesRequest {
}
export interface RegisterInstanceEventNotificationAttributesCommandOutput extends RegisterInstanceEventNotificationAttributesResult, __MetadataBearer {
}
/**
 * <p>Registers a set of tag keys to include in scheduled event notifications for your resources.
 *    		</p>
 *          <p>To remove tags, use .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RegisterInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link RegisterInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterInstanceEventNotificationAttributesCommand extends $Command<RegisterInstanceEventNotificationAttributesCommandInput, RegisterInstanceEventNotificationAttributesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RegisterInstanceEventNotificationAttributesCommandInput;
    constructor(input: RegisterInstanceEventNotificationAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterInstanceEventNotificationAttributesCommandInput, RegisterInstanceEventNotificationAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
