import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListGitHubAccountTokenNamesInput, ListGitHubAccountTokenNamesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGitHubAccountTokenNamesCommandInput extends ListGitHubAccountTokenNamesInput {
}
export interface ListGitHubAccountTokenNamesCommandOutput extends ListGitHubAccountTokenNamesOutput, __MetadataBearer {
}
/**
 * <p>Lists the names of stored connections to GitHub accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListGitHubAccountTokenNamesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListGitHubAccountTokenNamesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListGitHubAccountTokenNamesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGitHubAccountTokenNamesCommandInput} for command's `input` shape.
 * @see {@link ListGitHubAccountTokenNamesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGitHubAccountTokenNamesCommand extends $Command<ListGitHubAccountTokenNamesCommandInput, ListGitHubAccountTokenNamesCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListGitHubAccountTokenNamesCommandInput;
    constructor(input: ListGitHubAccountTokenNamesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGitHubAccountTokenNamesCommandInput, ListGitHubAccountTokenNamesCommandOutput>;
    private serialize;
    private deserialize;
}
