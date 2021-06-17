import { __extends } from "tslib";
import { DescribeReportCreationInput, DescribeReportCreationOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeReportCreationCommand, serializeAws_json1_1DescribeReportCreationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the status of the <code>StartReportCreation</code> operation. </p>
 *         <p>You can call this operation only from the organization's
 *     management account and from the us-east-1 Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, DescribeReportCreationCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, DescribeReportCreationCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const command = new DescribeReportCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReportCreationCommandInput} for command's `input` shape.
 * @see {@link DescribeReportCreationCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReportCreationCommand = /** @class */ (function (_super) {
    __extends(DescribeReportCreationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReportCreationCommand(input) {
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
    DescribeReportCreationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsTaggingAPIClient";
        var commandName = "DescribeReportCreationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReportCreationInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReportCreationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReportCreationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeReportCreationCommand(input, context);
    };
    DescribeReportCreationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeReportCreationCommand(output, context);
    };
    return DescribeReportCreationCommand;
}($Command));
export { DescribeReportCreationCommand };
//# sourceMappingURL=DescribeReportCreationCommand.js.map