import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetCommentInput, GetCommentOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCommentCommandInput extends GetCommentInput {
}
export interface GetCommentCommandOutput extends GetCommentOutput, __MetadataBearer {
}
/**
 * <p>Returns the content of a comment made on a change, file, or commit in a repository. </p>
 *             <note>
 *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
 *         reactions from active identities, use GetCommentReactions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommentCommandInput} for command's `input` shape.
 * @see {@link GetCommentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCommentCommand extends $Command<GetCommentCommandInput, GetCommentCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetCommentCommandInput;
    constructor(input: GetCommentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCommentCommandInput, GetCommentCommandOutput>;
    private serialize;
    private deserialize;
}
