import { __extends } from "tslib";
import { DescribeLocationEfsRequest, DescribeLocationEfsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeLocationEfsCommand, serializeAws_json1_1DescribeLocationEfsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata, such as the path information about an Amazon EFS location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationEfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationEfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationEfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationEfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationEfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocationEfsCommand = /** @class */ (function (_super) {
    __extends(DescribeLocationEfsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocationEfsCommand(input) {
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
    DescribeLocationEfsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "DescribeLocationEfsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLocationEfsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLocationEfsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocationEfsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLocationEfsCommand(input, context);
    };
    DescribeLocationEfsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLocationEfsCommand(output, context);
    };
    return DescribeLocationEfsCommand;
}($Command));
export { DescribeLocationEfsCommand };
//# sourceMappingURL=DescribeLocationEfsCommand.js.map