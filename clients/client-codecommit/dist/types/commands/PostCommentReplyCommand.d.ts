import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { PostCommentReplyInput, PostCommentReplyOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PostCommentReplyCommandInput extends PostCommentReplyInput {
}
export interface PostCommentReplyCommandOutput extends PostCommentReplyOutput, __MetadataBearer {
}
/**
 * <p>Posts a comment in reply to an existing comment on a comparison between commits or a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PostCommentReplyCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PostCommentReplyCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new PostCommentReplyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostCommentReplyCommandInput} for command's `input` shape.
 * @see {@link PostCommentReplyCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PostCommentReplyCommand extends $Command<PostCommentReplyCommandInput, PostCommentReplyCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: PostCommentReplyCommandInput;
    constructor(input: PostCommentReplyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PostCommentReplyCommandInput, PostCommentReplyCommandOutput>;
    private serialize;
    private deserialize;
}
