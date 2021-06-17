import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { RemoveManagedScalingPolicyInput, RemoveManagedScalingPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveManagedScalingPolicyCommandInput extends RemoveManagedScalingPolicyInput {
}
export interface RemoveManagedScalingPolicyCommandOutput extends RemoveManagedScalingPolicyOutput, __MetadataBearer {
}
/**
 * <p> Removes a managed scaling policy from a specified EMR cluster. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RemoveManagedScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, RemoveManagedScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new RemoveManagedScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveManagedScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link RemoveManagedScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveManagedScalingPolicyCommand extends $Command<RemoveManagedScalingPolicyCommandInput, RemoveManagedScalingPolicyCommandOutput, EMRClientResolvedConfig> {
    readonly input: RemoveManagedScalingPolicyCommandInput;
    constructor(input: RemoveManagedScalingPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveManagedScalingPolicyCommandInput, RemoveManagedScalingPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
