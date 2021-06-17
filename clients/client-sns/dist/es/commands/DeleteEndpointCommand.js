import { __extends } from "tslib";
import { DeleteEndpointInput } from "../models/models_0";
import { deserializeAws_queryDeleteEndpointCommand, serializeAws_queryDeleteEndpointCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the endpoint for a device and mobile app from Amazon SNS. This action is
 *             idempotent. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *             Notifications</a>. </p>
 *         <p>When you delete an endpoint that is also subscribed to a topic, then you must also
 *             unsubscribe the endpoint from the topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, DeleteEndpointCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, DeleteEndpointCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new DeleteEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEndpointCommand = /** @class */ (function (_super) {
    __extends(DeleteEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEndpointCommand(input) {
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
    DeleteEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "DeleteEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteEndpointCommand(input, context);
    };
    DeleteEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteEndpointCommand(output, context);
    };
    return DeleteEndpointCommand;
}($Command));
export { DeleteEndpointCommand };
//# sourceMappingURL=DeleteEndpointCommand.js.map