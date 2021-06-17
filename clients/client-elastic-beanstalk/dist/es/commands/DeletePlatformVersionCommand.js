import { __extends } from "tslib";
import { DeletePlatformVersionRequest, DeletePlatformVersionResult } from "../models/models_0";
import { deserializeAws_queryDeletePlatformVersionCommand, serializeAws_queryDeletePlatformVersionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified version of a custom platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeletePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeletePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DeletePlatformVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePlatformVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePlatformVersionCommand = /** @class */ (function (_super) {
    __extends(DeletePlatformVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePlatformVersionCommand(input) {
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
    DeletePlatformVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DeletePlatformVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePlatformVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePlatformVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePlatformVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeletePlatformVersionCommand(input, context);
    };
    DeletePlatformVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeletePlatformVersionCommand(output, context);
    };
    return DeletePlatformVersionCommand;
}($Command));
export { DeletePlatformVersionCommand };
//# sourceMappingURL=DeletePlatformVersionCommand.js.map