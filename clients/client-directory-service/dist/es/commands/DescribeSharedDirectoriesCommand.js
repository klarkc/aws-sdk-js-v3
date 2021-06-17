import { __extends } from "tslib";
import { DescribeSharedDirectoriesRequest, DescribeSharedDirectoriesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeSharedDirectoriesCommand, serializeAws_json1_1DescribeSharedDirectoriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the shared directories in your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeSharedDirectoriesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeSharedDirectoriesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeSharedDirectoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSharedDirectoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeSharedDirectoriesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSharedDirectoriesCommand = /** @class */ (function (_super) {
    __extends(DescribeSharedDirectoriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSharedDirectoriesCommand(input) {
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
    DescribeSharedDirectoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DescribeSharedDirectoriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSharedDirectoriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSharedDirectoriesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSharedDirectoriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSharedDirectoriesCommand(input, context);
    };
    DescribeSharedDirectoriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSharedDirectoriesCommand(output, context);
    };
    return DescribeSharedDirectoriesCommand;
}($Command));
export { DescribeSharedDirectoriesCommand };
//# sourceMappingURL=DescribeSharedDirectoriesCommand.js.map