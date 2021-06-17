import { __extends } from "tslib";
import { UpdateExperimentTemplateRequest, UpdateExperimentTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateExperimentTemplateCommand, serializeAws_restJson1UpdateExperimentTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, UpdateExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, UpdateExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new UpdateExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateExperimentTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdateExperimentTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateExperimentTemplateCommand(input) {
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
    UpdateExperimentTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FisClient";
        var commandName = "UpdateExperimentTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateExperimentTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateExperimentTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateExperimentTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateExperimentTemplateCommand(input, context);
    };
    UpdateExperimentTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateExperimentTemplateCommand(output, context);
    };
    return UpdateExperimentTemplateCommand;
}($Command));
export { UpdateExperimentTemplateCommand };
//# sourceMappingURL=UpdateExperimentTemplateCommand.js.map