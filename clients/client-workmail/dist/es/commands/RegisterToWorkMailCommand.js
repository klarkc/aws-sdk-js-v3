import { __extends } from "tslib";
import { RegisterToWorkMailRequest, RegisterToWorkMailResponse } from "../models/models_0";
import { deserializeAws_json1_1RegisterToWorkMailCommand, serializeAws_json1_1RegisterToWorkMailCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by
 *          associating a mailbox and calendaring capabilities. It performs no change if the user,
 *          group, or resource is enabled and fails if the user, group, or resource is deleted. This
 *          operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console
 *          functionality for this operation is <i>Enable</i>. </p>
 *          <p>Users can either be created by calling the <a>CreateUser</a> API operation
 *          or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, RegisterToWorkMailCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, RegisterToWorkMailCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new RegisterToWorkMailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterToWorkMailCommandInput} for command's `input` shape.
 * @see {@link RegisterToWorkMailCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterToWorkMailCommand = /** @class */ (function (_super) {
    __extends(RegisterToWorkMailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterToWorkMailCommand(input) {
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
    RegisterToWorkMailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "RegisterToWorkMailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterToWorkMailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterToWorkMailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterToWorkMailCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterToWorkMailCommand(input, context);
    };
    RegisterToWorkMailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterToWorkMailCommand(output, context);
    };
    return RegisterToWorkMailCommand;
}($Command));
export { RegisterToWorkMailCommand };
//# sourceMappingURL=RegisterToWorkMailCommand.js.map