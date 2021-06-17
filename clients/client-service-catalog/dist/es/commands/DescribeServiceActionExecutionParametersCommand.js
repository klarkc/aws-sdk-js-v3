import { __extends } from "tslib";
import { DescribeServiceActionExecutionParametersInput, DescribeServiceActionExecutionParametersOutput, } from "../models/models_0";
import { deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand, serializeAws_json1_1DescribeServiceActionExecutionParametersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeServiceActionExecutionParametersCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeServiceActionExecutionParametersCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeServiceActionExecutionParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceActionExecutionParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceActionExecutionParametersCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeServiceActionExecutionParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeServiceActionExecutionParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeServiceActionExecutionParametersCommand(input) {
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
    DescribeServiceActionExecutionParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DescribeServiceActionExecutionParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeServiceActionExecutionParametersInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeServiceActionExecutionParametersOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeServiceActionExecutionParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeServiceActionExecutionParametersCommand(input, context);
    };
    DescribeServiceActionExecutionParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand(output, context);
    };
    return DescribeServiceActionExecutionParametersCommand;
}($Command));
export { DescribeServiceActionExecutionParametersCommand };
//# sourceMappingURL=DescribeServiceActionExecutionParametersCommand.js.map