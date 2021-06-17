import { __extends } from "tslib";
import { SwapEnvironmentCNAMEsMessage } from "../models/models_0";
import { deserializeAws_querySwapEnvironmentCNAMEsCommand, serializeAws_querySwapEnvironmentCNAMEsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Swaps the CNAMEs of two environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, SwapEnvironmentCNAMEsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, SwapEnvironmentCNAMEsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new SwapEnvironmentCNAMEsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SwapEnvironmentCNAMEsCommandInput} for command's `input` shape.
 * @see {@link SwapEnvironmentCNAMEsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SwapEnvironmentCNAMEsCommand = /** @class */ (function (_super) {
    __extends(SwapEnvironmentCNAMEsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SwapEnvironmentCNAMEsCommand(input) {
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
    SwapEnvironmentCNAMEsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "SwapEnvironmentCNAMEsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SwapEnvironmentCNAMEsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SwapEnvironmentCNAMEsCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySwapEnvironmentCNAMEsCommand(input, context);
    };
    SwapEnvironmentCNAMEsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySwapEnvironmentCNAMEsCommand(output, context);
    };
    return SwapEnvironmentCNAMEsCommand;
}($Command));
export { SwapEnvironmentCNAMEsCommand };
//# sourceMappingURL=SwapEnvironmentCNAMEsCommand.js.map