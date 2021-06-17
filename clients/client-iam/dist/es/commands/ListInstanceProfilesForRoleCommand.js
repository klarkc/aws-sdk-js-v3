import { __extends } from "tslib";
import { ListInstanceProfilesForRoleRequest, ListInstanceProfilesForRoleResponse } from "../models/models_0";
import { deserializeAws_queryListInstanceProfilesForRoleCommand, serializeAws_queryListInstanceProfilesForRoleCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the instance profiles that have the specified associated IAM role. If there
 *             are none, the operation returns an empty list. For more information about instance
 *             profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
 *             profiles</a>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListInstanceProfilesForRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListInstanceProfilesForRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListInstanceProfilesForRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceProfilesForRoleCommandInput} for command's `input` shape.
 * @see {@link ListInstanceProfilesForRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInstanceProfilesForRoleCommand = /** @class */ (function (_super) {
    __extends(ListInstanceProfilesForRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInstanceProfilesForRoleCommand(input) {
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
    ListInstanceProfilesForRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListInstanceProfilesForRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInstanceProfilesForRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInstanceProfilesForRoleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInstanceProfilesForRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListInstanceProfilesForRoleCommand(input, context);
    };
    ListInstanceProfilesForRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListInstanceProfilesForRoleCommand(output, context);
    };
    return ListInstanceProfilesForRoleCommand;
}($Command));
export { ListInstanceProfilesForRoleCommand };
//# sourceMappingURL=ListInstanceProfilesForRoleCommand.js.map