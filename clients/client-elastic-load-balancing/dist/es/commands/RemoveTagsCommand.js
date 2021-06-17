import { __extends } from "tslib";
import { RemoveTagsInput, RemoveTagsOutput } from "../models/models_0";
import { deserializeAws_queryRemoveTagsCommand, serializeAws_queryRemoveTagsCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes one or more tags from the specified load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, RemoveTagsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, RemoveTagsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new RemoveTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveTagsCommand = /** @class */ (function (_super) {
    __extends(RemoveTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveTagsCommand(input) {
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
    RemoveTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "RemoveTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveTagsInput.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveTagsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRemoveTagsCommand(input, context);
    };
    RemoveTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRemoveTagsCommand(output, context);
    };
    return RemoveTagsCommand;
}($Command));
export { RemoveTagsCommand };
//# sourceMappingURL=RemoveTagsCommand.js.map