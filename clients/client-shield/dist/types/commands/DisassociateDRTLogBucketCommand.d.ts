import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DisassociateDRTLogBucketRequest, DisassociateDRTLogBucketResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateDRTLogBucketCommandInput extends DisassociateDRTLogBucketRequest {
}
export interface DisassociateDRTLogBucketCommandOutput extends DisassociateDRTLogBucketResponse, __MetadataBearer {
}
/**
 * <p>Removes the DDoS Response Team's (DRT) access to the specified Amazon S3 bucket containing your AWS WAF logs.</p>
 * 	        <p>To make a <code>DisassociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTLogBucket</code> request to remove this access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisassociateDRTLogBucketCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisassociateDRTLogBucketCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DisassociateDRTLogBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDRTLogBucketCommandInput} for command's `input` shape.
 * @see {@link DisassociateDRTLogBucketCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateDRTLogBucketCommand extends $Command<DisassociateDRTLogBucketCommandInput, DisassociateDRTLogBucketCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DisassociateDRTLogBucketCommandInput;
    constructor(input: DisassociateDRTLogBucketCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateDRTLogBucketCommandInput, DisassociateDRTLogBucketCommandOutput>;
    private serialize;
    private deserialize;
}
