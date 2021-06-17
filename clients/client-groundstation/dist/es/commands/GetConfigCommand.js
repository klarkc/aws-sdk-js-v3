import { __extends } from "tslib";
import { GetConfigRequest, GetConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1GetConfigCommand, serializeAws_restJson1GetConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns <code>Config</code> information.</p>
 *          <p>Only one <code>Config</code> response can be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new GetConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConfigCommandInput} for command's `input` shape.
 * @see {@link GetConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConfigCommand = /** @class */ (function (_super) {
    __extends(GetConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConfigCommand(input) {
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
    GetConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "GetConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetConfigCommand(input, context);
    };
    GetConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetConfigCommand(output, context);
    };
    return GetConfigCommand;
}($Command));
export { GetConfigCommand };
//# sourceMappingURL=GetConfigCommand.js.map