import { __extends } from "tslib";
import { GetInstanceRequest, GetInstanceResult } from "../models/models_0";
import { deserializeAws_json1_1GetInstanceCommand, serializeAws_json1_1GetInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific Amazon Lightsail instance, which is a virtual private
 *       server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstanceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstanceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceCommandInput} for command's `input` shape.
 * @see {@link GetInstanceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInstanceCommand = /** @class */ (function (_super) {
    __extends(GetInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInstanceCommand(input) {
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
    GetInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInstanceCommand(input, context);
    };
    GetInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInstanceCommand(output, context);
    };
    return GetInstanceCommand;
}($Command));
export { GetInstanceCommand };
//# sourceMappingURL=GetInstanceCommand.js.map