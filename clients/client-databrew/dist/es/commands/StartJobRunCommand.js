import { __extends } from "tslib";
import { StartJobRunRequest, StartJobRunResponse } from "../models/models_0";
import { deserializeAws_restJson1StartJobRunCommand, serializeAws_restJson1StartJobRunCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Runs a DataBrew job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, StartJobRunCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, StartJobRunCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new StartJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartJobRunCommandInput} for command's `input` shape.
 * @see {@link StartJobRunCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartJobRunCommand = /** @class */ (function (_super) {
    __extends(StartJobRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartJobRunCommand(input) {
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
    StartJobRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "StartJobRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartJobRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartJobRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartJobRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartJobRunCommand(input, context);
    };
    StartJobRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartJobRunCommand(output, context);
    };
    return StartJobRunCommand;
}($Command));
export { StartJobRunCommand };
//# sourceMappingURL=StartJobRunCommand.js.map