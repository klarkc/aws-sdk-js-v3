import { __extends } from "tslib";
import { RequestEnvironmentInfoMessage } from "../models/models_0";
import { deserializeAws_queryRequestEnvironmentInfoCommand, serializeAws_queryRequestEnvironmentInfoCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates a request to compile the specified type of information of the deployed
 *       environment.</p>
 *          <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from
 *       the application server log files of every Amazon EC2 instance in your environment. </p>
 *          <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application
 *       server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET
 *       containers do not support bundle logs. </p>
 *          <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>RetrieveEnvironmentInfo</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RequestEnvironmentInfoCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RequestEnvironmentInfoCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new RequestEnvironmentInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestEnvironmentInfoCommandInput} for command's `input` shape.
 * @see {@link RequestEnvironmentInfoCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RequestEnvironmentInfoCommand = /** @class */ (function (_super) {
    __extends(RequestEnvironmentInfoCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RequestEnvironmentInfoCommand(input) {
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
    RequestEnvironmentInfoCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "RequestEnvironmentInfoCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RequestEnvironmentInfoMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RequestEnvironmentInfoCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRequestEnvironmentInfoCommand(input, context);
    };
    RequestEnvironmentInfoCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRequestEnvironmentInfoCommand(output, context);
    };
    return RequestEnvironmentInfoCommand;
}($Command));
export { RequestEnvironmentInfoCommand };
//# sourceMappingURL=RequestEnvironmentInfoCommand.js.map