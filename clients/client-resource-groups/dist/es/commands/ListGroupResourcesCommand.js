import { __extends } from "tslib";
import { ListGroupResourcesInput, ListGroupResourcesOutput } from "../models/models_0";
import { deserializeAws_restJson1ListGroupResourcesCommand, serializeAws_restJson1ListGroupResourcesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of ARNs of the resources that are members of a specified resource
 *             group.</p>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:ListGroupResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>cloudformation:DescribeStacks</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>cloudformation:ListStackResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>tag:GetResources</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, ListGroupResourcesCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, ListGroupResourcesCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new ListGroupResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupResourcesCommandInput} for command's `input` shape.
 * @see {@link ListGroupResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGroupResourcesCommand = /** @class */ (function (_super) {
    __extends(ListGroupResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGroupResourcesCommand(input) {
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
    ListGroupResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsClient";
        var commandName = "ListGroupResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGroupResourcesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListGroupResourcesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGroupResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListGroupResourcesCommand(input, context);
    };
    ListGroupResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListGroupResourcesCommand(output, context);
    };
    return ListGroupResourcesCommand;
}($Command));
export { ListGroupResourcesCommand };
//# sourceMappingURL=ListGroupResourcesCommand.js.map