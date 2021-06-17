import { __extends } from "tslib";
import { DescribeProductViewInput, DescribeProductViewOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeProductViewCommand, serializeAws_json1_1DescribeProductViewCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProductViewCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProductViewCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeProductViewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProductViewCommandInput} for command's `input` shape.
 * @see {@link DescribeProductViewCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProductViewCommand = /** @class */ (function (_super) {
    __extends(DescribeProductViewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProductViewCommand(input) {
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
    DescribeProductViewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DescribeProductViewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProductViewInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProductViewOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProductViewCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeProductViewCommand(input, context);
    };
    DescribeProductViewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeProductViewCommand(output, context);
    };
    return DescribeProductViewCommand;
}($Command));
export { DescribeProductViewCommand };
//# sourceMappingURL=DescribeProductViewCommand.js.map