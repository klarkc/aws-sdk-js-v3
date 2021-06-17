import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { GetManagedScalingPolicyInput, GetManagedScalingPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetManagedScalingPolicyCommandInput extends GetManagedScalingPolicyInput {
}
export interface GetManagedScalingPolicyCommandOutput extends GetManagedScalingPolicyOutput, __MetadataBearer {
}
/**
 * <p>Fetches the attached managed scaling policy for an Amazon EMR cluster. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetManagedScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetManagedScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new GetManagedScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetManagedScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link GetManagedScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetManagedScalingPolicyCommand extends $Command<GetManagedScalingPolicyCommandInput, GetManagedScalingPolicyCommandOutput, EMRClientResolvedConfig> {
    readonly input: GetManagedScalingPolicyCommandInput;
    constructor(input: GetManagedScalingPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetManagedScalingPolicyCommandInput, GetManagedScalingPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
