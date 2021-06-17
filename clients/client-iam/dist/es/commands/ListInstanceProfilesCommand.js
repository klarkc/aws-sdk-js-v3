import { __extends } from "tslib";
import { ListInstanceProfilesRequest, ListInstanceProfilesResponse } from "../models/models_0";
import { deserializeAws_queryListInstanceProfilesCommand, serializeAws_queryListInstanceProfilesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the instance profiles that have the specified path prefix. If there are none,
 *             the operation returns an empty list. For more information about instance profiles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About
 *                 instance profiles</a>.</p>
 *         <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p>
 *         </note>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListInstanceProfilesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListInstanceProfilesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListInstanceProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceProfilesCommandInput} for command's `input` shape.
 * @see {@link ListInstanceProfilesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInstanceProfilesCommand = /** @class */ (function (_super) {
    __extends(ListInstanceProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInstanceProfilesCommand(input) {
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
    ListInstanceProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListInstanceProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInstanceProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInstanceProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInstanceProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListInstanceProfilesCommand(input, context);
    };
    ListInstanceProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListInstanceProfilesCommand(output, context);
    };
    return ListInstanceProfilesCommand;
}($Command));
export { ListInstanceProfilesCommand };
//# sourceMappingURL=ListInstanceProfilesCommand.js.map