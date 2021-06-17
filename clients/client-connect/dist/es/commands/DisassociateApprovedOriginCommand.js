import { __extends } from "tslib";
import { DisassociateApprovedOriginRequest } from "../models/models_0";
import { deserializeAws_restJson1DisassociateApprovedOriginCommand, serializeAws_restJson1DisassociateApprovedOriginCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Revokes access to integrated applications from Amazon Connect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateApprovedOriginCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateApprovedOriginCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateApprovedOriginCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateApprovedOriginCommandInput} for command's `input` shape.
 * @see {@link DisassociateApprovedOriginCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateApprovedOriginCommand = /** @class */ (function (_super) {
    __extends(DisassociateApprovedOriginCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateApprovedOriginCommand(input) {
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
    DisassociateApprovedOriginCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DisassociateApprovedOriginCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateApprovedOriginRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateApprovedOriginCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateApprovedOriginCommand(input, context);
    };
    DisassociateApprovedOriginCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateApprovedOriginCommand(output, context);
    };
    return DisassociateApprovedOriginCommand;
}($Command));
export { DisassociateApprovedOriginCommand };
//# sourceMappingURL=DisassociateApprovedOriginCommand.js.map