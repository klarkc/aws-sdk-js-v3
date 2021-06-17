import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetPullRequestApprovalStatesInput, GetPullRequestApprovalStatesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPullRequestApprovalStatesCommandInput extends GetPullRequestApprovalStatesInput {
}
export interface GetPullRequestApprovalStatesCommandOutput extends GetPullRequestApprovalStatesOutput, __MetadataBearer {
}
/**
 * <p>Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more
 *         approval rules applied to them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetPullRequestApprovalStatesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetPullRequestApprovalStatesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetPullRequestApprovalStatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPullRequestApprovalStatesCommandInput} for command's `input` shape.
 * @see {@link GetPullRequestApprovalStatesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPullRequestApprovalStatesCommand extends $Command<GetPullRequestApprovalStatesCommandInput, GetPullRequestApprovalStatesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetPullRequestApprovalStatesCommandInput;
    constructor(input: GetPullRequestApprovalStatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPullRequestApprovalStatesCommandInput, GetPullRequestApprovalStatesCommandOutput>;
    private serialize;
    private deserialize;
}
