import { __extends } from "tslib";
import { DescribeFileSystemAliasesRequest, DescribeFileSystemAliasesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeFileSystemAliasesCommand, serializeAws_json1_1DescribeFileSystemAliasesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of
 *             all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a>
 *         provided in the <a>DescribeFileSystems</a> operation response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeFileSystemAliasesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeFileSystemAliasesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DescribeFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemAliasesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFileSystemAliasesCommand = /** @class */ (function (_super) {
    __extends(DescribeFileSystemAliasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFileSystemAliasesCommand(input) {
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
    DescribeFileSystemAliasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FSxClient";
        var commandName = "DescribeFileSystemAliasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFileSystemAliasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFileSystemAliasesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFileSystemAliasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeFileSystemAliasesCommand(input, context);
    };
    DescribeFileSystemAliasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeFileSystemAliasesCommand(output, context);
    };
    return DescribeFileSystemAliasesCommand;
}($Command));
export { DescribeFileSystemAliasesCommand };
//# sourceMappingURL=DescribeFileSystemAliasesCommand.js.map