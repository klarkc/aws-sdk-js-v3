import { __extends } from "tslib";
import { DisassociateWebACLRequest, DisassociateWebACLResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateWebACLCommand, serializeAws_json1_1DisassociateWebACLCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a Web ACL from a regional application resource. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  </p>
 *          <p>For AWS CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To disassociate a Web ACL, provide an empty web ACL ID in the CloudFront call <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DisassociateWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DisassociateWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DisassociateWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWebACLCommandInput} for command's `input` shape.
 * @see {@link DisassociateWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateWebACLCommand = /** @class */ (function (_super) {
    __extends(DisassociateWebACLCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateWebACLCommand(input) {
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
    DisassociateWebACLCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "DisassociateWebACLCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateWebACLRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateWebACLResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateWebACLCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateWebACLCommand(input, context);
    };
    DisassociateWebACLCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateWebACLCommand(output, context);
    };
    return DisassociateWebACLCommand;
}($Command));
export { DisassociateWebACLCommand };
//# sourceMappingURL=DisassociateWebACLCommand.js.map