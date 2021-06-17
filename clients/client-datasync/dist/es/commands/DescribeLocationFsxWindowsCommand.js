import { __extends } from "tslib";
import { DescribeLocationFsxWindowsRequest, DescribeLocationFsxWindowsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeLocationFsxWindowsCommand, serializeAws_json1_1DescribeLocationFsxWindowsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata, such as the path information about an Amazon FSx for Windows File Server
 *       location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationFsxWindowsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationFsxWindowsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationFsxWindowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationFsxWindowsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationFsxWindowsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocationFsxWindowsCommand = /** @class */ (function (_super) {
    __extends(DescribeLocationFsxWindowsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocationFsxWindowsCommand(input) {
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
    DescribeLocationFsxWindowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "DescribeLocationFsxWindowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLocationFsxWindowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLocationFsxWindowsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocationFsxWindowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLocationFsxWindowsCommand(input, context);
    };
    DescribeLocationFsxWindowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLocationFsxWindowsCommand(output, context);
    };
    return DescribeLocationFsxWindowsCommand;
}($Command));
export { DescribeLocationFsxWindowsCommand };
//# sourceMappingURL=DescribeLocationFsxWindowsCommand.js.map