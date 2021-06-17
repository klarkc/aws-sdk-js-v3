import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { CreateCommentRequest, CreateCommentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCommentCommandInput extends CreateCommentRequest {
}
export interface CreateCommentCommandOutput extends CreateCommentResponse, __MetadataBearer {
}
/**
 * <p>Adds a new comment to the specified document version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateCommentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateCommentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new CreateCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCommentCommandInput} for command's `input` shape.
 * @see {@link CreateCommentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCommentCommand extends $Command<CreateCommentCommandInput, CreateCommentCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: CreateCommentCommandInput;
    constructor(input: CreateCommentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCommentCommandInput, CreateCommentCommandOutput>;
    private serialize;
    private deserialize;
}
