import { __extends } from "tslib";
import { DescribeDirectoriesRequest, DescribeDirectoriesResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeDirectoriesCommand, serializeAws_json1_1DescribeDirectoriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Obtains information about the directories that belong to this account.</p>
 *          <p>You can retrieve information about specific directories by passing the directory
 *       identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong
 *       to the current account are returned.</p>
 *          <p>This operation supports pagination with the use of the <code>NextToken</code> request and
 *       response parameters. If more results are available, the
 *         <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in
 *       the next call to <a>DescribeDirectories</a> to retrieve the next set of
 *       items.</p>
 *          <p>You can also specify a maximum number of return results with the <code>Limit</code>
 *       parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeDirectoriesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeDirectoriesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeDirectoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDirectoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectoriesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDirectoriesCommand = /** @class */ (function (_super) {
    __extends(DescribeDirectoriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDirectoriesCommand(input) {
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
    DescribeDirectoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DescribeDirectoriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDirectoriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDirectoriesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDirectoriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDirectoriesCommand(input, context);
    };
    DescribeDirectoriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDirectoriesCommand(output, context);
    };
    return DescribeDirectoriesCommand;
}($Command));
export { DescribeDirectoriesCommand };
//# sourceMappingURL=DescribeDirectoriesCommand.js.map