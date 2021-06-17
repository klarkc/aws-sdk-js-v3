import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { AssociateRoleToGroupRequest, AssociateRoleToGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateRoleToGroupCommandInput extends AssociateRoleToGroupRequest {
}
export interface AssociateRoleToGroupCommandOutput extends AssociateRoleToGroupResponse, __MetadataBearer {
}
/**
 * Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, AssociateRoleToGroupCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, AssociateRoleToGroupCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new AssociateRoleToGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateRoleToGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateRoleToGroupCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateRoleToGroupCommand extends $Command<AssociateRoleToGroupCommandInput, AssociateRoleToGroupCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: AssociateRoleToGroupCommandInput;
    constructor(input: AssociateRoleToGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateRoleToGroupCommandInput, AssociateRoleToGroupCommandOutput>;
    private serialize;
    private deserialize;
}
