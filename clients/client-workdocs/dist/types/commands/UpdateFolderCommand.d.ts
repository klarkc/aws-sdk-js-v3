import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { UpdateFolderRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFolderCommandInput extends UpdateFolderRequest {
}
export interface UpdateFolderCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the specified attributes of the specified folder. The user must have access
 *             to both the folder and its parent folder, if applicable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, UpdateFolderCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, UpdateFolderCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new UpdateFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFolderCommandInput} for command's `input` shape.
 * @see {@link UpdateFolderCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFolderCommand extends $Command<UpdateFolderCommandInput, UpdateFolderCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: UpdateFolderCommandInput;
    constructor(input: UpdateFolderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFolderCommandInput, UpdateFolderCommandOutput>;
    private serialize;
    private deserialize;
}
