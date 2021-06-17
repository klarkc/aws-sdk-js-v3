import { __extends } from "tslib";
import { GetSatelliteRequest, GetSatelliteResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSatelliteCommand, serializeAws_restJson1GetSatelliteCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a satellite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetSatelliteCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetSatelliteCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new GetSatelliteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSatelliteCommandInput} for command's `input` shape.
 * @see {@link GetSatelliteCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSatelliteCommand = /** @class */ (function (_super) {
    __extends(GetSatelliteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSatelliteCommand(input) {
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
    GetSatelliteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "GetSatelliteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSatelliteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSatelliteResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSatelliteCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSatelliteCommand(input, context);
    };
    GetSatelliteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSatelliteCommand(output, context);
    };
    return GetSatelliteCommand;
}($Command));
export { GetSatelliteCommand };
//# sourceMappingURL=GetSatelliteCommand.js.map