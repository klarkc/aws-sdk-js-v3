import { __extends } from "tslib";
import { DeleteProvisionedConcurrencyConfigRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand, serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the provisioned concurrency configuration for a function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteProvisionedConcurrencyConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProvisionedConcurrencyConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisionedConcurrencyConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProvisionedConcurrencyConfigCommand = /** @class */ (function (_super) {
    __extends(DeleteProvisionedConcurrencyConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProvisionedConcurrencyConfigCommand(input) {
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
    DeleteProvisionedConcurrencyConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "DeleteProvisionedConcurrencyConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProvisionedConcurrencyConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProvisionedConcurrencyConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand(input, context);
    };
    DeleteProvisionedConcurrencyConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand(output, context);
    };
    return DeleteProvisionedConcurrencyConfigCommand;
}($Command));
export { DeleteProvisionedConcurrencyConfigCommand };
//# sourceMappingURL=DeleteProvisionedConcurrencyConfigCommand.js.map