import { __extends } from "tslib";
import { ApplicationDescriptionMessage, CreateApplicationMessage } from "../models/models_0";
import { deserializeAws_queryCreateApplicationCommand, serializeAws_queryCreateApplicationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an application that has one configuration template named <code>default</code>
 *       and no application versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateApplicationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateApplicationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateApplicationCommand = /** @class */ (function (_super) {
    __extends(CreateApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateApplicationCommand(input) {
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
    CreateApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "CreateApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateApplicationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ApplicationDescriptionMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateApplicationCommand(input, context);
    };
    CreateApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateApplicationCommand(output, context);
    };
    return CreateApplicationCommand;
}($Command));
export { CreateApplicationCommand };
//# sourceMappingURL=CreateApplicationCommand.js.map