import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetCommentReactionsInput, GetCommentReactionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCommentReactionsCommandInput extends GetCommentReactionsInput {
}
export interface GetCommentReactionsCommandOutput extends GetCommentReactionsOutput, __MetadataBearer {
}
/**
 * <p>Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommentReactionsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommentReactionsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetCommentReactionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommentReactionsCommandInput} for command's `input` shape.
 * @see {@link GetCommentReactionsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCommentReactionsCommand extends $Command<GetCommentReactionsCommandInput, GetCommentReactionsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetCommentReactionsCommandInput;
    constructor(input: GetCommentReactionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCommentReactionsCommandInput, GetCommentReactionsCommandOutput>;
    private serialize;
    private deserialize;
}
