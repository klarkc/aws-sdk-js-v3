import { __extends } from "tslib";
import { DescribeLocationNfsRequest, DescribeLocationNfsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeLocationNfsCommand, serializeAws_json1_1DescribeLocationNfsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata, such as the path information, about an NFS location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationNfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationNfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationNfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationNfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationNfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocationNfsCommand = /** @class */ (function (_super) {
    __extends(DescribeLocationNfsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocationNfsCommand(input) {
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
    DescribeLocationNfsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "DescribeLocationNfsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLocationNfsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLocationNfsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocationNfsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLocationNfsCommand(input, context);
    };
    DescribeLocationNfsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLocationNfsCommand(output, context);
    };
    return DescribeLocationNfsCommand;
}($Command));
export { DescribeLocationNfsCommand };
//# sourceMappingURL=DescribeLocationNfsCommand.js.map