import { __extends } from "tslib";
import { AssociateApprovedOriginRequest } from "../models/models_0";
import { deserializeAws_restJson1AssociateApprovedOriginCommand, serializeAws_restJson1AssociateApprovedOriginCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates an approved origin to an Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateApprovedOriginCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateApprovedOriginCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateApprovedOriginCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateApprovedOriginCommandInput} for command's `input` shape.
 * @see {@link AssociateApprovedOriginCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateApprovedOriginCommand = /** @class */ (function (_super) {
    __extends(AssociateApprovedOriginCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateApprovedOriginCommand(input) {
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
    AssociateApprovedOriginCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "AssociateApprovedOriginCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateApprovedOriginRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateApprovedOriginCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateApprovedOriginCommand(input, context);
    };
    AssociateApprovedOriginCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateApprovedOriginCommand(output, context);
    };
    return AssociateApprovedOriginCommand;
}($Command));
export { AssociateApprovedOriginCommand };
//# sourceMappingURL=AssociateApprovedOriginCommand.js.map