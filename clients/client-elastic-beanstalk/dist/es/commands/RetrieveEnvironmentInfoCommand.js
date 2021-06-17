import { __extends } from "tslib";
import { RetrieveEnvironmentInfoMessage, RetrieveEnvironmentInfoResultMessage } from "../models/models_0";
import { deserializeAws_queryRetrieveEnvironmentInfoCommand, serializeAws_queryRetrieveEnvironmentInfoCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a>
 *       request.</p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>RequestEnvironmentInfo</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RetrieveEnvironmentInfoCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RetrieveEnvironmentInfoCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new RetrieveEnvironmentInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetrieveEnvironmentInfoCommandInput} for command's `input` shape.
 * @see {@link RetrieveEnvironmentInfoCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RetrieveEnvironmentInfoCommand = /** @class */ (function (_super) {
    __extends(RetrieveEnvironmentInfoCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RetrieveEnvironmentInfoCommand(input) {
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
    RetrieveEnvironmentInfoCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "RetrieveEnvironmentInfoCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RetrieveEnvironmentInfoMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RetrieveEnvironmentInfoResultMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RetrieveEnvironmentInfoCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRetrieveEnvironmentInfoCommand(input, context);
    };
    RetrieveEnvironmentInfoCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRetrieveEnvironmentInfoCommand(output, context);
    };
    return RetrieveEnvironmentInfoCommand;
}($Command));
export { RetrieveEnvironmentInfoCommand };
//# sourceMappingURL=RetrieveEnvironmentInfoCommand.js.map