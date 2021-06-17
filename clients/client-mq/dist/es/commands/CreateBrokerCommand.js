import { __extends } from "tslib";
import { CreateBrokerRequest, CreateBrokerResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateBrokerCommand, serializeAws_restJson1CreateBrokerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a broker. Note: This API is asynchronous.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, CreateBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, CreateBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new CreateBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBrokerCommandInput} for command's `input` shape.
 * @see {@link CreateBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBrokerCommand = /** @class */ (function (_super) {
    __extends(CreateBrokerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBrokerCommand(input) {
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
    CreateBrokerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "CreateBrokerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBrokerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBrokerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBrokerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateBrokerCommand(input, context);
    };
    CreateBrokerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateBrokerCommand(output, context);
    };
    return CreateBrokerCommand;
}($Command));
export { CreateBrokerCommand };
//# sourceMappingURL=CreateBrokerCommand.js.map