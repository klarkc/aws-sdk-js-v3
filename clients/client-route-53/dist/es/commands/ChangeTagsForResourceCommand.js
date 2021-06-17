import { __extends } from "tslib";
import { ChangeTagsForResourceRequest, ChangeTagsForResourceResponse } from "../models/models_0";
import { deserializeAws_restXmlChangeTagsForResourceCommand, serializeAws_restXmlChangeTagsForResourceCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds, edits, or deletes tags for a health check or a hosted zone.</p>
 * 		       <p>For information about using tags for cost allocation, see
 * 			<a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a>
 * 			in the <i>AWS Billing and Cost Management User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ChangeTagsForResourceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ChangeTagsForResourceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ChangeTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ChangeTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ChangeTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ChangeTagsForResourceCommand = /** @class */ (function (_super) {
    __extends(ChangeTagsForResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ChangeTagsForResourceCommand(input) {
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
    ChangeTagsForResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ChangeTagsForResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ChangeTagsForResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ChangeTagsForResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ChangeTagsForResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlChangeTagsForResourceCommand(input, context);
    };
    ChangeTagsForResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlChangeTagsForResourceCommand(output, context);
    };
    return ChangeTagsForResourceCommand;
}($Command));
export { ChangeTagsForResourceCommand };
//# sourceMappingURL=ChangeTagsForResourceCommand.js.map