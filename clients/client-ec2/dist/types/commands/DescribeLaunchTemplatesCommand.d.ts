import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLaunchTemplatesRequest, DescribeLaunchTemplatesResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLaunchTemplatesCommandInput extends DescribeLaunchTemplatesRequest {
}
export interface DescribeLaunchTemplatesCommandOutput extends DescribeLaunchTemplatesResult, __MetadataBearer {
}
/**
 * <p>Describes one or more launch templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLaunchTemplatesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLaunchTemplatesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLaunchTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLaunchTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchTemplatesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLaunchTemplatesCommand extends $Command<DescribeLaunchTemplatesCommandInput, DescribeLaunchTemplatesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLaunchTemplatesCommandInput;
    constructor(input: DescribeLaunchTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLaunchTemplatesCommandInput, DescribeLaunchTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
