import { __extends } from "tslib";
import { GetCodeSigningConfigRequest, GetCodeSigningConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCodeSigningConfigCommand, serializeAws_restJson1GetCodeSigningConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the specified code signing configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link GetCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCodeSigningConfigCommand = /** @class */ (function (_super) {
    __extends(GetCodeSigningConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCodeSigningConfigCommand(input) {
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
    GetCodeSigningConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "GetCodeSigningConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCodeSigningConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCodeSigningConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCodeSigningConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCodeSigningConfigCommand(input, context);
    };
    GetCodeSigningConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCodeSigningConfigCommand(output, context);
    };
    return GetCodeSigningConfigCommand;
}($Command));
export { GetCodeSigningConfigCommand };
//# sourceMappingURL=GetCodeSigningConfigCommand.js.map