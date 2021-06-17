import { __extends } from "tslib";
import { UntagInput, UntagOutput } from "../models/models_0";
import { deserializeAws_restJson1UntagCommand, serializeAws_restJson1UntagCommand } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes tags from a specified resource group.</p>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:Untag</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, UntagCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, UntagCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new UntagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagCommandInput} for command's `input` shape.
 * @see {@link UntagCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagCommand = /** @class */ (function (_super) {
    __extends(UntagCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagCommand(input) {
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
    UntagCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsClient";
        var commandName = "UntagCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagInput.filterSensitiveLog,
            outputFilterSensitiveLog: UntagOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UntagCommand(input, context);
    };
    UntagCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UntagCommand(output, context);
    };
    return UntagCommand;
}($Command));
export { UntagCommand };
//# sourceMappingURL=UntagCommand.js.map