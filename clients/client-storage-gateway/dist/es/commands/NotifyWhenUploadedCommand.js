import { __extends } from "tslib";
import { NotifyWhenUploadedInput, NotifyWhenUploadedOutput } from "../models/models_0";
import { deserializeAws_json1_1NotifyWhenUploadedCommand, serializeAws_json1_1NotifyWhenUploadedCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends you notification through CloudWatch Events when all files written to your file
 *          share have been uploaded to Amazon S3.</p>
 *
 *          <p>AWS Storage Gateway can send a notification through Amazon CloudWatch Events when all
 *          files written to your file share up to that point in time have been uploaded to Amazon S3.
 *          These files include files written to the file share up to the time that you make a request
 *          for notification. When the upload is done, Storage Gateway sends you notification through
 *          an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification
 *          through event targets such as Amazon SNS or AWS Lambda function. This operation is only
 *          supported for file gateways.</p>
 *
 *
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification">Getting file upload notification</a> in the <i>AWS Storage Gateway User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, NotifyWhenUploadedCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, NotifyWhenUploadedCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new NotifyWhenUploadedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyWhenUploadedCommandInput} for command's `input` shape.
 * @see {@link NotifyWhenUploadedCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var NotifyWhenUploadedCommand = /** @class */ (function (_super) {
    __extends(NotifyWhenUploadedCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function NotifyWhenUploadedCommand(input) {
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
    NotifyWhenUploadedCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "NotifyWhenUploadedCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: NotifyWhenUploadedInput.filterSensitiveLog,
            outputFilterSensitiveLog: NotifyWhenUploadedOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    NotifyWhenUploadedCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1NotifyWhenUploadedCommand(input, context);
    };
    NotifyWhenUploadedCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1NotifyWhenUploadedCommand(output, context);
    };
    return NotifyWhenUploadedCommand;
}($Command));
export { NotifyWhenUploadedCommand };
//# sourceMappingURL=NotifyWhenUploadedCommand.js.map