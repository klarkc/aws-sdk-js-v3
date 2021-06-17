import { __extends } from "tslib";
import { TagInput, TagOutput } from "../models/models_0";
import { deserializeAws_restJson1TagCommand, serializeAws_restJson1TagCommand } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds tags to a resource group with the specified ARN. Existing tags on a resource
 *             group are not changed if they are not specified in the request parameters.</p>
 *         <important>
 *             <p>Do not store personally identifiable information (PII) or other confidential or
 *                 sensitive information in tags. We use tags to provide you with billing and
 *                 administration services. Tags are not intended to be used for private or sensitive
 *                 data.</p>
 *         </important>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:Tag</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, TagCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, TagCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new TagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagCommandInput} for command's `input` shape.
 * @see {@link TagCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TagCommand = /** @class */ (function (_super) {
    __extends(TagCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TagCommand(input) {
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
    TagCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsClient";
        var commandName = "TagCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TagInput.filterSensitiveLog,
            outputFilterSensitiveLog: TagOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TagCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1TagCommand(input, context);
    };
    TagCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1TagCommand(output, context);
    };
    return TagCommand;
}($Command));
export { TagCommand };
//# sourceMappingURL=TagCommand.js.map