import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { ListPullRequestsInput, ListPullRequestsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPullRequestsCommandInput extends ListPullRequestsInput {
}
export interface ListPullRequestsCommandOutput extends ListPullRequestsOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of pull requests for a specified repository. The return list can be refined by pull request
 *         status or pull request author ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListPullRequestsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListPullRequestsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new ListPullRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPullRequestsCommandInput} for command's `input` shape.
 * @see {@link ListPullRequestsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPullRequestsCommand extends $Command<ListPullRequestsCommandInput, ListPullRequestsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: ListPullRequestsCommandInput;
    constructor(input: ListPullRequestsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPullRequestsCommandInput, ListPullRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
