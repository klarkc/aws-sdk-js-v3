import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { AssociateResourceSharePermissionRequest, AssociateResourceSharePermissionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateResourceSharePermissionCommandInput extends AssociateResourceSharePermissionRequest {
}
export interface AssociateResourceSharePermissionCommandOutput extends AssociateResourceSharePermissionResponse, __MetadataBearer {
}
/**
 * <p>Associates a permission with a resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AssociateResourceSharePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AssociateResourceSharePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new AssociateResourceSharePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResourceSharePermissionCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceSharePermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateResourceSharePermissionCommand extends $Command<AssociateResourceSharePermissionCommandInput, AssociateResourceSharePermissionCommandOutput, RAMClientResolvedConfig> {
    readonly input: AssociateResourceSharePermissionCommandInput;
    constructor(input: AssociateResourceSharePermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateResourceSharePermissionCommandInput, AssociateResourceSharePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
