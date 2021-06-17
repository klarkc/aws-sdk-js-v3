import { __extends } from "tslib";
import { DescribeConditionalForwardersRequest, DescribeConditionalForwardersResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeConditionalForwardersCommand, serializeAws_json1_1DescribeConditionalForwardersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Obtains information about the conditional forwarders for this account.</p>
 *          <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeConditionalForwardersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeConditionalForwardersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeConditionalForwardersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConditionalForwardersCommandInput} for command's `input` shape.
 * @see {@link DescribeConditionalForwardersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConditionalForwardersCommand = /** @class */ (function (_super) {
    __extends(DescribeConditionalForwardersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConditionalForwardersCommand(input) {
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
    DescribeConditionalForwardersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DescribeConditionalForwardersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConditionalForwardersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConditionalForwardersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConditionalForwardersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConditionalForwardersCommand(input, context);
    };
    DescribeConditionalForwardersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConditionalForwardersCommand(output, context);
    };
    return DescribeConditionalForwardersCommand;
}($Command));
export { DescribeConditionalForwardersCommand };
//# sourceMappingURL=DescribeConditionalForwardersCommand.js.map