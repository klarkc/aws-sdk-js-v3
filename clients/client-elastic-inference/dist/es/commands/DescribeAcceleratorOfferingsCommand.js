import { __extends } from "tslib";
import { DescribeAcceleratorOfferingsRequest, DescribeAcceleratorOfferingsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAcceleratorOfferingsCommand, serializeAws_restJson1DescribeAcceleratorOfferingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Describes the locations in which a given accelerator type or set of types is present in a given region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorOfferingsCommand } from "@aws-sdk/client-elastic-inference"; // ES Modules import
 * // const { ElasticInferenceClient, DescribeAcceleratorOfferingsCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * const client = new ElasticInferenceClient(config);
 * const command = new DescribeAcceleratorOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorOfferingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAcceleratorOfferingsCommand = /** @class */ (function (_super) {
    __extends(DescribeAcceleratorOfferingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAcceleratorOfferingsCommand(input) {
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
    DescribeAcceleratorOfferingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticInferenceClient";
        var commandName = "DescribeAcceleratorOfferingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAcceleratorOfferingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAcceleratorOfferingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAcceleratorOfferingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAcceleratorOfferingsCommand(input, context);
    };
    DescribeAcceleratorOfferingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAcceleratorOfferingsCommand(output, context);
    };
    return DescribeAcceleratorOfferingsCommand;
}($Command));
export { DescribeAcceleratorOfferingsCommand };
//# sourceMappingURL=DescribeAcceleratorOfferingsCommand.js.map