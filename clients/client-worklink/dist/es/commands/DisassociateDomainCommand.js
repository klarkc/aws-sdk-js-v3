import { __extends } from "tslib";
import { DisassociateDomainRequest, DisassociateDomainResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateDomainCommand, serializeAws_restJson1DisassociateDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DisassociateDomainCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DisassociateDomainCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DisassociateDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateDomainCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateDomainCommand = /** @class */ (function (_super) {
    __extends(DisassociateDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateDomainCommand(input) {
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
    DisassociateDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "DisassociateDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateDomainCommand(input, context);
    };
    DisassociateDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateDomainCommand(output, context);
    };
    return DisassociateDomainCommand;
}($Command));
export { DisassociateDomainCommand };
//# sourceMappingURL=DisassociateDomainCommand.js.map