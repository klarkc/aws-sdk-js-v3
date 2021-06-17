import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { SetRepositoryPolicyRequest, SetRepositoryPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetRepositoryPolicyCommandInput extends SetRepositoryPolicyRequest {
}
export interface SetRepositoryPolicyCommandOutput extends SetRepositoryPolicyResponse, __MetadataBearer {
}
/**
 * <p>Applies a repository policy to the specified repository to control access permissions.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository
 *                 Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, SetRepositoryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, SetRepositoryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new SetRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetRepositoryPolicyCommandInput} for command's `input` shape.
 * @see {@link SetRepositoryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetRepositoryPolicyCommand extends $Command<SetRepositoryPolicyCommandInput, SetRepositoryPolicyCommandOutput, ECRClientResolvedConfig> {
    readonly input: SetRepositoryPolicyCommandInput;
    constructor(input: SetRepositoryPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetRepositoryPolicyCommandInput, SetRepositoryPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
