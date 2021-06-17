import { __extends } from "tslib";
import { DescribeRegionsRequest, DescribeRegionsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeRegionsCommand, serializeAws_json1_1DescribeRegionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about the Regions that are configured for multi-Region
 *       replication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeRegionsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeRegionsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeRegionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRegionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegionsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRegionsCommand = /** @class */ (function (_super) {
    __extends(DescribeRegionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRegionsCommand(input) {
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
    DescribeRegionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DescribeRegionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRegionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRegionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRegionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRegionsCommand(input, context);
    };
    DescribeRegionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRegionsCommand(output, context);
    };
    return DescribeRegionsCommand;
}($Command));
export { DescribeRegionsCommand };
//# sourceMappingURL=DescribeRegionsCommand.js.map