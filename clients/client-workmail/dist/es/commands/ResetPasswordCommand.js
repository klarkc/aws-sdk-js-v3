import { __extends } from "tslib";
import { ResetPasswordRequest, ResetPasswordResponse } from "../models/models_0";
import { deserializeAws_json1_1ResetPasswordCommand, serializeAws_json1_1ResetPasswordCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows the administrator to reset the password for a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ResetPasswordCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ResetPasswordCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ResetPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetPasswordCommandInput} for command's `input` shape.
 * @see {@link ResetPasswordCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetPasswordCommand = /** @class */ (function (_super) {
    __extends(ResetPasswordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetPasswordCommand(input) {
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
    ResetPasswordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "ResetPasswordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetPasswordRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResetPasswordResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetPasswordCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResetPasswordCommand(input, context);
    };
    ResetPasswordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResetPasswordCommand(output, context);
    };
    return ResetPasswordCommand;
}($Command));
export { ResetPasswordCommand };
//# sourceMappingURL=ResetPasswordCommand.js.map