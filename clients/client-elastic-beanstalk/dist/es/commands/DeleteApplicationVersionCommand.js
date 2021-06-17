import { __extends } from "tslib";
import { DeleteApplicationVersionMessage } from "../models/models_0";
import { deserializeAws_queryDeleteApplicationVersionCommand, serializeAws_queryDeleteApplicationVersionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified version from the specified application.</p>
 *          <note>
 *             <p>You cannot delete an application version that is associated with a running
 *         environment.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeleteApplicationVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeleteApplicationVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DeleteApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApplicationVersionCommand = /** @class */ (function (_super) {
    __extends(DeleteApplicationVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApplicationVersionCommand(input) {
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
    DeleteApplicationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DeleteApplicationVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApplicationVersionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApplicationVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteApplicationVersionCommand(input, context);
    };
    DeleteApplicationVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteApplicationVersionCommand(output, context);
    };
    return DeleteApplicationVersionCommand;
}($Command));
export { DeleteApplicationVersionCommand };
//# sourceMappingURL=DeleteApplicationVersionCommand.js.map