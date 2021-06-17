import { __extends } from "tslib";
import { DescribeLocationSmbRequest, DescribeLocationSmbResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeLocationSmbCommand, serializeAws_json1_1DescribeLocationSmbCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata, such as the path and user information about an SMB location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationSmbCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationSmbCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationSmbCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationSmbCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationSmbCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocationSmbCommand = /** @class */ (function (_super) {
    __extends(DescribeLocationSmbCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocationSmbCommand(input) {
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
    DescribeLocationSmbCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "DescribeLocationSmbCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLocationSmbRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLocationSmbResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocationSmbCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLocationSmbCommand(input, context);
    };
    DescribeLocationSmbCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLocationSmbCommand(output, context);
    };
    return DescribeLocationSmbCommand;
}($Command));
export { DescribeLocationSmbCommand };
//# sourceMappingURL=DescribeLocationSmbCommand.js.map