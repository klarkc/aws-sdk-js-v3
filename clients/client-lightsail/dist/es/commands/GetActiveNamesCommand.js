import { __extends } from "tslib";
import { GetActiveNamesRequest, GetActiveNamesResult } from "../models/models_0";
import { deserializeAws_json1_1GetActiveNamesCommand, serializeAws_json1_1GetActiveNamesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the names of all active (not deleted) resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetActiveNamesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetActiveNamesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetActiveNamesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetActiveNamesCommandInput} for command's `input` shape.
 * @see {@link GetActiveNamesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetActiveNamesCommand = /** @class */ (function (_super) {
    __extends(GetActiveNamesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetActiveNamesCommand(input) {
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
    GetActiveNamesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetActiveNamesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetActiveNamesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetActiveNamesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetActiveNamesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetActiveNamesCommand(input, context);
    };
    GetActiveNamesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetActiveNamesCommand(output, context);
    };
    return GetActiveNamesCommand;
}($Command));
export { GetActiveNamesCommand };
//# sourceMappingURL=GetActiveNamesCommand.js.map