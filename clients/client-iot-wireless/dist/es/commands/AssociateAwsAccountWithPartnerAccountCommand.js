import { __extends } from "tslib";
import { AssociateAwsAccountWithPartnerAccountRequest, AssociateAwsAccountWithPartnerAccountResponse, } from "../models/models_0";
import { deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand, serializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a partner account with your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateAwsAccountWithPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateAwsAccountWithPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new AssociateAwsAccountWithPartnerAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAwsAccountWithPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateAwsAccountWithPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateAwsAccountWithPartnerAccountCommand = /** @class */ (function (_super) {
    __extends(AssociateAwsAccountWithPartnerAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateAwsAccountWithPartnerAccountCommand(input) {
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
    AssociateAwsAccountWithPartnerAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "AssociateAwsAccountWithPartnerAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateAwsAccountWithPartnerAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateAwsAccountWithPartnerAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateAwsAccountWithPartnerAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand(input, context);
    };
    AssociateAwsAccountWithPartnerAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand(output, context);
    };
    return AssociateAwsAccountWithPartnerAccountCommand;
}($Command));
export { AssociateAwsAccountWithPartnerAccountCommand };
//# sourceMappingURL=AssociateAwsAccountWithPartnerAccountCommand.js.map