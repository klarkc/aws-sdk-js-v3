import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DeleteFolderContentsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFolderContentsCommandInput extends DeleteFolderContentsRequest {
}
export interface DeleteFolderContentsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the contents of the specified folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteFolderContentsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteFolderContentsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DeleteFolderContentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFolderContentsCommandInput} for command's `input` shape.
 * @see {@link DeleteFolderContentsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFolderContentsCommand extends $Command<DeleteFolderContentsCommandInput, DeleteFolderContentsCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DeleteFolderContentsCommandInput;
    constructor(input: DeleteFolderContentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFolderContentsCommandInput, DeleteFolderContentsCommandOutput>;
    private serialize;
    private deserialize;
}
