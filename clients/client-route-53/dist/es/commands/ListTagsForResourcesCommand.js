import { __extends } from "tslib";
import { ListTagsForResourcesRequest, ListTagsForResourcesResponse } from "../models/models_0";
import { deserializeAws_restXmlListTagsForResourcesCommand, serializeAws_restXmlListTagsForResourcesCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists tags for up to 10 health checks or hosted zones.</p>
 * 		       <p>For information about using tags for cost allocation, see
 * 			<a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a>
 * 			in the <i>AWS Billing and Cost Management User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTagsForResourcesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTagsForResourcesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListTagsForResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForResourcesCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourcesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTagsForResourcesCommand = /** @class */ (function (_super) {
    __extends(ListTagsForResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTagsForResourcesCommand(input) {
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
    ListTagsForResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListTagsForResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTagsForResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTagsForResourcesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTagsForResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListTagsForResourcesCommand(input, context);
    };
    ListTagsForResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListTagsForResourcesCommand(output, context);
    };
    return ListTagsForResourcesCommand;
}($Command));
export { ListTagsForResourcesCommand };
//# sourceMappingURL=ListTagsForResourcesCommand.js.map