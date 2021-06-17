import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { DisassociateResourceSharePermissionRequest, DisassociateResourceSharePermissionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateResourceSharePermissionCommandInput extends DisassociateResourceSharePermissionRequest {
}
export interface DisassociateResourceSharePermissionCommandOutput extends DisassociateResourceSharePermissionResponse, __MetadataBearer {
}
/**
 * <p>Disassociates an AWS RAM permission from a resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DisassociateResourceSharePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DisassociateResourceSharePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new DisassociateResourceSharePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResourceSharePermissionCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceSharePermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateResourceSharePermissionCommand extends $Command<DisassociateResourceSharePermissionCommandInput, DisassociateResourceSharePermissionCommandOutput, RAMClientResolvedConfig> {
    readonly input: DisassociateResourceSharePermissionCommandInput;
    constructor(input: DisassociateResourceSharePermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateResourceSharePermissionCommandInput, DisassociateResourceSharePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
