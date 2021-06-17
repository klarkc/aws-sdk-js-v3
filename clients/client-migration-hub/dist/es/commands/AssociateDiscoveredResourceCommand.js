import { __extends } from "tslib";
import { AssociateDiscoveredResourceRequest, AssociateDiscoveredResourceResult } from "../models/models_0";
import { deserializeAws_json1_1AssociateDiscoveredResourceCommand, serializeAws_json1_1AssociateDiscoveredResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a discovered resource ID from Application Discovery Service with a migration
 *          task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, AssociateDiscoveredResourceCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, AssociateDiscoveredResourceCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new AssociateDiscoveredResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDiscoveredResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateDiscoveredResourceCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateDiscoveredResourceCommand = /** @class */ (function (_super) {
    __extends(AssociateDiscoveredResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateDiscoveredResourceCommand(input) {
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
    AssociateDiscoveredResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubClient";
        var commandName = "AssociateDiscoveredResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateDiscoveredResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateDiscoveredResourceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateDiscoveredResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateDiscoveredResourceCommand(input, context);
    };
    AssociateDiscoveredResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateDiscoveredResourceCommand(output, context);
    };
    return AssociateDiscoveredResourceCommand;
}($Command));
export { AssociateDiscoveredResourceCommand };
//# sourceMappingURL=AssociateDiscoveredResourceCommand.js.map