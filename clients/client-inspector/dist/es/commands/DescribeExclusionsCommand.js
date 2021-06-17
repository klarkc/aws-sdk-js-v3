import { __extends } from "tslib";
import { DescribeExclusionsRequest, DescribeExclusionsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeExclusionsCommand, serializeAws_json1_1DescribeExclusionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the exclusions that are specified by the exclusions' ARNs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeExclusionsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeExclusionsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeExclusionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExclusionsCommandInput} for command's `input` shape.
 * @see {@link DescribeExclusionsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeExclusionsCommand = /** @class */ (function (_super) {
    __extends(DescribeExclusionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeExclusionsCommand(input) {
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
    DescribeExclusionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "DescribeExclusionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeExclusionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeExclusionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeExclusionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeExclusionsCommand(input, context);
    };
    DescribeExclusionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeExclusionsCommand(output, context);
    };
    return DescribeExclusionsCommand;
}($Command));
export { DescribeExclusionsCommand };
//# sourceMappingURL=DescribeExclusionsCommand.js.map