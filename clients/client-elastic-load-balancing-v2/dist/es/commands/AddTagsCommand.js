import { __extends } from "tslib";
import { AddTagsInput, AddTagsOutput } from "../models/models_0";
import { deserializeAws_queryAddTagsCommand, serializeAws_queryAddTagsCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your
 *       Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups,
 *       listeners, and rules.</p>
 *          <p>Each tag consists of a key and an optional value. If a resource already has a tag with the
 *       same key, <code>AddTags</code> updates its value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, AddTagsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, AddTagsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsCommandInput} for command's `input` shape.
 * @see {@link AddTagsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "ElasticLoadBalancingV2Client";
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