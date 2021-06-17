import { __extends } from "tslib";
import { DescribeManagedPrefixListsRequest, DescribeManagedPrefixListsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeManagedPrefixListsCommand, serializeAws_ec2DescribeManagedPrefixListsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes your managed prefix lists and any AWS-managed prefix lists.</p>
 *         <p>To view the entries for your prefix list, use <a>GetManagedPrefixListEntries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeManagedPrefixListsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeManagedPrefixListsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeManagedPrefixListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeManagedPrefixListsCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedPrefixListsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeManagedPrefixListsCommand = /** @class */ (function (_super) {
    __extends(DescribeManagedPrefixListsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeManagedPrefixListsCommand(input) {
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
    DescribeManagedPrefixListsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeManagedPrefixListsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeManagedPrefixListsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeManagedPrefixListsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeManagedPrefixListsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeManagedPrefixListsCommand(input, context);
    };
    DescribeManagedPrefixListsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeManagedPrefixListsCommand(output, context);
    };
    return DescribeManagedPrefixListsCommand;
}($Command));
export { DescribeManagedPrefixListsCommand };
//# sourceMappingURL=DescribeManagedPrefixListsCommand.js.map