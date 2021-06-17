import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetCommentsForComparedCommitInput, GetCommentsForComparedCommitOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCommentsForComparedCommitCommandInput extends GetCommentsForComparedCommitInput {
}
export interface GetCommentsForComparedCommitCommandOutput extends GetCommentsForComparedCommitOutput, __MetadataBearer {
}
/**
 * <p>Returns information about comments made on the comparison between two commits.</p>
 *         <note>
 *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
 *             reactions from active identities, use GetCommentReactions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentsForComparedCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentsForComparedCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetCommentsForComparedCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommentsForComparedCommitCommandInput} for command's `input` shape.
 * @see {@link GetCommentsForComparedCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCommentsForComparedCommitCommand extends $Command<GetCommentsForComparedCommitCommandInput, GetCommentsForComparedCommitCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetCommentsForComparedCommitCommandInput;
    constructor(input: GetCommentsForComparedCommitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCommentsForComparedCommitCommandInput, GetCommentsForComparedCommitCommandOutput>;
    private serialize;
    private deserialize;
}
