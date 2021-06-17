import { __extends } from "tslib";
import { ApplicationDescriptionMessage, UpdateApplicationMessage } from "../models/models_0";
import { deserializeAws_queryUpdateApplicationCommand, serializeAws_queryUpdateApplicationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified application to have the specified properties.</p>
 *          <note>
 *             <p>If a property (for example, <code>description</code>) is not provided, the value
 *         remains unchanged. To clear these properties, specify an empty string.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateApplicationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateApplicationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApplicationCommand = /** @class */ (function (_super) {
    __extends(UpdateApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApplicationCommand(input) {
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
    UpdateApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "UpdateApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApplicationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ApplicationDescriptionMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateApplicationCommand(input, context);
    };
    UpdateApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateApplicationCommand(output, context);
    };
    return UpdateApplicationCommand;
}($Command));
export { UpdateApplicationCommand };
//# sourceMappingURL=UpdateApplicationCommand.js.map