import { __extends } from "tslib";
import { ListCreatedArtifactsRequest, ListCreatedArtifactsResult } from "../models/models_0";
import { deserializeAws_json1_1ListCreatedArtifactsCommand, serializeAws_json1_1ListCreatedArtifactsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the created artifacts attached to a given migration task in an update stream. This
 *          API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Gets the list of the created artifacts while
 *                migration is taking place.</p>
 *             </li>
 *             <li>
 *                <p>Shows the artifacts created by the migration tool that was associated by the
 *                   <code>AssociateCreatedArtifact</code> API. </p>
 *             </li>
 *             <li>
 *                <p>Lists created artifacts in a paginated interface. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListCreatedArtifactsCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListCreatedArtifactsCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListCreatedArtifactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCreatedArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListCreatedArtifactsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCreatedArtifactsCommand = /** @class */ (function (_super) {
    __extends(ListCreatedArtifactsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCreatedArtifactsCommand(input) {
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
    ListCreatedArtifactsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubClient";
        var commandName = "ListCreatedArtifactsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCreatedArtifactsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCreatedArtifactsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCreatedArtifactsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCreatedArtifactsCommand(input, context);
    };
    ListCreatedArtifactsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCreatedArtifactsCommand(output, context);
    };
    return ListCreatedArtifactsCommand;
}($Command));
export { ListCreatedArtifactsCommand };
//# sourceMappingURL=ListCreatedArtifactsCommand.js.map