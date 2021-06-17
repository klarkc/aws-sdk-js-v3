import { __extends } from "tslib";
import { DisassociateAdminAccountRequest } from "../models/models_0";
import { deserializeAws_json1_1DisassociateAdminAccountCommand, serializeAws_json1_1DisassociateAdminAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the account that has been set as the AWS Firewall Manager administrator
 *       account. To set a different account as the administrator account, you must submit an
 *         <code>AssociateAdminAccount</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DisassociateAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DisassociateAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DisassociateAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateAdminAccountCommand = /** @class */ (function (_super) {
    __extends(DisassociateAdminAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateAdminAccountCommand(input) {
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
    DisassociateAdminAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "DisassociateAdminAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateAdminAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateAdminAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateAdminAccountCommand(input, context);
    };
    DisassociateAdminAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateAdminAccountCommand(output, context);
    };
    return DisassociateAdminAccountCommand;
}($Command));
export { DisassociateAdminAccountCommand };
//# sourceMappingURL=DisassociateAdminAccountCommand.js.map