import { __extends } from "tslib";
import { ListEventSourceMappingsRequest, ListEventSourceMappingsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListEventSourceMappingsCommand, serializeAws_restJson1ListEventSourceMappingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists event source mappings. Specify an <code>EventSourceArn</code> to only show event source mappings for a
 *       single event source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListEventSourceMappingsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListEventSourceMappingsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListEventSourceMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventSourceMappingsCommandInput} for command's `input` shape.
 * @see {@link ListEventSourceMappingsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEventSourceMappingsCommand = /** @class */ (function (_super) {
    __extends(ListEventSourceMappingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEventSourceMappingsCommand(input) {
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
    ListEventSourceMappingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "ListEventSourceMappingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEventSourceMappingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEventSourceMappingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEventSourceMappingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListEventSourceMappingsCommand(input, context);
    };
    ListEventSourceMappingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListEventSourceMappingsCommand(output, context);
    };
    return ListEventSourceMappingsCommand;
}($Command));
export { ListEventSourceMappingsCommand };
//# sourceMappingURL=ListEventSourceMappingsCommand.js.map