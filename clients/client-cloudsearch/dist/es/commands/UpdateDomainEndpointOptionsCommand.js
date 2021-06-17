import { __extends } from "tslib";
import { UpdateDomainEndpointOptionsRequest, UpdateDomainEndpointOptionsResponse } from "../models/models_0";
import { deserializeAws_queryUpdateDomainEndpointOptionsCommand, serializeAws_queryUpdateDomainEndpointOptionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, UpdateDomainEndpointOptionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, UpdateDomainEndpointOptionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new UpdateDomainEndpointOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainEndpointOptionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainEndpointOptionsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDomainEndpointOptionsCommand = /** @class */ (function (_super) {
    __extends(UpdateDomainEndpointOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDomainEndpointOptionsCommand(input) {
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
    UpdateDomainEndpointOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "UpdateDomainEndpointOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDomainEndpointOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDomainEndpointOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDomainEndpointOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateDomainEndpointOptionsCommand(input, context);
    };
    UpdateDomainEndpointOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateDomainEndpointOptionsCommand(output, context);
    };
    return UpdateDomainEndpointOptionsCommand;
}($Command));
export { UpdateDomainEndpointOptionsCommand };
//# sourceMappingURL=UpdateDomainEndpointOptionsCommand.js.map