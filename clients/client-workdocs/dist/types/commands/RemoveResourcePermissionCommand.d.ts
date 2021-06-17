import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { RemoveResourcePermissionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveResourcePermissionCommandInput extends RemoveResourcePermissionRequest {
}
export interface RemoveResourcePermissionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the permission for the specified principal from the specified
 *             resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, RemoveResourcePermissionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, RemoveResourcePermissionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new RemoveResourcePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveResourcePermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveResourcePermissionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveResourcePermissionCommand extends $Command<RemoveResourcePermissionCommandInput, RemoveResourcePermissionCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: RemoveResourcePermissionCommandInput;
    constructor(input: RemoveResourcePermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveResourcePermissionCommandInput, RemoveResourcePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
