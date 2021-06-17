import { __extends } from "tslib";
import { AddAttachmentsToSetRequest, AddAttachmentsToSetResponse } from "../models/models_0";
import { deserializeAws_json1_1AddAttachmentsToSetCommand, serializeAws_json1_1AddAttachmentsToSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds one or more attachments to an attachment set. </p>
 *         <p>An attachment set is a temporary container for attachments that you add to a case or
 *             case communication. The set is available for 1 hour after it's created. The
 *                 <code>expiryTime</code> returned in the response is when the set expires. </p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, AddAttachmentsToSetCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, AddAttachmentsToSetCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new AddAttachmentsToSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddAttachmentsToSetCommandInput} for command's `input` shape.
 * @see {@link AddAttachmentsToSetCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddAttachmentsToSetCommand = /** @class */ (function (_super) {
    __extends(AddAttachmentsToSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddAttachmentsToSetCommand(input) {
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
    AddAttachmentsToSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SupportClient";
        var commandName = "AddAttachmentsToSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddAttachmentsToSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddAttachmentsToSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddAttachmentsToSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddAttachmentsToSetCommand(input, context);
    };
    AddAttachmentsToSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddAttachmentsToSetCommand(output, context);
    };
    return AddAttachmentsToSetCommand;
}($Command));
export { AddAttachmentsToSetCommand };
//# sourceMappingURL=AddAttachmentsToSetCommand.js.map