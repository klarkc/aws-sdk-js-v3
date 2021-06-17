import { __extends } from "tslib";
import { DescribeCopyProductStatusInput, DescribeCopyProductStatusOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeCopyProductStatusCommand, serializeAws_json1_1DescribeCopyProductStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the status of the specified copy product operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeCopyProductStatusCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeCopyProductStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeCopyProductStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCopyProductStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeCopyProductStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCopyProductStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeCopyProductStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCopyProductStatusCommand(input) {
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
    DescribeCopyProductStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DescribeCopyProductStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCopyProductStatusInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCopyProductStatusOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCopyProductStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCopyProductStatusCommand(input, context);
    };
    DescribeCopyProductStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCopyProductStatusCommand(output, context);
    };
    return DescribeCopyProductStatusCommand;
}($Command));
export { DescribeCopyProductStatusCommand };
//# sourceMappingURL=DescribeCopyProductStatusCommand.js.map