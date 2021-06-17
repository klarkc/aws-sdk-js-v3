import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DeleteFolderRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFolderCommandInput extends DeleteFolderRequest {
}
export interface DeleteFolderCommandOutput extends __MetadataBearer {
}
/**
 * <p>Permanently deletes the specified folder and its contents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DeleteFolderCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DeleteFolderCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DeleteFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFolderCommandInput} for command's `input` shape.
 * @see {@link DeleteFolderCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFolderCommand extends $Command<DeleteFolderCommandInput, DeleteFolderCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DeleteFolderCommandInput;
    constructor(input: DeleteFolderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFolderCommandInput, DeleteFolderCommandOutput>;
    private serialize;
    private deserialize;
}
