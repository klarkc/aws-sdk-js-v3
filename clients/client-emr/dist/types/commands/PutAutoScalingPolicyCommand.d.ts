import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { PutAutoScalingPolicyInput, PutAutoScalingPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAutoScalingPolicyCommandInput extends PutAutoScalingPolicyInput {
}
export interface PutAutoScalingPolicyCommandOutput extends PutAutoScalingPolicyOutput, __MetadataBearer {
}
/**
 * <p>Creates or updates an automatic scaling policy for a core instance group or task
 *          instance group in an Amazon EMR cluster. The automatic scaling policy defines how an
 *          instance group dynamically adds and terminates EC2 instances in response to the value of a
 *          CloudWatch metric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutAutoScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutAutoScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new PutAutoScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAutoScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAutoScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAutoScalingPolicyCommand extends $Command<PutAutoScalingPolicyCommandInput, PutAutoScalingPolicyCommandOutput, EMRClientResolvedConfig> {
    readonly input: PutAutoScalingPolicyCommandInput;
    constructor(input: PutAutoScalingPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAutoScalingPolicyCommandInput, PutAutoScalingPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
