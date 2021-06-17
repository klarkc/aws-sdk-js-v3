import { __extends } from "tslib";
import { ListPrincipalsRequest, ListPrincipalsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPrincipalsCommand, serializeAws_restJson1ListPrincipalsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the principals that you have shared resources with or that have shared resources
 * 			with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPrincipalsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPrincipalsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new ListPrincipalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPrincipalsCommand = /** @class */ (function (_super) {
    __extends(ListPrincipalsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPrincipalsCommand(input) {
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
    ListPrincipalsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "ListPrincipalsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPrincipalsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPrincipalsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPrincipalsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPrincipalsCommand(input, context);
    };
    ListPrincipalsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPrincipalsCommand(output, context);
    };
    return ListPrincipalsCommand;
}($Command));
export { ListPrincipalsCommand };
//# sourceMappingURL=ListPrincipalsCommand.js.map