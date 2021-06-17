import { __extends } from "tslib";
import { RegisterTaskDefinitionRequest, RegisterTaskDefinitionResponse } from "../models/models_0";
import { deserializeAws_json1_1RegisterTaskDefinitionCommand, serializeAws_json1_1RegisterTaskDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers a new task definition from the supplied <code>family</code> and
 * 				<code>containerDefinitions</code>. Optionally, you can add data volumes to your
 * 			containers with the <code>volumes</code> parameter. For more information about task
 * 			definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task
 * 				Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <p>You can specify an IAM role for your task with the <code>taskRoleArn</code> parameter.
 * 			When you specify an IAM role for a task, its containers can then use the latest versions
 * 			of the AWS CLI or SDKs to make API requests to the AWS services that are specified in
 * 			the IAM policy associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM
 * 				Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       <p>You can specify a Docker networking mode for the containers in your task definition
 * 			with the <code>networkMode</code> parameter. The available network modes correspond to
 * 			those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network
 * 				settings</a> in the Docker run reference. If you specify the <code>awsvpc</code>
 * 			network mode, the task is allocated an elastic network interface, and you must specify a
 * 				<a>NetworkConfiguration</a> when you create a service or run a task with
 * 			the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a>
 * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, RegisterTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, RegisterTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new RegisterTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link RegisterTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterTaskDefinitionCommand = /** @class */ (function (_super) {
    __extends(RegisterTaskDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterTaskDefinitionCommand(input) {
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
    RegisterTaskDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "RegisterTaskDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterTaskDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterTaskDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterTaskDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterTaskDefinitionCommand(input, context);
    };
    RegisterTaskDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterTaskDefinitionCommand(output, context);
    };
    return RegisterTaskDefinitionCommand;
}($Command));
export { RegisterTaskDefinitionCommand };
//# sourceMappingURL=RegisterTaskDefinitionCommand.js.map