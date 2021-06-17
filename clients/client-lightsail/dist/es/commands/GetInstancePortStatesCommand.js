import { __extends } from "tslib";
import { GetInstancePortStatesRequest, GetInstancePortStatesResult } from "../models/models_0";
import { deserializeAws_json1_1GetInstancePortStatesCommand, serializeAws_json1_1GetInstancePortStatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses
 *       allowed to connect to the instance through the ports, and the protocol.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstancePortStatesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstancePortStatesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstancePortStatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstancePortStatesCommandInput} for command's `input` shape.
 * @see {@link GetInstancePortStatesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInstancePortStatesCommand = /** @class */ (function (_super) {
    __extends(GetInstancePortStatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInstancePortStatesCommand(input) {
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
    GetInstancePortStatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetInstancePortStatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInstancePortStatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInstancePortStatesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInstancePortStatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInstancePortStatesCommand(input, context);
    };
    GetInstancePortStatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInstancePortStatesCommand(output, context);
    };
    return GetInstancePortStatesCommand;
}($Command));
export { GetInstancePortStatesCommand };
//# sourceMappingURL=GetInstancePortStatesCommand.js.map