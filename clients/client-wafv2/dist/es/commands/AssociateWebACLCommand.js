import { __extends } from "tslib";
import { AssociateWebACLRequest, AssociateWebACLResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateWebACLCommand, serializeAws_json1_1AssociateWebACLCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a Web ACL with a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
 *          <p>For AWS CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To associate a Web ACL, in the CloudFront call <code>UpdateDistribution</code>, set the web ACL ID to the Amazon Resource Name (ARN) of the Web ACL. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, AssociateWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, AssociateWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new AssociateWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWebACLCommandInput} for command's `input` shape.
 * @see {@link AssociateWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateWebACLCommand = /** @class */ (function (_super) {
    __extends(AssociateWebACLCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateWebACLCommand(input) {
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
    AssociateWebACLCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "AssociateWebACLCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateWebACLRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateWebACLResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateWebACLCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateWebACLCommand(input, context);
    };
    AssociateWebACLCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateWebACLCommand(output, context);
    };
    return AssociateWebACLCommand;
}($Command));
export { AssociateWebACLCommand };
//# sourceMappingURL=AssociateWebACLCommand.js.map