import { __extends } from "tslib";
import { ComposeEnvironmentsMessage, EnvironmentDescriptionsMessage } from "../models/models_0";
import { deserializeAws_queryComposeEnvironmentsCommand, serializeAws_queryComposeEnvironmentsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create or update a group of environments that each run a separate component of a single
 *       application. Takes a list of version labels that specify application source bundles for each
 *       of the environments to create or update. The name of each environment and other required
 *       information must be included in the source bundles in an environment manifest named
 *       <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a>
 *       for details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ComposeEnvironmentsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ComposeEnvironmentsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ComposeEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ComposeEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ComposeEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ComposeEnvironmentsCommand = /** @class */ (function (_super) {
    __extends(ComposeEnvironmentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ComposeEnvironmentsCommand(input) {
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
    ComposeEnvironmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "ComposeEnvironmentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ComposeEnvironmentsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: EnvironmentDescriptionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ComposeEnvironmentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryComposeEnvironmentsCommand(input, context);
    };
    ComposeEnvironmentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryComposeEnvironmentsCommand(output, context);
    };
    return ComposeEnvironmentsCommand;
}($Command));
export { ComposeEnvironmentsCommand };
//# sourceMappingURL=ComposeEnvironmentsCommand.js.map