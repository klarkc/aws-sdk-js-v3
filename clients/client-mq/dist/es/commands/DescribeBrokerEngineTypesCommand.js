import { __extends } from "tslib";
import { DescribeBrokerEngineTypesRequest, DescribeBrokerEngineTypesResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeBrokerEngineTypesCommand, serializeAws_restJson1DescribeBrokerEngineTypesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Describe available engine types and versions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerEngineTypesCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerEngineTypesCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DescribeBrokerEngineTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBrokerEngineTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeBrokerEngineTypesCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBrokerEngineTypesCommand = /** @class */ (function (_super) {
    __extends(DescribeBrokerEngineTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBrokerEngineTypesCommand(input) {
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
    DescribeBrokerEngineTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "DescribeBrokerEngineTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBrokerEngineTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBrokerEngineTypesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBrokerEngineTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeBrokerEngineTypesCommand(input, context);
    };
    DescribeBrokerEngineTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeBrokerEngineTypesCommand(output, context);
    };
    return DescribeBrokerEngineTypesCommand;
}($Command));
export { DescribeBrokerEngineTypesCommand };
//# sourceMappingURL=DescribeBrokerEngineTypesCommand.js.map