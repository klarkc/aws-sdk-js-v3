import { __extends } from "tslib";
import { ListFunctionsByCodeSigningConfigRequest, ListFunctionsByCodeSigningConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand, serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the functions that use the specified code signing configuration. You can use this method prior to deleting a
 *       code signing configuration, to verify that no functions are using it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionsByCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionsByCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListFunctionsByCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFunctionsByCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link ListFunctionsByCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFunctionsByCodeSigningConfigCommand = /** @class */ (function (_super) {
    __extends(ListFunctionsByCodeSigningConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFunctionsByCodeSigningConfigCommand(input) {
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
    ListFunctionsByCodeSigningConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "ListFunctionsByCodeSigningConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFunctionsByCodeSigningConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFunctionsByCodeSigningConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFunctionsByCodeSigningConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand(input, context);
    };
    ListFunctionsByCodeSigningConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand(output, context);
    };
    return ListFunctionsByCodeSigningConfigCommand;
}($Command));
export { ListFunctionsByCodeSigningConfigCommand };
//# sourceMappingURL=ListFunctionsByCodeSigningConfigCommand.js.map