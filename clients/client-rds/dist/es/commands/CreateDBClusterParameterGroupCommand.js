import { __extends } from "tslib";
import { CreateDBClusterParameterGroupMessage, CreateDBClusterParameterGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateDBClusterParameterGroupCommand, serializeAws_queryCreateDBClusterParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new DB cluster parameter group.</p>
 *          <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p>
 *         <p>
 *             A DB cluster parameter group is initially created with the default parameters for the
 *             database engine used by instances in the DB cluster. To provide custom values for any of the
 *             parameters, you must modify the group after creating it using
 *             <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to
 *             associate it with your DB cluster using <code>ModifyDBCluster</code>. When you associate
 *             a new DB cluster parameter group with a running DB cluster, you need to reboot the DB
 *             instances in the DB cluster without failover for the new DB cluster parameter group and
 *             associated settings to take effect.
 *         </p>
 *         <important>
 *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes
 *                 before creating your first DB cluster
 *                 that uses that DB cluster parameter group as the default parameter
 *                 group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter
 *                 group is used as the default for a new DB cluster. This is especially important for parameters
 *                 that are critical when creating the default database for a DB cluster, such as the character set
 *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *                 <code>DescribeDBClusterParameters</code> action to verify
 *                 that your DB cluster parameter group has been created or modified.</p>
 *         </important>
 *
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBClusterParameterGroupCommand = /** @class */ (function (_super) {
    __extends(CreateDBClusterParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBClusterParameterGroupCommand(input) {
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
    CreateDBClusterParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "CreateDBClusterParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBClusterParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBClusterParameterGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBClusterParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBClusterParameterGroupCommand(input, context);
    };
    CreateDBClusterParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBClusterParameterGroupCommand(output, context);
    };
    return CreateDBClusterParameterGroupCommand;
}($Command));
export { CreateDBClusterParameterGroupCommand };
//# sourceMappingURL=CreateDBClusterParameterGroupCommand.js.map