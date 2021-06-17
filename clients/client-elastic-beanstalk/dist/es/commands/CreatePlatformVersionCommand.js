import { __extends } from "tslib";
import { CreatePlatformVersionRequest, CreatePlatformVersionResult } from "../models/models_0";
import { deserializeAws_queryCreatePlatformVersionCommand, serializeAws_queryCreatePlatformVersionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a new version of your custom platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreatePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreatePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CreatePlatformVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePlatformVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePlatformVersionCommand = /** @class */ (function (_super) {
    __extends(CreatePlatformVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePlatformVersionCommand(input) {
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
    CreatePlatformVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "CreatePlatformVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePlatformVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePlatformVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePlatformVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreatePlatformVersionCommand(input, context);
    };
    CreatePlatformVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreatePlatformVersionCommand(output, context);
    };
    return CreatePlatformVersionCommand;
}($Command));
export { CreatePlatformVersionCommand };
//# sourceMappingURL=CreatePlatformVersionCommand.js.map