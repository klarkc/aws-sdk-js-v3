import { __extends } from "tslib";
import { UpdateContactFlowContentRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateContactFlowContentCommand, serializeAws_restJson1UpdateContactFlowContentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified contact flow.</p>
 *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowContentCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowContentCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateContactFlowContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContactFlowContentCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowContentCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateContactFlowContentCommand = /** @class */ (function (_super) {
    __extends(UpdateContactFlowContentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateContactFlowContentCommand(input) {
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
    UpdateContactFlowContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateContactFlowContentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateContactFlowContentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateContactFlowContentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateContactFlowContentCommand(input, context);
    };
    UpdateContactFlowContentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateContactFlowContentCommand(output, context);
    };
    return UpdateContactFlowContentCommand;
}($Command));
export { UpdateContactFlowContentCommand };
//# sourceMappingURL=UpdateContactFlowContentCommand.js.map