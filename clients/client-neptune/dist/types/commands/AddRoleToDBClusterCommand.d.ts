import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { AddRoleToDBClusterMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddRoleToDBClusterCommandInput extends AddRoleToDBClusterMessage {
}
export interface AddRoleToDBClusterCommandOutput extends __MetadataBearer {
}
/**
 * <p>Associates an Identity and Access Management (IAM) role from an
 *       Neptune DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, AddRoleToDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, AddRoleToDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new AddRoleToDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddRoleToDBClusterCommandInput} for command's `input` shape.
 * @see {@link AddRoleToDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddRoleToDBClusterCommand extends $Command<AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: AddRoleToDBClusterCommandInput;
    constructor(input: AddRoleToDBClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
