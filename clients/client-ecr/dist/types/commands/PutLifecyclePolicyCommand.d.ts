import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { PutLifecyclePolicyRequest, PutLifecyclePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutLifecyclePolicyCommandInput extends PutLifecyclePolicyRequest {
}
export interface PutLifecyclePolicyCommandOutput extends PutLifecyclePolicyResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates the lifecycle policy for the specified repository. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle Policy
 *                 Template</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutLifecyclePolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutLifecyclePolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link PutLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutLifecyclePolicyCommand extends $Command<PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput, ECRClientResolvedConfig> {
    readonly input: PutLifecyclePolicyCommandInput;
    constructor(input: PutLifecyclePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
