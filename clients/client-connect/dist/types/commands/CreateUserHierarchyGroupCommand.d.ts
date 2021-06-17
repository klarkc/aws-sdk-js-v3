import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { CreateUserHierarchyGroupRequest, CreateUserHierarchyGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUserHierarchyGroupCommandInput extends CreateUserHierarchyGroupRequest {
}
export interface CreateUserHierarchyGroupCommandOutput extends CreateUserHierarchyGroupResponse, __MetadataBearer {
}
/**
 * <p>Creates a new user hierarchy group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateUserHierarchyGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateUserHierarchyGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateUserHierarchyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserHierarchyGroupCommandInput} for command's `input` shape.
 * @see {@link CreateUserHierarchyGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUserHierarchyGroupCommand extends $Command<CreateUserHierarchyGroupCommandInput, CreateUserHierarchyGroupCommandOutput, ConnectClientResolvedConfig> {
    readonly input: CreateUserHierarchyGroupCommandInput;
    constructor(input: CreateUserHierarchyGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserHierarchyGroupCommandInput, CreateUserHierarchyGroupCommandOutput>;
    private serialize;
    private deserialize;
}
