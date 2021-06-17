import { __extends } from "tslib";
import { DisassociateEnvironmentOperationsRoleMessage } from "../models/models_0";
import { deserializeAws_queryDisassociateEnvironmentOperationsRoleCommand, serializeAws_queryDisassociateEnvironmentOperationsRoleCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses
 *       the caller's permissions for permissions to downstream services during subsequent calls acting
 *       on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the
 *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DisassociateEnvironmentOperationsRoleCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DisassociateEnvironmentOperationsRoleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DisassociateEnvironmentOperationsRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateEnvironmentOperationsRoleCommandInput} for command's `input` shape.
 * @see {@link DisassociateEnvironmentOperationsRoleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateEnvironmentOperationsRoleCommand = /** @class */ (function (_super) {
    __extends(DisassociateEnvironmentOperationsRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateEnvironmentOperationsRoleCommand(input) {
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
    DisassociateEnvironmentOperationsRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DisassociateEnvironmentOperationsRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateEnvironmentOperationsRoleMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateEnvironmentOperationsRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDisassociateEnvironmentOperationsRoleCommand(input, context);
    };
    DisassociateEnvironmentOperationsRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDisassociateEnvironmentOperationsRoleCommand(output, context);
    };
    return DisassociateEnvironmentOperationsRoleCommand;
}($Command));
export { DisassociateEnvironmentOperationsRoleCommand };
//# sourceMappingURL=DisassociateEnvironmentOperationsRoleCommand.js.map