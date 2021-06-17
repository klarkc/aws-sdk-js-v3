import { __extends } from "tslib";
import { DeliverConfigSnapshotRequest, DeliverConfigSnapshotResponse } from "../models/models_0";
import { deserializeAws_json1_1DeliverConfigSnapshotCommand, serializeAws_json1_1DeliverConfigSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Schedules delivery of a configuration snapshot to the Amazon S3
 * 			bucket in the specified delivery channel. After the delivery has
 * 			started, AWS Config sends the following notifications using an
 * 			Amazon SNS topic that you have specified.</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Notification of the start of the delivery.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Notification of the completion of the delivery, if the
 * 					delivery was successfully completed.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Notification of delivery failure, if the delivery
 * 					failed.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeliverConfigSnapshotCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeliverConfigSnapshotCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeliverConfigSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeliverConfigSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeliverConfigSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeliverConfigSnapshotCommand = /** @class */ (function (_super) {
    __extends(DeliverConfigSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeliverConfigSnapshotCommand(input) {
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
    DeliverConfigSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeliverConfigSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeliverConfigSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeliverConfigSnapshotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeliverConfigSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeliverConfigSnapshotCommand(input, context);
    };
    DeliverConfigSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeliverConfigSnapshotCommand(output, context);
    };
    return DeliverConfigSnapshotCommand;
}($Command));
export { DeliverConfigSnapshotCommand };
//# sourceMappingURL=DeliverConfigSnapshotCommand.js.map