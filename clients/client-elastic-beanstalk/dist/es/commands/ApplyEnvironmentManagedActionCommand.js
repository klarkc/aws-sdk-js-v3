import { __extends } from "tslib";
import { ApplyEnvironmentManagedActionRequest, ApplyEnvironmentManagedActionResult } from "../models/models_0";
import { deserializeAws_queryApplyEnvironmentManagedActionCommand, serializeAws_queryApplyEnvironmentManagedActionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Applies a scheduled managed action immediately. A managed action can be applied only if
 *       its status is <code>Scheduled</code>. Get the status and action ID of a managed action with
 *         <a>DescribeEnvironmentManagedActions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ApplyEnvironmentManagedActionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ApplyEnvironmentManagedActionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ApplyEnvironmentManagedActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplyEnvironmentManagedActionCommandInput} for command's `input` shape.
 * @see {@link ApplyEnvironmentManagedActionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ApplyEnvironmentManagedActionCommand = /** @class */ (function (_super) {
    __extends(ApplyEnvironmentManagedActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ApplyEnvironmentManagedActionCommand(input) {
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
    ApplyEnvironmentManagedActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "ApplyEnvironmentManagedActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ApplyEnvironmentManagedActionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ApplyEnvironmentManagedActionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ApplyEnvironmentManagedActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryApplyEnvironmentManagedActionCommand(input, context);
    };
    ApplyEnvironmentManagedActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryApplyEnvironmentManagedActionCommand(output, context);
    };
    return ApplyEnvironmentManagedActionCommand;
}($Command));
export { ApplyEnvironmentManagedActionCommand };
//# sourceMappingURL=ApplyEnvironmentManagedActionCommand.js.map