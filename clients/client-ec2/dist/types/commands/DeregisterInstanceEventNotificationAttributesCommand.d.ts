import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeregisterInstanceEventNotificationAttributesRequest, DeregisterInstanceEventNotificationAttributesResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterInstanceEventNotificationAttributesCommandInput extends DeregisterInstanceEventNotificationAttributesRequest {
}
export interface DeregisterInstanceEventNotificationAttributesCommandOutput extends DeregisterInstanceEventNotificationAttributesResult, __MetadataBearer {
}
/**
 * <p>Deregisters tag keys to prevent tags that have the specified tag keys from being included
 * 			in scheduled event notifications for resources in the Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeregisterInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterInstanceEventNotificationAttributesCommand extends $Command<DeregisterInstanceEventNotificationAttributesCommandInput, DeregisterInstanceEventNotificationAttributesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeregisterInstanceEventNotificationAttributesCommandInput;
    constructor(input: DeregisterInstanceEventNotificationAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterInstanceEventNotificationAttributesCommandInput, DeregisterInstanceEventNotificationAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
