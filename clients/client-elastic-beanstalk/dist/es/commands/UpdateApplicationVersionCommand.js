import { __extends } from "tslib";
import { ApplicationVersionDescriptionMessage, UpdateApplicationVersionMessage } from "../models/models_0";
import { deserializeAws_queryUpdateApplicationVersionCommand, serializeAws_queryUpdateApplicationVersionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified application version to have the specified properties.</p>
 *          <note>
 *             <p>If a property (for example, <code>description</code>) is not provided, the value
 *         remains unchanged. To clear properties, specify an empty string.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateApplicationVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateApplicationVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApplicationVersionCommand = /** @class */ (function (_super) {
    __extends(UpdateApplicationVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApplicationVersionCommand(input) {
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
    UpdateApplicationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "UpdateApplicationVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApplicationVersionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ApplicationVersionDescriptionMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApplicationVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateApplicationVersionCommand(input, context);
    };
    UpdateApplicationVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateApplicationVersionCommand(output, context);
    };
    return UpdateApplicationVersionCommand;
}($Command));
export { UpdateApplicationVersionCommand };
//# sourceMappingURL=UpdateApplicationVersionCommand.js.map