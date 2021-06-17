import { __extends } from "tslib";
import { AssociateDomainRequest, AssociateDomainResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateDomainCommand, serializeAws_restJson1AssociateDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Specifies a domain to be associated to Amazon WorkLink.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, AssociateDomainCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, AssociateDomainCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new AssociateDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDomainCommandInput} for command's `input` shape.
 * @see {@link AssociateDomainCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateDomainCommand = /** @class */ (function (_super) {
    __extends(AssociateDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateDomainCommand(input) {
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
    AssociateDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "AssociateDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateDomainCommand(input, context);
    };
    AssociateDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateDomainCommand(output, context);
    };
    return AssociateDomainCommand;
}($Command));
export { AssociateDomainCommand };
//# sourceMappingURL=AssociateDomainCommand.js.map