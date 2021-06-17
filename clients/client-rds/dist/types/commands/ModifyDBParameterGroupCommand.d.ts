import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBParameterGroupNameMessage, ModifyDBParameterGroupMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyDBParameterGroupCommandInput extends ModifyDBParameterGroupMessage {
}
export interface ModifyDBParameterGroupCommandOutput extends DBParameterGroupNameMessage, __MetadataBearer {
}
/**
 * <p>
 *         Modifies the parameters of a DB parameter group. To modify more than one parameter,
 *         submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and
 *         <code>ApplyMethod</code>. A maximum of 20
 *         parameters can be modified in a single request.
 *         </p>
 *          <note>
 *             <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p>
 *          </note>
 *          <important>
 *             <p>After you modify a DB parameter group, you should wait at least 5 minutes
 *             before creating your first DB instance that uses that DB parameter group as the default parameter
 *             group. This allows Amazon RDS to fully complete the modify action before the parameter
 *             group is used as the default for a new DB instance. This is especially important for parameters
 *             that are critical when creating the default database for a DB instance, such as the character set
 *             for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *             <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *             <i>DescribeDBParameters</i> command to verify
 *             that your DB parameter group has been created or modified.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyDBParameterGroupCommand extends $Command<ModifyDBParameterGroupCommandInput, ModifyDBParameterGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBParameterGroupCommandInput;
    constructor(input: ModifyDBParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBParameterGroupCommandInput, ModifyDBParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
