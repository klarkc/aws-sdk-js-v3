import { __extends } from "tslib";
import { RestoreDomainAccessRequest, RestoreDomainAccessResponse } from "../models/models_0";
import { deserializeAws_restJson1RestoreDomainAccessCommand, serializeAws_restJson1RestoreDomainAccessCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Moves a domain to ACTIVE status if it was in the INACTIVE status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, RestoreDomainAccessCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, RestoreDomainAccessCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new RestoreDomainAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDomainAccessCommandInput} for command's `input` shape.
 * @see {@link RestoreDomainAccessCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreDomainAccessCommand = /** @class */ (function (_super) {
    __extends(RestoreDomainAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreDomainAccessCommand(input) {
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
    RestoreDomainAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "RestoreDomainAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreDomainAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreDomainAccessResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreDomainAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RestoreDomainAccessCommand(input, context);
    };
    RestoreDomainAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RestoreDomainAccessCommand(output, context);
    };
    return RestoreDomainAccessCommand;
}($Command));
export { RestoreDomainAccessCommand };
//# sourceMappingURL=RestoreDomainAccessCommand.js.map