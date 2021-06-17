import { __extends } from "tslib";
import { DescribeSnapshotsRequest, DescribeSnapshotsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeSnapshotsCommand, serializeAws_json1_1DescribeSnapshotsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Obtains information about the directory snapshots that belong to this account.</p>
 *          <p>This operation supports pagination with the use of the <i>NextToken</i> request and
 *          response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i>
 *          member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to
 *          retrieve the next set of items.</p>
 *          <p>You can also specify a maximum number of return results with the <i>Limit</i>
 *          parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeSnapshotsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeSnapshotsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSnapshotsCommand = /** @class */ (function (_super) {
    __extends(DescribeSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSnapshotsCommand(input) {
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
    DescribeSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DescribeSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSnapshotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSnapshotsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSnapshotsCommand(input, context);
    };
    DescribeSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSnapshotsCommand(output, context);
    };
    return DescribeSnapshotsCommand;
}($Command));
export { DescribeSnapshotsCommand };
//# sourceMappingURL=DescribeSnapshotsCommand.js.map