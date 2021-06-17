import { __extends } from "tslib";
import { DescribeRulesPackagesRequest, DescribeRulesPackagesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeRulesPackagesCommand, serializeAws_json1_1DescribeRulesPackagesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the rules packages that are specified by the ARNs of the rules
 *          packages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeRulesPackagesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeRulesPackagesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeRulesPackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRulesPackagesCommandInput} for command's `input` shape.
 * @see {@link DescribeRulesPackagesCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRulesPackagesCommand = /** @class */ (function (_super) {
    __extends(DescribeRulesPackagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRulesPackagesCommand(input) {
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
    DescribeRulesPackagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "DescribeRulesPackagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRulesPackagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRulesPackagesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRulesPackagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRulesPackagesCommand(input, context);
    };
    DescribeRulesPackagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRulesPackagesCommand(output, context);
    };
    return DescribeRulesPackagesCommand;
}($Command));
export { DescribeRulesPackagesCommand };
//# sourceMappingURL=DescribeRulesPackagesCommand.js.map