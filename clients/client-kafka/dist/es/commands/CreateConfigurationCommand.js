import { __extends } from "tslib";
import { CreateConfigurationRequest, CreateConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateConfigurationCommand, serializeAws_restJson1CreateConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new MSK configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, CreateConfigurationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, CreateConfigurationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new CreateConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConfigurationCommand = /** @class */ (function (_super) {
    __extends(CreateConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateConfigurationCommand(input) {
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
    CreateConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "CreateConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateConfigurationCommand(input, context);
    };
    CreateConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateConfigurationCommand(output, context);
    };
    return CreateConfigurationCommand;
}($Command));
export { CreateConfigurationCommand };
//# sourceMappingURL=CreateConfigurationCommand.js.map