import { __extends } from "tslib";
import { CreateActivationRequest, CreateActivationResult } from "../models/models_0";
import { deserializeAws_json1_1CreateActivationCommand, serializeAws_json1_1CreateActivationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates an activation code and activation ID you can use to register your on-premises
 *    server or virtual machine (VM) with Systems Manager. Registering these machines with Systems Manager makes it
 *    possible to manage them using Systems Manager capabilities. You use the activation code and ID when
 *    installing SSM Agent on machines in your hybrid environment. For more information about
 *    requirements for managing on-premises instances and VMs using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up
 *     AWS Systems Manager for hybrid environments</a> in the <i>AWS Systems Manager User Guide</i>. </p>
 *          <note>
 *             <p>On-premises servers or VMs that are registered with Systems Manager and EC2 instances that you manage
 *     with Systems Manager are all called <i>managed instances</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateActivationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateActivationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateActivationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateActivationCommandInput} for command's `input` shape.
 * @see {@link CreateActivationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateActivationCommand = /** @class */ (function (_super) {
    __extends(CreateActivationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateActivationCommand(input) {
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
    CreateActivationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateActivationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateActivationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateActivationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateActivationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateActivationCommand(input, context);
    };
    CreateActivationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateActivationCommand(output, context);
    };
    return CreateActivationCommand;
}($Command));
export { CreateActivationCommand };
//# sourceMappingURL=CreateActivationCommand.js.map