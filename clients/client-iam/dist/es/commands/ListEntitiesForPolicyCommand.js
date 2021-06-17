import { __extends } from "tslib";
import { ListEntitiesForPolicyRequest, ListEntitiesForPolicyResponse } from "../models/models_0";
import { deserializeAws_queryListEntitiesForPolicyCommand, serializeAws_queryListEntitiesForPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all IAM users, groups, and roles that the specified managed policy is attached
 *             to.</p>
 *         <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a
 *             particular type of entity (users, groups, or roles). For example, to list only the roles
 *             that are attached to the specified policy, set <code>EntityFilter</code> to
 *                 <code>Role</code>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListEntitiesForPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListEntitiesForPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListEntitiesForPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEntitiesForPolicyCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesForPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEntitiesForPolicyCommand = /** @class */ (function (_super) {
    __extends(ListEntitiesForPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEntitiesForPolicyCommand(input) {
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
    ListEntitiesForPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListEntitiesForPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEntitiesForPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEntitiesForPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEntitiesForPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListEntitiesForPolicyCommand(input, context);
    };
    ListEntitiesForPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListEntitiesForPolicyCommand(output, context);
    };
    return ListEntitiesForPolicyCommand;
}($Command));
export { ListEntitiesForPolicyCommand };
//# sourceMappingURL=ListEntitiesForPolicyCommand.js.map