import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { PostCommentForPullRequestInput, PostCommentForPullRequestOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PostCommentForPullRequestCommandInput extends PostCommentForPullRequestInput {
}
export interface PostCommentForPullRequestCommandOutput extends PostCommentForPullRequestOutput, __MetadataBearer {
}
/**
 * <p>Posts a comment on a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PostCommentForPullRequestCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PostCommentForPullRequestCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new PostCommentForPullRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostCommentForPullRequestCommandInput} for command's `input` shape.
 * @see {@link PostCommentForPullRequestCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PostCommentForPullRequestCommand extends $Command<PostCommentForPullRequestCommandInput, PostCommentForPullRequestCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: PostCommentForPullRequestCommandInput;
    constructor(input: PostCommentForPullRequestCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PostCommentForPullRequestCommandInput, PostCommentForPullRequestCommandOutput>;
    private serialize;
    private deserialize;
}
