import { __extends } from "tslib";
import { StartChangeSetRequest, StartChangeSetResponse } from "../models/models_0";
import { deserializeAws_restJson1StartChangeSetCommand, serializeAws_restJson1StartChangeSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation allows you to request changes for your entities. Within a single
 *             ChangeSet, you cannot start the same change type against the same entity multiple times.
 *             Additionally, when a ChangeSet is running, all the entities targeted by the different
 *             changes are locked until the ChangeSet has completed (either succeeded, cancelled, or failed). If
 *             you try to start a ChangeSet containing a change against an entity that is already
 *             locked, you will receive a <code>ResourceInUseException</code>.</p>
 *
 *         <p>For example, you cannot start the ChangeSet described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic, because it contains two changes to execute the same change
 *             type (<code>AddRevisions</code>) against the same entity
 *             (<code>entity-id@1)</code>.</p>
 *
 *         <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">
 *             Working with change sets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, StartChangeSetCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, StartChangeSetCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new StartChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartChangeSetCommandInput} for command's `input` shape.
 * @see {@link StartChangeSetCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartChangeSetCommand = /** @class */ (function (_super) {
    __extends(StartChangeSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartChangeSetCommand(input) {
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
    StartChangeSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MarketplaceCatalogClient";
        var commandName = "StartChangeSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartChangeSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartChangeSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartChangeSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartChangeSetCommand(input, context);
    };
    StartChangeSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartChangeSetCommand(output, context);
    };
    return StartChangeSetCommand;
}($Command));
export { StartChangeSetCommand };
//# sourceMappingURL=StartChangeSetCommand.js.map