import { __extends } from "tslib";
import { InvokeScreenAutomationRequest, InvokeScreenAutomationResult } from "../models/models_0";
import { deserializeAws_restJson1InvokeScreenAutomationCommand, serializeAws_restJson1InvokeScreenAutomationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app.
 *             The API allows setting local variables, which can then be used in the automation being invoked.
 *             This allows automating the Honeycode app interactions to write, update or delete data in the workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, InvokeScreenAutomationCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, InvokeScreenAutomationCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new InvokeScreenAutomationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeScreenAutomationCommandInput} for command's `input` shape.
 * @see {@link InvokeScreenAutomationCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InvokeScreenAutomationCommand = /** @class */ (function (_super) {
    __extends(InvokeScreenAutomationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InvokeScreenAutomationCommand(input) {
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
    InvokeScreenAutomationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HoneycodeClient";
        var commandName = "InvokeScreenAutomationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InvokeScreenAutomationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InvokeScreenAutomationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InvokeScreenAutomationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1InvokeScreenAutomationCommand(input, context);
    };
    InvokeScreenAutomationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1InvokeScreenAutomationCommand(output, context);
    };
    return InvokeScreenAutomationCommand;
}($Command));
export { InvokeScreenAutomationCommand };
//# sourceMappingURL=InvokeScreenAutomationCommand.js.map