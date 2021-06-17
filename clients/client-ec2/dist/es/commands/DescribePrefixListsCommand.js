import { __extends } from "tslib";
import { DescribePrefixListsRequest, DescribePrefixListsResult } from "../models/models_3";
import { deserializeAws_ec2DescribePrefixListsCommand, serializeAws_ec2DescribePrefixListsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes available AWS services in a prefix list format, which includes the prefix list
 *             name and prefix list ID of the service and the IP address range for the service.</p>
 *         <p>We recommend that you use <a>DescribeManagedPrefixLists</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePrefixListsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePrefixListsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribePrefixListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePrefixListsCommandInput} for command's `input` shape.
 * @see {@link DescribePrefixListsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePrefixListsCommand = /** @class */ (function (_super) {
    __extends(DescribePrefixListsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePrefixListsCommand(input) {
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
    DescribePrefixListsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribePrefixListsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePrefixListsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePrefixListsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePrefixListsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribePrefixListsCommand(input, context);
    };
    DescribePrefixListsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribePrefixListsCommand(output, context);
    };
    return DescribePrefixListsCommand;
}($Command));
export { DescribePrefixListsCommand };
//# sourceMappingURL=DescribePrefixListsCommand.js.map