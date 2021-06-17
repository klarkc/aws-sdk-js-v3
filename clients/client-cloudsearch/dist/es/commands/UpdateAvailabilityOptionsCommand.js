import { __extends } from "tslib";
import { UpdateAvailabilityOptionsRequest, UpdateAvailabilityOptionsResponse } from "../models/models_0";
import { deserializeAws_queryUpdateAvailabilityOptionsCommand, serializeAws_queryUpdateAvailabilityOptionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, UpdateAvailabilityOptionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, UpdateAvailabilityOptionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new UpdateAvailabilityOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAvailabilityOptionsCommandInput} for command's `input` shape.
 * @see {@link UpdateAvailabilityOptionsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAvailabilityOptionsCommand = /** @class */ (function (_super) {
    __extends(UpdateAvailabilityOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAvailabilityOptionsCommand(input) {
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
    UpdateAvailabilityOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "UpdateAvailabilityOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAvailabilityOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAvailabilityOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAvailabilityOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateAvailabilityOptionsCommand(input, context);
    };
    UpdateAvailabilityOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateAvailabilityOptionsCommand(output, context);
    };
    return UpdateAvailabilityOptionsCommand;
}($Command));
export { UpdateAvailabilityOptionsCommand };
//# sourceMappingURL=UpdateAvailabilityOptionsCommand.js.map