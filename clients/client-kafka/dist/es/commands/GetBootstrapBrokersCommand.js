import { __extends } from "tslib";
import { GetBootstrapBrokersRequest, GetBootstrapBrokersResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBootstrapBrokersCommand, serializeAws_restJson1GetBootstrapBrokersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A list of brokers that a client application can use to bootstrap.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, GetBootstrapBrokersCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, GetBootstrapBrokersCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new GetBootstrapBrokersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBootstrapBrokersCommandInput} for command's `input` shape.
 * @see {@link GetBootstrapBrokersCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBootstrapBrokersCommand = /** @class */ (function (_super) {
    __extends(GetBootstrapBrokersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBootstrapBrokersCommand(input) {
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
    GetBootstrapBrokersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "GetBootstrapBrokersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBootstrapBrokersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBootstrapBrokersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBootstrapBrokersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBootstrapBrokersCommand(input, context);
    };
    GetBootstrapBrokersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBootstrapBrokersCommand(output, context);
    };
    return GetBootstrapBrokersCommand;
}($Command));
export { GetBootstrapBrokersCommand };
//# sourceMappingURL=GetBootstrapBrokersCommand.js.map