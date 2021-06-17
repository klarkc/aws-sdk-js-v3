import { __extends } from "tslib";
import { GetFunctionCodeSigningConfigRequest, GetFunctionCodeSigningConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFunctionCodeSigningConfigCommand, serializeAws_restJson1GetFunctionCodeSigningConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the code signing configuration for the specified function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetFunctionCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link GetFunctionCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFunctionCodeSigningConfigCommand = /** @class */ (function (_super) {
    __extends(GetFunctionCodeSigningConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFunctionCodeSigningConfigCommand(input) {
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
    GetFunctionCodeSigningConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "GetFunctionCodeSigningConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFunctionCodeSigningConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFunctionCodeSigningConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFunctionCodeSigningConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFunctionCodeSigningConfigCommand(input, context);
    };
    GetFunctionCodeSigningConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFunctionCodeSigningConfigCommand(output, context);
    };
    return GetFunctionCodeSigningConfigCommand;
}($Command));
export { GetFunctionCodeSigningConfigCommand };
//# sourceMappingURL=GetFunctionCodeSigningConfigCommand.js.map