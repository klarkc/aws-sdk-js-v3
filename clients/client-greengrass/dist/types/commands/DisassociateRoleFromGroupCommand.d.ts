import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DisassociateRoleFromGroupRequest, DisassociateRoleFromGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateRoleFromGroupCommandInput extends DisassociateRoleFromGroupRequest {
}
export interface DisassociateRoleFromGroupCommandOutput extends DisassociateRoleFromGroupResponse, __MetadataBearer {
}
/**
 * Disassociates the role from a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DisassociateRoleFromGroupCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DisassociateRoleFromGroupCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DisassociateRoleFromGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateRoleFromGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateRoleFromGroupCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateRoleFromGroupCommand extends $Command<DisassociateRoleFromGroupCommandInput, DisassociateRoleFromGroupCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DisassociateRoleFromGroupCommandInput;
    constructor(input: DisassociateRoleFromGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateRoleFromGroupCommandInput, DisassociateRoleFromGroupCommandOutput>;
    private serialize;
    private deserialize;
}
