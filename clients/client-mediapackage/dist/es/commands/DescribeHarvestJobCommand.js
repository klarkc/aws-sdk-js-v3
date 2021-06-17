import { __extends } from "tslib";
import { DescribeHarvestJobRequest, DescribeHarvestJobResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeHarvestJobCommand, serializeAws_restJson1DescribeHarvestJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Gets details about an existing HarvestJob.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, DescribeHarvestJobCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, DescribeHarvestJobCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new DescribeHarvestJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHarvestJobCommandInput} for command's `input` shape.
 * @see {@link DescribeHarvestJobCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHarvestJobCommand = /** @class */ (function (_super) {
    __extends(DescribeHarvestJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHarvestJobCommand(input) {
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
    DescribeHarvestJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageClient";
        var commandName = "DescribeHarvestJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHarvestJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeHarvestJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHarvestJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeHarvestJobCommand(input, context);
    };
    DescribeHarvestJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeHarvestJobCommand(output, context);
    };
    return DescribeHarvestJobCommand;
}($Command));
export { DescribeHarvestJobCommand };
//# sourceMappingURL=DescribeHarvestJobCommand.js.map