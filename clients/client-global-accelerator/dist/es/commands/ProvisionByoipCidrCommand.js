import { __extends } from "tslib";
import { ProvisionByoipCidrRequest, ProvisionByoipCidrResponse } from "../models/models_0";
import { deserializeAws_json1_1ProvisionByoipCidrCommand, serializeAws_json1_1ProvisionByoipCidrCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provisions an IP address range to use with your AWS resources through bring your own IP
 * 			addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned,
 * 			it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html">
 * 			AdvertiseByoipCidr</a>.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
 * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ProvisionByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ProvisionByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ProvisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ProvisionByoipCidrCommand = /** @class */ (function (_super) {
    __extends(ProvisionByoipCidrCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ProvisionByoipCidrCommand(input) {
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
    ProvisionByoipCidrCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "ProvisionByoipCidrCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ProvisionByoipCidrRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ProvisionByoipCidrResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ProvisionByoipCidrCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ProvisionByoipCidrCommand(input, context);
    };
    ProvisionByoipCidrCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ProvisionByoipCidrCommand(output, context);
    };
    return ProvisionByoipCidrCommand;
}($Command));
export { ProvisionByoipCidrCommand };
//# sourceMappingURL=ProvisionByoipCidrCommand.js.map