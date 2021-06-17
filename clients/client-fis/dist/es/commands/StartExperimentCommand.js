import { __extends } from "tslib";
import { StartExperimentRequest, StartExperimentResponse } from "../models/models_0";
import { deserializeAws_restJson1StartExperimentCommand, serializeAws_restJson1StartExperimentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts running an experiment from the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, StartExperimentCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, StartExperimentCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new StartExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExperimentCommandInput} for command's `input` shape.
 * @see {@link StartExperimentCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartExperimentCommand = /** @class */ (function (_super) {
    __extends(StartExperimentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartExperimentCommand(input) {
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
    StartExperimentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FisClient";
        var commandName = "StartExperimentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartExperimentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartExperimentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartExperimentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartExperimentCommand(input, context);
    };
    StartExperimentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartExperimentCommand(output, context);
    };
    return StartExperimentCommand;
}($Command));
export { StartExperimentCommand };
//# sourceMappingURL=StartExperimentCommand.js.map