import { __extends } from "tslib";
import { DescribeApplicationStateRequest, DescribeApplicationStateResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeApplicationStateCommand, serializeAws_json1_1DescribeApplicationStateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the migration status of an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DescribeApplicationStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DescribeApplicationStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new DescribeApplicationStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationStateCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationStateCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeApplicationStateCommand = /** @class */ (function (_super) {
    __extends(DescribeApplicationStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeApplicationStateCommand(input) {
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
    DescribeApplicationStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubClient";
        var commandName = "DescribeApplicationStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeApplicationStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeApplicationStateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeApplicationStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeApplicationStateCommand(input, context);
    };
    DescribeApplicationStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeApplicationStateCommand(output, context);
    };
    return DescribeApplicationStateCommand;
}($Command));
export { DescribeApplicationStateCommand };
//# sourceMappingURL=DescribeApplicationStateCommand.js.map