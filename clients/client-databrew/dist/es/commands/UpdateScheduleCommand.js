import { __extends } from "tslib";
import { UpdateScheduleRequest, UpdateScheduleResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateScheduleCommand, serializeAws_restJson1UpdateScheduleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the definition of an existing DataBrew schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateScheduleCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateScheduleCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new UpdateScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduleCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateScheduleCommand = /** @class */ (function (_super) {
    __extends(UpdateScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateScheduleCommand(input) {
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
    UpdateScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "UpdateScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateScheduleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateScheduleCommand(input, context);
    };
    UpdateScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateScheduleCommand(output, context);
    };
    return UpdateScheduleCommand;
}($Command));
export { UpdateScheduleCommand };
//# sourceMappingURL=UpdateScheduleCommand.js.map