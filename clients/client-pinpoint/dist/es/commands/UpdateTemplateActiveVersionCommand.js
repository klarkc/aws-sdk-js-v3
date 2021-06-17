import { __extends } from "tslib";
import { UpdateTemplateActiveVersionRequest, UpdateTemplateActiveVersionResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateTemplateActiveVersionCommand, serializeAws_restJson1UpdateTemplateActiveVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the status of a specific version of a message template to <i>active</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateTemplateActiveVersionCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateTemplateActiveVersionCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateTemplateActiveVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTemplateActiveVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateActiveVersionCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTemplateActiveVersionCommand = /** @class */ (function (_super) {
    __extends(UpdateTemplateActiveVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTemplateActiveVersionCommand(input) {
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
    UpdateTemplateActiveVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateTemplateActiveVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTemplateActiveVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTemplateActiveVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTemplateActiveVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateTemplateActiveVersionCommand(input, context);
    };
    UpdateTemplateActiveVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateTemplateActiveVersionCommand(output, context);
    };
    return UpdateTemplateActiveVersionCommand;
}($Command));
export { UpdateTemplateActiveVersionCommand };
//# sourceMappingURL=UpdateTemplateActiveVersionCommand.js.map