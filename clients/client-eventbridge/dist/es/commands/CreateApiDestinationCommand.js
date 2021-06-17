import { __extends } from "tslib";
import { CreateApiDestinationRequest, CreateApiDestinationResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateApiDestinationCommand, serializeAws_json1_1CreateApiDestinationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an API destination, which is an HTTP invocation endpoint configured as a target
 *       for events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CreateApiDestinationCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CreateApiDestinationCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new CreateApiDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApiDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateApiDestinationCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateApiDestinationCommand = /** @class */ (function (_super) {
    __extends(CreateApiDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateApiDestinationCommand(input) {
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
    CreateApiDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "CreateApiDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateApiDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateApiDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateApiDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateApiDestinationCommand(input, context);
    };
    CreateApiDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateApiDestinationCommand(output, context);
    };
    return CreateApiDestinationCommand;
}($Command));
export { CreateApiDestinationCommand };
//# sourceMappingURL=CreateApiDestinationCommand.js.map