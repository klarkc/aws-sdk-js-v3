import { __extends } from "tslib";
import { UpdateGroupQueryInput, UpdateGroupQueryOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateGroupQueryCommand, serializeAws_restJson1UpdateGroupQueryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the resource query of a group. For more information about resource queries,
 *             see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>.</p>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:UpdateGroupQuery</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, UpdateGroupQueryCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, UpdateGroupQueryCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new UpdateGroupQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGroupQueryCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupQueryCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGroupQueryCommand = /** @class */ (function (_super) {
    __extends(UpdateGroupQueryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGroupQueryCommand(input) {
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
    UpdateGroupQueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsClient";
        var commandName = "UpdateGroupQueryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGroupQueryInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGroupQueryOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGroupQueryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateGroupQueryCommand(input, context);
    };
    UpdateGroupQueryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateGroupQueryCommand(output, context);
    };
    return UpdateGroupQueryCommand;
}($Command));
export { UpdateGroupQueryCommand };
//# sourceMappingURL=UpdateGroupQueryCommand.js.map