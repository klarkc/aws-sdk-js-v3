import { __extends } from "tslib";
import { DisassociateDelegateFromResourceRequest, DisassociateDelegateFromResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateDelegateFromResourceCommand, serializeAws_json1_1DisassociateDelegateFromResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a member from the resource's set of delegates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DisassociateDelegateFromResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DisassociateDelegateFromResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DisassociateDelegateFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDelegateFromResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateDelegateFromResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateDelegateFromResourceCommand = /** @class */ (function (_super) {
    __extends(DisassociateDelegateFromResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateDelegateFromResourceCommand(input) {
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
    DisassociateDelegateFromResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "DisassociateDelegateFromResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateDelegateFromResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateDelegateFromResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateDelegateFromResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateDelegateFromResourceCommand(input, context);
    };
    DisassociateDelegateFromResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateDelegateFromResourceCommand(output, context);
    };
    return DisassociateDelegateFromResourceCommand;
}($Command));
export { DisassociateDelegateFromResourceCommand };
//# sourceMappingURL=DisassociateDelegateFromResourceCommand.js.map