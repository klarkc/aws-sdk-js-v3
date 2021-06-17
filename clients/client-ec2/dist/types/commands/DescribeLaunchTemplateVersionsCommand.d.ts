import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLaunchTemplateVersionsRequest, DescribeLaunchTemplateVersionsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLaunchTemplateVersionsCommandInput extends DescribeLaunchTemplateVersionsRequest {
}
export interface DescribeLaunchTemplateVersionsCommandOutput extends DescribeLaunchTemplateVersionsResult, __MetadataBearer {
}
/**
 * <p>Describes one or more versions of a specified launch template. You can describe all
 *             versions, individual versions, or a range of versions. You can also describe all the
 *             latest versions or all the default versions of all the launch templates in your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLaunchTemplateVersionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLaunchTemplateVersionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLaunchTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLaunchTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLaunchTemplateVersionsCommand extends $Command<DescribeLaunchTemplateVersionsCommandInput, DescribeLaunchTemplateVersionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLaunchTemplateVersionsCommandInput;
    constructor(input: DescribeLaunchTemplateVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLaunchTemplateVersionsCommandInput, DescribeLaunchTemplateVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
