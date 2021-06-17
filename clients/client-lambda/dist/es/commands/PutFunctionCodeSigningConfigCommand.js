import { __extends } from "tslib";
import { PutFunctionCodeSigningConfigRequest, PutFunctionCodeSigningConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1PutFunctionCodeSigningConfigCommand, serializeAws_restJson1PutFunctionCodeSigningConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update the code signing configuration for the function. Changes to the code signing configuration take effect the
 *       next time a user tries to deploy a code package to the function. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PutFunctionCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFunctionCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link PutFunctionCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutFunctionCodeSigningConfigCommand = /** @class */ (function (_super) {
    __extends(PutFunctionCodeSigningConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutFunctionCodeSigningConfigCommand(input) {
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
    PutFunctionCodeSigningConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "PutFunctionCodeSigningConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutFunctionCodeSigningConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutFunctionCodeSigningConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutFunctionCodeSigningConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutFunctionCodeSigningConfigCommand(input, context);
    };
    PutFunctionCodeSigningConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutFunctionCodeSigningConfigCommand(output, context);
    };
    return PutFunctionCodeSigningConfigCommand;
}($Command));
export { PutFunctionCodeSigningConfigCommand };
//# sourceMappingURL=PutFunctionCodeSigningConfigCommand.js.map