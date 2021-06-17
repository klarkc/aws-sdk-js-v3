import { __extends } from "tslib";
import { GetRegionsRequest, GetRegionsResult } from "../models/models_1";
import { deserializeAws_json1_1GetRegionsCommand, serializeAws_json1_1GetRegionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all valid regions for Amazon Lightsail. Use the <code>include
 *         availability zones</code> parameter to also return the Availability Zones in a
 *       region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRegionsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRegionsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRegionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegionsCommandInput} for command's `input` shape.
 * @see {@link GetRegionsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRegionsCommand = /** @class */ (function (_super) {
    __extends(GetRegionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRegionsCommand(input) {
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
    GetRegionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetRegionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRegionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRegionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRegionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRegionsCommand(input, context);
    };
    GetRegionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRegionsCommand(output, context);
    };
    return GetRegionsCommand;
}($Command));
export { GetRegionsCommand };
//# sourceMappingURL=GetRegionsCommand.js.map