import { __extends } from "tslib";
import { RegisterOnPremisesInstanceInput } from "../models/models_0";
import { deserializeAws_json1_1RegisterOnPremisesInstanceCommand, serializeAws_json1_1RegisterOnPremisesInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers an on-premises instance.</p>
 *         <note>
 *             <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request.
 *                 You cannot use both.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, RegisterOnPremisesInstanceCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, RegisterOnPremisesInstanceCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new RegisterOnPremisesInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterOnPremisesInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterOnPremisesInstanceCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterOnPremisesInstanceCommand = /** @class */ (function (_super) {
    __extends(RegisterOnPremisesInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterOnPremisesInstanceCommand(input) {
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
    RegisterOnPremisesInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "RegisterOnPremisesInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterOnPremisesInstanceInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterOnPremisesInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterOnPremisesInstanceCommand(input, context);
    };
    RegisterOnPremisesInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterOnPremisesInstanceCommand(output, context);
    };
    return RegisterOnPremisesInstanceCommand;
}($Command));
export { RegisterOnPremisesInstanceCommand };
//# sourceMappingURL=RegisterOnPremisesInstanceCommand.js.map