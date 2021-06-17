import { __extends } from "tslib";
import { UpdateTriggerRequest, UpdateTriggerResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateTriggerCommand, serializeAws_json1_1UpdateTriggerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a trigger definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateTriggerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTriggerCommandInput} for command's `input` shape.
 * @see {@link UpdateTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTriggerCommand = /** @class */ (function (_super) {
    __extends(UpdateTriggerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTriggerCommand(input) {
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
    UpdateTriggerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateTriggerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTriggerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTriggerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTriggerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTriggerCommand(input, context);
    };
    UpdateTriggerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTriggerCommand(output, context);
    };
    return UpdateTriggerCommand;
}($Command));
export { UpdateTriggerCommand };
//# sourceMappingURL=UpdateTriggerCommand.js.map