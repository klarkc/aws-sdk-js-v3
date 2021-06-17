import { __extends } from "tslib";
import { GetManagedPrefixListEntriesRequest, GetManagedPrefixListEntriesResult } from "../models/models_4";
import { deserializeAws_ec2GetManagedPrefixListEntriesCommand, serializeAws_ec2GetManagedPrefixListEntriesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the entries for a specified managed prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetManagedPrefixListEntriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetManagedPrefixListEntriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetManagedPrefixListEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetManagedPrefixListEntriesCommandInput} for command's `input` shape.
 * @see {@link GetManagedPrefixListEntriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetManagedPrefixListEntriesCommand = /** @class */ (function (_super) {
    __extends(GetManagedPrefixListEntriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetManagedPrefixListEntriesCommand(input) {
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
    GetManagedPrefixListEntriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetManagedPrefixListEntriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetManagedPrefixListEntriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetManagedPrefixListEntriesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetManagedPrefixListEntriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetManagedPrefixListEntriesCommand(input, context);
    };
    GetManagedPrefixListEntriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetManagedPrefixListEntriesCommand(output, context);
    };
    return GetManagedPrefixListEntriesCommand;
}($Command));
export { GetManagedPrefixListEntriesCommand };
//# sourceMappingURL=GetManagedPrefixListEntriesCommand.js.map