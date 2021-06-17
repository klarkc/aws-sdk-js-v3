import { __extends } from "tslib";
import { UpdateWorldTemplateRequest, UpdateWorldTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateWorldTemplateCommand, serializeAws_restJson1UpdateWorldTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a world template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, UpdateWorldTemplateCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, UpdateWorldTemplateCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new UpdateWorldTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorldTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateWorldTemplateCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWorldTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdateWorldTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateWorldTemplateCommand(input) {
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
    UpdateWorldTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "UpdateWorldTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateWorldTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateWorldTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateWorldTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateWorldTemplateCommand(input, context);
    };
    UpdateWorldTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateWorldTemplateCommand(output, context);
    };
    return UpdateWorldTemplateCommand;
}($Command));
export { UpdateWorldTemplateCommand };
//# sourceMappingURL=UpdateWorldTemplateCommand.js.map