import { __extends } from "tslib";
import { CheckDNSAvailabilityMessage, CheckDNSAvailabilityResultMessage } from "../models/models_0";
import { deserializeAws_queryCheckDNSAvailabilityCommand, serializeAws_queryCheckDNSAvailabilityCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Checks if the specified CNAME is available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CheckDNSAvailabilityCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CheckDNSAvailabilityCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CheckDNSAvailabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckDNSAvailabilityCommandInput} for command's `input` shape.
 * @see {@link CheckDNSAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CheckDNSAvailabilityCommand = /** @class */ (function (_super) {
    __extends(CheckDNSAvailabilityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CheckDNSAvailabilityCommand(input) {
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
    CheckDNSAvailabilityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "CheckDNSAvailabilityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CheckDNSAvailabilityMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CheckDNSAvailabilityResultMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CheckDNSAvailabilityCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCheckDNSAvailabilityCommand(input, context);
    };
    CheckDNSAvailabilityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCheckDNSAvailabilityCommand(output, context);
    };
    return CheckDNSAvailabilityCommand;
}($Command));
export { CheckDNSAvailabilityCommand };
//# sourceMappingURL=CheckDNSAvailabilityCommand.js.map