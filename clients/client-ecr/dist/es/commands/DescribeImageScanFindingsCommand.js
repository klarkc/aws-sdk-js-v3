import { __extends } from "tslib";
import { DescribeImageScanFindingsRequest, DescribeImageScanFindingsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeImageScanFindingsCommand, serializeAws_json1_1DescribeImageScanFindingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the scan findings for the specified image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeImageScanFindingsCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeImageScanFindingsCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DescribeImageScanFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageScanFindingsCommandInput} for command's `input` shape.
 * @see {@link DescribeImageScanFindingsCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeImageScanFindingsCommand = /** @class */ (function (_super) {
    __extends(DescribeImageScanFindingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeImageScanFindingsCommand(input) {
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
    DescribeImageScanFindingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "DescribeImageScanFindingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeImageScanFindingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeImageScanFindingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeImageScanFindingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeImageScanFindingsCommand(input, context);
    };
    DescribeImageScanFindingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeImageScanFindingsCommand(output, context);
    };
    return DescribeImageScanFindingsCommand;
}($Command));
export { DescribeImageScanFindingsCommand };
//# sourceMappingURL=DescribeImageScanFindingsCommand.js.map