import { __extends } from "tslib";
import { StartTriggerRequest, StartTriggerResponse } from "../models/models_1";
import { deserializeAws_json1_1StartTriggerCommand, serializeAws_json1_1StartTriggerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering
 *       Jobs</a> for information about how different types of trigger are
 *       started.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartTriggerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTriggerCommandInput} for command's `input` shape.
 * @see {@link StartTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartTriggerCommand = /** @class */ (function (_super) {
    __extends(StartTriggerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartTriggerCommand(input) {
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
    StartTriggerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "StartTriggerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartTriggerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartTriggerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartTriggerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartTriggerCommand(input, context);
    };
    StartTriggerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartTriggerCommand(output, context);
    };
    return StartTriggerCommand;
}($Command));
export { StartTriggerCommand };
//# sourceMappingURL=StartTriggerCommand.js.map