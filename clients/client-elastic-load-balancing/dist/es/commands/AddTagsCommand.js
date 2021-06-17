import { __extends } from "tslib";
import { AddTagsInput, AddTagsOutput } from "../models/models_0";
import { deserializeAws_queryAddTagsCommand, serializeAws_queryAddTagsCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.</p>
 *
 *         <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated
 *             with the load balancer, <code>AddTags</code> updates its value.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, AddTagsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, AddTagsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsCommandInput} for command's `input` shape.
 * @see {@link AddTagsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddTagsCommand = /** @class */ (function (_super) {
    __extends(AddTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddTagsCommand(input) {
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
    AddTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "AddTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddTagsInput.filterSensitiveLog,
            outputFilterSensitiveLog: AddTagsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAddTagsCommand(input, context);
    };
    AddTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAddTagsCommand(output, context);
    };
    return AddTagsCommand;
}($Command));
export { AddTagsCommand };
//# sourceMappingURL=AddTagsCommand.js.map