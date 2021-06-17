import { __extends } from "tslib";
import { DescribeLocationS3Request, DescribeLocationS3Response } from "../models/models_0";
import { deserializeAws_json1_1DescribeLocationS3Command, serializeAws_json1_1DescribeLocationS3Command, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata, such as bucket name, about an Amazon S3 bucket location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationS3Command } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationS3Command } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationS3CommandInput} for command's `input` shape.
 * @see {@link DescribeLocationS3CommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocationS3Command = /** @class */ (function (_super) {
    __extends(DescribeLocationS3Command, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocationS3Command(input) {
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
    DescribeLocationS3Command.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "DescribeLocationS3Command";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLocationS3Request.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLocationS3Response.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocationS3Command.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLocationS3Command(input, context);
    };
    DescribeLocationS3Command.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLocationS3Command(output, context);
    };
    return DescribeLocationS3Command;
}($Command));
export { DescribeLocationS3Command };
//# sourceMappingURL=DescribeLocationS3Command.js.map