import { __extends } from "tslib";
import { StopJobRunRequest, StopJobRunResponse } from "../models/models_0";
import { deserializeAws_restJson1StopJobRunCommand, serializeAws_restJson1StopJobRunCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a particular run of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, StopJobRunCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, StopJobRunCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new StopJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopJobRunCommandInput} for command's `input` shape.
 * @see {@link StopJobRunCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopJobRunCommand = /** @class */ (function (_super) {
    __extends(StopJobRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopJobRunCommand(input) {
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
    StopJobRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "StopJobRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopJobRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopJobRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopJobRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopJobRunCommand(input, context);
    };
    StopJobRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopJobRunCommand(output, context);
    };
    return StopJobRunCommand;
}($Command));
export { StopJobRunCommand };
//# sourceMappingURL=StopJobRunCommand.js.map