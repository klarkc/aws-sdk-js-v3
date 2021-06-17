import { __extends } from "tslib";
import { PutIntegrationRequest, PutIntegrationResponse } from "../models/models_0";
import { deserializeAws_restJson1PutIntegrationCommand, serializeAws_restJson1PutIntegrationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an integration between the service and a third-party service, which includes
 *          Amazon AppFlow and Amazon Connect.</p>
 *          <p>An integration can belong to only one domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, PutIntegrationCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, PutIntegrationCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new PutIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutIntegrationCommandInput} for command's `input` shape.
 * @see {@link PutIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutIntegrationCommand = /** @class */ (function (_super) {
    __extends(PutIntegrationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutIntegrationCommand(input) {
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
    PutIntegrationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "PutIntegrationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutIntegrationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutIntegrationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutIntegrationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutIntegrationCommand(input, context);
    };
    PutIntegrationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutIntegrationCommand(output, context);
    };
    return PutIntegrationCommand;
}($Command));
export { PutIntegrationCommand };
//# sourceMappingURL=PutIntegrationCommand.js.map