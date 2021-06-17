import { __extends } from "tslib";
import { AcceptInvitationRequest } from "../models/models_0";
import { deserializeAws_restJson1AcceptInvitationCommand, serializeAws_restJson1AcceptInvitationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts an invitation for the member account to contribute data to a behavior graph.
 *          This operation can only be called by an invited member account. </p>
 *          <p>The request provides the ARN of behavior graph.</p>
 *          <p>The member account status in the graph must be <code>INVITED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, AcceptInvitationCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, AcceptInvitationCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new AcceptInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptInvitationCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptInvitationCommand = /** @class */ (function (_super) {
    __extends(AcceptInvitationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptInvitationCommand(input) {
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
    AcceptInvitationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DetectiveClient";
        var commandName = "AcceptInvitationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptInvitationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptInvitationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AcceptInvitationCommand(input, context);
    };
    AcceptInvitationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AcceptInvitationCommand(output, context);
    };
    return AcceptInvitationCommand;
}($Command));
export { AcceptInvitationCommand };
//# sourceMappingURL=AcceptInvitationCommand.js.map