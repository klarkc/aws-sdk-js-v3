import { __extends } from "tslib";
import { DescribeModelRequest, DescribeModelResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeModelCommand, serializeAws_restJson1DescribeModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a version of an Amazon Lookout for Vision model.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DescribeModel</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DescribeModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DescribeModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new DescribeModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelCommandInput} for command's `input` shape.
 * @see {@link DescribeModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeModelCommand = /** @class */ (function (_super) {
    __extends(DescribeModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeModelCommand(input) {
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
    DescribeModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutVisionClient";
        var commandName = "DescribeModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeModelCommand(input, context);
    };
    DescribeModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeModelCommand(output, context);
    };
    return DescribeModelCommand;
}($Command));
export { DescribeModelCommand };
//# sourceMappingURL=DescribeModelCommand.js.map