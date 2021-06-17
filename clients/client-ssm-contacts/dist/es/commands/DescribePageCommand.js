import { __extends } from "tslib";
import { DescribePageRequest, DescribePageResult } from "../models/models_0";
import { deserializeAws_json1_1DescribePageCommand, serializeAws_json1_1DescribePageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists details of the engagement to a contact channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DescribePageCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DescribePageCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DescribePageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePageCommandInput} for command's `input` shape.
 * @see {@link DescribePageCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePageCommand = /** @class */ (function (_super) {
    __extends(DescribePageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePageCommand(input) {
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
    DescribePageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "DescribePageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePageCommand(input, context);
    };
    DescribePageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePageCommand(output, context);
    };
    return DescribePageCommand;
}($Command));
export { DescribePageCommand };
//# sourceMappingURL=DescribePageCommand.js.map