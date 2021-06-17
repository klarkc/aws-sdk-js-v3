import { __extends } from "tslib";
import { DeregisterFromWorkMailRequest, DeregisterFromWorkMailResponse } from "../models/models_0";
import { deserializeAws_json1_1DeregisterFromWorkMailCommand, serializeAws_json1_1DeregisterFromWorkMailCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Mark a user, group, or resource as no longer used in Amazon WorkMail. This action
 *          disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days
 *          before they are permanently removed. The functionality in the console is
 *             <i>Disable</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeregisterFromWorkMailCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeregisterFromWorkMailCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DeregisterFromWorkMailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterFromWorkMailCommandInput} for command's `input` shape.
 * @see {@link DeregisterFromWorkMailCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterFromWorkMailCommand = /** @class */ (function (_super) {
    __extends(DeregisterFromWorkMailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterFromWorkMailCommand(input) {
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
    DeregisterFromWorkMailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "DeregisterFromWorkMailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterFromWorkMailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterFromWorkMailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterFromWorkMailCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterFromWorkMailCommand(input, context);
    };
    DeregisterFromWorkMailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterFromWorkMailCommand(output, context);
    };
    return DeregisterFromWorkMailCommand;
}($Command));
export { DeregisterFromWorkMailCommand };
//# sourceMappingURL=DeregisterFromWorkMailCommand.js.map