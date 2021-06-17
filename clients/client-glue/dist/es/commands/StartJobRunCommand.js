import { __extends } from "tslib";
import { StartJobRunRequest, StartJobRunResponse } from "../models/models_1";
import { deserializeAws_json1_1StartJobRunCommand, serializeAws_json1_1StartJobRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a job run using a job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartJobRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartJobRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartJobRunCommandInput} for command's `input` shape.
 * @see {@link StartJobRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "GlueClient";
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
        return serializeAws_json1_1StartJobRunCommand(input, context);
    };
    StartJobRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartJobRunCommand(output, context);
    };
    return StartJobRunCommand;
}($Command));
export { StartJobRunCommand };
//# sourceMappingURL=StartJobRunCommand.js.map