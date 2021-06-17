import { __extends } from "tslib";
import { DescribeHomeRegionControlsRequest, DescribeHomeRegionControlsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeHomeRegionControlsCommand, serializeAws_json1_1DescribeHomeRegionControlsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code>
 *       fields.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, DescribeHomeRegionControlsCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, DescribeHomeRegionControlsCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * const client = new MigrationHubConfigClient(config);
 * const command = new DescribeHomeRegionControlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHomeRegionControlsCommandInput} for command's `input` shape.
 * @see {@link DescribeHomeRegionControlsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHomeRegionControlsCommand = /** @class */ (function (_super) {
    __extends(DescribeHomeRegionControlsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHomeRegionControlsCommand(input) {
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
    DescribeHomeRegionControlsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubConfigClient";
        var commandName = "DescribeHomeRegionControlsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHomeRegionControlsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeHomeRegionControlsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHomeRegionControlsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeHomeRegionControlsCommand(input, context);
    };
    DescribeHomeRegionControlsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeHomeRegionControlsCommand(output, context);
    };
    return DescribeHomeRegionControlsCommand;
}($Command));
export { DescribeHomeRegionControlsCommand };
//# sourceMappingURL=DescribeHomeRegionControlsCommand.js.map