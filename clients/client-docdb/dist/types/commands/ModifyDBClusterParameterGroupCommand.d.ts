import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBClusterParameterGroupNameMessage, ModifyDBClusterParameterGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyDBClusterParameterGroupCommandInput extends ModifyDBClusterParameterGroupMessage {
}
export interface ModifyDBClusterParameterGroupCommandOutput extends DBClusterParameterGroupNameMessage, __MetadataBearer {
}
/**
 * <p> Modifies the parameters of a cluster parameter group. To modify more than one
 *             parameter, submit a list of the following: <code>ParameterName</code>,
 *                 <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20
 *             parameters can be modified in a single request. </p>
 *         <note>
 *             <p>Changes to dynamic parameters are applied immediately. Changes to static
 *                 parameters require a reboot or maintenance window
 *
 *                 before the change can take effect.</p>
 *         </note>
 *         <important>
 *             <p>After you create a cluster parameter group, you should wait at least 5 minutes
 *                 before creating your first cluster that uses that cluster parameter group as
 *                 the default parameter group. This allows Amazon DocumentDB to fully complete the create action
 *                 before the parameter group is used as the default for a new cluster. This step is
 *                 especially important for parameters that are critical when creating the default
 *                 database for a cluster, such as the character set for the default database
 *                 defined by the <code>character_set_database</code> parameter.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ModifyDBClusterParameterGroupCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ModifyDBClusterParameterGroupCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new ModifyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyDBClusterParameterGroupCommand extends $Command<ModifyDBClusterParameterGroupCommandInput, ModifyDBClusterParameterGroupCommandOutput, DocDBClientResolvedConfig> {
    readonly input: ModifyDBClusterParameterGroupCommandInput;
    constructor(input: ModifyDBClusterParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBClusterParameterGroupCommandInput, ModifyDBClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
