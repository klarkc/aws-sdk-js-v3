import { __extends } from "tslib";
import { GetReportGroupTrendInput, GetReportGroupTrendOutput } from "../models/models_0";
import { deserializeAws_json1_1GetReportGroupTrendCommand, serializeAws_json1_1GetReportGroupTrendCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Analyzes and accumulates test report values for the specified test reports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, GetReportGroupTrendCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, GetReportGroupTrendCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new GetReportGroupTrendCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReportGroupTrendCommandInput} for command's `input` shape.
 * @see {@link GetReportGroupTrendCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetReportGroupTrendCommand = /** @class */ (function (_super) {
    __extends(GetReportGroupTrendCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetReportGroupTrendCommand(input) {
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
    GetReportGroupTrendCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "GetReportGroupTrendCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetReportGroupTrendInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetReportGroupTrendOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetReportGroupTrendCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetReportGroupTrendCommand(input, context);
    };
    GetReportGroupTrendCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetReportGroupTrendCommand(output, context);
    };
    return GetReportGroupTrendCommand;
}($Command));
export { GetReportGroupTrendCommand };
//# sourceMappingURL=GetReportGroupTrendCommand.js.map