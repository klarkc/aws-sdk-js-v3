import { __extends } from "tslib";
import { StopExperimentRequest, StopExperimentResponse } from "../models/models_0";
import { deserializeAws_restJson1StopExperimentCommand, serializeAws_restJson1StopExperimentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the specified experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, StopExperimentCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, StopExperimentCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new StopExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopExperimentCommandInput} for command's `input` shape.
 * @see {@link StopExperimentCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopExperimentCommand = /** @class */ (function (_super) {
    __extends(StopExperimentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopExperimentCommand(input) {
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
    StopExperimentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FisClient";
        var commandName = "StopExperimentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopExperimentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopExperimentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopExperimentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopExperimentCommand(input, context);
    };
    StopExperimentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopExperimentCommand(output, context);
    };
    return StopExperimentCommand;
}($Command));
export { StopExperimentCommand };
//# sourceMappingURL=StopExperimentCommand.js.map