import { __extends } from "tslib";
import { ListStudioComponentsRequest, ListStudioComponentsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListStudioComponentsCommand, serializeAws_restJson1ListStudioComponentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the StudioComponents in a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStudioComponentsCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStudioComponentsCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListStudioComponentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudioComponentsCommandInput} for command's `input` shape.
 * @see {@link ListStudioComponentsCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStudioComponentsCommand = /** @class */ (function (_super) {
    __extends(ListStudioComponentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStudioComponentsCommand(input) {
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
    ListStudioComponentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "ListStudioComponentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStudioComponentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListStudioComponentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStudioComponentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListStudioComponentsCommand(input, context);
    };
    ListStudioComponentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListStudioComponentsCommand(output, context);
    };
    return ListStudioComponentsCommand;
}($Command));
export { ListStudioComponentsCommand };
//# sourceMappingURL=ListStudioComponentsCommand.js.map