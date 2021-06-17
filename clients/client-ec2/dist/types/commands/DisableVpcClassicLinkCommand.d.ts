import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisableVpcClassicLinkRequest, DisableVpcClassicLinkResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableVpcClassicLinkCommandInput extends DisableVpcClassicLinkRequest {
}
export interface DisableVpcClassicLinkCommandOutput extends DisableVpcClassicLinkResult, __MetadataBearer {
}
/**
 * <p>Disables ClassicLink for a VPC. You cannot disable ClassicLink for a VPC that has EC2-Classic instances linked to it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableVpcClassicLinkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableVpcClassicLinkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableVpcClassicLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableVpcClassicLinkCommandInput} for command's `input` shape.
 * @see {@link DisableVpcClassicLinkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableVpcClassicLinkCommand extends $Command<DisableVpcClassicLinkCommandInput, DisableVpcClassicLinkCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisableVpcClassicLinkCommandInput;
    constructor(input: DisableVpcClassicLinkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableVpcClassicLinkCommandInput, DisableVpcClassicLinkCommandOutput>;
    private serialize;
    private deserialize;
}
