import { __extends } from "tslib";
import { DeleteLayerVersionRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteLayerVersionCommand, serializeAws_restJson1DeleteLayerVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid
 *       breaking functions, a copy of the version remains in Lambda until no functions refer to it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteLayerVersionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteLayerVersionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteLayerVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLayerVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteLayerVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLayerVersionCommand = /** @class */ (function (_super) {
    __extends(DeleteLayerVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLayerVersionCommand(input) {
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
    DeleteLayerVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "DeleteLayerVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLayerVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLayerVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteLayerVersionCommand(input, context);
    };
    DeleteLayerVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteLayerVersionCommand(output, context);
    };
    return DeleteLayerVersionCommand;
}($Command));
export { DeleteLayerVersionCommand };
//# sourceMappingURL=DeleteLayerVersionCommand.js.map