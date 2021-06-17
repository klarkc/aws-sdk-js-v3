import { __extends } from "tslib";
import { DeleteWorldTemplateRequest, DeleteWorldTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteWorldTemplateCommand, serializeAws_restJson1DeleteWorldTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a world template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeleteWorldTemplateCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeleteWorldTemplateCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DeleteWorldTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorldTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteWorldTemplateCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWorldTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteWorldTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWorldTemplateCommand(input) {
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
    DeleteWorldTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DeleteWorldTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWorldTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWorldTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWorldTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteWorldTemplateCommand(input, context);
    };
    DeleteWorldTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteWorldTemplateCommand(output, context);
    };
    return DeleteWorldTemplateCommand;
}($Command));
export { DeleteWorldTemplateCommand };
//# sourceMappingURL=DeleteWorldTemplateCommand.js.map