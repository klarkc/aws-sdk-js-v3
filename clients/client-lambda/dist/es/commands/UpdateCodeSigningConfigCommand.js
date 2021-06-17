import { __extends } from "tslib";
import { UpdateCodeSigningConfigRequest, UpdateCodeSigningConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateCodeSigningConfigCommand, serializeAws_restJson1UpdateCodeSigningConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update the code signing configuration. Changes to the code signing configuration take effect the next time a
 *       user tries to deploy a code package to the function. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCodeSigningConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateCodeSigningConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCodeSigningConfigCommand(input) {
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
    UpdateCodeSigningConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "UpdateCodeSigningConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCodeSigningConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCodeSigningConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCodeSigningConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateCodeSigningConfigCommand(input, context);
    };
    UpdateCodeSigningConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateCodeSigningConfigCommand(output, context);
    };
    return UpdateCodeSigningConfigCommand;
}($Command));
export { UpdateCodeSigningConfigCommand };
//# sourceMappingURL=UpdateCodeSigningConfigCommand.js.map