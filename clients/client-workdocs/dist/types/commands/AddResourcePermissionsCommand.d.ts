import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { AddResourcePermissionsRequest, AddResourcePermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddResourcePermissionsCommandInput extends AddResourcePermissionsRequest {
}
export interface AddResourcePermissionsCommandOutput extends AddResourcePermissionsResponse, __MetadataBearer {
}
/**
 * <p>Creates a set of permissions for the specified folder or document. The resource
 *             permissions are overwritten if the principals already have different
 *             permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, AddResourcePermissionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, AddResourcePermissionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new AddResourcePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddResourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link AddResourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddResourcePermissionsCommand extends $Command<AddResourcePermissionsCommandInput, AddResourcePermissionsCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: AddResourcePermissionsCommandInput;
    constructor(input: AddResourcePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddResourcePermissionsCommandInput, AddResourcePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
