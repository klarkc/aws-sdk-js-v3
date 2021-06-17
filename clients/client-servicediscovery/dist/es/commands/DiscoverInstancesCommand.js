import { __extends } from "tslib";
import { DiscoverInstancesRequest, DiscoverInstancesResponse } from "../models/models_0";
import { deserializeAws_json1_1DiscoverInstancesCommand, serializeAws_json1_1DiscoverInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code>
 *    to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries
 *    to discover instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DiscoverInstancesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DiscoverInstancesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new DiscoverInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DiscoverInstancesCommandInput} for command's `input` shape.
 * @see {@link DiscoverInstancesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DiscoverInstancesCommand = /** @class */ (function (_super) {
    __extends(DiscoverInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DiscoverInstancesCommand(input) {
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
    DiscoverInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceDiscoveryClient";
        var commandName = "DiscoverInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DiscoverInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DiscoverInstancesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DiscoverInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DiscoverInstancesCommand(input, context);
    };
    DiscoverInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DiscoverInstancesCommand(output, context);
    };
    return DiscoverInstancesCommand;
}($Command));
export { DiscoverInstancesCommand };
//# sourceMappingURL=DiscoverInstancesCommand.js.map