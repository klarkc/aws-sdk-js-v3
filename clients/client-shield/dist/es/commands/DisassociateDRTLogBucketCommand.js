import { __extends } from "tslib";
import { DisassociateDRTLogBucketRequest, DisassociateDRTLogBucketResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateDRTLogBucketCommand, serializeAws_json1_1DisassociateDRTLogBucketCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the DDoS Response Team's (DRT) access to the specified Amazon S3 bucket containing your AWS WAF logs.</p>
 * 	        <p>To make a <code>DisassociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTLogBucket</code> request to remove this access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisassociateDRTLogBucketCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisassociateDRTLogBucketCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DisassociateDRTLogBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDRTLogBucketCommandInput} for command's `input` shape.
 * @see {@link DisassociateDRTLogBucketCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateDRTLogBucketCommand = /** @class */ (function (_super) {
    __extends(DisassociateDRTLogBucketCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateDRTLogBucketCommand(input) {
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
    DisassociateDRTLogBucketCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "DisassociateDRTLogBucketCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateDRTLogBucketRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateDRTLogBucketResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateDRTLogBucketCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateDRTLogBucketCommand(input, context);
    };
    DisassociateDRTLogBucketCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateDRTLogBucketCommand(output, context);
    };
    return DisassociateDRTLogBucketCommand;
}($Command));
export { DisassociateDRTLogBucketCommand };
//# sourceMappingURL=DisassociateDRTLogBucketCommand.js.map