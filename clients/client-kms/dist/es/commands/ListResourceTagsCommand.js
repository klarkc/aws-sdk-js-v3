import { __extends } from "tslib";
import { ListResourceTagsRequest, ListResourceTagsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResourceTagsCommand, serializeAws_json1_1ListResourceTagsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all tags on the specified customer master key (CMK).</p>
 *          <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a> in
 *       the <i>Amazon Web Services General Reference</i>. For information about using
 *       tags in AWS KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging
 *         keys</a>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListResourceTags</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListResourceTagsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListResourceTagsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ListResourceTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceTagsCommandInput} for command's `input` shape.
 * @see {@link ListResourceTagsCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourceTagsCommand = /** @class */ (function (_super) {
    __extends(ListResourceTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourceTagsCommand(input) {
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
    ListResourceTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "ListResourceTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourceTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourceTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourceTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResourceTagsCommand(input, context);
    };
    ListResourceTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResourceTagsCommand(output, context);
    };
    return ListResourceTagsCommand;
}($Command));
export { ListResourceTagsCommand };
//# sourceMappingURL=ListResourceTagsCommand.js.map