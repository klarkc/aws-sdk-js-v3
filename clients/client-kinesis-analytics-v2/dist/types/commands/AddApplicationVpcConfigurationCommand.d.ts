import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { AddApplicationVpcConfigurationRequest, AddApplicationVpcConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddApplicationVpcConfigurationCommandInput extends AddApplicationVpcConfigurationRequest {
}
export interface AddApplicationVpcConfigurationCommandOutput extends AddApplicationVpcConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store
 *         and access resources securely.</p>
 *          <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p>
 *          <ul>
 *             <li>
 *                <p>VPC configurations are not supported for SQL applications.</p>
 *             </li>
 *             <li>
 *                <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the
 *            Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationVpcConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationVpcConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new AddApplicationVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link AddApplicationVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddApplicationVpcConfigurationCommand extends $Command<AddApplicationVpcConfigurationCommandInput, AddApplicationVpcConfigurationCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: AddApplicationVpcConfigurationCommandInput;
    constructor(input: AddApplicationVpcConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddApplicationVpcConfigurationCommandInput, AddApplicationVpcConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
