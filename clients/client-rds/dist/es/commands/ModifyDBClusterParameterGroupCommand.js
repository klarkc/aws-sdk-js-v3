import { __extends } from "tslib";
import { DBClusterParameterGroupNameMessage, ModifyDBClusterParameterGroupMessage } from "../models/models_1";
import { deserializeAws_queryModifyDBClusterParameterGroupCommand, serializeAws_queryModifyDBClusterParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Modifies the parameters of a DB cluster parameter group. To modify more than one parameter,
 *             submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>,
 *             and <code>ApplyMethod</code>. A maximum of 20
 *             parameters can be modified in a single request.
 *         </p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *         <note>
 *             <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p>
 *         </note>
 *         <important>
 *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes
 *                 before creating your first DB cluster that uses that DB cluster parameter group as the default parameter
 *                 group. This allows Amazon RDS to fully complete the create action before the parameter
 *                 group is used as the default for a new DB cluster. This is especially important for parameters
 *                 that are critical when creating the default database for a DB cluster, such as the character set
 *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *                 <code>DescribeDBClusterParameters</code> action to verify
 *                 that your DB cluster parameter group has been created or modified.</p>
 *             <p>If the modified DB cluster parameter group is used by an Aurora Serverless cluster, Aurora
 *                applies the update immediately. The cluster restart might interrupt your workload. In that case,
 *                your application must reopen any connections and retry any transactions that were active
 *                when the parameter changes took effect.</p>
 *         </important>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDBClusterParameterGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyDBClusterParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDBClusterParameterGroupCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    ModifyDBClusterParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "ModifyDBClusterParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDBClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBClusterParameterGroupNameMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDBClusterParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyDBClusterParameterGroupCommand(input, context);
    };
    ModifyDBClusterParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyDBClusterParameterGroupCommand(output, context);
    };
    return ModifyDBClusterParameterGroupCommand;
}($Command));
export { ModifyDBClusterParameterGroupCommand };
//# sourceMappingURL=ModifyDBClusterParameterGroupCommand.js.map