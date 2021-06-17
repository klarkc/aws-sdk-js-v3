import { __extends } from "tslib";
import { CreateDeploymentRequest, CreateDeploymentResult } from "../models/models_0";
import { deserializeAws_json1_1CreateDeploymentCommand, serializeAws_json1_1CreateDeploymentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying
 *         Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage
 *       permissions level for the stack, or an attached policy that explicitly grants permissions. For
 *       more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CreateDeploymentCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CreateDeploymentCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDeploymentCommand = /** @class */ (function (_super) {
    __extends(CreateDeploymentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDeploymentCommand(input) {
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
    CreateDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "CreateDeploymentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDeploymentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDeploymentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDeploymentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDeploymentCommand(input, context);
    };
    CreateDeploymentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDeploymentCommand(output, context);
    };
    return CreateDeploymentCommand;
}($Command));
export { CreateDeploymentCommand };
//# sourceMappingURL=CreateDeploymentCommand.js.map