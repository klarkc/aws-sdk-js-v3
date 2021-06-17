import { __extends } from "tslib";
import { GetIntegrationRequest, GetIntegrationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetIntegrationCommand, serializeAws_restJson1GetIntegrationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an integration for a domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetIntegrationCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetIntegrationCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIntegrationCommand = /** @class */ (function (_super) {
    __extends(GetIntegrationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetIntegrationCommand(input) {
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
    GetIntegrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "GetIntegrationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIntegrationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetIntegrationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIntegrationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetIntegrationCommand(input, context);
    };
    GetIntegrationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetIntegrationCommand(output, context);
    };
    return GetIntegrationCommand;
}($Command));
export { GetIntegrationCommand };
//# sourceMappingURL=GetIntegrationCommand.js.map