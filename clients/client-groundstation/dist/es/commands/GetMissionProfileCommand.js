import { __extends } from "tslib";
import { GetMissionProfileRequest, GetMissionProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1GetMissionProfileCommand, serializeAws_restJson1GetMissionProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a mission profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new GetMissionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMissionProfileCommandInput} for command's `input` shape.
 * @see {@link GetMissionProfileCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMissionProfileCommand = /** @class */ (function (_super) {
    __extends(GetMissionProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMissionProfileCommand(input) {
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
    GetMissionProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "GetMissionProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMissionProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMissionProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMissionProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMissionProfileCommand(input, context);
    };
    GetMissionProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMissionProfileCommand(output, context);
    };
    return GetMissionProfileCommand;
}($Command));
export { GetMissionProfileCommand };
//# sourceMappingURL=GetMissionProfileCommand.js.map