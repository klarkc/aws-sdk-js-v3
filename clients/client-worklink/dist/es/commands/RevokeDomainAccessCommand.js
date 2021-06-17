import { __extends } from "tslib";
import { RevokeDomainAccessRequest, RevokeDomainAccessResponse } from "../models/models_0";
import { deserializeAws_restJson1RevokeDomainAccessCommand, serializeAws_restJson1RevokeDomainAccessCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Moves a domain to INACTIVE status if it was in the ACTIVE status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, RevokeDomainAccessCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, RevokeDomainAccessCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new RevokeDomainAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeDomainAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeDomainAccessCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeDomainAccessCommand = /** @class */ (function (_super) {
    __extends(RevokeDomainAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeDomainAccessCommand(input) {
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
    RevokeDomainAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "RevokeDomainAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeDomainAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RevokeDomainAccessResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeDomainAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RevokeDomainAccessCommand(input, context);
    };
    RevokeDomainAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RevokeDomainAccessCommand(output, context);
    };
    return RevokeDomainAccessCommand;
}($Command));
export { RevokeDomainAccessCommand };
//# sourceMappingURL=RevokeDomainAccessCommand.js.map