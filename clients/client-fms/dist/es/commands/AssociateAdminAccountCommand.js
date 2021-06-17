import { __extends } from "tslib";
import { AssociateAdminAccountRequest } from "../models/models_0";
import { deserializeAws_json1_1AssociateAdminAccountCommand, serializeAws_json1_1AssociateAdminAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the AWS Firewall Manager administrator account. AWS Firewall Manager must be
 *       associated with the master account of your AWS organization or associated with a member
 *       account that has the appropriate permissions. If the account ID that you submit is not an AWS
 *       Organizations master account, AWS Firewall Manager will set the appropriate permissions for
 *       the given member account.</p>
 *          <p>The account that you associate with AWS Firewall Manager is called the AWS Firewall
 *       Manager administrator account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, AssociateAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, AssociateAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new AssociateAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAdminAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateAdminAccountCommand = /** @class */ (function (_super) {
    __extends(AssociateAdminAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateAdminAccountCommand(input) {
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
    AssociateAdminAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "AssociateAdminAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateAdminAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateAdminAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateAdminAccountCommand(input, context);
    };
    AssociateAdminAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateAdminAccountCommand(output, context);
    };
    return AssociateAdminAccountCommand;
}($Command));
export { AssociateAdminAccountCommand };
//# sourceMappingURL=AssociateAdminAccountCommand.js.map