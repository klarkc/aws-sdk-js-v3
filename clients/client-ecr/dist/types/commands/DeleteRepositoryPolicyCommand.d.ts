import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DeleteRepositoryPolicyRequest, DeleteRepositoryPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRepositoryPolicyCommandInput extends DeleteRepositoryPolicyRequest {
}
export interface DeleteRepositoryPolicyCommandOutput extends DeleteRepositoryPolicyResponse, __MetadataBearer {
}
/**
 * <p>Deletes the repository policy associated with the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteRepositoryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteRepositoryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DeleteRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRepositoryPolicyCommand extends $Command<DeleteRepositoryPolicyCommandInput, DeleteRepositoryPolicyCommandOutput, ECRClientResolvedConfig> {
    readonly input: DeleteRepositoryPolicyCommandInput;
    constructor(input: DeleteRepositoryPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRepositoryPolicyCommandInput, DeleteRepositoryPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
