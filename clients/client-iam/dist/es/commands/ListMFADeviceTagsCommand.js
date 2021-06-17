import { __extends } from "tslib";
import { ListMFADeviceTagsRequest, ListMFADeviceTagsResponse } from "../models/models_0";
import { deserializeAws_queryListMFADeviceTagsCommand, serializeAws_queryListMFADeviceTagsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is
 *       sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListMFADeviceTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListMFADeviceTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListMFADeviceTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMFADeviceTagsCommandInput} for command's `input` shape.
 * @see {@link ListMFADeviceTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMFADeviceTagsCommand = /** @class */ (function (_super) {
    __extends(ListMFADeviceTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMFADeviceTagsCommand(input) {
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
    ListMFADeviceTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListMFADeviceTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMFADeviceTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMFADeviceTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMFADeviceTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListMFADeviceTagsCommand(input, context);
    };
    ListMFADeviceTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListMFADeviceTagsCommand(output, context);
    };
    return ListMFADeviceTagsCommand;
}($Command));
export { ListMFADeviceTagsCommand };
//# sourceMappingURL=ListMFADeviceTagsCommand.js.map