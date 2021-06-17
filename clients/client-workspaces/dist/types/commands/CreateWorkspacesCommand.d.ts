import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { CreateWorkspacesRequest, CreateWorkspacesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWorkspacesCommandInput extends CreateWorkspacesRequest {
}
export interface CreateWorkspacesCommandOutput extends CreateWorkspacesResult, __MetadataBearer {
}
/**
 * <p>Creates one or more WorkSpaces.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces are created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CreateWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkspacesCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWorkspacesCommand extends $Command<CreateWorkspacesCommandInput, CreateWorkspacesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: CreateWorkspacesCommandInput;
    constructor(input: CreateWorkspacesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorkspacesCommandInput, CreateWorkspacesCommandOutput>;
    private serialize;
    private deserialize;
}
