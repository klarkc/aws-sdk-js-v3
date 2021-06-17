import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateCommentInput, UpdateCommentOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCommentCommandInput extends UpdateCommentInput {
}
export interface UpdateCommentCommandOutput extends UpdateCommentOutput, __MetadataBearer {
}
/**
 * <p>Replaces the contents of a comment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateCommentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateCommentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateCommentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCommentCommand extends $Command<UpdateCommentCommandInput, UpdateCommentCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdateCommentCommandInput;
    constructor(input: UpdateCommentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCommentCommandInput, UpdateCommentCommandOutput>;
    private serialize;
    private deserialize;
}
