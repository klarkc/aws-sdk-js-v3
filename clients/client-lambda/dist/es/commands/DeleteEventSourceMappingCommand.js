import { __extends } from "tslib";
import { DeleteEventSourceMappingRequest, EventSourceMappingConfiguration } from "../models/models_0";
import { deserializeAws_restJson1DeleteEventSourceMappingCommand, serializeAws_restJson1DeleteEventSourceMappingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source
 *       mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p>
 *          <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link DeleteEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEventSourceMappingCommand = /** @class */ (function (_super) {
    __extends(DeleteEventSourceMappingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEventSourceMappingCommand(input) {
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
    DeleteEventSourceMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "DeleteEventSourceMappingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEventSourceMappingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EventSourceMappingConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEventSourceMappingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteEventSourceMappingCommand(input, context);
    };
    DeleteEventSourceMappingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteEventSourceMappingCommand(output, context);
    };
    return DeleteEventSourceMappingCommand;
}($Command));
export { DeleteEventSourceMappingCommand };
//# sourceMappingURL=DeleteEventSourceMappingCommand.js.map