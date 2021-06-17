import { __extends } from "tslib";
import { DeleteAuthorizerRequest, DeleteAuthorizerResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAuthorizerCommand, serializeAws_restJson1DeleteAuthorizerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an authorizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAuthorizerCommandInput} for command's `input` shape.
 * @see {@link DeleteAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAuthorizerCommand = /** @class */ (function (_super) {
    __extends(DeleteAuthorizerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAuthorizerCommand(input) {
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
    DeleteAuthorizerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteAuthorizerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAuthorizerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAuthorizerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAuthorizerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAuthorizerCommand(input, context);
    };
    DeleteAuthorizerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAuthorizerCommand(output, context);
    };
    return DeleteAuthorizerCommand;
}($Command));
export { DeleteAuthorizerCommand };
//# sourceMappingURL=DeleteAuthorizerCommand.js.map