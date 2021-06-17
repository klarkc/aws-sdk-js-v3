import { __extends } from "tslib";
import { GetParameterRequest, GetParameterResult } from "../models/models_1";
import { deserializeAws_json1_1GetParameterCommand, serializeAws_json1_1GetParameterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get information about a parameter by using the parameter name. Don't confuse this API action
 *    with the <a>GetParameters</a> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParameterCommandInput} for command's `input` shape.
 * @see {@link GetParameterCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetParameterCommand = /** @class */ (function (_super) {
    __extends(GetParameterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetParameterCommand(input) {
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
    GetParameterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetParameterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetParameterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetParameterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetParameterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetParameterCommand(input, context);
    };
    GetParameterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetParameterCommand(output, context);
    };
    return GetParameterCommand;
}($Command));
export { GetParameterCommand };
//# sourceMappingURL=GetParameterCommand.js.map