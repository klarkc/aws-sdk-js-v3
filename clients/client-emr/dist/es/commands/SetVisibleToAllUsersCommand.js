import { __extends } from "tslib";
import { SetVisibleToAllUsersInput } from "../models/models_0";
import { deserializeAws_json1_1SetVisibleToAllUsersCommand, serializeAws_json1_1SetVisibleToAllUsersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the <a>Cluster$VisibleToAllUsers</a> value, which determines whether the
 *          cluster is visible to all IAM users of the AWS account associated with the cluster. Only
 *          the IAM user who created the cluster or the AWS account root user can call this action. The
 *          default value, <code>true</code>, indicates that all IAM users in the AWS account can
 *          perform cluster actions if they have the proper IAM policy permissions. If set to
 *             <code>false</code>, only the IAM user that created the cluster can perform actions. This
 *          action works on running clusters. You can override the default <code>true</code> setting
 *          when you create a cluster by using the <code>VisibleToAllUsers</code> parameter with
 *             <code>RunJobFlow</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, SetVisibleToAllUsersCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, SetVisibleToAllUsersCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new SetVisibleToAllUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetVisibleToAllUsersCommandInput} for command's `input` shape.
 * @see {@link SetVisibleToAllUsersCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetVisibleToAllUsersCommand = /** @class */ (function (_super) {
    __extends(SetVisibleToAllUsersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetVisibleToAllUsersCommand(input) {
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
    SetVisibleToAllUsersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "SetVisibleToAllUsersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetVisibleToAllUsersInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetVisibleToAllUsersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetVisibleToAllUsersCommand(input, context);
    };
    SetVisibleToAllUsersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetVisibleToAllUsersCommand(output, context);
    };
    return SetVisibleToAllUsersCommand;
}($Command));
export { SetVisibleToAllUsersCommand };
//# sourceMappingURL=SetVisibleToAllUsersCommand.js.map