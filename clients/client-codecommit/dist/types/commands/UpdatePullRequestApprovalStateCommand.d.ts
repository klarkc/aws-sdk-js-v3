import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdatePullRequestApprovalStateInput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePullRequestApprovalStateCommandInput extends UpdatePullRequestApprovalStateInput {
}
export interface UpdatePullRequestApprovalStateCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestApprovalStateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestApprovalStateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdatePullRequestApprovalStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePullRequestApprovalStateCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestApprovalStateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePullRequestApprovalStateCommand extends $Command<UpdatePullRequestApprovalStateCommandInput, UpdatePullRequestApprovalStateCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdatePullRequestApprovalStateCommandInput;
    constructor(input: UpdatePullRequestApprovalStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePullRequestApprovalStateCommandInput, UpdatePullRequestApprovalStateCommandOutput>;
    private serialize;
    private deserialize;
}
