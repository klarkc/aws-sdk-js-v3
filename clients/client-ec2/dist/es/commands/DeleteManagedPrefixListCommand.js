import { __extends } from "tslib";
import { DeleteManagedPrefixListRequest, DeleteManagedPrefixListResult } from "../models/models_2";
import { deserializeAws_ec2DeleteManagedPrefixListCommand, serializeAws_ec2DeleteManagedPrefixListCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified managed prefix list. You must first remove all references to the prefix list in your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteManagedPrefixListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteManagedPrefixListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteManagedPrefixListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteManagedPrefixListCommandInput} for command's `input` shape.
 * @see {@link DeleteManagedPrefixListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteManagedPrefixListCommand = /** @class */ (function (_super) {
    __extends(DeleteManagedPrefixListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteManagedPrefixListCommand(input) {
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
    DeleteManagedPrefixListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteManagedPrefixListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteManagedPrefixListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteManagedPrefixListResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteManagedPrefixListCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteManagedPrefixListCommand(input, context);
    };
    DeleteManagedPrefixListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteManagedPrefixListCommand(output, context);
    };
    return DeleteManagedPrefixListCommand;
}($Command));
export { DeleteManagedPrefixListCommand };
//# sourceMappingURL=DeleteManagedPrefixListCommand.js.map