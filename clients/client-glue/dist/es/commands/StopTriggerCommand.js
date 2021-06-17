import { __extends } from "tslib";
import { StopTriggerRequest, StopTriggerResponse } from "../models/models_1";
import { deserializeAws_json1_1StopTriggerCommand, serializeAws_json1_1StopTriggerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a specified trigger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StopTriggerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTriggerCommandInput} for command's `input` shape.
 * @see {@link StopTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopTriggerCommand = /** @class */ (function (_super) {
    __extends(StopTriggerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopTriggerCommand(input) {
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
    StopTriggerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "StopTriggerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopTriggerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopTriggerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopTriggerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopTriggerCommand(input, context);
    };
    StopTriggerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopTriggerCommand(output, context);
    };
    return StopTriggerCommand;
}($Command));
export { StopTriggerCommand };
//# sourceMappingURL=StopTriggerCommand.js.map