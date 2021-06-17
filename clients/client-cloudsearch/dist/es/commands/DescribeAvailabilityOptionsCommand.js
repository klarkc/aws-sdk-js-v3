import { __extends } from "tslib";
import { DescribeAvailabilityOptionsRequest, DescribeAvailabilityOptionsResponse } from "../models/models_0";
import { deserializeAws_queryDescribeAvailabilityOptionsCommand, serializeAws_queryDescribeAvailabilityOptionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeAvailabilityOptionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeAvailabilityOptionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeAvailabilityOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAvailabilityOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailabilityOptionsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAvailabilityOptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeAvailabilityOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAvailabilityOptionsCommand(input) {
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
    DescribeAvailabilityOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DescribeAvailabilityOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAvailabilityOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAvailabilityOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAvailabilityOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeAvailabilityOptionsCommand(input, context);
    };
    DescribeAvailabilityOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeAvailabilityOptionsCommand(output, context);
    };
    return DescribeAvailabilityOptionsCommand;
}($Command));
export { DescribeAvailabilityOptionsCommand };
//# sourceMappingURL=DescribeAvailabilityOptionsCommand.js.map