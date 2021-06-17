import { __extends } from "tslib";
import { DescribeEventTopicsRequest, DescribeEventTopicsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeEventTopicsCommand, serializeAws_json1_1DescribeEventTopicsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Obtains information about which SNS topics receive status messages from the specified directory.</p>
 *          <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeEventTopicsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeEventTopicsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeEventTopicsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventTopicsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTopicsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventTopicsCommand = /** @class */ (function (_super) {
    __extends(DescribeEventTopicsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventTopicsCommand(input) {
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
    DescribeEventTopicsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DescribeEventTopicsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventTopicsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEventTopicsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventTopicsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEventTopicsCommand(input, context);
    };
    DescribeEventTopicsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEventTopicsCommand(output, context);
    };
    return DescribeEventTopicsCommand;
}($Command));
export { DescribeEventTopicsCommand };
//# sourceMappingURL=DescribeEventTopicsCommand.js.map