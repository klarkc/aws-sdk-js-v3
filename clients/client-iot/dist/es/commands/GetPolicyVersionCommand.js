import { __extends } from "tslib";
import { GetPolicyVersionRequest, GetPolicyVersionResponse } from "../models/models_1";
import { deserializeAws_restJson1GetPolicyVersionCommand, serializeAws_restJson1GetPolicyVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified policy version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetPolicyVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetPolicyVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetPolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link GetPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPolicyVersionCommand = /** @class */ (function (_super) {
    __extends(GetPolicyVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPolicyVersionCommand(input) {
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
    GetPolicyVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "GetPolicyVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPolicyVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPolicyVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPolicyVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPolicyVersionCommand(input, context);
    };
    GetPolicyVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPolicyVersionCommand(output, context);
    };
    return GetPolicyVersionCommand;
}($Command));
export { GetPolicyVersionCommand };
//# sourceMappingURL=GetPolicyVersionCommand.js.map