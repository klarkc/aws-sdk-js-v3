import { __extends } from "tslib";
import { GetMinuteUsageRequest, GetMinuteUsageResponse } from "../models/models_0";
import { deserializeAws_restJson1GetMinuteUsageCommand, serializeAws_restJson1GetMinuteUsageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the number of minutes used by account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetMinuteUsageCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetMinuteUsageCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new GetMinuteUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMinuteUsageCommandInput} for command's `input` shape.
 * @see {@link GetMinuteUsageCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMinuteUsageCommand = /** @class */ (function (_super) {
    __extends(GetMinuteUsageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMinuteUsageCommand(input) {
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
    GetMinuteUsageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "GetMinuteUsageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMinuteUsageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMinuteUsageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMinuteUsageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMinuteUsageCommand(input, context);
    };
    GetMinuteUsageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMinuteUsageCommand(output, context);
    };
    return GetMinuteUsageCommand;
}($Command));
export { GetMinuteUsageCommand };
//# sourceMappingURL=GetMinuteUsageCommand.js.map