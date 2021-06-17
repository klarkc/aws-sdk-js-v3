import { __extends } from "tslib";
import { CreateProtectionRequest, CreateProtectionResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateProtectionCommand, serializeAws_json1_1CreateProtectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon
 *          CloudFront distribution, Elastic Load Balancing load balancer, AWS Global Accelerator accelerator, Elastic IP Address, or an Amazon Route 53 hosted zone.</p>
 *          <p>You can add protection to only a single resource with each CreateProtection request. If you want to add protection to multiple resources at once, use the <a href="https://console.aws.amazon.com/waf/">AWS WAF console</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with AWS Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Add AWS Shield Advanced Protection to more AWS Resources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, CreateProtectionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, CreateProtectionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new CreateProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProtectionCommandInput} for command's `input` shape.
 * @see {@link CreateProtectionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProtectionCommand = /** @class */ (function (_super) {
    __extends(CreateProtectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProtectionCommand(input) {
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
    CreateProtectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "CreateProtectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProtectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProtectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProtectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateProtectionCommand(input, context);
    };
    CreateProtectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateProtectionCommand(output, context);
    };
    return CreateProtectionCommand;
}($Command));
export { CreateProtectionCommand };
//# sourceMappingURL=CreateProtectionCommand.js.map