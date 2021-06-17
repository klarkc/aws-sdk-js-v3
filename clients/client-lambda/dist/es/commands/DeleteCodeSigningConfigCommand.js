import { __extends } from "tslib";
import { DeleteCodeSigningConfigRequest, DeleteCodeSigningConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteCodeSigningConfigCommand, serializeAws_restJson1DeleteCodeSigningConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the code signing configuration. You can delete the code signing configuration only if no function is
 *       using it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCodeSigningConfigCommand = /** @class */ (function (_super) {
    __extends(DeleteCodeSigningConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCodeSigningConfigCommand(input) {
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
    DeleteCodeSigningConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "DeleteCodeSigningConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCodeSigningConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCodeSigningConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCodeSigningConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteCodeSigningConfigCommand(input, context);
    };
    DeleteCodeSigningConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteCodeSigningConfigCommand(output, context);
    };
    return DeleteCodeSigningConfigCommand;
}($Command));
export { DeleteCodeSigningConfigCommand };
//# sourceMappingURL=DeleteCodeSigningConfigCommand.js.map