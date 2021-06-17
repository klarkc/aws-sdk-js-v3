import { __extends } from "tslib";
import { GetOperationRequest, GetOperationResult } from "../models/models_1";
import { deserializeAws_json1_1GetOperationCommand, serializeAws_json1_1GetOperationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific operation. Operations include events such as when you
 *       create an instance, allocate a static IP, attach a static IP, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetOperationCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetOperationCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOperationCommandInput} for command's `input` shape.
 * @see {@link GetOperationCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOperationCommand = /** @class */ (function (_super) {
    __extends(GetOperationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOperationCommand(input) {
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
    GetOperationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetOperationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOperationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOperationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOperationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOperationCommand(input, context);
    };
    GetOperationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOperationCommand(output, context);
    };
    return GetOperationCommand;
}($Command));
export { GetOperationCommand };
//# sourceMappingURL=GetOperationCommand.js.map