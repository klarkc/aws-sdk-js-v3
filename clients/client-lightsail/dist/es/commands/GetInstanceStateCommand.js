import { __extends } from "tslib";
import { GetInstanceStateRequest, GetInstanceStateResult } from "../models/models_0";
import { deserializeAws_json1_1GetInstanceStateCommand, serializeAws_json1_1GetInstanceStateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the state of a specific instance. Works on one instance at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstanceStateCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstanceStateCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstanceStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceStateCommandInput} for command's `input` shape.
 * @see {@link GetInstanceStateCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInstanceStateCommand = /** @class */ (function (_super) {
    __extends(GetInstanceStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInstanceStateCommand(input) {
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
    GetInstanceStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetInstanceStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInstanceStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInstanceStateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInstanceStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInstanceStateCommand(input, context);
    };
    GetInstanceStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInstanceStateCommand(output, context);
    };
    return GetInstanceStateCommand;
}($Command));
export { GetInstanceStateCommand };
//# sourceMappingURL=GetInstanceStateCommand.js.map