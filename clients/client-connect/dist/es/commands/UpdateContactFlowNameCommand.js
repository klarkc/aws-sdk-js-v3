import { __extends } from "tslib";
import { UpdateContactFlowNameRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateContactFlowNameCommand, serializeAws_restJson1UpdateContactFlowNameCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The name of the contact flow.</p>
 *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowNameCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowNameCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateContactFlowNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContactFlowNameCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowNameCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateContactFlowNameCommand = /** @class */ (function (_super) {
    __extends(UpdateContactFlowNameCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateContactFlowNameCommand(input) {
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
    UpdateContactFlowNameCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateContactFlowNameCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateContactFlowNameRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateContactFlowNameCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateContactFlowNameCommand(input, context);
    };
    UpdateContactFlowNameCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateContactFlowNameCommand(output, context);
    };
    return UpdateContactFlowNameCommand;
}($Command));
export { UpdateContactFlowNameCommand };
//# sourceMappingURL=UpdateContactFlowNameCommand.js.map