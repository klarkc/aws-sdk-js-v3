import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ImportWorkspaceImageRequest, ImportWorkspaceImageResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportWorkspaceImageCommandInput extends ImportWorkspaceImageRequest {
}
export interface ImportWorkspaceImageCommandOutput extends ImportWorkspaceImageResult, __MetadataBearer {
}
/**
 * <p>Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon
 *          WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your AWS
 *          account, and you must own the image. For more information about creating BYOL images, see
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">
 *             Bring Your Own Windows Desktop Licenses</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ImportWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ImportWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ImportWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link ImportWorkspaceImageCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportWorkspaceImageCommand extends $Command<ImportWorkspaceImageCommandInput, ImportWorkspaceImageCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ImportWorkspaceImageCommandInput;
    constructor(input: ImportWorkspaceImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportWorkspaceImageCommandInput, ImportWorkspaceImageCommandOutput>;
    private serialize;
    private deserialize;
}
