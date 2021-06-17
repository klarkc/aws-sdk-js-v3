import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeleteCommentContentInput, DeleteCommentContentOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCommentContentCommandInput extends DeleteCommentContentInput {
}
export interface DeleteCommentContentCommandOutput extends DeleteCommentContentOutput, __MetadataBearer {
}
/**
 * <p>Deletes the content of a comment made on a change, file, or commit in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteCommentContentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteCommentContentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DeleteCommentContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCommentContentCommandInput} for command's `input` shape.
 * @see {@link DeleteCommentContentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCommentContentCommand extends $Command<DeleteCommentContentCommandInput, DeleteCommentContentCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DeleteCommentContentCommandInput;
    constructor(input: DeleteCommentContentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCommentContentCommandInput, DeleteCommentContentCommandOutput>;
    private serialize;
    private deserialize;
}
