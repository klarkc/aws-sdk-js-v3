import { __extends } from "tslib";
import { ListScramSecretsRequest, ListScramSecretsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListScramSecretsCommand, serializeAws_restJson1ListScramSecretsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the Scram Secrets associated with an Amazon MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListScramSecretsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListScramSecretsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListScramSecretsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListScramSecretsCommandInput} for command's `input` shape.
 * @see {@link ListScramSecretsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListScramSecretsCommand = /** @class */ (function (_super) {
    __extends(ListScramSecretsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListScramSecretsCommand(input) {
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
    ListScramSecretsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "ListScramSecretsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListScramSecretsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListScramSecretsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListScramSecretsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListScramSecretsCommand(input, context);
    };
    ListScramSecretsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListScramSecretsCommand(output, context);
    };
    return ListScramSecretsCommand;
}($Command));
export { ListScramSecretsCommand };
//# sourceMappingURL=ListScramSecretsCommand.js.map