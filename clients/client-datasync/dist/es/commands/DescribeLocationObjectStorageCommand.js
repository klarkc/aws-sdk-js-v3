import { __extends } from "tslib";
import { DescribeLocationObjectStorageRequest, DescribeLocationObjectStorageResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeLocationObjectStorageCommand, serializeAws_json1_1DescribeLocationObjectStorageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata about a self-managed object storage server location. For more information
 *       about self-managed object storage locations, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationObjectStorageCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationObjectStorageCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationObjectStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationObjectStorageCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationObjectStorageCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocationObjectStorageCommand = /** @class */ (function (_super) {
    __extends(DescribeLocationObjectStorageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocationObjectStorageCommand(input) {
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
    DescribeLocationObjectStorageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "DescribeLocationObjectStorageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLocationObjectStorageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLocationObjectStorageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocationObjectStorageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLocationObjectStorageCommand(input, context);
    };
    DescribeLocationObjectStorageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLocationObjectStorageCommand(output, context);
    };
    return DescribeLocationObjectStorageCommand;
}($Command));
export { DescribeLocationObjectStorageCommand };
//# sourceMappingURL=DescribeLocationObjectStorageCommand.js.map