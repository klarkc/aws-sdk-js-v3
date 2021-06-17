import { __extends } from "tslib";
import { AssociateEnvironmentOperationsRoleMessage } from "../models/models_0";
import { deserializeAws_queryAssociateEnvironmentOperationsRoleCommand, serializeAws_queryAssociateEnvironmentOperationsRoleCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk
 *       uses the associated operations role for permissions to downstream services during subsequent
 *       calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the
 *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, AssociateEnvironmentOperationsRoleCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, AssociateEnvironmentOperationsRoleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new AssociateEnvironmentOperationsRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEnvironmentOperationsRoleCommandInput} for command's `input` shape.
 * @see {@link AssociateEnvironmentOperationsRoleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateEnvironmentOperationsRoleCommand = /** @class */ (function (_super) {
    __extends(AssociateEnvironmentOperationsRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateEnvironmentOperationsRoleCommand(input) {
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
    AssociateEnvironmentOperationsRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "AssociateEnvironmentOperationsRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateEnvironmentOperationsRoleMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateEnvironmentOperationsRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAssociateEnvironmentOperationsRoleCommand(input, context);
    };
    AssociateEnvironmentOperationsRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAssociateEnvironmentOperationsRoleCommand(output, context);
    };
    return AssociateEnvironmentOperationsRoleCommand;
}($Command));
export { AssociateEnvironmentOperationsRoleCommand };
//# sourceMappingURL=AssociateEnvironmentOperationsRoleCommand.js.map