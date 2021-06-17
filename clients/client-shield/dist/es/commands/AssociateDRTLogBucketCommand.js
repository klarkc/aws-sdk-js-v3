import { __extends } from "tslib";
import { AssociateDRTLogBucketRequest, AssociateDRTLogBucketResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateDRTLogBucketCommand, serializeAws_json1_1AssociateDRTLogBucketCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Authorizes the DDoS Response Team (DRT) to access the specified Amazon S3 bucket containing your AWS WAF logs. You can associate up to 10 Amazon S3 buckets with your subscription.</p>
 * 	        <p>To use the services of the DRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, AssociateDRTLogBucketCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, AssociateDRTLogBucketCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new AssociateDRTLogBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDRTLogBucketCommandInput} for command's `input` shape.
 * @see {@link AssociateDRTLogBucketCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateDRTLogBucketCommand = /** @class */ (function (_super) {
    __extends(AssociateDRTLogBucketCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateDRTLogBucketCommand(input) {
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
    AssociateDRTLogBucketCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "AssociateDRTLogBucketCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateDRTLogBucketRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateDRTLogBucketResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateDRTLogBucketCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateDRTLogBucketCommand(input, context);
    };
    AssociateDRTLogBucketCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateDRTLogBucketCommand(output, context);
    };
    return AssociateDRTLogBucketCommand;
}($Command));
export { AssociateDRTLogBucketCommand };
//# sourceMappingURL=AssociateDRTLogBucketCommand.js.map