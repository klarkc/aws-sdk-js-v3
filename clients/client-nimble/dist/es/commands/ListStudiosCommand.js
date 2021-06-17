import { __extends } from "tslib";
import { ListStudiosRequest, ListStudiosResponse } from "../models/models_0";
import { deserializeAws_restJson1ListStudiosCommand, serializeAws_restJson1ListStudiosCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List studios in your AWS account in the requested AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStudiosCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStudiosCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListStudiosCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudiosCommandInput} for command's `input` shape.
 * @see {@link ListStudiosCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStudiosCommand = /** @class */ (function (_super) {
    __extends(ListStudiosCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStudiosCommand(input) {
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
    ListStudiosCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "ListStudiosCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStudiosRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListStudiosResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStudiosCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListStudiosCommand(input, context);
    };
    ListStudiosCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListStudiosCommand(output, context);
    };
    return ListStudiosCommand;
}($Command));
export { ListStudiosCommand };
//# sourceMappingURL=ListStudiosCommand.js.map