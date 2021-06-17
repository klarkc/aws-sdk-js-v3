import { __extends } from "tslib";
import { ModifyManagedPrefixListRequest, ModifyManagedPrefixListResult } from "../models/models_4";
import { deserializeAws_ec2ModifyManagedPrefixListCommand, serializeAws_ec2ModifyManagedPrefixListCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified managed prefix list.</p>
 *         <p>Adding or removing entries in a prefix list creates a new version of the prefix list.
 *             Changing the name of the prefix list does not affect the version.</p>
 *         <p>If you specify a current version number that does not match the true current version
 *             number, the request fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyManagedPrefixListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyManagedPrefixListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyManagedPrefixListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyManagedPrefixListCommandInput} for command's `input` shape.
 * @see {@link ModifyManagedPrefixListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyManagedPrefixListCommand = /** @class */ (function (_super) {
    __extends(ModifyManagedPrefixListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyManagedPrefixListCommand(input) {
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
    ModifyManagedPrefixListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyManagedPrefixListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyManagedPrefixListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyManagedPrefixListResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyManagedPrefixListCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyManagedPrefixListCommand(input, context);
    };
    ModifyManagedPrefixListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyManagedPrefixListCommand(output, context);
    };
    return ModifyManagedPrefixListCommand;
}($Command));
export { ModifyManagedPrefixListCommand };
//# sourceMappingURL=ModifyManagedPrefixListCommand.js.map