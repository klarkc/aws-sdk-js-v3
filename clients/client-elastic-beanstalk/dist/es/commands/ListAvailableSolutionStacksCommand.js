import { __extends } from "tslib";
import { ListAvailableSolutionStacksResultMessage } from "../models/models_0";
import { deserializeAws_queryListAvailableSolutionStacksCommand, serializeAws_queryListAvailableSolutionStacksCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the available solution stack names, with the public version first and
 *       then in reverse chronological order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ListAvailableSolutionStacksCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ListAvailableSolutionStacksCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ListAvailableSolutionStacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAvailableSolutionStacksCommandInput} for command's `input` shape.
 * @see {@link ListAvailableSolutionStacksCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAvailableSolutionStacksCommand = /** @class */ (function (_super) {
    __extends(ListAvailableSolutionStacksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAvailableSolutionStacksCommand(input) {
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
    ListAvailableSolutionStacksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "ListAvailableSolutionStacksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: ListAvailableSolutionStacksResultMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAvailableSolutionStacksCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListAvailableSolutionStacksCommand(input, context);
    };
    ListAvailableSolutionStacksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListAvailableSolutionStacksCommand(output, context);
    };
    return ListAvailableSolutionStacksCommand;
}($Command));
export { ListAvailableSolutionStacksCommand };
//# sourceMappingURL=ListAvailableSolutionStacksCommand.js.map