import { __extends } from "tslib";
import { CreateDBParameterGroupMessage, CreateDBParameterGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateDBParameterGroupCommand, serializeAws_queryCreateDBParameterGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new DB parameter group.</p>
 *          <p>
 *             A DB parameter group is initially created with the default parameters for the
 *             database engine used by the DB instance. To provide custom values for any of the
 *             parameters, you must modify the group after creating it using
 *             <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to
 *             associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate
 *             a new DB parameter group with a running DB instance, you need to reboot the DB
 *             instance without failover for the new DB parameter group and associated settings to take effect.
 *         </p>
 *          <important>
 *             <p>After you create a DB parameter group, you should wait at least 5 minutes
 *                 before creating your first DB instance that uses that DB parameter group as the default parameter
 *                 group. This allows Amazon RDS to fully complete the create action before the parameter
 *                 group is used as the default for a new DB instance. This is especially important for parameters
 *                 that are critical when creating the default database for a DB instance, such as the character set
 *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *                 <i>DescribeDBParameters</i> command to verify
 *                 that your DB parameter group has been created or modified.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBParameterGroupCommand = /** @class */ (function (_super) {
    __extends(CreateDBParameterGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBParameterGroupCommand(input) {
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
    CreateDBParameterGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "CreateDBParameterGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBParameterGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBParameterGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBParameterGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBParameterGroupCommand(input, context);
    };
    CreateDBParameterGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBParameterGroupCommand(output, context);
    };
    return CreateDBParameterGroupCommand;
}($Command));
export { CreateDBParameterGroupCommand };
//# sourceMappingURL=CreateDBParameterGroupCommand.js.map