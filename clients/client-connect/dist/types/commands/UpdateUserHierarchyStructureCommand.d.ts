import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateUserHierarchyStructureRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateUserHierarchyStructureCommandInput extends UpdateUserHierarchyStructureRequest {
}
export interface UpdateUserHierarchyStructureCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserHierarchyStructureCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserHierarchyStructureCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateUserHierarchyStructureCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserHierarchyStructureCommandInput} for command's `input` shape.
 * @see {@link UpdateUserHierarchyStructureCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUserHierarchyStructureCommand extends $Command<UpdateUserHierarchyStructureCommandInput, UpdateUserHierarchyStructureCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateUserHierarchyStructureCommandInput;
    constructor(input: UpdateUserHierarchyStructureCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserHierarchyStructureCommandInput, UpdateUserHierarchyStructureCommandOutput>;
    private serialize;
    private deserialize;
}
