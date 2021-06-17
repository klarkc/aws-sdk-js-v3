import { __extends } from "tslib";
import { DisassociateConnectorRequest, DisassociateConnectorResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateConnectorCommand, serializeAws_json1_1DisassociateConnectorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the specified connector from AWS SMS.</p>
 *         <p>After you disassociate a connector, it is no longer available to support
 *             replication jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DisassociateConnectorCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DisassociateConnectorCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DisassociateConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateConnectorCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectorCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateConnectorCommand = /** @class */ (function (_super) {
    __extends(DisassociateConnectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateConnectorCommand(input) {
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
    DisassociateConnectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "DisassociateConnectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateConnectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateConnectorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateConnectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateConnectorCommand(input, context);
    };
    DisassociateConnectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateConnectorCommand(output, context);
    };
    return DisassociateConnectorCommand;
}($Command));
export { DisassociateConnectorCommand };
//# sourceMappingURL=DisassociateConnectorCommand.js.map