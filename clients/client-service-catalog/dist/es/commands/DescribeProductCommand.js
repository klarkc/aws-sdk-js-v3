import { __extends } from "tslib";
import { DescribeProductInput, DescribeProductOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeProductCommand, serializeAws_json1_1DescribeProductCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProductCommandInput} for command's `input` shape.
 * @see {@link DescribeProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProductCommand = /** @class */ (function (_super) {
    __extends(DescribeProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeProductCommand(input) {
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
    DescribeProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DescribeProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeProductOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeProductCommand(input, context);
    };
    DescribeProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeProductCommand(output, context);
    };
    return DescribeProductCommand;
}($Command));
export { DescribeProductCommand };
//# sourceMappingURL=DescribeProductCommand.js.map