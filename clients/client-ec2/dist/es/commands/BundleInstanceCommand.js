import { __extends } from "tslib";
import { BundleInstanceRequest, BundleInstanceResult } from "../models/models_0";
import { deserializeAws_ec2BundleInstanceCommand, serializeAws_ec2BundleInstanceCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Bundles an Amazon instance store-backed Windows instance.</p>
 *          <p>During bundling, only the root device volume (C:\) is bundled. Data on other instance store volumes is not preserved.</p>
 *          <note>
 *             <p>This action is not applicable for Linux/Unix instances or Windows instances that are backed by Amazon EBS.</p>
 * 			      </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, BundleInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, BundleInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new BundleInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BundleInstanceCommandInput} for command's `input` shape.
 * @see {@link BundleInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BundleInstanceCommand = /** @class */ (function (_super) {
    __extends(BundleInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BundleInstanceCommand(input) {
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
    BundleInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "BundleInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BundleInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BundleInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BundleInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2BundleInstanceCommand(input, context);
    };
    BundleInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2BundleInstanceCommand(output, context);
    };
    return BundleInstanceCommand;
}($Command));
export { BundleInstanceCommand };
//# sourceMappingURL=BundleInstanceCommand.js.map