import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DeleteCommentRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCommentCommandInput extends DeleteCommentRequest {
}
export interface DeleteCommentCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified comment from the document version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteCommentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteCommentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DeleteCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCommentCommandInput} for command's `input` shape.
 * @see {@link DeleteCommentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCommentCommand extends $Command<DeleteCommentCommandInput, DeleteCommentCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DeleteCommentCommandInput;
    constructor(input: DeleteCommentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCommentCommandInput, DeleteCommentCommandOutput>;
    private serialize;
    private deserialize;
}
