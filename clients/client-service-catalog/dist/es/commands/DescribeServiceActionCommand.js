import { __extends } from "tslib";
import { DescribeServiceActionInput, DescribeServiceActionOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeServiceActionCommand, serializeAws_json1_1DescribeServiceActionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceActionCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeServiceActionCommand = /** @class */ (function (_super) {
    __extends(DescribeServiceActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeServiceActionCommand(input) {
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
    DescribeServiceActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DescribeServiceActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeServiceActionInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeServiceActionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeServiceActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeServiceActionCommand(input, context);
    };
    DescribeServiceActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeServiceActionCommand(output, context);
    };
    return DescribeServiceActionCommand;
}($Command));
export { DescribeServiceActionCommand };
//# sourceMappingURL=DescribeServiceActionCommand.js.map