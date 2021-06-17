import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { DeleteGitHubAccountTokenInput, DeleteGitHubAccountTokenOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteGitHubAccountTokenCommandInput extends DeleteGitHubAccountTokenInput {
}
export interface DeleteGitHubAccountTokenCommandOutput extends DeleteGitHubAccountTokenOutput, __MetadataBearer {
}
/**
 * <p>Deletes a GitHub account connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteGitHubAccountTokenCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteGitHubAccountTokenCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new DeleteGitHubAccountTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGitHubAccountTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteGitHubAccountTokenCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteGitHubAccountTokenCommand extends $Command<DeleteGitHubAccountTokenCommandInput, DeleteGitHubAccountTokenCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: DeleteGitHubAccountTokenCommandInput;
    constructor(input: DeleteGitHubAccountTokenCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGitHubAccountTokenCommandInput, DeleteGitHubAccountTokenCommandOutput>;
    private serialize;
    private deserialize;
}
