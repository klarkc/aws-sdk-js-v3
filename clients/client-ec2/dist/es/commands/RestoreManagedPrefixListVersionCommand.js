import { __extends } from "tslib";
import { RestoreManagedPrefixListVersionRequest, RestoreManagedPrefixListVersionResult } from "../models/models_5";
import { deserializeAws_ec2RestoreManagedPrefixListVersionCommand, serializeAws_ec2RestoreManagedPrefixListVersionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restores the entries from a previous version of a managed prefix list to a new version of the prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreManagedPrefixListVersionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreManagedPrefixListVersionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RestoreManagedPrefixListVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreManagedPrefixListVersionCommandInput} for command's `input` shape.
 * @see {@link RestoreManagedPrefixListVersionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreManagedPrefixListVersionCommand = /** @class */ (function (_super) {
    __extends(RestoreManagedPrefixListVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreManagedPrefixListVersionCommand(input) {
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
    RestoreManagedPrefixListVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RestoreManagedPrefixListVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreManagedPrefixListVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreManagedPrefixListVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreManagedPrefixListVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RestoreManagedPrefixListVersionCommand(input, context);
    };
    RestoreManagedPrefixListVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RestoreManagedPrefixListVersionCommand(output, context);
    };
    return RestoreManagedPrefixListVersionCommand;
}($Command));
export { RestoreManagedPrefixListVersionCommand };
//# sourceMappingURL=RestoreManagedPrefixListVersionCommand.js.map