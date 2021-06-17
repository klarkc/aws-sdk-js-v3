import { __extends } from "tslib";
import { DeleteApplicationMessage } from "../models/models_0";
import { deserializeAws_queryDeleteApplicationCommand, serializeAws_queryDeleteApplicationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified application along with all associated versions and
 *       configurations. The application versions will not be deleted from your Amazon S3
 *       bucket.</p>
 *          <note>
 *             <p>You cannot delete an application that has a running environment.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeleteApplicationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeleteApplicationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DeleteApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApplicationCommand = /** @class */ (function (_super) {
    __extends(DeleteApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApplicationCommand(input) {
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
    DeleteApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticBeanstalkClient";
        var commandName = "DeleteApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApplicationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteApplicationCommand(input, context);
    };
    DeleteApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteApplicationCommand(output, context);
    };
    return DeleteApplicationCommand;
}($Command));
export { DeleteApplicationCommand };
//# sourceMappingURL=DeleteApplicationCommand.js.map