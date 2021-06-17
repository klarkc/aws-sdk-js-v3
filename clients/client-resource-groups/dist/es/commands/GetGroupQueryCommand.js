import { __extends } from "tslib";
import { GetGroupQueryInput, GetGroupQueryOutput } from "../models/models_0";
import { deserializeAws_restJson1GetGroupQueryCommand, serializeAws_restJson1GetGroupQueryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the resource query associated with the specified resource group. For more
 *             information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create
 *                 a tag-based group in Resource Groups</a>.</p>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:GetGroupQuery</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GetGroupQueryCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GetGroupQueryCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new GetGroupQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupQueryCommandInput} for command's `input` shape.
 * @see {@link GetGroupQueryCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGroupQueryCommand = /** @class */ (function (_super) {
    __extends(GetGroupQueryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGroupQueryCommand(input) {
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
    GetGroupQueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsClient";
        var commandName = "GetGroupQueryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGroupQueryInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetGroupQueryOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGroupQueryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetGroupQueryCommand(input, context);
    };
    GetGroupQueryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetGroupQueryCommand(output, context);
    };
    return GetGroupQueryCommand;
}($Command));
export { GetGroupQueryCommand };
//# sourceMappingURL=GetGroupQueryCommand.js.map