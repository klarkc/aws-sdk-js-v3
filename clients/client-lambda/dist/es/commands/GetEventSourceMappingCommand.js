import { __extends } from "tslib";
import { EventSourceMappingConfiguration, GetEventSourceMappingRequest } from "../models/models_0";
import { deserializeAws_restJson1GetEventSourceMappingCommand, serializeAws_restJson1GetEventSourceMappingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link GetEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEventSourceMappingCommand = /** @class */ (function (_super) {
    __extends(GetEventSourceMappingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEventSourceMappingCommand(input) {
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
    GetEventSourceMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "GetEventSourceMappingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEventSourceMappingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EventSourceMappingConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEventSourceMappingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetEventSourceMappingCommand(input, context);
    };
    GetEventSourceMappingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetEventSourceMappingCommand(output, context);
    };
    return GetEventSourceMappingCommand;
}($Command));
export { GetEventSourceMappingCommand };
//# sourceMappingURL=GetEventSourceMappingCommand.js.map