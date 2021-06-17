import { __extends } from "tslib";
import { GetDomainRequest, GetDomainResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDomainCommand, serializeAws_restJson1GetDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetDomainCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetDomainCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainCommandInput} for command's `input` shape.
 * @see {@link GetDomainCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDomainCommand = /** @class */ (function (_super) {
    __extends(GetDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDomainCommand(input) {
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
    GetDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "GetDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDomainCommand(input, context);
    };
    GetDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDomainCommand(output, context);
    };
    return GetDomainCommand;
}($Command));
export { GetDomainCommand };
//# sourceMappingURL=GetDomainCommand.js.map