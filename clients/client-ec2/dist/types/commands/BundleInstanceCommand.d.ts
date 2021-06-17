import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { BundleInstanceRequest, BundleInstanceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BundleInstanceCommandInput extends BundleInstanceRequest {
}
export interface BundleInstanceCommandOutput extends BundleInstanceResult, __MetadataBearer {
}
/**
 * <p>Bundles an Amazon instance store-backed Windows instance.</p>
 *          <p>During bundling, only the root device volume (C:\) is bundled. Data on other instance store volumes is not preserved.</p>
 *          <note>
 *             <p>This action is not applicable for Linux/Unix instances or Windows instances that are backed by Amazon EBS.</p>
 * 			      </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, BundleInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, BundleInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new BundleInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BundleInstanceCommandInput} for command's `input` shape.
 * @see {@link BundleInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BundleInstanceCommand extends $Command<BundleInstanceCommandInput, BundleInstanceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: BundleInstanceCommandInput;
    constructor(input: BundleInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BundleInstanceCommandInput, BundleInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
