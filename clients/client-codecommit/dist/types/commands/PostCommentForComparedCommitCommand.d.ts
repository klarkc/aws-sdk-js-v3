import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { PostCommentForComparedCommitInput, PostCommentForComparedCommitOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PostCommentForComparedCommitCommandInput extends PostCommentForComparedCommitInput {
}
export interface PostCommentForComparedCommitCommandOutput extends PostCommentForComparedCommitOutput, __MetadataBearer {
}
/**
 * <p>Posts a comment on the comparison between two commits.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PostCommentForComparedCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PostCommentForComparedCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new PostCommentForComparedCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostCommentForComparedCommitCommandInput} for command's `input` shape.
 * @see {@link PostCommentForComparedCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PostCommentForComparedCommitCommand extends $Command<PostCommentForComparedCommitCommandInput, PostCommentForComparedCommitCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: PostCommentForComparedCommitCommandInput;
    constructor(input: PostCommentForComparedCommitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PostCommentForComparedCommitCommandInput, PostCommentForComparedCommitCommandOutput>;
    private serialize;
    private deserialize;
}
