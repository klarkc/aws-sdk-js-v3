import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { RemoveAllResourcePermissionsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveAllResourcePermissionsCommandInput extends RemoveAllResourcePermissionsRequest {
}
export interface RemoveAllResourcePermissionsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes all the permissions from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, RemoveAllResourcePermissionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, RemoveAllResourcePermissionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new RemoveAllResourcePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAllResourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link RemoveAllResourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveAllResourcePermissionsCommand extends $Command<RemoveAllResourcePermissionsCommandInput, RemoveAllResourcePermissionsCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: RemoveAllResourcePermissionsCommandInput;
    constructor(input: RemoveAllResourcePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveAllResourcePermissionsCommandInput, RemoveAllResourcePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
